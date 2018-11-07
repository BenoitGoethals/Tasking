<template>
  <section class="section">
    <div class="columns is-mobile">
      <div
        v-for="(feature, i) of loadedTasks"
        :key="i"
        class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-grey">
              {{ feature.id }}  {{ feature.Name }}  {{ feature.status }}
            </p>
          </header>
          <div class="card-content">
            <div class="content has-text-centered">
              {{feature.Description}}
             {{feature.StartDate}}
              {{feature.EndDate}}
            </div>
          </div>
          <footer class="card-footer">
            <div
              class="card-footer-item"
              v-html="feature.Security"/>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BLogo from '@/components/Logo'

export default {
  name: 'HomePage',
  components: {BLogo},
  computed: {
    loadedTasks() {
      return this.$store.getters.loadedTasks
    }
  },

  data() {
      return {
          features: [
              { icon: 'github-circle', title: 'Free', content: `<span>Open source on <a href="https://github.com/buefy/buefy"> GitHub</a></span>` },
              { icon: 'cellphone-link', title: 'Responsive', content: `<span><b class="has-text-grey">Every</b> component is responsive</span>` },
              { icon: 'alert-decagram', title: 'Modern', content: `<span>Built with <a href="https://vuejs.org/">Vue.js</a> and <a href="http://bulma.io/">Bulma</a></span>` },
              { icon: 'arrange-bring-to-front', title: 'Lightweight', content: `<span>No other internal dependency</span>` }
          ]
      }
  }
}
</script>
