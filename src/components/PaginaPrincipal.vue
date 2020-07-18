<template>
  <div class="container">
    <h1 class="text-center my-3">Pagina Principal</h1>
    <div class="row">
      <div
        class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4"
        v-for="(item, index) in datosApi"
        :key="index"
      >
        <div class="card">
          <img :src="'item.imagen'" class="image" :alt="item.image" />
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <a class="btn btn-primary mx-3" @click.prevent="enviarInfoComentario(index)">Comentario</a>
            <a :href="item.url" class="btn btn-primary" target="_blank">Ir al sitio</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginaPrincipal",
  data() {
    return {
      /*datosApi: [
          {name: "nombre", descripcion: "Lorems Ipsum", url: "imagen.png"},
          {name: "nombre", descripcion: "Lorems Ipsum", url: "imagen.png"},
          {name: "nombre", descripcion: "Lorems Ipsum", url: "imagen.png"},
          {name: "nombre", descripcion: "Lorems Ipsum", url: "imagen.png"},
          {name: "nombre", descripcion: "Lorems Ipsum", url: "imagen.png"},
          {name: "nombre", descripcion: "Lorems Ipsum", url: "imagen.png"},
        ] */
    };
  },
  computed: {
    datosApi() {
      return this.$store.getters.enviarInfoApi;
    }
  },
  methods: {
    enviarInfoComentario(index) {
      this.$router.push(`/comentarios/${index}`);
    }
  }
};
</script>


<style scoped lang="scss">
</style>>



