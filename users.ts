export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
}

export const users: User[] = [
    {
        "id": '1',
        "name": "Jeanette",
        "email": "jpenddreth0@census.gov",
        "password": "26.58.193.2"
    }, {
        "id": '2',
        "name": "Giavani",
        "email": "gfrediani1@senate.gov",
        "password": "229.179.4.212"
    }, {
        "id": '3',
        "name": "Noell",
        "email": "nbea2@imageshack.us",
        "password": "18066162255"
    }, {
        "id": '4',
        "name": "Willard",
        "email": "wvalek3@vk.com",
        "password": "67.76.188.26"
    }
]

export const loginUser = (user: User) => {
    const existingUser = users.find((u) => u.email === user.email && u.password === user.password)
    if (!existingUser) {
        users.push(user)
    }
}

export const findUser = (id: string) => {
    const
}

export const findUserByEmailPassword = (email: string, password: string) => {
}

export const deleteUser = (id: string) => {
}