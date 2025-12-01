// Data structures for resume entries
let workExperienceList = [];
let educationList = [];
let certificationList = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to all input fields
    document.getElementById('fullName').addEventListener('input', updatePreview);
    document.getElementById('email').addEventListener('input', updatePreview);
    document.getElementById('phone').addEventListener('input', updatePreview);
    document.getElementById('location').addEventListener('input', updatePreview);
    document.getElementById('website').addEventListener('input', updatePreview);
    document.getElementById('summary').addEventListener('input', updatePreview);
    document.getElementById('skills').addEventListener('input', updatePreview);

    // Load data from localStorage if available
    loadFromLocalStorage();
    updatePreview();
});

// Work Experience Functions
function addWorkExperience() {
    const id = Date.now();
    workExperienceList.push({
        id,
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    });
    renderWorkExperience();
}

function removeWorkExperience(id) {
    workExperienceList = workExperienceList.filter(item => item.id !== id);
    renderWorkExperience();
    updatePreview();
}

function updateWorkExperience(id, field, value) {
    const item = workExperienceList.find(item => item.id === id);
    if (item) {
        item[field] = value;
        saveToLocalStorage();
        updatePreview();
    }
}

function renderWorkExperience() {
    const container = document.getElementById('workExperienceList');
    container.innerHTML = '';

    workExperienceList.forEach(item => {
        const div = document.createElement('div');
        div.style.marginBottom = '15px';
        div.innerHTML = `
      <div class="form-group">
        <input type="text" placeholder="Company Name" value="${item.company}" 
          onchange="updateWorkExperience(${item.id}, 'company', this.value)">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Job Position" value="${item.position}"
          onchange="updateWorkExperience(${item.id}, 'position', this.value)">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div class="form-group">
          <input type="text" placeholder="Start Date (e.g., Jan 2020)" value="${item.startDate}"
            onchange="updateWorkExperience(${item.id}, 'startDate', this.value)">
        </div>
        <div class="form-group">
          <input type="text" placeholder="End Date (e.g., Present)" value="${item.endDate}"
            onchange="updateWorkExperience(${item.id}, 'endDate', this.value)">
        </div>
      </div>
      <div class="form-group">
        <textarea placeholder="Description of responsibilities and achievements..."
          onchange="updateWorkExperience(${item.id}, 'description', this.value)">${item.description}</textarea>
      </div>
      <button style="width: 100%; background-color: #dc3545;" onclick="removeWorkExperience(${item.id})">
        ✕ Remove
      </button>
    `;
        container.appendChild(div);
    });
}

// Education Functions
function addEducation() {
    const id = Date.now();
    educationList.push({
        id,
        school: '',
        degree: '',
        field: '',
        graduationDate: ''
    });
    renderEducation();
}

function removeEducation(id) {
    educationList = educationList.filter(item => item.id !== id);
    renderEducation();
    updatePreview();
}

function updateEducation(id, field, value) {
    const item = educationList.find(item => item.id === id);
    if (item) {
        item[field] = value;
        saveToLocalStorage();
        updatePreview();
    }
}

function renderEducation() {
    const container = document.getElementById('educationList');
    container.innerHTML = '';

    educationList.forEach(item => {
        const div = document.createElement('div');
        div.style.marginBottom = '15px';
        div.innerHTML = `
      <div class="form-group">
        <input type="text" placeholder="School / University" value="${item.school}"
          onchange="updateEducation(${item.id}, 'school', this.value)">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div class="form-group">
          <input type="text" placeholder="Degree (e.g., Bachelor)" value="${item.degree}"
            onchange="updateEducation(${item.id}, 'degree', this.value)">
        </div>
        <div class="form-group">
          <input type="text" placeholder="Field of Study" value="${item.field}"
            onchange="updateEducation(${item.id}, 'field', this.value)">
        </div>
      </div>
      <div class="form-group">
        <input type="text" placeholder="Graduation Date" value="${item.graduationDate}"
          onchange="updateEducation(${item.id}, 'graduationDate', this.value)">
      </div>
      <button style="width: 100%; background-color: #dc3545;" onclick="removeEducation(${item.id})">
        ✕ Remove
      </button>
    `;
        container.appendChild(div);
    });
}

// Certification Functions
function addCertification() {
    const id = Date.now();
    certificationList.push({
        id,
        name: '',
        issuer: '',
        date: '',
        credentialUrl: ''
    });
    renderCertification();
}

function removeCertification(id) {
    certificationList = certificationList.filter(item => item.id !== id);
    renderCertification();
    updatePreview();
}

function updateCertification(id, field, value) {
    const item = certificationList.find(item => item.id === id);
    if (item) {
        item[field] = value;
        saveToLocalStorage();
        updatePreview();
    }
}

function renderCertification() {
    const container = document.getElementById('certificationList');
    container.innerHTML = '';

    certificationList.forEach(item => {
        const div = document.createElement('div');
        div.style.marginBottom = '15px';
        div.innerHTML = `
      <div class="form-group">
        <input type="text" placeholder="Certification Name" value="${item.name}"
          onchange="updateCertification(${item.id}, 'name', this.value)">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Issuing Organization" value="${item.issuer}"
          onchange="updateCertification(${item.id}, 'issuer', this.value)">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div class="form-group">
          <input type="text" placeholder="Date Issued" value="${item.date}"
            onchange="updateCertification(${item.id}, 'date', this.value)">
        </div>
        <div class="form-group">
          <input type="text" placeholder="Credential URL (optional)" value="${item.credentialUrl}"
            onchange="updateCertification(${item.id}, 'credentialUrl', this.value)">
        </div>
      </div>
      <button style="width: 100%; background-color: #dc3545;" onclick="removeCertification(${item.id})">
        ✕ Remove
      </button>
    `;
        container.appendChild(div);
    });
}

// Update Preview
function updatePreview() {
    const fullName = document.getElementById('fullName').value || 'Full Name';
    const email = document.getElementById('email').value || 'email@example.com';
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const website = document.getElementById('website').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;

    let previewHTML = `<h1>${escapeHtml(fullName)}</h1>`;

    // Contact info
    const contactParts = [email];
    if (phone) contactParts.push(phone);
    if (location) contactParts.push(location);
    if (website) contactParts.push(website);

    previewHTML += `<div class="contact-info">${contactParts.map(p => escapeHtml(p)).join(' | ')}</div>`;

    // Professional Summary
    if (summary) {
        previewHTML += `<h3>Professional Summary</h3>`;
        previewHTML += `<div class="entry-description">${escapeHtml(summary)}</div>`;
    }

    // Work Experience
    if (workExperienceList.length > 0) {
        previewHTML += `<h3>Work Experience</h3>`;
        workExperienceList.forEach(work => {
            if (work.company || work.position) {
                previewHTML += `
          <div class="entry">
            <div class="entry-title">${escapeHtml(work.position)}</div>
            <div class="entry-subtitle">${escapeHtml(work.company)} | ${escapeHtml(work.startDate)} - ${escapeHtml(work.endDate)}</div>
            ${work.description ? `<div class="entry-description">${escapeHtml(work.description)}</div>` : ''}
          </div>
        `;
            }
        });
    }

    // Education
    if (educationList.length > 0) {
        previewHTML += `<h3>Education</h3>`;
        educationList.forEach(edu => {
            if (edu.school || edu.degree) {
                previewHTML += `
          <div class="entry">
            <div class="entry-title">${escapeHtml(edu.degree)}${edu.field ? ` in ${escapeHtml(edu.field)}` : ''}</div>
            <div class="entry-subtitle">${escapeHtml(edu.school)}${edu.graduationDate ? ` | ${escapeHtml(edu.graduationDate)}` : ''}</div>
          </div>
        `;
            }
        });
    }

    // Skills
    if (skills) {
        previewHTML += `<h3>Skills</h3>`;
        const skillsList = skills.split(',').map(s => escapeHtml(s.trim())).filter(s => s);
        previewHTML += `<div class="entry-description">${skillsList.join(', ')}</div>`;
    }

    // Certifications
    if (certificationList.length > 0) {
        previewHTML += `<h3>Certifications</h3>`;
        certificationList.forEach(cert => {
            if (cert.name) {
                previewHTML += `
          <div class="entry">
            <div class="entry-title">${escapeHtml(cert.name)}</div>
            <div class="entry-subtitle">${escapeHtml(cert.issuer)}${cert.date ? ` | ${escapeHtml(cert.date)}` : ''}</div>
          </div>
        `;
            }
        });
    }

    if (!previewHTML.includes('<h3>')) {
        previewHTML = `<div style="text-align: center; color: #999;">Fill in your information to see preview...</div>`;
    }

    document.getElementById('preview').innerHTML = previewHTML;
    saveToLocalStorage();
}

// HTML escape to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Get resume text for export
function getResumeText() {
    const fullName = document.getElementById('fullName').value || 'Full Name';
    const email = document.getElementById('email').value || 'email@example.com';
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const website = document.getElementById('website').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;

    let text = `${fullName}\n`;
    text += '='.repeat(fullName.length) + '\n\n';

    const contactParts = [email];
    if (phone) contactParts.push(phone);
    if (location) contactParts.push(location);
    if (website) contactParts.push(website);
    text += contactParts.join(' | ') + '\n\n';

    if (summary) {
        text += `PROFESSIONAL SUMMARY\n`;
        text += '-'.repeat(20) + '\n';
        text += summary + '\n\n';
    }

    if (workExperienceList.length > 0 && workExperienceList.some(w => w.company || w.position)) {
        text += `WORK EXPERIENCE\n`;
        text += '-'.repeat(16) + '\n';
        workExperienceList.forEach(work => {
            if (work.company || work.position) {
                text += `${work.position}\n`;
                text += `${work.company} | ${work.startDate} - ${work.endDate}\n`;
                if (work.description) text += `${work.description}\n`;
                text += '\n';
            }
        });
    }

    if (educationList.length > 0 && educationList.some(e => e.school || e.degree)) {
        text += `EDUCATION\n`;
        text += '-'.repeat(9) + '\n';
        educationList.forEach(edu => {
            if (edu.school || edu.degree) {
                text += `${edu.degree}${edu.field ? ` in ${edu.field}` : ''}\n`;
                text += `${edu.school}${edu.graduationDate ? ` | ${edu.graduationDate}` : ''}\n\n`;
            }
        });
    }

    if (skills) {
        text += `SKILLS\n`;
        text += '-'.repeat(6) + '\n';
        text += skills + '\n\n';
    }

    if (certificationList.length > 0 && certificationList.some(c => c.name)) {
        text += `CERTIFICATIONS\n`;
        text += '-'.repeat(13) + '\n';
        certificationList.forEach(cert => {
            if (cert.name) {
                text += `${cert.name}\n`;
                text += `${cert.issuer}${cert.date ? ` | ${cert.date}` : ''}\n`;
                if (cert.credentialUrl) text += `${cert.credentialUrl}\n`;
                text += '\n';
            }
        });
    }

    return text;
}

// Download as TXT
function downloadTXT() {
    const text = getResumeText();
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Download as PDF (using html2pdf library)
function downloadPDF() {
    // Check if html2pdf is available, if not, use a fallback
    if (typeof html2pdf === 'undefined') {
        // Fallback: use a simple method via canvas
        alert('PDF export requires internet connection to load the library. Using TXT download instead.');
        downloadTXT();
        return;
    }

    const fullName = document.getElementById('fullName').value || 'resume';
    const element = document.getElementById('preview').cloneNode(true);
    element.style.padding = '20px';
    element.style.backgroundColor = 'white';

    const opt = {
        margin: 10,
        filename: `${fullName.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };

    html2pdf().set(opt).from(element).save();
}

// LocalStorage Functions
function saveToLocalStorage() {
    const data = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        website: document.getElementById('website').value,
        summary: document.getElementById('summary').value,
        skills: document.getElementById('skills').value,
        workExperienceList,
        educationList,
        certificationList
    };
    localStorage.setItem('resumeData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem('resumeData');
    if (data) {
        const parsed = JSON.parse(data);
        document.getElementById('fullName').value = parsed.fullName || '';
        document.getElementById('email').value = parsed.email || '';
        document.getElementById('phone').value = parsed.phone || '';
        document.getElementById('location').value = parsed.location || '';
        document.getElementById('website').value = parsed.website || '';
        document.getElementById('summary').value = parsed.summary || '';
        document.getElementById('skills').value = parsed.skills || '';
        workExperienceList = parsed.workExperienceList || [];
        educationList = parsed.educationList || [];
        certificationList = parsed.certificationList || [];

        renderWorkExperience();
        renderEducation();
        renderCertification();
    }
}
