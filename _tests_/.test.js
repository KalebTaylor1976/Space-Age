import Age from "../src/Space-age.js";

describe('Age', () => {

  test('It should return an age in the object', () => {
    let ages = new Age(21);
    expect(ages.age).toEqual(21);
  });

  test('It should return the age of person on Mercury', () => {
    let ages = new Age(56);
    expect(ages.age).toEqual(56);
    expect(ages.mercury()).toEqual(233.33);
  });

  test('It should return the age of person on Venus', () => {
    let ages = new Age(56);
    expect(ages.age).toEqual(56);
    expect(ages.venus()).toEqual(90.32);
  });

  test('It should return the age of person on Mars', () => {
    let ages = new Age(56);
    expect(ages.age).toEqual(56);
    expect(ages.mars()).toEqual(29.79);
  });

  test('It should return the age of person on Jupiter', () => {
    let ages = new Age(56);
    expect(ages.age).toEqual(56);
    expect(ages.jupiter()).toEqual(4.72);
  });

  test('It should return future age and past age', () => {
    let ages = new Age(56, 63, 29.17, 29.17);
    expect(ages.ageDeltaFuture).toEqual(29.17);
  });

  test('It should return future age and past age', () => {
    let ages = new Age(63, 56, 29.17, 29.17);
    ages.mercury();
    expect(ages.ageDeltaPast).toEqual(29.17);
  });


});