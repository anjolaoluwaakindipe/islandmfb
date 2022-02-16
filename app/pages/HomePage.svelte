<script>
    import {goBack} from 'svelte-native';
    import Nav from "../components/Nav.svelte";
    import BalanceArea from '../components/BalanceArea.svelte';
    import QuickActionButtons from '../components/QuickActionButtons.svelte';


    let firstName ="Akinoluwa";
    let actions = [
        {
            name: "Transfer",
            onTap: ()=>{},
            image: "~/images/transferactionimage.png"
        },
        {
            name: "Airtime",
            onTap: ()=>{},
            image: "~/images/airtimeactionimage.png"
        },
        {
            name: "Bills",
            onTap: ()=>{},
            image: "~/images/billactionimage.png"
        },

    ]
</script>

<page class="background" actionBarHidden=true>
    <flexboxLayout flexDirection="column">
    <!-- NavBar -->
        <Nav>
            <flexboxLayout flexDirection="row" justifyContent={"space-between"} class="nav-container">
                <!-- Go back button -->
                <image on:tap={goBack} class="goback icon" src={"~/images/menu.png"}/>
                <image on:tap={goBack} class="goback icon" src={"~/images/bell.png"}/>
            </flexboxLayout>
        </Nav>

        <flexboxLayout flexDirection="column" class="container">
            <scrollView orientation="vertical" class="content-container" scrollBarIndicatorVisible={false} >
                <flexboxLayout flexDirection="column" >

                    <flexboxLayout flexDirection="row" justifyContent={"space-between"} alignItems={"flex-end"} marginBottom= {10} >
                        <!-- Header Text -->
                        <label class="text-bold text-name">
                            <formattedString>
                                    <span text={"Hi "+firstName}/>
                            </formattedString>
                        </label>

                        <!-- Header Text -->
                        <label class="text text-change-account" style="color: #226F37;">
                            <formattedString>
                                    <span text={"Change Account"}/>
                            </formattedString>
                        </label>

                    </flexboxLayout>

                    
                    <BalanceArea accountBalance={24000} accountNumber={2335556661} accountType="Savings Account" bookBalance="{24045}" />

                    <flexboxLayout flexDirection="column"  marginTop={20} >
                        <label class="text-bold text-header" style="margin-bottom: 10;">
                            <formattedString>
                                    <span text={"Quick Actions"}/>
                            </formattedString>
                        </label>

                        <scrollView orientation="horizontal" scrollBarIndicatorVisible={true} >
                            <flexboxLayout flexDirection="row" justifyContent="space-between" class="action-container">
                                {#each actions as action}
                                    <QuickActionButtons actionImage ={action.image} actionName={action.name }/>
                                {/each}
                            </flexboxLayout>
                        </scrollView>
                    </flexboxLayout>

                    <flexboxLayout flexDirection="row"  marginBottom= {20} marginTop={20} alignItems="flex-end" justifyContent="space-between" >
                        <label class="text-bold text-header">
                            <formattedString>
                                    <span text={"Transaction History"}/>
                            </formattedString>
                        </label>

                        <label class="text-bold text-view-all" style="color: #226F37;">
                            <formattedString>
                                    <span text={"View all"}/>
                            </formattedString>
                        </label>
                    
                    </flexboxLayout>


                </flexboxLayout>
            </scrollView>
        </flexboxLayout>
    </flexboxLayout>
</page>

<style>
    .container{
        height: 100%;
        padding: 0 29;
        padding-top: 20;
    }
    .nav-container{
        width: 100%;
    }
    .icon{
        width: 20;
    }
    .text-name{
        font-size: 13;
    }
    .text-header{
        font-size: 15 ;
    }
    .action-container{
        width:100%;
    }
</style>

