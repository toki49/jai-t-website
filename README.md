# Justice and AI Tracker (JAI-T) Website

Welcome to the Justice and AI Tracker (JAI-T) project! Developed by Georgetown McCourt School of Public Policy The Evidence for Justice Lab, this website documents and visualizes the adoption and utilization of AI-driven tools within courts, correctional facilities, and police departments. Built with React and Vite, this website features a searchable and request to download database, interactive map, and streamlined user interaction logging.

---

## Table of Contents
- [Live Site](#live-site)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [User Interaction & Tracking](#user-interaction--tracking)
- [EmailJS & Google Apps Script Integration](#emailjs--google-apps-script-integration)
- [Contributing](#contributing)
- [Support](#support)
- [Website Guide](#website-guide)

---

## Live Site

> [Visit the JAI-T Website](https://www.jai-t.com/)

---

## Site Features
- **Interactive Map:** Visualizes AI deployments in the criminal justice system using Datawrapper.
- **Database:** Browse and filter AI tools and use cases. Filter by State, Domain, and/or Category. Can also send CSV download requests.
- **Taxonomy & Methodology:** Understand the data collection process, methodology, and taxonomy used within the Tracker.
- **Submit an AI Deployed Tool:** Submit an AI deployed tool via form in the Contact page.
- **Newsletter Signup:** Stay informed about updates by signing up for our newsletter in the Footer.
- **Insights:** Check back soon for justice insight reports based on our findings and AI use in the criminal justice landscape. 
- **User Activity Tracking:** All user actions are logged for transparency and analytics. To understand further about EmailJS and Google App Script implementation, read the 

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### Installation
1. **Clone the repository:**
	 ```sh
	 git clone https://github.com/your-username/jai-t-website.git
	 cd jai-t-website
	 ```
2. **Install dependencies:**
	 ```sh
	 npm install
	 ```
3. **Start the development server:**
	 ```sh
	 npm run dev
	 ```
4. Open the local URL (usually `http://localhost:5173`) in your browser.

---

## Project Structure

```
EMAILJS_SUBMISSION_SETUP.md
index.html
package.json
vite.config.js
public/
src/
	App.jsx
	components/
		DataTable.jsx
		DownloadModal.jsx
		FilterSidebar.jsx
		Footer.jsx
		Header.jsx
		Home.jsx
	pages/
		About.jsx
		Contact.jsx
		FAQ.jsx
		Insights.jsx
		JAITDatabase.jsx
		Methodology.jsx
		Taxonomy.jsx
	utils/
		csvParser.js
```

---

## User Interaction & Tracking

All major user interaction:
- **Download CSV**
- **Submit an Entry**
- **Newsletter Sign Up**
- **Site Visits** (via Cloudflare analytics)

All user analytics are logged using Google Apps Script and stored in a Google Sheet for analytics and transparency.

---

## EmailJS & Google Apps Script Integration

- **EmailJS** is used to send form submissions and download requests directly to the project email. Utilized in: 
	- Contact.jsx 
	- DownloadModal.jsx
- **Google Apps Script** logs all submissions and newsletter signups to a Google Sheet.
	- Footer.jsx
	- Contact.jsx
	- DownloadModal.jsx
- See `EMAILJS_SUBMISSION_SETUP.md` for detailed setup instructions.

---

## Contributing

1. Fork the repository and clone your fork.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them with clear messages.
4. Push to your fork and open a pull request.

---

## Support

For questions or help, please contact evidenceforjustice@georgetown.edu or open an issue on GitHub.

---

## Website Guide

For a detailed admin guide, see:  
[Justice and AI Tracker Website Guide](https://docs.google.com/document/d/1xksPtwXJXOIEEIVXQRMWtc9tsF6Kns2fC2xt5svEYKk/edit?usp=sharing)

---

**Developed by the Evidence for Justice Lab at Georgetown University.**

