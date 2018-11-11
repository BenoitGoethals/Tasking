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
    },
    methods:{
      previewImage: function(event) {
        // Reference to the DOM input element
        var input = event.target;
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader();
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = (e) => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            this.imageData = e.target.result;
          }
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0]);
        }
      }
    }
  }
</script>

<style scoped>

</style>
