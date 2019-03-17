//let hidden = false;

const outputName = () => {
  // show the value of an element
  let x;
  x = document.getElementById("form1");
  y = x.elements["name"].value;

  //hide element

  var z = document.getElementById("form1");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  //opacity animation

  if ((document.getElementById("headerId").style.opacity = 1)) {
    document.getElementById("headerId").style.opacity = 0;
  }

  //send values to localStorage

  const input2 = document.getElementById("input2");
  const value = input2.value;

  if (!localStorage.getItem("name")) {
    localStorage.setItem("name", "[]");
  }

  const listNames = JSON.parse(localStorage.getItem("name"));
  let exist = false;
  for (var i = 0; i < listNames.length; i++)
    if (listNames[i] == value) {
      exist = true;
      break;
    }

  //verify if the name is already saved on local storage and output a result
  if (!exist) {
    listNames.push(value);
    document.getElementById("headerId").innerHTML =
      "Hello " + value + "," + " Welcome to this site";
  } else if (exist) {
    document.getElementById("headerId").innerHTML = "Welcome back " + value;
  }
  localStorage.setItem("name", JSON.stringify(listNames));

  let setCookie = document.getElementById("input2").value;

  document.cookie =
    "name=" + setCookie + ";expires=Fri, 18 mar 2019 13:00:00 UTC;";
};

/*
window.onload = function(event) {
  if (document.cookie.length != 0) {
    let nameValueArray = document.cookie.split("=");
    let customObject = (JSON.parse = nameValueArray[1]);
    var out = document.getElementById("p1");
    out.innerHTML = "welcome back " + customObject;
  }
};
*/
