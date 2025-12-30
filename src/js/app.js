const womenMegaBtn = document.querySelector("#mega-women");
const manMegaBtn = document.querySelector("#mega-menu-man-btn");
const megaMenu = document.querySelector("#mega-menu-women");
const megaMenuMan = document.querySelector("#mega-menu-man");
const arr =
  "border-b-1 border-b-indigo-600 text-indigo-600 transition-all".split(" ");

womenMegaBtn.addEventListener("click", () => {
  if (womenMegaBtn.ariaChecked === "false") {
    womenMegaBtn.ariaChecked = "true";
    console.log("first");
    womenMegaBtn.classList.add(...arr);
    manMegaBtn.ariaChecked = "false";
    manMegaBtn.classList.remove(...arr);
  } else {
    womenMegaBtn.ariaChecked = "false";
    womenMegaBtn.classList.remove(...arr);
  }
  // show
  if (megaMenu.dataset.id === "0") {
    setTimeout(() => {
      megaMenuMan.classList.replace("flex", "hidden");
    }, 10);
    megaMenuMan.dataset.id = 0;
    megaMenu.dataset.id = 1;
    megaMenu.classList.replace("hidden", "flex");
    setTimeout(() => {
      megaMenu.classList.replace("opacity-20", "opacity-100");
    }, 15);

    return;
  }
  // hide
  megaMenu.classList.replace("opacity-100", "opacity-20");
  setTimeout(() => {
    megaMenu.classList.replace("flex", "hidden");
  }, 70);

  megaMenu.dataset.id = 0;
});

manMegaBtn.addEventListener("click", () => {
  // show
  if (manMegaBtn.ariaChecked === "false") {
    manMegaBtn.ariaChecked = "true";
    console.log("first");
    manMegaBtn.classList.add(...arr);
    womenMegaBtn.ariaChecked = "false";
    womenMegaBtn.classList.remove(...arr);
  } else {
    manMegaBtn.ariaChecked = "false";
    manMegaBtn.classList.remove(...arr);
  }
  if (megaMenuMan.dataset.id === "0") {
    setTimeout(() => {
      megaMenu.classList.replace("flex", "hidden");
    }, 10);
    megaMenu.dataset.id = 0;
    megaMenuMan.dataset.id = 1;
    megaMenuMan.classList.replace("hidden", "flex");
    setTimeout(() => {
      megaMenuMan.classList.replace("opacity-20", "opacity-100");
    }, 15);

    return;
  }
  // hide
  megaMenuMan.classList.replace("opacity-100", "opacity-20");
  setTimeout(() => {
    megaMenuMan.classList.replace("flex", "hidden");
  }, 70);

  megaMenuMan.dataset.id = 0;
});
