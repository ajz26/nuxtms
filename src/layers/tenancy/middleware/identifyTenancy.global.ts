
import { useTenancyStore } from '~/store/tenancy';
import { updatePreset, usePreset } from '@primevue/themes';



export default defineNuxtRouteMiddleware(async (to, from) => {
    
    const store = useTenancyStore();
    
    var tenancy = null;

    if(import.meta.server){
        const event = useRequestEvent(); // Obtener el evento de la request
        const currentHost = event?.node.req.headers.host; // Extraer el host


        const { data } = await useFetch('/api/identifyTenant',{
            method: 'GET',
            params: {
                host: currentHost
            }
        });

        if(data.value){
            store.name = data.value.name;
            store.id = data.value.id;
            store.logo = data.value.logo;
            store.theme = data.value.theme;
        }
    }

    // if(!store.id){
    //    return abortNavigation();
    // }

    let preset = updatePreset(store.theme);

    usePreset(preset);

})