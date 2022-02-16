<script>
    // svelte imports
    import {goBack} from 'svelte-native';
    import {tick} from 'svelte';
    // component imports
    import Nav from "~/components/Nav.svelte";


    let accountServices = ["SMS", "Credit Only", "Debit Only"]
    let checkedValue;
    let isCheckedHandler = async(e, newCheckedValue)=>{
        if (e.value){
            checkedValue = newCheckedValue;
            await tick();
        }
    }
</script>


<page class="background" actionBarHidden=true>
    <flexboxLayout flexDirection="column">
        <!-- NavBar component -->
        <Nav>
                <!-- Back button -->
                <image on:tap={goBack} class="goback" src={"~/images/goback.png"} />
        </Nav>

        <flexboxLayout flexDirection="column" class="container">
            <flexboxLayout flexDirection="column" class="content-container">    
                <!-- Header Text -->
                <label class="text text-header">
                    <formattedString>
                            <span text="Account Services"/>
                    </formattedString>
                </label>

                <!-- Info Text -->
                <label class="text-light text-subinfo" textWrap="true" >
                    <formattedString>
                        <span text="Please select from the options below the services you will require for the opening of your account"/>
                    </formattedString>
                </label>

                
                <flexboxLayout flexDirection="row" justifyContent='space-between' marginLeft={0}>
                    <checkBox fillColor="#bc4b52" checked="{checkedValue === "sms"?true:false}" text="SMS" class="checkbox text-light" on:checkedChange={(e)=>{isCheckedHandler(e, "sms")}}/>
                    <checkBox fillColor="#bc4b52" checked="{checkedValue === "creditOnly"?true:false}" text="Credit Only" class="checkbox" on:checkedChange={(e)=>{isCheckedHandler(e, "creditOnly")}}/>
                    <checkBox fillColor="#bc4b52" checked="{checkedValue === "debitOnly"?true:false}" text="Debit Only" class="checkbox" on:checkedChange={(e)=>{isCheckedHandler(e, "debitOnly")}}/>
                </flexboxLayout>
            </flexboxLayout>

            <flexboxLayout class="button-container" alignItems="center">
                <button text="Submit Application" class="btn text-bold custom-button"/>
            </flexboxLayout>

        </flexboxLayout>


    </flexboxLayout>
</page>

<style>
    .text-header{
        font-size: 30;
        margin-top: 20;
    }
    .container{
        height: 100%;
        padding: 0 29;
        padding-top: 20;
    }
    .text-subinfo{
        font-size: 17;
        margin-bottom: 20
    }
    .custom-button{
        margin: 0;
    }
    .content-container{
        height: 80%;
    }
    .button-container{
        height: 20%;
    }
    .checkbox{
        font-size: 17;
        font-family: "Poppins Light", "Poppins-Light";
    }
</style>