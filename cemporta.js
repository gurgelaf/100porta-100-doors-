/*
  Translate:
  porta = door;
  mecherporta = toggledoor;
  cemporta = hundreddoor(or 100door)
*/

porta = Array(100).fill(false);

function mecherporta (c,porta) {
  x = porta.length;
  
  for (var i = 0; i < x; i = i + c) {
    porta[i] = !porta[i];
  }

  if (c < x)
    return mecherporta(++c, porta);
  else {
    porta2 = [], j = 0;

    for (var i = 0; i < x; i++) {
      if (porta[i] == true){
        porta2[j++] = i;
      }
    }

    return porta2;
  }
}

function cemporta() {
  return mecherporta(1, porta);
}

console.log(cemporta());
