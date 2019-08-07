<template>
  <div>
    <IndexHero :info="premiere" />
    <div class="mb-6">
      <div class="">
        <div class="m-3 p-3 pb-8 rounded shadow bg-blue-400 text-white ">
          <h3>Unete a nuestro club y disfruta de ventajas increibles</h3>
          <ul>
            <li>Descuentos en entradas</li>
            <li>Bebidas y cotufas gratis</li>
            <li>Concursos exclusivos</li>
            <li>Programa de puntos</li>
          </ul>
        </div>
        <img class="shadow-lg" src="~/assets/svg/club-card.svg" alt="club card image" />
      </div>
    </div>
  </div>
</template>

<script>
import IndexHero from '~/components/IndexHero'
import films from '~/static/films.json'

export default {
  components: {
    IndexHero
  },
  data() {
    return {
      films
    }
  },
  computed: {
    premiere: () => films.find(film => film.theater === 1)
  }
}
</script>
