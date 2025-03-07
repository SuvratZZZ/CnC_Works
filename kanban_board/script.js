const addTaskBtn = document.getElementById('add-task-btn');
const todoBoard = document.getElementById('todo-board');
// const allBoards = document.getElementsByClassName('board')
const allBoards = document.querySelectorAll('.board');
const allItems = document.querySelectorAll('.item');

function attachDragEvents(target) {
    target.addEventListener('dragstart', () => {
        target.classList.add('flying','flying2');
    });
  target.addEventListener('dragend', () => {
    target.classList.remove('flying','flying2');
    // eventLisKBKC();
    });
}

function renderCount(){
    allBoards.forEach((b)=>{
        
    })
}
function renderItem(input,board) {
    let taskCard = document.createElement('div');
    taskCard.classList.add('item');
    taskCard.setAttribute('draggable', true);
    taskCard.appendChild(document.createElement('p'));
    taskCard.getElementsByTagName('p')[0].innerText = input;
    
    taskCard.addEventListener('dragover', () => {
        dragOverItem(taskCard);
    });
    
    let task2=document.createElement('div');
    task2.classList.add('itemd');
    task2.appendChild(document.createElement('div'));
    let item = task2.getElementsByTagName('div')[0];
    item.appendChild(document.createElement('img'));
    item.getElementsByTagName('img')[0].setAttribute('src',"https://cdn-icons-png.flaticon.com/512/3405/3405244.png");
    item.classList.add('del-but','button');
    item.addEventListener('click',()=>{
        item.parentElement.parentElement.removeChild(item.parentElement);
    });
    
    task2.appendChild(document.createElement('div'));
    item = task2.getElementsByTagName('div')[1];
    item.appendChild(document.createElement('img'));
    item.getElementsByTagName('img')[0].setAttribute('src',"https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vector-icons-4/edit-flwwwz417de3u3nzvstgpu.png/edit-qtep4ftgzlsz4sl22a43m9.png?_a=DAJFJtWIZAAC");
    item.classList.add('del-but','button');
    item.addEventListener('click',()=>{
        const inp=prompt("enter new task title");
        if(inp!=""){
            taskCard.getElementsByTagName('p')[0].innerText=inp;
        }
    });

    taskCard.appendChild(task2);
    attachDragEvents(taskCard);
    
    board.appendChild(taskCard);
}

function dragOverBoard(board){
    const flyingElement = document.querySelector('.flying2');
    // console.log(board, 'board toh mere upper se gya', flyingElement);
    board.appendChild(flyingElement);
}

function dragOverItem(item){
    const flyingElement = document.querySelector('.flying');
    // console.log(item, 'item toh mere upper se gya', flyingElement);
    const parBoard = item.parentElement;
    parBoard.insertBefore(flyingElement,item);
}

addTaskBtn.addEventListener('click', () => {
    const input = prompt('What is the task?');
    if (!input) return;
    if (!localStorage.getItem("lists")){
        localStorage.setItem("lists",[])
    }
    // localStorage.getItem("lists").push({input,board:'todoBoard'});
    renderItem(input,todoBoard);
});


allItems.forEach((item) => {
    attachDragEvents(item);
    item.getElementsByClassName('del-but')[0].addEventListener('click',(e)=>{
      item.parentElement.removeChild(item);
    });
});

function eventLisKBKC(){
    allBoards.forEach((board) => {
        // console.log(board,board.childNodes.length)
        console.log("chal ra bsdk")
            board.addEventListener('dragover', (e) => {
                if(e.target===e.currentTarget)
                dragOverBoard(board);
            });
    });
}
eventLisKBKC();

allItems.forEach((item) => {
    item.addEventListener('dragover', () => {
        dragOverItem(item);
    });
});


