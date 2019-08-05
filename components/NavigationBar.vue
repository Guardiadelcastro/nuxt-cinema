<template>
  <header class="bg-red-700">
    <div class="flex justify-between">
      <h3 class="px-5 py-4 text-white font-bold uppercase tracking-wide">
        Nuxt Cinema
      </h3>
      <div class="px-3 py-2">
        <button class="px-2 py-2 text-white hover:text-red-400 focus:text-white focus:outline-none" @click="toggle">
          <svg class="fill-current" mlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path v-if="isOpen" d="M19.57 17.053a1.786 1.786 0 0 1-2.517 2.518L12 14.518 6.947 19.57a1.786 1.786 0 0 1-2.518-2.518L9.482 12 4.43 6.947a1.786 1.786 0 0 1 2.518-2.518L12 9.482l5.053-5.053a1.785 1.785 0 0 1 2.518 2.518L14.518 12l5.053 5.053z" />
            <path v-else d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>
    <nav v-show="isOpen" class="block w-full">
      <div class="px-2 pt-3 pb-5">
        <a class="block px-3 py-1 font-semibold text-white text-sm rounded-sm hover:bg-red-400" href="#">Cartelera</a>
        <a class="block mt-2 px-3 py-1 font-semibold text-white text-sm rounded-sm hover:bg-red-400" href="#">Próximamente</a>
        <a class="block mt-2 px-3 py-1 font-semibold text-white text-sm rounded-sm hover:bg-red-400" href="#">Precios</a>
        <a class="block mt-2 px-3 py-1 font-semibold text-white text-sm rounded-sm hover:bg-red-400" href="#">Contacto</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped></style>
