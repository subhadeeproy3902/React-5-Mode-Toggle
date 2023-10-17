import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  function onWindowMatch(){
    if(localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)){
      element.classList.add("dark");
    }else{
      element.classList.remove("dark");
    }
  }

  useEffect(() => {
    switch(theme){
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if(!("theme" in localStorage)){
      element.classList.add("dark");
    }else{
      element.classList.remove("dark");
    }
  });

  return (
    <>
      <section className="min-h-screen pt-8 dark:text-gray-100 flex flex-col justify-center m-auto dark:bg-slate-900 duration-100">
        <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
          {options?.map((opt) => (
            <button key={opt.text} className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"}`} onClick={() => setTheme(opt.text)}>
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
        <div className="max-w-3xl mx-auto px-5 flex flex-col justify-center">
          <div className="text-center">
            <h5 className="mt-5 text-xl pb-9">
              I was trying Light, Dark, System Mode Toggle
            </h5>
          </div>
          <div class="w-full max-w-[300px] p-8 rounded-xl text-gray-800 dark:text-gray-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-sky-500/50 motion-safe:transition-all motion-safe:duration-700">
        <figure class="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-sky-500 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-sky-500 before:-z-[1]
                       group-hover:before:scale-[2.5] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
                >
            <img 
                 class="rounded-full block max-w-full bg-sky-500 object-cover z-10 relative"
                 src="https://i.postimg.cc/QCYhDz0d/Subhadeep-Roy.jpg"
                 alt="Avatar"/>
        </figure>
        <header class="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
            <h3 class="font-semibold text-2xl text-center text-sky-500 mt-6 group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">Subhadeep Roy</h3>
            <p class="text-center group-hover:text-gray-50 dark:group-hover:text-gray-800 relative">React. Js Beginner</p>
        </header>

        <ul class="flex justify-center space-x-4 mt-16 text-sky-500
                   relative">
            <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <a href="https://github.com/subhadeeproy3902" aria-label="Visit me on LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="h-6 w-6">
                    <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
                </a>
            </li>
            <li class="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <a href="https://www.instagram.com/mvp_subha/" class="" aria-label="Visit me on Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6 w-6">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
                </a>
            </li>
        </ul>
    </div>
        </div>
      </section>
    </>
  );
}

export default App;
