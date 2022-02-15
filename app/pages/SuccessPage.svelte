<script>
    import Nav from '~/components/Nav.svelte';
    import {goBack} from 'svelte-native';
</script>

<page actionBarHidden = {true}>
    <flexboxLayout flexDirection="column">
        <Nav>
                <image on:tap={goBack} class="goback" src={"~/images/goback.png"}/>
        </Nav>

        <flexboxLayout flexDirection="column" class="container" >
            <image src={"~/images/success.png"} class="success-image"/>
            <label class="text text-header">
                    <formattedString>
                        <span text="Success!"/>
                    </formattedString>
                </label>
                <label class="text-light text-subinfo" textWrap="true" >
                    <formattedString>
                        <span text="You have successfully signed up your account in our app and can start using"/>
                    </formattedString>
            </label>
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
    }
</style>