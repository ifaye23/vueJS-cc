import type { PiniaPluginContext } from 'pinia'

const localSynchroPlugin = (context : PiniaPluginContext) => {
    const { store } = context;

    const storedState = localStorage.getItem(
        store.$id
    )

    if (storedState){
        store.$patch(JSON.parse(storedState))
    }

    store.$subscribe((mutation, state) => {
        localStorage.setItem(mutation.storeId, JSON.stringify(state))
    })
}   

export default localSynchroPlugin