<script>
import { navigate } from 'svelte-native';
import Login from './Login.svelte';

    import {authStore} from '../store/authStore';
import { userStore } from '~/store/userStore';
    let onClick = () =>{
        authStore.clearToken();
        console.log($authStore);
        navigate({page: Login})
    } ;
</script>

<page>
    <flexboxLayout justifyContent="center" alignItems="center">
        {#if $userStore}
         <label class="text-light text-subinfo" textWrap=true>
                <formattedString>
                    <span text={`Welcome ${$userStore.name}`} />
                </formattedString>
        </label>
        {/if}
        <button text="LOG OUT" on:tap={onClick}  />
    </flexboxLayout>
</page>