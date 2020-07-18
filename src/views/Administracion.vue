<template>
  <div class="container">
    <h1 class="text-center my-3">Administración</h1>
    <table class="table table-dark bg-info mb-3">
      <thead>
        <tr>
          <th scope="col"># Número</th>
          <th scope="col">Personaje</th>
          <th scope="col">Opinión</th>
          <th scope="col">Usuario</th>
          <th scope="col">Eliminar</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <button type="button" class="btn btn-danger">Eliminar</button>
          </td>
          <td>
            <button type="button" class="btn btn-success">Editar</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>
            <button type="button" class="btn btn-danger">Eliminar</button>
          </td>
          <td>
            <button type="button" class="btn btn-success">Editar</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>
            <button type="button" class="btn btn-danger">Eliminar</button>
          </td>
          <td>
            <button type="button" class="btn btn-success">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Administracion"
};
</script>

<style scoped lang="scss">
h1 {
  color: rgb(1, 119, 119);
}

</style>>
