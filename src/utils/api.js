const route = 'https://reqres.in/api/users/';

export const fetchUserList = async (pageNumber) => {
    try {
        const response = await fetch(route + '?page=' + pageNumber, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users list:', error);
        throw error;
    }
};

export const createUser = async (data) => {
    try {
        const response = await fetch(route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error create user:', error);
        throw error;
    }
};

export const editUser = async (userData) => {
    const userId = userData.userId
    const data = userData.userData
    try {
        const response = await fetch(route + userId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error edit user:', error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await fetch(route + userId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        if (response.status !== 204) {
            return await response.json();
        }
    } catch (error) {
        console.error('Error delete user:', error);
        throw error;
    }
};

export const getUser = async (userId) => {
    try {
        const response = await fetch(route + userId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 404) {
            return 404;
        }

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error get user:', error);
        throw error;
    }
};