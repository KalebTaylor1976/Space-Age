class SpaceAge {
  constructor(age) {
    this.age = age;
    this.earthYears = age;
    this.mercuryYears = parseFloat((age / 0.24).toFixed(2));
    this.venusYears = parseFloat((age / 0.62).toFixed(2));
    this.marsYears = parseFloat((age / 1.88).toFixed(2));
    this.jupiterYears = parseFloat((age / 11.86).toFixed(2));
  }

  yearsSince(pastAge) {
    let yearsPassed = this.age - pastAge;
    return {
      Earth: yearsPassed,
      Mercury: parseFloat((yearsPassed / 0.24).toFixed(2)),
      Venus: parseFloat((yearsPassed / 0.62).toFixed(2)),
      Mars: parseFloat((yearsPassed / 1.88).toFixed(2)),
      Jupiter: parseFloat((yearsPassed / 11.86).toFixed(2))
    };
  }

  yearsUntil(futureAge) {
    let yearsToPass = futureAge - this.age;
    return {
      Earth: yearsToPass,
      Mercury: parseFloat((yearsToPass / 0.24).toFixed(2)),
      Venus: parseFloat((yearsToPass / 0.62).toFixed(2)),
      Mars: parseFloat((yearsToPass / 1.88).toFixed(2)),
      Jupiter: parseFloat((yearsToPass / 11.86).toFixed(2))
    };
  }
}
