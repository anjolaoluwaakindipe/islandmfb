<page actionBarHidden= {true} class="background">
    <flexboxLayout alignItems="center">
    <stackLayout  class=".container" >
    <flexboxLayout>
        <image src={"~/images/logo.png"}/>
    </flexboxLayout>
        <label class="text-light big-text " textWrap=true>
            <formattedString>
                <span text="Welcome to Island Microfinance Bank" />
            </formattedString>
        </label>

        <label class="text-light text-subinfo" textWrap=true>
            <formattedString>
                <span text="New level of Microfinance banking with our customer app" />
            </formattedString>
        </label>
        <button class="btn text-bold" text="Get Started" on:tap={navigation}/>
        <flexboxLayout justifyContent="center">
        
    <stackLayout orientation="horizontal">
        
        <label class="text-light under-info" textWrap=true>
            <formattedString>
                <span text="Have an account? " />
            </formattedString>
        </label>
        <label class="text under-info" textWrap=true>
            <formattedString>
                <span style="color: green;" text="Sign In"   />
            </formattedString>
        </label>
     
    </stackLayout> 
    </flexboxLayout> 
    </stackLayout>
    </flexboxLayout>
</page>

<script>
    import {navigate} from 'svelte-native'
    import NextGetStartedPage from './NextGetStartedPage.svelte';
    import { Http } from '@nativescript/core';

    const navigation =()=>navigate({page:NextGetStartedPage})  ;

</script>

<style>
    .text-subinfo{
        font-size: 20;
        padding: 25 0;
        padding-right: 30  ;
    }
    .big-text{
        font-size: 38;
    }

    .background{
        background-color: white  ;
        padding: 0 29;
    }

    .under-info{
        font-size: 19;
        padding-top: 10;
    }

    image{
        width: 120;
        margin-bottom: 70;
    }

</style>
