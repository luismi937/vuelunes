<template>
    <div>
        <h1>Tabla multiplicar</h1>
        <label>Introduzca un número</label>
        <input type="number" v-model="numero"/>
        <button v-on:click="generarTabla()">
            Tabla multiplicar
        </button>
        <table border="1">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="html"></tbody>
        </table>
        <table border="1">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-if="numero != 0">
                <tr v-for="contador in 10" :key="contador">
                    <td>
                        {{ numero + " * " + contador }}
                    </td>
                    <td>
                        {{  numero * contador }}
                    </td>
                </tr>
            </tbody>
        </table> 
        <table border="1" style="background-color: lightgreen;">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-if="numero != 0">
                <tr v-for="contador in 10" :key="contador">
                    <td>{{ $filters.getOperacion(numero, contador) }}</td>
                    <td>{{ $filters.getResultado(numero, contador) }}</td>
                </tr>
            </tbody>
        </table>                  
    </div>
</template>
<script>
    export default { 
        name: "TablaMultiplicar",
        data() {
            return {
                numero: 0,
                html: ""
            }
        },
        methods: {
            generarTabla() {
                let aux = "";
                for (var i = 1; i <= 10; i++){
                    aux += "<tr>";
                    aux += "<td>" + this.numero + "*" + i + "</td>";
                    aux += "<td>" + (this.numero * i) + "</td>";
                    aux += "</tr>";
                }
                this.html = aux;
            }
        }
    }
</script>