<script>
    export let actionName;
    export let actionImage;
</script>

<flexboxLayout flexDirection="column" class="action-container" alignItems="center" justifyContent="center">
    <image src={actionImage} class="action-image"/>

    <label class="text action-name" textWrap=true style="color: #BC4B52;">
        <formattedString>
            <span text={actionName}  />
        </formattedString>
    </label>
</flexboxLayout>


<style>
    .action-container{
        width: 100;
        margin-right: 10;
        background: #F1F1F1;
        padding: 10 10;
        border-radius: 10;
    }
    .action-image{
        height: auto;
        width: 30  ;
    }
    .action-name{
        font-size: 16;
    }
</style>