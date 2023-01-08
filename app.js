// Import files
import ertaklar from "./ertak.js";
import cartoon from "./cartoon.js";
import songs from "./songs.js";
import badantarbiya from "./badantarbiya.js";
import mathVideos from "./math.js";
import englishVid from "./english.js";
import rasm from "./rasm.js";

// Display videos function
const displayVideos = function (section, api) {
  api.forEach(function (item) {
    const { title, url, thumbnail, lang } = item;

    section.innerHTML += `
        <div id="video" class="relative group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-xl hover:bg-white">
            <a class="w-full inline-flex flex-col justify-center items-center" id="video-link" href="${url}">
                <picture class="w-full rounded-t-xl bg-slate-200 relative">
                    <source srcset="${thumbnail}" type="image/webp">
                    <img class="w-full rounded-t-xl" id="video-img" src="${thumbnail}" alt="${title}" width="395" height="224">
                    <button id="video-btn" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
                    <i class="text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500"></i>
                    </button>
                </picture>
            </a>
            <h3 id="video-title" class="bg-transparent text-center text-xl text-[#0b4002] font-semibold mt-1">${title}</h3>
            <span class="hidden" id="video-lang">${lang}</span>
        </div>
        `;
  });
};

// Display ertak videos
const uzbTale = document.querySelector("#uzb-tale");
const worldTale = document.querySelector("#world-tale");
if ((uzbTale, worldTale)) {
  displayVideos(uzbTale, ertaklar[0]);
  displayVideos(worldTale, ertaklar[1]);
}

// Display multic videos
const pomidor = document.querySelector("#pomidor");
const avto = document.querySelector("#avto");
const panda = document.querySelector("#panda");
const qunduz = document.querySelector("#qunduz");
const mittivoylar = document.querySelector("#mittivoylar");
const nussa = document.querySelector("#nussa");
const masha = document.querySelector("#masha");
const multic = document.querySelector("#multic");
if ((pomidor, avto, panda, qunduz, mittivoylar, nussa, masha, multic)) {
  displayVideos(pomidor, cartoon[0]);
  displayVideos(avto, cartoon[1]);
  displayVideos(panda, cartoon[2]);
  displayVideos(qunduz, cartoon[3]);
  displayVideos(mittivoylar, cartoon[4]);
  displayVideos(nussa, cartoon[5]);
  displayVideos(masha, cartoon[6]);
  displayVideos(multic, cartoon[7]);
}

// Display songs videos
const uzbSong = document.querySelector("#uzb-song");
const engSong = document.querySelector("#eng-song");

if ((uzbSong, engSong)) {
  displayVideos(uzbSong, songs[0]);
  displayVideos(engSong, songs[1]);
}

// Display math videos
const starterMath = document.querySelector("#starter-math");

if (starterMath) {
  displayVideos(starterMath, mathVideos[0]);
}

// Display english videos
const english = document.querySelector("#english");

if (english) {
  displayVideos(english, englishVid[0]);
}

// Display badantarbiya videos
const exersices = document.querySelector("#exersices");

if (exersices) {
  displayVideos(exersices, badantarbiya[0]);
}

// Display draw videos
const draw = document.querySelector("#draw");

if (draw) {
  displayVideos(draw, rasm[0]);
}





// Display videos mobile function with swipper
const displayVideosMob = function (swipper, api) {
    api.forEach(function (item) {
      const { title, url, thumbnail, lang } = item;
  
      swipper.innerHTML += `
          <div class="swiper-slide flex h-75 items-center justify-center relative">
              <div id="video" class="relative group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer bg-white/90">
                  <a class="w-full inline-flex flex-col justify-center items-center" id="video-link" href="${url}">
                      <picture class="w-full rounded-t-xl bg-slate-200 relative">
                      <source srcset="${thumbnail}" type="image/webp">
                          <img class="w-full rounded-t-xl" id="video-img" src="${thumbnail}" alt="${title}" width="395" height="224">
                          <button id="video-btn" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
                          <i class="text-5xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500"></i>
                          </button>
                      </picture>
                  </a>
                  <h3 id="video-title" class="bg-transparent text-center text-lg text-[#0b4002] font-semibold mt-1 sm:text-xl">${title}</h3>
                  <span class="hidden" id="video-lang">${lang}</span>
              </div>                  
          </div>
          `;
    });
  };
  
  // Display ertak videos
  const uzbTaleMob = document.querySelector("#uzb-tale-mob");
  const worldTaleMob = document.querySelector('#world-tale-mob');
  if (uzbTaleMob, worldTaleMob) {
    displayVideosMob(uzbTaleMob, ertaklar[0]);
    displayVideosMob(worldTaleMob, ertaklar[1])
  }
  
  // Display multic videos
  // const pomidor = document.querySelector('#pomidor');
  // const avto = document.querySelector('#avto');
  // const panda = document.querySelector('#panda');
  // const qunduz = document.querySelector('#qunduz');
  // const mittivoylar = document.querySelector('#mittivoylar');
  // const nussa = document.querySelector('#nussa');
  // const masha = document.querySelector('#masha');
  // const multic = document.querySelector('#multic');
  // if(pomidor, avto, panda, qunduz, mittivoylar, nussa, masha, multic){
  //     displayVideos(pomidor, cartoon[0])
  //     displayVideos(avto, cartoon[1])
  //     displayVideos(panda, cartoon[2])
  //     displayVideos(qunduz, cartoon[3])
  //     displayVideos(mittivoylar, cartoon[4])
  //     displayVideos(nussa, cartoon[5])
  //     displayVideos(masha, cartoon[6])
  //     displayVideos(multic, cartoon[7])
  // }
  
  // Display songs videos
  // const uzbSong = document.querySelector('#uzb-song')
  // const engSong = document.querySelector('#eng-song')
  
  // if(uzbSong, engSong){
  //     displayVideos(uzbSong, songs[0])
  //     displayVideos(engSong, songs[1])
  // }
  
  // Display math videos
  // const starterMath = document.querySelector('#starter-math')
  
  // if(starterMath){
  //     displayVideos(starterMath, mathVideos[0])
  // }
  
  // Display english videos
  // const english = document.querySelector('#english')
  
  // if(english){
  //     displayVideos(english, englishVid[0])
  // }
  
  // Display badantarbiya videos
  // const exersices = document.querySelector('#exersices')
  
  // if(exersices){
  //     displayVideos(exersices, badantarbiya[0])
  // }
  
  // Display draw videos
  // const draw = document.querySelector('#draw')
  
  // if(draw){
  //     displayVideos(draw, rasm[0])
  // }
  





let videos;
// Iframe
function findVideos() {
  videos = document.querySelectorAll("#video");

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

const modalWrapper = document.querySelector("#modal-wrapper");
const modal = document.querySelector("#modal");
const exitBtn = document.querySelector("#exit-btn");

function setupVideo(video) {
  let link = video.querySelector("#video-link");
  let media = video.querySelector("#video-img");
  let button = video.querySelector("#video-btn");

  let id = parseMediaURL(media);
  let iframe;
  video.addEventListener("click", () => {
    modalWrapper.classList.remove("hidden");
    modal.classList.remove("hidden");

    iframe = createIframe(id);

    modal.prepend(iframe);
    console.log(modal);
  });

  link.removeAttribute("href");
  video.classList.add("video--enabled");

  const addHidden = function () {
    modalWrapper.classList.add("hidden");
    modal.classList.add("hidden");
    iframe.remove();
  };

  exitBtn.addEventListener("click", addHidden);
  modalWrapper.addEventListener("click", addHidden);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      addHidden();
    }
  });
}

function parseMediaURL(media) {
  let regexp =
    /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match ? match[1] : match;
}

function createIframe(id) {
  let iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("w-full");
  iframe.classList.add("h-full");

  return iframe;
}

function generateURL(id) {
  let query = "?rel=0&showinfo=0&autoplay=1";

  return "https://www.youtube.com/embed/" + id + query;
}
findVideos();

// Nomi bilan qidiruv
const elForm = document.querySelector("#form");
// Funksiya
const searchName = function () {
  // Video nomini olish
  videos.forEach(function (video) {
    const videoTitle = video.querySelectorAll("#video-title");

    // Agar input valuesi video nomiga teng kelsa uni chiqarish qolganini ochirish
    elForm["name-input"].addEventListener("input", function () {
      const inputNameValue = form["name-input"].value.toLowerCase();
      videoTitle.forEach(function (title) {
        if (title.textContent.toLowerCase().includes(inputNameValue)) {
          title.parentElement.classList.remove("hidden");
        } else {
          title.parentElement.classList.add("hidden");
        }
      });
    });
  });
};
searchName();

const elMenu = document.getElementById("menu");
const elOpenMenu = document.getElementById("open-menu");
const elOverl = document.getElementById("overl");
elMenu.addEventListener("click", function () {
  console.log("salom");
  elOpenMenu.classList.remove("-translate-x-full");
  document.body.classList.add("overflow-hidden");
});

elOverl.addEventListener("click", function () {
  elOpenMenu.classList.add("-translate-x-full");
  document.body.classList.remove("overflow-hidden");
});

const elSelect = document.querySelector("#select");

elSelect.addEventListener("change", function () {
  videos.forEach(function (video) {
    const videoLang = video.querySelectorAll("#video-lang");

    videoLang.forEach(function (lang) {
      if (lang.textContent.includes(elSelect.value)) {
        lang.parentElement.classList.remove("hidden");
      } else {
        lang.parentElement.classList.add("hidden");
      }
    });
  });
});


const uzbErtak = new Swiper(".uzb-ertak", {
    grabCursor: true,
    slidesPerView: 1.2,
    spaceBetween: 10,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  const jahonErtak = new Swiper(".jahon-ertak", {
      grabCursor: true,
      slidesPerView: 1.2,
      spaceBetween: 10,
    
      navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
      },
    });
