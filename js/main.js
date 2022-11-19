// Disables scrolling
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  
  // Enables scrolling
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  
  //disableScroll()
  
  const logo = document.querySelectorAll("path");
  
  for(let i = 0; i<logo.length; i++) {
    logo[i].style.strokeDasharray = logo[i].getTotalLength();
    logo[i].style.strokeDashoffset = logo[i].getTotalLength();
    logo[i].style.animationPlayState.display = "block";
    logo[i].style.animationPlayState = "running";
  }
  