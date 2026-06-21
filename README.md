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





#LOGO SVG

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <!-- Importing premium serif and sans-serif Google Fonts -->
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&amp;family=Montserrat:wght@500;600&amp;display=swap');
      
      .bg-card {
        fill: #ffffff;
      }
      
      .bridge-deck {
        fill: #001c3d;
      }
      
      .pylon {
        fill: #001c3d;
        stroke: #ffffff;
        stroke-width: 5px;
        stroke-linejoin: round;
        stroke-linecap: round;
      }
      
      .cable {
        stroke: #c59b27;
        stroke-width: 1.5px;
        stroke-linecap: round;
        opacity: 0.95;
      }
      
      .main-title {
        font-family: 'Cinzel', 'Georgia', 'Times New Roman', serif;
        font-size: 44px;
        font-weight: 700;
        fill: #001c3d;
        text-anchor: middle;
        letter-spacing: 0.06em;
      }
      
      .group-title {
        font-family: 'Montserrat', 'Helvetica Neue', 'Arial', sans-serif;
        font-size: 26px;
        font-weight: 500;
        fill: #c59b27;
        text-anchor: middle;
        letter-spacing: 0.55em;
      }
      
      .tagline {
        font-family: 'Montserrat', 'Helvetica Neue', 'Arial', sans-serif;
        font-size: 15px;
        font-weight: 600;
        fill: #001c3d;
        text-anchor: middle;
        letter-spacing: 0.18em;
      }
      
      .bullet {
        font-size: 20px;
        fill: #c59b27;
        baseline-shift: 8%;
      }
    </style>
  </defs>

  <!-- Clean White Presentation Card Background -->
  <rect class="bg-card" width="100%" height="100%" rx="16" />

  <!-- 1. Cable-Stayed Bridge Gold Cables (Drawn behind pylons) -->
  <g>
    <!-- Left Pylon Cables (Outer-Left Fan) -->
    <line class="cable" x1="364" y1="155" x2="200" y2="276" />
    <line class="cable" x1="364" y1="170" x2="240" y2="269" />
    <line class="cable" x1="364" y1="185" x2="280" y2="264" />
    <line class="cable" x1="364" y1="200" x2="320" y2="259" />

    <!-- Left Pylon Cables (Inner-Right Fan to Center) -->
    <line class="cable" x1="378" y1="155" x2="410" y2="252" />
    <line class="cable" x1="378" y1="170" x2="445" y2="251" />
    <line class="cable" x1="378" y1="185" x2="480" y2="250" />

    <!-- Right Pylon Cables (Outer-Right Fan) -->
    <line class="cable" x1="636" y1="155" x2="800" y2="276" />
    <line class="cable" x1="636" y1="170" x2="760" y2="269" />
    <line class="cable" x1="636" y1="185" x2="720" y2="264" />
    <line class="cable" x1="636" y1="200" x2="680" y2="259" />

    <!-- Right Pylon Cables (Inner-Left Fan to Center) -->
    <line class="cable" x1="622" y1="155" x2="590" y2="252" />
    <line class="cable" x1="622" y1="170" x2="555" y2="251" />
    <line class="cable" x1="622" y1="185" x2="520" y2="250" />
  </g>

  <!-- 2. Sweeping Bridge Deck Curve (Arched Crescent) -->
  <path class="bridge-deck" d="M 175,280 Q 500,220 825,280 Q 500,234 175,280 Z" />

  <!-- 3. Twin H-Frame Structural Pylons (Drawn on top with protective white mask borders) -->
  <g>
    <!-- Left Pylon Path -->
    <path class="pylon" d="M 361,140 L 369,140 L 368.5,241 L 373.5,241 L 373,140 L 381,140 L 386,270 L 374,270 L 373.8,251 L 368.2,251 L 368,270 L 356,270 Z" />
    
    <!-- Right Pylon Path (Perfect mathematical mirror of Left Pylon) -->
    <path class="pylon" d="M 639,140 L 631,140 L 631.5,241 L 626.5,241 L 627,140 L 619,140 L 614,270 L 626,270 L 626.2,251 L 631.8,251 L 632,270 L 644,270 Z" />
  </g>

  <!-- 4. Typography Section -->
  <g>
    <!-- Main Title -->
    <text x="500" y="370" class="main-title">EAST AFRICA BRIDGE</text>
    
    <!-- Gold Flanking Lines for "GROUP" -->
    <line x1="180" y1="432" x2="415" y2="432" stroke="#c59b27" stroke-width="1.8" />
    <line x1="585" y1="432" x2="820" y2="432" stroke="#c59b27" stroke-width="1.8" />
    
    <!-- Group Text -->
    <text x="507" y="441" class="group-title">GROUP</text>
    
    <!-- Tagline with perfectly aligned Gold Bullets -->
    <text x="500" y="495" class="tagline">
      PROCUREMENT <tspan class="bullet">&#8226;</tspan> SOURCING <tspan class="bullet">&#8226;</tspan> MARKET ACCESS
    </text>
  </g>
</svg>
