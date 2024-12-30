import { Elysia, t } from 'elysia'
import { jwtConfig } from './jwt.config'

const body = t.Object({
  email: t.String(),
  password: t.String()
})

const app = new Elysia()
  .use(jwtConfig)
  .post('/singup', async (request) => {
    request.jwt_auth.sign({})
  })
	.post('/login', async (request) => {
    request.jwt_auth.sign({})
  })
	.listen(3000)

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
