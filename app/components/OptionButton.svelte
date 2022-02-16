<script>    

    export let optionName
</script>

<flexboxLayout class="option-container">
    <image src={"~/images/optionssymbol.png"} class="option-image"/>

    <label class="text option-name" textWrap=true>
        <formattedString>
            <span text={optionName}/>
        </formattedString>
    </label>
</flexboxLayout>

<style>
    .option-container{
        
    }
    .option-image{

    }
    .option-name{

    }
</style>