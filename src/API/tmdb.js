
async function get(URL) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDRjZGIwNTIwZmQyNDFkODE0OTk2ODUyNDhmNGFjYSIsIm5iZiI6MTcyMjg4NTgzMS43MDIwOTMsInN1YiI6IjY2YjEyM2Y1NGU2ZDJiZmM2NGViNzhjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YuRXRhLOTXrJWP56y2CctvQK-psSWGyZtK2R3cSKYN4'
        },
    };

    const response = await fetch(`https://api.themoviedb.org/3${URL}`, options)
    const json = response.json();
    return json
}


export const client = {
    async getConfigeration() {
        return await get("/configuration");
    },
    async getNowPlaying() {
        return await get('/movie/now_playing?language=en-US&page=1')
    }
} 