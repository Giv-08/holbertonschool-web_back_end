export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    if (typeof length !== "number") {
      throw new TypeError("Length must be a number");
    }
    if (!Array.isArray(students)) {
      throw new TypeError("Students must be an array");
    }
    this.name = name;
    this.length = length;
    this.students =students;
  }

  get getName() {
    return this._name;
  }

  set setName(name) {
      this._name = name;
  }

  get getLength() {
    return this._length;
  }

  set setLength(length) {
      this._length = length;
  }

  get getStudents() {
    return this._students;
  }

  set setStudents(students) {
      this._students = students;
  }
}
