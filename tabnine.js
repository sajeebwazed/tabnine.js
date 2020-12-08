let employess =[
    {
        name:'sajeeb'
        position:'div instructor'
        ID:'2020'
        favorite_color:'orange'
    }
]


const express = require('express');
const app = express();
const path = process.env.PATH || '8080'; 

app.get('/' (req, res) => {
    res.send('hello tabnine')  
})

app.listen(port, () => {
    console.log('listening at port' port);
})


