const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/safeBodaRiders",{
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

const db = mongoose.connection;
if (!db){
    console.log("Error connecting to your database");
}
else{
    console.log("Successfully connected to your database");
}