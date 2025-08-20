'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaPaperPlane, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function EnquiryForm({ universityName, defaultProgram = 'MBA', onSubmitted, formType = "general" }) {
  const [loading, setLoading] = useState(false);
  const [program, setProgram] = useState(defaultProgram);
  const [selectedUniversity, setSelectedUniversity] = useState(universityName || '');
  const [city, setCity] = useState('');

  const universities = [
    'Amity University Online',
    'Manipal University Online',
    'Lovely Professional University Online',
    'University of Petroleum and Energy Studies Online',
    'Narsee Monjee Institute of Management Studies Online',
    'Sharda University Online',
    'Dr. DY Patil Online',
    'Jain University Online',
    'Chandigarh University Online',
    'OP Jindal University',
    'Shoolini University Online',
    'Vivekananda Global University Online',
    'UPES Online',
    'NMIMS (Narsee Monjee)'
  ];

  // Popular cities for dropdown
  const popularCities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 
    'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow',
    'Chandigarh', 'Bhopal', 'Indore', 'Nagpur', 'Surat',
    'Kochi', 'Coimbatore', 'Visakhapatnam', 'Patna', 'Bhubaneswar'
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    
    try {
      setLoading(true);
      // Simulate submit
      await new Promise((r) => setTimeout(r, 900));
      toast.success('Enquiry submitted successfully!');
      onSubmitted && onSubmitted();
      const msg = form.querySelector('#message');
      if (msg && typeof msg.blur === 'function') msg.blur();
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input type="hidden" name="program" value={program} />
      <input type="hidden" name="university" value={selectedUniversity} />
      <input type="hidden" name="formType" value={formType} />
      
      {universityName && (
        <div className="rounded-lg p-4 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] text-[#001e3c]">
          <p className="text-sm">University</p>
          <p className="font-semibold text-lg leading-tight">{universityName}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="name" name="name" placeholder="Your name" required className="pl-10" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone *</Label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="phone" name="phone" placeholder="Your phone" required className="pl-10" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="email" name="email" type="email" placeholder="you@example.com" required className="pl-10" />
          </div>
        </div>
        
        {/* City Field - Always shown */}
        <div className="space-y-1.5">
          <Label htmlFor="city">City *</Label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Select name="city" value={city} onValueChange={setCity} required>
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent className="z-[1000] max-h-60 overflow-auto">
                {popularCities.map((city) => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
                <SelectItem value="other">Other (please specify in message)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>University</Label>
          <div className="relative">
            <FaUniversity className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Select university" />
              </SelectTrigger>
              <SelectContent className="z-[1000] max-h-60 overflow-auto">
                {universities.map((u) => (
                  <SelectItem key={u} value={u}>{u}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-1.5">
          <Label>Program</Label>
          <div className="relative">
            <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Select value={program} onValueChange={setProgram}>
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Select program" />
              </SelectTrigger>
              <SelectContent className="z-[1000] max-h-60 overflow-auto">
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

      {/* Additional fields for specific form types */}
      {formType === "videoCall" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="preferredDate">Preferred Date</Label>
            <Input 
              id="preferredDate" 
              name="preferredDate" 
              type="date" 
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="preferredTime">Preferred Time</Label>
            <Input 
              id="preferredTime" 
              name="preferredTime" 
              type="time" 
              className="w-full"
            />
          </div>
        </div>
      )}

      {formType === "homeDemo" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="preferredDate">Preferred Date</Label>
            <Input 
              id="preferredDate" 
              name="preferredDate" 
              type="date" 
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="preferredTime">Preferred Time</Label>
            <Input 
              id="preferredTime" 
              name="preferredTime" 
              type="time" 
              className="w-full"
            />
          </div>
          <div className="md:col-span-2 space-y-1.5">
            <Label htmlFor="address">Full Address</Label>
            <Textarea 
              id="address" 
              name="address" 
              placeholder="Please provide your complete address for the home demo" 
              rows={3}
            />
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder={
            formType === "homeDemo" ? "Any specific requirements for the home demo" :
            formType === "videoCall" ? "Any specific topics you'd like to discuss" :
            "Tell us more about your interest"
          } 
          rows={4} 
        />
        <p className="text-xs text-gray-500">We'll contact you within 24 hours.</p>
      </div>

      <Button 
        type="submit" 
        disabled={loading} 
        className="w-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] hover:from-[#00d4c4] hover:to-[#00ffe0] font-bold"
      >
        <FaPaperPlane className="mr-2" />
        {loading ? 'Submitting...' : 
          formType === "homeDemo" ? 'Schedule Home Demo' :
          formType === "videoCall" ? 'Book Video Call' :
          'Submit Enquiry'
        }
      </Button>
    </form>
  );
}