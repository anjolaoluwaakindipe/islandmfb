<script>
    import {goBack} from 'svelte-native';
    import Nav from "../components/Nav.svelte";
    import BalanceArea from '../components/BalanceArea.svelte';


    let firstName ="Akinoluwa";
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

                    <flexboxLayout flexDirection="row" justifyContent={"space-between"} alignItems={"flex-end"} >
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
</style>

