<script>
    export let onTap;
    export let navName;
    export let navImage
</script>

<flexboxLayout class="sidedrawer-nav-container">
    <image src={navImage} class="sidedrawer-nav-image"/>
    <label text={navName} class="text" on:tap={onTap} />
</flexboxLayout>


<style>
    .sidedrawer-nav-image{
        height: auto;
        width: 10%;
        margin-right: 10;
    }
    .sidedrawer-nav-container{
        margin-bottom: 15  ;
    }
</style>