chair = document.getElementById("chair"); 
btn = document.getElementById("btn"); 
main = document.getElementById("main");
chair.classList.add("animate");
main.style.background= "linear-gradient(196deg, #f1a9a9, #e66767)";
let color = {
  "one": {
   "back":"linear-gradient(196deg, #f1a9a9, #e66767)",
   "btn": "#944852",
   "chair":"images/chair1.png"
  },
  "two":{
   "back":"linear-gradient(196deg, #4c4c4c, #262626)",
   "btn": "#1a1a1a",
   "chair":"images/chair2.png"
  },
  "three":{
   "back":  "linear-gradient(196deg, #8a9fb2, #5f7991)",
   "btn": "#40566e",
   "chair":"images/chair3.png"
  },
  "four":{
   "back":"linear-gradient(196deg, #97afc3, #6789a7)",
   "btn":  "#5e89b2",
   "chair":"images/chair4.png"
   },
  "five":{
   "back":"linear-gradient(196deg, #afa6a0, #8c7f76)",
   "btn": " #8c7f76",
   "chair":"images/chair5.png"
  }
}
changeBtns = document.getElementsByClassName("color-col"); 
changeBtnArr = Array.from(changeBtns);
changeBtnArr.forEach(element => {
  element.addEventListener("click",(e)=>{
   console.log(color[e.target.id]);
   chair.classList.remove("animate");
   main.style.background = color[e.target.id].back;
   btn.style.background = color[e.target.id].btn;
  chair.src= color[e.target.id].chair
  chair.classList.add("animate");
  })
 
});
chair.addEventListener("animationend",()=>{
 chair.classList.remove("animate");
})