# Bayzid Bostami - Portfolio Website

A premium, interactive, and dark-themed personal portfolio website built for **Bayzid Bostami**, a Mechanical Engineer and Educator (Founder of *Bostami Education*). 

The application is built using the latest web technologies, featuring a highly dynamic and responsive layout inspired by modern design trends. It is designed to showcase educational content, mechanical engineering projects, pricing plans, and a professional timeline.

![Portfolio Preview](/public/image.png)

---

## 🚀 Key Features

- **Interactive Canvas Background**: A beautiful, real-time node-connection background animation that responds dynamically to user interaction.
- **Dynamic Theme Switcher**: A functional slide-out settings drawer allowing users to change the site's primary accent color instantly without a page reload (via dynamic CSS variables).
- **Responsive Layout**: Includes a fixed left-sidebar on desktop that elegantly converts into a scrollable, full-width header on mobile devices.
- **Scroll-Spy Navigation**: A floating right-dock navigation menu that tracks the user's scroll position and highlights the currently active section.
- **Project Filtering Grid**: A responsive portfolio grid that allows users to filter projects by categories (e.g., Mechanical, YouTube, Design).
- **Interactive Timeline**: A detailed, vertical timeline showcasing educational background and professional experience.
- **Testimonial Slider**: An auto-advancing, fade-transition slider displaying student and client feedback.
- **Custom Scrollbar & Animations**: Smooth scrolling, custom scrollbar styling, and entry fade-in animations across all components.

---

## 🛠️ Technologies Used

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) + Turbopack
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) 
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts (Inter)](https://fonts.google.com/)
- **Deployment**: Vercel Ready

---

## 💻 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
Make sure you have Node.js installed (v18.17 or higher is recommended).

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/yourusername/bayzidbostami.git
   cd bayzidbostami
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## 📂 Project Structure

```text
├── app/
│   ├── globals.css          # Global CSS, Tailwind v4 theme configs & CSS variables
│   ├── layout.tsx           # Root layout and font configurations
│   └── page.tsx             # Main landing page assembling all components
├── components/
│   ├── ContactForm.tsx      # Contact form and info cards
│   ├── InteractiveBackground.tsx # Canvas node-link animation
│   ├── LeftSidebar.tsx      # Sticky profile sidebar
│   ├── PortfolioGrid.tsx    # Filterable project showcase
│   ├── RightNavbar.tsx      # Scroll-spy navigation dock
│   ├── RoundSpin.tsx        # Rotating "My Projects" badge
│   ├── SectionBadge.tsx     # Reusable section header labels
│   ├── TestimonialSlider.tsx# Auto-playing review slider
│   ├── ThemeSettings.tsx    # Slide-out drawer for color theme selection
│   └── Timeline.tsx         # Experience & education timeline
├── public/                  # Static assets (images, icons)
└── package.json             # Project dependencies and scripts
```

---

## 🎨 Theme Customization

The project utilizes native CSS variables within Tailwind CSS v4. The primary accent color is controlled by the `--accent` CSS variable defined in `app/globals.css`. 

The `ThemeSettings` component updates this variable dynamically at runtime via JavaScript `document.documentElement.style.setProperty("--accent", color)`, immediately applying the new color across all components relying on the `text-accent`, `bg-accent`, or `border-accent` classes.

---

## 📝 Credits & Authors

- **Subject / Owner**: [Bayzid Bostami](https://youtube.com/@bostamieducation)
- **Developer**: [Rakibul Hasan](https://rakibul.netlify.app/)

---

## 📄 License

This project is licensed under the MIT License.
