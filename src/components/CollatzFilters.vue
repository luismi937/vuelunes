<template>
    <div>
        <h1>Collatz</h1>
        <label>Introduzca número</label>
        <input type="number" v-model="numero"/>
        <button @click="generarCollatz()">
            Generar Collatz
        </button>
        <ul>
            <li v-for="num in numerosCollatz" :key="num"
            v-html="$filters.evaluarNumero(num)">
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "CollatzComponent",
        data() {
            return {
                numero: 0,
                numerosCollatz: []
            }
        },
        methods: {
            generarCollatz() {
                let aux = [];
                while (this.numero != 1){
                    if (this.numero % 2 == 0){
                        this.numero = this.numero / 2;
                    }else{
                        this.numero = this.numero * 3 + 1;
                    }
                    aux.push(this.numero);
                }
                this.numerosCollatz = aux;
            }
        }
    }
</script>
