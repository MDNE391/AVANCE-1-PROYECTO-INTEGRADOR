$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('nav a').on('click', function(e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800);
      }
    });
  
    // Form submission using AJAX
    $('#submit-btn').on('click', function() {
      const name = $('#name').val();
      const email = $('#email').val();
      const message = $('#message').val();
  
      // Perform validation and AJAX submission here
      // For simplicity, it's not implemented in this example
    });
  });
  