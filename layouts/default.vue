<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

          <H3 class="title">Todo</H3>

      </div>


        <div class="navbar-end">




          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Admin
                </a>

                <div class="navbar-dropdown">
                  <nuxt-link class="navbar-item" to="/admin">Admin</nuxt-link>
                  <a class="navbar-item">
                    Jobs
                  </a>
                  <a class="navbar-item">
                    Contact
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  More
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    About
                  </a>
                  <a class="navbar-item">
                    Jobs
                  </a>
                  <a class="navbar-item">
                    Contact
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-primary is-medium"
                      @click="cardModal">
                Sign Up
              </button>


              <section>
                <button class="button is-primary is-medium"
                        @click="loginModel()">
                Login
                </button>

                <button class="button is-medium is-info" @click="confirmCustom">
                  Privacy
                </button>
              </section>

            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="main-content columns">

      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key">
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active">
              <b-icon :icon="item.icon"/> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>



    </section>
  </div>
</template>

<script>
  import login from "../components/Login"
export default {

  components: {

  },
  methods:{
    loginModel(){
      this.$modal.open({
          parent: this,
          component: login,
          hasModalCard: true
    })},
    cardModal() {
      this.$modal.open({
        parent: this,
        component: ModalForm,
        hasModalCard: true
      })
    },
    confirmCustom() {
      this.$dialog.confirm({
        title: 'Privacy Politics',
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce id fermentum quam. Proin sagittis,
                    nibh id hendrerit imperdiet, elit sapien laoreet elit,
                    ac scelerisque diam velit in nisl. Nunc maximus ex non
                    laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,
                    augue purus placerat justo,
                    sit amet porttitor dui metus in nisl.
                    Nulla non leo placerat, porta metus eu, laoreet risus.
                    Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,
                    sit amet sodales quam dui nec odio.
                    Nullam porta mollis est. Quisque aliquet malesuada fringilla.
                    Pellentesque volutpat lacus at ante posuere,
                    non pulvinar ante porta. Proin viverra eu massa nec porta.
                    Aliquam rhoncus velit quis sem hendrerit,
                    ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,
                    eleifend venenatis ligula.
                    Praesent molestie mauris sed elit posuere, non malesuada libero gravida.
                    In hac habitasse platea dictumst.
                    Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas.`,
        cancelText: 'Disagree',
        confirmText: 'Agree',
        type: 'is-success',
        onConfirm: () => this.$toast.open('User agreed')
      })
    },
  },
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', to: { name: 'index' } },
        { title: 'Make new Task', icon: 'lightbulb', to: { name: 'InputTask' } },
        { title: 'Table', icon: 'lightbulb', to: { name: 'Table' } },
        { title: 'Chart', icon: 'lightbulb', to: { name: 'PieChart' } },
        { title: 'Calendar', icon: 'lightbulb', to: { name: 'Calendar' }},
        { title: 'Admin', icon: 'lightbulb', to: { name: 'admin' }}
      ]
    }
  }
}
</script>
