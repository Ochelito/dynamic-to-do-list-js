document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        let taskText = taskInput.value.trim();

        if(taskText !=="") {
            const newTask = document.createElement('li');    // Create new <li> element
            newTask.textContent = taskText;

             // Create a new "Remove" button
             //By default, when you create a <button> element in HTML without specifying a type, it defaults to type="submit".

            //This means if your button is inside a <form> element, clicking it will try to submit the form, which can:

            //reload the page

            //clear your input

            //prevent your JavaScript from behaving as expected
            
            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';  //This ensures the button won’t accidentally submit the form, even if it's nested inside one.
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // Set onclick event to remove the <li> from the list
            removeBtn.onclick = function() {
                taskList.removeChild(newTask);
            };

            // Append the button to the <li>, and <li> to the list
            newTask.appendChild(removeBtn);
            taskList.appendChild(newTask);

            // Clear the input field
            taskInput.value = '';

        } else {
            alert("Enter a New Task");
        }
    }

    // Call addTask when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            addTask();
        }
    });

    //Optionally call addTask on DOM load (if you want to add a default task or trigger something)
    // Uncomment below if you want to run addTask on load:
    // addTask();
    //code is for basic to-do list..... check for more complicated todo list
});