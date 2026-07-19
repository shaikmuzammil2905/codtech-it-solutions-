// ==========================================================================
// APPS STATE & DATABASE SEEDING
// ==========================================================================

const DEFAULT_EMPLOYEES = [
    { username: "john_doe", password: "password123", name: "John Doe", role: "Frontend Developer" },
    { username: "jane_smith", password: "password123", name: "Jane Smith", role: "UI/UX Designer" },
    { username: "mike_roberts", password: "password123", name: "Mike Roberts", role: "Backend Developer" },
    { username: "sarah_wilson", password: "password123", name: "Sarah Wilson", role: "Full Stack Developer" },
    { username: "emma_w", password: "password123", name: "Emma Watson", role: "QA Engineer" },
    { username: "robert_d", password: "password123", name: "Robert Dow", role: "DevOps Engineer" }
];

const DEFAULT_PROJECTS = [
    // John Doe (john_doe) Projects
    { id: "p1", title: "E-Commerce Website", type: "Dynamic", price: 45000, assignedTo: "john_doe", status: "Ongoing", createdOn: "18 Jun 2026", deployment: {} },
    { id: "p2", title: "Travel Booking Website", type: "Dynamic", price: 60000, assignedTo: "john_doe", status: "Ongoing", createdOn: "01 Jun 2026", deployment: {} },
    { id: "p3", title: "Corporate Portal", type: "Dynamic", price: 150000, assignedTo: "john_doe", status: "Completed", createdOn: "12 May 2026", deployment: { domain: "corporate.codtech.com", hosting: "hostinger.com", server: "104.21.43.12", github: "https://github.com/john-codtech/corp-portal", credentials: "Admin: admin_user\nPass: c0dp@ss123" } },
    { id: "p4", title: "E-Commerce Admin Panel", type: "Dynamic", price: 150000, assignedTo: "john_doe", status: "Completed", createdOn: "10 Apr 2026", deployment: { domain: "admin.shoptech.com", hosting: "aws.amazon.com", server: "EC2 Instance - 54.210.12.8", github: "https://github.com/john-codtech/shop-admin", credentials: "SSH Key deployed." } },
    { id: "p5", title: "Mobile Banking App", type: "App", price: 90000, assignedTo: "john_doe", status: "Ongoing", createdOn: "05 Jul 2026", deployment: {} },
    { id: "p6", title: "HTML5 Game Module", type: "Static", price: 20000, assignedTo: "john_doe", status: "Completed", createdOn: "20 Mar 2026", deployment: { domain: "play.codtech.com", hosting: "netlify.app", server: "Netlify Edge CDN", github: "https://github.com/john-codtech/html5-game", credentials: "Auto-deploy active." } },

    // Jane Smith (jane_smith) Projects
    { id: "p7", title: "School Management System", type: "Multiple Dynamic", price: 30000, assignedTo: "jane_smith", status: "Ongoing", createdOn: "16 Jun 2026", deployment: {} },
    { id: "p8", title: "Fitness Tracker App", type: "App", price: 100000, assignedTo: "jane_smith", status: "Completed", createdOn: "05 May 2026", deployment: { domain: "fitlife.app", hosting: "digitalocean.com", server: "Droplet IP: 159.203.11.23", github: "https://github.com/jane-codtech/fit-tracker", credentials: "DB Pass: fitdb_secure99" } },
    { id: "p9", title: "Corporate Website", type: "Static", price: 25000, assignedTo: "jane_smith", status: "Completed", createdOn: "20 Apr 2026", deployment: { domain: "heavyindustries.com", hosting: "hostinger.com", server: "Hostinger Shared", github: "https://github.com/jane-codtech/heavy-corp", credentials: "FTP: ftp.heavyindustries.com" } },
    { id: "p10", title: "E-Learning App Interface", type: "Dynamic", price: 90000, assignedTo: "jane_smith", status: "Completed", createdOn: "15 Mar 2026", deployment: { domain: "learnonline.edu", hosting: "vercel.app", server: "Vercel serverless", github: "https://github.com/jane-codtech/elearning-ui", credentials: "Vercel integrated." } },
    { id: "p11", title: "Agency Portfolio", type: "Static", price: 20000, assignedTo: "jane_smith", status: "Ongoing", createdOn: "10 Jul 2026", deployment: {} },

    // Mike Roberts (mike_roberts) Projects
    { id: "p12", title: "Portfolio Website", type: "Static", price: 15000, assignedTo: "mike_roberts", status: "Completed", createdOn: "10 Jun 2026", deployment: { domain: "mikeport.dev", hosting: "github.io", server: "GitHub Pages", github: "https://github.com/mike-codtech/portfolio", credentials: "None needed." } },
    { id: "p13", title: "API Gateway", type: "Dynamic", price: 65000, assignedTo: "mike_roberts", status: "Completed", createdOn: "15 May 2026", deployment: { domain: "api.codtech.com", hosting: "aws.amazon.com", server: "AWS API Gateway", github: "https://github.com/mike-codtech/api-gateway", credentials: "IAM Policy configured." } },
    { id: "p14", title: "Chat Application Backend", type: "Dynamic", price: 50000, assignedTo: "mike_roberts", status: "Completed", createdOn: "28 Apr 2026", deployment: { domain: "chat-api.codtech.com", hosting: "heroku.com", server: "Heroku Dyno", github: "https://github.com/mike-codtech/chat-back", credentials: "Config vars set in Heroku." } },
    { id: "p15", title: "HR Portal Database", type: "Multiple Dynamic", price: 50000, assignedTo: "mike_roberts", status: "Completed", createdOn: "12 Mar 2026", deployment: { domain: "hrdb.codtech.com", hosting: "digitalocean.com", server: "Managed Postgres", github: "https://github.com/mike-codtech/hr-db", credentials: "DB Admin User." } },
    { id: "p16", title: "E-Commerce Payment Gateway", type: "Dynamic", price: 70000, assignedTo: "mike_roberts", status: "Ongoing", createdOn: "12 Jul 2026", deployment: {} },

    // Sarah Wilson (sarah_wilson) Projects
    { id: "p17", title: "Food Delivery App", type: "App", price: 75000, assignedTo: "sarah_wilson", status: "Completed", createdOn: "05 Jun 2026", deployment: { domain: "foodrun.delivery", hosting: "aws.amazon.com", server: "ECS Fargate", github: "https://github.com/sarah-codtech/food-run", credentials: "AWS Console Access Code." } },
    { id: "p18", title: "Video Streaming Portal", type: "App", price: 125000, assignedTo: "sarah_wilson", status: "Completed", createdOn: "01 May 2026", deployment: { domain: "streamy.tv", hosting: "aws.amazon.com", server: "S3 + CloudFront + EC2", github: "https://github.com/sarah-codtech/streamy", credentials: "Root ssh key." } },
    { id: "p19", title: "Task Manager Dashboard", type: "Dynamic", price: 50000, assignedTo: "sarah_wilson", status: "Completed", createdOn: "18 Apr 2026", deployment: { domain: "taskflow.com", hosting: "firebase.google.com", server: "Firebase Hosting", github: "https://github.com/sarah-codtech/taskflow", credentials: "Firebase console." } },
    { id: "p20", title: "Real Estate Directory", type: "Dynamic", price: 80000, assignedTo: "sarah_wilson", status: "Ongoing", createdOn: "28 Jun 2026", deployment: {} },
    { id: "p21", title: "Social Dashboard", type: "Dynamic", price: 60000, assignedTo: "sarah_wilson", status: "Ongoing", createdOn: "03 Jul 2026", deployment: {} },

    // Emma Watson (emma_w) Projects
    { id: "p22", title: "QA Testing Automation Framework", type: "Dynamic", price: 180000, assignedTo: "emma_w", status: "Completed", createdOn: "14 Feb 2026", deployment: { domain: "qa-reports.codtech.com", hosting: "aws.amazon.com", server: "EC2 Jenkins Server", github: "https://github.com/emma-codtech/qa-automation", credentials: "Jenkins login credentials." } },

    // Robert Dow (robert_d) Projects
    { id: "p23", title: "Cloud Kubernetes Setup", type: "Dynamic", price: 100000, assignedTo: "robert_d", status: "Completed", createdOn: "20 Jan 2026", deployment: { domain: "k8s.codtech.com", hosting: "aws.amazon.com", server: "EKS Cluster", github: "https://github.com/robert-codtech/k8s-infra", credentials: "kubeconfig file generated." } },

    // Not Started / Unassigned Projects
    { id: "p24", title: "AI Search Integrations", type: "Dynamic", price: 120000, assignedTo: "", status: "Not Started", createdOn: "19 Jul 2026", deployment: {} },
    { id: "p25", title: "Hotel Reservation system", type: "Multiple Dynamic", price: 85000, assignedTo: "", status: "Not Started", createdOn: "18 Jul 2026", deployment: {} },
    { id: "p26", title: "Cryptocurrency Widget", type: "Static", price: 15000, assignedTo: "", status: "Not Started", createdOn: "15 Jul 2026", deployment: {} },
    { id: "p27", title: "Internal Wiki Board", type: "Static", price: 20000, assignedTo: "", status: "Not Started", createdOn: "10 Jul 2026", deployment: {} }
];

// Initialize database
function initDatabase() {
    if (!localStorage.getItem("employees")) {
        localStorage.setItem("employees", JSON.stringify(DEFAULT_EMPLOYEES));
    }
    if (!localStorage.getItem("projects")) {
        localStorage.setItem("projects", JSON.stringify(DEFAULT_PROJECTS));
    }
}

function getEmployees() {
    return JSON.parse(localStorage.getItem("employees"));
}

function saveEmployees(employees) {
    localStorage.setItem("employees", JSON.stringify(employees));
}

function getProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}

function saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}

// Global Variables for Charts
let adminDonutChart = null;
let adminLineChart = null;
let employeeLineChart = null;

// Current Active Session
let currentSession = null;

// ==========================================================================
// SESSION MANAGEMENT (LOGIN/LOGOUT)
// ==========================================================================

function checkSession() {
    const session = localStorage.getItem("session");
    if (session) {
        currentSession = JSON.parse(session);
        loadDashboard();
    } else {
        showView("login-view");
    }
}

function showView(viewId) {
    document.getElementById("login-view").classList.add("hidden");
    document.getElementById("admin-view").classList.add("hidden");
    document.getElementById("employee-view").classList.add("hidden");
    
    document.getElementById(viewId).classList.remove("hidden");
}

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const userVal = document.getElementById("username").value.trim();
    const passVal = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember-me-chk").checked;
    
    const errorBox = document.getElementById("login-error");
    errorBox.classList.add("hidden");

    if (userVal === "admin" && passVal === "admin123") {
        currentSession = { role: "admin", username: "admin", name: "Admin" };
        if (rememberMe) {
            localStorage.setItem("session", JSON.stringify(currentSession));
        }
        loadDashboard();
    } else {
        // Check employees
        const employees = getEmployees();
        const emp = employees.find(e => e.username === userVal && e.password === passVal);
        if (emp) {
            currentSession = { role: "employee", username: emp.username, name: emp.name, jobRole: emp.role };
            if (rememberMe) {
                localStorage.setItem("session", JSON.stringify(currentSession));
            }
            loadDashboard();
        } else {
            errorBox.classList.remove("hidden");
        }
    }
});

// Logout Buttons
document.getElementById("admin-logout-btn").addEventListener("click", logout);
document.getElementById("employee-logout-btn").addEventListener("click", logout);

function logout() {
    localStorage.removeItem("session");
    currentSession = null;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("login-error").classList.add("hidden");
    showView("login-view");
}

// Password toggle eye icon
document.getElementById("toggle-password-btn").addEventListener("click", function() {
    const pwdInput = document.getElementById("password");
    const eyeIcon = this.querySelector("i");
    if (pwdInput.type === "password") {
        pwdInput.type = "text";
        eyeIcon.setAttribute("data-lucide", "eye-off");
    } else {
        pwdInput.type = "password";
        eyeIcon.setAttribute("data-lucide", "eye");
    }
    lucide.createIcons();
});

// ==========================================================================
// ROUTER & VIEW LOADING
// ==========================================================================

function loadDashboard() {
    if (currentSession.role === "admin") {
        showView("admin-view");
        switchAdminPanel("admin-dashboard-panel");
        renderAdminDashboard();
    } else {
        showView("employee-view");
        switchEmployeePanel("employee-dashboard-panel");
        renderEmployeeDashboard();
    }
    lucide.createIcons();
}

// Admin Tab Navigation
document.querySelectorAll("#admin-view .sidebar-link").forEach(link => {
    link.addEventListener("click", function(e) {
        const target = this.getAttribute("data-target");
        if (target) {
            e.preventDefault();
            document.querySelectorAll("#admin-view .sidebar-link").forEach(l => l.classList.remove("active"));
            this.classList.add("active");
            switchAdminPanel(target);
        }
    });
});

function switchAdminPanel(panelId) {
    document.querySelectorAll(".admin-panel-section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(panelId).classList.remove("hidden");
    
    // Update active state in sidebar just in case triggered programmatically
    document.querySelectorAll("#admin-view .sidebar-link").forEach(l => {
        if (l.getAttribute("data-target") === panelId) {
            l.classList.add("active");
        } else if (l.getAttribute("data-target")) {
            l.classList.remove("active");
        }
    });

    const headerTitle = document.getElementById("admin-panel-title");
    if (panelId === "admin-dashboard-panel") {
        headerTitle.textContent = "Dashboard";
        renderAdminDashboard();
    } else if (panelId === "admin-projects-panel") {
        headerTitle.textContent = "Projects Management";
        renderAdminProjectsPanel();
    } else if (panelId === "admin-employees-panel") {
        headerTitle.textContent = "Employees Directory";
        renderAdminEmployeesPanel();
    }
    lucide.createIcons();
}

// Employee Tab Navigation
document.querySelectorAll("#employee-view .sidebar-link").forEach(link => {
    link.addEventListener("click", function(e) {
        const target = this.getAttribute("data-target");
        if (target) {
            e.preventDefault();
            document.querySelectorAll("#employee-view .sidebar-link").forEach(l => l.classList.remove("active"));
            this.classList.add("active");
            switchEmployeePanel(target);
        }
    });
});

function switchEmployeePanel(panelId) {
    document.querySelectorAll(".employee-panel-section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(panelId).classList.remove("hidden");

    // Update active states
    document.querySelectorAll("#employee-view .sidebar-link").forEach(l => {
        if (l.getAttribute("data-target") === panelId) {
            l.classList.add("active");
        } else if (l.getAttribute("data-target")) {
            l.classList.remove("active");
        }
    });

    const headerTitle = document.getElementById("employee-panel-title");
    if (panelId === "employee-dashboard-panel") {
        headerTitle.textContent = "Employee Dashboard";
        renderEmployeeDashboard();
    } else if (panelId === "employee-projects-panel") {
        headerTitle.textContent = "My Assigned Projects";
        renderEmployeeProjectsPanel();
    }
    lucide.createIcons();
}

// Sidebar toggle (for responsive mobile)
document.getElementById("admin-toggle-sidebar-btn").addEventListener("click", function() {
    document.querySelector("#admin-view .sidebar").classList.toggle("show");
});

document.getElementById("employee-toggle-sidebar-btn").addEventListener("click", function() {
    document.querySelector("#employee-view .sidebar").classList.toggle("show");
});

// ==========================================================================
// DATA COMPUTATIONS & STATISTICS
// ==========================================================================

function getEmployeeStats(username, projectsList) {
    const empProjects = projectsList.filter(p => p.assignedTo === username);
    const assigned = empProjects.length;
    const ongoing = empProjects.filter(p => p.status === "Ongoing").length;
    const completed = empProjects.filter(p => p.status === "Completed").length;
    const earned = empProjects.filter(p => p.status === "Completed").reduce((sum, p) => sum + p.price, 0);
    return { assigned, ongoing, completed, earned };
}

// Format Rupee value with Indian Numbering system (e.g. ₹ 12,45,000)
function formatRupee(amount) {
    return "₹ " + new Intl.NumberFormat('en-IN').format(amount);
}

// ==========================================================================
// RENDER ADMIN DASHBOARD PANELS
// ==========================================================================

function renderAdminDashboard() {
    const projects = getProjects();
    const employees = getEmployees();
    
    // 1. KPI Calculations
    const totalProjects = projects.length;
    const ongoingProjects = projects.filter(p => p.status === "Ongoing").length;
    const completedProjects = projects.filter(p => p.status === "Completed").length;
    const totalEmployees = employees.length;
    const totalEarnings = projects.filter(p => p.status === "Completed").reduce((sum, p) => sum + p.price, 0);
    
    document.getElementById("kpi-admin-total-proj").textContent = totalProjects;
    document.getElementById("kpi-admin-ongoing-proj").textContent = ongoingProjects;
    document.getElementById("kpi-admin-completed-proj").textContent = completedProjects;
    document.getElementById("kpi-admin-total-emp").textContent = totalEmployees;
    document.getElementById("kpi-admin-total-earned").textContent = formatRupee(totalEarnings);
    document.getElementById("admin-line-chart-total-earned").textContent = formatRupee(totalEarnings);
    
    // 2. Project Overview Chart (Donut)
    const notStartedProjects = projects.filter(p => p.status === "Not Started").length;
    const donutData = [ongoingProjects, completedProjects, notStartedProjects];
    renderAdminDonutChart(donutData);
    
    // 3. Payment Overview Chart (Line)
    // Map completed projects to months for mockup line chart
    // Completed projects per month: Jan (200k), Feb (220k), Mar (150k), Apr (250k), May (125k), Jun (300k)
    // We will scale/distribute the totalEarnings to create a curve
    const earningsTrend = [213000, 313000, 523000, 788000, 963000, totalEarnings];
    renderAdminLineChart(earningsTrend);
    
    // 4. Recent Projects (Recent 5 projects)
    const sortedProjects = [...projects].sort((a, b) => b.id.localeCompare(a.id)).slice(0, 5);
    const recentListContainer = document.getElementById("admin-recent-projects-list");
    recentListContainer.innerHTML = "";
    
    sortedProjects.forEach(proj => {
        const div = document.createElement("div");
        div.className = "recent-project-item";
        
        let statusClass = "ongoing";
        if (proj.status === "Completed") statusClass = "completed";
        if (proj.status === "Not Started") statusClass = "not-started";
        
        div.innerHTML = `
            <div class="recent-proj-info">
                <span class="recent-proj-title">${proj.title}</span>
                <span class="recent-proj-meta">${proj.type} &bull; <span class="status-badge ${statusClass}" style="padding:0; font-size:0.65rem;">${proj.status}</span></span>
            </div>
            <span class="recent-proj-price">${formatRupee(proj.price)}</span>
        `;
        recentListContainer.appendChild(div);
    });

    // 5. Projects Table (Recent 5 projects table)
    const tableBody = document.getElementById("admin-dashboard-projects-tbody");
    tableBody.innerHTML = "";
    sortedProjects.forEach((proj, idx) => {
        const tr = document.createElement("tr");
        
        let statusClass = "ongoing";
        if (proj.status === "Completed") statusClass = "completed";
        if (proj.status === "Not Started") statusClass = "not-started";
        
        const emp = employees.find(e => e.username === proj.assignedTo);
        const assignedName = emp ? emp.name : `<span style="color:var(--text-muted);">Unassigned</span>`;
        
        // Eye icon details trigger
        let actionBtn = "";
        if (proj.status === "Completed" && proj.deployment && proj.deployment.domain) {
            actionBtn = `
                <button class="btn-action-circle" onclick="viewDeploymentDetails('${proj.id}')" title="View Deployment Details">
                    <i data-lucide="eye" style="width:14px;height:14px;"></i>
                </button>
            `;
        }
        
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td style="font-weight:600; color:var(--text-dark);">${proj.title}</td>
            <td>${proj.type}</td>
            <td>${proj.price.toLocaleString('en-IN')}</td>
            <td>${assignedName}</td>
            <td><span class="status-badge ${statusClass}">${proj.status}</span></td>
            <td>${proj.createdOn}</td>
            <td>${actionBtn}</td>
        `;
        tableBody.appendChild(tr);
    });
    
    // 6. Employee Summary List (First 4 employees statistics)
    const empSummaryContainer = document.getElementById("admin-employee-summary-list");
    empSummaryContainer.innerHTML = "";
    employees.slice(0, 4).forEach(emp => {
        const stats = getEmployeeStats(emp.username, projects);
        const div = document.createElement("div");
        div.className = "employee-summary-item";
        
        const initial = emp.name.charAt(0).toUpperCase();
        
        div.innerHTML = `
            <div class="emp-profile-sec">
                <div class="emp-avatar">${initial}</div>
                <div class="emp-meta-info">
                    <span class="emp-name">${emp.name}</span>
                    <span class="emp-username">${emp.username}</span>
                </div>
            </div>
            <div class="emp-stats-cols">
                <div class="emp-stat-col">
                    <span class="emp-stat-num">${stats.assigned}</span>
                    <span class="emp-stat-lbl">Assigned</span>
                </div>
                <div class="emp-stat-col">
                    <span class="emp-stat-num">${stats.ongoing}</span>
                    <span class="emp-stat-lbl">Ongoing</span>
                </div>
                <div class="emp-stat-col">
                    <span class="emp-stat-num">${stats.completed}</span>
                    <span class="emp-stat-lbl">Completed</span>
                </div>
            </div>
            <span class="emp-earned">${formatRupee(stats.earned)}</span>
        `;
        empSummaryContainer.appendChild(div);
    });

    // Populate "Select Project" dropdown in Deployment form
    const deploySelect = document.getElementById("admin-deploy-project-select");
    deploySelect.innerHTML = `<option value="" disabled selected>Choose Project</option>`;
    
    // Admin can edit deployment details for ANY project
    projects.forEach(proj => {
        const option = document.createElement("option");
        option.value = proj.id;
        option.textContent = `${proj.title} [${proj.status}]`;
        deploySelect.appendChild(option);
    });
}

function renderAdminProjectsPanel() {
    const projects = getProjects();
    const employees = getEmployees();
    
    const tbody = document.getElementById("admin-full-projects-tbody");
    tbody.innerHTML = "";
    
    projects.forEach((proj, idx) => {
        const tr = document.createElement("tr");
        
        let statusClass = "ongoing";
        if (proj.status === "Completed") statusClass = "completed";
        if (proj.status === "Not Started") statusClass = "not-started";
        
        const emp = employees.find(e => e.username === proj.assignedTo);
        const assignedName = emp ? emp.name : `<span style="color:var(--text-muted);">Unassigned</span>`;
        
        let hostingDetail = "-";
        if (proj.status === "Completed" && proj.deployment && proj.deployment.domain) {
            hostingDetail = `<a href="http://${proj.deployment.domain}" target="_blank" style="color:var(--admin-primary); font-weight:600; text-decoration:underline;">${proj.deployment.domain}</a>`;
        }
        
        let actionBtn = "";
        if (proj.status === "Completed" && proj.deployment && proj.deployment.domain) {
            actionBtn = `
                <button class="btn-action-circle" onclick="viewDeploymentDetails('${proj.id}')" title="View Deployment Details">
                    <i data-lucide="eye" style="width:14px;height:14px;"></i>
                </button>
            `;
        } else {
            actionBtn = `
                <button class="btn-action-circle" onclick="deleteProject('${proj.id}')" style="color:#ef4444;" title="Delete Project">
                    <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
                </button>
            `;
        }
        
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td style="font-weight:600; color:var(--text-dark);">${proj.title}</td>
            <td>${proj.type}</td>
            <td>${proj.price.toLocaleString('en-IN')}</td>
            <td>${assignedName}</td>
            <td><span class="status-badge ${statusClass}">${proj.status}</span></td>
            <td>${proj.createdOn}</td>
            <td>${hostingDetail}</td>
            <td>${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });
}

function filterAdminProjectsTable(status) {
    const filterSelect = document.getElementById("admin-project-filter-select");
    filterSelect.value = status;
    
    const projects = getProjects();
    const employees = getEmployees();
    const tbody = document.getElementById("admin-full-projects-tbody");
    tbody.innerHTML = "";
    
    let filtered = projects;
    if (status !== 'all') {
        filtered = projects.filter(p => p.status === status);
    }
    
    filtered.forEach((proj, idx) => {
        const tr = document.createElement("tr");
        
        let statusClass = "ongoing";
        if (proj.status === "Completed") statusClass = "completed";
        if (proj.status === "Not Started") statusClass = "not-started";
        
        const emp = employees.find(e => e.username === proj.assignedTo);
        const assignedName = emp ? emp.name : `<span style="color:var(--text-muted);">Unassigned</span>`;
        
        let hostingDetail = "-";
        if (proj.status === "Completed" && proj.deployment && proj.deployment.domain) {
            hostingDetail = `<a href="http://${proj.deployment.domain}" target="_blank" style="color:var(--admin-primary); font-weight:600; text-decoration:underline;">${proj.deployment.domain}</a>`;
        }
        
        let actionBtn = "";
        if (proj.status === "Completed" && proj.deployment && proj.deployment.domain) {
            actionBtn = `
                <button class="btn-action-circle" onclick="viewDeploymentDetails('${proj.id}')" title="View Deployment Details">
                    <i data-lucide="eye" style="width:14px;height:14px;"></i>
                </button>
            `;
        } else {
            actionBtn = `
                <button class="btn-action-circle" onclick="deleteProject('${proj.id}')" style="color:#ef4444;" title="Delete Project">
                    <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
                </button>
            `;
        }
        
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td style="font-weight:600; color:var(--text-dark);">${proj.title}</td>
            <td>${proj.type}</td>
            <td>${proj.price.toLocaleString('en-IN')}</td>
            <td>${assignedName}</td>
            <td><span class="status-badge ${statusClass}">${proj.status}</span></td>
            <td>${proj.createdOn}</td>
            <td>${hostingDetail}</td>
            <td>${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function renderAdminEmployeesPanel() {
    const employees = getEmployees();
    const projects = getProjects();
    const tbody = document.getElementById("admin-full-employees-tbody");
    tbody.innerHTML = "";
    
    employees.forEach(emp => {
        const stats = getEmployeeStats(emp.username, projects);
        const tr = document.createElement("tr");
        const initial = emp.name.charAt(0).toUpperCase();
        
        tr.innerHTML = `
            <td><div class="emp-avatar">${initial}</div></td>
            <td style="font-weight:600; color:var(--text-dark);">${emp.name}</td>
            <td>${emp.username}</td>
            <td>${emp.role}</td>
            <td>${stats.assigned}</td>
            <td><span class="status-badge ongoing" style="padding:0.15rem 0.4rem;">${stats.ongoing}</span></td>
            <td><span class="status-badge completed" style="padding:0.15rem 0.4rem;">${stats.completed}</span></td>
            <td style="font-weight:700; color:var(--text-dark);">${formatRupee(stats.earned)}</td>
            <td>
                <button class="btn-action-circle" onclick="deleteEmployee('${emp.username}')" style="color:#ef4444;" title="Delete Employee Profile">
                    <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Auto-fill form inputs when project is selected in Admin deployment form
document.getElementById("admin-deploy-project-select").addEventListener("change", function() {
    const projectId = this.value;
    const projects = getProjects();
    const proj = projects.find(p => p.id === projectId);
    
    if (proj && proj.deployment) {
        document.getElementById("admin-deploy-domain").value = proj.deployment.domain || "";
        document.getElementById("admin-deploy-hosting").value = proj.deployment.hosting || "";
        document.getElementById("admin-deploy-server").value = proj.deployment.server || "";
        document.getElementById("admin-deploy-github").value = proj.deployment.github || "";
        document.getElementById("admin-deploy-credentials").value = proj.deployment.credentials || "";
    } else {
        document.getElementById("admin-deploy-domain").value = "";
        document.getElementById("admin-deploy-hosting").value = "";
        document.getElementById("admin-deploy-server").value = "";
        document.getElementById("admin-deploy-github").value = "";
        document.getElementById("admin-deploy-credentials").value = "";
    }
});

// Admin deployment details form submit
document.getElementById("admin-deployment-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const projectId = document.getElementById("admin-deploy-project-select").value;
    if (!projectId) return;
    
    const projects = getProjects();
    const index = projects.findIndex(p => p.id === projectId);
    
    if (index !== -1) {
        projects[index].deployment = {
            domain: document.getElementById("admin-deploy-domain").value.trim(),
            hosting: document.getElementById("admin-deploy-hosting").value.trim(),
            server: document.getElementById("admin-deploy-server").value.trim(),
            github: document.getElementById("admin-deploy-github").value.trim(),
            credentials: document.getElementById("admin-deploy-credentials").value.trim()
        };
        // Mark project as Completed automatically when deployment detail is saved!
        projects[index].status = "Completed";
        
        saveProjects(projects);
        alert(`Deployment Details updated successfully for ${projects[index].title}! Project status updated to Completed.`);
        
        // Reset form
        this.reset();
        
        renderAdminDashboard();
    }
});

// ==========================================================================
// RENDER EMPLOYEE DASHBOARD PANELS
// ==========================================================================

function renderEmployeeDashboard() {
    const projects = getProjects();
    const username = currentSession.username;
    
    // Set Profile Headers
    document.getElementById("employee-name-header").textContent = currentSession.name;
    document.getElementById("employee-role-header").textContent = currentSession.jobRole;
    document.getElementById("employee-avatar-header").textContent = currentSession.name.charAt(0).toUpperCase();
    
    // Calc stats
    const stats = getEmployeeStats(username, projects);
    
    // 1. Render Stats Cards
    document.getElementById("kpi-emp-assigned").textContent = stats.assigned;
    document.getElementById("kpi-emp-ongoing").textContent = stats.ongoing;
    document.getElementById("kpi-emp-completed").textContent = stats.completed;
    document.getElementById("kpi-emp-earned").textContent = formatRupee(stats.earned);
    
    // 2. Render Pills
    document.getElementById("pill-emp-assigned").textContent = stats.assigned;
    document.getElementById("pill-emp-ongoing").textContent = stats.ongoing;
    document.getElementById("pill-emp-completed").textContent = stats.completed;
    
    // Format earned to a short string (e.g. ₹ 3.2L)
    let shortEarned = formatRupee(stats.earned);
    if (stats.earned >= 100000) {
        shortEarned = "₹ " + (stats.earned / 100000).toFixed(1) + "L";
    }
    document.getElementById("pill-emp-earned").textContent = shortEarned;
    document.getElementById("employee-line-chart-total-earned").textContent = formatRupee(stats.earned);
    
    // 3. Render Employee Projects Table (recent 5 projects)
    const empProjects = projects.filter(p => p.assignedTo === username);
    const sortedEmpProjects = [...empProjects].sort((a, b) => b.id.localeCompare(a.id)).slice(0, 5);
    
    const tbody = document.getElementById("employee-dashboard-projects-tbody");
    tbody.innerHTML = "";
    
    sortedEmpProjects.forEach((proj, idx) => {
        const tr = document.createElement("tr");
        
        let statusClass = "ongoing";
        if (proj.status === "Completed") statusClass = "completed";
        if (proj.status === "Not Started") statusClass = "not-started";
        
        let actionBtn = "";
        if (proj.status === "Completed" && proj.deployment && proj.deployment.domain) {
            actionBtn = `
                <button class="btn-action-circle" onclick="viewDeploymentDetails('${proj.id}')" title="View Deployment Details">
                    <i data-lucide="eye" style="width:14px;height:14px;"></i>
                </button>
            `;
        } else {
            actionBtn = `
                <button class="btn-action-circle" onclick="focusEmployeeDeploySelect('${proj.id}')" title="Update Deployment Details">
                    <i data-lucide="globe" style="width:14px;height:14px; color:var(--employee-primary);"></i>
                </button>
            `;
        }
        
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td style="font-weight:600; color:var(--text-dark);">${proj.title}</td>
            <td>${proj.type}</td>
            <td>${proj.price.toLocaleString('en-IN')}</td>
            <td><span class="status-badge ${statusClass}">${proj.status}</span></td>
            <td>${proj.createdOn}</td>
            <td>${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });

    // 4. Update Deployment Details Form Dropdown Options
    const deploySelect = document.getElementById("employee-deploy-project-select");
    deploySelect.innerHTML = `<option value="" disabled selected>Select Project</option>`;
    
    // Employee can ONLY update deployment details for projects assigned to them
    empProjects.forEach(proj => {
        const option = document.createElement("option");
        option.value = proj.id;
        option.textContent = `${proj.title} [${proj.status}]`;
        deploySelect.appendChild(option);
    });
    
    // 5. Recent Completed Projects
    const completedEmpProjects = empProjects.filter(p => p.status === "Completed").sort((a, b) => b.id.localeCompare(a.id)).slice(0, 3);
    const recentCompList = document.getElementById("employee-recent-completed-list");
    recentCompList.innerHTML = "";
    
    completedEmpProjects.forEach(proj => {
        const div = document.createElement("div");
        div.className = "recent-project-item";
        div.innerHTML = `
            <div class="recent-proj-info">
                <span class="recent-proj-title">${proj.title}</span>
                <span class="recent-proj-meta">${proj.createdOn}</span>
            </div>
            <span class="recent-proj-price">${formatRupee(proj.price)}</span>
        `;
        recentCompList.appendChild(div);
    });

    // 6. Draw employee line chart
    // Interpolate values for trend
    let firstP = Math.round(stats.earned * 0.15);
    let secondP = Math.round(stats.earned * 0.3);
    let thirdP = Math.round(stats.earned * 0.5);
    let fourthP = Math.round(stats.earned * 0.7);
    let fifthP = Math.round(stats.earned * 0.85);
    
    const earningsTrend = [firstP, secondP, thirdP, fourthP, fifthP, stats.earned];
    renderEmployeeLineChart(earningsTrend);
}

function renderEmployeeProjectsPanel() {
    const projects = getProjects();
    const username = currentSession.username;
    const empProjects = projects.filter(p => p.assignedTo === username);
    
    const tbody = document.getElementById("employee-full-projects-tbody");
    tbody.innerHTML = "";
    
    empProjects.forEach((proj, idx) => {
        const tr = document.createElement("tr");
        
        let statusClass = "ongoing";
        if (proj.status === "Completed") statusClass = "completed";
        if (proj.status === "Not Started") statusClass = "not-started";
        
        let hostingDetail = "-";
        if (proj.status === "Completed" && proj.deployment && proj.deployment.domain) {
            hostingDetail = `<a href="http://${proj.deployment.domain}" target="_blank" style="color:var(--employee-primary); font-weight:600; text-decoration:underline;">${proj.deployment.domain}</a>`;
        }
        
        let actionBtn = "";
        if (proj.status === "Completed" && proj.deployment && proj.deployment.domain) {
            actionBtn = `
                <button class="btn-action-circle" onclick="viewDeploymentDetails('${proj.id}')" title="View Deployment Details">
                    <i data-lucide="eye" style="width:14px;height:14px;"></i>
                </button>
            `;
        } else {
            actionBtn = `
                <button class="btn-action-circle" onclick="focusEmployeeDeploySelect('${proj.id}')" title="Update Deployment Details">
                    <i data-lucide="globe" style="width:14px;height:14px; color:var(--employee-primary);"></i>
                </button>
            `;
        }
        
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td style="font-weight:600; color:var(--text-dark);">${proj.title}</td>
            <td>${proj.type}</td>
            <td>${proj.price.toLocaleString('en-IN')}</td>
            <td><span class="status-badge ${statusClass}">${proj.status}</span></td>
            <td>${proj.createdOn}</td>
            <td>${hostingDetail}</td>
            <td>${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });
}

function filterEmployeeProjectsTable(status) {
    const filterSelect = document.getElementById("employee-project-filter-select");
    filterSelect.value = status;
    
    const projects = getProjects();
    const username = currentSession.username;
    const empProjects = projects.filter(p => p.assignedTo === username);
    
    const tbody = document.getElementById("employee-full-projects-tbody");
    tbody.innerHTML = "";
    
    let filtered = empProjects;
    if (status !== 'all') {
        filtered = empProjects.filter(p => p.status === status);
    }
    
    filtered.forEach((proj, idx) => {
        const tr = document.createElement("tr");
        
        let statusClass = "ongoing";
        if (proj.status === "Completed") statusClass = "completed";
        if (proj.status === "Not Started") statusClass = "not-started";
        
        let hostingDetail = "-";
        if (proj.status === "Completed" && proj.deployment && proj.deployment.domain) {
            hostingDetail = `<a href="http://${proj.deployment.domain}" target="_blank" style="color:var(--employee-primary); font-weight:600; text-decoration:underline;">${proj.deployment.domain}</a>`;
        }
        
        let actionBtn = "";
        if (proj.status === "Completed" && proj.deployment && proj.deployment.domain) {
            actionBtn = `
                <button class="btn-action-circle" onclick="viewDeploymentDetails('${proj.id}')" title="View Deployment Details">
                    <i data-lucide="eye" style="width:14px;height:14px;"></i>
                </button>
            `;
        } else {
            actionBtn = `
                <button class="btn-action-circle" onclick="focusEmployeeDeploySelect('${proj.id}')" title="Update Deployment Details">
                    <i data-lucide="globe" style="width:14px;height:14px; color:var(--employee-primary);"></i>
                </button>
            `;
        }
        
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td style="font-weight:600; color:var(--text-dark);">${proj.title}</td>
            <td>${proj.type}</td>
            <td>${proj.price.toLocaleString('en-IN')}</td>
            <td><span class="status-badge ${statusClass}">${proj.status}</span></td>
            <td>${proj.createdOn}</td>
            <td>${hostingDetail}</td>
            <td>${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

// Focus deployment form and fill details on selecting from My Projects list
function focusEmployeeDeploySelect(projId) {
    switchEmployeePanel("employee-dashboard-panel");
    const selectEl = document.getElementById("employee-deploy-project-select");
    selectEl.value = projId;
    
    // trigger change to fill values
    const event = new Event('change');
    selectEl.dispatchEvent(event);
    
    focusEmployeeDeployForm();
}

function focusEmployeeDeployForm() {
    switchEmployeePanel("employee-dashboard-panel");
    document.getElementById("employee-deploy-project-select").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("employee-deploy-project-select").focus();
}

// Auto-fill values in employee deployment form
document.getElementById("employee-deploy-project-select").addEventListener("change", function() {
    const projectId = this.value;
    const projects = getProjects();
    const proj = projects.find(p => p.id === projectId);
    
    if (proj && proj.deployment) {
        document.getElementById("employee-deploy-domain").value = proj.deployment.domain || "";
        document.getElementById("employee-deploy-hosting").value = proj.deployment.hosting || "";
        document.getElementById("employee-deploy-server").value = proj.deployment.server || "";
        document.getElementById("employee-deploy-github").value = proj.deployment.github || "";
        document.getElementById("employee-deploy-credentials").value = proj.deployment.credentials || "";
    } else {
        document.getElementById("employee-deploy-domain").value = "";
        document.getElementById("employee-deploy-hosting").value = "";
        document.getElementById("employee-deploy-server").value = "";
        document.getElementById("employee-deploy-github").value = "";
        document.getElementById("employee-deploy-credentials").value = "";
    }
});

// Employee deployment details form submit
document.getElementById("employee-deployment-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const projectId = document.getElementById("employee-deploy-project-select").value;
    if (!projectId) return;
    
    const projects = getProjects();
    const index = projects.findIndex(p => p.id === projectId);
    
    if (index !== -1) {
        projects[index].deployment = {
            domain: document.getElementById("employee-deploy-domain").value.trim(),
            hosting: document.getElementById("employee-deploy-hosting").value.trim(),
            server: document.getElementById("employee-deploy-server").value.trim(),
            github: document.getElementById("employee-deploy-github").value.trim(),
            credentials: document.getElementById("employee-deploy-credentials").value.trim()
        };
        // Mark project as completed
        projects[index].status = "Completed";
        
        saveProjects(projects);
        alert(`Deployment Details saved successfully for ${projects[index].title}! Project is now completed.`);
        
        // Reset form
        this.reset();
        
        renderEmployeeDashboard();
    }
});

// ==========================================================================
// MODALS LOGIC
// ==========================================================================

// Add Project Modal Controls
function openAddProjectModal() {
    // Populate employees dropdown
    const selectAssign = document.getElementById("proj-assign");
    selectAssign.innerHTML = `<option value="">Do Not Assign Yet</option>`;
    
    const employees = getEmployees();
    employees.forEach(emp => {
        const option = document.createElement("option");
        option.value = emp.username;
        option.textContent = `${emp.name} (${emp.role})`;
        selectAssign.appendChild(option);
    });
    
    document.getElementById("add-project-modal").classList.remove("hidden");
}

function closeAddProjectModal() {
    document.getElementById("add-project-modal").classList.add("hidden");
    document.getElementById("add-project-form").reset();
}

// Add Project Form Submit
document.getElementById("add-project-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const title = document.getElementById("proj-title").value.trim();
    const type = document.getElementById("proj-type").value;
    const price = parseInt(document.getElementById("proj-price").value);
    const assignedTo = document.getElementById("proj-assign").value;
    
    const projects = getProjects();
    
    // ID creation
    const newId = "p" + (Math.max(...projects.map(p => parseInt(p.id.replace('p', '')))) + 1);
    
    // Status depends on assignment
    const status = assignedTo ? "Ongoing" : "Not Started";
    
    const today = new Date();
    const formattedDate = today.getDate().toString().padStart(2, '0') + ' ' + 
                          today.toLocaleString('en-US', { month: 'short' }) + ' ' + 
                          today.getFullYear();
    
    const newProj = {
        id: newId,
        title: title,
        type: type,
        price: price,
        assignedTo: assignedTo,
        status: status,
        createdOn: formattedDate,
        deployment: {}
    };
    
    projects.push(newProj);
    saveProjects(projects);
    
    alert(`Project "${title}" created successfully!`);
    closeAddProjectModal();
    
    // Rerender active panels
    if (currentSession.role === "admin") {
        renderAdminDashboard();
        renderAdminProjectsPanel();
    }
});

// Add Employee Modal Controls
function openAddEmployeeModal() {
    document.getElementById("add-employee-modal").classList.remove("hidden");
}

function closeAddEmployeeModal() {
    document.getElementById("add-employee-modal").classList.add("hidden");
    document.getElementById("add-employee-form").reset();
}

// Add Employee Form Submit
document.getElementById("add-employee-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("emp-fullname").value.trim();
    const role = document.getElementById("emp-role").value.trim();
    const username = document.getElementById("emp-username").value.trim();
    const password = document.getElementById("emp-password").value;
    
    const employees = getEmployees();
    
    // Check duplication
    if (employees.some(emp => emp.username === username)) {
        alert("Username already exists. Choose a different one.");
        return;
    }
    
    const newEmp = {
        username: username,
        password: password,
        name: name,
        role: role
    };
    
    employees.push(newEmp);
    saveEmployees(employees);
    
    alert(`Employee profile for "${name}" created successfully!`);
    closeAddEmployeeModal();
    
    if (currentSession.role === "admin") {
        renderAdminDashboard();
        renderAdminEmployeesPanel();
    }
});

// Assign Project Modal Controls
function openAssignProjectModal() {
    // Populate dropdowns
    const empSelect = document.getElementById("assign-emp-select");
    const projSelect = document.getElementById("assign-proj-select");
    
    empSelect.innerHTML = `<option value="" disabled selected>Choose Employee</option>`;
    projSelect.innerHTML = `<option value="" disabled selected>Choose Project</option>`;
    
    const employees = getEmployees();
    employees.forEach(emp => {
        const option = document.createElement("option");
        option.value = emp.username;
        option.textContent = `${emp.name} (${emp.role})`;
        empSelect.appendChild(option);
    });
    
    const projects = getProjects();
    // Only assign projects that are Not Started (or Ongoing but not finished/re-assign)
    projects.forEach(p => {
        if (p.status !== "Completed") {
            const option = document.createElement("option");
            option.value = p.id;
            option.textContent = `${p.title} (${p.status})`;
            projSelect.appendChild(option);
        }
    });
    
    document.getElementById("assign-project-modal").classList.remove("hidden");
}

function closeAssignProjectModal() {
    document.getElementById("assign-project-modal").classList.add("hidden");
    document.getElementById("assign-project-form").reset();
}

// Assign Project Submit
document.getElementById("assign-project-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("assign-emp-select").value;
    const projectId = document.getElementById("assign-proj-select").value;
    
    const projects = getProjects();
    const index = projects.findIndex(p => p.id === projectId);
    
    if (index !== -1) {
        projects[index].assignedTo = username;
        projects[index].status = "Ongoing"; // change status to Ongoing upon assignment
        saveProjects(projects);
        
        alert(`Project assigned successfully!`);
        closeAssignProjectModal();
        
        if (currentSession.role === "admin") {
            renderAdminDashboard();
            renderAdminProjectsPanel();
        }
    }
});

// Change Password Modal Controls
function openChangePasswordModal() {
    document.getElementById("change-password-modal").classList.remove("hidden");
}

function closeChangePasswordModal() {
    document.getElementById("change-password-modal").classList.add("hidden");
    document.getElementById("change-password-form").reset();
}

// Change Password Submit
document.getElementById("change-password-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const oldPass = document.getElementById("old-pass").value;
    const newPass = document.getElementById("new-pass").value;
    
    const employees = getEmployees();
    const index = employees.findIndex(emp => emp.username === currentSession.username);
    
    if (index !== -1) {
        if (employees[index].password !== oldPass) {
            alert("Incorrect current password.");
            return;
        }
        
        employees[index].password = newPass;
        saveEmployees(employees);
        
        alert("Password updated successfully!");
        closeChangePasswordModal();
    }
});

// View Deployment details modal (Read-Only)
function viewDeploymentDetails(projectId) {
    const projects = getProjects();
    const proj = projects.find(p => p.id === projectId);
    
    if (proj && proj.deployment) {
        document.getElementById("view-deploy-project-name").textContent = proj.title;
        document.getElementById("view-deploy-domain").textContent = proj.deployment.domain || "N/A";
        document.getElementById("view-deploy-hosting").textContent = proj.deployment.hosting || "N/A";
        document.getElementById("view-deploy-server").textContent = proj.deployment.server || "N/A";
        document.getElementById("view-deploy-github").textContent = proj.deployment.github || "N/A";
        document.getElementById("view-deploy-credentials").textContent = proj.deployment.credentials || "N/A";
        
        document.getElementById("view-deployment-modal").classList.remove("hidden");
    }
}

function closeViewDeploymentModal() {
    document.getElementById("view-deployment-modal").classList.add("hidden");
}

// Delete functions for Admin panels
function deleteProject(projectId) {
    if (confirm("Are you sure you want to delete this project?")) {
        let projects = getProjects();
        projects = projects.filter(p => p.id !== projectId);
        saveProjects(projects);
        
        renderAdminDashboard();
        renderAdminProjectsPanel();
    }
}

function deleteEmployee(username) {
    if (confirm(`Are you sure you want to delete the employee profile "${username}"?`)) {
        let employees = getEmployees();
        employees = employees.filter(e => e.username !== username);
        saveEmployees(employees);
        
        // Remove assignment tags in projects
        const projects = getProjects();
        projects.forEach(p => {
            if (p.assignedTo === username) {
                p.assignedTo = "";
                if (p.status === "Ongoing") p.status = "Not Started";
            }
        });
        saveProjects(projects);
        
        renderAdminDashboard();
        renderAdminEmployeesPanel();
    }
}

// ==========================================================================
// CHARTS RENDER FUNCTIONS (APEXCHARTS)
// ==========================================================================

function renderAdminDonutChart(data) {
    const options = {
        series: data,
        chart: {
            type: 'donut',
            height: 240,
            fontFamily: 'Inter, sans-serif'
        },
        labels: ['Ongoing', 'Completed', 'Not Started'],
        colors: ['#3b82f6', '#10b981', '#cbd5e1'],
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'right',
            fontSize: '12px',
            fontWeight: 500,
            markers: {
                radius: 12
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    if (adminDonutChart) {
        adminDonutChart.updateSeries(data);
    } else {
        adminDonutChart = new ApexCharts(document.getElementById("admin-project-donut-chart"), options);
        adminDonutChart.render();
    }
}

function renderAdminLineChart(data) {
    const options = {
        series: [{
            name: 'Payment Earned',
            data: data
        }],
        chart: {
            height: 240,
            type: 'area',
            toolbar: {
                show: false
            },
            fontFamily: 'Inter, sans-serif'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3,
            colors: ['#1b53e4']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [0, 90, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: "#1b53e4",
                        opacity: 0.4
                    },
                    {
                        offset: 100,
                        color: "#1b53e4",
                        opacity: 0.01
                    }
                ]
            }
        },
        markers: {
            size: 5,
            colors: ['#1b53e4'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            labels: {
                style: {
                    colors: '#94a3b8',
                    fontSize: '11px',
                    fontWeight: 500
                }
            }
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    if (value >= 100000) {
                        return (value / 100000).toFixed(1) + "L";
                    }
                    return value;
                },
                style: {
                    colors: '#94a3b8',
                    fontSize: '11px',
                    fontWeight: 500
                }
            }
        },
        grid: {
            borderColor: '#f1f5f9'
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return "₹ " + val.toLocaleString('en-IN');
                }
            }
        }
    };

    if (adminLineChart) {
        adminLineChart.updateSeries([{ data: data }]);
    } else {
        adminLineChart = new ApexCharts(document.getElementById("admin-payment-line-chart"), options);
        adminLineChart.render();
    }
}

function renderEmployeeLineChart(data) {
    const options = {
        series: [{
            name: 'Payment Earned',
            data: data
        }],
        chart: {
            height: 240,
            type: 'area',
            toolbar: {
                show: false
            },
            fontFamily: 'Inter, sans-serif'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3,
            colors: ['#5c25d2']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [0, 90, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: "#5c25d2",
                        opacity: 0.4
                    },
                    {
                        offset: 100,
                        color: "#5c25d2",
                        opacity: 0.01
                    }
                ]
            }
        },
        markers: {
            size: 5,
            colors: ['#5c25d2'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            labels: {
                style: {
                    colors: '#94a3b8',
                    fontSize: '11px',
                    fontWeight: 500
                }
            }
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    if (value >= 100000) {
                        return (value / 100000).toFixed(1) + "L";
                    }
                    return value;
                },
                style: {
                    colors: '#94a3b8',
                    fontSize: '11px',
                    fontWeight: 500
                }
            }
        },
        grid: {
            borderColor: '#f1f5f9'
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return "₹ " + val.toLocaleString('en-IN');
                }
            }
        }
    };

    if (employeeLineChart) {
        employeeLineChart.updateSeries([{ data: data }]);
    } else {
        employeeLineChart = new ApexCharts(document.getElementById("employee-earnings-line-chart"), options);
        employeeLineChart.render();
    }
}

// ==========================================================================
// APPLICATION ENTRY POINT
// ==========================================================================

document.addEventListener("DOMContentLoaded", function() {
    initDatabase();
    checkSession();
});
