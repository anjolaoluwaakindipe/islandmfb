<script>
    // svelte native imports
    import {goBack} from 'svelte-native';
    import {navigate} from 'svelte-native';

    // page and component imports
    import TextInput from '../components/TextInput.svelte';
    import Nav from '../components/Nav.svelte';
    import VerificationPage from './VerificationPage.svelte';

    // textfield variables
    let accountNumber;
    let password;
    let confirmPassword;

    const navigation = () => navigate({page:VerificationPage})
</script>

<page actionBarHidden= "true" class="background">
    <flexboxLayout flexDirection="column">
        <!-- Nav Bar Component -->
        <Nav>
            <image on:tap={goBack} class="goback" src={"~/images/goback.png"}/>
        </Nav>

        
        <flexboxLayout flexDirection="column" class="container">
            <!-- scrollabel area -->
            <scrollView orientation="vertical" class="content-container" scrollBarIndicatorVisible={false} >
                <flexboxLayout flexDirection="column">
                    <!-- Header Text -->
                    <label class="text text-header" textWrap=true>
                        <formattedString>
                            <span text="Set Profile" />
                        </formattedString>
                    </label>

                    <!-- Info text -->
                    <label class="text-light text-subinfo" textWrap=true>
                        <formattedString>
                            <span text="Set up your online Profile with Island MFB account by providing the details below." />
                        </formattedString>
                    </label>

                    <!-- Three TextFields -->
                    <flexboxLayout flexDirection="column" marginTop="30">
                        <TextInput bind:textFieldValue={accountNumber}  label="Account Number" hint="Enter your account number"/>
                        <TextInput bind:textFieldValue={password}  label="Enter Password" hint="**********"/>
                        <TextInput bind:textFieldValue={confirmPassword}  label="Confirm Password" hint="**********"/>
                    </flexboxLayout>
                </flexboxLayout>
            </scrollView>
             
            <flexboxLayout class="button-container" alignItems="center">
                <!-- Button that should save textField data and navigate user to the VerificationPage -->
                <button class="btn text-bold custom-button" text="Set up Profile" on:tap={navigation}/>
            </flexboxLayout>
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
    .content-container{
        height: 80%;
    }
    .button-container{
        height: 20%;
    }
</style>