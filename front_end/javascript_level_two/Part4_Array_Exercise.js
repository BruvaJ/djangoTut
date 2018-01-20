
var roster = [];
var commands = ['add','remove','display','quit'];
var result;

while (result != "quit"){
  result = prompt("Please enter one of the commands " + commands);
  if (result === "add") roster.push(prompt("What name would you like to add?"))
  if (result === "remove") roster.splice(roster.indexOf(prompt("What name would you like to remove?")), 1)
  if (result === "display") roster.forEach(console.log)
}
