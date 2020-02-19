new Vue({
    el:'#desafio',
    data:{
        nome:'Pedro',
        idade: 21,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'

    },

    methods:{
        show(){
            return this.nome
        },
        idadex3(){
            return this.idade * 3

        },
        numrandom(){
            return Math.random()

        }
    }
})