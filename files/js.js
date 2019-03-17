var hidden = false;

const outputName = () => {
  // show the value of an element
  var x, name, a, b, answer;
  x = document.getElementById("form1");
  y = x.elements["name"].value;

  //hide element

  var z = document.getElementById("form1");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  //opacity

  if ((document.getElementById("demo").style.opacity = 1)) {
    document.getElementById("demo").style.opacity = 0;
  }

  //send values to localStorage

  const input2 = document.getElementById("input2");
  const value = input2.value;

  if (!localStorage.getItem("name")) {
    localStorage.setItem("name", "[]");
  }

  const list = JSON.parse(localStorage.getItem("name"));
  let exist = false;
  for (var i = 0; i < list.length; i++)
    if (list[i] == value) {
      exist = true;
      break;
    }
  if (!exist) {
    list.push(value);
    document.getElementById("demo").innerHTML = "Welcome " + value;
  } else {
    document.getElementById("demo").innerHTML = "Welcome back " + value;
  }
  localStorage.setItem("name", JSON.stringify(list));

  /* 
  console.log(value);
  let itemsArray = localStorage.getItem("name")
    ? JSON.parse(localStorage.getItem("name"))
    : [];

  //if (value) {

  itemsArray.push(value);
  localStorage.setItem("name", JSON.stringify(itemsArray));

  document.getElementById("demo").innerHTML = "Welcome " + y;
  */
  // }
};

/*
const welcom = () => {
  const input2 = document.getElementById("input2");
  const value = input2.value;

  if (!localStorage.getItem("name")) {
    localStorage.setItem("name", "[]");
  }

  const list = JSON.parse(localStorage.getItem("name"));
  let exist = false;
  for (var i = 0; i < list.length; i++)
    if (list[i] == value) {
      exist = true;
      break;
    }
  if (!exist) {
    list.push(value);
    alert("created");
  } else {
    alert("exist");
  }
  localStorage.setItem("name", JSON.stringify(list));
};

//hide button when clicked
//this.style.visibility='hidden';[welcom()]

/*
window.onload = () => {
  if (document.cookie.length != 0) {
    const nameValueArray = document.cookie.split("=");
    document.bgColor = nameValueArray[1];
    document.getElementById("add1Theme").value = nameValueArray[1];
  }
};

const setColorCookie = () => {
  document.cookie = "name=" + document.getElementById("input2").value;

  const nameValueArray = document.cookie.split("=");
  const customObject = (JSON.parse = nameValueArray[1]);

  document.getElementById("p1").value = customObject.name;
};

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
