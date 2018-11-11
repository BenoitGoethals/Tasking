<template>
  <form action="">
    <div class="modal-card" style="width: max-content">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit User</p>
      </header>
      <section class="modal-card-body">

        <b-field label="Name">
          <b-input v-model="last_name"></b-input>
        </b-field>

        <b-field label="Name">
          <b-input v-model="first_name"></b-input>
        </b-field>

        <b-field horizontal label="Type"  >
          <b-select placeholder="Gender" rounded v-model="Gender" >
            <option value="Private">Male</option>
            <option value="Public">Female</option>
          </b-select>
        </b-field>


        <b-field label="Email"
                 type="is-danger"
                 message="This email is invalid">
          <b-input type="email"
                   value="john@"
                   width="50"
                   maxlength="30">
          </b-input>
        </b-field>

        <b-field label="Username"
                 type="is-success"
                 message="This username is available">
          <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password"
                   value="iwantmytreasure"
                   password-reveal>
          </b-input>
        </b-field>


      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
        <button class="button is-primary">Save</button>
      </footer>
    </div>
  </form>
</template>

<script>
  export default {
    name: "EditUser",
    props: ['email', 'password'],
    data() {
      return {
        isComponentModalActive: false,
        EditUser: {
          email: 'evan@you.com',
          password: 'testing'
        }
      }
    }
  }
</script>

<style scoped>

</style>
