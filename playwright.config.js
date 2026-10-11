const { defineConfig } = require('@playwright/test');
const path=require('node:path');
module.exports=defineConfig({
  testDir:'./tests',timeout:45000,workers:2,fullyParallel:false,
  globalSetup:require.resolve('./tests/global-setup.js'),globalTeardown:require.resolve('./tests/global-teardown.js'),
  use:{baseURL:'http://127.0.0.1:8081',headless:true,launchOptions:{...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']},trace:'retain-on-failure'},
  webServer:[
    {command:'php -S 127.0.0.1:8081 tools/dev-router.php 2> storage/test-server.log',url:'http://127.0.0.1:8081/api/check-session.php',reuseExistingServer:false,env:{...process.env,UY_DB_DATABASE:'uy_test_db',PP_DB_DATABASE:'uy_test_db',UY_STORAGE_DIR:path.resolve('storage/test-runtime')},timeout:30000},
    {command:'php -S 127.0.0.1:8082 -t painel-placar painel-placar/tools/dev-router.php 2> storage/test-panel-server.log',url:'http://127.0.0.1:8082/api/check-session.php',reuseExistingServer:false,env:{...process.env,PP_DB_DATABASE:'uy_test_db'},timeout:30000}
  ],
  reporter:[['list'],['html',{open:'never'}]]
});
