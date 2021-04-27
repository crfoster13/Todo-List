document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addTodoItem);

    var colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', changeTextColor);
});

function addTodoItem() {
    var inputText = document.getElementById('todoInput').value;
    console.log(inputText);
    var todoItem = document.createElement('p');
    todoItem.innerText = inputText;
    todoItem.id = 'item';
    todoItem.class = 'colorful';
    document.getElementById('todoItems').appendChild(todoItem);
}

function changeTextColor() {
    var color = generateRandomColor();
    document.getElementById('todoItems').style.color = color;
}

function generateRandomColor() {
    var colors = ['red', 'purple', 'green', 'blue', 'burgundy', 'grey'];

    var randomNumber = Math.random() * colors.length;
    var randomNumberFloored = Math.floor(randomNumber);
    return colors[randomNumberFloored];
}