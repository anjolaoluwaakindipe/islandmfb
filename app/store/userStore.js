import { writable } from "svelte/store"

const userStroreHandler = () =>{
    const {subscribe, set, update} = writable(undefined, async function start(set){
        return function stop(){

        }
    });

    return {
        subscribe,
        loadUser: (user)=>{
            return set(user);
        },
        clearUser: ()=>{
            return set(undefined)
        }
    }
}

export const userStore = userStroreHandler();