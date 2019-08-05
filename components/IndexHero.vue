<template>
  <div class="relative w-screen">
    <div class="z-0 absolute bg-red-400">
      <img class="object-cover" src="https://image.tmdb.org/t/p/w1280/xRMZikjAHNFebD1FLRqgDZeGV4a.jpg" alt="" />
    </div>
    <div class="absolute text-gray-500 z-10">
      <h2>Spiderman Homecoming</h2>
      <div>Puntuacion de usuario: 84%</div>
      <a href="#">Reproducir Trailer</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHero',
  data() {}
}
</script>

<style scoped>
img {
  mix-blend-mode: multiply;
  filter: saturate(25%);
}
</style>
