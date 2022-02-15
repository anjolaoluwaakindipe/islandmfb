<script>
import { tick } from "svelte";



    let firstDigit ;
    let secondDigit ;
    let thirdDigit;
    let fourthDigit ;

    let textChange = async (args, inputNumber, inputNumberState) =>{
        
        if (inputNumber===1){
            let nextfield = this.page.getViewById('digit2')
            nextfield.focus()
        }
    }

    let onFocusHandler = (args)=>{
        args.object.text = ""
    }

    $: console.log(firstDigit);

    export let pin;

    $: pin = firstDigit + secondDigit+ thirdDigit+ fourthDigit;
</script>

<flexboxLayout class="container" alignItems="center"  >
    <flexboxLayout  class="input-container" alignItems="center">
        <textField id="digit1" keyboardType="number" maxLength="{1}" on:focus={onFocusHandler} class="text" hint="*" bind:text="{firstDigit}" on:textChange={(args)=>textChange(args,1)}/>
    </flexboxLayout>
    <flexboxLayout  class="input-container" alignItems="center" >
        <textField id="digit2"  keyboardType="number" maxLength="{1}" class="text" hint="*" bind:text={secondDigit}/>
    </flexboxLayout>
    <flexboxLayout  class="input-container" alignItems="center" >
        <textField id="digit3"  keyboardType="number" maxLength="{1}" class="text" hint="*"  bind:text={thirdDigit} />
    </flexboxLayout>
    <flexboxLayout class="input-container" alignItems="center">
        <textField id="digit4" keyboardType="number" maxLength="{1}" class="text" hint="*" bind:text={fourthDigit}/>
    </flexboxLayout>
</flexboxLayout>


<style>
    .container{
        width: 100%;
    }
    textField{
        border-color: transparent  ;
        border-width: 1px;
        border-style: solid;
        font-size: 17;
        placeholder-color: grey;
    }
    .input-container{
        background-color: #F1F1F1 ;
        border-radius: 15px;
        padding: 10px 10px ;
        margin-right: 20;
    }
</style>