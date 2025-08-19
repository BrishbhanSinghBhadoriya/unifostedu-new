'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';

interface EnquiryFormProps {
  universityName?: string;
  defaultProgram?: string;
  onSubmitted?: () => void;
}

export default function EnquiryForm({ universityName, defaultProgram = 'MBA', onSubmitted }: EnquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const [program, setProgram] = useState<string>(defaultProgram);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      setLoading(true);
      // Simulate submit
      await new Promise((r) => setTimeout(r, 900));
      toast.success('Enquiry submitted successfully!');
      onSubmitted?.();
      (form.querySelector('#message') as HTMLTextAreaElement | null)?.blur();
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {universityName && (
        <div className="rounded-lg p-4 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] text-[#001e3c]">
          <p className="text-sm">University</p>
          <p className="font-semibold text-lg leading-tight">{universityName}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="name" name="name" placeholder="Your name" required className="pl-10" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="phone" name="phone" placeholder="Your phone" required className="pl-10" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="email" name="email" type="email" placeholder="you@example.com" required className="pl-10" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label>Program</Label>
          <div className="relative">
            <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Select value={program} onValueChange={setProgram} name="program">
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Select program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MBA">MBA</SelectItem>
                <SelectItem value="MCA">MCA</SelectItem>
                <SelectItem value="MCOM">M.Com</SelectItem>
                <SelectItem value="MA">MA</SelectItem>
                <SelectItem value="BBA">BBA</SelectItem>
                <SelectItem value="BCA">BCA</SelectItem>
                <SelectItem value="BCOM">B.Com</SelectItem>
                <SelectItem value="BA">BA</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us more about your interest" rows={4} />
        <p className="text-xs text-gray-500">We’ll contact you within 24 hours.</p>
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-[#001e3c] hover:bg-[#003b6c] text-white">
        <FaPaperPlane className="mr-2" />
        {loading ? 'Submitting...' : 'Submit Enquiry'}
      </Button>
    </form>
  );
}


