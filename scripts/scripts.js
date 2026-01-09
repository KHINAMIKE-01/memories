console.log("Js is connected");
// adding line transiformation underline

const heading = document.getElementById("gallaryHeading");
const headingLine = document.getElementById("gallaryUnderline");
const imageContainers = document.querySelectorAll(".imageContainer span");

heading.addEventListener("mouseover", () => {
    headingLine.style.transform = "scaleX(6)";
});

heading.addEventListener("mouseout", () => {
    headingLine.style.transform = "scaleX(1)";
});  

// image overlay 
 imageContainers.forEach(span => {

        span.style.position = "relative";

        const div = document.createElement('div');

        div.style.position = 'absolute'
        div.style.top = '0'
        div.style.left = '0'
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.background = "linear-gradient(180deg, transparent, rgba(102, 89, 89, 0.4)";
        div.style.backdropFilter = "blur(1px)";
        div.classList.add("overlay");
        div.style.zIndex = '5';
        span.style.transition = 'transform .3s ease-in';
        div.style.transition = 'opacity .4s ease-in';
        
        span.appendChild(div);

        span.addEventListener("mouseover", () => {
            div.style.opacity = '0';
            span.style.transform = 'scale(1.05)';
        });

        span.addEventListener("mouseout", () => {
            div.style.opacity = '1';
            span.style.transform = 'scale(1)';            
        });
    })




