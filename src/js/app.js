const womenMegaBtn = document.querySelector("#mega-women");
const megaMenu = document.querySelector("#mega-menu-women");
womenMegaBtn.addEventListener("click", () => {
  // show
  if (megaMenu.dataset.id === "0") {
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
