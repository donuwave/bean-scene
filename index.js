var a = {
  firstName: "John",
  lastName: "Doe",
  sayHello: function () {
    console.log(`Hello ${this.firstName}`);
  },
  sayHi: () => {
    console.log(`Hi ${this.firstName}`);
  },
};

Array.prototype.someA = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      return true;
    }
  }

  return false;
};

console.log([1, 2].someA((el) => (el < 2 ? true : false)));
console.log([1, 2].some((el) => (el < 2 ? true : false)));
