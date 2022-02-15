<script>
    import TextInput from '~/components/TextInput.svelte';
    import Login from '~/pages/Login.svelte';
    import {navigate} from 'svelte-native';
    import Home from '~/pages/Home.svelte';
    import authRequest from '~/requests/authRequest';
import { userStore } from '~/store/userStore';
    let username;
    let email;
    let firstName;
    let lastName
    let password;

    const onClick= () =>{
        authRequest.getAdminToken().then((adminTokenData)=>{
            authRequest.registerUser(firstName, lastName, email, username, password, adminTokenData['access_token'] ).then(()=>{
            authRequest.loginUser(username, password).then(tokenData=>{
                authRequest.getUser(tokenData["access_token"]).then(userData=>{
                    if(userData.error) return
                    userStore.loadUser(userData);
                    if($userStore){
                        return navigate({page: Home});
                    }
                })
            })
        })
        })
        
    }
</script>


<page>
    <flexboxLayout flexDirection="column" justifyContent="center" alignItems="center">
        <TextInput bind:textFieldValue={username} hint="Enter your username"/>
        <TextInput bind:textFieldValue={firstName} hint="Enter your first name"/>
        <TextInput bind:textFieldValue={lastName} hint="Enter your last name"/>
        <TextInput bind:textFieldValue={email} hint="Enter your email"/>
        <TextInput bind:textFieldValue={password} hint="Enter your password"/>
        <button text="LOGIN" on:tap={onClick}/>

        <label class="text-light text-subinfo" textWrap=true  on:tap={  ()=>navigate({page: Login})}>
                <formattedString>
                    <span style= "color: green;" text={`Sign in`} />
                </formattedString>
        </label>
    </flexboxLayout>
</page>