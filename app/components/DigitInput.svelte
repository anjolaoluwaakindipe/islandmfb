<script>
import { onMount, tick } from "svelte";



    let firstDigitValue ;
    let secondDigitValue;
    let thirdDigitValue;
    let fourthDigitValue;

    let firstDigitField;
    let secondDigitField;
    let thirdDigitField;
    let fourthDigitField;

    let textChange = async (args, inputNumber, inputNumberState) =>{
        
        if (inputNumber===1){
            let nextfield = this.page.getViewById('digit2')
            nextfield.focus()
        }
    }

    let onFocusHandler = (args)=>{
        args.object.text = ""
    }

    onMount(()=>{
        firstDigitField.object.focus();
    })

    $: console.log(firstDigitValue);

    export let pin;

    $: pin = firstDigitValue + secondDigitValue+ thirdDigitValue+ fourthDigitValue;
</script>

<flexboxLayout class="container" alignItems="center"  >
    <flexboxLayout  class="input-container" alignItems="center">
        <textField bind:this={firstDigitField} id="digit1" keyboardType="number" maxLength="{1}" on:focus={onFocusHandler} class="text" hint="*" bind:text="{firstDigitValue}" on:textChange={(args)=>textChange(args,1)}/>
    </flexboxLayout>
    <flexboxLayout  class="input-container" alignItems="center" >
        <textField bind:this={secondDigitField} id="digit2"  keyboardType="number" maxLength="{1}" class="text" hint="*" bind:text={secondDigitValue}/>
    </flexboxLayout>
    <flexboxLayout  class="input-container" alignItems="center" >
        <textField bind:this={thirdDigitField} id="digit3"  keyboardType="number" maxLength="{1}" class="text" hint="*"  bind:text={thirdDigitValue} />
    </flexboxLayout>
    <flexboxLayout class="input-container" alignItems="center">
        <textField bind:this={fourthDigitField} id="digit4" keyboardType="number" maxLength="{1}" class="text" hint="*" bind:text={fourthDigitValue}/>
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