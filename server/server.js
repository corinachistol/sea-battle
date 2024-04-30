import express from 'express';
const app = express();
const port = 5500;





app.get('/', (req,res)=>{
    res.send("Hello Exppress JS!")
});

// let coordinates = getCoords();
// console.log(coordinates)
app.listen(port ,()=>{
    console.log(`Server is running on ${port}! `)
})


app.get('/shoot', (req,res) => {
    console.log(req.query.shoot)
    let {shoot} = req.query
    console.log(shoot)

    res.send({message:"coordinates received", shoot})

})    



