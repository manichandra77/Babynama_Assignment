# Babynama Webinar Platform - Next.js

A beautiful, responsive Next.js application for browsing upcoming live webinars from Babynama's expert pediatricians and child specialists.

## Features

- **Modern Next.js Architecture**: Built with Next.js 14 App Router for optimal performance
- **Server-Side Rendering**: Fast initial page loads and SEO optimization
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive Navigation**: Seamless client-side routing with active states
- **Webinar Cards**: Elegant card-based layout displaying comprehensive webinar information
- **Expert Speakers**: Featured sessions from renowned pediatric specialists
- **Category System**: Color-coded categories for easy identification
- **Interactive Elements**: "View Details" buttons with console logging functionality

## Live Demo

**Live URL**: [Will be updated after Vercel deployment]

## Technical Stack

- **Next.js 14** with App Router for modern React development
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **Lucide React** for consistent iconography
- **Inter Font** for optimal typography

## Key Implementation Details

### Technical Choices Made

**Next.js App Router**: I chose to use Next.js 14's App Router instead of the Pages Router because it provides better performance through automatic code splitting, improved SEO with server-side rendering, and a more intuitive file-based routing system. The App Router also enables better component organization with layouts and loading states.

**Client Components Strategy**: The webinars page uses the 'use client' directive because it requires interactivity (button clicks and console logging). This demonstrates understanding of Next.js's hybrid approach where we can choose between server and client rendering based on component needs.

**Component Architecture**: Created a separate `Navigation` component in the components directory to promote reusability and maintain clean separation of concerns. This allows the navigation to be easily maintained and reused across different layouts.

### Project Structure

```
app/
├── components/
│   └── Navigation.tsx      # Reusable navigation component
├── webinars/
│   └── page.tsx           # Webinars listing page
├── globals.css            # Global styles with Tailwind
├── layout.tsx             # Root layout with navigation
└── page.tsx              # Home page
```

## User Story Implementation

✅ **Dedicated Webinars Page**: Created at `/webinars` route with clean, intuitive design  
✅ **Mock Data**: Implemented realistic webinar data with 4+ sessions from actual medical professionals  
✅ **Interactive Cards**: Each webinar displays as a styled card with comprehensive information  
✅ **View Details Functionality**: Buttons log webinar IDs to browser console as specified  

## Design Highlights

- **Apple-level Aesthetics**: Meticulous attention to detail with premium visual presentation
- **Gradient Backgrounds**: Subtle blue-to-teal gradients creating depth and visual interest
- **Hover Effects**: Smooth scale and shadow transitions on interactive elements
- **Typography Hierarchy**: Clear information hierarchy using Inter font with varied weights
- **Color-coded Categories**: Visual categorization system for different webinar topics
- **Micro-interactions**: Thoughtful animations that enhance user engagement

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd babynama-webinar-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Responsive Breakpoints

- **Mobile**: Optimized for screens 640px and below
- **Tablet**: Enhanced layout for 768px - 1024px screens  
- **Desktop**: Full-featured experience for 1024px+ screens

## Next.js Features Used

- **App Router**: Modern file-based routing system
- **Server Components**: Default server-side rendering for better performance
- **Client Components**: Interactive components with 'use client' directive
- **Layout System**: Shared layouts with automatic nesting
- **Font Optimization**: Automatic font optimization with next/font
- **Image Optimization**: Built-in image optimization (ready for future use)

## Assignment Completion

This project fulfills all requirements of the Babynama internship assignment:

- ✅ Built with Next.js and React.js as specified
- ✅ Webinars page at `/webinars` route
- ✅ Mock data array with id, title, speaker, and date fields
- ✅ Styled cards displaying webinar information
- ✅ Interactive "View Details" buttons with console logging
- ✅ Production-ready code quality and design
- ✅ Responsive design for all devices

---
