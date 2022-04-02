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
                name: 'Hotel baratinho',
                image: '',
                abstract: 'A melhor relação custo-benefício do Rio de Janeiro',
            },
            {
                id: 2,
                service: 'Hotelaria',
                name: 'Hotel muito caro',
                image: '',
                abstract: 'A pior relação custo-benefício do Rio de Janeiro',
            },
            {
                id: 3,
                service: 'Hotelaria',
                name: 'Hotel limpinho',
                image: '',
                abstract: 'A sua melhor escolha no Rio de Janeiro',
            },
            {
                id: 4,
                service: 'Guia',
                name: 'Guia para jogos de futebol',
                image: '',
                abstract: 'Confiança e credibilidade',
            },
            {
                id: 5,
                service: 'Guia',
                name: 'Guia para o carnaval na Sapucai',
                image: '',
                abstract: 'Va tranquilo para o Carnaval carioca',
            },
            {
                id: 6,
                service: 'Guia',
                name: 'Guia para o Rock in Rio',
                image: '',
                abstract: 'Curta o seu show com tranquilidade e segurança',
            },
            {
                id: 7,
                service: 'Gastronomia',
                name: 'Restaurente balança livre',
                image: '',
                abstract: 'A melhor comida da região!',
            },
            {
                id: 8,
                service: 'Gastronomia',
                name: 'Uma experiência gastronômica carioca',
                image: '',
                abstract: 'Somos o melhor restaurante do Rio de Janeiro',
            },
            {
                id: 9,
                service: 'Gastonomia',
                name: 'Frutos do mar e etc',
                image: '',
                abstract: 'Venha conhecer nosso famoso peixe ensopado',
            },
            
            
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