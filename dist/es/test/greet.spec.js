import { expect } from 'chai';
import { greet } from '../src';

describe('Greet function:', function () {
  it('Should greet a name with a simple meeting', function () {
    expect(greet('Bob')).to.be.equal('Hello Bob.');
  });

  it('Should handle nulls by greeting with Hello, my friend', function () {
    expect(greet(null)).to.be.equal('Hello my friend.');
  });

  it('Should handle nulls by greeting with Hello, my friend', function () {
    expect(greet(undefined)).to.be.equal('Hello my friend.');
  });

  it('Should shout when name is upper case', function () {
    expect(greet('JERRY')).to.be.equal('HELLO JERRY!');
  });

  it('Should handle an array of 2 names', function () {
    expect(greet(['Jill', 'Jane'])).to.be.equal('Hello Jill and Jane.');
  });

  it('Should shout an array of 2 names ', function () {
    expect(greet(['JILL', 'JANE'])).to.be.equal('HELLO JILL AND JANE!');
  });

  it('Should shout an array of 2 names: one uppercase and the other lowercase ', function () {
    expect(greet(['Jill', 'JANE'])).to.be.equal('Hello Jill. AND HELLO JANE!');
  });

  it('Should handle an array of more than 2 names', function () {
    expect(greet(['Amy', 'Brian', 'Charlotte'])).to.be.equal('Hello Amy, Brian, and Charlotte.');
  });

  it('Should shout an array of more than 2 names', function () {
    expect(greet(['AMY', 'BRIAN', 'CHARLOTTE'])).to.be.equal('HELLO AMY, BRIAN, AND CHARLOTTE!');
  });

  it('Should handle uppercase and lowercase names (2 names lower, and 1 upper)', function () {
    expect(greet(['Amy', 'BRIAN', 'Charlotte'])).to.be.equal('Hello Amy and Charlotte. AND HELLO BRIAN!');
  });

  it('Should handle uppercase and lowercase names (2 names upper, and 1 lower)', function () {
    expect(greet(['AMY', 'BRIAN', 'Charlotte'])).to.be.equal('Hello Charlotte. AND HELLO AMY AND BRIAN!');
  });

  it('Should handle uppercase and lowercase names (2 names lower, and 1 uppper)', function () {
    expect(greet(['Amy', 'BRIAN', 'Charlotte', 'MADARA'])).to.be.equal('Hello Amy and Charlotte. AND HELLO BRIAN AND MADARA!');
  });

  it('Should handle uppercase and lowercase names (3 names lower, and 1 uppper)', function () {
    expect(greet(['Amy', 'Brian', 'Charlotte', 'MADARA'])).to.be.equal('Hello Amy, Brian, and Charlotte. AND HELLO MADARA!');
  });

  it('Should handle uppercase and lowercase names (3 names upper, and 1 lower)', function () {
    expect(greet(['AMY', 'BRIAN', 'CHARLOTTE', 'madara'])).to.be.equal('Hello madara. AND HELLO AMY, BRIAN, AND CHARLOTTE!');
  });

  it('Should handle uppercase and lowercase names (4 names upper, and 2 lower)', function () {
    expect(greet(['AMY', 'BRIAN', 'MADARA', 'CHARLOTTE', 'naruto', 'sasuke'])).to.be.equal('Hello naruto and sasuke. AND HELLO AMY, BRIAN, MADARA, AND CHARLOTTE!');
  });

  it('Should handle uppercase and lowercase names (4 names lower, and 2 uppper)', function () {
    expect(greet(['Amy', 'Brian', 'Charlotte', 'Madara', 'SASUKE', 'NARUTO'])).to.be.equal('Hello Amy, Brian, Charlotte, and Madara. AND HELLO SASUKE AND NARUTO!');
  });

  it('Should handle string names that contains comma', function () {
    expect(greet(['Bob', 'Charlie, Dianne'])).to.be.equal('Hello Bob, Charlie, and Dianne.');
  });

  it('Should allow intentional commas', function () {
    expect(greet(['Bob', '""Charlie, Dianne""'])).to.be.equal('Hello Bob and Charlie, Dianne.');
  });
});