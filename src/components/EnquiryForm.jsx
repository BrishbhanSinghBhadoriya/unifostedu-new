'use client';

import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaPaperPlane, FaUniversity, FaMapMarkerAlt, FaComments, FaWhatsapp } from 'react-icons/fa';
import { toast } from 'sonner';
import { enquiryAPI } from '@/lib/axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function EnquiryForm({ universityName, defaultProgram = 'MBA', onSubmitted, formType = "general", autoCloseOnSuccess = true }) {
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

  const allUniversities = useMemo(() => {
    let list = [...universities];
    if (universityName && !list.includes(universityName)) {
      list = [universityName, ...list];
    }
    return list;
  }, [universities, universityName]);

  // Popular cities for dropdown
  const popularCities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 
    'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow',
    'Chandigarh', 'Bhopal', 'Indore', 'Nagpur', 'Surat',
    'Kochi', 'Coimbatore', 'Visakhapatnam', 'Patna', 'Bhubaneswar'
  ];

  const schema = useMemo(() => {
    const base = {
      name: yup.string().trim().required('Name is required').min(2, 'Name must be at least 2 characters long'),
      email: yup.string().trim().email('Please provide a valid email address').optional(),
      // phone is required by default
      phone: yup
        .string()
        .matches(/^\d{10}$/, { message: 'Enter 10 digit phone number', excludeEmptyString: true })
        .required('Phone number is required'),
      // optional by default; required in specific form types
      city: yup.string().trim().optional(),
      university: yup.string().trim().optional(),
      program: yup.string().trim().optional(),
      message: yup.string().trim(),
      qualification: yup.string().trim().optional(),
      otherQualification: yup.string().trim().when('qualification', {
        is: 'Other',
        then: (schema) => schema.required('Please specify your qualification'),
        otherwise: (schema) => schema.optional(),
      }),
      experience: yup.string().trim().optional(), // Experience is optional
      preferredDate: yup.string().trim().optional(),
      preferredTime: yup.string().trim().optional(),
      address: yup.string().trim().optional(),
    };

    if (formType === 'videoCall') {
      base.preferredDate = yup.string().trim().required('Preferred date is required');
      base.preferredTime = yup.string().trim().required('Preferred time is required');
      // phone is required for video call
      base.phone = yup.string().matches(/^\d{10}$/, { message: 'Enter 10 digit phone number', excludeEmptyString: true }).required('Phone number is required');
      // Qualification is required for videoCall
      base.qualification = yup.string().trim().required('Qualification is required');
      base.city = yup.string().trim().required('City is required');
      base.university = yup.string().trim().required('University is required');
      base.program = yup.string().trim().required('Program is required');
    }
    if (formType === 'homeDemo') {
      base.preferredDate = yup.string().trim().required('Preferred date is required');
      base.preferredTime = yup.string().trim().required('Preferred time is required');
      base.address = yup.string().trim().required('Full address is required');
      // phone remains required
      // Qualification is required for homeDemo
      base.qualification = yup.string().trim().required('Qualification is required');
      base.city = yup.string().trim().required('City is required');
      base.university = yup.string().trim().required('University is required');
      base.program = yup.string().trim().required('Program is required');
    }

    return yup.object(base);
  }, [formType]);

  const { register, handleSubmit, formState, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      city: '',
      university: universityName || '',
      program: defaultProgram || program || '',
      message: '',
      qualification: '',
      otherQualification: '',
      experience: '',
      preferredDate: '',
      preferredTime: '',
      address: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  // Sync local select states into RHF values
  const onCityChange = (val) => {
    setCity(val);
    setValue('city', val, { shouldDirty: true, shouldTouch: true });
  };
  const onUniversityChange = (val) => {
    setSelectedUniversity(val);
    setValue('university', val, { shouldDirty: true, shouldTouch: true });
  };
  const onProgramChange = (val) => {
    setProgram(val);
    setValue('program', val, { shouldDirty: true, shouldTouch: true });
  };

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      if (formType === 'videoCall') {
        const requestBody = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          city: city || values.city || '',
          university: selectedUniversity || values.university || '',
          course: program || values.program || '',
          preferredDate: values.preferredDate || '',
          preferredTime: values.preferredTime || '',
          message: values.message || ''
        };
        await enquiryAPI.videoCall(requestBody);
        toast.success('Video call booked successfully!');
      } else if (formType === 'homeDemo') {
        const requestBody = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          city: city || values.city || '',
          university: selectedUniversity || values.university || '',
          program: program || values.program || '',
          preferredDate: values.preferredDate || '',
          preferredTime: values.preferredTime || '',
          fullAddress: values.address || '',
          message: values.message || ''
        };
        await enquiryAPI.homeDemo(requestBody);
        toast.success('Home demo scheduled successfully!');
      } else {
        const requestBody = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          city: city || values.city || '',
          course: program || values.program || '',
          university: selectedUniversity || values.university || '',
          qualification: values.qualification === 'Other' ? values.otherQualification || '' : values.qualification || '',
          experience: values.experience || '',
          message: values.message || ''
        };
        await enquiryAPI.general(requestBody);
        toast.success('Enquiry submitted successfully!');
      }
      if (autoCloseOnSuccess && onSubmitted) {
        setTimeout(() => {
          onSubmitted();
        }, 800);
      }
    } catch (err) {
      const data = err?.response?.data;
      const parsedMessage =
        (data && typeof data === 'object' && (data.message || data.error)) ||
        (Array.isArray(data?.errors)
          ? (typeof data.errors[0] === 'string'
              ? data.errors[0]
              : (data.errors[0]?.msg || data.errors[0]?.message))
          : undefined) ||
        (typeof data === 'string' ? data : undefined) ||
        err?.message;

      const errorMessage = (formType === 'videoCall' || formType === 'getStarted')
        ? (parsedMessage || 'Something went wrong. Please try again.')
        : 'Something went wrong. Please try again.';

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppConnect = () => {
    const values = getValues();
    const targetNumber = '919354735410';
    const typeLabel = formType === 'videoCall' ? 'Video Call' : formType === 'homeDemo' ? 'Home Demo' : 'General Enquiry';
    const composed = [
      `Hello Unifost, I would like to connect with a counselor via WhatsApp.`,
      `Type: ${typeLabel}`,
      values.name ? `Name: ${values.name}` : null,
      values.phone ? `Phone: ${values.phone}` : null,
      (city || values.city) ? `City: ${city || values.city}` : null,
      (selectedUniversity || values.university) ? `University: ${selectedUniversity || values.university}` : null,
      (program || values.program) ? `Program: ${program || values.program}` : null,
      values.preferredDate ? `Preferred Date: ${values.preferredDate}` : null,
      values.preferredTime ? `Preferred Time: ${values.preferredTime}` : null,
      values.address ? `Address: ${values.address}` : null,
      values.message ? `Message: ${values.message}` : null,
    ].filter(Boolean).join('%0A');

    const url = `https://wa.me/${targetNumber}?text=${composed}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <form className="space-y-4 sm:space-y-5 relative z-[20002]" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('program')} value={program} readOnly />
      <input type="hidden" {...register('university')} value={selectedUniversity} readOnly />
      <input type="hidden" value={formType} readOnly />
      <input type="hidden" {...register('city')} value={city} readOnly />
      
      {universityName && (
        <div className="rounded-lg p-3 sm:p-4 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] text-[#001e3c]">
          <p className="text-xs sm:text-sm">University</p>
          <p className="font-semibold text-base sm:text-lg leading-tight">{universityName}</p>
          </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="flex items-center gap-1">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="name" placeholder="Your name" className="pl-10 h-11 sm:h-10" aria-invalid={!!formState.errors.name} {...register('name')} />
            {formState.errors.name && (<p className="text-red-600 text-xs mt-1">{formState.errors.name.message}</p>)}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="flex items-center gap-1">
            Phone <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="phone" placeholder="Your phone" className="pl-10 h-11 sm:h-10" aria-invalid={!!formState.errors.phone} {...register('phone')} />
            {formState.errors.phone && (<p className="text-red-600 text-xs mt-1">{formState.errors.phone.message}</p>)}
          </div>
        </div>
                </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="flex items-center gap-1">
            Email <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="email" type="email" placeholder="you@example.com" className="pl-10 h-11 sm:h-10" aria-invalid={!!formState.errors.email} {...register('email')} />
            {formState.errors.email && (<p className="text-red-600 text-xs mt-1">{formState.errors.email.message}</p>)}
          </div>
        </div>
        
        {/* City Field - Always shown */}
        <div className="space-y-1.5">
          <Label htmlFor="city" className="flex items-center gap-1">
            City <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <Select value={city} onValueChange={onCityChange}>
              <SelectTrigger className="pl-10 h-11 sm:h-10">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent portalled={false} className="z-[30000] max-h-60 overflow-auto">
                {popularCities.map((city) => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
                <SelectItem value="other">Other (please specify in message)</SelectItem>
              </SelectContent>
            </Select>
            {formState.errors.city && (<p className="text-red-600 text-xs mt-1">{formState.errors.city.message}</p>)}
                        </div>
                      </div>
                    </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1">
            University <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaUniversity className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <Select value={selectedUniversity} onValueChange={onUniversityChange}>
              <SelectTrigger className="pl-10 h-11 sm:h-10">
                <SelectValue placeholder="Select university" />
              </SelectTrigger>
              <SelectContent portalled={false} className="z-[30000] max-h-60 overflow-auto">
                {allUniversities.map((u) => (
                  <SelectItem key={u} value={u}>{u}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formState.errors.university && (<p className="text-red-600 text-xs mt-1">{formState.errors.university.message}</p>)}

              </div>
        </div>
        
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1">
            Program <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <Select value={program} onValueChange={onProgramChange}>
              <SelectTrigger className="pl-10 h-11 sm:h-10">
                <SelectValue placeholder="Select program" />
              </SelectTrigger>
              <SelectContent portalled={false} className="z-[30000] max-h-60 overflow-auto">
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
            {formState.errors.program && (
              <p className="text-red-600 text-xs mt-1">{formState.errors.program.message}</p>
            )}
                      </div>
                    </div>
                  </div>

      {/* Additional fields for specific form types */}
      {(formType === 'getStarted' || formType === 'general') && (
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="qualification" className="flex items-center gap-1">
              Highest Qualification <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <Select value={getValues('qualification') || ''} onValueChange={(value) => setValue('qualification', value, { shouldValidate: true })}>
                <SelectTrigger className="pl-10 h-11 sm:h-10">
                  <SelectValue placeholder="Select your qualification" />
                </SelectTrigger>
                <SelectContent portalled={false} className="z-[30000] max-h-60 overflow-auto">
                  <SelectItem value="12th">12th (Senior Secondary)</SelectItem>
                  <SelectItem value="Diploma">Diploma</SelectItem>
                  <SelectItem value="Graduate">Graduate (Bachelor's Degree)</SelectItem>
                  <SelectItem value="Post Graduate">Post Graduate (Master's Degree)</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
                    </div>
            {formState.errors.qualification && (
              <p className="text-red-600 text-xs mt-1">{formState.errors.qualification.message}</p>
            )}
          </div>

          {/* Show input field when "Other" is selected */}
          {getValues('qualification') === 'Other' && (
            <div className="space-y-1.5">
              <Label htmlFor="otherQualification" className="flex items-center gap-1">
                Specify Qualification <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="otherQualification" 
                placeholder="Please specify your qualification" 
                className="w-full" 
                aria-invalid={!!formState.errors.otherQualification}
                {...register('otherQualification')} 
              />
              {formState.errors.otherQualification && (
                <p className="text-red-600 text-xs mt-1">{formState.errors.otherQualification.message}</p>
              )}
                    </div>
                  )}

          <div className="space-y-1.5">
            <Label htmlFor="experience">Experience (Optional)</Label>
            <Textarea id="experience" placeholder="Describe your relevant experience (optional)" rows={3} {...register('experience')} />
          </div>
        </div>
      )}

      {/* Qualification field for videoCall and homeDemo */}
      {(formType === 'videoCall' || formType === 'homeDemo') && (
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="qualification" className="flex items-center gap-1">
              Highest Qualification <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <Select value={getValues('qualification') || ''} onValueChange={(value) => setValue('qualification', value, { shouldValidate: true })}>
                <SelectTrigger className="pl-10 h-11 sm:h-10">
                  <SelectValue placeholder="Select your qualification" />
                </SelectTrigger>
                <SelectContent portalled={false} className="z-[30000] max-h-60 overflow-auto">
                  <SelectItem value="12th">12th (Senior Secondary)</SelectItem>
                  <SelectItem value="Graduate">Graduate (Bachelor's Degree)</SelectItem>
                  <SelectItem value="Post Graduate">Post Graduate (Master's Degree)</SelectItem>
                  <SelectItem value="Diploma">Diploma</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {formState.errors.qualification && (
              <p className="text-red-600 text-xs mt-1">{formState.errors.qualification.message}</p>
            )}
          </div>
        </div>
      )}
      {formType === "videoCall" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="preferredDate" className="flex items-center gap-1">
              Preferred Date <span className="text-red-500">*</span>
            </Label>
            <Input id="preferredDate" type="date" className="w-full h-11 sm:h-10" aria-invalid={!!formState.errors.preferredDate} {...register('preferredDate')} />
            {formState.errors.preferredDate && (<p className="text-red-600 text-xs mt-1">{formState.errors.preferredDate.message}</p>)}
                  </div>
          <div className="space-y-1.5">
            <Label htmlFor="preferredTime" className="flex items-center gap-1">
              Preferred Time <span className="text-red-500">*</span>
            </Label>
            <Input id="preferredTime" type="time" className="w-full h-11 sm:h-10" aria-invalid={!!formState.errors.preferredTime} {...register('preferredTime')} />
            {formState.errors.preferredTime && (<p className="text-red-600 text-xs mt-1">{formState.errors.preferredTime.message}</p>)}
          </div>
        </div>
      )}

      {formType === "homeDemo" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="preferredDate" className="flex items-center gap-1">
              Preferred Date <span className="text-red-500">*</span>
            </Label>
            <Input id="preferredDate" type="date" className="w-full h-11 sm:h-10" aria-invalid={!!formState.errors.preferredDate} {...register('preferredDate')} />
            {formState.errors.preferredDate && (<p className="text-red-600 text-xs mt-1">{formState.errors.preferredDate.message}</p>)}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="preferredTime" className="flex items-center gap-1">
              Preferred Time <span className="text-red-500">*</span>
            </Label>
            <Input id="preferredTime" type="time" className="w-full h-11 sm:h-10" aria-invalid={!!formState.errors.preferredTime} {...register('preferredTime')} />
            {formState.errors.preferredTime && (<p className="text-red-600 text-xs mt-1">{formState.errors.preferredTime.message}</p>)}
          </div>
          <div className="sm:col-span-2 space-y-1.5">
            <Label htmlFor="address" className="flex items-center gap-1">
              Full Address <span className="text-red-500">*</span>
            </Label>
            <Textarea id="address" placeholder="Please provide your complete address for the home demo" rows={3} aria-invalid={!!formState.errors.address} {...register('address')} />
            {formState.errors.address && (<p className="text-red-600 text-xs mt-1">{formState.errors.address.message}</p>)}
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea 
          id="message" 
          placeholder={
            formType === "homeDemo" ? "Any specific requirements for the home demo" :
            formType === "videoCall" ? "Any specific topics you'd like to discuss" :
            "Tell us more about your interest (optional)"
          } 
          rows={4} 
          {...register('message')}
        />
        <p className="text-xs text-gray-500">We'll contact you within 24 hours.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          type="submit" 
          disabled={loading} 
          className="flex-1 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] hover:from-[#00d4c4] hover:to-[#00ffe0] font-bold relative z-[20002] py-3 sm:py-2.5 text-sm sm:text-base"
        >
          <FaPaperPlane className="mr-2" />
          {loading ? 'Submitting...' : 
            formType === "homeDemo" ? 'Schedule Home Demo' :
            formType === "videoCall" ? 'Book Video Call' :
            'Submit Enquiry'
          }
        </Button>

        <Button
          type="button"
          onClick={handleWhatsAppConnect}
          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 font-semibold py-3 sm:py-2.5 text-sm sm:text-base"
        >
          <FaWhatsapp className="mr-2" />
          Connect Counselor
        </Button>
    </div>
    </form>
  );
}