const mongoose = require('mongoose')

module.exports = async ()=>{
    try{
        await mongoose.connect(process.env.DB_CONNECTION_STRING,{ useNewUrlParser: true,useUnifiedTopology: true });
        console.log('Connected To Database...');
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}