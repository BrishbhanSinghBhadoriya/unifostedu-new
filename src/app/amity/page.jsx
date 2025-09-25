'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  Globe, 
  Award, 
  BookOpen, 
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Play,
  Search
} from 'lucide-react';
import { Inter, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
});




const AmityLandingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    course: '',
    state: ''
  });

  const handleInputChange = () => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = () => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const courses = [
    'MBA (Master of Business Administration)',
    'BBA (Bachelor of Business Administration)', 
    'MCA (Master of Computer Applications)',
    'BCA (Bachelor of Computer Applications)',
    'M.Com (Master of Commerce)',
    'B.Com (Bachelor of Commerce)',
    'MA (Master of Arts)',
    'BA (Bachelor of Arts)'
  ];

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Chandigarh'
  ];

  const stats = [
    { number: '1.6L+', label: 'Students Enrolled', icon: Users },
    { number: '25+', label: 'Years of Excellence', icon: Award },
    { number: '100%', label: 'Placement Assistance', icon: CheckCircle },
    { number: '200+', label: 'Corporate Partners', icon: Globe }
  ];

  const features = [
    {
      icon: GraduationCap,
      title: 'UGC Approved Degrees',
      description: 'All programs are UGC approved and globally recognized for academic excellence'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Degrees recognized by WES, international universities and multinational corporations'
    },
    {
      icon: BookOpen,
      title: 'Flexible Learning',
      description: '24/7 access to learning materials with AI-powered personalized study plans'
    },
    {
      icon: Star,
      title: 'Industry Expert Faculty',
      description: 'Learn from experienced professionals and industry leaders'
    }
  ];

  const specializations = [
    { program: 'MBA', count: '18 Specializations', color: 'bg-blue-50 border-blue-200 text-blue-800',image:'/images/mbaSpecialization.webp'

     },
    { program: 'BBA', count: '12 Specializations', color: 'bg-green-50 border-green-200 text-green-800',image:'/images/bbaSpecialization.webp' },
    { program: 'MCA', count: '8 Specializations', color: 'bg-purple-50 border-purple-200 text-purple-800',image:'/images/mcaSpecialization.webp' },
    { program: 'BCA', count: '6 Specializations', color: 'bg-orange-50 border-orange-200 text-orange-800',image:'/images/bcaSpecialization.webp' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-[122px] h-10 relative">
                <Image src="/amity.svg" alt="Amity University Online" fill className="object-contain" priority />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1800-200-8040</span>
              </Button>
              <Button className="bg-yellow-400 text-black border border-black ">
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Notification Bar */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 py-3">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p 
            className="font-semibold flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <CheckCircle className="w-5 h-5" />
            <span>July 2025 Admissions Open • Scholarships up to 25% Available • Limited Time Offer</span>
          </motion.p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-6">
      <div className="relative w-full max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search program..."
          className="w-full bg-white/90 pl-10 pr-4 py-3 rounded-2xl border border-gray-300 focus:outline-none text-gray-700"
        />
      </div>
    </div>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden mt-10">
  <div className="max-w-7xl mx-auto px-6 py-8 lg:py-24">
    <div className="flex flex-wrap items-center gap-12">
      {/* Left Content */}
      <div className={`flex-1 min-w-[300px] ${inter.className}`}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <Badge className="mb-6 font-semibold px-4 py-2 border border-gray-300 bg-white flex items-center gap-2">
            <Image
              src="/images/UGC_India_Logo_9d01833e1b.svg"
              alt="UGC Approved"
              width={30}
              height={30}
            />
            <span className="text-gray-500">UGC Approved</span>
          </Badge>

          {/* Heading */}
          <h1
            className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6`}
          >
            India&apos;s Leading
            <span className="block text-transparent bg-clip-text bg-yellow-600">
              Online University
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Transform your career with industry-relevant programs designed by experts.{" "}
            <span className="font-semibold">Join 1.6 lakh+</span> professionals
            who chose Amity for their educational journey.
          </p>

          {/* Program Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {specializations.map((item, index) => (
        <motion.div
          key={index}
          className="rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Image */}
          <div className="h-40 w-full">
            <img
              src={item.image}
              alt={item.program}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="bg-[#0d1b4c] text-white py-3 text-center">
            <div className="font-bold text-lg">{item.program}</div>
            <div className="text-sm opacity-90">{item.count}</div>
          </div>
        </motion.div>
      ))}
    </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 px-8 py-4 text-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-blue-400 px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Content - Image */}
      <div className="flex-1 min-w-[250px] max-w-[400px]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full h-64 sm:h-80 md:h-[520px] lg:h-[680px]">
            <Image
              src="/images/girlImage.webp"
              alt="Amity Campus"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* Enquiry Form Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Connect With Our Experts</h2>
                <p className="text-gray-600">Get personalized guidance for admissions, courses and scholarships</p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" className="mt-1" required />
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <div className="flex mt-1">
                    <select className="px-3 py-2 border border-gray-300 rounded-l-md border-r-0 bg-white text-sm">
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <Input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Enter phone number" className="rounded-l-none" required />
                  </div>
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className="mt-1" required />
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="course">Select Course *</Label>
                  <Select onValueChange={(value) => handleSelectChange('course', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose your program" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course, index) => (
                        <SelectItem key={index} value={course}>{course}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="state">Select State *</Label>
                  <Select onValueChange={(value) => handleSelectChange('state', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state, index) => (
                        <SelectItem key={index} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-3 text-lg font-semibold">Submit</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Amity University Online?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class education with cutting-edge technology and industry-relevant curriculum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Strategic Partnership with Hockey India
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Empowering hockey players with quality education and special scholarships
            </p>
            <Button 
              size="lg"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-3"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards your dream career. Join thousands of successful graduates who chose Amity for their educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 text-lg font-semibold"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-[122px] h-10 relative">
                  <Image src="/amity.svg" alt="Amity University Online" fill className="object-contain" />
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming lives through quality education and innovation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Scholarships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>1800-200-8040</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@amityonline.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Noida, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Amity University Online. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AmityLandingPage;