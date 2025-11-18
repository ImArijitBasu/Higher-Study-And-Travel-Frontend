"use client";

import { useState } from "react";

interface ApplyFormProps {
  university: {
    id: number;
    universityName: string;
    programName: string;
    location: string;
    tuitionFee: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyForm({ university, isOpen, onClose }: ApplyFormProps) {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    passportNumber: "",
    
    // Academic Background
    highestQualification: "",
    institutionName: "",
    graduationYear: "",
    gpa: "",
    
    // English Proficiency
    englishTest: "IELTS",
    testScore: "",
    testDate: "",
    
    // Documents
    hasTranscripts: false,
    hasPassport: false,
    hasSOP: false,
    hasLOR: false,
    
    // Additional Information
    fundingSource: "Personal",
    specialRequirements: "",
    agreeToTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Application submitted:", {
      university: university.universityName,
      program: university.programName,
      ...formData
    });
    
    setIsSubmitting(false);
    alert("Application submitted successfully!");
    onClose();
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-t-3xl text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Apply to {university.universityName}</h2>
              <p className="text-blue-100">{university.programName}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex justify-between mt-6">
            {[1, 2, 3, 4].map(step => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step <= currentStep ? 'bg-white text-blue-600 border-white' : 'border-blue-300 text-blue-300'
                } font-bold`}>
                  {step}
                </div>
                <span className="text-xs mt-2 text-blue-200">
                  {step === 1 && 'Personal'}
                  {step === 2 && 'Academic'}
                  {step === 3 && 'Documents'}
                  {step === 4 && 'Review'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your nationality"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passport Number *
                  </label>
                  <input
                    type="text"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Passport number"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Academic Background */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Academic Background</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Highest Qualification *
                  </label>
                  <select
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select qualification</option>
                    <option value="high_school">High School Diploma</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution Name *
                  </label>
                  <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Previous institution"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Graduation Year *
                  </label>
                  <input
                    type="number"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="2023"
                    min="2000"
                    max="2030"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPA/CGPA *
                  </label>
                  <input
                    type="text"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="3.5/4.0"
                  />
                </div>
              </div>

              {/* English Proficiency */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">English Proficiency</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      English Test *
                    </label>
                    <select
                      name="englishTest"
                      value={formData.englishTest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="IELTS">IELTS</option>
                      <option value="TOEFL">TOEFL</option>
                      <option value="PTE">PTE</option>
                      <option value="Duolingo">Duolingo</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Test Score *
                    </label>
                    <input
                      type="text"
                      name="testScore"
                      value={formData.testScore}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="7.5"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Test Date *
                    </label>
                    <input
                      type="date"
                      name="testDate"
                      value={formData.testDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Documents & Additional Info */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Documents & Additional Information</h3>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'hasTranscripts', label: 'Academic Transcripts' },
                    { name: 'hasPassport', label: 'Passport Copy' },
                    { name: 'hasSOP', label: 'Statement of Purpose' },
                    { name: 'hasLOR', label: 'Letters of Recommendation' }
                  ].map((doc) => (
                    <label key={doc.name} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        name={doc.name}
                        checked={formData[doc.name as keyof typeof formData] as boolean}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{doc.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Funding Source *
                  </label>
                  <select
                    name="fundingSource"
                    value={formData.fundingSource}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Personal">Personal/Family</option>
                    <option value="Scholarship">Scholarship</option>
                    <option value="Loan">Education Loan</option>
                    <option value="Sponsor">Corporate Sponsor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requirements
                </label>
                <textarea
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any special requirements or accommodations needed..."
                />
              </div>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">
                  I agree to the terms and conditions and privacy policy *
                </span>
              </label>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Review Your Application</h3>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">Application Summary</h4>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>University:</strong> {university.universityName}
                  </div>
                  <div>
                    <strong>Program:</strong> {university.programName}
                  </div>
                  <div>
                    <strong>Full Name:</strong> {formData.fullName}
                  </div>
                  <div>
                    <strong>Email:</strong> {formData.email}
                  </div>
                  <div>
                    <strong>Qualification:</strong> {formData.highestQualification}
                  </div>
                  <div>
                    <strong>English Test:</strong> {formData.englishTest} - {formData.testScore}
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> Please review all information carefully before submitting. 
                  You will receive a confirmation email within 24 hours.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || !formData.agreeToTerms}
                className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}