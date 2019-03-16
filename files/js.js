var hidden = false;

function outputName() {
  // show the value of an element
  var x, name, a, b, answer;
  x = document.getElementById("form1");
  y = x.elements["name"].value;

  document.getElementById("demo").innerHTML = "Welcome " + y;

  //hide element

  var z = document.getElementById("form1");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}

const inpKey = "name";
const input1 = document.getElementById("input1");
const input1 = document.getElementById("btn1");

// local storage

/*

localStorage.setItem("text", "lets do that");

let val = localStorage.getItem("text");
console.log(val);

let key = "vamos_ya";
localStorage.setItem(key, 239);

let options = {
  name: "natoion",
  profession: "teacher",
  sports: ["soccer", "basket", "baseball"]
};

let str = JSON.stringify(options);

localStorage.setItem("arr2", str);

let original = localStorage.getItem("arr2");

console.log(original);
let obj = JSON.parse(original);
console.log(obj);

*/
