const task = []; // init where todos will go
while (true) {
    // asking for user input
    let task = prompt("Enter a task (or type 'done' to finish")
    
     // check if user input is done or Done or DONE
    if(task.toLowerCase() === 'done'){
        break // if done breaking out of while loop
    }

    tasks.push(task);  // adding user input to tasks 
}
 console.log("Your Todo List:");
//  tasks.forEach((task, index) => {
//     console.log(`${index + 1}. ${task}`);

for(let i = 0; i < tasks.length; i++){
    console.log
}

//  });