





// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get target section ID
      const targetSection = document.getElementById(targetId); // Find the target section
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
      }
    });
  });
  
  // Animate sections on scroll
  const sections = document.querySelectorAll('section'); // Select all sections
  
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add 'visible' class when section is in view
        }
      });
    },
    { threshold: 0.3 } // Trigger animation when 30% of the section is visible
  );
  
  sections.forEach(section => {
    observer.observe(section); // Observe each section
  });
  
  // Form submission handling
  const contactForm = document.querySelector('.contact form'); // Select the contact form
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission
      alert('Thank you for reaching out! I will get back to you soon.'); // Show confirmation message
      contactForm.reset(); // Reset the form
    });
  }
  
  // Back to Top Button
  const backToTopButton = document.querySelector('.back-to-top'); // Select the "Back to Top" button
  
  if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth' // Smooth scroll behavior
      });
    });
  
    // Show/hide the "Back to Top" button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopButton.style.display = 'block'; // Show button when scrolled down
      } else {
        backToTopButton.style.display = 'none'; // Hide button when at the top
      }
    });
  }
  
  function toggleProject(projectId) {
    const project = document.getElementById(projectId);
    const projectCard = project.parentElement;
    
    // Close all other open projects
    document.querySelectorAll('.project-card').forEach(card => {
      if (card !== projectCard && card.classList.contains('active')) {
        card.classList.remove('active');
      }
    });
    
    // Toggle the clicked project
    projectCard.classList.toggle('active');
  }
  
  
  
  
  
  
  
  
  