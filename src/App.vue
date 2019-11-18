<template>
  <div>
    <app-navbar></app-navbar>
    <div class="container">
      <br>
      <br>
      <br>
      <br>
      <app-action></app-action>
      <br>
      <br>
      <router-view></router-view>
      <br>
      <div class="col-md-10 mx-auto shadow p-3 mb-5 bg-white rounded">
        <div class="row justify-content-center">
          <h2 class="text-center">All Votes</h2>
            <hr class="my-4">
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Action from './components/Action.vue';

export default {
 components:{
   'app-action':Action
 }
}
</script>

<style scoped>

</style>

