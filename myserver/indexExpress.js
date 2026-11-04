let express = require('express');

let app = express();
const port = 8000;
app.get('/', (req,res)=>{
    res.writeHead(200);
    res.write('<h1>Hello Express</h1>');
    res.end();
});
var server = app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
})