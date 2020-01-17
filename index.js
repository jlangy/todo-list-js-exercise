
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logTaskState: function(task) {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  }
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way


// DRIVER CODE BELOW

const task1 = newTask('Do laundry', "Self explanitory");
const task2 = newTask('Clean cat litter', "Self explanatory");
const tasks = [task1, task2];

task1.logTaskState();
task1.completeTask();
task1.logTaskState();


