/* eslint-disable prettier/prettier */
import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, graphql, rest } from "msw";
import config from "./src/constants/config";
import HttpStatusCode from "./src/constants/httpStatusCode.enum";

const loginRes = {
  message: "Đăng nhập thành công",
  data: {
    access_token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTg4MDk5YTcxYTZjMDI5ZGVjMTUyOSIsImVtYWlsIjoiYXNkYXNkQGdtYXNkLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjQtMDgtMjNUMDQ6MDA6NDUuMTgwWiIsImlhdCI6MTcyNDM4NTY0NSwiZXhwIjoxNzI0OTkwNDQ1fQ.PU4N7_LQft8QtTLfbKNFF0CEPFZ_F1Tgs49LUA91V1o",
    expires: 604800,
    refresh_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTg4MDk5YTcxYTZjMDI5ZGVjMTUyOSIsImVtYWlsIjoiYXNkYXNkQGdtYXNkLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjQtMDgtMjNUMDQ6MDA6NDUuMTgwWiIsImlhdCI6MTcyNDM4NTY0NSwiZXhwIjoxNzMzMDI1NjQ1fQ.RYVS5jOGZdT831WtzKiB2VYpp0D-RsMqfSCC3XdmriY",
    expires_refresh_token: 8640000,
    user: {
      _id: "65e88099a71a6c029dec1529",
      roles: ["User"],
      email: "asdasd@gmasd.com",
      createdAt: "2024-03-06T14:41:29.154Z",
      updatedAt: "2024-05-14T07:44:52.035Z",
      __v: 0,
      name: "Truc",
      avatar: "b1a1441d-49e0-4087-b0a7-9bee3ad59a42.jpeg",
      address: "273 adv",
      date_of_birth: "2002-05-19T17:00:00.000Z",
      phone: "012345678123",
    },
  },
};

export const restHandlers = [
  rest.post(`${config.baseUrl}login`, (req, res, ctx) => {
    return res(ctx.status(HttpStatusCode.Ok), ctx.json(loginRes));
  }),
];

const graphqlHandlers = [
  graphql.query("ListPosts", () => {
    return HttpResponse.json({
      data: { posts },
    });
  }),
];

const server = setupServer(...restHandlers, ...graphqlHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
