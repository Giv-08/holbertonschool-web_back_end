import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const result_array = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
    return result_array.map((result) => {
      return {
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }
    });
  } catch (error) {
    console.log(error);
  }
}
