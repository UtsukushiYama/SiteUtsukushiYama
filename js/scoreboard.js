/* Shared scoreboard identity, validated on the server before HTML is returned. */
function checkAuth(){return window.KyokushinLoginSystem.getCurrentUser();}
function logout(){window.KyokushinLoginSystem.logout();}
function setupUserLogo(user){for(const id of ['userLogo','speedDialLogo']){const image=document.getElementById(id);if(image)image.src=user?.logo||'img/about.png';}}
