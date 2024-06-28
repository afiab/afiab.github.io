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
    link.href = item.link;

    const img = document.createElement('img');
    img.src = item.url;
    img.alt = '';

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = item.text + ' \u2197';

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
