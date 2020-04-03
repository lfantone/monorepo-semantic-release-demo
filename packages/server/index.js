'use strict';

function Bar(numberOne, numberTwo) {
  const total = numberOne + numberTwo;

  return total / 2;
}


console.log('initializing server with:', Bar(5, 10));
