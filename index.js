const express = require('express')

const app = express()

app.get('',(req,res)=>{
	console.log('访问ip>>',req.ip)
	res.json({data:'hello world',ip: req.ip})
})

app.listen(4000)
