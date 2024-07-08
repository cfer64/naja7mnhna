document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const mainContent = document.getElementById('main-content');
    const authContainer = document.getElementById('auth-container');
    const logoutBtn = document.getElementById('logout-btn');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Toggle between Login and Signup forms
    loginBtn.addEventListener('click', function() {
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    signupBtn.addEventListener('click', function() {
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    // Simulated logout functionality
    logoutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.classList.add('hidden');
        authContainer.style.display = 'flex';
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    // Simulated login form submission
    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        if (email && password) {
            // Simulate successful login
            authContainer.style.display = 'none';
            mainContent.classList.remove('hidden');
            showProfileInfo('John Doe', email); // Replace with actual profile data
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Simulated signup form submission
    document.getElementById('signup').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        if (name && email && password) {
            // Simulate successful signup
            authContainer.style.display = 'none';
            mainContent.classList.remove('hidden');
            showProfileInfo(name, email); // Replace with actual profile data
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Function to display profile information
    function showProfileInfo(name, email) {
        document.getElementById('profile-name').textContent = name;
        document.getElementById('profile-email').textContent = email;
    }

    // Navigation functionality
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute('href').replace('#', '');
            const sections = document.querySelectorAll('.section');
            sections.forEach(function(section) {
                if (section.id === sectionId) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });
});