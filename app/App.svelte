<frame>
    <GetStartedPage/>
</frame>

<script>
    import GetStartedPage from './pages/GetStartedPage.svelte';
    import Home from './pages/Home.svelte';
    import Login from './pages/Login.svelte';
    import {authStore} from './store/authStore'

    
    console.log($authStore);
</script>