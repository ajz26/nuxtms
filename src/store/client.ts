
let state = {
    name: 'Client Name',
    email: '',
}


let actions = {

    async setClientName({state}, name) {
        state.client.name = name
    },

    async setClientEmail({state}, email) {
        state.client.email = email
    },

    async setClient({state}, client) {
        state.client = client
    }

}

export const useClientStore = defineStore('clientStore', {
   state : () => state,
   actions
})
  