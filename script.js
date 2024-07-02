// Function to fetch JSON data
async function fetchImages(filepath) {
    try {
        const response = await fetch(filepath);
        const imagesData = await response.json();
        return imagesData;
    } catch (error) {
        console.error('Error fetching images data:', error);
        return [];
    }
}

// Function to create image elements with overlay text and links
function createImageElement(item, index) {
    const div = document.createElement('div');
    div.classList.add('item');
    div.style.setProperty('--position', index + 1);

    const link = document.createElement('a');
    link.target = "_blank"; //open link in new tab
    link.href = item.link;
    link.rel = "noopener noreferrer";

    const img = document.createElement('img');
    img.src = item.url;
    img.alt = '';

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const text = document.createElement('div');
    text.classList.add('text');
    if (window.innerWidth > 768) {
        text.textContent = item.text + ' \u2197';
    } else {
        text.textContent = item.text;
    }

    overlay.appendChild(text);
    link.appendChild(img);
    link.appendChild(overlay);
    div.appendChild(link);

    return div;
}

// Function to populate sliders
async function populateSliders() {
    const personalProjsData = await fetchImages('./jsonfiles/personalProjs.json');
    const sliderproj = document.getElementById('sliderproj');

    personalProjsData.forEach((item, index) => {
        const div = createImageElement(item, index);
        sliderproj.appendChild(div);
    });

    const hackProjsData = await fetchImages('./jsonfiles/hackProjs.json');
    const sliderhack = document.getElementById('sliderhack');

    hackProjsData.forEach((item, index) => {
        const div = createImageElement(item, index);
        sliderhack.appendChild(div);
    });
}

// Call populateSliders function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', populateSliders);

// Home section scroll animation
// Code mostly from this tutorial: https://youtu.be/T33NN_pPeNI
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
//end of code from https://youtu.be/T33NN_pPeNI

// typewriter effect
const texts = ["Afia Bidica", "a Python enthusiast", "a Software Engineering student", "a Hackathon enjoyer", "a woman of color in computing"];
let currentText = 0;
let charIndex = 0;
const typingSpeed = 75;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;

const typewriterElement = document.getElementById("typewriter");

function type() {
    if (charIndex < texts[currentText].length) {
        typewriterElement.textContent += texts[currentText].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = texts[currentText].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentText = (currentText + 1) % texts.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, typingSpeed);
});

// end typewriter effect