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

// Function to populate sliders
async function populateSliders() {
    const imagesData = await fetchImages('./jsonfiles/personalProjs.json');
    const slider1 = document.getElementById('sliderproj');

    imagesData.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.style.setProperty('--position', index + 1);

        const img = document.createElement('img');
        img.src = item.url;
        img.alt = '';

        const link = document.createElement('a');
        link.href = item.link;
        link.appendChild(img);
        
        div.appendChild(link);

        slider1.appendChild(div);
    });
}

// Call populateSliders function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', populateSliders);
