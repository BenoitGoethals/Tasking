<template>
  <form
    @submit.prevent="validateBeforeSubmit"

    method="post"
  >

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add User</p>
      </header>
      <section class="modal-card-body ">

        <b-field horizontal label="Last Name">
          <b-input v-model="last_name" v-validate="'required|alpha|min:3'"></b-input>
          <i v-show="errors.has('last_name')" class="fa fa-warning"></i>
          <span v-show="errors.has('last_name')" class="help is-danger">{{ errors.first('last_name') }}</span>
        </b-field>

        <b-field horizontal label="Name">
          <b-input v-model="first_name" v-validate="'required|alpha|min:3'"></b-input>
          <i v-show="errors.has('first_name')" class="fa fa-warning"></i>
          <span v-show="errors.has('first_name')" class="help is-danger">{{ errors.first('first_name') }}</span>
        </b-field>

        <b-field horizontal label="Type">
          <b-select placeholder="Gender" v-model="Gender">
            <option value="Male" selected>Male</option>
            <option value="Female">Female</option>
          </b-select>
        </b-field>


        <b-field horizontal label="Email">
          <b-input type="Email" v-validate="'required|email|min:3'"
                   value="john@" v:model="Email"
                   width="50"
                   maxlength="30">
          </b-input>
          <i v-show="errors.has('Email')" class="fa fa-warning"></i>
          <span v-show="errors.has('Email')" class="help is-danger">{{ errors.first('Email') }}</span>
        </b-field>

        <b-field horizontal label="Username">
          <b-input value="johnsilver" maxlength="30" v:model="Username" v-validate="'required|alpha|min:3'"></b-input>
          <i v-show="errors.has('Username')" class="fa fa-warning"></i>
          <span v-show="errors.has('Username')" class="help is-danger">{{ errors.first('Username') }}</span>
        </b-field>

        <b-field horizontal label="Password">
          <b-input type="password" v:model="Password" v-validate="'required|alpha|min:3'"
                   value="iwantmytreasure"
                   password-reveal>
          </b-input>
        </b-field>

        <b-field label="file" horizontal>
          <div class="file">
            <label class="file-label">
              <input class="file-input" type="file" name="resume" @change="previewImage" accept="image/*">
              <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose a file…
      </span>
    </span>
            </label>
          </div>
        </b-field>
        <div class="image-preview" v-if="imageData.length > 0">
          <img class="preview" :src="imageData">
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
        <button class="button is-primary" @click="Save">Save</button>
      </footer>
    </div>

  </form>
</template>

<script>
  export default {
    name: "AddUser",

    methods:
      {
        validateBeforeSubmit() {
          this.$validator.validateAll().then((result) => {
            if (result) {
              // eslint-disable-next-line

              this.SaveData();
              return;
            }

            alert('Correct them errors!');
          })
        },

        Save() {

        },
        previewImage: function (event) {
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

      },
    data() {
      return {
        imageData: "",
        isComponentModalActive: false,
        last_name: '',
        first_name: '',
        Email: '',
        Gender: 'Male',
        Password: '',
        Username: ''


      }
    }
  }
</script>

<style scoped>
  .file-upload-form, .image-preview {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 20px;
  }

  img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
  }
</style>
