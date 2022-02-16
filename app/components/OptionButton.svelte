<script>    

    export let optionName
</script>

<flexboxLayout class="option-container" alignItems="center">
    <image src={"~/images/optionssymbol.png"} class="option-image"/>

    <label class="text-mid option-name" textWrap=true>
        <formattedString>
            <span text={optionName}  />
        </formattedString>
    </label>
</flexboxLayout>

<style>
    .option-container{
        width: 100%;
        margin-bottom: 10;
        background: #F1F1F1;
        padding: 10 15;

    }
    .option-image{
        height: auto;
        width: 7%;
        margin-right: 8;
    }
    .option-name{
        font-size: 17;
    }
</style>