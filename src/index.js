document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let input = document.querySelector('#new-task-description').value;

    const li = document.createElement('li')
    li.innerText = input;

    const level = document.querySelector('#priority').value;
    switch (level) {
      case ('high') :
        li.style.color = "red";
        break;
      case ('medium') :
        li.style.color = "orange";
        break;
      case ('low') :
        li.style.color = "yellow";
    }

    const dueDate = document.querySelector('#due-date').value;
    const date = document.createElement('p');
    date.innerText = `Due: ${dueDate}`
    li.appendChild(date);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'X';
    li.appendChild(deleteButton);
    
    deleteButton.addEventListener('click', function(e) {
      deleteButton.parentNode.remove();
    })

    const list = document.querySelector('#tasks');
    if (input !== '') {
      list.appendChild(li);
    }
    document.querySelector('#create-task-form').reset()
  })
});