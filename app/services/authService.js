export const loginService = () =>{
     authRequest.loginUser(username, password).then((loginTokenData) => {
       authRequest.getUser(loginTokenData["access_token"]).then((userData) => {
         console.log(userData);
         if (userData.error){
             return ({
                 error: us
             })
         };
         userStore.loadUser(userData);
         if ($userStore) {
           navigate({ page: Home });
         }
       });
     });
}