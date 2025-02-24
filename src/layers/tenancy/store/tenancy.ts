
let state = {
    name: null,
    id  : 0,
    host : null,
    logo : null,
    menu : [
        {
            label: 'Home',
            url: '/',
        },
        {
            label: 'Leads',
            url: '/leads',
        },
        {
            label: 'Vehicles',
            route: '/vehicles',
        },
        {
            label: 'Vehicle 123',
            route: '/vehicles/123',
        },
        {
            label: 'Login',
            url: '/login',
        }
    
    ],
    theme : {
        semantic: {
            primary: {
                400: 'blue',
                500: 'blue',
            }
        }
    }
}


export const useTenancyStore = defineStore('tenancyStore', {
   state : () => state,
})
  