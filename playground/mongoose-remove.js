const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5a89cb255048d69b6382190d'}).then((todo) => {

});

Todo.findByIdAndRemove('5a89cb255048d69b6382190d').then((todo) => {
    console.log(todo);
});