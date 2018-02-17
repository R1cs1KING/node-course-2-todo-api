//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //many
    // db.collection('Todos').deleteMany({text: 'cook'}).then((result) => {
    //     console.log(result);
    // });

    //one
    // db.collection('Todos').deleteOne({text: 'lol'}).then((result) => {
    //      console.log(result);
    //  });

    //find and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }) 
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a8865ed212199d9c8155a9d')
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});