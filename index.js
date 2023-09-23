let btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("mouseover", (event) => {
  let x = event.pageX - btn.offsetLeft;
  console.log(x);
  let y = event.pageY - btn.offsetTop;
  console.log(y);

  btn.style.setProperty("--x", x + "px");
  btn.style.setProperty("--y", y + "px");
});
