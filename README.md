# 🚀 FULL-STACK ENTERPRISE WEBSITE BUILD PROMPT

Build a **modern, enterprise-grade, full-stack web application** for the company below.

---

# 🧱 TECH STACK (MANDATORY)

- Latest Next.js  (App Router)
- Prisma 6
- PostgreSQL
- Payload CMS (self-hosted, fully integrated)
- TailwindCSS
- shadcn/ui
- Server Actions + API routes
- Fully responsive (mobile-first)
- SEO optimized

---
# 🌙 DARK MODE TOGGLE FEATURE

Implement a full dark mode system across the entire website and admin interface.

---

## ✅ CORE REQUIREMENTS

- Add a **dark/light mode toggle button** in the header (top-right area)
- Toggle should switch between:
  - Light mode (default or user preference)
  - Dark mode

---

## 🎨 DESIGN BEHAVIOR

### Light Mode
- Background: White / Light Gray
- Text: Dark (near black)
- Primary color: Navy
- Secondary: Gold

### Dark Mode
- Background: Deep navy / near black
- Text: Light (white / gray)
- Cards: Dark surfaces with subtle borders
- Maintain gold accents for highlights

---

## ⚙️ FUNCTIONALITY

- Persist user preference using:
  - LocalStorage OR cookies
- Detect system preference:
  - `prefers-color-scheme`
- Apply mode instantly (no page reload)

---

## 🧩 IMPLEMENTATION

- Use TailwindCSS dark mode (`class` strategy)
- Apply `dark:` variants across all components
- Use shadcn/ui compatible theming

---

## 🔘 TOGGLE COMPONENT

- Icon-based toggle:
  - Sun icon (light mode)
  - Moon icon (dark mode)
- Smooth transition animation

---

## 🧠 CMS INTEGRATION (OPTIONAL)

Allow admin to:
- Set default theme (light/dark/system)
- Enable/disable dark mode feature

---

## 📱 RESPONSIVENESS

- Toggle must work across all devices
- Accessible and easy to use on mobile

---

## 🛡️ ACCESSIBILITY

- Ensure contrast ratios are readable
- Maintain accessibility standards (WCAG)



## ✅ RESULT

Users can:
- Toggle between light and dark mode
- Have their preference remembered
- Experience consistent styling across all pages and dashboard


---

# 🏢 COMPANY INFORMATION

**Company Name:**  
East Africa Bridge Group Limited  

**Tagline:**  
Procurement, Sourcing & Market Access Platform  

---

# 🎨 DESIGN SYSTEM

## Colors
- Primary: Deep Navy Blue
- Secondary: Gold

## UI / UX Requirements
- Clean corporate layout
- Professional typography
- Consistent spacing and grid system
- Card-based sections
- Subtle animations
- Fully responsive across devices

---

# 🌐 WEBSITE STRUCTURE

## Navigation Menu
- Home
- About
- Services
- Commodities
- Markets
- Contact

## Top CTA Button
**Request Sourcing Support**

---

# 🏠 HOME PAGE

## Hero Section
**Headline:**  
Connecting Global Buyers with Trusted East African Supply  

**Subheadline:**  
East Africa Bridge Group is a procurement, sourcing, and market access platform connecting international buyers with qualified suppliers across East Africa.

**CTA:** Request Sourcing Support  

---

## Sections

### What We Do
- Identify qualified suppliers  
- Access new sourcing origins  
- Verify product quality  
- Monitor shipment execution  
- Reduce procurement risk  

---

### Focus Commodities
- Sesame Seeds  
- Green Grams  
- Pigeon Peas  
- Kidney Beans  

---

### Key Origins
- Tanzania  
- Uganda  
- Kenya  

---

### Key Markets
- UAE  
- Saudi Arabia  
- Qatar  
- China  

---

### Our Approach
- Demand Control  
- Supply Control  
- Transaction Control  

---

### Final CTA
Looking for reliable sourcing support in East Africa?  

---

# 📄 ABOUT PAGE

- Company overview
- Mission
- Operations in East Africa (TZ, UG, KE)
- Position as sourcing partner (not trader)

## Core Principles
- Trust  
- Verification  
- Execution  
- Market Access  

## Vision
Become the trusted sourcing office for international buyers  

---

# 🛠 SERVICES PAGE

- Procurement & Sourcing  
- Supplier Verification  
- Transaction Coordination  
- Market Access  

---

# 🌾 COMMODITIES PAGE

Sections for:
- Sesame Seeds  
- Green Grams  
- Pigeon Peas  
- Kidney Beans  

Each includes:
- Typical origins  
- Grades  
- Packaging  
- Export markets  

⚠️ No pricing

---

# 🌍 MARKETS PAGE

## Regions
- GCC (UAE, Saudi Arabia, Qatar)  
- Asia (China)  
- East Africa (Tanzania, Uganda, Kenya)  

---

# 📬 CONTACT PAGE

## Fields
- Name  
- Company  
- Country  
- Email  
- Phone  
- Commodity of Interest  
- Message  

## Options
- Buyer  
- Supplier  

## Behavior
- Store submissions in database  
- Send notification email  

---

# 🧠 CMS REQUIREMENT (CRITICAL)

Use Payload CMS to allow full non-technical control.

---

## ✅ ADMIN CAPABILITIES

### Global Content Control
- Edit header (logo, menu, CTA button)
- Edit footer
- Update branding (colors, logo)

### Page Editing
- Fully editable pages
- Block-based visual builder

### Content Blocks
- Hero sections  
- Text sections  
- Cards  
- Lists  
- CTA sections  

### Styling Control
- Rich text editing (headings, bold, lists)
- Image upload and placement
- Layout control via blocks

### SEO Control
- Meta titles  
- Meta descriptions  
- Open Graph images  

### Media Management
- Upload images/files  
- Replace logo easily  

---

# 👥 USER ROLES & PERMISSIONS

## Roles

### Super Admin
- Full control of system
- Manage users & permissions
- Configure SMTP
- Access all content and settings

### Admin
- Manage content
- View submissions

### Editor
- Edit limited sections/pages

---

## Permissions System
- Role-based access control
- Restrict access per page/feature
- Field-level permissions where necessary

---

# 🔐 AUTHENTICATION SYSTEM

- Login/logout
- Secure password hashing
- Change password
- Forgot password with email reset link
- Token-based password reset

---

# 📧 EMAIL & SMTP SYSTEM (ADMIN-CONTROLLED)

## Requirements

Super Admin must be able to configure:

- SMTP Host  
- SMTP Port  
- Username  
- Password (secure)  
- From email  
- From name  
- Encryption type  

---

## Behavior
- Stored securely in database
- Used dynamically by the system
- No redeployment needed

---

## Features
- Send test email button
- Email used for:
  - Contact form
  - Password reset
  - Notifications

---

# 🔔 NOTIFICATIONS SYSTEM

## Features
- In-app notifications
- Email notifications

## Triggers
- New contact submission
- Content updates
- User activity

---

# ⚙️ SYSTEM BEHAVIOR

- Public website accessible without login
- Admin dashboard protected
- CMS-driven dynamic pages
- Fast loading performance

---

# 🛡️ SECURITY REQUIREMENTS

- Role-based access control  
- Data validation  
- CSRF protection  
- Secure password storage  
- Hidden sensitive data  

---

# 📉 FOOTER

- Company name + tagline  
- Navigation links  
- Contact email  
- Copyright  

---

# ⚡ BONUS FEATURES (ENHANCED)

---

## 📊 Analytics Dashboard
- Website traffic overview  
- Submission tracking  
- Page performance  
- Optional Google Analytics integration  

---

## 🔎 Advanced SEO
- Auto sitemap generation  
- Robots.txt editing  
- Structured data support  
- SEO preview  

---

## 📝 Blog / Insights Section
- Create articles  
- Categories & tags  
- SEO-optimized posts  

---

## 🌐 Multi-Language Support
- Multiple languages (e.g., English, Arabic)  
- Translation via CMS  

---

## 📁 File & Document Library
- Upload documents  
- Organize files  
- Reuse across pages  

---

## 📥 Data Export
- Export submissions  
- Export reports  

---

## 🔔 Real-Time Notifications
- Live dashboard alerts  

---

## 👁️ Activity Logs
- Track all admin actions  
- Audit trail  

---

## 🧪 Draft & Preview Mode
- Save drafts  
- Preview before publishing  

---

## 🧱 Page Versioning
- Restore old versions  

---

## 🧩 Reusable Content Blocks
- Save and reuse components  

---

## ⚡ Performance Optimization
- Image optimization  
- Lazy loading  
- CDN readiness  

---

## 🔐 Two-Factor Authentication
- Optional extra security  

---

## 📱 Progressive Web App (PWA)
- Installable  
- Offline-ready  

---

## 💬 Live Chat Integration
- WhatsApp  
- Tawk.to  
- Intercom  

---

## 🤖 AI Content Assistant
- Generate text  
- Assist with SEO  

---

## 📅 Content Scheduling
- Schedule publishing  
- Expiration control  

---

## 🎯 Lead Management (Mini CRM)
- Track inquiries  
- Tag leads  
- Add internal notes  

---

## 🔗 API Access
- External integrations  

---

## 🌍 Geo-Based Content
- Location-based personalization  

---

# ✅ FINAL RESULT

The system must function as:

✅ Public-facing professional website  
✅ Full CMS editable by non-technical users  
✅ Multi-user platform with permissions  
✅ Admin-controlled infrastructure (including email system)  
✅ Scalable enterprise-grade system  
✅ No developer required for day-to-day operations  

---






