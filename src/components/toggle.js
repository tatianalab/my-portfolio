const toggles = document.querySelectorAll('.faq-toggle');
const togtitles = document.querySelectorAll('.faq-title');


toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});

togtitles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
