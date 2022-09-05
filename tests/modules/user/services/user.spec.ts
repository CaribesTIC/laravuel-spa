import { test, vi, expect } from "vitest"
import UserService from "@/modules/User/services"

vi.mock("@/modules/User/services")

describe('UserService', () => {

  it('should fetch users via http-users-service', async () => {

    const users = await UserService.getUsers('query')

    expect(users).toEqual({
      rows: {
		current_page: 1,
		data: [
		  { id: 1, name: "Luke Skywalker", email: "luke@jedi.com", role_id: 1, is_admin: true, avatar: null },
		  { id: 2, name: "Mr. Omari Hills", email: "bradtke.oleta@example.net", role_id: 2, is_admin: false, avatar: null },
		  { id: 3, name: "Burdette Torphy", email: "mjenkins@example.com", role_id: 2, is_admin: false, avatar: null },
		  { id: 4, name: "Alfonzo Kirlin II", email: "ruthe.marvin@example.com", role_id: 2, is_admin: false, avatar: null },
		  { id: 5, name: "Jayce Zemlak", email: "dina.larson@example.com", role_id: 2, is_admin: false, avatar: null }
		],
		first_page_url: "http://localhost:8000/api/users?page=1",
		from: 1,
		last_page: 5,
		last_page_url: "http://localhost:8000/api/users?page=5",
		links: [
			{ url: null, label: "&laquo; Previous", active: false },
			{ url: "http://localhost:8000/api/users?page=1", label: "1", active: true },
			{ url: "http://localhost:8000/api/users?page=2", label: "2", active: false },
			{ url: "http://localhost:8000/api/users?page=3", label: "3", active: false },
			{ url: "http://localhost:8000/api/users?page=4", label: "4", active: false },
			{ url: "http://localhost:8000/api/users?page=5", label: "5", active: false },
			{ url: "http://localhost:8000/api/users?page=2", label: "Next &raquo;", active: false }
		],
		next_page_url: "http://localhost:8000/api/users?page=2",
		path: "http://localhost:8000/api/users",
		per_page: 5,
		prev_page_url: null,
		to: 5,
		total: 21
	  },
	  sort: null,
	  direction: null,
	  search: null
    })
    
  })

  it('should fetch user via http-users-service', async () => {
    const user1 = await UserService.getUser(1)
    const user2 = await UserService.getUser(2)

    expect( user1 ).toEqual({
	  id: 1,
	  name: "Luke Skywalker",
	  email: "luke@jedi.com",
	  avatar: null,
	  isAdmin: true,
	  role_id: 1,
	  emailVerified: null     
    })
    
    expect( user2 ).toEqual({
	  id: 2,
	  name: "Mr. Omari Hills",
	  email: "bradtke.oleta@example.net",
	  avatar: null,
	  isAdmin: false,
	  role_id: 2,
	  emailVerified: "2022-06-06T20:52:29.000000Z"     
    })
    
  })

})
