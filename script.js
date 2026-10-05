const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".desktop-nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const open = menuBtn.classList.toggle("open");

    nav.classList.toggle("open");

    menuBtn.setAttribute(
      "aria-expanded",
      String(open)
    );
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menuBtn.classList.remove("open");
      nav.classList.remove("open");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });
}

const progress = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  const max =
    document.documentElement.scrollHeight -
    window.innerHeight;

  progress.style.width =
    `${Math.min(
      100,
      Math.max(
        0,
        (window.scrollY / max) * 100
      )
    )}%`;
}, {
  passive: true
});
