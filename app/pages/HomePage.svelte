<script>
    import {goBack} from 'svelte-native';
    import Nav from "../components/Nav.svelte";
    import BalanceArea from '../components/BalanceArea.svelte';
    import QuickActionButtons from '../components/QuickActionButtons.svelte';
    import TransactionCard from '~/components/TransactionCard.svelte';
    import SidedrawNav from "~/components/SidedrawerNav.svelte";
    import {sideDrawerNav} from '../utilities/sidebarNavContent';

    let drawer;

    let name ="Akinoluwa Adeleye";
    let bvn = 22900086343;
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

    function onOpenDrawer() {
        drawer.open();
    }
    function onCloseDrawer() {
        drawer.close();
    }
</script>

<page class="background" actionBarHidden=true>

    <drawer bind:this={drawer} class="background">
        <gridlayout prop:leftDrawer width="300" class="background" rows="auto, *">
            <flexboxlayout height={"100%"}  flexDirection="column" paddingTop="90" paddingLeft={30} justifyContent={"space-between"}>
                <flexboxLayout marginBottom={20} height={"30%"}>
                    <stacklayout>
                        <label text={name} fontWeight="bold" class="text-bold sidebar-text-name" />
                        <label text={"BVN: " + bvn} />
                    </stacklayout>
                </flexboxLayout>

                <flexboxlayout height="70%" flexDirection="column" class="text sidebar-text-nav">
                    {#each sideDrawerNav as element}
                        <SidedrawNav navName={element.name} navImage ={element.image}/>
                    {/each}
                </flexboxlayout>

                <flexboxLayout height={"20%"} color="#BC4B52" alignItems="flex-end" marginBottom={30}>
                    <label text="Logout"/>
                </flexboxLayout>
            </flexboxlayout>
        </gridlayout>

        
    

    <flexboxLayout prop:mainContent flexDirection="column">
    <!-- NavBar -->
        <Nav>
            <flexboxLayout flexDirection="row" justifyContent={"space-between"} class="nav-container">
                <!-- Go back button -->
                <image on:tap={onOpenDrawer} class="goback icon" src={"~/images/menu.png"}/>
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
                                    <span text={"Hi "+name.split(" ")[0]}/>
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

                    <flexboxLayout flexDirection="column"  marginBottom= {20}>
                        <TransactionCard accountOwner="Akinjoke Gboluga" transactionType="credit" transactionDate="Tuesday, July 12th, 2021" transferAmount={1000000000000} otherAccount="Akiniloluwa Adeleye Gbenga"/>
                        <TransactionCard accountOwner="Akinjoke Gboluga" transactionType="debit" transactionDate="Tuesday, July 20th, 2021" transferAmount={10000} otherAccount="Akiniloluwa Adeleye Gbenga"/>
                        <TransactionCard accountOwner="Akinjoke Gboluga" transactionType="debit" transactionDate="Tuesday, July 14th, 2021" transferAmount={5000} otherAccount="Akiniloluwa Adeleye Gbenga"/>
                        <TransactionCard accountOwner="Akinjoke Gboluga" transactionType="credit" transactionDate="Tuesday, July 18th, 2021" transferAmount={200000} otherAccount="Akiniloluwa Adeleye Gbenga"/>
                    </flexboxLayout>

                </flexboxLayout>
            </scrollView>
        </flexboxLayout>
    </flexboxLayout>

    </drawer>
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
    .sidebar-text-name{
        font-size: 20;
    }
    .sidebar-text-nav{
        font-size: 15;
    }
</style>

