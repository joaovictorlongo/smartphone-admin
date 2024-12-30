import { userDto } from "./dto";

abstract class AuthService {
  static async signup(email: string, password: string) {
    const foundUser = userDto.findUserByEmail(email)

    if (foundUser) {
      throw new Error('User already exists')
    }

    const user = await userDto.createUser({ email, password, password_hash: '' })

    if (!user) {
      throw new Error('Problem creating user')
    }

    const token = ''

    return token
  }
}
