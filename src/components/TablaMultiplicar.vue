<template>
  <div class="contenedor">
    <h1>📘 Tabla de Multiplicar</h1>

    <!-- Sección 1: Generar tabla con un botón y método -->
    <section>
      <h2>Generar tabla con botón y método</h2>
      <!-- Campo numérico con enlace bidireccional al dato "numero" -->
      <input
        type="number"
        v-model.number="numero"
        min="1"
        placeholder="Introduce un número"
      />
      <!-- Botón que ejecuta el método generarTabla -->
      <button @click="generarTabla">Generar Tabla</button>

      <!-- La tabla se inserta dinámicamente como HTML -->
      <div v-html="tablaHtml"></div>
    </section>

    <hr />

    <!-- Sección 2: Tabla generada directamente con directivas -->
    <section>
      <h2>Tabla generada con directivas</h2>
      <!-- Input vinculado al dato "numero2" -->
      <input
        type="number"
        v-model.number="numero2"
        min="1"
        placeholder="Introduce un número"
      />

      <!-- Tabla renderizada solo si numero2 es válido -->
      <table v-if="numero2 > 0">
        <thead>
          <tr>
            <th>Operación</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <!-- v-for recorre los números del 1 al 10 -->
          <tr v-for="n in 10" :key="n">
            <td>{{ numero2 }} x {{ n }}</td>
            <td>{{ numero2 * n }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <hr />

    <!-- Sección 3: Tabla para generar valores -->
    <section>
      <h2>Tabla usando filtros</h2>
      <input
        type="number"
        v-model.number="numero3"
        min="1"
        placeholder="Introduce un número"
      />

      <table v-if="numero3 > 0">
        <thead>
          <tr>
            <th>Operación</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <!-- Se usan los métodos getOperacion y getResultado -->
          <tr v-for="n in 10" :key="n">
            <td>{{ getOperacion(numero3, n) }}</td>
            <td>{{ getResultado(numero3, n) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",

  data() {
    return {
      // Número introducido por el usuario para la tabla del método
      numero: null,
      // Donde se guarda el HTML generado manualmente
      tablaHtml: "",

      // Número usado para la tabla con directivas
      numero2: null,

      // Número usado para la tabla con métodos
      numero3: null,
    };
  },

  methods: {
    /**
     * Genera una tabla de multiplicar en formato HTML
     * y la asigna a tablaHtml para renderizarla con v-html
     */
    generarTabla() {
      if (!this.numero || this.numero < 1) {
        this.tablaHtml = "<p>Introduce un número válido.</p>";
        return;
      }

      // Construcción dinámica del HTML
      let html = `
        <table>
          <thead>
            <tr><th>Operación</th><th>Resultado</th></tr>
          </thead>
          <tbody>
      `;
      for (let i = 1; i <= 10; i++) {
        html += `<tr><td>${this.numero} x ${i}</td><td>${
          this.numero * i
        }</td></tr>`;
      }
      html += "</tbody></table>";

      this.tablaHtml = html;
    },

    // Devuelve la operación en texto
    getOperacion(a, b) {
      return `${a} x ${b}`;
    },

    // Devuelve el resultado de la multiplicación
    getResultado(a, b) {
      return a * b;
    },
  },
};
</script>

<style scoped>
/* Estilo general */
.contenedor {
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  padding: 40px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  color: #333;
}

h1 {
  text-align: center;
  color: #0077cc;
  margin-bottom: 20px;
  font-weight: 700;
}

section {
  margin: 30px auto;
  width: 70%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

section:hover {
  transform: translateY(-5px);
}

h2 {
  color: #444;
  margin-bottom: 10px;
}

/*  Estilo de la tabla */
table {
  border-collapse: collapse;
  margin: 20px auto;
  width: 80%;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

th,
td {
  border: 1px solid #e0e0e0;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #0077cc;
  color: white;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

/*  Inputs y botones */
input {
  padding: 8px;
  width: 140px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: all 0.3s;
}

input:focus {
  border-color: #0077cc;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 119, 204, 0.3);
}

button {
  margin-left: 10px;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background 0.3s, transform 0.2s;
}

button:hover {
  background-color: #005fa3;
  transform: scale(1.05);
}

hr {
  margin: 40px auto;
  width: 60%;
  border: 0;
  border-top: 2px dashed #ccc;
}
</style>
