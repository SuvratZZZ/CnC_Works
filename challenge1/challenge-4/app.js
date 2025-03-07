/**
 * Write your challenge solution here
 */

const lis = document.getElementById('taskList');
let total_task = 0;
let all_task = 0;
let com_task = 0;

const update_to = function () {
  if (total_task == 0) {
    const nod = document.createElement('li');
    nod.innerText = 'No tasks yet. Add one above!';
    nod.classList.add('empty-list');
    document.getElementById('taskList').appendChild(nod);
  }
  document.getElementById(
    'totalTasks'
  ).innerText = `Total tasks: ${total_task}`;
};

const update_co = function () {
  document.getElementById(
    'completedTasks'
  ).innerText = `Completed tasks: ${com_task}`;
};

document.getElementById('addButton').onclick = function () {
  const idd = `task-${all_task}`;
  const data = document.getElementById('taskInput').value;
  const node = document.createElement('li');
  node.id = idd;
  // const id = Date.now.toString()

  const butt = document.createElement('button');
  butt.classList.add('delete-button');
  butt.innerText = 'Delete';
  butt.onclick = function () {
    lis.removeChild(document.getElementById(idd));
    total_task--;
    update_to();
  };

  const pp = document.createElement('p');
  pp.innerText = data;
  pp.classList.add('task-text');

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.id = idd + 'c';
  check.onchange = function () {
    // console.log(this.value);
    // console.log(document.getElementById(idd+"c").value);
    if (document.getElementById(idd + 'c').checked) {
      node.classList.add('completed');
      com_task++;
      update_co();
    } else {
      node.classList.remove('completed');
      com_task--;
      update_co();
    }
  };

  // console.log(data);
  node.classList.add('task-item');
  node.appendChild(check);
  node.appendChild(pp);
  node.appendChild(butt);

  lis.appendChild(node);
  all_task++;

  if (total_task == 0) {
    document
      .getElementById('taskList')
      .removeChild(document.getElementsByClassName('empty-list')[0]);
  }
  total_task++;
  update_to();
};
