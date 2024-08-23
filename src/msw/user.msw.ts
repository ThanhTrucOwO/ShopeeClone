import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { rest } from 'msw'
import { access_token_1s } from './auth.msw'

const meRes = {
  message: 'Lấy người dùng thành công',
  data: {
    _id: '65e88099a71a6c029dec1529',
    roles: ['User'],
    email: 'asdasd@gmasd.com',
    createdAt: '2024-03-06T14:41:29.154Z',
    updatedAt: '2024-05-14T07:44:52.035Z',
    name: 'Truc',
    avatar: 'b1a1441d-49e0-4087-b0a7-9bee3ad59a42.jpeg',
    address: '273 adv',
    date_of_birth: '2002-05-19T17:00:00.000Z',
    phone: '012345678123'
  }
}

const meRequest = rest.get(`${config.baseUrl}me`, (req, res, ctx) => {
  const access_token = req.headers.get('authorization')
  if (access_token === access_token_1s) {
    return res(
      ctx.status(HttpStatusCode.Unauthorized),
      ctx.json({
        message: 'Lỗi',
        data: {
          message: 'Token hết hạn',
          name: 'EXPIRED_TOKEN'
        }
      })
    )
  }
  console.log(access_token)
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(meRes))
})

const userRequests = [meRequest]

export default userRequests
