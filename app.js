/*jshint esversion: 6 */

function onReady(){
  const ADD_TODO_FORM = document.getElementById("addToDoForm");
  const NEW_TODO_TEXT = document.getElementById("newToDoText");
  const TODO_LIST = document.getElementById("toDoList");

  ADD_TODO_FORM.addEventListner("submit", (event) => {
    event.preventDefault();

    let title = NEW_TODO_TEXT.value; //gets text

    let newLi = document.createElement("li"); //<li></li>
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListner("click", function(event){
      // console.log(event);
      // this.parentElement represents the button's <li> parent
      TODO_LIST.removeChild(this.parentElement);
    });

    newLi.textContent = title; // set the title
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
}

window.onload = function() {
  onReady();
 };
