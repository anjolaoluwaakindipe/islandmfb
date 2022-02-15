<script>
import { FlexboxLayout } from "@nativescript/core";


    export let label;
    export let textFieldValue;
    export let hint;
</script>

<flexboxLayout flexDirection="column" class="container">
    <label class="text text-subinfo" textWrap=true>
        <formattedString>
                <span bind:text={label} />
        </formattedString>
    </label>

    <flexboxLayout flexDirection="row" class="textinput-container text" alignItems="center">
        <textField bind:text="{textFieldValue}" bind:hint={hint} />
    </flexboxLayout>
</flexboxLayout>

<style>
    .container{
        width: 100;
        font-size: 17;
    }
    textField{
        width: 100%;
        border-color: transparent;
        placeholder-color: grey;
        font-size: 17;
        margin: 0;
    }
    textField:active{
        border-color: transparent
    }
    .textinput-container{
        background-color: #F1F1F1 ;
        border-radius: 15px;
        padding: 10 15;
    }
</style>