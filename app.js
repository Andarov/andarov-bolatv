import ertaklar from "./ertak.js";
import songs from "./songs.js";
import badantarbiya from "./badantarbiya.js";
import mathVideos from "./math.js";
import english from "./english.js";


const elVideos = document.querySelector('#videos')


const displayVideos = function(api){
    api.forEach(function (item) {
        const { title, url, thumbnail } = item;
        
        elVideos.innerHTML += `
        <div id="video" class="relative group">
        <a id="video-link" href="${url}">
        <picture>
        <source srcset="${thumbnail}" type="image/webp">
        <img id="video-img" src="${thumbnail}" alt="${title}">
        </picture>
        </a>
        <h3 id="video-title" class="text-center text-xl text-br-darkBlue font-semibold mt-2">${title}</h3>
        <button id="video-btn" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
        <i class="text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500"></i>
        </button>
        </div>
        `;
    });
}

displayVideos(ertaklar)

function findVideos() {
    let videos = document.querySelectorAll('#video');
    
    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('#video-link');
    let media = video.querySelector('#video-img');
    let button = video.querySelector('#video-btn');
    
    let id = parseMediaURL(media);
    
    video.addEventListener('click', () => {
        let iframe = createIframe(id);
        
        link.remove();
        button.remove();
        video.prepend(iframe);
    });
    
    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);
    
    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');
    
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('w-full')
    iframe.style.height = '222px'
    
    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';
    
    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

// Nomi bilan qidiruv
const elForm = document.querySelector('#form');
// Funksiya 
const searchName = function() {
    // Hamma videono olish
    let videos = document.querySelectorAll('#video');
    // Video nomini olish
    videos.forEach(function(video){
        const videoTitle = video.querySelectorAll('#video-title')
        
        // Agar input valuesi video nomiga teng kelsa uni chiqarish qolganini ochirish
        elForm["name-input"].addEventListener("input", function () {
            const inputNameValue = form["name-input"].value.toLowerCase();
            videoTitle.forEach(function (title) {
                console.log(title);
                if (title.textContent.toLowerCase().includes(inputNameValue)) {
                    title.parentElement.classList.remove("hidden");
                } else {
                    title.parentElement.classList.add("hidden");
                }
            });
        });
        
    });
}
searchName()