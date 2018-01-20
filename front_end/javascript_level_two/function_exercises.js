// BONUS: MAKE BRICKS
//
// We want to make a row of bricks that is goal inches long. We have a number of
// small bricks (1 inch each) and big bricks (5 inches each). Return true if it
// is possible to make the goal by choosing from the given bricks. This is a
// little harder than it looks and can be done without any loops in a single line!
//
// If you can't figue this one out, don't worry, that's why its a bonus!
//

// this solves a different problem
// function makeBricks(small, big, goal){
//   if( goal%small==big || goal%big==small || goal^(small+big) == 0 || small == 1 || big == 1){
//     console.log("true");
//   }else{
//     console.log("false");
//   }
// }

makeBricks(3, 1, 8) //→ true
makeBricks(3, 1, 9) // → false
makeBricks(3, 2, 10)// → true
makeBricks(2, 1, 7)// → true
makeBricks(1, 2, 7)// → false

function makeBricks(small, big, goal){
  console.log(goal % (big * (goal / 5)) <= small)
}
