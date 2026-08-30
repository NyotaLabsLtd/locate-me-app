<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Locate Me - Police Command Center | Station Dashboard</title>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

:root {
    --primary: #1e3a8a;
    --primary-light: #3b82f6;
    --danger: #dc2626;
    --success: #059669;
    --warning: #d97706;
    --dark: #0f172a;
    --light: #f8fafc;
    --gray: #64748b;
    --border: #e2e8f0;
    --sidebar-width: 280px;
}

body {
    background: #f1f5f9;
    min-height: 100vh;
}

/* Login Page */
.login-wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%);
    padding: 20px;
}

.login-card {
    background: white;
    border-radius: 24px;
    padding: 50px;
    width: 100%;
    max-width: 520px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.login-header {
    text-align: center;
    margin-bottom: 40px;
}

.login-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 40px;
    box-shadow: 0 10px 25px rgba(30, 58, 138, 0.3);
}

.login-header h1 {
    color: var(--primary);
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
}

.login-header p {
    color: var(--gray);
    font-size: 14px;
}

.login-form .input-group {
    margin-bottom: 24px;
}

.login-form label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--dark);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.login-form input, .login-form select {
    width: 100%;
    padding: 16px;
    border: 2px solid var(--border);
    border-radius: 12px;
    font-size: 15px;
    transition: all 0.2s;
}

.login-form input:focus, .login-form select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(30, 58, 138, 0.1);
}

.btn-login {
    width: 100%;
    padding: 18px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 10px 25px rgba(30, 58, 138, 0.3);
}

.btn-login:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(30, 58, 138, 0.4);
}

/* Dashboard Layout */
.dashboard-wrapper {
    display: none;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    width: var(--sidebar-width);
    background: linear-gradient(180deg, var(--primary) 0%, var(--dark) 100%);
    position: fixed;
    height: 100vh;
    overflow-y: auto;
    z-index: 100;
    padding: 30px 20px;
}

.sidebar-header {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 30px;
}

.sidebar-logo {
    width: 50px;
    height: 50px;
    background: rgba(255,255,255,0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.sidebar-title {
    color: white;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.3;
}

.sidebar-subtitle {
    color: rgba(255,255,255,0.6);
    font-size: 11px;
}

.nav-menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.2s;
    cursor: pointer;
}

.nav-item:hover {
    background: rgba(255,255,255,0.1);
    color: white;
}

.nav-item.active {
    background: rgba(255,255,255,0.15);
    color: white;
}

.nav-icon {
    font-size: 20px;
    width: 24px;
    text-align: center;
}

.nav-text {
    font-size: 14px;
    font-weight: 500;
}

.nav-badge {
    margin-left: auto;
    background: var(--danger);
    color: white;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 700;
}

/* Main Content */
.main-wrapper {
    margin-left: var(--sidebar-width);
    padding: 30px;
    background: #f1f5f9;
    min-height: 100vh;
}

.top-bar {
    background: white;
    border-radius: 16px;
    padding: 20px 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.station-badge {
    display: flex;
    align-items: center;
    gap: 12px;
}

.badge-icon {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.badge-info h3 {
    font-size: 16px;
    color: var(--dark);
    margin-bottom: 3px;
}

.badge-info p {
    font-size: 12px;
    color: var(--gray);
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: #dcfce7;
    color: var(--success);
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
}

.status-dot {
    width: 8px;
    height: 8px;
    background: var(--success);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Page Sections */
.page-section {
    display: none;
    animation: fadeIn 0.3s ease;
}

.page-section.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.page-header {
    margin-bottom: 30px;
}

.page-title {
    font-size: 28px;
    font-weight: 700;
    color: var(--dark);
    margin-bottom: 8px;
}

.page-subtitle {
    font-size: 14px;
    color: var(--gray);
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.stat-card {
    background: white;
    border-radius: 16px;
    padding: 25px;
    display: flex;
    align-items: center;
    gap: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: all 0.2s;
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.stat-icon {
    width: 65px;
    height: 65px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
}

.stat-icon.blue { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); }
.stat-icon.red { background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); }
.stat-icon.green { background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); }
.stat-icon.yellow { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); }

.stat-content h4 {
    font-size: 32px;
    color: var(--dark);
    margin-bottom: 5px;
    font-weight: 800;
}

.stat-content p {
    font-size: 14px;
    color: var(--gray);
    font-weight: 500;
}

/* Content Sections */
.section-card {
    background: white;
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--border);
}

.section-title {
    font-size: 18px;
    font-weight: 700;
    color: var(--dark);
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn-refresh {
    padding: 10px 20px;
    background: var(--light);
    color: var(--primary);
    border: none;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-refresh:hover {
    background: var(--primary);
    color: white;
}

/* Missing Persons List */
.missing-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.missing-item {
    background: var(--light);
    border-radius: 12px;
    padding: 20px;
    display: grid;
    grid-template-columns: 80px 1fr auto;
    gap: 20px;
    align-items: center;
    border: 2px solid transparent;
    transition: all 0.2s;
    cursor: pointer;
}

.missing-item:hover {
    border-color: var(--primary);
    background: white;
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.1);
}

.missing-photo {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    object-fit: cover;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.missing-info h4 {
    font-size: 16px;
    color: var(--dark);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.priority-badge {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
}

.priority-badge.critical {
    background: #fee2e2;
    color: var(--danger);
}

.priority-badge.urgent {
    background: #fef3c7;
    color: var(--warning);
}

.priority-badge.moderate {
    background: #dbeafe;
    color: var(--primary);
}

.meta-info {
    display: flex;
    gap: 20px;
    font-size: 13px;
    color: var(--gray);
    margin-bottom: 8px;
    flex-wrap: wrap;
}

.meta-info span {
    display: flex;
    align-items: center;
    gap: 5px;
}

.case-notes {
    font-size: 13px;
    color: var(--gray);
    line-height: 1.5;
}

.action-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.btn-success {
    background: var(--success);
    color: white;
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--border);
    color: var(--gray);
}

.btn:active {
    transform: scale(0.98);
}

/* Modal */
.modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
    align-items: center;
    justify-content: center;
    padding: 20px;
    backdrop-filter: blur(4px);
}

.modal-overlay.active {
    display: flex;
}

.modal-container {
    background: white;
    border-radius: 24px;
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    animation: modalSlide 0.3s ease;
}

@keyframes modalSlide {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-header {
    padding: 30px;
    border-bottom: 2px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h2 {
    font-size: 24px;
    color: var(--dark);
}

.btn-close {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background: var(--light);
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-close:hover {
    background: var(--danger);
    color: white;
}

.modal-body {
    padding: 30px;
}

.photo-showcase {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 30px;
}

.photo-showcase .main-photo {
    grid-column: span 3;
    aspect-ratio: 16/9;
    border-radius: 12px;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.photo-showcase .main-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 25px;
}

.info-box {
    background: var(--light);
    padding: 20px;
    border-radius: 12px;
}

.info-box label {
    font-size: 12px;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
    display: block;
    font-weight: 600;
}

.info-box value {
    font-size: 15px;
    color: var(--dark);
    font-weight: 600;
}

.full-width {
    grid-column: span 2;
}

/* Reports Grid */
.reports-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.report-card {
    background: white;
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: all 0.2s;
}

.report-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.report-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-bottom: 15px;
}

.report-card h4 {
    font-size: 18px;
    color: var(--dark);
    margin-bottom: 8px;
}

.report-card p {
    font-size: 13px;
    color: var(--gray);
    margin-bottom: 15px;
    line-height: 1.6;
}

/* Responsive */
@media (max-width: 1200px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .sidebar {
        transform: translateX(-100%);
    }
    
    .main-wrapper {
        margin-left: 0;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .missing-item {
        grid-template-columns: 1fr;
    }
    
    .action-buttons {
        flex-direction: row;
    }
    
    .info-grid {
        grid-template-columns: 1fr;
    }
    
    .full-width {
        grid-column: span 1;
    }
}
</style>
</head>
<body>

<!-- Login Page -->
<div class="login-wrapper" id="loginPage">
    <div class="login-card">
        <div class="login-header">
            <div class="login-icon"></div>
            <h1>Police Command Center</h1>
            <p>Locate Me - Station Dashboard</p>
        </div>
        <form class="login-form" onsubmit="handleLogin(event)">
            <div class="input-group">
                <label>Select Police Station *</label>
                <select id="stationSelect" required>
                    <option value="">-- Select Your Station --</option>
                    <option value="RUI-2026-001">Ruiru Police Station</option>
                    <option value="KAS-2026-001">Kasarani Police Station</option>
                    <option value="NRB-2026-001">Central Police Station - Nairobi</option>
                    <option value="KIL-2026-001">Kilimani Police Station</option>
                    <option value="WES-2026-001">Westlands Police Station</option>
                    <option value="LAN-2026-001">Lang'ata Police Station</option>
                    <option value="EMB-2026-001">Embakasi Police Station</option>
                    <option value="RUA-2026-001">Ruaraka Police Station</option>
                    <option value="DON-2026-001">Donholm Police Station</option>
                    <option value="KAY-2026-001">Kayole Police Station</option>
                    <option value="PUM-2026-001">Pumwani Police Station</option>
                    <option value="KAM-2026-001">Kamukunji Police Station</option>
                    <option value="STA-2026-001">Starehe Police Station</option>
                    <option value="MAK-2026-001">Makadara Police Station</option>
                    <option value="KIB-2026-001">Kibera Police Station</option>
                    <option value="PAR-2026-001">Parklands Police Station</option>
                    <option value="THI-2026-001">Thika Police Station</option>
                    <option value="KIA-2026-001">Kiambu Town Police Station</option>
                    <option value="LIM-2026-001">Limuru Police Station</option>
                    <option value="JUJ-2026-001">Juja Police Station</option>
                    <option value="KAR-2026-001">Karuri Police Station</option>
                    <option value="KIK-2026-001">Kikuyu Police Station</option>
                    <option value="MOM-2026-001">Mombasa Central Police Station</option>
                    <option value="TUD-2026-001">Tudor Police Station</option>
                    <option value="CHA-2026-001">Changamwe Police Station</option>
                    <option value="KIS-2026-001">Kisauni Police Station</option>
                    <option value="LIK-2026-001">Likoni Police Station</option>
                    <option value="KIS-CEN-001">Kisumu Central Police Station</option>
                    <option value="KIS-TOW-001">Kisumu Town Police Station</option>
                    <option value="NYA-2026-001">Nyando Police Station</option>
                    <option value="MUH-2026-001">Muhoroni Police Station</option>
                    <option value="NAK-CEN-001">Nakuru Central Police Station</option>
                    <option value="NAK-TOW-001">Nakuru Town Police Station</option>
                    <option value="NAI-2026-001">Naivasha Police Station</option>
                    <option value="GIL-2026-001">Gilgil Police Station</option>
                    <option value="MOL-2026-001">Molo Police Station</option>
                    <option value="ELD-2026-001">Eldoret Police Station</option>
                    <option value="ELD-TOW-001">Eldoret Town Police Station</option>
                    <option value="TUR-2026-001">Turbo Police Station</option>
                </select>
            </div>
            <div class="input-group">
                <label>Officer ID / OB Number</label>
                <input type="text" id="officerId" placeholder="Enter officer ID" required>
            </div>
            <div class="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" required>
            </div>
            <button type="submit" class="btn-login">🔐 Access Dashboard</button>
        </form>
        <div style="margin-top: 25px; text-align: center; font-size: 12px; color: var(--gray);">
            <p>🔒 Official Government Use Only</p>
            <p style="margin-top: 5px;">Authorized Personnel Only</p>
        </div>
    </div>
</div>

<!-- Dashboard -->
<div class="dashboard-wrapper" id="dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
        <div class="sidebar-header">
            <div class="sidebar-logo">👮</div>
            <div>
                <div class="sidebar-title">Locate Me</div>
                <div class="sidebar-subtitle">Police Portal</div>
            </div>
        </div>
        <nav class="nav-menu">
            <a class="nav-item active" onclick="switchPage('dashboard')">
                <span class="nav-icon">📊</span>
                <span class="nav-text">Dashboard</span>
            </a>
            <a class="nav-item" onclick="switchPage('missing')">
                <span class="nav-icon">📋</span>
                <span class="nav-text">Missing Persons</span>
                <span class="nav-badge" id="missingCount">0</span>
            </a>
            <a class="nav-item" onclick="switchPage('sightings')">
                <span class="nav-icon">🚨</span>
                <span class="nav-text">Sightings</span>
                <span class="nav-badge" id="sightingCount">0</span>
            </a>
            <a class="nav-item" onclick="switchPage('resolved')">
                <span class="nav-icon">✅</span>
                <span class="nav-text">Resolved Cases</span>
            </a>
            <a class="nav-item" onclick="switchPage('reports')">
                <span class="nav-icon">📈</span>
                <span class="nav-text">Reports</span>
            </a>
            <a class="nav-item" onclick="logout()">
                <span class="nav-icon">🚪</span>
                <span class="nav-text">Logout</span>
            </a>
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-wrapper">
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="station-badge">
                <div class="badge-icon">🏢</div>
                <div class="badge-info">
                    <h3 id="currentStationName">Police Station</h3>
                    <p id="currentStationId">Station ID: --- | Jurisdiction: ---</p>
                </div>
            </div>
            <div class="status-indicator">
                <span class="status-dot"></span>
                <span>System Online</span>
            </div>
        </div>

        <!-- DASHBOARD PAGE -->
        <div id="dashboardPage" class="page-section active">
            <div class="page-header">
                <h1 class="page-title">📊 Command Dashboard</h1>
                <p class="page-subtitle">Overview of all active cases and recent activity for your station</p>
            </div>

            <!-- Stats -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon blue">📋</div>
                    <div class="stat-content">
                        <h4 id="totalMissing">0</h4>
                        <p>Active Missing Persons</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon red">🚨</div>
                    <div class="stat-content">
                        <h4 id="criticalCount">0</h4>
                        <p>Critical Cases</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon green">✅</div>
                    <div class="stat-content">
                        <h4 id="resolvedCount">0</h4>
                        <p>Resolved This Month</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon yellow">👁️</div>
                    <div class="stat-content">
                        <h4 id="pendingSightings">0</h4>
                        <p>Pending Sightings</p>
                    </div>
                </div>
            </div>

            <!-- Recent Missing Persons -->
            <div class="section-card">
                <div class="section-header">
                    <h3 class="section-title">📋 Recent Missing Persons</h3>
                    <button class="btn btn-primary" onclick="switchPage('missing')">View All →</button>
                </div>
                <div class="missing-list" id="dashboardMissingList">
                    <!-- Populated by JavaScript -->
                </div>
            </div>
        </div>

        <!-- MISSING PERSONS PAGE -->
        <div id="missingPage" class="page-section">
            <div class="page-header">
                <h1 class="page-title">📋 Missing Persons</h1>
                <p class="page-subtitle">All active missing person cases in your jurisdiction</p>
            </div>

            <div class="section-card">
                <div class="section-header">
                    <h3 class="section-title">📋 Active Cases</h3>
                    <button class="btn-refresh" onclick="refreshData()">🔄 Refresh</button>
                </div>
                <div class="missing-list" id="missingList">
                    <!-- Populated by JavaScript -->
                </div>
            </div>
        </div>

        <!-- SIGHTINGS PAGE -->
        <div id="sightingsPage" class="page-section">
            <div class="page-header">
                <h1 class="page-title">🚨 Sighting Alerts</h1>
                <p class="page-subtitle">Real-time citizen reports of missing person sightings in your area</p>
            </div>

            <div class="section-card">
                <div class="section-header">
                    <h3 class="section-title">🚨 Pending Sightings</h3>
                    <button class="btn btn-success" onclick="markAllRead()">✓ Mark All Read</button>
                </div>
                <div id="sightingList">
                    <!-- Populated by JavaScript -->
                </div>
            </div>
        </div>

        <!-- RESOLVED CASES PAGE -->
        <div id="resolvedPage" class="page-section">
            <div class="page-header">
                <h1 class="page-title">✅ Resolved Cases</h1>
                <p class="page-subtitle">Successfully closed and resolved missing person cases</p>
            </div>

            <div class="section-card">
                <div class="section-header">
                    <h3 class="section-title">✅ Resolved This Month</h3>
                </div>
                <div id="resolvedList">
                    <!-- Populated by JavaScript -->
                </div>
            </div>
        </div>

        <!-- REPORTS PAGE -->
        <div id="reportsPage" class="page-section">
            <div class="page-header">
                <h1 class="page-title">📈 Reports & Analytics</h1>
                <p class="page-subtitle">Generate and download official police reports for your station</p>
            </div>

            <div class="reports-grid" id="reportsGrid">
                <!-- Populated by JavaScript -->
            </div>
        </div>
    </main>
</div>

<!-- Details Modal -->
<div class="modal-overlay" id="detailsModal">
    <div class="modal-container">
        <div class="modal-header">
            <h2>Case Details</h2>
            <button class="btn-close" onclick="closeModal()">✕</button>
        </div>
        <div class="modal-body" id="modalBody">
            <!-- Populated by JavaScript -->
        </div>
    </div>
</div>

<script>
// API Configuration
const API_URL = 'https://locate-me-backend-yvs8.onrender.com/api';

// HARDCODED Police Stations (so login works immediately without waiting for API)
const policeStations = [
    { id: 'RUI-2026-001', name: 'Ruiru Police Station', county: 'Kiambu' },
    { id: 'KAS-2026-001', name: 'Kasarani Police Station', county: 'Nairobi' },
    { id: 'NRB-2026-001', name: 'Central Police Station - Nairobi', county: 'Nairobi' },
    { id: 'KIL-2026-001', name: 'Kilimani Police Station', county: 'Nairobi' },
    { id: 'WES-2026-001', name: 'Westlands Police Station', county: 'Nairobi' },
    { id: 'LAN-2026-001', name: "Lang'ata Police Station", county: 'Nairobi' },
    { id: 'EMB-2026-001', name: 'Embakasi Police Station', county: 'Nairobi' },
    { id: 'RUA-2026-001', name: 'Ruaraka Police Station', county: 'Nairobi' },
    { id: 'DON-2026-001', name: 'Donholm Police Station', county: 'Nairobi' },
    { id: 'KAY-2026-001', name: 'Kayole Police Station', county: 'Nairobi' },
    { id: 'PUM-2026-001', name: 'Pumwani Police Station', county: 'Nairobi' },
    { id: 'KAM-2026-001', name: 'Kamukunji Police Station', county: 'Nairobi' },
    { id: 'STA-2026-001', name: 'Starehe Police Station', county: 'Nairobi' },
    { id: 'MAK-2026-001', name: 'Makadara Police Station', county: 'Nairobi' },
    { id: 'KIB-2026-001', name: 'Kibera Police Station', county: 'Nairobi' },
    { id: 'PAR-2026-001', name: 'Parklands Police Station', county: 'Nairobi' },
    { id: 'THI-2026-001', name: 'Thika Police Station', county: 'Kiambu' },
    { id: 'KIA-2026-001', name: 'Kiambu Town Police Station', county: 'Kiambu' },
    { id: 'LIM-2026-001', name: 'Limuru Police Station', county: 'Kiambu' },
    { id: 'JUJ-2026-001', name: 'Juja Police Station', county: 'Kiambu' },
    { id: 'KAR-2026-001', name: 'Karuri Police Station', county: 'Kiambu' },
    { id: 'KIK-2026-001', name: 'Kikuyu Police Station', county: 'Kiambu' },
    { id: 'MOM-2026-001', name: 'Mombasa Central Police Station', county: 'Mombasa' },
    { id: 'TUD-2026-001', name: 'Tudor Police Station', county: 'Mombasa' },
    { id: 'CHA-2026-001', name: 'Changamwe Police Station', county: 'Mombasa' },
    { id: 'KIS-2026-001', name: 'Kisauni Police Station', county: 'Mombasa' },
    { id: 'LIK-2026-001', name: 'Likoni Police Station', county: 'Mombasa' },
    { id: 'KIS-CEN-001', name: 'Kisumu Central Police Station', county: 'Kisumu' },
    { id: 'KIS-TOW-001', name: 'Kisumu Town Police Station', county: 'Kisumu' },
    { id: 'NYA-2026-001', name: 'Nyando Police Station', county: 'Kisumu' },
    { id: 'MUH-2026-001', name: 'Muhoroni Police Station', county: 'Kisumu' },
    { id: 'NAK-CEN-001', name: 'Nakuru Central Police Station', county: 'Nakuru' },
    { id: 'NAK-TOW-001', name: 'Nakuru Town Police Station', county: 'Nakuru' },
    { id: 'NAI-2026-001', name: 'Naivasha Police Station', county: 'Nakuru' },
    { id: 'GIL-2026-001', name: 'Gilgil Police Station', county: 'Nakuru' },
    { id: 'MOL-2026-001', name: 'Molo Police Station', county: 'Nakuru' },
    { id: 'ELD-2026-001', name: 'Eldoret Police Station', county: 'Uasin Gishu' },
    { id: 'ELD-TOW-001', name: 'Eldoret Town Police Station', county: 'Uasin Gishu' },
    { id: 'TUR-2026-001', name: 'Turbo Police Station', county: 'Uasin Gishu' }
];

// Real data will be fetched from API
let missingPersons = [];
let sightingAlerts = [];
let resolvedCases = [];

// Current User Session
let currentUser = {
    stationId: null,
    stationName: null,
    officerId: null
};

// Fetch data from backend
async function fetchStationData() {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) return;
        
        // Fetch missing persons for this station
        const response = await fetch(`${API_URL}/missing-persons/station/${currentUser.stationId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (response.ok) {
            missingPersons = await response.json();
        } else {
            console.log('No data found for this station yet, or API not reachable');
            missingPersons = [];
        }
        
    } catch (err) {
        console.error('Error fetching data:', err);
        missingPersons = [];
    }
}

// Login Handler
async function handleLogin(e) {
    e.preventDefault();
    
    const stationSelect = document.getElementById('stationSelect');
    const officerId = document.getElementById('officerId').value;
    
    // Find station from hardcoded list
    const selectedStation = policeStations.find(s => s.id === stationSelect.value);
    
    if (!selectedStation) {
        alert('Please select a valid police station.');
        return;
    }
    
    // Set current user
    currentUser = {
        stationId: selectedStation.id,
        stationName: selectedStation.name,
        officerId: officerId
    };
    
    // Update UI
    document.getElementById('currentStationName').textContent = selectedStation.name;
    document.getElementById('currentStationId').textContent = 
        `Station ID: ${selectedStation.id} | Jurisdiction: ${selectedStation.county}`;
    
    // Show dashboard
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    
    // Fetch real data from backend
    await fetchStationData();
    
    // Load data
    renderDashboard();
    renderMissingPersons();
    renderSightings();
    renderResolved();
    renderReports();
    updateStats();
}

// Logout
function logout() {
    if(confirm('Are you sure you want to logout?')) {
        currentUser = { stationId: null, stationName: null, officerId: null };
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('loginPage').style.display = 'flex';
        document.getElementById('stationSelect').value = '';
        document.getElementById('officerId').value = '';
    }
}

// Page Switching
function switchPage(pageName) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.closest('.nav-item').classList.add('active');
    
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(pageName + 'Page').classList.add('active');
}

// Update Stats
function updateStats() {
    const myStationCases = missingPersons;
    const mySightings = sightingAlerts;
    const myResolved = resolvedCases;
    
    document.getElementById('totalMissing').textContent = myStationCases.length;
    document.getElementById('criticalCount').textContent = myStationCases.filter(p => p.urgency === 'Critical').length;
    document.getElementById('resolvedCount').textContent = myResolved.length;
    document.getElementById('pendingSightings').textContent = mySightings.length;
    document.getElementById('missingCount').textContent = myStationCases.length;
    document.getElementById('sightingCount').textContent = mySightings.length;
}

// Render Dashboard
function renderDashboard() {
    const dashboardList = document.getElementById('dashboardMissingList');
    if (missingPersons.length === 0) {
        dashboardList.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--gray);">No active cases for your station yet.</div>';
        return;
    }
    dashboardList.innerHTML = missingPersons.slice(0, 5).map(person => createMissingItem(person)).join('');
}

// Render Missing Persons
function renderMissingPersons() {
    const list = document.getElementById('missingList');
    if (missingPersons.length === 0) {
        list.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--gray);">No active cases for your station yet.</div>';
        return;
    }
    list.innerHTML = missingPersons.map(person => createMissingItem(person)).join('');
}

function createMissingItem(person) {
    return `
        <div class="missing-item" onclick="showDetails('${person.id}')">
            <img src="${person.photo_urls?.[0] || ''}" alt="${person.name}" class="missing-photo" onerror="this.src='https://via.placeholder.com/80?text=No+Photo'">
            <div class="missing-info">
                <h4>
                    ${person.name}
                    <span class="priority-badge moderate">Active</span>
                </h4>
                <div class="meta-info">
                    <span>🎂 ${person.age} years</span>
                    <span>♀️ ${person.gender}</span>
                    <span>📅 ${formatDate(person.date_missing)}</span>
                </div>
                <div class="meta-info">
                    <span>📍 ${person.last_seen_location}</span>
                </div>
                <p class="case-notes">${person.description || person.notes || ''}</p>
            </div>
            <div class="action-buttons">
                <button class="btn btn-primary" onclick="event.stopPropagation(); viewFullDetails('${person.id}')">View Details</button>
                <button class="btn btn-success" onclick="event.stopPropagation(); markFound('${person.id}')">Mark Found</button>
                <button class="btn btn-outline" onclick="event.stopPropagation(); downloadReport('${person.id}')">Download</button>
            </div>
        </div>
    `;
}

// Render Sightings
function renderSightings() {
    const list = document.getElementById('sightingList');
    if (sightingAlerts.length === 0) {
        list.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--gray);">No pending sightings.</div>';
        return;
    }
    list.innerHTML = sightingAlerts.map(sighting => createSightingItem(sighting)).join('');
}

function createSightingItem(sighting) {
    return `
        <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid var(--warning); border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <div style="font-size: 28px;">🚨</div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: var(--dark);">Sighting: ${sighting.missingPersonName}</div>
                    <div style="font-size: 12px; color: var(--gray);">${formatDate(sighting.dateSeen)} at ${sighting.timeSeen}</div>
                </div>
            </div>
            <div style="font-size: 13px; color: var(--dark); line-height: 1.6; margin-bottom: 15px;">
                <strong>Location:</strong> ${sighting.location}<br>
                <strong>Description:</strong> ${sighting.description}<br>
                <strong>Reported by:</strong> ${sighting.reportedBy}
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-primary" onclick="dispatchUnit('${sighting.id}')" style="padding: 8px 14px; font-size: 12px; border-radius: 8px;">🚓 Dispatch</button>
                <button class="btn btn-outline" onclick="contactReporter('${sighting.reportedBy}')" style="padding: 8px 14px; font-size: 12px; border-radius: 8px;">📞 Call</button>
                <button class="btn btn-success" onclick="markSightingResolved('${sighting.id}')" style="padding: 8px 14px; font-size: 12px; border-radius: 8px;">✓ Done</button>
            </div>
        </div>
    `;
}

// Render Resolved Cases
function renderResolved() {
    const list = document.getElementById('resolvedList');
    if (resolvedCases.length === 0) {
        list.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--gray);">No resolved cases yet.</div>';
        return;
    }
    list.innerHTML = resolvedCases.map(resolved => `
        <div style="background: #d1fae5; border-left: 4px solid var(--success); border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <div style="font-size: 28px;">✅</div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: var(--dark);">${resolved.name} (${resolved.age} years)</div>
                    <div style="font-size: 12px; color: var(--gray);">Missing: ${formatDate(resolved.dateMissing)} | Found: ${formatDate(resolved.dateFound)}</div>
                </div>
            </div>
            <div style="font-size: 13px; color: var(--dark); line-height: 1.6;">
                <strong>Location:</strong> ${resolved.location}<br>
                <strong>OB Number:</strong> ${resolved.obNumber}<br>
                <strong>Notes:</strong> ${resolved.notes}
            </div>
        </div>
    `).join('');
}

// Render Reports
function renderReports() {
    const reports = [
        {
            id: "RPT-001",
            title: "Monthly Missing Persons Report",
            description: "Comprehensive report of all missing persons cases for the current month",
            icon: "📊",
            date: "March 2026"
        },
        {
            id: "RPT-002",
            title: "Sighting Analysis Report",
            description: "Analysis of all citizen sighting reports and response times",
            icon: "📈",
            date: "March 2026"
        },
        {
            id: "RPT-003",
            title: "Resolved Cases Summary",
            description: "Summary of all successfully resolved cases this month",
            icon: "✅",
            date: "March 2026"
        },
        {
            id: "RPT-004",
            title: "Critical Cases Report",
            description: "Detailed report on all critical priority missing person cases",
            icon: "",
            date: "March 2026"
        }
    ];
    
    const grid = document.getElementById('reportsGrid');
    grid.innerHTML = reports.map(report => `
        <div class="report-card">
            <div class="report-icon">${report.icon}</div>
            <h4>${report.title}</h4>
            <p>${report.description}</p>
            <div style="font-size: 12px; color: var(--gray); margin-bottom: 15px;"> ${report.date}</div>
            <button class="btn btn-primary" onclick="downloadReportFile('${report.id}')" style="width: 100%;">📥 Download PDF</button>
        </div>
    `).join('');
}

// Show Details Modal
function showDetails(id) {
    const person = missingPersons.find(p => p.id == id);
    if(!person) return;
    
    const modal = document.getElementById('detailsModal');
    const body = document.getElementById('modalBody');
    
    body.innerHTML = `
        <div class="photo-showcase">
            <div class="main-photo">
                <img src="${person.photo_urls?.[0] || ''}" alt="${person.name}" onerror="this.src='https://via.placeholder.com/800x450?text=No+Photo'">
            </div>
        </div>
        
        <div class="info-grid">
            <div class="info-box">
                <label>Full Name</label>
                <value>${person.name}</value>
            </div>
            <div class="info-box">
                <label>Age & Gender</label>
                <value>${person.age} years, ${person.gender}</value>
            </div>
            <div class="info-box">
                <label>Case ID</label>
                <value>${person.id}</value>
            </div>
            <div class="info-box">
                <label>Date Missing</label>
                <value>${formatDate(person.date_missing)}</value>
            </div>
            <div class="info-box full-width">
                <label>Last Known Location</label>
                <value>${person.last_seen_location}</value>
            </div>
            <div class="info-box full-width">
                <label>Clothing Description</label>
                <value>${person.description || 'N/A'}</value>
            </div>
            <div class="info-box full-width">
                <label>Additional Notes</label>
                <value>${person.notes || 'N/A'}</value>
            </div>
            <div class="info-box full-width">
                <label>Assigned Police Station</label>
                <value style="color: var(--primary); font-weight: 700;">${person.police_station || 'N/A'}</value>
            </div>
        </div>
        
        <div style="display: flex; gap: 10px;">
            <button class="btn btn-success" style="flex: 1;" onclick="markFound('${person.id}')">✓ Mark as Found</button>
            <button class="btn btn-outline" style="flex: 1;" onclick="downloadReport('${person.id}')">📥 Download</button>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('detailsModal').classList.remove('active');
}

// Action Functions
function viewFullDetails(id) {
    showDetails(id);
}

function markFound(id) {
    if(confirm('Mark this person as found? This will update the case status.')) {
        alert('✅ Person marked as found. Case updated successfully.');
        closeModal();
        renderDashboard();
        renderMissingPersons();
        updateStats();
    }
}

function dispatchUnit(sightingId) {
    const sighting = sightingAlerts.find(s => s.id === sightingId);
    alert(`🚓 Dispatching patrol unit to: ${sighting.location}\n\nUnit notified via radio.`);
}

function contactReporter(phone) {
    if(confirm(`Call ${phone}?`)) {
        window.location.href = `tel:${phone}`;
    }
}

function markSightingResolved(id) {
    if(confirm('Mark this sighting as resolved?')) {
        alert('✅ Sighting marked as resolved');
    }
}

function downloadReport(id) {
    alert('📥 Downloading case report PDF...');
}

function downloadReportFile(id) {
    alert('📥 Downloading report file...');
}

function markAllRead() {
    alert('✅ All sighting alerts marked as read');
}

function refreshData() {
    fetchStationData().then(() => {
        renderDashboard();
        renderMissingPersons();
        updateStats();
        alert('🔄 Data refreshed from server!');
    });
}

function formatDate(dateString) {
    if (!dateString) return 'Not specified';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-KE', options);
}

// Close modal on outside click
document.getElementById('detailsModal').addEventListener('click', function(e) {
    if(e.target === this) closeModal();
});
</script>

</body>
</html>
