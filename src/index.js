document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    tasker(document.getElementById('new-task-description').value);

  })
});

function tasker(todo){
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  let li = document.createElement('li')
  let ul = document.getElementById('tasks')
  li.textContent = `  ${todo} `
  ul.appendChild(li)
  li.appendChild(btn)
}

function handleDelete(e){
  e.target.parentNode.remove();
}
