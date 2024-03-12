const mongoose= require ('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("mongoDb Atlas successfullly connected with pf server");
}).catch((err)=>{
    console.log(`MongoDb connection Failed ! error:${err}`);
})