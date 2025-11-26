// Sidebar Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const navbarToggler = document.querySelector('.navbar-toggler');
    // Toggle sidebar
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }
    
    // Handle responsive sidebar on mobile
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                sidebar.classList.toggle('show');
            }
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 992) {
            const togglerClicked = navbarToggler && navbarToggler.contains(event.target);
            if (!sidebar.contains(event.target) && !togglerClicked) {
                sidebar.classList.remove('show');
            }
        }
    });
    
    // Active menu item highlighting
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const currentPage = document.body.dataset.page;
    
    if (currentPage) {
        navLinks.forEach(link => {
            const linkPage = link.dataset.link;
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Initialize Charts
    initializeCharts();
});

// Chart Initialization
function initializeCharts() {
    // Line Chart - Sales Overview
    const lineCtx = document.getElementById('lineChart');
    if (lineCtx) {
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Sales',
                    data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 32000, 40000, 38000, 45000],
                    borderColor: 'rgba(47, 63, 100, 1)',
                    backgroundColor: 'rgba(47, 63, 100, 0.08)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(47, 63, 100, 1)',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(47, 63, 100, 0.9)',
                        padding: 12,
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderWidth: 1
                    }
                },
                scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(93, 105, 133, 0.1)',
                                borderColor: 'rgba(93, 105, 133, 0.2)'
                            },
                            ticks: {
                                color: '#5c6b82',
                                callback: function(value) {
                                    return '$' + value.toLocaleString();
                                }
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(93, 105, 133, 0.08)',
                                borderColor: 'rgba(93, 105, 133, 0.15)'
                            },
                            ticks: {
                                color: '#5c6b82'
                            }
                        }
                }
            }
        });
    }
    
    // Doughnut Chart - Revenue by Category
    const doughnutCtx = document.getElementById('doughnutChart');
    if (doughnutCtx) {
        new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                labels: ['Products', 'Services', 'Subscriptions', 'Other'],
                datasets: [{
                    data: [35, 25, 30, 10],
                    backgroundColor: [
                        'rgba(47, 63, 100, 0.85)',
                        'rgba(47, 133, 90, 0.85)',
                        'rgba(183, 121, 31, 0.85)',
                        'rgba(43, 108, 176, 0.85)'
                    ],
                    borderColor: [
                        'rgba(47, 63, 100, 1)',
                        'rgba(47, 133, 90, 1)',
                        'rgba(183, 121, 31, 1)',
                        'rgba(43, 108, 176, 1)'
                    ],
                    borderWidth: 2,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#5c6b82',
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(47, 63, 100, 0.9)',
                        padding: 12,
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Bar Chart - Monthly Performance
    const barCtx = document.getElementById('barChart');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue',
                    data: [45000, 52000, 48000, 61000, 55000, 67000],
                    backgroundColor: 'rgba(47, 63, 100, 0.85)',
                    borderColor: 'rgba(47, 63, 100, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false,
                }, {
                    label: 'Expenses',
                    data: [30000, 35000, 32000, 40000, 38000, 42000],
                    backgroundColor: 'rgba(197, 48, 48, 0.85)',
                    borderColor: 'rgba(197, 48, 48, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#5c6b82',
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(47, 63, 100, 0.9)',
                        padding: 12,
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(93, 105, 133, 0.1)',
                            borderColor: 'rgba(93, 105, 133, 0.2)'
                        },
                        ticks: {
                            color: '#5c6b82',
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#5c6b82'
                        }
                    }
                }
            }
        });
    }

    // Analytics Page - Engagement Timeline
    const engagementCtx = document.getElementById('engagementChart');
    if (engagementCtx) {
        new Chart(engagementCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                datasets: [{
                    label: 'Key Actions',
                    data: [62, 70, 68, 74, 79, 83],
                    borderColor: 'rgba(47, 63, 100, 1)',
                    backgroundColor: 'rgba(47, 63, 100, 0.15)',
                    fill: true,
                    tension: 0.5,
                    borderWidth: 3,
                    pointRadius: 0
                }, {
                    label: 'Sessions',
                    data: [48, 55, 51, 60, 64, 66],
                    borderColor: 'rgba(43, 108, 176, 1)',
                    backgroundColor: 'rgba(43, 108, 176, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderDash: [6, 6],
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(47, 63, 100, 0.9)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderWidth: 1,
                        padding: 12
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#5c6b82' },
                        grid: { color: 'rgba(93, 105, 133, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#5c6b82' },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Analytics Page - Channel Radar
    const channelsCtx = document.getElementById('channelsChart');
    if (channelsCtx) {
        new Chart(channelsCtx, {
            type: 'radar',
            data: {
                labels: ['Organic', 'Direct', 'Referral', 'Social', 'Partners'],
                datasets: [{
                    label: 'Share',
                    data: [48, 32, 15, 5, 22],
                    backgroundColor: 'rgba(47, 63, 100, 0.25)',
                    borderColor: 'rgba(47, 63, 100, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(47, 63, 100, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(47, 63, 100, 0.9)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderWidth: 1,
                    }
                },
                scales: {
                    r: {
                        angleLines: { color: 'rgba(93, 105, 133, 0.2)' },
                        grid: { color: 'rgba(93, 105, 133, 0.15)' },
                        pointLabels: {
                            color: '#5c6b82',
                            font: { size: 12 }
                        },
                        suggestedMin: 0
                    }
                }
            }
        });
    }

    // Reports Page - Hero Chart
    const reportHeroCtx = document.getElementById('reportHeroChart');
    if (reportHeroCtx) {
        new Chart(reportHeroCtx, {
            type: 'bar',
            data: {
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
                datasets: [{
                    label: 'Revenue',
                    data: [38, 42, 45, 48, 52, 56],
                    backgroundColor: 'rgba(47, 63, 100, 0.8)',
                    borderRadius: 6,
                    borderSkipped: false,
                }, {
                    label: 'Churn',
                    data: [8, 7, 6, 5, 4, 3],
                    type: 'line',
                    borderColor: 'rgba(197, 48, 48, 1)',
                    backgroundColor: 'rgba(197, 48, 48, 0.1)',
                    borderWidth: 2,
                    yAxisID: 'percentage',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(47, 63, 100, 0.9)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderWidth: 1,
                        padding: 12
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(93, 105, 133, 0.1)' },
                        ticks: { color: '#5c6b82' }
                    },
                    percentage: {
                        position: 'right',
                        beginAtZero: true,
                        min: 0,
                        max: 12,
                        ticks: {
                            callback: value => value + '%',
                            color: '#5c6b82'
                        },
                        grid: { display: false }
                    },
                    x: {
                        ticks: { color: '#5c6b82' },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all glass cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Chart control buttons functionality
document.addEventListener('DOMContentLoaded', function() {
    const chartControls = document.querySelectorAll('.chart-controls .btn');
    chartControls.forEach(btn => {
        btn.addEventListener('click', function() {
            chartControls.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Here you can add logic to update the chart based on selected period
        });
    });
});

// Smooth number animation for stat values
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stat values on page load
document.addEventListener('DOMContentLoaded', function() {
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text.replace(/[^0-9]/g, ''));
        if (!isNaN(number)) {
            stat.textContent = '0';
            setTimeout(() => {
                animateValue(stat, 0, number, 2000);
            }, 500);
        }
    });
});
  // Animate skill bars on load
        document.addEventListener('DOMContentLoaded', function() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        });
