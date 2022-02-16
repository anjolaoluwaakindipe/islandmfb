<script>
    // svelte imports
    import {goBack} from 'svelte-native';
    import {navigate} from 'svelte-native';

    // page and component imports
    import Nav from '~/components/Nav.svelte';
    import DigitInput from '~/components/DigitInput.svelte';
    import SuccessPage from './SuccessPage.svelte';

    // Button handler
    const verifyPinHandler = () =>{
        navigate({
            page: SuccessPage, 
            props:{
                subInfoText: "You have successfully signed up your account in our app and can start using",
                buttonText: "Start using"
            }}
        );
    }
</script>

<page class="background" actionBarHidden="true">
    <flexboxLayout flexDirection="column">
        <!-- NavBar component -->
        <Nav>
                <!-- Back button -->
                <image on:tap={goBack} class="goback" src={"~/images/goback.png"}/>
        </Nav>

        <flexboxLayout flexDirection="column" class="container">
            <flexboxLayout flexDirection="column" class="content-container" >
                <!-- Header Text -->
                <label class="text text-header">
                    <formattedString>
                        <span text="Verification"/>
                    </formattedString>
                </label>

                <!-- Info Text -->
                <label class="text-light text-subinfo" textWrap="true" >
                    <formattedString>
                        <span text="Enter 4 digit code we sent to the mobile number linked to your account"/>
                    </formattedString>
                </label>

                <!-- Verification Pin input -->
                <DigitInput/>

                <label class="text-light text-resend" textWrap="true">
                    <formattedString>
                        <span style="color: #BC4B52;" text="Resend code"/>
                    </formattedString>
                </label>
            </flexboxLayout>

            <!-- Button to save verification pin and navigate to the success page -->
            <flexboxLayout class="button-container" alignItems="center">
                <button text="Continue" class="btn text-bold custom-button" on:tap={verifyPinHandler}/>
            </flexboxLayout>
        </flexboxLayout>
    </flexboxLayout>
</page>

<style>
    .text-header{
        font-size: 30;
    }
    .container{
        height: 100%;
        padding: 0 29;
        padding-top: 20;
    }
    .text-subinfo{
        font-size: 17;
        margin-bottom: 20
    }
    .custom-button{
        margin: 0;

    }
    .text-resend{
        font-size: 17;
        margin-top: 20;
    }
    .button-container{
        height: 20%;
        align-items: flex-end;

    }
    .content-container{
        height: 80%;
    }
</style>