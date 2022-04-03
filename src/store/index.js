import { createStore } from "vuex"

export default createStore({
    state: {
        isLogged: false,
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
                image: 'https://t-cf.bstatic.com/xdata/images/hotel/square200/161802230.webp?k=e9b91b01c4fc91cc24925123cc6162d405471d0b4e7310c97f45bb82f9270a76&o=',
                abstract: 'A melhor relação custo-benefício do Rio de Janeiro',
                local: 'Paraguai'
            },
            {
                id: 2,
                service: 'Hotelaria',
                name: 'Hotel muito caro',
                image: 'https://t-cf.bstatic.com/xdata/images/hotel/square200/325425600.webp?k=16f6f383058907c9b7d7b29e51c2b397eea8efc727cc4d0f676e35ce1897097b&o=',
                abstract: 'A pior relação custo-benefício do Rio de Janeiro',
                local: 'Buzios'
            },
            {
                id: 3,
                service: 'Hotelaria',
                name: 'Hotel limpinho',
                image: 'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
                abstract: 'A sua melhor escolha no Rio de Janeiro',
                local: 'Rio de Janeiro'
            },
            {
                id: 4,
                service: 'Guia',
                name: 'Guia para jogos de futebol',
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DHeiuhFC1-dddLGcxdpfWAHaEN%26pid%3DApi&f=1',
                abstract: 'Confiança e credibilidade',
                local: 'Rio de Janeiro'
            },
            {
                id: 5,
                service: 'Guia',
                name: 'Guia para o carnaval na Sapucai',
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e5GiIeH0DhxksADwmILCLgHaE8%26pid%3DApi&f=1',
                abstract: 'Va tranquilo para o Carnaval carioca',
                local: 'Rio de Janeiro'
            },
            {
                id: 6,
                service: 'Guia',
                name: 'Guia para o Rock in Rio',
                image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/07/rock-in-rio-2019.jpg',
                abstract: 'Curta o seu show com tranquilidade e segurança',
                local: 'Rio de Janeiro'
            },
            {
                id: 7,
                service: 'Gastronomia',
                name: 'Restaurente balança livre',
                image: 'https://bstatic.com/xdata/images/xphoto/1182x887/129005171.jpg?k=5a104b8ae560a3ff747888aa0f416e3dfaeabbd499fc0b24df9561c82110ec76&o=?size=S',
                abstract: 'A melhor comida da região!',
                local: 'São Pauto'
            },
            {
                id: 8,
                service: 'Gastronomia',
                name: 'Uma experiência gastronômica carioca',
                image: 'https://bstatic.com/xdata/images/xphoto/1182x887/129005142.jpg?k=ec9f22a40bba23211812797a6e301acfa396e91e11f9a29e4535447c48c97613&o=?size=S',
                abstract: 'Somos o melhor restaurante do Rio de Janeiro',
                local: 'Rio de Janeiro'
            },
            {
                id: 9,
                service: 'Gastonomia',
                name: 'Frutos do mar e etc',
                image: 'https://bstatic.com/xdata/images/xphoto/1182x887/30588778.jpg?k=dc935ba74712bf06c0fc193784b3eca4c7449791fb1c29efccd6bac80ce59827&o=?size=S',
                abstract: 'Venha conhecer nosso famoso peixe ensopado',
                local: 'Amsterdã'
            },
            {
                id: 10,
                service: 'Transporte',
                name: 'KJM Transportes',
                image: 'https://guiadotransporte.com.br/images/logotipo/guiadotransporte/kjm-transportes-883.png',
                abstract: 'O translado até você',
                local: 'Rio de Janeiro'

            },
            {
                id: 11,
                service: 'Transporte',
                name: 'TTur',
                image: 'https://gfa-aplicaciones-contenido-prod.s3.amazonaws.com/imagenes/PortalTtur-PROD/6adac960-9fd0-11ec-a4df-3bd4b2922216.webp',
                abstract: 'Ofrecemos servicio especializado de transportación turística para sus viajes de negocios',
                local: 'México'

            },
            {
                id: 12,
                service: 'Transporte',
                name: 'Carreta Furacão',
                image: 'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2017/09/16-fatos-para-entender-de-vez-o-que-e-a-carreta-furacao.jpg.webp',
                abstract: 'Trenzinho da Alegria com performance única',
                local: 'Ribeirão Preto'

            },
            
            
        ],    
    },
    getters: {
        getUser: state => state.users,
        getPartner: state => state.partners,
        getServices: state => state.services
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