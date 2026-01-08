# Magh Mela - Static Website

A modern, responsive, and spiritually-designed website about Magh Mela in Prayagraj with sophisticated background animations.

## ✨ Features

### Visual Animations
- **Floating Diyas (Oil Lamps)**: Glowing orange circles with realistic lamp glow effects drift smoothly across the hero section
- **River Flow Effect**: SVG-based water animation with shimmer reflections symbolizing the sacred Sangam
- **Vanta.js Wave Effect**: Dynamic, interactive wave background that creates an immersive mist-like atmosphere
- **Rose Petals**: Optional falling petal animation for special Snan (bathing) dates with swaying motion
- **Smooth Scroll & Fade-In**: Cards and gallery items reveal elegantly on scroll

### Design Elements
- Traditional Indian cultural theme with saffron, white, blue, and gold colors
- Playfair Display serif fonts for headings (elegant, traditional)
- Poppins sans-serif for body text (modern, readable)
- Responsive grid layouts for all screen sizes
- Accessibility features (focus states, ARIA labels)

## 📂 Project Structure

```
magh-mela-site/
├── index.html              (Home page with hero and animations)
├── about.html              (About Magh Mela)
├── history.html            (History & Significance)
├── rituals.html            (Rituals & Activities)
├── guide.html              (Visitor Guide)
├── gallery.html            (Photo Gallery)
├── faq.html                (FAQ)
├── css/
│   └── style.css           (Main stylesheet with animation keyframes)
├── js/
│   └── main.js             (JavaScript for interactions & animations)
├── images/                 (Placeholder folder for photos)
└── README.md               (This file)
```

## 🎬 Background Animation Details

### 1. Floating Diyas (Oil Lamps)
**Location**: Fixed container overlaying entire page
**Animation**: Continuous floating motion with glow effect
**Features**:
- Radial gradient creates realistic lamp glow
- Multiple box-shadows for depth and light reflection
- Smooth Y and X translation for natural drift
- Scale variation for depth perception
- Responsive count (8 diyas on desktop, 4 on mobile)

```javascript
// Generated dynamically with random positions and delays
diya.style.animationDuration = duration + 's';
diya.style.animationDelay = delay + 's';
```

### 2. River Flow Effect
**Location**: Hero section overlay
**Type**: SVG background with animated positions
**Features**:
- SVG gradient for wave shimmer
- Continuous animation loops seamlessly
- `mix-blend-mode: screen` for light reflection effect
- Opacity blending for natural water appearance

```css
@keyframes riverFlow {
  0% { background-position:0 0; }
  100% { background-position:300% 0; }
}
```

### 3. Vanta.js Wave Background
**Library**: Vanta.js with Three.js
**Location**: Hero section background layer
**Features**:
- Real-time WebGL-based waves
- Non-interactive (pure ambiance)
- Customizable wave height, speed, and color
- Automatically falls back gracefully if library fails
- 30% opacity for subtle effect

```javascript
VANTA.WAVES({
  el: vantaElement,
  waveHeight: 8,
  waveSpeed: 0.6,
  color: 0x1a3a5c,
  opacity: 0.3
});
```

### 4. Rose Petals
**Location**: Fixed container above all content
**Trigger**: January (Magh month) only
**Features**:
- Pink rose petals with transparency
- Dual-layered petal design (mirrored effect)
- Continuous rotation during fall
- Swaying side-to-side motion
- 15 petals with staggered timing

**To enable**: Uncomment `createRosePetals()` in `main.js`

```javascript
// Uncomment in main.js to enable petals on special dates
// createRosePetals();
```

## 🚀 How to Run Locally

### Option 1: Python HTTP Server
```bash
cd magh-mela-site
python -m http.server 8000
# Visit http://localhost:8000
```

### Option 2: Live Server (VS Code)
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### Option 3: Node.js http-server
```bash
npm install -g http-server
http-server
```

## 📱 Responsive Design

- **Desktop (800px+)**: Full animations with 8 diyas
- **Tablet (600px-800px)**: Optimized grid layouts
- **Mobile (480px-600px)**: Touch-friendly navigation, 4 diyas
- **Small Mobile (<480px)**: Single-column layouts

## 🎨 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Saffron | #FF6F00 | Primary accent, headings |
| Blue | #0B74DE | Links, secondary headings |
| Gold | #D4AF37 | Borders, buttons, highlights |
| White | #ffffff | Background, text contrast |

## 🔧 Customization

### Change Animation Speed
Edit `main.js` duration values:
```javascript
const duration = 10 + Math.random() * 5; // Diya duration
const petalDuration = 6 + Math.random() * 3; // Petal fall time
```

### Adjust Diya Count
```javascript
const diyaCount = window.innerWidth > 768 ? 8 : 4;
// Change 8 and 4 to your desired counts
```

### Modify Wave Effect
Edit `main.js` Vanta.WAVES config:
```javascript
waveHeight: 8,      // Increase for taller waves
waveSpeed: 0.6,     // Increase for faster waves
color: 0x1a3a5c,    // Change hex color
```

### Replace Placeholder Images
1. Add your images to the `images/` folder
2. Update image `src` attributes in HTML files
3. Optimize images for web (compress to <500KB per image)

## 📸 Gallery Images

Replace Unsplash placeholders with local images:
- Pilgrims at Sangam
- Saints and Akharas
- Rituals and Gatherings
- Evening River Views

## ⚡ Performance Tips

- Vanta.js is CDN-loaded; check browser console for errors
- Diya animations use CSS (GPU-accelerated)
- Petals can be disabled for lighter load on older devices
- All animations use `transform` and `opacity` for best performance

## 🌐 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 12+)
- IE: No support (graceful fallback)

## 📝 SEO Features

- Semantic HTML structure
- Descriptive meta tags
- Proper heading hierarchy (h1 → h6)
- Image alt attributes
- Fast loading (all CSS/JS inline or CDN)

## 📄 License

Free to use and modify. Replace Unsplash photos with proper credits.

## 🙏 About Magh Mela

Magh Mela is an annual Hindu pilgrimage at Triveni Sangam (confluence of Ganga, Yamuna, and mythical Saraswati rivers) in Prayagraj. The festival celebrates spiritual devotion, cultural heritage, and sacred bathing traditions dating back centuries.
