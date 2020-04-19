export default class TasksFormConstructor {
  constructor() {
    this.pinned = document.getElementById('pinned');
    this.allTasks = document.getElementById('all-tasks');
  }

  updateTasks(arrTasks) {
    this.pinned.innerHTML = '';
    this.allTasks.innerHTML = '';

    const pinnedTasks = arrTasks.some((item) => item.pinned);
    const addedTasks = arrTasks.every((item) => item.pinned);

    if (!pinnedTasks) {
      this.pinned.innerHTML = '<p>No pinned tasks</p>';
    }

    if (addedTasks) {
      this.allTasks.innerHTML = '<p>No tasks found</p>';
    }

    for (const task of arrTasks) {
      const itemTask = document.createElement('div');
      itemTask.className = 'item-task';
      itemTask.dataset.id = task.id;
      itemTask.innerHTML = `
      <p>${task.name}</p>
      <div class="checked">${task.pinned ? 'V' : ''}</div>
      `;

      if (task.pinned) {
        this.pinned.appendChild(itemTask);
        // <div id="pinned" class="div-task">
        //   <div class="item-task" id="${task.id}">
        //     <p>${task.name}</p>
        //     <div class="checked">${task.pinned ? 'V' : ''}</div>
        //   </div>
        // </div>
      } else {
        this.allTasks.appendChild(itemTask);
        // <div id="all-tasks" class="div-task">
        //   <div class="item-task" id="${task.id}">
        //     <p>${task.name}</p>
        //     <div class="checked">${task.pinned ? 'V' : ''}</div>
        //   </div>
        // </div>
      }
    }
  }
}
