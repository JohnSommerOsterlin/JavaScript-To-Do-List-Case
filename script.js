function newElement() {
  let checkMark = document.createElement("SPAN");
  checkMark.innerHTML = "&#10004";
  let li = document.createElement("li");
  let inputField = document.getElementById("inputField").value;
  let removeButton = document.createElement("button");
  let inputFieldReset = document.getElementsByClassName("inputFieldContainer")
  removeButton.className = "closeLi";

  li.append(checkMark);
  li.append(inputField);
  ulList.appendChild(li);
  li.appendChild(removeButton)
  removeButton.innerHTML = "&#10005";
  console.log(inputFieldReset);

}

let ulList = document.getElementById("ulList");
console.log(ulList);
ulList.addEventListener("click", function (event) {
  
  if (event.target.nodeName === "BUTTON") {
    event.target.parentElement.remove();
  } else {
    event.target.firstElementChild.classList.toggle("checkMarkSpan");
    event.target.classList.toggle("highlight");
    console.log(event.target);
  } 
})