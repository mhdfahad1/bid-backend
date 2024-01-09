const mongoose=require('mongoose')
const connectioString =process.env.DATABASE
mongoose.connect(connectioString).then(()=>{
    console.log('bio winner server connected successfully with mongoDb atlas');
}).catch((err)=>{
    console.log(`mongoDb connection failed ${err}`);
})

