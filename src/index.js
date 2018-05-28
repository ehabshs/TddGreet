export function greet(names) {

  if (names === undefined || names === null) {
    return 'Hello my friend.';
  }

  if (typeof names === 'string') {
    names = [names];
  }

  names = getCommaNamesArr(names);

  const helloNames = names.filter(name => !isUpperCase(name));
  const shoutNames = names.filter(isUpperCase);

  if (helloNames.length === names.length) {
    return getGreetText(helloNames);
  } else if (shoutNames.length === names.length) {
    return getShoutText(shoutNames);
  } else {
    return getGreetText(helloNames) + ' AND ' + getShoutText(shoutNames);
  }

}

function getCommaNamesArr(names) {

  const completeNames = [];
  names.forEach(nameStr => {
    if (nameStr.slice(0, 2) !== '""') {

      const namesArr = nameStr.split(',');
      namesArr.forEach(name => {
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

function sayHello(name, ending = '') {
  return `Hello ${name}${ending}`;
}

function sayHelloTwoNames(name1, name2, ending = '') {
  return `Hello ${name1} and ${name2}${ending}`;
}

function sayHelloNamesArr(names, ending = '') {

  let text = sayHello(names[0], ', ');

  for (let i = 1, l = names.length - 1; i < l; i++) {
    text += names[i] + ', ';
  }

  text += 'and ' + names[names.length - 1] + ending;

  return text;
}

function getHelloText(names, ending = '') {

  let text;

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
