"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AiFillStar, 
  AiOutlineArrowLeft, 
  AiOutlineShareAlt, 
  AiOutlineHeart, 
  AiFillHeart,
  AiOutlineClockCircle,
  AiOutlineDollarCircle,
  AiOutlineGlobal,
  AiOutlineBook,
  AiOutlineUser,
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineUpload,
  AiOutlineFileText,
  AiOutlineLoading3Quarters
} from "react-icons/ai";
import { 
  FaUniversity, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaGlobe,
  FaLanguage,
  FaUsers
} from "react-icons/fa";
import Link from "next/link";

interface Scholarship {
  id: number;
  image: string;
  title: string;
  university: string;
  field: string;
  country: string;
  degree: string;
  deadline: string;
  amount: string;
  flag: string;
  rating: number;
  eligibility: string;
  description: string;
  duration: string;
  language: string;
  benefits: string[];
  requirements: string[];
  applicationProcess: string[];
  contactEmail: string;
  website: string;
}

// Application Form Component
function ApplicationForm({ scholarship, isOpen, onClose }: { scholarship: any; isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    currentInstitution: "",
    programOfStudy: "",
    currentGPA: "",
    expectedGraduation: "",
    englishTest: "",
    englishScore: "",
    agreeToTerms: false,
    agreeToDataProcessing: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const steps = [
    { number: 1, title: "Personal Info", completed: currentStep > 1 },
    { number: 2, title: "Academic Background", completed: currentStep > 2 },
    { number: 3, title: "Review & Submit", completed: false },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">
                    {isSubmitted ? "Application Submitted!" : `Apply for ${scholarship.title}`}
                  </h2>
                  <p className="text-blue-100">{scholarship.university}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-2xl transition-colors"
                >
                  <AiOutlineClose className="w-6 h-6" />
                </button>
              </div>

              {!isSubmitted && (
                <div className="flex justify-center mt-6">
                  <div className="flex items-center gap-4">
                    {steps.map((step, index) => (
                      <React.Fragment key={step.number}>
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-semibold ${
                            step.completed || currentStep === step.number
                              ? "bg-white text-blue-600 border-white"
                              : "border-white/50 text-white"
                          }`}>
                            {step.completed ? (
                              <AiOutlineCheckCircle className="w-5 h-5" />
                            ) : (
                              step.number
                            )}
                          </div>
                          <span className="text-xs mt-2 text-white/80">{step.title}</span>
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`w-12 h-0.5 ${
                            step.completed ? "bg-white" : "bg-white/30"
                          }`} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Form Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AiOutlineCheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for applying to the {scholarship.title} at {scholarship.university}. 
                    We've sent a confirmation email to {formData.email}. Our admission team will 
                    review your application and contact you within 2-3 weeks.
                  </p>
                  <div className="space-y-4">
                    <button
                      onClick={onClose}
                      className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Step 1: Personal Information */}
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Name *
                              </label>
                              <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name *
                              </label>
                              <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number *
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date of Birth *
                              </label>
                              <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nationality *
                              </label>
                              <input
                                type="text"
                                name="nationality"
                                value={formData.nationality}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Academic Background */}
                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-6">Academic Background</h3>
                          
                          <div className="grid grid-cols-1 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Current Institution *
                              </label>
                              <input
                                type="text"
                                name="currentInstitution"
                                value={formData.currentInstitution}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Program of Study *
                              </label>
                              <input
                                type="text"
                                name="programOfStudy"
                                value={formData.programOfStudy}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Current GPA *
                                </label>
                                <input
                                  type="text"
                                  name="currentGPA"
                                  value={formData.currentGPA}
                                  onChange={handleInputChange}
                                  required
                                  placeholder="e.g., 3.8/4.0"
                                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                              </div>
                              
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Expected Graduation *
                                </label>
                                <input
                                  type="month"
                                  name="expectedGraduation"
                                  value={formData.expectedGraduation}
                                  onChange={handleInputChange}
                                  required
                                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Review & Submit */}
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-6">Review Your Application</h3>
                          
                          <div className="space-y-6">
                            <div className="border border-gray-200 rounded-2xl p-6">
                              <h4 className="font-semibold text-gray-900 mb-4">Personal Information</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
                                <div><strong>Email:</strong> {formData.email}</div>
                                <div><strong>Phone:</strong> {formData.phone}</div>
                                <div><strong>Date of Birth:</strong> {formData.dateOfBirth}</div>
                                <div><strong>Nationality:</strong> {formData.nationality}</div>
                              </div>
                            </div>
                            
                            <div className="border border-gray-200 rounded-2xl p-6">
                              <h4 className="font-semibold text-gray-900 mb-4">Academic Background</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div><strong>Institution:</strong> {formData.currentInstitution}</div>
                                <div><strong>Program:</strong> {formData.programOfStudy}</div>
                                <div><strong>GPA:</strong> {formData.currentGPA}</div>
                                <div><strong>Graduation:</strong> {formData.expectedGraduation}</div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <label className="flex items-start gap-3">
                                <input
                                  type="checkbox"
                                  name="agreeToTerms"
                                  checked={formData.agreeToTerms}
                                  onChange={handleInputChange}
                                  required
                                  className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">
                                  I certify that all information provided is true and complete.
                                </span>
                              </label>
                              
                              <label className="flex items-start gap-3">
                                <input
                                  type="checkbox"
                                  name="agreeToDataProcessing"
                                  checked={formData.agreeToDataProcessing}
                                  onChange={handleInputChange}
                                  required
                                  className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">
                                  I agree to the processing of my personal data.
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </form>
              )}
            </div>

            {/* Footer Navigation */}
            {!isSubmitted && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                      currentStep === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-white hover:shadow-md"
                    }`}
                  >
                    Previous
                  </button>
                  
                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.agreeToTerms || !formData.agreeToDataProcessing}
                      className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ScholarshipDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [scholarship, setScholarship] = useState<Scholarship | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [relatedScholarships, setRelatedScholarships] = useState<Scholarship[]>([]);
  
  // Application Form State
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  useEffect(() => {
    fetch("/scrolarship.json")
      .then((res) => res.json())
      .then((data) => {
        const scholarshipId = parseInt(params.id as string);
        const foundScholarship = data.find((item: Scholarship) => item.id === scholarshipId);
        setScholarship(foundScholarship);
        
        if (foundScholarship) {
          const related = data
            .filter((item: Scholarship) => 
              item.id !== scholarshipId && 
              item.field === foundScholarship.field
            )
            .slice(0, 4);
          setRelatedScholarships(related);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch scholarship:", err);
        setLoading(false);
      });
  }, [params.id]);

  const handleSaveScholarship = () => {
    setIsSaved(!isSaved);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: scholarship?.title,
          text: scholarship?.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const getDeadlineColor = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) return "text-red-600 bg-red-50 border-red-200";
    if (diffDays < 60) return "text-orange-600 bg-orange-50 border-orange-200";
    return "text-green-600 bg-green-50 border-green-200";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/30 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!scholarship) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/30 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Not Found</h2>
          <Link href="/u/scholarships" className="text-blue-600 hover:text-blue-700">
            Back to Scholarships
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/30">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <AiOutlineArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <AiOutlineShareAlt className="w-5 h-5" />
                <span>Share</span>
              </button>
              
              <button
                onClick={handleSaveScholarship}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                {isSaved ? (
                  <AiFillHeart className="w-5 h-5 text-red-600" />
                ) : (
                  <AiOutlineHeart className="w-5 h-5" />
                )}
                <span>{isSaved ? "Saved" : "Save"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Scholarship Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl p-8 mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* University Image */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={scholarship.image}
                      alt={scholarship.university}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <AiFillStar className="text-yellow-400 text-sm" />
                      <span className="text-white text-sm font-bold">{scholarship.rating}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Scholarship Info */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {scholarship.title}
                      </h1>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <FaUniversity className="text-blue-600" />
                          <span className="font-semibold text-gray-700">{scholarship.university}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-green-600" />
                          <span className="text-gray-600">{scholarship.country}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <AiOutlineDollarCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Funding</p>
                      <p className="font-bold text-gray-900">{scholarship.amount}</p>
                    </div>
                    <div className="text-center">
                      <FaGraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Degree</p>
                      <p className="font-bold text-gray-900">{scholarship.degree}</p>
                    </div>
                    <div className="text-center">
                      <AiOutlineBook className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Field</p>
                      <p className="font-bold text-gray-900">{scholarship.field}</p>
                    </div>
                    <div className="text-center">
                      <AiOutlineClockCircle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-bold text-gray-900">{scholarship.duration}</p>
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-400" />
                      <span className="text-gray-600">Application Deadline:</span>
                      <motion.span 
                        className={`font-bold px-4 py-2 rounded-xl border-2 ${getDeadlineColor(scholarship.deadline)}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {new Date(scholarship.deadline).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </motion.span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsApplicationOpen(true)}
                      className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Tab Headers */}
              <div className="border-b">
                <div className="flex overflow-x-auto">
                  {["overview", "eligibility", "benefits", "requirements", "process"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-shrink-0 px-6 py-4 font-semibold transition-colors ${
                        activeTab === tab
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === "overview" && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Overview</h3>
                        <p className="text-gray-700 leading-relaxed">{scholarship.description}</p>
                      </div>
                    )}

                    {activeTab === "eligibility" && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Eligibility Criteria</h3>
                        <p className="text-gray-700 leading-relaxed">{scholarship.eligibility}</p>
                      </div>
                    )}

                    {activeTab === "benefits" && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Scholarship Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {scholarship.benefits.map((benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-blue-50 rounded-2xl p-4 border border-blue-200"
                            >
                              <div className="flex items-center gap-3">
                                <AiOutlineCheckCircle className="w-5 h-5 text-blue-600" />
                                <p className="text-gray-700 font-medium">{benefit}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === "requirements" && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Application Requirements</h3>
                        <div className="space-y-4">
                          {scholarship.requirements.map((requirement, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl"
                            >
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <p className="text-gray-700">{requirement}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === "process" && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Application Process</h3>
                        <div className="space-y-4">
                          {scholarship.applicationProcess.map((step, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-blue-200"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <div>
                                <p className="text-gray-700 font-medium">{step}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Quick Apply Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Apply?</h3>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsApplicationOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Application
                </motion.button>
                
                <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-2xl font-bold hover:border-gray-400 transition-all duration-300">
                  Download PDF Guide
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Contact our admission team for assistance with your application.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span> {scholarship.contactEmail}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Website:</span>{" "}
                    <a href={scholarship.website} className="text-blue-600 hover:underline">
                      {scholarship.website}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Related Scholarships */}
            {relatedScholarships.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Scholarships</h3>
                <div className="space-y-4">
                  {relatedScholarships.map((related) => (
                    <Link
                      key={related.id}
                      href={`/u/scholarships/${related.id}`}
                      className="block p-4 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={related.image}
                          alt={related.university}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-grow">
                          <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-xs text-gray-600">{related.university}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm font-bold text-blue-600">{related.amount}</span>
                        <span className="text-xs text-gray-500">
                          {new Date(related.deadline).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      <ApplicationForm
        scholarship={scholarship}
        isOpen={isApplicationOpen}
        onClose={() => setIsApplicationOpen(false)}
      />
    </div>
  );
}