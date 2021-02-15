document.querySelectorAll('button').forEach((item) => {
  item.addEventListener('click', handleClick);
});

function handleClick() {
  var tom1 = new Audio('./sounds/tom-1.mp3');
  tom1.play();
}
