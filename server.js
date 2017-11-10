const express = require('express');
const app = express();

const port = process.env.port || 3000;


app.get("*",(req,res) => {
res.write("hello world !");
res.end();
})

app.listen(port,() => {
	console.log(`server start at http://localhost:${port}`);
});
