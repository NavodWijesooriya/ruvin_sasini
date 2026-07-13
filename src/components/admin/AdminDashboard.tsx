"use client";

import { useState, useEffect } from 'react';
import { getResponses } from '@/lib/db';
import { GuestResponse, MessageType } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { personalizeGuestMessage } from '@/ai/flows/personalize-guest-messages-flow';
import { Loader2, Sparkles, MessageSquare, Download, Users, CheckSquare, XSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const [responses, setResponses] = useState<GuestResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    let isActive = true;

    const loadResponses = async () => {
      try {
        const loadedResponses = await getResponses();

        if (isActive) {
          setResponses(loadedResponses);
        }
      } catch (error) {
        toast({
          title: 'Unable to load RSVPs',
          description: error instanceof Error ? error.message : 'There was a problem loading guest responses.',
          variant: 'destructive',
        });
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    void loadResponses();

    return () => {
      isActive = false;
    };
  }, []);

  const handleGenerateMessage = async (guest: GuestResponse, type: MessageType) => {
    setIsGenerating(`${guest.id}-${type}`);
    try {
      const result = await personalizeGuestMessage({
        guestName: guest.guestName,
        rsvpStatus: guest.rsvpStatus,
        messageType: type,
        additionalContext: "The wedding is in Florence, Italy at Villa di Maiano.",
      });
      setSelectedMessage(result.personalizedMessage);
    } catch (error) {
      toast({
        title: "AI Generation Failed",
        description: "There was an error generating the personalized message.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(null);
    }
  };

  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + ["Name,Status,Submitted"].join(",") + "\n"
      + responses.map(r => [
        r.guestName, r.rsvpStatus, r.submittedAt
      ].join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "aethel_rsvp_export.csv");
    document.body.appendChild(link);
    link.click();
  };

  const stats = {
    total: responses.length,
    confirmed: responses.filter(r => r.rsvpStatus === 'Confirmed').length,
    declined: responses.filter(r => r.rsvpStatus === 'Declined').length,
  };

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-4xl text-primary">Organizer Dashboard</h1>
          <p className="text-muted-foreground">Manage your guests and track wedding headcounts.</p>
        </div>
        <Button onClick={exportData} className="bg-accent">
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Total Responses
            </CardDescription>
            <CardTitle className="text-3xl">{stats.total}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2 text-green-600">
              <CheckSquare className="w-4 h-4" /> Confirmed
            </CardDescription>
            <CardTitle className="text-3xl text-green-600">{stats.confirmed}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2 text-red-600">
              <XSquare className="w-4 h-4" /> Declined
            </CardDescription>
            <CardTitle className="text-3xl text-red-600">{stats.declined}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="guests" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="guests">Guest List</TabsTrigger>
          <TabsTrigger value="ai-tools">AI Messaging</TabsTrigger>
        </TabsList>

        <TabsContent value="guests" className="border rounded-xl bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Guest Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {responses.map((guest) => (
                <TableRow key={guest.id}>
                  <TableCell className="font-medium">
                    {guest.guestName}
                  </TableCell>
                  <TableCell>
                    <Badge variant={guest.rsvpStatus === 'Confirmed' ? 'default' : guest.rsvpStatus === 'Declined' ? 'destructive' : 'secondary'}>
                      {guest.rsvpStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(guest.submittedAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" onClick={() => handleGenerateMessage(guest, 'thank_you')}>
                          <Sparkles className="w-4 h-4 text-accent mr-1" />
                          AI Msg
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-xl">
                        <DialogHeader>
                          <DialogTitle className="font-headline text-2xl">Personalized for {guest.guestName}</DialogTitle>
                        </DialogHeader>
                        <div className="py-6">
                          {isGenerating?.startsWith(guest.id) ? (
                            <div className="flex flex-col items-center justify-center gap-4 h-40">
                              <Loader2 className="w-8 h-8 animate-spin text-accent" />
                              <p className="text-muted-foreground italic">Drafting with AI magic...</p>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <div className="bg-muted p-6 rounded-lg font-serif italic text-lg whitespace-pre-wrap border border-accent/10">
                                {selectedMessage}
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => handleGenerateMessage(guest, 'arrival_instructions')}>
                                  Switch to Arrival Info
                                </Button>
                                <Button onClick={() => {
                                  navigator.clipboard.writeText(selectedMessage || "");
                                  toast({ title: "Copied!", description: "Message copied to clipboard." });
                                }}>
                                  Copy Text
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
              {responses.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-12 text-muted-foreground">
                    No RSVP responses yet. Send out the invitations!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="ai-tools">
          <Card>
            <CardHeader>
              <CardTitle>Global AI Communication</CardTitle>
              <CardDescription>Select groups of guests to generate mass communication drafts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">This feature allows you to quickly generate customized arrival instructions or thank you notes using the guest data collected.</p>
              <div className="flex gap-4">
                <Button variant="outline">Select All "Confirmed"</Button>
              </div>
              <div className="p-8 border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground italic">
                Advanced mass messaging coming soon. Use individual "AI Msg" tools for now.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
