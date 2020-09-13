const inputtext = document.querySelector("#inputtext");
const ul = document.querySelector("#list");
const btn1 = document.querySelector("#btn1");

inputtext.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    btn1.click();
  }
});

function addli() {
  const newdiv = document.createElement("div");
  newdiv.id = "newdiv";
  const newch = document.createElement("input");
  newch.type = "checkbox";
  newch.name = "name;";
  newch.id = "newch";

  const label = document.createElement("label");
  label.htmlFor = "newch";
  label.appendChild(document.createTextNode(inputtext.value));

  const newbtn = document.createElement("button");
  newbtn.textContent = "delete";
  newbtn.style.color = "red";
  newbtn.style.float = "right";
  newbtn.style.marginRight = "60px";
  newbtn.addEventListener("click", function () {
    newdiv.remove();
  });

  newdiv.appendChild(newch);
  newdiv.appendChild(label);
  ul.appendChild(newdiv);
  newdiv.appendChild(newbtn);
  inputtext.value = " ";

  newch.addEventListener("change", () => {
    const currentlabel = newch.nextSibling;
    currentlabel.style.textDecoration = "line-through";
    currentlabel.style.color = "green";
  });
}
