let index = 0;

function showSlide(n) {
  const slides = document.querySelector(".slides");
  const total = slides.children.length;

  index = (n + total) % total; // keeps index in range
  slides.style.transform = `translateX(-${index * 34}%)`;
}

document.querySelector(".next").onclick = () => showSlide(index + 1);
document.querySelector(".prev").onclick = () => showSlide(index - 1);

// Optional: Auto slide every 3 seconds
// setInterval(() => {
//   showSlide(index + 1);
// }, 3000);
