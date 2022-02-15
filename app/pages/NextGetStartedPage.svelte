<script>
    // svelte imports
    import { goBack, navigate } from 'svelte-native';

    // page and component imports
    import SetProfilePage from './SetProfilePage.svelte';
    import Nav from '../components/Nav.svelte';

    const navigation = () =>{
        navigate({page: SetProfilePage})
    }
</script>

<page class="background" actionBarHidden="true">
    
    <flexboxLayout flexDirection="column">
        <!-- Nav Bar component -->
        <Nav>
                <!-- Back button -->
                <image on:tap={goBack} class="goback" src={"~/images/goback.png"}/>
        </Nav>

        <flexboxLayout class="container" flexDirection="column"  justifyContent="center">
            <stackLayout justifyContent="center">
                <!-- Get started image -->
                <image class="get-started-image" src={"~/images/NextGetStarted_image.png"}  />
                
                <!-- Header Text -->
                <label class="text text-header" textWrap=true>
                    <formattedString>
                        <span text="Let's get Started" />
                    </formattedString>
                </label>    

                <!-- Info Text -->
                <label class="text-light text-subinfo" textWrap=true>
                    <formattedString>
                        <span text="Never a better time than now to start enjoying Microfinance banking on a new level" />
                    </formattedString>
                </label>

                <!-- Button that navigates to the SetProfilePage -->
                <button class="btn text-bold" text="Set up Profile" on:tap={navigation}/>

                <!-- Text under button that navigates to an unready page -->
                <flexboxLayout justifyContent="center">
                    <label class="text-light under-info" textWrap=true>
                        <formattedString>
                            <span text="Create an Account" />
                        </formattedString>
                    </label>
                </flexboxLayout> 

            </stackLayout>
        </flexboxLayout>
    
    </flexboxLayout>
</page>


<style>
    .text-header{
        font-size: 30;
        text-align: center;
    }
    .text-subinfo{
        text-align: center;
        font-size: 18;
        margin-bottom: 20;
    }
    .under-info{
        font-size: 19;
        margin-top: 10;
    }
    .get-started-image{
        height: auto;
        width: 70%;
        margin-bottom: 40;
    }
    .background{
        background-color: white;
    }
    .container{
        height: 100%;
        padding: 0 29;
    }
</style>