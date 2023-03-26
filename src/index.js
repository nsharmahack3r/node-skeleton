const express=require('express')
const userRoutes = require('./routes/user');
const noteroute = require('./routes/note')
const app = express()
const PORT=3000

app.use(express.json());
app.use('/user', userRoutes);
app.use('/note',noteroute)
app.listen(PORT,()=>{
    console.log("seerverr listen at the port 3000");
}) 