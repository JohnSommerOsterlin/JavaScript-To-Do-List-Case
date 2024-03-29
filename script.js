function newElement() {
  // CREATING LIST ITEM
  let li = document.createElement("li");
  li.id = countId;
  countId++;
  li.className = "draggable";

  // CREATING DRAGGABLE LIST ITEM
  li.setAttribute("draggable", "true");
  let inputField = document.getElementById("inputField").value;

  // CREATING SPAN ELEMENT
  let checkMark = document.createElement("SPAN");
  checkMark.innerHTML = "&#10004";

  // CREATING REMOVE BUTTON
  let removeButton = document.createElement("button");
  removeButton.className = "closeLi";


  // INSERT LIST ITEM, CHECKMARK & REMOVE BUTTON INTO DOM IF INPUT FIELD IS NOT EMPTY
  if (document.getElementById("inputField").value != "") {
  li.append(checkMark);
  li.append(inputField);
  ulList.appendChild(li);
  li.appendChild(removeButton);
  removeButton.innerHTML = "&#10005"; 
}

  // CLEARING INPUT FIELD
  document.getElementById("inputField").value = "";
}



// UNORDERED LIST VARIABLE
let ulList = document.getElementById("ulList");

// UNIQUE LIST ITEM IDs
let countId = 0;

// MARKED COMPLETE & REMOVE LIST ITEM
ulList.addEventListener("click", function (event) {
  
  // REMOVE LIST ITEM
  if (event.target.nodeName === "BUTTON") {
    event.target.parentElement.remove();
  } 
  // MARKED COMPLETE LIST ITEM
  else {
    event.target.firstElementChild.classList.toggle("checkMarkSpan");
    event.target.classList.toggle("highlight");
  } 
});


// DRAG AND DROP LIST ITEM (NOT FINISHED)
ulList.addEventListener("dragstart", function(event) {
  console.log("dragstart", event.target);
})

ulList.addEventListener("dragover", function(event) {
  // console.log("dragover", event.target);
})

ulList.addEventListener("dragend", function(event) {
  event.preventDefault();
  console.log("drop", event.target);
})

