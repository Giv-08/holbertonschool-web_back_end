import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [];

  const classRoomOne = new ClassRoom(19);
  const classRoomTwo = new ClassRoom(20);
  const classRoomThree = new ClassRoom(34);

  array.push(classRoomOne, classRoomTwo, classRoomThree);
  return array;
}
