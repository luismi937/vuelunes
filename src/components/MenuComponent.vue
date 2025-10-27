<template>
    <div>
        <h1>Menu Component</h1>
   
        <ul id="menu">
            <li>
        <router-link to="/menu">Menu Component</router-link>
      </li>
       <hr/>
       <li>
        <router-link to="/collatz">Collaatz</router-link>
      </li>
      <hr/>
       <li>
        <router-link to="/collatzfilters">Collaatz Filters</router-link>
      </li>
       <hr/>
       <li>
        <router-link to="/collatzfilters">Collaatz Filters</router-link>
      </li>
       <hr/>
       <li>
        <router-link to="/tablaMultiplicar">Tablas Multiplicar</router-link>
      </li>
      <hr/>
       <li>
        <router-link to="/tablaSolucion">Tablas Multiplicar Solucion</router-link>
      </li>
        </ul>
    </div>
</template>
<script>
export default {
   name:"MenuComponent" 
}
</script>
<style>
ul#menu li {
  display: inline;
}
</style>