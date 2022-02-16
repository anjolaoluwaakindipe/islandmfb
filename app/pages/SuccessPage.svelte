<script>
    // svelte imports
    import {goBack, navigate} from 'svelte-native';

    // component imports
    import Nav from '~/components/Nav.svelte';
    
    //props
    export let subInfoText;
    export let buttonText;
    export let nextPage

    const navigation = ()=> navigate({page: nextPage})
</script>

<page actionBarHidden = {true}>
    <flexboxLayout flexDirection="column">
        <!-- NavBar -->
        <Nav>
                <!-- Go back button -->
                <image on:tap={goBack} class="goback" src={"~/images/goback.png"}/>
        </Nav>

        <flexboxLayout flexDirection="column" class="container" justifyContent="center" >
            <flexboxLayout flexDirection="column" class="content-container" justifyContent="center">
                <!-- Success Image -->
                <image src={"~/images/success.png"} class="success-image"/>

                <!-- Header Text -->
                <label class="text text-header">
                        <formattedString>
                            <span text="Success!"/>
                        </formattedString>
                    </label>

                <!-- Info Text -->
                <label class="text-light text-subinfo" textWrap="true" >
                    <formattedString>
                        <span text={subInfoText}/>
                    </formattedString>
                </label>
            </flexboxLayout>
            <!-- button that navigates to a dynamic page because of the prop nextPage -->
            <flexboxLayout  class="button-container" alignItems="center">
                <button class="btn text-bold custom-button" text={buttonText} on:tap={navigation}/>
            </flexboxLayout>
        </flexboxLayout>
    </flexboxLayout>
</page>

<style>
    .container{
        padding: 0 29;
        height: 100%;
    }
    .success-image{
        height: auto;
        width: 30%;
    }
    .text-header{
        font-size: 30;
        text-align: center;
        margin-top: 30;
    }
    .text-subinfo{
        font-size: 17;
        text-align: center;
    }
    .content-container{
        height: 80%;
    }
    .button-container{
        height: 20%;
    }
    .custom-button{
        margin: 0;
    }
</style>