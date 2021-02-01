// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("This script loads when the DOM is loaded")
  
// });



// window.onload = () => {
//   console.log("This script loads when all the resources and DOM are ready")

//   console.log(document.getElementById('my-body').id);

// }

// console.log("it worked")

// document.cookie = "monster_name=cookie";
// document.cookie = "favorite_cookie=snickerdoodle";

// // window.alert(document.cookie);
// // alert("COOOKIEEEE");

let setCookie = (name, value) => {
  document.cookie = `${name} = ${value}`;
};

let getCookie = () => {
  //Set up an array
  let array = [];
  //Pull all of our cookies
  //push those values into the array
  //return array
  array.push(document.cookie)
  return array;
  
}

setCookie("Hans" , "choclate");
setCookie("Zane", "ginger molasses");

console.log(getCookie());