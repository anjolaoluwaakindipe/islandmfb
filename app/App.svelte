<frame>
    <HomePage/>
</frame>

<script>

    import GetStartedPage from './pages/GetStartedPage.svelte';
    import Home from './pages/Home.svelte';
    import Login from './pages/Login.svelte';
    import AccountTypePage from './pages/AccountTypePage.svelte';
    import HomePage from './pages/HomePage.svelte';
    import AccountServicesPage from './pages/AccountServicesPage.svelte';
    import {authStore} from './store/authStore';

    console.log($authStore);
</script>