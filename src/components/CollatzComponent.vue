<template>
  <div class="collatz">
    <h1>Collatz Component</h1>
    <input 
      type="number" 
      v-model.number="numero" 
      placeholder="Introduce un número positivo" 
    />
    <button @click="calcularCollatz">Calcular</button>

    <div v-if="resultado.length">
      <h3>Secuencia:</h3>
      <ul>
        <li 
          v-for="(n, index) in resultado" 
          :key="index"
          :style="{ color: collatzColor(n) }"
        >
          {{ n }}
        </li>
      </ul>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'CollatzComponent',
  data() {
    return {
      numero: 0,
      resultado: []
    }
  },
  methods: {
    calcularCollatz() {
      if (this.numero <= 0) {
        alert("Introduce un número positivo")
        return
      }

      let n = this.numero
      const secuencia = [n]

      while (n !== 1) {
        if (n % 2 === 0) {
          n = n / 2
        } else {
          n = 3 * n + 1
        }
        secuencia.push(n)
      }

      this.resultado = secuencia
    },

    
    collatzColor(n) {
      if (n % 2 === 0) return 'blue'  
      if (n === 1) return 'green'     
      return 'red'                    
    }
  }
}
</script>

<style>
.collatz {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  text-align: center;
}

input {
  padding: 5px;
  margin-right: 10px;
  width: 150px;
}

button {
  padding: 6px 12px;
  cursor: pointer;
}
</style>
