const btn = document.getElementById('helloBtn');
const msg = document.getElementById('helloMsg');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

btn?.addEventListener('click', () => {
  const time = new Date().toLocaleTimeString();
  msg.textContent = `Hello from your static site! (${time})`;
});
``
