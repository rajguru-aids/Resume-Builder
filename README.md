# AI Resume Builder

A **free**, **fast**, and **easy-to-use** online resume builder. Build your professional resume in minutes without any sign-ups or complicated steps.

🌐 **Live Demo**: [https://rajguru-aids.github.io/Resume-Builder/](https://rajguru-aids.github.io/Resume-Builder/)

## ✨ Features

- ⚡ **Instant Updates** — See your resume preview update in real-time as you type
- 💾 **Auto-Save** — Your resume data is automatically saved to your browser's local storage
- 📄 **Multiple Export Formats** — Download as PDF or TXT
- 🔒 **100% Private** — All data is stored locally; nothing is sent to servers
- 📱 **Responsive Design** — Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Professional Templates** — Clean, modern, ATS-friendly resume design
- ✅ **No Sign-up Required** — Start building immediately
- 💯 **Completely Free** — No hidden fees or premium features

## 📋 What You Can Add

- **Personal Information** — Name, email, phone, location, website/portfolio
- **Professional Summary** — Brief overview of your background and goals
- **Work Experience** — Multiple entries with company, position, dates, and descriptions
- **Education** — School, degree, field of study, and graduation dates
- **Skills** — Comma-separated list of your professional skills
- **Certifications** — Certification name, issuer, date, and optional credential URL

## 🚀 Quick Start

### Option 1: Use the Live Version
Visit [https://rajguru-aids.github.io/Resume-Builder/](https://rajguru-aids.github.io/Resume-Builder/) and start building immediately!

### Option 2: Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/rajguru-aids/Resume-Builder.git
   cd Resume-Builder
   ```

2. Open `index.html` in your browser:
   - **Windows**: Double-click `index.html` or drag it into your browser
   - **Mac/Linux**: 
     ```bash
     # Using Python 3
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```
   - **Or** use any local web server (VS Code Live Server extension, etc.)

3. Click "🚀 Start Building" to begin creating your resume!

## 📁 Project Structure

```
Resume-Builder/
├── index.html              # Landing page
├── builder.html            # Resume builder page
├── js/
│   └── app.js             # Main application logic
├── robots.txt             # SEO robots file
├── sitemap.xml            # XML sitemap for SEO
├── package.json           # Project metadata
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## 🎯 How It Works

1. **Fill Form** — Enter your resume information in the form on the left side
2. **Live Preview** — See your resume formatted and updated in real-time on the right
3. **Export** — Download your resume as PDF or TXT file

### Data Storage
- All your data is saved to **browser's localStorage** automatically
- Your data is **never sent to any server**
- Data persists even after you close and reopen the browser
- Clear your browser cache to reset your data

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Storage**: Browser localStorage API
- **Export**: 
  - **TXT**: Native JavaScript string manipulation
  - **PDF**: Optional integration with [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) (loaded from CDN)

## ✋ For PDF Export

The PDF export uses the `html2pdf` library loaded from a CDN. If you want to use PDF export offline, you'll need to:

1. Download the library: `html2pdf.js`
2. Add it to your project
3. Update the script reference in `builder.html`

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Select **main branch** as the source
4. Your site will be live at `https://yourusername.github.io/Resume-Builder/`

### Other Hosting Services
- **Netlify**: Drag and drop the folder, or connect your Git repo
- **Vercel**: Import from Git
- **Firebase Hosting**: Follow their deployment guide
- **Any Static Host**: Just upload the HTML, CSS, and JS files

## 📝 Browser Compatibility

- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- IE 11 ⚠️ (Limited support)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 🎨 Future Enhancements

Potential features for future versions:
- [ ] Multiple resume templates
- [ ] Theme/color customization
- [ ] Spell-check and grammar suggestions
- [ ] AI-powered suggestions for resume content
- [ ] Direct email export
- [ ] LinkedIn import integration
- [ ] Collaboration features
- [ ] Dark mode
- [ ] Multi-language support

## ⚖️ License

This project is licensed under the **MIT License** — see the LICENSE file for details.

## 📧 Support & Feedback

Have questions or feedback? Feel free to:
- Open an [issue](https://github.com/rajguru-aids/Resume-Builder/issues)
- Create a [discussion](https://github.com/rajguru-aids/Resume-Builder/discussions)
- Contact the author

## 🙏 Acknowledgments

- Thanks to all users and contributors
- Inspired by the need for a simple, free resume builder
- Built with ❤️ using vanilla JavaScript

---

**Made with ❤️ for job seekers everywhere**

Happy resume building! 🎉
