const http = require('http');
const port = 8000;

const server = http.createServer((req,res)=>{
    res.writeHead(200);
    if(req.url === '/'){
        res.write('<html><body><h2>Anda berada pada halaman index</h2></body></html>');
    }
    else if(req.url === '/siswa'){
        res.write('<html><body><h2>Anda berada pada halaman siswa</h2></body></html>');
    }
    else if(req.url === '/dosen'){
        res.write('<html><body><h2>Anda berada pada halaman dosen</h2></body></html>');
    }
    else if (req.url === '/admin'){
        res.write('<html><body><h2>Anda berada pada halaman admin</h2></body></html>');
    }
    else{
        res.write('<html><body><h2>Halaman tidak ditemukan</h2></body></html>');
    }
});
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});