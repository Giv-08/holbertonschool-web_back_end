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

function getLstStudents(id, first_name, location) {
  const dict = {
    'id': id,
    'first_name': first_name,
    'location': location
  }
  let array = []
  array.push(dict)
  return array
}
