console.log('connected');
var height = 5;
var width = 7 ;

playerClass = 'playerA';

$('div').append('<table>');
for (var i = 0; i < height; i++) {
  $('div').append('<tr></tr>');
  for (var j = 0; j < width; j++) {
    ($('div').append('<td class="available">TEST</td>'));
  }
}
$('div').append('</table>');

$('td').on('click', function(){
  var col = ($('td').index(this) + 1) % width;
  if (col == 0) col = width;

  for (var i = 0; i < height; i++) {
    var index = col + width * i - 1
    var element = $('td').eq(index);
    var result = element.hasClass('taken');
    if (result && i == 0) {break}
    else if (result) {
      previousElement = $('td').eq(index - width);
      changeColor(previousElement);
      break;
    } else if (i == height - 1) {
      changeColor(element);
      break;
    }
  }
  endTurn();
  checkForWin();
});

function endTurn() {
    if (playerClass == 'playerA'){
      playerBTurn();
    }
    else if(playerClass == 'playerB') {
      playerATurn();
  }
}

function changeColor(chosenElement){
  chosenElement.removeClass('available');
  chosenElement.addClass('taken');
  chosenElement.addClass(playerClass);
}

function checkForWin(){
  var playerA = 0;
  var playerB = 0;
  // TODO: if hit a given color then track each consecutive cell until 4 = win
  // else break and increment i
  for (var i = 0; i < width * height; i++) {
    if (i % 7 == 0) {
      playerA = 0;
      playerB = 0;
    }
    // console.log($('td').eq(28).hasClass('playerA'));
    // console.log(i);
    // console.log(i);
  //   if($('td').eq(i).hasClass('playerA')){
  //     playerA ++;
  //     winCondition(playerA, 'player 1')
  //   }
  //   if($('td').eq(i).hasClass('playerB')){
  //     playerB ++;
  //     winCondition(playerB, 'player 2');
  //   }
    if (i % 7 >= 4) {
      i += 2;
      playerA = 0;
      playerB = 0;
    }
      while($('td').eq(i).hasClass('playerA')){
          playerA ++;
          i ++;
          winCondition(playerA, 'player1');
          console.log(playerA);
            if (i % 7 == 0) {
              break;
            }
      }
      while($('td').eq(i).hasClass('playerB')){
        playerB ++;
        i++;
        winCondition(playerB, 'player2');
        if (i % 7 == 0) {
          break;
        }
        // winCondition(playerB, 'player 2');
      }
    // console.log(i % 7);
  }
}

function winCondition(score, name){
  if(score == 4){
    alert(name + ' has won!')
  }
}

function startTurn(name){
  playerClass = name;
}

function playerBTurn(){
  startTurn('playerB')
}

function playerATurn(){
  startTurn('playerA')
}
