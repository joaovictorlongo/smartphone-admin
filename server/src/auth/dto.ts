type User = {
  id: number;
  email: string;
  password_hash: string;
}

type UserWithoutId = Omit<User, 'id'> & {
  password: string;
}

const users: User[] = []

export const userDto = {
  findUserByEmail: (email: string) => {
    return users.find(user => user.email === email)
  },
  createUser: async (user: UserWithoutId) => {
    const newUser: User = {
      ...user,
      id: users.length + 1,
      password_hash: await Bun.password.hash(user.password)
    }

    users.push(newUser)

    return newUser
  },
  verifyPassword: async (password: string, passwordHash: string) => {
    return await Bun.password.verify(password, passwordHash)
  }
}
