'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greet = greet;
function greet(names) {

  if (names === undefined || names === null) {
    return 'Hello my friend.';
  }

  if (typeof names === 'string') {
    names = [names];
  }

  names = getCommaNamesArr(names);

  var helloNames = names.filter(function (name) {
    return !isUpperCase(name);
  });
  var shoutNames = names.filter(isUpperCase);

  if (helloNames.length === names.length) {
    return getGreetText(helloNames);
  } else if (shoutNames.length === names.length) {
    return getShoutText(shoutNames);
  } else {
    return getGreetText(helloNames) + ' AND ' + getShoutText(shoutNames);
  }
}

function getCommaNamesArr(names) {

  var completeNames = [];
  names.forEach(function (nameStr) {
    if (nameStr.slice(0, 2) !== '""') {

      var namesArr = nameStr.split(',');
      namesArr.forEach(function (name) {
        completeNames.push(name.trim());
      });
    } else {
      completeNames.push(nameStr.slice(2, nameStr.length - 2));
    }
  });

  return completeNames;
}

function isUpperCase(str) {
  if (str.toUpperCase() === str) {
    return true;
  }

  return false;
}

function sayHello(name) {
  var ending = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return 'Hello ' + name + ending;
}

function sayHelloTwoNames(name1, name2) {
  var ending = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  return 'Hello ' + name1 + ' and ' + name2 + ending;
}

function sayHelloNamesArr(names) {
  var ending = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


  var text = sayHello(names[0], ', ');

  for (var i = 1, l = names.length - 1; i < l; i++) {
    text += names[i] + ', ';
  }

  text += 'and ' + names[names.length - 1] + ending;

  return text;
}

function getHelloText(names) {
  var ending = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


  var text = void 0;

  if (names.length === 1) {
    text = sayHello(names[0], ending);
  } else if (names.length === 2) {
    text = sayHelloTwoNames(names[0], names[1], ending);
  } else {
    text = sayHelloNamesArr(names, ending);
  }

  if (ending === '!') {
    text = text.toUpperCase();
  }

  return text;
}

function getShoutText(names) {
  return getHelloText(names, '!');
}

function getGreetText(names) {
  return getHelloText(names, '.');
}