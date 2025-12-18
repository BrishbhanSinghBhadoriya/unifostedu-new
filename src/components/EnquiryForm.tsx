'use client';

import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaPaperPlane, FaUniversity, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { toast } from 'sonner';
import { enquiryAPI } from '@/lib/axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface EnquiryFormProps {

  universityName?: string;
  defaultProgram?: string;
  onSubmitted?: () => void;
  formType?: string;
  autoCloseOnSuccess?: boolean;

}
export default function EnquiryForm({ universityName, defaultProgram = 'MBA', onSubmitted, formType = "general", autoCloseOnSuccess = true }: EnquiryFormProps) {
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
    return yup.object({
      name: yup.string().trim().required('Name is required').min(2, 'Name must be at least 2 characters long'),
      mobile: yup
        .string()
        .matches(/^\d{10}$/, { message: 'Enter 10 digit phone number', excludeEmptyString: true })
        .required('Phone number is required'),
      email: yup.string().trim().email('Please provide a valid email address').required('Email is required'),
      Course: yup.string().trim().required('Course is required'),
      Univeristy: yup.string().trim().required('University is required'),
      location: yup.string().trim().required('Location is required'),
    });
  }, []);

  const { register, handleSubmit, formState, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      Univeristy: universityName || '',
      Course: defaultProgram || program || '',
      location: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  // Sync local select states into RHF values
  const onCityChange = (val) => {
    setCity(val);
    setValue('location', val, { shouldDirty: true, shouldTouch: true });
  };
  const onUniversityChange = (val) => {
    setSelectedUniversity(val);
    setValue('Univeristy', val, { shouldDirty: true, shouldTouch: true });
  };
  const onProgramChange = (val) => {
    setProgram(val);
    setValue('Course', val, { shouldDirty: true, shouldTouch: true });
  };

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const requestBody = {
        name: values.name,
        mobile: values.mobile,
        email: values.email,
        location: values.location || city,
        university: values.Univeristy || selectedUniversity,
        course: values.Course || program,
      };
      const response = await enquiryAPI.general(requestBody);
     

      toast.success('Enquiry submitted successfully!');
      
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

      toast.error(parsedMessage || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppConnect = () => {
    const values = getValues();
    const targetNumber = '917042646766';
    const composed = [
      `Hello Unifost, I would like to connect with a counselor via WhatsApp.`,
      values.name ? `Name: ${values.name}` : null,
      values.mobile ? `Mobile: ${values.mobile}` : null,
      values.email ? `Email: ${values.email}` : null,
      (values.location || city) ? `Location: ${values.location || city}` : null,
      (values.Univeristy || selectedUniversity) ? `University: ${values.Univeristy || selectedUniversity}` : null,
      (values.Course || program) ? `Course: ${values.Course || program}` : null,
    ].filter(Boolean).join('%0A');

    const url = `https://wa.me/${targetNumber}?text=${composed}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <form className="space-y-4 sm:space-y-5 relative z-[20002]" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('Course')} value={program} readOnly />
      <input type="hidden" {...register('Univeristy')} value={selectedUniversity} readOnly />
      <input type="hidden" {...register('location')} value={city} readOnly />
      
      {universityName && (
        <div className="rounded-lg p-3 sm:p-4 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] text-[#001e3c]">
          <p className="text-xs sm:text-sm">University</p>
          <p className="font-semibold text-base sm:text-lg leading-tight">{universityName}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="flex items-center gap-1">
            Name <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="name" placeholder="Your name" className="pl-10 h-11 sm:h-10" aria-invalid={!!formState.errors.name} {...register('name')} />
            {formState.errors.name && (<p className="text-red-600 text-xs mt-1">{formState.errors.name.message}</p>)}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="mobile" className="flex items-center gap-1">
            Mobile <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="mobile" placeholder="10 digit mobile number" className="pl-10 h-11 sm:h-10" aria-invalid={!!formState.errors.mobile} {...register('mobile')} />
            {formState.errors.mobile && (<p className="text-red-600 text-xs mt-1">{formState.errors.mobile.message}</p>)}
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
        
        <div className="space-y-1.5">
          <Label htmlFor="location" className="flex items-center gap-1">
            Location <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <Select value={city} onValueChange={onCityChange}>
              <SelectTrigger className="pl-10 h-11 sm:h-10">
                <SelectValue placeholder="Select your location" />
              </SelectTrigger>
              <SelectContent portalled={false} className="z-[30000] max-h-60 overflow-auto">
                {popularCities.map((cityName) => (
                  <SelectItem key={cityName} value={cityName}>{cityName}</SelectItem>
                ))}
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {formState.errors.location && (<p className="text-red-600 text-xs mt-1">{formState.errors.location.message}</p>)}
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
            {formState.errors.Univeristy && (<p className="text-red-600 text-xs mt-1">{formState.errors.Univeristy.message}</p>)}
          </div>
        </div>
        
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1">
            Course <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <Select value={program} onValueChange={onProgramChange}>
              <SelectTrigger className="pl-10 h-11 sm:h-10">
                <SelectValue placeholder="Select course" />
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
            {formState.errors.Course && (
              <p className="text-red-600 text-xs mt-1">{formState.errors.Course.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          type="submit" 
          disabled={loading} 
          className="flex-1 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] hover:from-[#00d4c4] hover:to-[#00ffe0] font-bold relative z-[20002] py-3 sm:py-2.5 text-sm sm:text-base"
        >
          <FaPaperPlane className="mr-2" />
          {loading ? 'Submitting...' : 'Submit Enquiry'}
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
