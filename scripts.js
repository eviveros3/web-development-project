document.getElementById('contactForm').addEventListener('submit', function(event) { 
    let errorMessages = []; 
    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value; 
    const message = document.getElementById('message').value; 
 
    // Validate name 
    if (name.trim() === '') { 
        errorMessages.push('Name is required.'); 
    } 
 
    // Validate email 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    if (!emailPattern.test(email)) { 
        errorMessages.push('Please enter a valid email address.'); 
    } 
 
    // Validate message 
    if (message.trim() === '') { 
        errorMessages.push('Message is required.'); 
    } 
 
    // Display error messages 
    if (errorMessages.length > 0) { 
        event.preventDefault(); 
        const errorDiv = document.getElementById('errorMessages'); 
        errorDiv.innerHTML = ''; 
        errorMessages.forEach(function(message) { 
            const p = document.createElement('p'); 
            p.textContent = message; 
            errorDiv.appendChild(p); 
        }); 
    } 
}); 