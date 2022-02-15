<script>
import {goBack} from 'svelte-native';
import TextInput from '../components/TextInput.svelte';
import Nav from '../components/Nav.svelte';
import {navigate} from 'svelte-native'
import VerificationPage from './VerificationPage.svelte';

let accountNumber;
let password;
let confirmPassword;

const navigation = () => navigate({page:VerificationPage})
</script>

<page actionBarHidden= "true" class="background">
    <flexboxLayout flexDirection="column">

        <Nav>
            <image on:tap={goBack} class="goback" src={"~/images/goback.png"}/>
        </Nav>

        
        <flexboxLayout flexDirection="column" class="container">
            <scrollView orientation="vertical">
                <flexboxLayout flexDirection="column">
                    <label class="text text-header" textWrap=true>
                        <formattedString>
                            <span text="Set Profile" />
                        </formattedString>
                    </label>

                    <label class="text-light text-subinfo" textWrap=true>
                        <formattedString>
                            <span text="Set up your online Profile with Island MFB account by providing the details below." />
                        </formattedString>
                    </label>

                    <flexboxLayout flexDirection="column" marginTop="30">
                        <TextInput bind:textFieldValue={accountNumber}  label="Account Number" hint="Enter your account number"/>
                        <TextInput bind:textFieldValue={password}  label="Enter Password" hint="**********"/>
                        <TextInput bind:textFieldValue={confirmPassword}  label="Confirm Password" hint="**********"/>
                    </flexboxLayout>
                </flexboxLayout>
            </scrollView>
            
            <button class="btn text-bold custom-button" text="Set up Profile" on:tap={navigation}/>
            
        </flexboxLayout>
    </flexboxLayout>
</page>


<style>
    .container{
        height: 100%;
        padding: 0 29;
    }
    .text-header{
        font-size: 30;
        margin-top: 20;
    }
    .text-subinfo{
        font-size: 17;
    }
    .custom-button{
        margin: 0 ;
    }
</style>