document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("muPVIkZbznF0XqB-T"); 


    document.getElementById('contactForm').addEventListener('submit', function(event) { 
        event.preventDefault(); // Prevent empty form submission

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
            const errorDiv = document.getElementById('errorMessages'); 
            errorDiv.innerHTML = ''; 
            errorMessages.forEach(function(message) { 
                const p = document.createElement('p'); 
                p.textContent = message; 
                errorDiv.appendChild(p); 
            }); 
        } 
        else {
            // Send email using EmailJS
            emailjs.send("service_87h616f","template_665m5ob",{
                name: name,
                email: email,
                message: message
            }).then(function() {
                // success message
                const successDiv = document.getElementById('successMsg');
                successDiv.innerHTML = 'Your message has been sent successfully!';
                document.getElementById('errorMsg').innerHTML = '';
            }, function() {
                // error message
                const errorDiv = document.getElementById('errorMsg');
                errorDiv.innerHTML = 'Message failed to be sent. Please try again.';
                document.getElementById('successMsg').innerHTML = '';
                console.error('EmailJS error:', error);
            });
        }
    });
});