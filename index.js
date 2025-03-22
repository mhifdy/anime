const express = require('express');
const app = express();
const port = 3600

const option_page={
    root:"./pages",
    headers:{}
}

app.use('/img',express.static('./assets'))
app.use('/character',express.static('./pages'))
app.use('/about',express.static('./pages'));
app.use('/css',express.static('./assets'));
app.use('/applib',express.static('./node_modules'));
app.get('/',(req,res)=>{
    res.sendFile('index.html',option_page)
});


app.listen(port,()=>{
    console.log(`app ini sudah berjalan pada port ${port}`)
});