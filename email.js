// Initialize EmailJS
(function() {
    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize EmailJS
        emailjs.init("iyXNL74actpFsdp3r");
        console.log("EmailJS initialized");

        // Get the submit button
        const submitBtn = document.getElementById('submitBtn');
        if (!submitBtn) {
            console.error("Submit button not found!");
            return;
        }

        // Add click event listener
        submitBtn.addEventListener('click', function() {
            console.log("Send button clicked");
            
            // Get form elements
            const form = document.getElementById('contactForm');
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log("Form values:", { name, email, message });

            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Show loading state
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            console.log("Attempting to send email...");

            // Send email using EmailJS
            emailjs.send("service_975jkds", "template_7ytvd29", {
                from_name: name,
                from_email: email,
                message: message,
                to_name: "Edwin Joseph",
            })
            .then(function(response) {
                console.log("Email sent successfully:", response);
                // Show success message
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
                submitBtn.style.backgroundColor = '#4CAF50';
                
                // Reset form
                form.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            })
            .catch(function(error) {
                console.error("Error sending email:", error);
                // Show error message
                submitBtn.innerHTML = '<i class="fas fa-times"></i> Failed to Send';
                submitBtn.style.backgroundColor = '#f44336';
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            });
        });
    });
})(); 