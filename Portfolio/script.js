const text = "I build scalable applications and solve algorithmic problems.";
let i = 0;

function typing(){
    if(i < text.length){
        document.querySelector(".hero-content p").textContent += text.charAt(i);
        i++;
        setTimeout(typing, 30);
    }
}

