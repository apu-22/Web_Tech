
document.addEventListener('DOMContentLoaded', function() {
    // GitHub link
    document.querySelector('a[href="#"]').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://github.com/apu-22', '_blank');
    });
    
    // LinkedIn link
    document.querySelectorAll('a[href="#"]')[1].addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://linkedin.com/in/apu-rayhan', '_blank');
    });
    
    // Facebook link
    document.querySelectorAll('a[href="#"]')[2].addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://facebook.com/apu.rayhan.33234', '_blank');
    });
});