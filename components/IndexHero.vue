<template>
  <div class="relative w-screen h-hero">
    <div class="z-0 absolute bg-blue-600 h-hero overflow-hidden">
      <img class="object-cover" :src="img" alt="" />
    </div>
    <div class="absolute z-10 h-hero flex flex-col justify-end px-3 py-5 text-white ">
      <p class="uppercase tracking-wide font-bold text-sm">
        Estreno
      </p>
      <h2 class="mt-4 text-4xl font-bold tracking-wide">
        Spider-Man: Into the Spider-Verse
      </h2>
      <p class="mt-3 text-xs text-justify h-20">
        Miles Morales está haciendo malabarismos con su vida entre ser un estudiante de secundaria y ser un hombre araña. Cuando Wilson "Kingpin" Fisk usa un súper colisionador, otros del otro lado del Spider-Verse son transportados a esta dimensión.
      </p>
      <div class="mt-4">
        <p class="uppercase tracking-wide text-xs text-bold">
          Generos
        </p>
        <p v-for="(genre, index) in genres" :key="index" class="inline-flex mr-1 mt-1 px-2 rounded-sm bg-white text-red-500 text-sm lowercase">
          {{ genre }}
        </p>
      </div>
      <a class="my-12 block py-2 rounded-lg shadow-lg bg-red-600 text-center text-2xl uppercase font-bold tracking-wider" href="#">Ver Cartelera</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHero',
  data() {
    return {
      img: 'https://image.tmdb.org/t/p/w1280/xRMZikjAHNFebD1FLRqgDZeGV4a.jpg',
      genres: ['Acción', 'Aventuras', 'Animación', 'Ciencia Ficción', 'Comedia']
    }
  }
}
</script>

<style scoped>
img {
  mix-blend-mode: multiply;
  filter: saturate(25%);
}
</style>
