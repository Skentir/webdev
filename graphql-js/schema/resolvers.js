const {UserList, MovieList} = require("../testData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users() {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            // Convert string to Number
            const user = _.find(UserList, {id: Number(id)});
            return user
        },
        movies: () => {
            return MovieList
        },
        movie: (parent, args) => {
            const name = args.name;
            const user = _.find(MovieList, {name: name});
            return user
        }
    },
    User: {
        favoriteMovies:() => {
            return  _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication < 2010)
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length-1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },

        updateUsername : (parent, args) => {
            const {id, newUsername} = args.input;
            let userUpdated;
            UserList.forEach((user)=> {
                if (user.id === Number(id)) {
                    user.username = newUsername;
                    userUpdated = user
                }
            });
            return userUpdated;
        }
    }
}

module.exports = {resolvers};