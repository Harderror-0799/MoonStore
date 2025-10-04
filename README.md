# Moon Store Website

A modern, responsive website for Moon Store - Everything for Sale!

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Smooth animations, hover effects, and interactive elements
- **Product Showcase**: Display of various product categories
- **Contact Form**: Easy way for customers to get in touch
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile Menu**: Hamburger menu for mobile devices

## Technologies Used

- HTML5
- CSS3 (with modern features like Grid, Flexbox, and CSS animations)
- JavaScript (Vanilla JS)
- Google Fonts (Poppins)

## Project Structure

```
moon-store-website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   ├── logo.png       # Moon Store logo
│   └── poster.png     # Product poster
└── README.md          # This file
```

## Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub (e.g., `moon-store`)
2. Upload all files from the `moon-store-website` folder
3. Go to repository Settings → Pages
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be published at `https://yourusername.github.io/moon-store`

### Method 2: Using Git Command Line

```bash
# Navigate to the project directory
cd moon-store-website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Moon Store website"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/moon-store.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings as described in Method 1.

## Local Development

To run the website locally:

1. Simply open `index.html` in your web browser
2. Or use a local server (recommended):
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Then visit http://localhost:8000 in your browser
   ```

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #9b59b6;
    --dark-bg: #0a0e27;
    --light-text: #ffffff;
    --gray-text: #a0a0a0;
    --accent-color: #00d4ff;
}
```

### Adding Products

Edit the products section in `index.html` and add more product cards following the existing structure.

### Updating Contact Information

Update the contact details in:
- `index.html` (Contact section and Footer)
- `script.js` (Contact form and product inquiry alerts)

## Contact Information

- **Phone**: +27 71 234 1842
- **Email**: moonstoresale@gmail.com
- **Social Media**: @mmoonstore
- **Facebook**: Zack's Van kotsiMusic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Moon Store. All rights reserved.

## Future Enhancements

- Add shopping cart functionality
- Integrate payment gateway
- Add product detail pages
- Implement search functionality
- Add customer reviews section
- Integrate with backend API
- Add admin panel for product management
