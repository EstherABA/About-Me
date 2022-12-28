// function handleClick(id) {
//     console.log('Element Clicked');
//     document.getElementById(id).style.color="red";
    
// }

// function delayHandleClick (id) {
//     setTimeout {function handleClick(id) , 3000};
// }



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

// const movies = ["Django", "Seven", "Batman"];
// let makeList = `<ul>`;
// for (let index = 0; index < movies.length; index++) {
//   const element = movies[index];
//   // element = "Django" (index = 0)
//   // element = "Seven" (index = 1)
//   makeList += `<li>${element}</li>`;
//   //makeList = <ul><li>Django</li> (index = 0)
//   //makeList = <ul><li>Django</li><li>Seven</li> (index = 1)
//   // ...
// }
// makeList += `</ul>`;
// console.log(makeList);
// //output: "<ul><li>Django</li><li>Seven</li><li>Batman</li></ul>"
// document.getElementById("my-id").outerHTML = makeList;
// // document.getElementById("my-id").outerHTML = "<p>Hello</p><p>Hello2</p>";