const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5a8956f9502217edbd7b2096';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '5a88b715f8a53ce5f3bcd5bb';

if(!ObjectID.isValid(userId)) {
    console.log('ID not valid');
}

User.findById(userId).then((user) => {
        if(!user) {
            return console.log('Id not found');
        }
        console.log('User By Id', user);
}).catch((e) => console.log(e));