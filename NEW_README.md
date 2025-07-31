# Cool Color Picker 🎨

<p align="center">
  <img src="https://github.com/DakshGondaliya/Cool_Colorpicker/blob/master/images/logo_2.PNG" />
</p>

A beautiful, interactive web-based color picker that provides curated color palettes organized by themes. Users can easily browse and copy hex color codes for their design projects.

## ✨ Features

- **Curated Color Palettes**: Five themed color categories:
  - 🔴 **Rocking Red** - Vibrant red shades
  - 🔵 **Beautiful Blue** - Cool blue tones
  - 🟢 **Glowing Green** - Fresh green hues
  - 🟡 **Young Yellow** - Bright yellow variations
  - ⚫ **Glossy Gray** - Sophisticated gray palette

- **One-Click Copy**: Click any color box to instantly copy its hex code to clipboard
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Elegant scroll animations powered by AOS (Animate On Scroll)
- **Progress Indicator**: Visual progress bar while scrolling through palettes
- **Material Design**: Built with Material Design Components for modern UI

## 🚀 Live Demo

Visit the live application: [Cool Color Picker](https://dakshgondaliya.github.io/Cool_Colorpicker/)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling and animations
- **JavaScript** - Interactive functionality
- **Material Design Components (MDC)** - UI components
- **AOS (Animate On Scroll)** - Scroll animations
- **Clipboard.js** - Copy-to-clipboard functionality
- **Font Awesome** - Icons
- **jQuery** - DOM manipulation

## 📁 Project Structure

```
Cool_Colorpicker/
├── index.html              # Main HTML file
├── styles/
│   ├── main.css            # Custom styles
│   └── animate.min.css     # Animation styles
├── js/
│   ├── clipboard.js        # Clipboard functionality
│   └── clipboard.min.js    # Minified clipboard library
├── script/
│   └── main.js            # Main JavaScript functionality
├── images/
│   └── logo_2.PNG         # Application logo
├── font/                  # Custom fonts (if any)
├── css/                   # Additional CSS files
├── LICENSE                # MIT License
└── README.md             # Project documentation
```

## 🎯 How to Use

1. **Browse Color Palettes**: Scroll through the five themed color sections
2. **Copy Colors**: Click on any color box to copy its hex code to your clipboard
3. **Visual Feedback**: The application provides instant feedback when colors are copied
4. **Responsive Experience**: Use on any device - desktop, tablet, or mobile

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DakshGondaliya/Cool_Colorpicker.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Cool_Colorpicker
   ```

3. **Open in browser:**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   # or
   python -m http.server 8000  # For local server
   ```

### Local Development

For local development with live reload, you can use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.
