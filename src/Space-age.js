export default class Age {
  constructor(age, ageDelta, ageDeltaPast, ageDeltaFuture) {
    this.age = age;
    this.ageDelta = ageDelta;
    this.ageDeltaPast = ageDeltaPast;
    this.ageDeltaFuture = ageDeltaFuture;
  }

  mercury() {
    let numb = ((1/.24) * this.age).toFixed(2);
    let ageAlt = parseFloat(numb);

    let ageDeltaPast = ((1/.24) * (this.age - this.ageDelta)).toFixed(2);
    this.ageDeltaPast = parseFloat(ageDeltaPast);

    let ageDeltaFuture = ((1/.24) * (this.ageDelta - this.age)).toFixed(2);
    this.ageDeltaFuture = parseFloat(ageDeltaFuture);

    return ageAlt;
  }

  venus() {
    let numb = ((1/.62) * this.age).toFixed(2);
    let ageAlt = parseFloat(numb);

    let ageDeltaPast = ((1/.62) * (this.age - this.ageDelta)).toFixed(2);
    this.ageDeltaPast = parseFloat(ageDeltaPast);

    let ageDeltaFuture = ((1/.62) * (this.ageDelta - this.age)).toFixed(2);
    this.ageDeltaFuture = parseFloat(ageDeltaFuture);

    return ageAlt;
  }

  mars() {
    let numb = ((1/1.88) * this.age).toFixed(2);
    let ageAlt = parseFloat(numb);

    let ageDeltaPast = ((1/1.88) * (this.age - this.ageDelta)).toFixed(2);
    this.ageDeltaPast = parseFloat(ageDeltaPast);

    let ageDeltaFuture = ((1/1.88) * (this.ageDelta - this.age)).toFixed(2);
    this.ageDeltaFuture = parseFloat(ageDeltaFuture);

    return ageAlt;
  }

  jupiter() {
    let numb = ((1/11.86) * this.age).toFixed(2);
    let ageAlt = parseFloat(numb);

    let ageDeltaPast = ((1/11.86) * (this.age - this.ageDelta)).toFixed(2);
    this.ageDeltaPast = parseFloat(ageDeltaPast);

    let ageDeltaFuture = ((1/11.86) * (this.ageDelta - this.age)).toFixed(2);
    this.ageDeltaFuture = parseFloat(ageDeltaFuture);

    return ageAlt;
  }
}
