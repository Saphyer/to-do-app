/*jshint esversion: 6 */

function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();

    let title = newToDoText.value; //gets text

    let newLi = document.createElement("li"); //<li></li>
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(event) {
      // console.log(event);
      // this.parentElement represents the button's <li> parent
      toDoList.removeChild(this.parentElement);
    });

    newLi.textContent = title; // set the title
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    toDoList.appendChild(newLi);
    newToDoText.value = "";
});
}

window.onload = function() {
  onReady();
};
