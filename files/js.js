function outputName() {
  var x, name, a, b, answer;
  x = document.getElementById("form1");
  y = x.elements["name"].value;

  document.write("hello" + y + "<br />");
  document.write(y + "you are back");
}

// local storage

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
