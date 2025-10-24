# Study & Travel - Frontend

Welcome to the **Study & Travel** frontend repository! This is the user-facing part of a comprehensive platform that helps students apply for universities abroad and travelers book trips—all from a single account.

---

## 🚀 Project Overview

**Study & Travel** is a modern, responsive web application designed to handle:

- Study abroad applications
- Scholarship applications
- Individual and group travel bookings

Users can access a shared account for both student and traveler functionalities, while admins manage everything from universities to travel packages.

---

## 🎯 Key Features

### Guest / Public Users
- Search & filter universities, scholarships, and travel destinations
- Read study abroad tips & travel guides
- Responsive landing page with intuitive navigation

### Registered Users
**Single Account for Both Roles**
- Apply for universities & scholarships
- Track application status (Pending → Processing → Approved/Rejected)
- Book travel packages individually or in groups
- Track booking status & payments
- Receive notifications for updates

### Admin Panel
- University, scholarship, and travel package management
- Application and booking tracking with approval workflows
- Dynamic form builder for any service type
- Role-based access control (Super Admin, Content Manager)
- Analytics & reporting dashboard

---

## 🗂️ Sitemap

### Guest
- Home (Landing Page)
- Universities / Scholarships / Travel Destinations (Search & Details)
- Blog (Study Tips & Travel Guides)
- Login / Register

### Registered Users
- Dashboard
- Profile (Account info, documents, travel info)
- Study Abroad Applications
- Travel Bookings (Individual & Group)
- Notifications

### Admin
- Dashboard (Analytics & Reports)
- University / Scholarship / Travel Package Management
- Applications & Bookings (Track, Approve/Reject)
- Dynamic Form Builder
- User & Role Management

---

## 💻 Tech Stack

- **Frontend:** React.js, Next.js 15, Tailwind CSS
- **Authentication:** MongoDB 😎
- **State Management:** React Context / Redux (if needed)
- **Forms:** Dynamic & reusable form components
- **API Communication:** Axios / Fetch API
- **Deployment:** Vercel / Netlify

---

## 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/study-travel-frontend.git

# Navigate to project folder
cd study-travel-frontend

# Install dependencies
npm install

# Run development server
npm run dev
