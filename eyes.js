/* obtain eyeball through the class name */

const ballLeft = document.getElementsByClassName('ball-left');
const ballRight = document.getElementsByClassName('ball-right');

/* on mouse move obtain co-ordinates and calculate boundaries of window and move the ball */

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  ballLeft[0].style.left = x;
  ballLeft[0].style.top = y;
  ballLeft[0].transform = 'translate(-' + x + ',-' + y + ')';
  ballRight[0].style.left = x;
  ballRight[0].style.top = y;
  ballRight[0].transform = 'translate(-' + x + ',-' + y + ')';
};