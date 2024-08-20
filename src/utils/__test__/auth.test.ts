import { beforeEach, describe, expect, it } from 'vitest'
import {
  clearLS,
  getAccessTokenFromLS,
  getProfileFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS,
  setRefreshTokenToLS
} from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjc5MjZiNGI5M2M4NjZkMjdmMWMxOSIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjQtMDgtMThUMTM6MjU6MzIuOTE1WiIsImlhdCI6MTcyMzk4NzUzMiwiZXhwIjoxNzIzOTg3NTQyfQ.NO7iNtUk_0rgSCEE9hUD0X0OU1TylRhsqNnv6OzTraA'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjc5MjZiNGI5M2M4NjZkMjdmMWMxOSIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjQtMDgtMThUMTM6MjU6MzIuOTE1WiIsImlhdCI6MTcyMzk4NzUzMiwiZXhwIjoxNzIzOTkxMTMyfQ.n7t8d0yfFDkB5cyvOnAt85XwVg1zKhzQIrE9UgedI3Q'

const profile =
  '{"_id":"60f7926b4b93c866d27f1c19","roles":["User"],"email":"abc@gmail.com","createdAt":"2021-07-21T03:20:11.301Z","updatedAt":"2024-05-19T15:31:09.211Z","__v":0,"address":"Tan hoa dongddqwdwqdqTan hoa ","date_of_birth":"2024-04-04T17:00:00.000Z","name":"React Knowledge","phone":"2222222222","avatar":"c54e6769-413d-46c0-9554-278c7543426b.png"}'

beforeEach(() => {
  localStorage.clear()
})

describe('access_token', () => {
  it('access_token được set vào localStorage', () => {
    setAccessTokenToLS(access_token)
    expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('refresh_token', () => {
  it('access_token được set vào localStorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toEqual(refresh_token)
  })
})

describe('profile', () => {
  it('profile được set vào localStorage', () => {
    setProfileToLS(profile as any)
    expect(getProfileFromLS()).toEqual(profile)
  })
})

describe('clearLS', () => {
  it('Xoá hết access_token, refresh_token, profile', () => {
    setRefreshTokenToLS(refresh_token)
    setAccessTokenToLS(access_token)
    // setProfile tại đây
    setProfileToLS(profile as any)
    // ...
    clearLS()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
  })
})
