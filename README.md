# DegreeFYD Landing Dashboard

A modern, highly responsive,**Next.js 16** (Turbopack compiler), **React 19**, and **Tailwind CSS v3**.

## 🚀 Key Features

### 1. Dashboard & Profile Details (`/`)
*   **User Profiles**: Features a header with the logo, double-decker search layout, and profile badge (`Kartikay`).
*   **Completeness Tracker**: Interactive profile details box with a circular progress gauge (65% complete).

### 2. College Recommendations (`/recommendations`)
*   **Grid Search**: Dynamic, responsive grid showing recommended colleges.
*   **Smart Badges**: Displays NIRF ranking badges and geographic pins.
*   **Detailed Analytics**: Outlines fee structures, study modes, and quick application options.

### 3. Shortlisted Colleges (`/shortlists`)
*   **Saved Colleges**: Shows a structured collection of saved colleges with active (filled) bookmark tags.
*   **Application Continuity**: Outlines active courses shortlisted with a solid dark navy `"Continue application"` shortcut.

### 4. Talk to Counselor (`/talk-to-counselor`)
*   **Counselor Selection**: Responsive grid of active counselor profiles (Hindi/English speaking, ratings, experience stats).
*   **Interactive Booking Modal**: Allows slot picking via date tabs (Today, Tomorrow, and upcoming dates) and time selectors (9:30 AM to 7:30 PM).
*   **Success Notification Popup**: Auto-closes after 3 seconds with a visual green checkmark notification, then redirects to confirmation.

### 5. Session Booked Confirmation (`/session-booked`)
*   **Booking Success View**: Structured confirmation screen showcasing counselor details, date, time slot, and action buttons to return to the dashboard.

### 6. Upload Documents (`/my-documents`)
*   **Multi-State Cards**:
    *   *Uploaded*: Displays a thumbnail preview of the document (`doc_preview.jpg`) and a validation status (either `"Change"` button or orange `"Validating doc..."` pill).
    *   *Empty*: Dashed upload box with outline icons and a `"Browse files"` trigger.
*   **Simulated Upload**: Interactive state loader that displays `"Uploading..."` for 1.5 seconds when clicking browse/change, before setting state to pending validation.
*   **2-Column Mobile Grid**: Stacks cards side-by-side in a responsive double column on mobile screens.

### 7. Refer & Earn (`/refer-earn`)
*   **Promotional Banner**: Implements a dedicated vector graphic banner detailing the referral program.
*   **Interactive Link Copier**: Readonly link box with a nested copy icon button. Copying triggers a visual `"Copied!"` checkmark.
*   **Social Shares**: WhatsApp and Email sharing integrations, wrapping to a side-by-side equal width layout on mobile viewports.

### 8. Log out Confirmation Modal
*   **Shared Sidebar Trigger**: Easily opened by clicking `"Log out"` from the shared sidebar navigation panel on any page.
*   **Backdrop Overlay**: Renders a dark blurred backdrop, a header with a Close (X) icon, and cancel/logout buttons.

---

## 🛠️ Technology Stack

*   **Framework**: Next.js 16.2.10 (Turbopack enabled)
*   **Library**: React 19.2.4
*   **Styling**: Tailwind CSS 3.4.19
*   **Icons**: Consolidates outline SVG structures inside `src/app/components/Icons.tsx` and custom public image icon assets.

---

## 📂 Project Structure

```text
degreefyd-landing/
├── public/                 # Static media assets (banners, icons, previews)
├── src/app/
│   ├── components/         # Shared Layout & Client Components
│   │   ├── Header.tsx      # Double-decker top navbar
│   │   ├── Sidebar.tsx     # Left-side navigation drawer
│   │   ├── Footer.tsx      # Global copyright bar
│   │   ├── Icons.tsx       # Consolidated SVG component pool
│   │   ├── LogoutModal.tsx # Logout confirmation popup
│   │   ├── DashboardClient.tsx
│   │   ├── CounselorDashboardClient.tsx
│   │   ├── ReferEarnClient.tsx
│   │   └── MyDocumentsClient.tsx
│   ├── my-documents/       # Documents uploader page (SSR)
│   ├── recommendations/    # College recommendations page (SSR)
│   ├── refer-earn/         # Refer and earn sharing page (SSR)
│   ├── session-booked/     # Session confirmed page (SSR)
│   ├── shortlists/         # Shortlisted colleges page (SSR)
│   ├── talk-to-counselor/  # Expert counselor booking page (SSR)
│   ├── layout.tsx          # HTML template wrapper
│   ├── page.tsx            # Profile dashboard details page (SSR)
│   ├── sitemap.ts          # XML Sitemap generator (SEO)
│   └── robots.ts           # Crawler controller file (SEO)
```

---

## ⚡ Setup & Installation

To run this project locally, ensure you have **Node.js** (v18+) installed.

1.  **Clone & Navigate**:
    ```bash
    cd degreefyd-landing
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    The application will launch locally at:
    👉 **`http://localhost:3000`**

4.  **Production Compilation Check**:
    ```bash
    npm run build
    ```
