export const login = async ({ email, password }) => {
  // Simulamos un login "valido" con cualquier dato
  if (email && password) {
    return {
      token: 'fake-token',
      user: { email },
    }
  } else {
    throw new Error('Invalid credentials');
  }
}

export const register = async ({ email, password }) => {
  if (email && password) {
    return {
      token: 'fake-token',
      user: { email }
    }
  } else {
    throw new Error('Missing data');
  }
}
