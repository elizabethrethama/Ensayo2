<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-info">
         <router-link class="navbar-brand" to="/">Rick And Morty</router-link>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="navbar-nav ml-auto">
               <li class="nav-item active">
                 <router-link class="nav-link" to="/">Opiniones</router-link>
               </li>
               <li class="nav-item">
                 <router-link class="nav-link" to="/articulos">Favoritos</router-link>
               </li>
               <li class="nav-item">
                 <router-link class="nav-link" to="/administracion">Administracion</router-link>
               </li>
          </ul>
  </div>
</nav>
    </div>
</template>

<script>
  
export default {
    name: 'Navegacion',
}
</script>

<style >
.navbar {
  color: #42b983;
}
</style>