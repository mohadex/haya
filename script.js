const filterButtons = document.querySelectorAll(".filter-btn");
const mediaItems = document.querySelectorAll(".media-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    mediaItems.forEach((item) => {
      const type = item.getAttribute("data-type");

      if (filter === "all" || filter === type) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const openImageButtons = document.querySelectorAll(".open-image");
const closeLightbox = document.getElementById("closeLightbox");

openImageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const src = button.getAttribute("data-src");
    lightboxImage.src = src;
    lightbox.style.display = "flex";
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxImage.src = "";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxImage.src = "";
  }
});