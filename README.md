# DegreeFYD Landing Dashboard

A modern, highly responsive user profile and college counseling dashboard built using **Next.js 16** (Turbopack compiler), **React 19**, **Tailwind CSS v3**, and written entirely in clean **ES6 JavaScript**.

## 🚀 Key Features

### 1. Dashboard & Profile Details (`/`)
*   **User Profiles**: Features a header with the logo, search bar, and profile badge.
*   **Profile Image Hover Effect**: Interactive avatar section with a smooth camera overlay showing "Change photo" on mouse hover.
*   **Completeness Tracker**: Profile details box with a circular progress gauge (65% complete).

### 2. College Recommendations (`/recommendations`)
*   **Grid Search**: Dynamic, responsive grid showing recommended colleges.
*   **Smart Badges**: Displays NIRF ranking badges and geographic pins.
*   **Detailed Analytics**: Outlines fee structures, study modes, and quick application options.

### 3. Shortlisted Colleges (`/shortlists`)
*   **Saved Colleges**: Shows a structured collection of saved colleges with active (filled) bookmark tags.
*   **Application Continuity**: Outlines active courses shortlisted with a solid dark navy `"Continue application"` shortcut.

### 4. Talk to Counselor (`/talk-to-counselor`)
*   **Counselor Selection**: Grid of active counselor profiles (Hindi/English speaking, ratings, experience stats).
*   **Interactive Booking Modal**: Pick slots via date tabs and time selectors (9:30 AM to 7:30 PM).
*   **Success Notification Popup**: Auto-closes after 3 seconds with a visual checkmark animation, redirecting to confirmation.

### 5. Session Booked Confirmation (`/session-booked`)
*   **Booking Success View**: Structured confirmation screen showcasing counselor details, date, time slot, and action buttons.

### 6. Upload Documents (`/my-documents`)
*   **Multi-State Cards**:
    *   *Uploaded*: Displays a sharp preview of the document (`doc_preview.png`) and validation status (either `"Change"` button or orange `"Validation in process..."` pill).
    *   *Empty*: Dashed upload box with outline icons and a `"Browse files"` trigger.
*   **Simulated Upload**: Interactive state loader displaying `"Uploading..."` for 1.5 seconds when browse/change is triggered.
*   **2-Column Mobile Grid**: Stacks cards side-by-side in a responsive double column on mobile screens.

### 7. Refer & Earn (`/refer-earn`)
*   **Promotional Banner**: Implements a dedicated vector graphic banner detailing the referral program.
*   **Horizontal Layout**: Aligns referral link copier, WhatsApp share button, and Email share button horizontally in a single row on desktop viewports.
*   **Interactive Link Copier**: Readonly link box with a nested copy icon button and a vertical separator line.
*   **Social Shares**: Outlined green WhatsApp and navy Email sharing integrations.

### 8. Shared Sidebar Navigation & Layout
*   **Responsive Sticky Header**: Sticky top navbar using a three-column grid layout for perfect centering of nav items.
*   **Independent Scroll Sidebar**: Rounded card sidebar (`211px` x `552px`) fixed on the desktop viewport under the header, with a `24px` horizontal gap to the content cards, allowing the main content to scroll independently.

---

## 🛠️ Technology Stack

*   **Framework**: Next.js 16.2.10 (Turbopack enabled)
*   **Library**: React 19.2.4
*   **Language**: JavaScript (ES6 ESM format)
*   **Styling**: Tailwind CSS 3.4.19

---

## 📂 Project Structure

```text
degreefyd-landing/
├── public/                 # Static media assets (banners, icons, previews)
├── src/app/
│   ├── components/         # Shared Layout & Client Components
│   │   ├── Header.jsx      # Sticky top navbar (3-column grid layout)
│   │   ├── Sidebar.jsx     # Left-side navigation card (fixed positioning)
│   │   ├── Footer.jsx      # Global copyright bar
│   │   ├── Icons.jsx       # Consolidated SVG component pool
│   │   ├── LogoutModal.jsx # Logout confirmation popup
│   │   ├── DashboardClient.jsx
│   │   ├── CounselorDashboardClient.jsx
│   │   ├── ReferEarnClient.jsx
│   │   └── MyDocumentsClient.jsx
│   ├── my-documents/       # Documents uploader page (SSR)
│   ├── recommendations/    # College recommendations page (SSR)
│   ├── refer-earn/         # Refer and earn sharing page (SSR)
│   ├── session-booked/     # Session confirmed page (SSR)
│   ├── shortlists/         # Shortlisted colleges page (SSR)
│   ├── talk-to-counselor/  # Expert counselor booking page (SSR)
│   ├── layout.jsx          # HTML template wrapper
│   ├── page.jsx            # Profile dashboard details page (SSR)
│   ├── sitemap.js          # XML Sitemap generator (SEO)
│   └── robots.js           # Crawler controller file (SEO)
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
