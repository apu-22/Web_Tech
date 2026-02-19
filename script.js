const text = "I'm trying to build scalable applications and solve algorithmic problems.";
let i = 0;

function typing() {
    if(i < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(i);
        i++;
        setTimeout(typing, 30);
    }
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', function() {
    typing();
});