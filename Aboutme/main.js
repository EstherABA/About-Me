function handleClick(id) {
    console.log('Element Clicked');
    document.getElementById(id).style.color="red";
    
}

function delayHandleClick (id) {
    setTimeout {function handleClick(id) , 3000};
}



//
const favoriteFood = ["Thai food", "Salad", "Sushi", "Pizza"];
let makeList = `<ul>`;
for (let index = 0; index < favoriteFood.length; index++) {
  const element = favoriteFood[index];

  makeList += `<li>${element}</li>`;

}
makeList += `</ul>`;
console.log(makeList);
document.getElementById("all-Food").outerHTML = makeList;

