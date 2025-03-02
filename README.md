# Kush Ise's Portfolio

This is the personal portfolio website of Kush Ise, a Software Development Engineer with expertise in React, Node.js, and full-stack development.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contact](#contact)

## Overview

This portfolio website showcases Kush Ise's skills, projects, and professional experience. It's built using Next.js and React, with a focus on performance, accessibility, and responsive design.

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Dark mode support
- Interactive UI components using shadcn/ui
- Animated sections using Framer Motion
- Contact form with email functionality
- Project showcase with filterable categories
- Skills section with categorized display
- Experience timeline
- Achievements showcase

## Technologies Used

- Next.js 13+ (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion for animations
- Vercel for deployment
- Node.js and Express for backend API (contact form)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   \`\`\`
   git clone https://github.com/Kush614/portfolio.git
   cd portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Create a \`.env.local\` file in the root directory and add the following environment variables:
   \`\`\`
   EMAIL_HOST=your_email_host
   EMAIL_PORT=your_email_port
   EMAIL_SECURE=true_or_false
   EMAIL_USER=your_email_username
   EMAIL_PASS=your_email_password
   \`\`\`

4. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
portfolio/
├── app/
│   ├── api/
│   │   └── contact.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── about.tsx
│   ├── achievements.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── hero.tsx
│   ├── main-nav.tsx
│   ├── mode-toggle.tsx
│   ├── projects.tsx
│   ├── scroll-to-top.tsx
│   └── skills.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── [images and other static files]
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
\`\`\`

## Deployment

This project is set up for easy deployment on Vercel. Simply connect your GitHub repository to Vercel, and it will automatically deploy your main branch.

Make sure to add the environment variables in your Vercel project settings.

## Contact

Kush Ise - [kushise27@gmail.com](mailto:kushise27@gmail.com)

Project Link: [https://github.com/Kush614/portfolio](https://github.com/Kush614/portfolio)

---

Feel free to reach out if you have any questions or suggestions!

