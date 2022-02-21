import {writable} from 'svelte/store';

const authStoreHandle = () => {
    const {subscribe, set, update} = writable(undefined);


    return ({
        subscribe,
        setToken: (tokenInfo)=>{set({tokenInfo: tokenInfo}); return Promise.resolve()},
        clearToken: ()=> set(undefined),
    })
}

export const authStore = authStoreHandle();