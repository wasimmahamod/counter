const h1 = document.querySelector("h1");
const taufik = document.querySelector("taufik");
const wasim = document.querySelector("wasim");

let count = 0;
let stop = setInterval(() => {
  h1.innerHTML = count++;
  if (count == h1.dataset.number) {
    clearInterval(stop);
  }
}, 1000);
