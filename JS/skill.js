// Skills Data
const skillsData = [
    {
        id: 1,
        name: "HTML5",
        icon: "🌐",
        description: "Semantic markup, SEO optimization",
        level: 90,
        category: "frontend"
    },
    {
        id: 2,
        name: "CSS3",
        icon: "🎨",
        description: "Flexbox, Grid, Animations, Responsive Design",
        level: 65,
        category: "frontend"
    },
    {
        id: 3,
        name: "JavaScript",
        icon: "⚡",
        description: "Basic JS, ES6+, DOM Manipulation (Learning)",
        level: 50,
        category: "frontend"
    },
    {
        id: 4,
        name: "Node.js",
        icon: "🚀",
        description: "Express, REST APIs (Learning)",
        level: 10,
        category: "backend"
    },
    {
        id: 5,
        name: "Git",
        icon: "📦",
        description: "Version Control, GitHub",
        level: 35,
        category: "tools"
    },
    {
        id: 6,
        name: "VS Code",
        icon: "💻",
        description: "Extensions, Debugging",
        level: 50,
        category: "tools"
    },
    {
        id: 7,
        name: "MySQL",
        icon: "🗄️",
        description: "Database Design, Queries (Learning)",
        level: 25,
        category: "backend"
    }
];

// Progress Bars Data
const progressData = [
    { name: "HTML5", percentage: 90 },
    { name: "CSS3", percentage: 65 },
    { name: "JavaScript", percentage: 50 },
    { name: "Node.js", percentage: 10 },
    { name: "Git", percentage: 35 },
    { name: "VS Code", percentage: 50 },
    { name: "MySQL", percentage: 25 }
];

// Create skill cards
function createSkillCards(filter = "all") {
    const container = document.getElementById('skillsContainer');
    if (!container) return;
    
    const filteredSkills = filter === "all" 
        ? skillsData 
        : skillsData.filter(skill => skill.category === filter);
    
    container.innerHTML = filteredSkills.map(skill => `
        <div class="skill-card" data-category="${skill.category}">
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.name}</h3>
            <p class="skill-description">${skill.description}</p>
            <div class="skill-level">
                ${createLevelDots(skill.level)}
            </div>
        </div>
    `).join('');
}

// Create level dots
function createLevelDots(level) {
    const totalDots = 5;
    const filledDots = Math.round(level / 20);
    let dots = '';
    
    for (let i = 0; i < totalDots; i++) {
        dots += `<span class="level-dot ${i < filledDots ? 'filled' : ''}"></span>`;
    }
    return dots;
}

// Create progress bars
function createProgressBars() {
    const container = document.getElementById('progressBars');
    if (!container) return;
    
    container.innerHTML = progressData.map(progress => `
        <div class="progress-item">
            <div class="progress-info">
                <span>${progress.name}</span>
                <span>${progress.percentage}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${progress.percentage}%"></div>
            </div>
        </div>
    `).join('');
}

// Filter functionality
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            createSkillCards(filter);
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createSkillCards();
    createProgressBars();
    setupFilters();
});