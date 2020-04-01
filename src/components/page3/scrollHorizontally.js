let slideCountFromStart = 0;
let timeStamp = 0;

function scrollHorizontally(e) {
  e.preventDefault();

  if (timeStamp + 200 > e.timeStamp) {
    timeStamp = e.timeStamp;
    return;
  }
  timeStamp = e.timeStamp;

  const isUserScrollDown = e.wheelDelta < 0;
  const slider = this.slider;
  const mouseStyle = function(op, sc) {
    this.opacity = op;
    this.transform = "scale(" + sc + ")";
  }.bind(this.mouse.style);

  if (isUserScrollDown) {
    slider.scrollBy(slider.scrollHeight, 0);
    if (slideCountFromStart === 4) {
      window.scrollBy(0, 1);
    } else {
      slideCountFromStart === 0 && mouseStyle(0, 0.5);
      ++slideCountFromStart;
    }
  } else {
    slider.scrollBy(-slider.scrollHeight, 0);
    if (slideCountFromStart === 0) {
      window.scrollBy(0, -1);
    } else {
      slideCountFromStart === 1 && setTimeout(() => mouseStyle(1, 1), 200);
      --slideCountFromStart;
    }
  }
}

export default scrollHorizontally;
