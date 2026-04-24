# Data Science Portfolio Website

A modern, responsive portfolio website showcasing machine learning projects, data analysis work, and AI solutions. Built with Next.js 16, TypeScript, Tailwind CSS, and ShadCN UI components.

## Features

- **Dynamic Project Management**: Easily add, edit, and showcase projects through JSON data
- **Advanced Filtering**: Search and filter projects by category, technology, or keywords
- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **SEO Optimized**: Automatic sitemap generation, meta tags, and Open Graph support
- **Dynamic Routing**: Individual project detail pages with related project recommendations
- **Performance**: Static site generation for fast load times
- **Professional Design**: Clean, modern UI with focus on readability and user experience

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles and design tokens
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # XML sitemap for SEO
│   └── projects/
│       ├── page.tsx            # Projects listing page with filtering
│       └── [slug]/
│           └── page.tsx        # Dynamic project detail pages
├── components/
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer
│   ├── hero.tsx                # Landing page hero section
│   ├── featured-projects.tsx    # Featured projects showcase
│   ├── project-card.tsx        # Project card component
│   └── project-filter.tsx      # Search and filter component
├── lib/
│   ├── types.ts                # TypeScript interfaces
│   └── projects.json           # Project data (easily customizable)
├── public/
│   ├── images/                 # Project images
│   └── robots.txt              # SEO robots file
```

## Getting Started

### Installation

1. **Clone or extract the project**
   ```bash
   cd your-project-folder
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Adding Your Projects

Edit `lib/projects.json` to add your own projects. Each project should have:

```json
{
  "id": "unique-id",
  "slug": "project-url-slug",
  "title": "Project Title",
  "description": "Full description",
  "shortDescription": "Brief one-liner",
  "category": "machine-learning|data-analysis|nlp|computer-vision|time-series",
  "categoryLabel": "Display name",
  "image": "/images/project-image.jpg",
  "technologies": ["Python", "TensorFlow", "Pandas"],
  "date": "2024-01-15",
  "featured": true,
  "problem": "Problem statement...",
  "approach": "Your approach...",
  "methodologies": ["Method 1", "Method 2"],
  "results": [
    { "metric": "Accuracy", "value": "95%" }
  ],
  "keyFindings": ["Finding 1", "Finding 2"],
  "tools": ["Tool 1", "Tool 2"],
  "dataset": "Dataset name",
  "datasetSize": "1,000 samples",
  "github": "https://github.com/...",
  "notebook": "https://kaggle.com/...",
  "live": "https://demo.com"
}
```

### Customizing Colors and Branding

Edit `app/globals.css` to adjust design tokens:

```css
:root {
  --primary: your-color;
  --accent: your-color;
  /* Update other colors as needed */
}
```

Edit `components/header.tsx` to update the logo and branding.

### Updating Social Links

- **Header**: `components/header.tsx`
- **Footer**: `components/footer.tsx`
- **Hero**: `components/hero.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy
5. Update `sitemap.ts` with your domain name

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean
- Railway
- Any Node.js hosting

## Building for Production

```bash
pnpm build
pnpm start
```

## SEO

The site includes:
- ✅ Automatic XML sitemap (`/sitemap.xml`)
- ✅ robots.txt for search engines
- ✅ Open Graph meta tags
- ✅ Dynamic meta descriptions
- ✅ Structured data ready

Update the domain in `sitemap.ts` and OpenGraph URL in `app/layout.tsx` before deployment.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **ShadCN UI** - Accessible component library
- **Next.js Image** - Optimized image handling
- **Lucide React** - Icon library

## Performance

- ⚡ Static site generation for instant load times
- 🖼️ Optimized images with next/image
- 📦 Minimal JavaScript bundle
- 🎯 Core Web Vitals optimized

## License

This project is open source and available under the MIT License.

## Support

For questions or issues:
1. Check the Next.js documentation: https://nextjs.org/docs
2. Review ShadCN UI components: https://ui.shadcn.com
3. Explore Tailwind CSS docs: https://tailwindcss.com

---

Built with ❤️ for the data science community
