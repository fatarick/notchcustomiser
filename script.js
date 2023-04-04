const heightSlider = document.getElementById("height-slider");
const lengthSlider = document.getElementById("length-slider");
const cornersSlider = document.getElementById("corners-slider");
const positionSlider = document.getElementById("position-slider");
const notch = document.querySelector(".notch");
const iphone = document.querySelector(".iphone");

const MAX_CORNER_ROUNDING = 30; // maximum corner rounding for iPhone

heightSlider.addEventListener("input", () => {
  notch.style.height = `${heightSlider.value}%`;
});

lengthSlider.addEventListener("input", () => {
  notch.style.width = `${lengthSlider.value}%`;
});

cornersSlider.addEventListener("input", () => {
  const cornersRounding = cornersSlider.value;
  notch.style.borderRadius = `0 0 ${cornersRounding}px ${cornersRounding}px`;
});

positionSlider.addEventListener("input", () => {
  const position = positionSlider.value;
  notch.style.top = `${position - 5}%`;
});

// set the maximum corner rounding for the iPhone
iphone.style.borderRadius = `${MAX_CORNER_ROUNDING}px`;

// update the notch corner rounding when the corners slider is changed
cornersSlider.addEventListener("input", () => {
  const cornersRounding = cornersSlider.value;
  notch.style.borderRadius = `0 0 ${cornersRounding}px ${cornersRounding}px`;
});
