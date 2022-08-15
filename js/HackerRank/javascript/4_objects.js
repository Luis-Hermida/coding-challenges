function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = a * 2 + b * 2;
  this.area = a * b;
}

const rec = new Rectangle(2, 4);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);
