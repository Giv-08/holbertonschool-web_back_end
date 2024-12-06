export function uploadPhoto() {
  // to return promises that are already resolved with specific values.
  return Promise.resolve ({
    status: 200,
    body: 'photo-profile-1',
  });
}

export function createUser() {
  // to return promises that are already resolved with specific values.
  return Promise.resolve ({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
