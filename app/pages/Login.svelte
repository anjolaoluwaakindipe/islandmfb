<script>
    import TextInput from "~/components/TextInput.svelte";
    import {navigate} from 'svelte-native';
    import Home from './Home.svelte'
    import { authStore} from "../store/authStore";
    import authRequest from '../requests/authRequest'
import { userStore } from "~/store/userStore";
import SignUp from "./SignUp.svelte";
    let username;
    let password;

    const onClick = async () =>{
        authRequest.loginUser(username, password)
        .then(loginTokenData => {
            authRequest.getUser(loginTokenData["access_token"])
            .then((userData)=>{
                console.log(userData);
                    if(userData.error) return;
                    userStore.loadUser(userData);
                    if ($userStore){
                        navigate({page: Home})
                    }
                
            
            })
        })
    }
</script>


<page>
    <flexboxLayout flexDirection="column" justifyContent="center" alignItems="center">
        <TextInput bind:textFieldValue={username} hint="Enter your username"/>
        <TextInput bind:textFieldValue={password} hint="Enter your password"/>
        <button text="LOGIN" on:tap={onClick}/>

        <label class="text-light text-subinfo" textWrap=true  on:tap={  ()=>navigate({page: SignUp})}>
                <formattedString>
                    <span style= "color: green;" text={`Sign up`} />
                </formattedString>
        </label>
    </flexboxLayout>
</page>




<button text="Login" on:tap={onClick}/>

