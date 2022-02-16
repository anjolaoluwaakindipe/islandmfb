<script>
    // svelte imports
    import { goBack } from "@nativescript/core/ui/frame/frame-common";

    // page and component imports
    import Nav from "~/components/Nav.svelte";
    import OptionButton from "~/components/OptionButton.svelte";
</script>

<page class="background" actionBarHidden=true>
    <flexboxLayout flexDirection="column">
            <!-- NavBar component -->
        <Nav>
                <!-- Back button -->
                <image on:tap={goBack} class="goback" src={"~/images/goback.png"}/>
        </Nav>

        <flexboxLayout flexDirection="column" class="container">
            <!-- Header Text -->
            <label class="text text-header">
                <formattedString>
                        <span text="Account Type"/>
                </formattedString>
            </label>

            <!-- Info Text -->
            <label class="text-light text-subinfo" textWrap="true" >
                <formattedString>
                    <span text="Select an acount Type"/>
                </formattedString>
            </label>

            <!-- Options for Account Types -->
            <OptionButton optionName="Savings Account"/>
            <OptionButton optionName="Current Account"/>
        </flexboxLayout>
    </flexboxLayout>
</page>


<style>
    .text-header{
        font-size: 30;
        margin-top: 10;
        margin-bottom: 0;
    }
    .container{
        height: 100%;
        padding: 0 29;
        padding-top: 20;
    }
    .text-subinfo{
        font-size: 17;
        margin-bottom: 30;
    }
</style>