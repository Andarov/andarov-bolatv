// Import files
import ertaklar from "./ertak.js";
import cartoon from "./cartoon.js";
import songs from "./songs.js";
import badantarbiya from "./badantarbiya.js";
import mathVideos from "./math.js";
import englishVid from "./english.js";
 
// Display videos function
const displayVideos = function(section, api){
    api.forEach(function (item) {
        const { title, url, thumbnail } = item;
        
        section.innerHTML += `
        <div id="video" class="relative group max-w-md">
        <a class="w-full inline-flex flex-col justify-center items-center id="video-link" href="${url}">
        <picture class="w-full min-h-56 bg-slate-200">
        <source srcset="${thumbnail}" type="image/webp">
        <img class="w-full" id="video-img" src="${thumbnail}" alt="${title}">
        </picture>
        </a>
        <h3 id="video-title" class="bg-transparent text-center text-xl text-br-darkBlue font-semibold mt-2">${title}</h3>
        <button id="video-btn" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
        <i class="text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500"></i>
        </button>
        </div>
        `;
    });
}

// Display ertak videos
const uzbTale = document.querySelector('#uzb-tale');
const worldTale = document.querySelector('#world-tale');
if(uzbTale, worldTale){
    displayVideos(uzbTale, ertaklar[0])
    displayVideos(worldTale, ertaklar[1])
}

// Display multic videos
const pomidor = document.querySelector('#pomidor');
const avto = document.querySelector('#avto');
const panda = document.querySelector('#panda');
const qunduz = document.querySelector('#qunduz');
const mittivoylar = document.querySelector('#mittivoylar');
const dogs = document.querySelector('#dogs');
const masha = document.querySelector('#masha');
const multic = document.querySelector('#multic');
if(pomidor, avto, panda, qunduz, mittivoylar, dogs, masha, multic){
    displayVideos(pomidor, cartoon[0])
    displayVideos(avto, cartoon[1])
    displayVideos(panda, cartoon[2])
    displayVideos(qunduz, cartoon[3])
    displayVideos(mittivoylar, cartoon[4])
    displayVideos(dogs, cartoon[5])
    displayVideos(masha, cartoon[6])
    displayVideos(multic, cartoon[7])
}

// Display math videos
const starterMath = document.querySelector('#starter-math')
const mental = document.querySelector('#mental')

if(starterMath, mental){
    displayVideos(starterMath, mathVideos[0])
    displayVideos(mental, mathVideos[1])
}


// Display english videos
const english = document.querySelector('#english')
const lucking = document.querySelector('#lucking')

if(english, lucking){
    displayVideos(english, englishVid[0])
    displayVideos(lucking, englishVid[1])
}

// Display badantarbiya videos
const exersices = document.querySelector('#exersices')
const bardam = document.querySelector('#bardam')

if(exersices, bardam){
    displayVideos(exersices, badantarbiya[0])
    displayVideos(bardam, badantarbiya[1])
}















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