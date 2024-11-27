process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
//   process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});

// process.stdout.write("welcome onboard\ntype in something\n");
// process.stdin.on('data', (data)=>{
//     const fortm = data.toString().trim();
    // console.log(`Your name is: ${dem}`);
    // process.stdout.write(`Your name is: ${ fortm }\n`);
    // process.exit();
// });
// process.on('exit', ()=>{
    // console.log("you're leaving this great app");
// })
