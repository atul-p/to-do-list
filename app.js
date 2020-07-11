document.querySelector('.header__clear').addEventListener('click', function () {
    var todo = document.querySelector('.todo');
    todo.closest('ul').innerHTML = '';
});

document.querySelector('.header__add').addEventListener('click',result);
document.addEventListener('keypress', function (event) {
    if (event.key === 13 || event.which === 13) {
        result();
    }
});


function result() {
    var inputTodo = document.querySelector('.header__input');
    if (inputTodo.value) {
        addToDo(inputTodo.value);
        inputTodo.value = '';
    } else {
        alert('You need to type something in');
    }
}

function addToDo(text) {
    var todo, item, paragraph, remove
    todo = document.querySelector('.todo');
    item = document.createElement('li');
    item.innerText = text;
    item.classList.add('item');
    paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    remove = document.createElement('div');
    remove.classList.add('remove-btn');
    todo.appendChild(item);
    item.appendChild(paragraph);
    item.appendChild(remove);
    remove.addEventListener('click', function () {
        item.style.display = 'none';
    })
    item.addEventListener('click', function () {
        item.classList.toggle('crossed-out');
    })
}


//footer dynamic date
(function dynamicDate(){
    var year = new Date().getFullYear();
    var date = `${year}`;
    document.getElementById('span-date').innerHTML = date;
}());
