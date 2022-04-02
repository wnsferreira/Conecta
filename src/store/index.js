import { createStore } from "vuex"

export default createStore({
    state: {
        users: [
            {
                id: 1,
                name: 'Fulano',
                cpf: "",
                email: "",
                phone: "",
                password: "",
                agreement: "",
            }
        ],

        partners: [

            {
                id: 1,
                name: "",
                cnpj: "",
                email: "",
                phone: "",
                password: "",
                agreement: "",

            }
        ], 
        
        services: [
            {
                id: 1,
                service: 'Hotelaria',
            }
        ],    
    },
    getters: {
        getUser: state => state.users,
        getPartner: state => state.partners
    },
    mutations: {
        addUser: (state, newUser) => state.users.push(newUser),
        addPartner: (state, newPartner) => state.partners.push(newPartner)
    },
    actions: {
        commitUser: ({ commit }, newUser ) => commit('addUser', newUser),
        commitPartner: ({ commit }, newPartner ) => commit('addPartner', newPartner),

    }, 
})