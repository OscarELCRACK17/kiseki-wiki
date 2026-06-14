const titles = {
  fc: "Trails in the Sky FC",
  sc: "Trails in the Sky SC",
  third: "Trails in the Sky 3rd",
  zero: "Trails from Zero",
  cs3: "Trails of Cold Steel III",
  cs4: "Trails of Cold Steel IV",
  reverie: "Trails into Reverie"
};

function showIntro(id, event) {
  document.querySelectorAll('.intro-block')
    .forEach(el => el.classList.remove('active'));

  const target = document.getElementById('intro-' + id);
  if (target) target.classList.add('active');

  document.querySelectorAll('.intro-buttons button')
    .forEach(btn => btn.classList.remove('active'));

  if (event && event.target) {
    event.target.classList.add('active');
  }

  const title = document.getElementById("intro-title");
  if (title && titles[id]) {
    title.textContent = titles[id];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const firstBlock = document.querySelector('.intro-block');
  const firstBtn = document.querySelector('.intro-buttons button');

  if (firstBlock) firstBlock.classList.add('active');
  if (firstBtn) firstBtn.classList.add('active');

  window.showIntro = showIntro;
});