// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials as requested
    if (username === 'Jamcassar1' && password === 'Password11') {
        closeModal('loginModal');
        document.getElementById('bankingInterface').style.display = 'block';
        showTab('dashboard');
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Tab navigation
function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');
    
    // Update active state in sidebar
    document.querySelectorAll('.sidebar-menu li a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find the corresponding sidebar link and make it active
    const sidebarLink = document.querySelector(`.sidebar-menu li a[onclick="showTab('${tabId}')"]`);
    if (sidebarLink) {
        sidebarLink.classList.add('active');
    }
}

// Modal functions
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showLogin() {
    closeModal('forgotPasswordModal');
    closeModal('registerModal');
    showModal('loginModal');
}

function showForgotPassword() {
    closeModal('loginModal');
    showModal('forgotPasswordModal');
}

function showRegister() {
    closeModal('loginModal');
    showModal('registerModal');
}

function showChangePassword() {
    showModal('changePasswordModal');
}

function showContactModal() {
    showModal('contactModal');
}

function showChatModal() {
    showModal('chatModal');
}

function showMessageModal() {
    showModal('messageModal');
}

// Logout function
function logout() {
    document.getElementById('bankingInterface').style.display = 'none';
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Transfer form - show/hide external account details
document.getElementById('toAccount').addEventListener('change', function() {
    const externalDetails = document.getElementById('externalAccountDetails');
    if (this.value === 'external') {
        externalDetails.style.display = 'block';
    } else {
        externalDetails.style.display = 'none';
    }
});

// Transaction history filters
function filterTransactions() {
    const accountFilter = document.getElementById('historyAccount').value;
    const dateFilter = document.getElementById('historyDate').value;
    const customRange = document.getElementById('customDateRange');
    
    if (dateFilter === 'custom') {
        customRange.style.display = 'block';
    } else {
        customRange.style.display = 'none';
    }
    
    // In a real app, this would filter the transaction data
    console.log(`Filtering by account: ${accountFilter}, date range: ${dateFilter}`);
}

// FAQ toggle
function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// Chat functionality
function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (chatInput.value.trim() === '') return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `<p>${chatInput.value}</p>`;
    chatMessages.appendChild(userMessage);
    
    // Clear input
    chatInput.value = '';
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Simulate agent response after a delay
    setTimeout(() => {
        const agentMessage = document.createElement('div');
        agentMessage.className = 'message agent';
        agentMessage.innerHTML = '<p>Thank you for your message. Our customer service representative will be with you shortly.</p>';
        chatMessages.appendChild(agentMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

// Allow pressing Enter in chat
document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

// Form submissions (prevent default and show success message)
document.getElementById('transferForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Transfer request submitted successfully!');
    this.reset();
});

document.getElementById('zelleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Zelle payment sent successfully!');
    this.reset();
});

document.getElementById('mobileDepositForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Check deposit submitted successfully! It may take 1-2 business days to process.');
    this.reset();
});

document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Profile updated successfully!');
});

document.getElementById('changePasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Password changed successfully!');
    closeModal('changePasswordModal');
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Password reset instructions sent to your email!');
    closeModal('forgotPasswordModal');
    showLogin();
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Account created successfully! Please sign in.');
    closeModal('registerModal');
    showLogin();
});

document.getElementById('supportMessageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent! We will respond within 24 hours.');
    closeModal('messageModal');
    this.reset();
});

// Profile photo upload
document.getElementById('photoUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.querySelector('.profile-img-large').src = event.target.result;
            document.querySelector('.profile-img').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});
