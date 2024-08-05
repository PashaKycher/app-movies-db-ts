

const initialState = {
    top: [
        {
            id: 1,
            title: "The Shawshank Redemption",
            popularity: 9.2,
            overview: "Two imprisoned men bond over",
            year: 1994
        },
        {
            id: 2,
            title: "The Godfather",
            popularity: 8.6,
            overview: "Dreams of passion and bloody crime",
            year: 1972
        },
        {
            id: 3,
            title: "The Godfather: Part II",
            popularity: 7.4,
            overview: "Comedy about the organized crime",
            year: 1974
        },
        {
            id: 4,
            title: "The Dark Knight",
            popularity: 5.5,
            overview: "blockbuster movie",
            year: 2008
        },
    ]
};
function moviesReducer(state = initialState, action) {
    // switch (action.type) {
    //     case "ADD_MOVIES":
    //         return action.movies;
    //     default:
            return state;
    
}

export default moviesReducer