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
  let array = document.cookie.split("; ")
  //Pull all of our cookies
  //push those values into the array
  //return array
  return array;
  
}

let getCookieValue = (arg1) => {
  let array = getCookie()
  let length = arg1.length
  let value = null;
      array.forEach(element => {
        let name = element.slice(0, length)
          if(name === arg1){
            value = element.slice(length + 1)
          }
    });

    return value
}

let deleteCookie = (name) => {
  
}



setCookie("Zane", "ginger molasses");
setCookie("Hans" , "choclate");

console.log(getCookie())
console.log(getCookieValue("Zane"));