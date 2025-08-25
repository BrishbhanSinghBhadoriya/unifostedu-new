import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FaSearch,
  
  FaGraduationCap,
  
  FaClock,
  FaMoneyBillWave,
  FaCheckCircle,
  
  FaUniversity,
  
  FaCalendarAlt
} from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import CourseUniversitiesBrowser from '@/components/CourseUniversitiesBrowser';


const courseData = {
  'mba-online': {
    title: 'MBA Online',
    subtitle: 'Master of Business Administration',
    description: 'Compare India\'s leading UGC-approved MBA programs with flexible schedules and career-focused specializations.',
    duration: '2 Years',
    fee: '₹1.1L - ₹3.5L',
    eligibility: 'Graduation in any discipline with 50% marks',
    features: [
      'Live online classes',
      'Industry expert faculty',
      'Placement assistance',
      'Flexible learning schedule',
      'UGC recognized degree'
    ],
    universities: [
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        NIRF: '29',
        rating: 4.8,
        image: '/images/amity.png',
        specializations: ['General Management', 'Dual Specialization', 'Human Resource Analytics', 'Data Science', 'Business Analytics', 'International Finance', 'Digital Entrepreneurship', 'Digital Marketing Management', 'General Management with optional Specialization'],
        fee: '₹1,99,000 - ₹2,99,000',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Placement Support', 'Industry Projects']
      },
      {
        name: 'Manipal University',
        location: 'Jaipur, Rajasthan',
        NIRF: '73',
        rating: 4.6,
        image: '/images/manipal.png',
        specializations: ['Human Resource Management and Analytics', 'Finance and Marketing', 'Marketing and Human Resource Management', 'Business Analytics', 'Digital Marketing', 'Finance', 'Operations', 'International Business'],
        fee: '₹1,75,000 ',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'NMIMS',
        location: 'Mumbai, Maharashtra',
        NIRF: '21',
        rating: 4.7,
        image: '/images/nmims.png',
        specializations: ['Applied Finance', 'Business Administration', 'Business Analytics', 'Digital Marketing', 'Finance', 'Marketing', 'Operations', 'Human Resources'],
        fee: '₹1,96,000',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Placement Assistance', 'Quality Education']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        NIRF: '77',
        rating: 4.4,
        image: '/images/jain.png',
        specializations: ['MBA in Finance', 'MBA in Digital Marketing', 'MBA in Entrepreneurship', 'MBA in HR', 'MBA in Marketing'],
        fee: '₹1,96,000 - ₹2,16,000',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Projects', 'Career Support']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        NIRF: '38',
        rating: 4.5,
        image: '/images/lpu.png',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Information Technology', 'Operations Management'],
        fee: ' ₹2,00,000',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'UPES Online',
        location: 'Dehradun, Uttarakhand',
        NIRF: '41',
        rating: 4.3,
        image: '/images/upes.png',
        specializations: ['Oil & Gas', 'Power Management', 'Logistics', 'Business Analytics', 'Finance'],
        fee: '₹1,75,000 - ₹2,20,000',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Focused', 'Expert Faculty', 'Placement Support']
      },
      {
        name: 'DYPATIL University',
        location: 'Pune, Maharashtra',
        NIRF: 'N/A',
        rating: 4.5,
        image: '/images/dypatil.png',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations Management', 'International Business', 'Business Analytics'],
        fee: '₹1,89,000',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Placement Support', 'Expert Faculty']
      },
       {
        name: 'Shoolini University',
        location: 'Solan, Himachal Pradesh, India',
        NIRF: '73',
        rating: 4.6,
        image: '/images/shoolini.jpg',
        specializations: ['Marketing', 'HRM', 'Retail Management', 'Finance, International Business', 'Digital Marketing', 'Entrepreneurship', 'Business Analytics', 'Operations Management'],
        fee: '₹1,10,000 ',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'OP Jindal Global University',
        location: 'Sonipat, Haryana',
        NIRF: 'N/A',
        rating: 4.6,
        image: '/images/opjindal.png',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'International Business', 'Business Analytics'],
        fee: '₹2,00,000 - ₹3,00,000',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Global Perspective', 'Industry Partnerships', 'Career Services']
      },
      {
        name: 'Chandigarh University',
        location: 'Mohali, Punjab',
        NIRF: '36',
        rating: 4.4,
        image: '/images/chandigarh.jpg',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Information Technology', 'Operations Management', 'International Business'],
        fee: '₹2,00,000 - ₹2,10,000',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Projects', 'Placement Assistance']
      },
      {
        name: 'Amrita University',
        location: 'Coimbatore, Tamil Nadu',
        NIRF: 'N/A',
        rating: 4.5,
        image: '/images/amrita.webp',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics', 'International Business'],
        fee: '₹1.8L - ₹3.0L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Research Focus', 'Career Services']
      },
      {
        name: 'Andhra University',
        location: 'Visakhapatnam, Andhra Pradesh',
        NIRF: 'N/A',
        rating: 4.3,
        image: '/images/andhra.webp',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics'],
        fee: '₹1.2L - ₹2.5L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Kurukshetra University',
        location: 'Kurukshetra, Haryana',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/images/kurukshetra.png',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics'],
        fee: '₹1.0L - ₹2.2L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Manglayatan University',
        location: 'Aligarh, Uttar Pradesh',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/images/manglayatan.png',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics'],
        fee: '₹90K - ₹2.0L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sikkim Manipal University',
        location: 'Gangtok, Sikkim',
        NIRF: 'N/A',
        rating: 4.3,
        image: '/images/smu-uni.jpg',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics', 'International Business'],
        fee: '₹1,10,000',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Uttaranchal University',
        location: 'Dehradun, Uttarakhand',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/images/uu-uni.webp',
        specializations: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Business Analytics'],
        fee: '₹1,10,000',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      }
    ]
  },
  'mca-online': {
    title: 'MCA Online',
    subtitle: 'Master of Computer Applications',
    description: 'Advance your tech career with an industry-aligned MCA program offered by top online universities.',
    duration: '3 Years',
    fee: '₹1L - ₹3L',
    eligibility: 'BCA/B.Sc (CS/IT) or Graduation with Mathematics/Computer Science',
    features: [
      'Hands-on projects',
      'Specializations in emerging tech',
      'Expert faculty from industry',
      'Flexible schedules',
      'Career support'
    ],
    universities: [
      {
        name: 'Manipal University',
        location: 'Jaipur, Rajasthan',
        NIRF: 'N/A',
        rating: 4.6,
        image: '/images/manipal.png',
        specializations: ['Data Science', 'Artificial Intelligence & ML', 'Cloud Computing', 'Full Stack Development'],
        fee: '₹1.2L - ₹2.8L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Projects', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        NIRF: 'N/A',
        rating: 4.5,
        image: '/images/lpu.png',
        specializations: ['Software Engineering', 'Cyber Security', 'Data Analytics', 'Cloud and DevOps'],
        fee: '₹90K - ₹2.8L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Practical Curriculum', 'Career Guidance']
      },
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        NIRF: '29',
        rating: 4.4,
        image: '/images/amity.png',
        specializations: ['Data Science', 'Blockchain', 'AI/ML', 'Networking'],
        fee: '₹1.1L - ₹2.2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Placement Support', 'Industry Faculty']
      },
      {
        name: 'UPES Online',
        location: 'Dehradun, Uttarakhand',
        NIRF: 'N/A',
        rating: 4.3,
        image: '/images/upes.png',
        specializations: ['Data Science', 'Big Data', 'AI & ML'],
        fee: '₹1.2L - ₹2.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Domain Focus', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Chandigarh University',
        location: 'Mohali, Punjab',
        NIRF: '36',
        rating: 4.3,
        image: '/images/chandigarh.jpg',
        specializations: ['Computer Science', 'Data Science', 'Software Engineering', 'AI & ML'],
        fee: '₹1.0L - ₹2.0L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        NIRF: 'N/A',
        rating: 4.4,
        image: '/images/jain.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Cloud Computing'],
        fee: '₹1.1L - ₹2.1L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Projects', 'Career Services']
      },
      {
        name: 'DYPATIL University',
        location: 'Pune, Maharashtra',
        NIRF: 'N/A',
        rating: 4.3,
        image: '/images/dypatil.png',
        specializations: ['Computer Science', 'Data Science', 'Software Engineering', 'AI & ML'],
        fee: '₹1.0L - ₹2.0L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Practical Learning', 'Career Support']
      },
      {
        name: 'Shoolini University',
        location: 'Solan, Himachal Pradesh',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/images/shoolini.jpg',
        specializations: ['Computer Science', 'Data Science', 'AI & ML', 'Cloud Computing'],
        fee: '₹90K - ₹1.8L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Research Focus', 'Industry Connect', 'Career Guidance']
      },
      {
        name: 'VGU',
        location: 'Jaipur, Rajasthan',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/images/vgu.png',
        specializations: ['Computer Science', 'Data Science', 'Software Engineering', 'AI & ML'],
        fee: '₹85K - ₹1.7L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Sharda University',
        location: 'Greater Noida, Uttar Pradesh',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/images/sharda.png',
        specializations: ['Computer Science', 'Data Science', 'AI & ML', 'Cloud Computing'],
        fee: '₹95K - ₹1.9L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Experienced Faculty', 'Industry Exposure', 'Career Guidance']
      },
      {
        name: 'Amrita University',
        location: 'Coimbatore, Tamil Nadu',
        NIRF: 'N/A',
        rating: 4.4,
        image: '/images/amrita.png',
        specializations: ['Computer Science', 'Data Science', 'AI & ML', 'Software Engineering', 'Cloud Computing'],
        fee: '₹1.1L - ₹2.2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Research Focus', 'Career Services']
      },
      {
        name: 'Andhra University',
        location: 'Visakhapatnam, Andhra Pradesh',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/images/andhra.png',
        specializations: ['Computer Science', 'Data Science', 'AI & ML', 'Software Engineering'],
        fee: '₹90K - ₹1.8L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Kurukshetra University',
        location: 'Kurukshetra, Haryana',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/kurukshetra.png',
        specializations: ['Computer Science', 'Data Science', 'AI & ML', 'Software Engineering'],
        fee: '₹80K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Manglayatan University',
        location: 'Aligarh, Uttar Pradesh',
        NIRF: 'N/A',
        rating: 4.0,
        image: '/manglayatan.png',
        specializations: ['Computer Science', 'Data Science', 'AI & ML', 'Software Engineering'],
        fee: '₹75K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sikkim Manipal University',
        location: 'Gangtok, Sikkim',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/sikkim-manipal.png',
        specializations: ['Computer Science', 'Data Science', 'AI & ML', 'Software Engineering', 'Cloud Computing'],
        fee: '₹95K - ₹1.9L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Uttaranchal University',
        location: 'Dehradun, Uttarakhand',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/uttaranchal.png',
        specializations: ['Computer Science', 'Data Science', 'AI & ML', 'Software Engineering'],
        fee: '₹85K - ₹1.7L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      }
    ]
  },
  'bba-online': {
    title: 'BBA Online',
    subtitle: 'Bachelor of Business Administration',
    description: 'Compare India\'s leading UGC-approved BBA programs designed for aspiring business professionals.',
    duration: '3 Years',
    fee: '₹80K - ₹2.5L',
    eligibility: '10+2 in any stream with 45% marks',
    features: [
      'Comprehensive business curriculum',
      'Practical case studies',
      'Industry projects',
      'Career counseling',
      'Affordable education'
    ],
    universities: [
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        NIRF: '29',
        rating: 4.7,
        image: '/amity.png',
        specializations: ['General Management', 'Finance', 'Marketing', 'Human Resources', 'International Business'],
        fee: '₹80K - ₹1.8L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Placement Support', 'Industry Projects']
      },
      {
        name: 'Manipal University',
        location: 'Jaipur, Rajasthan',
        NIRF: 'N/A',
        rating: 4.5,
        image: '/manipal.png',
        specializations: ['Business Administration', 'Finance', 'Marketing', 'Human Resources', 'Operations'],
        fee: '₹1L - ₹2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Sharda University',
        location: 'Greater Noida, Uttar Pradesh',
        NIRF: 'N/A',
        rating: 4.4,
        image: '/sharda.png',
        specializations: ['Business Management', 'Finance', 'Marketing', 'Human Resources', 'International Business'],
        fee: '₹70K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Connect', 'Career Support']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        NIRF: 'N/A',
        rating: 4.4,
        image: '/lpu.png',
        specializations: ['Business Administration', 'Finance', 'Marketing', 'Human Resources', 'Operations'],
        fee: '₹75K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Chandigarh University',
        location: 'Mohali, Punjab',
        rating: 4.3,
        image: '/chandigarh.jpg',
        specializations: ['Business Management', 'Finance', 'Marketing', 'Human Resources', 'International Business'],
        fee: '₹70K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        NIRF: 'N/A',
        rating: 4.4,
        image: '/jain.png',
        specializations: ['Business Administration', 'Finance', 'Marketing', 'Human Resources', 'Operations'],
        fee: '₹80K - ₹1.7L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Projects', 'Career Support']
      },
      {
        name: 'DYPATIL University',
        location: 'Pune, Maharashtra',
        NIRF: 'N/A',
        rating: 4.3,
        image: '/dypatil.png',
        specializations: ['Business Management', 'Finance', 'Marketing', 'Human Resources', 'Operations'],
        fee: '₹75K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Quality Education', 'Career Support']
      },
      {
        name: 'OP Jindal Global University',
        location: 'Sonipat, Haryana',
        NIRF: 'N/A',
        rating: 4.5,
        image: '/opjindal.png',
        specializations: ['Business Administration', 'Finance', 'Marketing', 'Human Resources', 'International Business'],
        fee: '₹1.0L - ₹2.0L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Global Perspective', 'Industry Partnerships', 'Career Services']
      },
      {
        name: 'Shoolini University',
        location: 'Solan, Himachal Pradesh',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/shoolini.png',
        specializations: ['Business Management', 'Finance', 'Marketing', 'Human Resources', 'Operations'],
        fee: '₹65K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Research Focus', 'Industry Connect', 'Career Guidance']
      },
      {
        name: 'Amrita University',
        location: 'Coimbatore, Tamil Nadu',
        NIRF: 'N/A',
        rating: 4.4,
        image: '/amrita.png',
        specializations: ['Business Administration', 'Finance', 'Marketing', 'Human Resources', 'International Business'],
        fee: '₹85K - ₹1.8L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Research Focus', 'Career Services']
      },
      {
        name: 'Andhra University',
        location: 'Visakhapatnam, Andhra Pradesh',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/andhra.png',
        specializations: ['Business Management', 'Finance', 'Marketing', 'Human Resources', 'Operations'],
        fee: '₹70K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Kurukshetra University',
        location: 'Kurukshetra, Haryana',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/kurukshetra.png',
        specializations: ['Business Administration', 'Finance', 'Marketing', 'Human Resources', 'Operations'],
        fee: '₹60K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Manglayatan University',
        location: 'Aligarh, Uttar Pradesh',
        NIRF: 'N/A',
        rating: 4.0,
        image: '/manglayatan.png',
        specializations: ['Business Administration', 'Finance', 'Marketing', 'Human Resources', 'Operations'],
        fee: '₹55K - ₹1.2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sikkim Manipal University',
        location: 'Gangtok, Sikkim',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/sikkim-manipal.png',
        specializations: ['Business Administration', 'Finance', 'Marketing', 'Human Resources', 'International Business'],
        fee: '₹75K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Uttaranchal University',
        location: 'Dehradun, Uttarakhand',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/uttaranchal.png',
        specializations: ['Business Management', 'Finance', 'Marketing', 'Human Resources', 'Operations'],
        fee: '₹65K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      }
    ]
  },
  'bca-online': {
    title: 'BCA Online',
    subtitle: 'Bachelor of Computer Applications',
    description: 'Build a solid foundation in computer science, programming, and software development with flexible online BCA programs from top universities.',
    duration: '3 Years',
    fee: '₹80K - ₹2L',
    eligibility: '10+2 with Mathematics/Computer Science preferred',
    features: [
      'Core CS and programming fundamentals',
      'Specializations in trending technologies',
      'Hands-on projects and labs',
      'Flexible online learning',
      'Career and placement support'
    ],
    universities: [
      {
        name: 'Manipal University',
        location: 'Jaipur, Rajasthan',
        NIRF: 'N/A',
        rating: 4.6,
        image: '/manipal.png',
        specializations: ['Full Stack Development', 'Data Science', 'Cloud & DevOps'],
        fee: '₹1.0L - ₹1.8L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Projects', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        NIRF: 'N/A',
        rating: 4.5,
        image: '/lpu.png',
        specializations: ['Software Engineering', 'Cyber Security', 'Data Analytics'],
        fee: '₹80K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Practical Curriculum', 'Career Guidance']
      },
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        NIRF: '29',
        rating: 4.4,
        image: '/amity.png',
        specializations: ['Data Science', 'AI/ML', 'Cloud Computing'],
        fee: '₹90K - ₹1.7L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Placement Support', 'Industry Faculty']
      },
      {
        name: 'Chandigarh University',
        location: 'Mohali, Punjab',
        NIRF: '36',
        rating: 4.2,
        image: '/chandigarh.jpg',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹75K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        NIRF: 'N/A',
        rating: 4.3,
        image: '/jain.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Cloud Computing'],
        fee: '₹80K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Projects', 'Career Services']
      },
      {
        name: 'Shoolini University',
        location: 'Solan, Himachal Pradesh',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/shoolini.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹70K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Research Focus', 'Industry Connect', 'Career Guidance']
      },
      {
        name: 'VGU',
        location: 'Jaipur, Rajasthan',
        NIRF: 'N/A',
        rating: 4.0,
        image: '/vgu.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹65K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'UPES Online',
        location: 'Dehradun, Uttarakhand',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/upes.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Cloud Computing'],
        fee: '₹85K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Domain Focus', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sharda University',
        location: 'Greater Noida, Uttar Pradesh',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/sharda.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹70K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Experienced Faculty', 'Industry Exposure', 'Career Guidance']
      },
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        NIRF: '29',
        rating: 4.4,
        image: '/amity.png',
        specializations: ['Data Science', 'AI/ML', 'Cloud Computing'],
        fee: '₹90K - ₹1.7L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Placement Support', 'Industry Faculty']
      },
      {
        name: 'Chandigarh University',
        location: 'Mohali, Punjab',
        NIRF: '36',
        rating: 4.2,
        image: '/chandigarh.jpg',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹75K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        NIRF: 'N/A',
        rating: 4.3,
        image: '/jain.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Cloud Computing'],
        fee: '₹80K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Projects', 'Career Services']
      },
      {
        name: 'Shoolini University',
        location: 'Solan, Himachal Pradesh',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/shoolini.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹70K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Research Focus', 'Industry Connect', 'Career Guidance']
      },
      {
        name: 'VGU',
        location: 'Jaipur, Rajasthan',
        NIRF: 'N/A',
        rating: 4.0,
        image: '/vgu.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹65K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'UPES Online',
        location: 'Dehradun, Uttarakhand',
        NIRF: 'N/A',
        rating: 4.2,
        image: '/upes.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Cloud Computing'],
        fee: '₹85K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Domain Focus', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sharda University',
        location: 'Greater Noida, Uttar Pradesh',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/sharda.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹70K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Experienced Faculty', 'Industry Exposure', 'Career Guidance']
      },
      {
        name: 'Amrita University',
        location: 'Coimbatore, Tamil Nadu',
        NIRF: 'N/A',
        rating: 4.3,
        image: '/amrita.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering', 'Cloud Computing'],
        fee: '₹80K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Research Focus', 'Career Services']
      },
      {
        name: 'Andhra University',
        location: 'Visakhapatnam, Andhra Pradesh',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/andhra.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹65K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Kurukshetra University',
        location: 'Kurukshetra, Haryana',
        NIRF: 'N/A',
        rating: 4.0,
        image: '/kurukshetra.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹60K - ₹1.2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Manglayatan University',
        location: 'Aligarh, Uttar Pradesh',
        NIRF: 'N/A',
        rating: 3.9,
        image: '/manglayatan.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹55K - ₹1.1L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sikkim Manipal University',
        location: 'Gangtok, Sikkim',
        NIRF: 'N/A',
        rating: 4.1,
        image: '/sikkim-manipal.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering', 'Cloud Computing'],
        fee: '₹70K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Uttaranchal University',
        location: 'Dehradun, Uttarakhand',
        NIRF: 'N/A',
        rating: 4.0,
        image: '/uttaranchal.png',
        specializations: ['Computer Science', 'Data Science', 'AI/ML', 'Software Engineering'],
        fee: '₹65K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      }
    ]
  },
  'bcom-online': {
    title: 'B.Com Online',
    subtitle: 'Bachelor of Commerce',
    description: 'Build strong fundamentals in accounting, finance, taxation, and business with flexible UGC-approved online B.Com programs from top universities.',
    duration: '3 Years',
    fee: '₹70K - ₹1.8L',
    eligibility: '10+2 in any stream (Commerce preferred)',
    features: [
      'Accounting, finance and business core',
      'Industry-relevant curriculum',
      'Live and recorded classes',
      'Exam and schedule flexibility',
      'Career guidance and placement support'
    ],
    universities: [
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.5,
        image: '/amity.png',
        specializations: ['Accounting & Finance', 'Banking & Insurance', 'Taxation'],
        fee: '₹80K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Industry Faculty', 'Placement Support']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        rating: 4.4,
        image: '/lpu.png',
        specializations: ['Accounting', 'Taxation', 'Finance'],
        fee: '₹70K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable', 'Curriculum Focus', 'Career Services']
      },
      {
        name: 'Sharda University',
        location: 'Greater Noida, Uttar Pradesh',
        rating: 4.3,
        image: '/sharda.png',
        specializations: ['Accounting & Finance', 'Banking & Insurance'],
        fee: '₹75K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Experienced Faculty', 'Industry Exposure', 'Counselling']
      },
      {
        name: 'Manipal University',
        location: 'Jaipur, Rajasthan',
        rating: 4.4,
        image: '/manipal.png',
        specializations: ['Accounting', 'Finance', 'Banking', 'Insurance', 'Taxation'],
        fee: '₹80K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        rating: 4.3,
        image: '/jain.png',
        specializations: ['Accounting', 'Finance', 'Banking', 'Insurance', 'Taxation'],
        fee: '₹75K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Projects', 'Career Services']
      },
      {
        name: 'Shoolini University',
        location: 'Solan, Himachal Pradesh',
        rating: 4.1,
        image: '/shoolini.png',
        specializations: ['Accounting', 'Finance', 'Banking', 'Insurance'],
        fee: '₹65K - ₹1.2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Research Focus', 'Industry Connect', 'Career Guidance']
      },
      {
        name: 'Amrita University',
        location: 'Coimbatore, Tamil Nadu',
        rating: 4.3,
        image: '/amrita.png',
        specializations: ['Accounting', 'Finance', 'Banking', 'Insurance', 'Taxation'],
        fee: '₹75K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Research Focus', 'Career Services']
      },
      {
        name: 'Andhra University',
        location: 'Visakhapatnam, Andhra Pradesh',
        rating: 4.1,
        image: '/andhra.png',
        specializations: ['Accounting', 'Finance', 'Banking', 'Insurance'],
        fee: '₹65K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Kurukshetra University',
        location: 'Kurukshetra, Haryana',
        rating: 4.0,
        image: '/kurukshetra.png',
        specializations: ['Accounting', 'Finance', 'Banking', 'Insurance'],
        fee: '₹60K - ₹1.2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Manglayatan University',
        location: 'Aligarh, Uttar Pradesh',
        rating: 3.9,
        image: '/manglayatan.png',
        specializations: ['Accounting', 'Finance', 'Banking', 'Insurance'],
        fee: '₹55K - ₹1.1L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sikkim Manipal University',
        location: 'Gangtok, Sikkim',
        rating: 4.1,
        image: '/sikkim-manipal.png',
        specializations: ['Accounting', 'Finance', 'Banking', 'Insurance', 'Taxation'],
        fee: '₹70K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Uttaranchal University',
        location: 'Dehradun, Uttarakhand',
        rating: 4.0,
        image: '/uttaranchal.png',
        specializations: ['Accounting', 'Finance', 'Banking', 'Insurance'],
        fee: '₹65K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      }
    ]
  },
  'ba-online': {
    title: 'BA Online',
    subtitle: 'Bachelor of Arts',
    description: 'Build strong foundations in humanities and social sciences with flexible UGC-approved online BA programs from top universities.',
    duration: '3 Years',
    fee: '₹60K - ₹1.5L',
    eligibility: '10+2 in any stream',
    features: [
      'Wide choice of specializations',
      'Live and recorded classes',
      'Project and research exposure',
      'Flexible exams and schedules',
      'Career mentorship and support'
    ],
    universities: [
      {
        name: 'Sharda University',
        location: 'Greater Noida, Uttar Pradesh',
        rating: 4.3,
        image: '/sharda.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Political Science'],
        fee: '₹60K - ₹1.2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Experienced Faculty', 'Industry Exposure', 'Counselling']
      },
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.4,
        image: '/amity.png',
        specializations: ['English', 'Economics', 'Public Policy', 'Psychology'],
        fee: '₹70K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Research Focus', 'Career Support']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        rating: 4.4,
        image: '/jain.png',
        specializations: ['English', 'Journalism', 'Economics'],
        fee: '₹65K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Projects', 'Career Services']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        rating: 4.3,
        image: '/lpu.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Political Science'],
        fee: '₹60K - ₹1.1L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Research Focus', 'Career Guidance']
      },
      {
        name: 'VGU',
        location: 'Jaipur, Rajasthan',
        rating: 4.1,
        image: '/vgu.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics'],
        fee: '₹55K - ₹1.0L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Research Projects', 'Career Support']
      },
      {
        name: 'Amrita University',
        location: 'Coimbatore, Tamil Nadu',
        rating: 4.3,
        image: '/amrita.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics', 'Political Science'],
        fee: '₹65K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Research Focus', 'Career Services']
      },
      {
        name: 'Andhra University',
        location: 'Visakhapatnam, Andhra Pradesh',
        rating: 4.1,
        image: '/andhra.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics', 'Political Science'],
        fee: '₹55K - ₹1.1L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Kurukshetra University',
        location: 'Kurukshetra, Haryana',
        rating: 4.0,
        image: '/kurukshetra.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics'],
        fee: '₹50K - ₹1.0L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Manglayatan University',
        location: 'Aligarh, Uttar Pradesh',
        rating: 3.9,
        image: '/manglayatan.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics'],
        fee: '₹45K - ₹95K',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sikkim Manipal University',
        location: 'Gangtok, Sikkim',
        rating: 4.1,
        image: '/sikkim-manipal.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics', 'Political Science'],
        fee: '₹60K - ₹1.2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Uttaranchal University',
        location: 'Dehradun, Uttarakhand',
        rating: 4.0,
        image: '/uttaranchal.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics'],
        fee: '₹55K - ₹1.1L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      }
    ]
  },
  'bajmc-online': {
    title: 'BAJMC Online',
    subtitle: 'Bachelor of Arts in Journalism & Mass Communication',
    description: 'Launch your media career with a comprehensive BAJMC covering journalism, digital media, PR, advertising, and production with hands-on projects.',
    duration: '3 Years',
    fee: '₹80K - ₹1.8L',
    eligibility: '10+2 in any stream',
    features: [
      'Foundation in media and communication',
      'Digital journalism and content creation',
      'PR, advertising, and media research',
      'Workshops, labs and portfolio projects',
      'Career and placement support'
    ],
    universities: [
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.5,
        image: '/amity.png',
        specializations: ['Digital Media', 'Advertising & PR', 'Broadcast Journalism'],
        fee: '₹1.0L - ₹1.8L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Industry Mentors', 'Portfolio Guidance']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        rating: 4.4,
        image: '/jain.png',
        specializations: ['Journalism', 'Digital Journalism', 'Media Studies'],
        fee: '₹90K - ₹1.6L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Practical Curriculum', 'Industry Projects', 'Career Services']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        rating: 4.4,
        image: '/lpu.png',
        specializations: ['Journalism & Mass Communication', 'Advertising & PR'],
        fee: '₹80K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable', 'Workshops', 'Career Guidance']
      },
      {
        name: 'Chandigarh University',
        location: 'Mohali, Punjab',
        rating: 4.2,
        image: '/chandigarh.jpg',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising & PR'],
        fee: '₹75K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Amrita University',
        location: 'Coimbatore, Tamil Nadu',
        rating: 4.3,
        image: '/amrita.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising & PR', 'Broadcast Journalism'],
        fee: '₹80K - ₹1.5L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Research Focus', 'Career Services']
      },
      {
        name: 'Andhra University',
        location: 'Visakhapatnam, Andhra Pradesh',
        rating: 4.1,
        image: '/andhra.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising'],
        fee: '₹70K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Kurukshetra University',
        location: 'Kurukshetra, Haryana',
        rating: 4.0,
        image: '/kurukshetra.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising'],
        fee: '₹65K - ₹1.2L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Manglayatan University',
        location: 'Aligarh, Uttar Pradesh',
        rating: 3.9,
        image: '/manglayatan.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising'],
        fee: '₹60K - ₹1.1L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sikkim Manipal University',
        location: 'Gangtok, Sikkim',
        rating: 4.1,
        image: '/sikkim-manipal.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising & PR'],
        fee: '₹70K - ₹1.4L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Uttaranchal University',
        location: 'Dehradun, Uttarakhand',
        rating: 4.0,
        image: '/uttaranchal.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising'],
        fee: '₹65K - ₹1.3L',
        duration: '3 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      }
    ]
  },
  'mcom-online': {
    title: 'M.Com Online',
    subtitle: 'Master of Commerce',
    description: 'Deepen your expertise in commerce, accounting, and finance with flexible online M.Com programs.',
    duration: '2 Years',
    fee: '₹80K - ₹2L',
    eligibility: 'B.Com or graduation with commerce-related subjects',
    features: [
      'Advanced accounting & finance',
      'Industry-relevant curriculum',
      'Live and recorded sessions',
      'Exam flexibility',
      'Placement guidance'
    ],
    universities: [
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.5,
        image: '/amity.png',
        specializations: ['Accounting', 'Finance', 'Economics', 'Banking'],
        fee: '₹90K - ₹1.8L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Industry Faculty', 'Placement Support']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        rating: 4.4,
        image: '/lpu.png',
        specializations: ['Accounting & Taxation', 'Finance'],
        fee: '₹80K - ₹1.5L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable', 'Curriculum Focus', 'Career Services']
      },
      {
        name: 'Manipal University',
        location: 'Jaipur, Rajasthan',
        rating: 4.5,
        image: '/manipal.png',
        specializations: ['Accounting', 'Finance', 'Economics', 'Banking'],
        fee: '₹1.0L - ₹1.9L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        rating: 4.4,
        image: '/jain.png',
        specializations: ['Accounting', 'Finance', 'Economics', 'Banking'],
        fee: '₹85K - ₹1.7L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Projects', 'Career Services']
      },
      {
        name: 'Amrita University',
        location: 'Coimbatore, Tamil Nadu',
        rating: 4.4,
        image: '/amrita.png',
        specializations: ['Accounting', 'Finance', 'Economics', 'Banking', 'Taxation'],
        fee: '₹90K - ₹1.8L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Research Focus', 'Career Services']
      },
      {
        name: 'Andhra University',
        location: 'Visakhapatnam, Andhra Pradesh',
        rating: 4.2,
        image: '/andhra.png',
        specializations: ['Accounting', 'Finance', 'Economics', 'Banking'],
        fee: '₹75K - ₹1.5L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Kurukshetra University',
        location: 'Kurukshetra, Haryana',
        rating: 4.1,
        image: '/kurukshetra.png',
        specializations: ['Accounting', 'Finance', 'Economics', 'Banking'],
        fee: '₹70K - ₹1.4L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Manglayatan University',
        location: 'Aligarh, Uttar Pradesh',
        rating: 4.0,
        image: '/manglayatan.png',
        specializations: ['Accounting', 'Finance', 'Economics', 'Banking'],
        fee: '₹65K - ₹1.3L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sikkim Manipal University',
        location: 'Gangtok, Sikkim',
        rating: 4.2,
        image: '/sikkim-manipal.png',
        specializations: ['Accounting', 'Finance', 'Economics', 'Banking', 'Taxation'],
        fee: '₹80K - ₹1.6L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Uttaranchal University',
        location: 'Dehradun, Uttarakhand',
        rating: 4.1,
        image: '/uttaranchal.png',
        specializations: ['Accounting', 'Finance', 'Economics', 'Banking'],
        fee: '₹75K - ₹1.5L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      }
    ]
  },
  'ma-online': {
    title: 'MA Online',
    subtitle: 'Master of Arts',
    description: 'Explore humanities and social sciences with flexible MA online degrees from top universities.',
    duration: '2 Years',
    fee: '₹70K - ₹1.6L',
    eligibility: 'Graduation in relevant discipline',
    features: [
      'Wide range of specializations',
      'Research and projects',
      'Live/recorded classes',
      'Flexible exams',
      'Career mentorship'
    ],
    universities: [
      {
        name: 'Sharda University',
        location: 'Greater Noida, Uttar Pradesh',
        rating: 4.3,
        image: '/sharda.png',
        specializations: ['English', 'Psychology', 'Sociology'],
        fee: '₹70K - ₹1.2L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Experienced Faculty', 'Industry Exposure', 'Counselling']
      },
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.4,
        image: '/amity.png',
        specializations: ['English', 'Public Policy', 'Psychology'],
        fee: '₹80K - ₹1.6L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Research Focus', 'Career Support']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        rating: 4.3,
        image: '/lpu.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Political Science'],
        fee: '₹65K - ₹1.1L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Research Focus', 'Career Guidance']
      },
      {
        name: 'Chandigarh University',
        location: 'Mohali, Punjab',
        rating: 4.2,
        image: '/chandigarh.jpg',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics'],
        fee: '₹70K - ₹1.3L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Research Projects', 'Career Support']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        rating: 4.3,
        image: '/jain.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics'],
        fee: '₹75K - ₹1.4L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Research Focus', 'Career Services']
      },
      {
        name: 'OP Jindal Global University',
        location: 'Sonipat, Haryana',
        rating: 4.4,
        image: '/opjindal.png',
        specializations: ['English', 'Psychology', 'Public Policy', 'Economics'],
        fee: '₹90K - ₹1.6L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Global Perspective', 'Research Excellence', 'Career Services']
      },
      {
        name: 'Shoolini University',
        location: 'Solan, Himachal Pradesh',
        rating: 4.1,
        image: '/shoolini.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Political Science'],
        fee: '₹60K - ₹1.0L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Research Focus', 'Industry Connect', 'Career Guidance']
      },
      {
        name: 'Amrita University',
        location: 'Coimbatore, Tamil Nadu',
        rating: 4.3,
        image: '/amrita.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics', 'Political Science'],
        fee: '₹75K - ₹1.4L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Research Focus', 'Career Services']
      },
      {
        name: 'Andhra University',
        location: 'Visakhapatnam, Andhra Pradesh',
        rating: 4.1,
        image: '/andhra.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics', 'Political Science'],
        fee: '₹65K - ₹1.2L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Kurukshetra University',
        location: 'Kurukshetra, Haryana',
        rating: 4.0,
        image: '/kurukshetra.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics'],
        fee: '₹60K - ₹1.1L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Manglayatan University',
        location: 'Aligarh, Uttar Pradesh',
        rating: 3.9,
        image: '/manglayatan.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics'],
        fee: '₹55K - ₹1.0L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sikkim Manipal University',
        location: 'Gangtok, Sikkim',
        rating: 4.1,
        image: '/sikkim-manipal.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics', 'Political Science'],
        fee: '₹70K - ₹1.3L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Uttaranchal University',
        location: 'Dehradun, Uttarakhand',
        rating: 4.0,
        image: '/uttaranchal.png',
        specializations: ['English', 'Psychology', 'Sociology', 'Economics'],
        fee: '₹65K - ₹1.2L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      }
    ]
  },
  'majmc-online': {
    title: 'MAJMC Online',
    subtitle: 'Master of Arts in Journalism & Mass Communication',
    description: 'Master journalism and mass communication with industry-focused curricula, practical projects, and expert mentorship from top online universities.',
    duration: '2 Years',
    fee: '₹90K - ₹2.2L',
    eligibility: 'Graduation in any discipline with 50% marks',
    features: [
      'Digital journalism & new media focus',
      'PR, advertising and media research',
      'Live/recorded classes and workshops',
      'Portfolio-driven capstone projects',
      'Career and placement support'
    ],
    universities: [
      {
        name: 'Amity University',
        location: 'Noida, Uttar Pradesh',
        rating: 4.6,
        image: '/amity.png',
        specializations: ['Digital Media', 'Advertising & PR', 'Broadcast Journalism'],
        fee: '₹1.2L - ₹2.0L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Live Classes', 'Industry Mentors', 'Portfolio Guidance']
      },
      {
        name: 'NMIMS',
        location: 'Mumbai, Maharashtra',
        rating: 4.7,
        image: '/nmims.png',
        specializations: ['Mass Communication', 'Public Relations', 'Advertising Management'],
        fee: '₹1.4L - ₹2.2L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Placement Assistance', 'Experienced Faculty']
      },
      {
        name: 'Jain University',
        location: 'Bangalore, Karnataka',
        rating: 4.5,
        image: '/jain.png',
        specializations: ['Journalism', 'Digital Journalism', 'Media Studies'],
        fee: '₹1.0L - ₹1.8L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Practical Curriculum', 'Industry Projects', 'Career Services']
      },
      {
        name: 'LPU Online',
        location: 'Punjab',
        rating: 4.4,
        image: '/lpu.png',
        specializations: ['Journalism & Mass Communication', 'Advertising & PR'],
        fee: '₹90K - ₹1.6L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable', 'Workshops', 'Career Guidance']
      },
      {
        name: 'Manipal University',
        location: 'Jaipur, Rajasthan',
        rating: 4.5,
        image: '/manipal.png',
        specializations: ['Journalism', 'Digital Media', 'Advertising & PR', 'Mass Communication'],
        fee: '₹1.1L - ₹1.9L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Industry Connect', 'Career Services']
      },
      {
        name: 'VGU',
        location: 'Jaipur, Rajasthan',
        rating: 4.2,
        image: '/vgu.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising'],
        fee: '₹85K - ₹1.5L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Amrita University',
        location: 'Coimbatore, Tamil Nadu',
        rating: 4.4,
        image: '/amrita.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising & PR', 'Broadcast Journalism'],
        fee: '₹95K - ₹1.8L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Industry Connect', 'Research Focus', 'Career Services']
      },
      {
        name: 'Andhra University',
        location: 'Visakhapatnam, Andhra Pradesh',
        rating: 4.2,
        image: '/andhra.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising'],
        fee: '₹80K - ₹1.5L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      },
      {
        name: 'Kurukshetra University',
        location: 'Kurukshetra, Haryana',
        rating: 4.1,
        image: '/kurukshetra.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising'],
        fee: '₹75K - ₹1.4L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
      },
      {
        name: 'Manglayatan University',
        location: 'Aligarh, Uttar Pradesh',
        rating: 4.0,
        image: '/manglayatan.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising'],
        fee: '₹70K - ₹1.3L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
      },
      {
        name: 'Sikkim Manipal University',
        location: 'Gangtok, Sikkim',
        rating: 4.2,
        image: '/sikkim-manipal.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising & PR'],
        fee: '₹80K - ₹1.6L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
      },
      {
        name: 'Uttaranchal University',
        location: 'Dehradun, Uttarakhand',
        rating: 4.1,
        image: '/uttaranchal.png',
        specializations: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising'],
        fee: '₹75K - ₹1.4L',
        duration: '2 Years',
        accreditation: 'UGC Approved',
        features: ['Quality Education', 'Industry Projects', 'Career Support']
      }
    ]
  },

    'msc-online': {
      title: 'MSC Online',
      subtitle: 'Master of Science',
      description: 'Advance your scientific career with specialized MSC programs in Computer Science, Data Science, Mathematics, and more from top online universities.',
      duration: '2 Years',
      fee: '₹1.2L - ₹3L',
      eligibility: 'B.Sc in relevant discipline with 50% marks',
      features: [
        'Specialized scientific curriculum',
        'Research and project work',
        'Industry-aligned specializations',
        'Expert faculty from academia and industry',
        'Career advancement opportunities'
      ],
      universities: [
        {
          name: 'Amity University',
          location: 'Noida, Uttar Pradesh',
          NIRF: '29',
          rating: 4.6,
          image: '/amity.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry', 'Biotechnology'],
          fee: '₹1.5L - ₹2.8L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Live Classes', 'Research Projects', 'Industry Connect']
        },
        {
          name: 'Manipal University',
          location: 'Jaipur, Rajasthan',
          NIRF: 'N/A',
          rating: 4.5,
          image: '/manipal.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Statistics', 'Physics'],
          fee: '₹1.3L - ₹2.5L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Expert Faculty', 'Research Focus', 'Career Services']
        },
        {
          name: 'LPU Online',
          location: 'Punjab',
          NIRF: 'N/A',
          rating: 4.4,
          image: '/lpu.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹1.0L - ₹2.0L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Affordable Education', 'Practical Learning', 'Research Projects']
        },
        {
          name: 'Jain University',
          location: 'Bangalore, Karnataka',
          NIRF: 'N/A',
          rating: 4.5,
          image: '/jain.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Biotechnology'],
          fee: '₹1.4L - ₹2.6L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Modern Curriculum', 'Industry Projects', 'Research Focus']
        },
        {
          name: 'Chandigarh University',
          location: 'Mohali, Punjab',
          NIRF: '36',
          rating: 4.3,
          image: '/chandigarh.jpg',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹1.2L - ₹2.2L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Quality Education', 'Research Projects', 'Career Support']
        },
        {
          name: 'DYPATIL University',
          location: 'Pune, Maharashtra',
          NIRF: 'N/A',
          rating: 4.4,
          image: '/dypatil.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹1.3L - ₹2.4L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Industry Connect', 'Research Focus', 'Expert Faculty']
        },
        {
          name: 'UPES Online',
          location: 'Dehradun, Uttarakhand',
          NIRF: 'N/A',
          rating: 4.3,
          image: '/upes.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹1.1L - ₹2.1L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Domain Focus', 'Industry Connect', 'Career Support']
        },
        {
          name: 'Shoolini University',
          location: 'Solan, Himachal Pradesh',
          NIRF: 'N/A',
          rating: 4.2,
          image: '/shoolini.jpg',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Biotechnology'],
          fee: '₹1.0L - ₹1.9L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Research Focus', 'Industry Connect', 'Career Guidance']
        },
        {
          name: 'VGU',
          location: 'Jaipur, Rajasthan',
          NIRF: 'N/A',
          rating: 4.1,
          image: '/vgu.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹95K - ₹1.8L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Quality Education', 'Research Projects', 'Career Support']
        },
        {
          name: 'Sharda University',
          location: 'Greater Noida, Uttar Pradesh',
          NIRF: 'N/A',
          rating: 4.2,
          image: '/sharda.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Biotechnology'],
          fee: '₹1.0L - ₹1.8L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Experienced Faculty', 'Industry Exposure', 'Career Guidance']
        },
        {
          name: 'Amrita University',
          location: 'Coimbatore, Tamil Nadu',
          NIRF: 'N/A',
          rating: 4.4,
          image: '/amrita.webp',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry', 'Biotechnology'],
          fee: '₹1.2L - ₹2.3L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Industry Connect', 'Research Focus', 'Career Services']
        },
        {
          name: 'Andhra University',
          location: 'Visakhapatnam, Andhra Pradesh',
          NIRF: 'N/A',
          rating: 4.1,
          image: '/andhra.webp',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹95K - ₹1.7L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Quality Education', 'Research Projects', 'Career Support']
        },
        {
          name: 'Kurukshetra University',
          location: 'Kurukshetra, Haryana',
          NIRF: 'N/A',
          rating: 4.0,
          image: '/kurukshetra.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹90K - ₹1.6L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
        },
        {
          name: 'Manglayatan University',
          location: 'Aligarh, Uttar Pradesh',
          NIRF: 'N/A',
          rating: 3.9,
          image: '/manglayatan.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹85K - ₹1.5L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
        },
        {
          name: 'Sikkim Manipal University',
          location: 'Gangtok, Sikkim',
          NIRF: 'N/A',
          rating: 4.1,
          image: '/sikkim-manipal.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry', 'Biotechnology'],
          fee: '₹95K - ₹1.8L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
        },
        {
          name: 'Uttaranchal University',
          location: 'Dehradun, Uttarakhand',
          NIRF: 'N/A',
          rating: 4.0,
          image: '/uttaranchal.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹90K - ₹1.7L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Quality Education', 'Research Projects', 'Career Support']
        }
      ]
    },
    'msc-online': {
      title: 'MSC Online',
      subtitle: 'Master of Science',
      description: 'Advance your scientific career with specialized MSC programs in Computer Science, Data Science, Mathematics, and more from top online universities.',
      duration: '2 Years',
      fee: '₹1.2L - ₹3L',
      eligibility: 'B.Sc in relevant discipline with 50% marks',
      features: [
        'Specialized scientific curriculum',
        'Research and project work',
        'Industry-aligned specializations',
        'Expert faculty from academia and industry',
        'Career advancement opportunities'
      ],
      universities: [
        {
          name: 'Amity University',
          location: 'Noida, Uttar Pradesh',
          NIRF: '29',
          rating: 4.6,
          image: '/amity.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry', 'Biotechnology'],
          fee: '₹1.5L - ₹2.8L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Live Classes', 'Research Projects', 'Industry Connect']
        },
        {
          name: 'Manipal University',
          location: 'Jaipur, Rajasthan',
          NIRF: 'N/A',
          rating: 4.5,
          image: '/manipal.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Statistics', 'Physics'],
          fee: '₹1.3L - ₹2.5L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Expert Faculty', 'Research Focus', 'Career Services']
        },
        {
          name: 'LPU Online',
          location: 'Punjab',
          NIRF: 'N/A',
          rating: 4.4,
          image: '/lpu.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹1.0L - ₹2.0L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Affordable Education', 'Practical Learning', 'Research Projects']
        },
        {
          name: 'Jain University',
          location: 'Bangalore, Karnataka',
          NIRF: 'N/A',
          rating: 4.5,
          image: '/jain.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Biotechnology'],
          fee: '₹1.4L - ₹2.6L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Modern Curriculum', 'Industry Projects', 'Research Focus']
        },
        {
          name: 'Chandigarh University',
          location: 'Mohali, Punjab',
          NIRF: '36',
          rating: 4.3,
          image: '/chandigarh.jpg',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹1.2L - ₹2.2L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Quality Education', 'Research Projects', 'Career Support']
        },
        {
          name: 'DYPATIL University',
          location: 'Pune, Maharashtra',
          NIRF: 'N/A',
          rating: 4.4,
          image: '/dypatil.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹1.3L - ₹2.4L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Industry Connect', 'Research Focus', 'Expert Faculty']
        },
        {
          name: 'UPES Online',
          location: 'Dehradun, Uttarakhand',
          NIRF: 'N/A',
          rating: 4.3,
          image: '/upes.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹1.1L - ₹2.1L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Domain Focus', 'Industry Connect', 'Career Support']
        },
        {
          name: 'Shoolini University',
          location: 'Solan, Himachal Pradesh',
          NIRF: 'N/A',
          rating: 4.2,
          image: '/shoolini.jpg',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Biotechnology'],
          fee: '₹1.0L - ₹1.9L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Research Focus', 'Industry Connect', 'Career Guidance']
        },
        {
          name: 'VGU',
          location: 'Jaipur, Rajasthan',
          NIRF: 'N/A',
          rating: 4.1,
          image: '/vgu.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹95K - ₹1.8L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Quality Education', 'Research Projects', 'Career Support']
        },
        {
          name: 'Sharda University',
          location: 'Greater Noida, Uttar Pradesh',
          NIRF: 'N/A',
          rating: 4.2,
          image: '/sharda.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Biotechnology'],
          fee: '₹1.0L - ₹1.8L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Experienced Faculty', 'Industry Exposure', 'Career Guidance']
        },
        {
          name: 'Amrita University',
          location: 'Coimbatore, Tamil Nadu',
          NIRF: 'N/A',
          rating: 4.4,
          image: '/amrita.webp',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry', 'Biotechnology'],
          fee: '₹1.2L - ₹2.3L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Industry Connect', 'Research Focus', 'Career Services']
        },
        {
          name: 'Andhra University',
          location: 'Visakhapatnam, Andhra Pradesh',
          NIRF: 'N/A',
          rating: 4.1,
          image: '/andhra.webp',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹95K - ₹1.7L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Quality Education', 'Research Projects', 'Career Support']
        },
        {
          name: 'Kurukshetra University',
          location: 'Kurukshetra, Haryana',
          NIRF: 'N/A',
          rating: 4.0,
          image: '/kurukshetra.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹90K - ₹1.6L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Affordable Education', 'Quality Learning', 'Career Guidance']
        },
        {
          name: 'Manglayatan University',
          location: 'Aligarh, Uttar Pradesh',
          NIRF: 'N/A',
          rating: 3.9,
          image: '/manglayatan.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹85K - ₹1.5L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Modern Curriculum', 'Industry Connect', 'Career Support']
        },
        {
          name: 'Sikkim Manipal University',
          location: 'Gangtok, Sikkim',
          NIRF: 'N/A',
          rating: 4.1,
          image: '/sikkim-manipal.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry', 'Biotechnology'],
          fee: '₹95K - ₹1.8L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Expert Faculty', 'Career Services', 'Flexible Learning']
        },
        {
          name: 'Uttaranchal University',
          location: 'Dehradun, Uttarakhand',
          NIRF: 'N/A',
          rating: 4.0,
          image: '/uttaranchal.png',
          specializations: ['Computer Science', 'Data Science', 'Mathematics', 'Physics', 'Chemistry'],
          fee: '₹90K - ₹1.7L',
          duration: '2 Years',
          accreditation: 'UGC Approved',
          features: ['Quality Education', 'Research Projects', 'Career Support']
        }
      ]
    }
  };

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default async function CoursePage({ params }) {
  try {
    const { slug } = await params;
    // Try direct key match first
    let course = courseData[slug];

    // Fallback: match by slugifying known course labels (title/subtitle)
    if (!course) {
      const all = Object.values(courseData);
      course = all.find((c) => {
        const titleSlug = slugify(c.title);
        const subtitleSlug = c.subtitle ? slugify(c.subtitle) : '';
        const combinedTitle = `${c.subtitle ?? ''} ${c.title}`.trim();
        const combinedSlug = slugify(combinedTitle);
        return (
          slug === titleSlug ||
          (!!subtitleSlug && slug === subtitleSlug) ||
          slug === combinedSlug ||
          slug.includes(titleSlug) ||
          (!!subtitleSlug && slug.includes(subtitleSlug))
        );
      });
    }

    if (!course) {
      notFound();
    }



    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaGraduationCap className="w-12 h-12 text-[#00ffe0]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Top Online {course.title} Universities in India
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
              {course.description}
            </p>
          </div>
        </section>

        {/* Search, Filter, Sort + Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <CourseUniversitiesBrowser universities={course.universities} courseTitle={course.title} />
        </section>

        {/* Course Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About {course.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {course.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="w-8 h-8 text-[#001e3c]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
                <p className="text-[#00ffe0] font-bold text-lg">{course.duration}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMoneyBillWave className="w-8 h-8 text-[#001e3c]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fee Range</h3>
                <p className="text-[#00ffe0] font-bold text-lg">{course.fee}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="w-8 h-8 text-[#001e3c]" />
                </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-2">NIRF</h3>
                <p className="text-[#00ffe0] font-bold text-lg">{course.NIRF}</p>
              
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Eligibility</h3>
                <p className="text-[#00ffe0] font-bold text-lg">{course.eligibility}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-[#00ffe0] mr-2" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-[#00ffe0] mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaUniversity className="w-5 h-5 text-[#00ffe0] mr-2" />
                  Why Choose Online {course.title}?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-[#00ffe0] mr-3">✓</span>
                    <span className="text-gray-700">Flexible learning schedule</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00ffe0] mr-3">✓</span>
                    <span className="text-gray-700">UGC recognized degree</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00ffe0] mr-3">✓</span>
                    <span className="text-gray-700">Industry expert faculty</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00ffe0] mr-3">✓</span>
                    <span className="text-gray-700">Placement assistance</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Compare Online Universities Section */}
       
        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your {course.title} Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get personalized guidance and book a free demo session with our education experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#00ffe0] text-[#001e3c] hover:bg-[#00e6cc] px-8 py-3 text-lg font-semibold"
                asChild
              >
                <Link href="/bookdemo">
                  <FaCalendarAlt className="w-5 h-5 mr-2" />
                  Book Free Demo
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-[#00ffe0] text-[#00ffe0] hover:bg-[#00ffe0] hover:text-[#001e3c] px-8 py-3 text-lg font-semibold"
                asChild
              >
                <Link href="/coursesearch">
                  <FaSearch className="w-5 h-5 mr-2" />
                  Explore More Courses
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error in CoursePage:', error);
    notFound();
  }
}

export function generateStaticParams() {
  return Object.keys(courseData).map((slug) => ({ slug }));
}
