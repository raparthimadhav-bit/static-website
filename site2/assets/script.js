// year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// small interactive demo
const btn = document.getElementById('rollBtn');
const out = document.getElementById('rollOutput');

btn?.addEventListener('click', (e) => {
  e.preventDefault();
  const n = Math.floor(Math.random() * 100) + 1;
  out.textContent = `You rolled: ${n}  ( ${new Date().toLocaleTimeString()} )`;
});
