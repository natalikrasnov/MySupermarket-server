const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
/*
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // useUnifiedTopology: true,
    useFindAndModify:false
})
*/

const uri = "mongodb+srv://natali-krasnov_supermarket:YyDFlzB2fL8tWV9@clustersupermarket-tyyvf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
