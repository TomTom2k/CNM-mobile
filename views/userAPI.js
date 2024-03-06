const userApi = {
    getMe: () => {
        return fetch('https://6571a1fed61ba6fcc01322aa.mockapi.io/user')
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching data: ', error);
                return error;
            });
    }
}

export default userApi;