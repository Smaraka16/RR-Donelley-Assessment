let leftButton = document.getElementById("left__button");
let rightButton = document.getElementById("right__button");
let index = -1;

//right button controller
rightButton.addEventListener("click", function () {
  index += 1;
  slides()
   
});

//left button controller
leftButton.addEventListener("click", function () {
    index -= 1;
    slides()
     
});

//slider function
const slides = ()=>{
    let slider = document.getElementsByClassName("slider__items");
  if (index > slider.length - 1) {
    rightButton.disabled = true;
  }else{
    rightButton.disabled = false; 
  }
  if(index<slider.length-4){
      leftButton.disabled=true
  }
  else{
    leftButton.disabled = false; 
  }
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.remove("active");
    console.log(slider[i]);
  }
  slider[index].classList.add("active");

  console.log(slider);
}
 