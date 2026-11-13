"use strict";
document.querySelectorAll(".opening-player").forEach((container) => {
  const button = container.querySelector("button");
  button.addEventListener("click", () => {
    const id = container.dataset.video;
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
    const player = document.createElement("iframe");
    player.src = "https://www.youtube-nocookie.com/embed/" + id + "?rel=0";
    player.title = container.dataset.title;
    player.allow = "encrypted-media; picture-in-picture; fullscreen";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    container.replaceChildren(player);
    player.focus();
  }, { once: true });
});
