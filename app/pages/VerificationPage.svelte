<script>
    import Nav from '~/components/Nav.svelte';
    import {goBack} from 'svelte-native';
    import DigitInput from '~/components/DigitInput.svelte';
    import {navigate} from 'svelte-native'
    import SuccessPage from './SuccessPage.svelte';

    const verifyPinHandler = () =>{
        navigate({page: SuccessPage})
    }
</script>

<page class="background" actionBarHidden="true">
    <flexboxLayout flexDirection="column">
        <Nav>
                <image on:tap={goBack} class="goback" src={"~/images/goback.png"}/>
        </Nav>

        <flexboxLayout flexDirection="column" class="container">
            <flexboxLayout flexDirection="column" class="content-container">
                <label class="text text-header">
                    <formattedString>
                        <span text="Verification"/>
                    </formattedString>
                </label>
                <label class="text-light text-subinfo" textWrap="true" >
                    <formattedString>
                        <span text="Enter 4 digit code we sent to the mobile number linked to your account"/>
                    </formattedString>
                </label>

                <DigitInput/>

                <label class="text-light text-resend" textWrap="true">
                    <formattedString>
                        <span style="color: #BC4B52;" text="Resend code"/>
                    </formattedString>
                </label>
            </flexboxLayout>

            <flexboxLayout class="button-container">
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
        height: 100%;
        align-items: flex-end;
        padding-bottom: 55;
    }
    .content-container{
        height: 100%;
    }
</style>