/* let app = new Vue({
    el:'#app',
    data:{
        bienvenida:"Bienvenido a Vuenissimo",
        carta:{
            imagen:"https://http2.mlstatic.com/D_Q_NP_2X_706423-MLM45758813910_042021-R.jpg",
            titulo:"Patito de hule con bebés",
            descripcion:"Hermosos patitos de hule para niños con sonido de cua cua cua",
            boton:"Ver precio",
            precio:2990.00
        },
        precioIva:0,
        nombre:"",
        numero:290,
        contador:0,
        parrafo:false
    },
    methods:{
        mostrarPrecio(){
            alert(`Este hermoso ${this.carta.titulo} sale $ ${this.carta.precio}`);
        },
        calcularIva(){
            this.precioIva = this.carta.precio * 1.21;
            return this.precioIva;
        },
        cambiarNumero(){
            this.numero = this.numero + 100;
        },
        sumar1(){
            console.log("+1")
            return this.contador++
        },
        restar1() {
            console.log("-1")
            return this.contador--
        },
        ocultar(){
            this.parrafo = !this.parrafo;
        }
    },
    computed:{
        mostrarNombre(){
            // la obligacion de retornar algo
            console.log("llamando a mostrar nombre");
            return this.nombre.toUpperCase();
        },
/*                     sumar1(){
            console.log("+1")
            return this.contador++
        },
        restar1() {
            console.log("-1")
            return this.contador--
        } */
    }}) */