'use strict';

function Bar(numberOne, numberTwo) {
  const total = numberOne + numberTwo;

  return total / 2;
}

function Foo(number) {
  return number - 2;
}


console.log('initializing server with:', Bar(5, 10));
