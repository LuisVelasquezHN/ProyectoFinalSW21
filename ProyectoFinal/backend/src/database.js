const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb+srv://lavg:12345qwerty@cluster0.jryxq.mongodb.net/ProyectoSW21?retryWrites=true&w=majority';

mongoose.connect(URI, {
    //useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
