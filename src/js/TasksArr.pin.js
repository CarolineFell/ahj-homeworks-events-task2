import Task from './Task';

export class TasksArr {
  constructor() {
    this.tasks = []; // array
  }

  addTask(name) {
    this.tasks.push(new Task(this.tasks.length, name)); // take the name from the Task class
  }
}

export function createTasksList(tasksArr) { // create default list of the tasks
  tasksArr.addTask('Task 1');
  tasksArr.addTask('Task 2');
  tasksArr.addTask('Task 3');

  const [...rest] = tasksArr.tasks;
  rest[2].pinned = true; // pin the last task as an example
}
