// Simple Project Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    const codeButtons = document.querySelectorAll('.btn.outline.small[data-github]');
    
    codeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const githubLink = this.getAttribute('data-github');
            
            if (githubLink) {
                window.open(githubLink, '_blank');
            } else {
                alert('GitHub repository will be added soon! 📁');
            }
        });
    });
    
    // Handle Live buttons
    const liveButtons = document.querySelectorAll('.btn.small:not(.outline)');
    
    liveButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the project title
            const card = this.closest('.card');
            const projectTitle = card.querySelector('h3').textContent.trim();
            
            alert(`Live demo for "${projectTitle}" coming soon! 🔜`);
        });
    });
});