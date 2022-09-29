const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile("file.txt","Hello",(err)=>{
		 console.log(err)
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile("./file.txt","utf-8",(err,data)=>{
		if(err) console.log(err)
	  console.log(data)  
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile("./file.txt","World",(err)=>{
		console.log(err)
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink("./file.txt",(err)=>{
		console.log(err)
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader,myFileDeleter }
