'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaPaperPlane, FaBuildingColumns, FaLocationDot, FaWhatsapp,  FaCheck } from 'react-icons/fa6';
import { toast } from 'sonner';
import { enquiryAPI } from '@/lib/axios';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { EnquiryFormValues } from 'types/ApplyEnquiryModalTypes';

interface EnquiryFormProps {
  universityName?: string;
  defaultProgram?: string;
  onSubmitted?: () => void;
  formType?: string;
  autoCloseOnSuccess?: boolean;
}

export default function EnquiryForm({ 
  universityName, 
  defaultProgram = 'MBA', 
  onSubmitted, 
  formType = "general", 
  autoCloseOnSuccess = true 
}: EnquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const [program, setProgram] = useState(defaultProgram);
  const [selectedUniversity, setSelectedUniversity] = useState(universityName || '');
  const [city, setCity] = useState('');

  // OTP States
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSending, setOtpSending] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // OTP States
  const [otpStep, setOtpStep] = useState('phone'); // 'phone' or 'otp'
  const [phoneForOTP, setPhoneForOTP] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);


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
        .matches(/^[6-9]\d{9}$/, { message: 'Enter a valid 10-digit mobile number starting with 6-9', excludeEmptyString: true })
        .required('Phone number is required'),
      email: yup.string().trim().email('Please provide a valid email address').required('Email is required'),
      course: yup.string().trim().required('Course is required'),
      university: yup.string().trim().required('University is required'),
      location: yup.string().trim().required('Location is required'),
    });
  }, []);

  const { register, handleSubmit, formState, setValue, getValues, watch } = useForm<EnquiryFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      university: universityName || '',
      course: defaultProgram || program || '',
      location: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  const mobileValue = watch('mobile');

  const onCityChange = (val: string) => {
    setCity(val);
    setValue('location', val, { shouldDirty: true, shouldTouch: true });
  };

  const onUniversityChange = (val: string) => {
    setSelectedUniversity(val);
    setValue('university', val, { shouldDirty: true, shouldTouch: true });
  };

  const onProgramChange = (val: string) => {
    setProgram(val);
    setValue('course', val, { shouldDirty: true, shouldTouch: true });
  };

  // OTP Handlers
  const handleSendOTP = async () => {
    const mobile = getValues('mobile');
    if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
      toast.error('Please enter a valid 10-digit mobile number starting with 6-9');
      return;
    }

    try {
      setOtpSending(true);
      const response = await axios.post('/api/send-otp', { mobile });
      
      if (response.data.success) {
        toast.success('OTP sent successfully!');
        setShowOtpField(true);
        setTimer(60); // 60 seconds cooldown
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to send OTP');
    } finally {
      setOtpSending(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length < 6) {
      toast.error('Please enter a valid 6-digit OTP');
      return;
    }

    try {
      setOtpVerifying(true);
      const mobile = getValues('mobile');
      const response = await axios.post('/api/verify-otp', { mobile, otp });
      
      if (response.data.success) {
        toast.success('Phone number verified successfully!');
        setPhoneVerified(true);
        setShowOtpField(false);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Invalid OTP');
    } finally {
      setOtpVerifying(false);
    }
  };

  const onSubmit = async (values: any) => {
    if (!phoneVerified) {
      toast.error('Please verify your phone number with OTP first');
      return;
    }

    try {
      setLoading(true);
      const requestBody = {
        name: values.name,
        mobile: values.mobile,
        email: values.email,
        location: values.location || city,
        university: values.university || selectedUniversity,
        course: values.course || program,
      };
      
      const response = await enquiryAPI.general(requestBody);

      toast.success('Enquiry submitted successfully!');

      if (autoCloseOnSuccess && onSubmitted) {
        setTimeout(() => {
          onSubmitted();
        }, 800);
      }
    } catch (err: any) {
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
      `Hello Sir/ Madam, I would like to connect with a counselor via WhatsApp.`,
      values.name ? `Name: ${values.name}` : `Name: `,
      values.mobile ? `Mobile: ${values.mobile}` : null,
      values.email ? `Email: ${values.email}` : null,
      (values.location || city) ? `Location: ${values.location || city}` : null,
      (values.university || selectedUniversity) ? `University: ${values.university || selectedUniversity}` : null,
      (values.course || program) ? `Course: ${values.course || program}` : null,
    ].filter(Boolean).join('%0A');

    const url = `https://wa.me/${targetNumber}?text=${composed}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <form className="space-y-4 sm:space-y-5 relative z-[20002]" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('course')} value={program} readOnly />
      <input type="hidden" {...register('university')} value={selectedUniversity} readOnly />
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
            {phoneVerified && <FaCheck className="text-green-500 ml-2" />}
          </Label>
          <div className="relative flex gap-2">
            <div className="relative flex-1">
              <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input 
                id="mobile" 
                maxLength={10} 
                placeholder="10 digit mobile number" 
                className={`pl-10 h-11 sm:h-10 ${phoneVerified ? 'border-green-500 bg-green-50' : ''}`} 
                aria-invalid={!!formState.errors.mobile} 
                {...register('mobile')} 
                disabled={phoneVerified}
              />
              {phoneVerified && (
                <FaCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
              )}
            </div>
            {!phoneVerified && (
              <Button 
                type="button" 
                onClick={handleSendOTP}
                disabled={otpSending || timer > 0 || !/^[6-9]\d{9}$/.test(mobileValue)}
                className="h-11 sm:h-10 bg-blue-600 hover:bg-blue-700 text-white px-4 disabled:bg-blue-400"
              >
                {otpSending ? 'Sending...' : timer > 0 ? `Resend in ${timer}s` : 'Get OTP'}
              </Button>
            )}
          </div>
          {formState.errors.mobile && !phoneVerified && (<p className="text-red-600 text-xs mt-1">{formState.errors.mobile.message}</p>)}
          
          {/* OTP Input Field */}
          {showOtpField && !phoneVerified && (
            <div className="mt-3 space-y-2 animate-in fade-in slide-in-from-top-2">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter 6-digit OTP" 
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="h-11 sm:h-10 text-center tracking-widest font-bold flex-1"
                />
                <Button 
                  type="button" 
                  onClick={handleVerifyOTP}
                  disabled={otpVerifying || otp.length < 6}
                  className="h-11 sm:h-10 bg-green-600 hover:bg-green-700 text-white px-6 disabled:bg-green-400"
                >
                  {otpVerifying ? 'Verifying...' : 'Verify'}
                </Button>
              </div>
              {timer === 0 && (
                <Button 
                  type="button" 
                  variant="link"
                  onClick={handleSendOTP}
                  className="text-xs h-auto p-0"
                >
                  Resend OTP
                </Button>
              )}
            </div>
          )}
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
            <FaLocationDot className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
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
            <FaBuildingColumns className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
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
            {formState.errors.course && (
              <p className="text-red-600 text-xs mt-1">{formState.errors.course.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          type="submit"
          disabled={loading || !phoneVerified}
          className="flex-1 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] hover:from-[#00d4c4] hover:to-[#00ffe0] font-bold relative z-[20002] py-3 sm:py-2.5 text-sm sm:text-base disabled:opacity-50"
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