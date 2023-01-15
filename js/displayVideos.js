// Display videos function
export const displayVideos = function (section, api) {
    api.forEach(function (item) {
      const { title, url, thumbnail, lang } = item;
  
      section.innerHTML += `
          <div id="video" class="relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white">
              <a class="w-full inline-flex flex-col justify-center items-center" id="video-link" href="${url}">
                  <picture class="w-full h-full rounded-t-xl bg-slate-200 relative">
                      <source srcset="${thumbnail}" type="image/webp">
                      <img class="w-full min-h-[180px] rounded-t-xl" id="video-img" src="${thumbnail}" alt="${title}" width="395" height="224">
                      <button id="video-btn" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
                      <i class="text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500"></i>
                      </button>
                  </picture>
              </a>
              <h3 id="video-title" class="bg-transparent text-lg text-center text-black font-semibold mt-1">${title}</h3>
              <span class="hidden" id="video-lang">${lang}</span>
          </div>
          `;
    });
  };
  
