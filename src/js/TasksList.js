/* eslint-disable class-methods-use-this */
import { TasksArr, createTasksList } from './TasksArr.pin';
import TasksFormConstructor from './TasksFormConstructor';

const tasksArr = new TasksArr();
const tasksFormConstructor = new TasksFormConstructor();

export default class TasksList {
  constructor() {
    this.pinned = document.getElementById('pinned');
    this.allTasks = document.getElementById('all-tasks');
    this.inputForm = document.getElementById('input-form');
    this.inputTask = document.getElementById('input-task');
    this.errorUp = document.querySelector('.error');
  }

  init() {
    createTasksList(tasksArr); // add deafault tasks + new one
    tasksFormConstructor.updateTasks(tasksArr.tasks); // up to date
    this.eventsTasks();
  }

  filterTask(value) {
    const filtrArr = tasksArr.tasks.filter((item) => { // filter tasks
      const valueLowerCase = value.trim().toLowerCase();
      const trueName = item.name.toLowerCase().includes(valueLowerCase);
      return trueName || item.pinned;
    });
    tasksFormConstructor.updateTasks(filtrArr);
  }

  moveTask(taskId, pinned) {
    const idTask = tasksArr.tasks.findIndex( // move to pinned
      (item) => item.id === Number(taskId),
    );
    tasksArr.tasks[idTask].pinned = pinned;
    this.filterList(this.inputTask.value);
  }

  eventsTasks() {
    this.inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const elemValue = this.inputTask.value;

      if (elemValue === '') { // show error
        this.errorUp.classList.remove('hidden');
        const top = this.inputTask.offsetTop + this.inputTask.offsetHeight / 2;
        this.errorUp.style.top = `${top - this.errorUp.offsetHeight / 2}px`;
        const left = this.inputTask.offsetLeft + this.inputTask.offsetWidth;
        this.errorUp.style.left = `${left + 80}px`;
        return;
      }

      if (!this.errorUp.classList.contains('hidden')) {
        this.errorUp.classList.add('hidden');
      }

      tasksArr.addTask(this.inputTask.value);
      this.inputTask.value = '';
      this.filterTask(this.inputTask.value);
    });

    this.inputTask.addEventListener('input', () => {
      this.filterTask(this.inputTask.value);
    });

    this.pinned.addEventListener('click', (event) => {
      if (event.target.className === 'checked') {
        const elementId = event.target.closest('.item-task').dataset.id;
        this.moveTask(elementId, false);
      }
    });

    this.allTasks.addEventListener('click', (event) => {
      if (event.target.className === 'checked') {
        const elementId = event.target.closest('.item-task').dataset.id;
        this.moveTask(elementId, true);
      }
    });

    this.errorUp.addEventListener('click', (event) => {
      if (event.target.className === 'close-error') {
        this.errorUp.classList.add('hidden');
      }
    });
  }
}
