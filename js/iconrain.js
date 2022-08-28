function CreateIcon() {
  const box = document.createElement('img');

  // src img https://www.flaticon.com/free-icon/trophy_3112946
  box.setAttribute('src', 'img/trophy.svg');
  box.style.left = Math.random() * 100 + 'vw';
  box.style.animationDuration = Math.random() * 2 + 3 + 's';

  document.body.appendChild(box);

  setTimeout(() => {
    box.remove();
  }, 5000);
}
