var stack = []
tasks = ['Go walk', 'Go work', 'Drink coffee', 'Walk dog', 'Go home']

function StartDay(){
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        console.log(`Starting: ${task}`);
        stack.push(task);
    }
}

function BackTrackDay(){
    while (stack.length > 0) {
        const task = stack.pop();
        console.log(`Backtracking ${task}`);
        
    }
}