# Shailesh Singh - Portfolio Website

A modern, interactive portfolio website built with Next.js 15+, TypeScript, TailwindCSS, and Framer Motion. Features a dark theme with 3D effects, interactive animations, and an AI-powered chatbot.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and gradient animations
- **Interactive 3D Elements**: Floating animations and particle background
- **AI Chatbot**: Powered by Google Gemini AI for interactive conversations
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Next.js 15+ App Router for optimal performance
- **Accessibility**: WCAG compliant with proper semantic markup
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion & CSS animations
- **3D Graphics**: Three.js with React Three Fiber
- **AI Integration**: Google Generative AI (Gemini)
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm
- Google AI API Key (for chatbot functionality)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shailesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Google AI API key to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_AI_API_KEY=your_api_key_here
   ```
   
   Get your API key from: https://makersuite.google.com/app/apikey

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── Chatbot.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── ScrollToTop.tsx
│   └── Skills.tsx
├── data/                  # Data and content
│   └── portfolio.ts       # Portfolio data
└── lib/                   # Utilities
    ├── chatbot.ts         # Chatbot service
    └── utils.ts           # Utility functions
```

## 🎨 Customization

### Updating Portfolio Data

Edit `src/data/portfolio.ts` to update:
- Personal information
- Skills and technologies
- Work experience
- Projects
- Achievements
- Contact information

### Changing Colors

Update the color scheme in `tailwind.config.ts`:
- Primary colors (blue theme)
- Accent colors (purple theme)
- Gray scale for dark theme

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 🤖 AI Chatbot Setup

The chatbot uses Google's Gemini AI model. To set it up:

1. Get an API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to your `.env.local` file
3. The chatbot will automatically work with context about your portfolio

If no API key is provided, the chatbot falls back to keyword-based responses.

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Touch-friendly interactions
- Optimized typography and spacing

## ⚡ Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Font Optimization**: Google Fonts with display swap
- **Bundle Analysis**: Built-in bundle analyzer
- **SEO**: Comprehensive meta tags and structured data

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

1. Build the project:
   ```bash
   pnpm build
   ```

2. Start the production server:
   ```bash
   pnpm start
   ```

## 🔧 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript check

## 🎯 8 Website Design Principles Implementation

1. **User Friendly**: Intuitive navigation and clear call-to-actions
2. **Consistency**: Uniform design patterns and component styling
3. **Typography**: Readable fonts with proper hierarchy
4. **Responsive**: Mobile-first design with all device compatibility
5. **Color Palette**: Professional dark theme with accent colors
6. **Fast Loading**: Optimized images and efficient code splitting
7. **Easy Navigation**: Smooth scrolling and fixed navigation
8. **Communication**: Clear messaging and interactive chatbot

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have questions or need help setting up the portfolio, feel free to reach out:
- Email: ss.forcoding@gmail.com
- LinkedIn: [Shailesh Singh](https://www.linkedin.com/in/shailesh-singh-544bb3229)
- GitHub: [shailesh-singh-ss](https://github.com/shailesh-singh-ss)

---

Made with ❤️ by Shailesh Singh
