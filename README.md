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

## 🎨 Color Palettes

### Rocking Red
- **#E44236** - Vibrant coral red
- **#B83227** - Deep crimson
- **#D63031** - Bright red
- **#E84342** - Soft red
- **#FF3031** - Electric red
- **#A2F16B** - Lime accent
- **#EC4849** - Cherry red
- **#FF3E4D** - Hot pink-red
- **#E71C23** - Classic red
- **#EA425C** - Rose red
- **#E8290C** - Orange-red
- **#AE1438** - Burgundy
- **#E83350** - Magenta-red
- **#FF4848** - Bright coral
- **#FF362E** - Fire red

### Beautiful Blue
- **#3498DB** - Sky blue
- **#2475B0** - Ocean blue
- **#74B9FF** - Light blue
- **#0A79DF** - Royal blue
- **#4834DF** - Deep purple-blue
- **#30336B** - Navy blue
- **#487EB0** - Steel blue
- **#192A56** - Midnight blue
- **#6A89CC** - Periwinkle
- **#0A3D62** - Dark navy
- **#4BCFFA** - Cyan blue
- **#0ABDE3** - Turquoise
- **#25CCF7** - Bright cyan
- **#67E6CD** - Mint blue
- **#3C40C6** - Electric blue

### Glowing Green
- **#2ECC72** - Emerald green
- **#26AE60** - Forest green
- **#6AB04C** - Lime green
- **#6AB04A** - Grass green
- **#BADC57** - Light lime
- **#43BE31** - Kelly green
- **#45CE30** - Bright green
- **#10A881** - Teal green
- **#1BCA9B** - Seafoam
- **#7CEC9F** - Mint green
- **#019031** - Deep green
- **#A3CB37** - Olive green
- **#75DA8B** - Soft green
- **#53E0BC** - Aqua green
- **#218F76** - Pine green

### Young Yellow
- **#EEC213** - Golden yellow
- **#F5C469** - Soft gold
- **#F4C724** - Bright yellow
- **#F0DF87** - Pale yellow
- **#DFAF2B** - Amber
- **#FAC42F** - Sunshine yellow
- **#F3B63A** - Orange-yellow
- **#FBD28B** - Cream yellow
- **#F3B431** - Mustard
- **#FAD02E** - Lemon yellow
- **#E5B143** - Honey
- **#F3CC79** - Blonde
- **#F9DDA4** - Light cream
- **#FFF222** - Electric yellow
- **#E1DA00** - Chartreuse

### Glossy Gray
- **#7B8788** - Medium gray
- **#99AAAB** - Light gray
- **#2C3335** - Dark charcoal
- **#616C6F** - Slate gray
- **#DAE0E2** - Light silver
- **#535C68** - Blue-gray
- **#333945** - Gunmetal
- **#2F363F** - Charcoal
- **#586776** - Storm gray
- **#8395A7** - Cool gray
- **#A4B0BD** - Silver-blue
- **#777E8B** - Neutral gray
- **#758AA2** - Blue-steel
- **#47535E** - Dark slate
- **#4C4B4B** - Graphite

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Ideas for Contributions

- Add new color palettes (e.g., pastels, neons, earth tones)
- Implement color format conversion (HEX to RGB, HSL, etc.)
- Add search functionality for colors
- Create color harmony suggestions
- Implement color accessibility features
- Add dark mode toggle
- Enhance mobile experience

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Daksh Gondaliya**
- GitHub: [@DakshGondaliya](https://github.com/DakshGondaliya)
- Built with ❤️ in Gandhinagar, India

## 🙏 Acknowledgments

- [Material Design Components](https://material.io/components) for the beautiful UI components
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) for smooth animations
- [Clipboard.js](https://clipboardjs.com/) for copy functionality
- [Font Awesome](https://fontawesome.com/) for icons
- Color palette inspiration from various design resources

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

- None currently reported

## 📈 Future Enhancements

- [ ] Add color export functionality (CSS, JSON, etc.)
- [ ] Implement custom palette creation
- [ ] Add color blindness accessibility features
- [ ] Create API for programmatic access
- [ ] Add gradient generator
- [ ] Implement color trend analysis

---

<p align="center">
  Made with ❤️ for designers and developers worldwide
</p>
