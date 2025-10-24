"use client";

import { Button } from "@/components/ui/button";
import { Mail, Instagram, Youtube, Facebook } from "lucide-react";

export default function JoinCommunity() {
  return (
    <footer className="bg-white pt-8">
      {/* Join our community */}
      <div className="bg-sky-300 text-center py-6 rounded-xl mx-4 md:mx-8 mb-10">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          JOIN OUR COMMUNITY. CONNECT WITH US ON SOCIAL
        </h3>
        <div className="flex justify-center gap-4 mt-3 text-gray-700">
          <Facebook className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Mail className="w-5 h-5" />
        </div>
      </div>

      {/* Footer content */}
      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-16 pb-12">
        {/* Study & Travel Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <PlaneTakeoffIcon />
            <h4 className="font-bold text-lg">STUDY & TRAVEL</h4>
          </div>
          <p className="text-gray-600 text-sm mb-3 font-semibold">
            STUDY ABROAD FOR EVERYONE
          </p>
          <p className="text-gray-600 text-sm">
            We’re here to make studying abroad achievable, and we are  building a
            community of open-minded, connected, and culturally aware people.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-gray-700 text-sm space-y-2">
          <h4 className="font-semibold">CONTACT US</h4>
          <p>+156-4844-456</p>
          <p>info@studyabroad.com</p>

          <h4 className="font-semibold mt-4">GET STARTED</h4>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Inquire Now</li>
            <li>Apply Now</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-1">SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p className="text-gray-600 text-sm mb-4">
            Stay up to date with the latest study abroad programs, news, and
            promotions! No spam, just good content.
          </p>

          <form className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 rounded-full px-3 py-2 text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 rounded-full px-3 py-2 text-sm outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-full px-3 py-2 text-sm outline-none"
            />

            <p className="text-xs text-gray-500">
              ✅ By checking this box, I consent to Study&Travel.com collecting
              and storing my data through the submission of this form.
            </p>

            <Button className="w-full bg-sky-400 hover:bg-sky-500 text-white rounded-full">
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
}

// small icon for Study & Travel heading
function PlaneTakeoffIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 text-sky-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.75l17.184-4.743a1.5 1.5 0 011.845 1.086l.722 2.638a1.5 1.5 0 01-1.086 1.845L8.25 17.25m-6-4.5l.5 1.833m0 0l1.833.5m-1.833-.5l1.833-.5m-1.833.5L8.25 17.25"
      />
    </svg>
  );
}
