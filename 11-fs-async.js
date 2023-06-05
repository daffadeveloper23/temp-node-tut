const {readFile, writeFile} = require('fs');

console.log('Start');
readFile(
    './content/first.txt',
    'utf-8',
    (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const first = result;
        readFile(
            './content/second.txt',
            'utf-8',
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                const second = result;
                writeFile(
                    './content/result-async.txt',
                    `Here is ${first}, ${second}`,
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            return
                        }
                        console.log('Done with this task');
                    }
                )
            }
        )
    })

console.log('Start a new task');

/** 
 * In synchronous model (blocking method), the code tasks will execute in order, and a task will not executed unless the task before has been finished
 * In asynchronous model (non-blocking method), the task that need some time to be finished can be left to work alone and let the code to execute other tasks
*/