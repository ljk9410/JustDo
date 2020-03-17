const colorChange = document.querySelector(".js-clock"),
      colorChanged = colorChange.querySelector("h1");
const CLICKED_CLASS = "clicked";

/* toogle 내부에서 일어나는 일
const hasClass = title.classList.contains(CLICKED_CLASS);
if(hasClass){
  title.classList.remove(CLICKED_CLASS);
} else {
  title.classList.add(CLICKED_CLASS);
}
*/
function handleClick(){
  colorChanged.classList.toggle(CLICKED_CLASS);
}

function init(){
  colorChanged.addEventListener("click",handleClick);
}

init();
