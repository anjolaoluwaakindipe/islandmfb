<script>
    // svelte imports
    import {goBack, navigate} from 'svelte-native';

    // component imports
    import Nav from '~/components/Nav.svelte';
    import TextInput from '~/components/TextInput.svelte';

    // requests
    import authRequest from "~/requests/authRequest";

    // store
    import {authStore} from '~/store/authStore';
import HomePage from './HomePage.svelte';

    let loginId;
    let password;

    const loginHandler= async ()=>{
        await authRequest.loginUser(loginId, password).then((data)=>{
            if (data.error) return
            authStore.setToken(data).then(()=>{
                navigate({page: HomePage,});
            })
        })
    };

</script>

<page actionBarHidden = {true}>
    <flexboxLayout flexDirection="column">
        <!-- Nav Bar Component -->
        <Nav>
            <image on:tap={goBack} class="goback" src={"~/images/goback.png"}/>
        </Nav>


            <flexboxLayout flexDirection="column" class="container" justifyContent="center">
                <flexboxLayout class='image-container'>
                    <image src={"~/images/logo.png"}/>
                </flexboxLayout>
                
                <label textWrap=true class="text info-text" text={"Use your email address, phone number or account number as your login id"}/>
                    <flexboxLayout flexDirection="column" marginTop="10" style='color: grey;'>
                        <TextInput className="top" bind:textFieldValue={loginId}  label="Login ID" hint="Enter your Login ID"/>
                        <TextInput bind:textFieldValue={password}  label="Enter Password" hint="**********"/>
                        <label class="text-light forgot-password-text" text = {"Forgot Password?"} />
                    </flexboxLayout>

                <button class="btn text-bold custom-button" text={"Sign In"} on:tap={loginHandler}/>
                
                    <flexboxLayout flexDirection="row" marginTop="15" justifyContent="center">
                        <label class="text under-info-text" text= {"Don't have an account? "} />
                        <label class= "text under-info-text" text = {"Get Started"} style = "color: #63B861;"/>
                    </flexboxLayout>
                
            </flexboxLayout>
    </flexboxLayout>
</page>


<style>
    .container{
        padding: 0 29;
        height: 100%;
        color: #333333;
    }
    .image-container{
    
        height: 20%;
        margin-bottom: -50;
    }
    .custom-button{
        margin: 0;
    }
    image{
        height: auto;
        width: 120;
        margin-bottom: 70;
    }
    .info-text{
        color: grey;
        font-size: 17;
    }
    .forgot-password-text{
        font-size: 14;
        margin-top: -35;
        color: grey;
    }
    .forgot-password-text:hover{
        color: red;
    }
    button{
        margin-top: 30;
    }
    .under-info-text{
        font-size: 14;
    }
  
</style>