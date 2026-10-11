const {execFileSync}=require('node:child_process');const fs=require('node:fs');
module.exports=async()=>{
  fs.mkdirSync('storage/test-runtime',{recursive:true});
  const result=execFileSync('php',['tools/test-fixtures.php'],{encoding:'utf8',env:{...process.env,UY_DB_DATABASE:'uy_test_db'}});
  const panel=execFileSync('php',['painel-placar/tools/test-fixtures.php'],{encoding:'utf8',env:{...process.env,PP_DB_DATABASE:'uy_test_db'}});
  fs.writeFileSync('storage/test-fixtures.json',JSON.stringify({...JSON.parse(result),panelPassword:JSON.parse(panel).password}),{mode:0o600});
};
