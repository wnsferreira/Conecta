import { createStore } from "vuex"

export default createStore({
    state: {
        users: [
            {
                id: 1,
                name: 'Alceu',
                cpf: "",
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
    },
    mutations: {
        addUser: (state, newUser) => state.users.push(newUser),
    },
    actions: {
        commitUser: ({ commit }, newUser ) => commit('addUser', newUser),
    }, 
})