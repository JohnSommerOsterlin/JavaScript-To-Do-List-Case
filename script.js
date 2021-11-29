function newElement() {
  let li = document.createElement("li");
  let inputField = document.getElementById("inputField").value;
  let removeButton = document.createElement("button");
  removeButton.className = "closeLi";

  li.append(inputField);
  ulList.appendChild(li);
  li.appendChild(removeButton)
  removeButton.innerHTML = "&#10005";



  // li.addEventListener("click", function () {
  //   // let check = document.createElement("span")
  //   // check.innerHTML = "&#10004";
  //   // li.append(check)
  //   // li.style.textDecoration = "line-through";
  //   li.style.boxShadow = "inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 104, 121, .288)"
  // })

  // let button = document.getElementsByClassName("closeLi") 
  // button.addEventListener("click", function () {
  // li.remove();
  // })
}

let ulList = document.getElementById("ulList");
console.log(ulList);
ulList.addEventListener("click", function (event) {
  
  if (event.target.nodeName === "BUTTON") {
    event.target.parentElement.remove();
  } else {
    event.target.classList.toggle("highlight");

  }
})