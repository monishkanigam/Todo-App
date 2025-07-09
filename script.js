// 1-> create task✔️
// 2-> update task
// 3-> delete task
// 4-> mark✔️ done

// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const taskcontainer = document.getElementById("task-container");


// const createtask = (task) => {
//   const taskItem = document.createElement("div");
//   const result = task.replace(/\s+/g, "-");
//   taskItem.classList.add("task-item");
//   taskItem.innerHTML = `${task} <div class="action-item">
//               <input class=${result} type="checkbox" /><span>🗑️</span> <span>🖊️</span>
//             </div>`;
//   taskItem.id=result;
//   taskcontainer.append(taskItem);

//   const checkbox = document.getElementsByClassName(result);
//   checkbox[0].addEventListener("change",(e)=>{
//       console.log(e.target.classList);
 
//       const classname=e.target.classList[0];

// })
// };



// // input.addEventListener("keyup", () => {
//   // console.log("input value:",input.value);
// // });

// btn.addEventListener("click", () => {
//   console.log("add task", input.value);
//   createtask(input.value);
//   input.value = "";
// });


const input = document.getElementById("input");
const btn = document.getElementById("btn");
const taskContainer = document.getElementById("task-container");

const createTask = (taskText) => {
  const taskId = taskText.replace(/\s+/g, "-").toLowerCase();

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.id = taskId;

  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="action-item">
      <input type="checkbox" class="check-btn" />
      <span class="delete-btn">🗑️</span>
      <span class="edit-btn">🖊️</span>
    </div>
  `;

  taskContainer.append(taskItem);

  // ✅ Checkbox logic - mark done
  const checkbox = taskItem.querySelector(".check-btn");
  checkbox.addEventListener("change", () => {
    const taskTextEl = taskItem.querySelector(".task-text");
    taskTextEl.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  // ✅ Delete logic
  const deleteBtn = taskItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  // ✅ Edit logic
  const editBtn = taskItem.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", taskText);
    if (newTask && newTask.trim() !== "") {
      taskItem.querySelector(".task-text").innerText = newTask;
      // Optional: update ID too
      taskItem.id = newTask.replace(/\s+/g, "-").toLowerCase();
    }
  });
};

btn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task !== "") {
    createTask(task);
    input.value = "";
  }
});



 function myname(name){
  console.log("name is:",name);

}

const username="kakubhaiya";
myname(username);