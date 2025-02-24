import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const resultArray = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return resultArray.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : `Error: ${result.reason.message}`,
  }));
}
