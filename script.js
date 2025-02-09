document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('#tabs a');
    
    // Select all sections
    const sections = document.querySelectorAll('section');
    
    // Hide all sections initially
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the "About Me" section by default
    document.querySelector('#aboutMe').style.display = 'block';
    
    // Event listener for tab clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Remove active class from all tabs
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Show the clicked section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.querySelector(`#${targetId}`);
            targetSection.style.display = 'block';
            
            // Add active class to clicked tab
            link.classList.add('active');
        });
    });

    // Contact button animation (for example)
    const contactButton = document.querySelector('#contactButton');
    contactButton.addEventListener('mouseover', () => {
        contactButton.style.transform = 'scale(1.1)';
    });

    contactButton.addEventListener('mouseout', () => {
        contactButton.style.transform = 'scale(1)';
    });
});
