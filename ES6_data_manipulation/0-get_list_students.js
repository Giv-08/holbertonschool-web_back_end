// export default class getLstStudents {
//   constructor(id, first_name, location) {
//     if (typeof id !== 'number') {
//       throw new TypeError('Id must be a number');
//     }
//     if (typeof first_name !== 'string') {
//       throw new TypeError('First name must be a string');
//     }
//     if (typeof location !== 'string') {
//       throw new TypeError('Location must be a string');
//     }
//     this._id = id;
//     this._first_name = first_name;
//     this._location = location;
//   }
// }

export default function getLstStudents() {
  let array = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ]
  return array
}
