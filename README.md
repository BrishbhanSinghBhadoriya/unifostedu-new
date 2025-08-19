# Unifost Education - Next.js Version

This is the Next.js version of the Unifost Education platform, converted from the original React application.

## 🚀 Features

- **Modern Next.js 15** with App Router
- **TypeScript** support for better development experience
- **Tailwind CSS** for styling
- **Responsive Design** that works on all devices
- **SEO Optimized** with Next.js built-in features
- **Fast Performance** with Next.js optimizations

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── blog/              # Blog pages
│   ├── courses/           # Course detail pages
│   ├── dashboard/         # User dashboard
│   ├── universities/      # University detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/             # Reusable components
│   ├── auth/              # Authentication components
│   ├── pages/             # Page-specific components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ChatbotWidget.tsx  # Chat widget
└── lib/                    # Utility functions
    └── axios.js           # API configuration
```

## 🛠️ Technologies Used

- **Next.js 15.4.7** - React framework
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4.1.4** - Utility-first CSS
- **Framer Motion** - Animation library
- **AOS** - Scroll animations
- **React Icons** - Icon library
- **Axios** - HTTP client

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd unifost-next-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Available Routes

### Main Pages
- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/listofcollege` - College listing
- `/bookdemo` - Book demo form
- `/privacy` - Privacy policy

### Course Pages
- `/coursesearch` - Course search
- `/courses/[slug]` - Course details

### University Pages
- `/universities/[slug]` - University details

### Blog Pages
- `/blog/blog-page` - Blog listing
- `/blog/[slug]` - Individual blog posts

### Authentication
- `/login` - Login page
- `/register` - Registration page

### Dashboard
- `/dashboard` - Main dashboard
- `/dashboard/courses` - My courses
- `/dashboard/progress` - Learning progress
- `/dashboard/settings` - Account settings

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001
```

### API Configuration

The API configuration is in `src/lib/axios.js` and supports both local and production backends.

## 🎨 Styling

The application uses Tailwind CSS with custom color schemes:
- Primary: `#00ffe0` (Cyan)
- Secondary: `#001e3c` (Dark Blue)
- Accent: `#003b6c` (Medium Blue)

## 📱 Responsive Design

The application is fully responsive and works on:
- Mobile devices
- Tablets
- Desktop computers
- Large screens

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 🔄 Migration Notes

### From React Router to Next.js App Router

- `useNavigate()` → `useRouter()` from `next/navigation`
- `Link` from `react-router-dom` → `Link` from `next/link`
- Route components → Page components in `app/` directory
- Dynamic routes → `[slug]` folders

### Component Changes

- Added `'use client'` directive for client components
- Converted to TypeScript with proper interfaces
- Updated imports to use `@/` alias
- Made dynamic route components async for Next.js 15 compatibility

## 📊 Performance Features

- **Image Optimization** with Next.js Image component
- **Code Splitting** automatic with App Router
- **Static Generation** for better SEO
- **Server-Side Rendering** for dynamic content
- **Fast Refresh** during development

## 🧪 Testing

To run tests (when implemented):
```bash
npm run test
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: info@unifostedu.com
- Phone: +91 93547 35410

## 🔮 Future Enhancements

- [ ] Add more course and university pages
- [ ] Implement user authentication system
- [ ] Add payment integration
- [ ] Create admin dashboard
- [ ] Add more blog content
- [ ] Implement search functionality
- [ ] Add course comparison features
- [ ] Create mobile app

---

**Note**: This is a converted version of the original React application. All functionality has been preserved while leveraging Next.js features for better performance and developer experience.
