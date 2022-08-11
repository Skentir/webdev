const {UserList} = require("../testData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users() {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user
        }
    }
}

module.exports = {resolvers};