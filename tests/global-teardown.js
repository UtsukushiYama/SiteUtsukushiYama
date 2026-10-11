const fs=require('node:fs');
module.exports=async()=>{fs.rmSync('storage/test-runtime',{recursive:true,force:true});fs.rmSync('storage/test-fixtures.json',{force:true});};
