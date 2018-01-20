playSpaces = document.getElementsByClassName('tic-tac-toe')

console.log("connected");

for (var i = 0; i < playSpaces.length; i++) {
  playSpaces[i].addEventListener('click', function(){
      if(this.innerHTML == ' ')this.innerHTML = 'X';
      else if(this.innerHTML == 'X')this.innerHTML = 'O';
      else if(this.innerHTML == 'O')this.innerHTML = ' ';
    });
}

restartButton = document.getElementById('restartbutton')
restartbutton.addEventListener('click', function() {
  for (var i = 0; i < playSpaces.length; i++) {
    playSpaces[i].innerHTML = ' '
  }
});
