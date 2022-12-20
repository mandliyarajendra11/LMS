var img = document.getElementById("img");
var text = document.getElementById("text");
var names = document.getElementById("name");

const arr = [
  {
    id: 1,
    name: "jake",
    img: "/pic-1.png",
    text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magnam debitis, maiores quibusdam quidem animi maxime tempore? Quisquamlaborum cupiditate facere sapiente.",
  },
  {
    id: 2,
    name: "hayato",
    img: "/pic-2.png",
    text:" hayato is pro "
},{
    id: 3,
    name: "adam",
    img: "/pic-3.png",
    text:"Lorem, ipsum dolor sit amet consur libero dolore maiores atque quidem iste voluptate, iusto aliquid minima cupiditate."
},{
    id: 4,
    name: "lili",
    img: "/pic-4.png",
    text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magnam debitis, maiores quibusdam quidem animi maxime tempore? Quisquamlaborum cupiditate facere sapiente.",
  },
];
var count = 0;
var aage = document.getElementById("aage");
var picche = document.getElementById("picche");


window.addEventListener('DOMContentLoaded' ,()=>{
    showepr(count);

});

aage.addEventListener("click", () => {
    if (count<arr.length-1) {
    
    showepr(++count);
    }
});

picche.addEventListener("click", () => {
    if (count>0) {

    showepr(--count);
    }
    
});
function showepr(person) {
    
    const item=  arr[person];
    img.src = item.img;
    names.innerText = item.name;
    text.innerText = item.text;
} 
