<template>
  <form
    id="app"
    @submit.prevent="validateBeforeSubmit"
    action="https://vuejs.org/"
    method="post"
  >

  <div class="container">
  <section>
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">New Task.</p>
        </article>
      </div>
    </div>

    <b-field horizontal label="Type"  >
      <b-select placeholder="Security" rounded v-model="Task.Security" >
        <option value="Private">Private</option>
        <option value="Public">Public</option>
      </b-select>
    </b-field>



    <b-field horizontal label="Name" >
      <b-input name="Task.Name"  placeholder="Name"  v-model="Task.Name"
               v-validate="'required|alpha|min:3'" ></b-input>
      <i v-show="errors.has('Task.Name')" class="fa fa-warning"></i>
      <span v-show="errors.has('Task.Name')" class="help is-danger">{{ errors.first('Task.Name') }}</span>
    </b-field>


    <b-field horizontal label="Description" :class="{'has-error': errors.has('Task.Description')}">
      <b-input  name="Task.Description" type="textarea"  v-model="Task.Description"  v-validate="'required|min:3'" ></b-input>
      <i v-show="errors.has('Task.Description')" class="fa fa-warning"></i>
      <span v-show="errors.has('Task.Description')" class="help is-danger">{{ errors.first('Task.Description') }}</span>
    </b-field>


    <b-field  horizontal label="Select a start date"  >
      <b-datepicker v-model="Task.StartDate"
        placeholder="Click to select..."  v-validate="'required'"
        icon="calendar-today">
      </b-datepicker>
      <i v-show="errors.has('Task.StartDate')" class="fa fa-warning"></i>
      <span v-show="errors.has('Task.StartDate')" class="help is-danger">{{ errors.first('Task.StartDate') }}</span>
    </b-field>



    <b-field  horizontal label="Select a end date">
      <b-datepicker  v-model="Task.EndDate"
        placeholder="Click to select..."
       v-validate="'required'"
        icon="calendar-today">
      </b-datepicker>
      <i v-show="errors.has('Task.EndDate')" class="fa fa-warning"></i>
      <span v-show="errors.has('Task.EndDate')" class="help is-danger">{{ errors.first('"Task.EndDate') }}</span>
    </b-field>

    <b-field  horizontal label="Status">



        <b-radio v-model="Task.Status"
                 native-value="Idle">
          Idle
        </b-radio>
        <b-radio v-model="Task.Status"
                 native-value="started">
          started
        </b-radio>
        <b-radio v-model="Task.Status"
                 native-value="OnHold">
          OnHold
        </b-radio>
        <b-radio v-model="Task.Status"
                 native-value="Ended">
          Ended
        </b-radio>

  </b-field>




    <button class="button is-primary" >
      Save
    </button>



    </section>

  </div>
  </form>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "InputForm",
      data() {
        return {
          Task:{
            Status: 'Idle',
            Security: 'Private',
            Name: '',
            Description: '',
            StartDate: null,
            EndDate: null
          }




        }
      },
      methods: {

        validateBeforeSubmit() {
          this.$validator.validateAll().then((result) => {
            if (result) {
              // eslint-disable-next-line

              this.SaveData();
              return;
            }

            alert('Correct them errors!');
          })},

        SaveData: function () {
          axios.post('https://localhost:44310/api/ToDo',this.Task).then((response) => {alert(this.task)})
            .catch((e) => {
              alert(e);
              console.error(e)
            })
         // this.$store.commit('addItem', this.Task);
          this.$nuxt.$router.replace({ path: '/' });
        },

        createPost () {
          axios.post('http://jsonplaceholder.typicode.com/posts', {
            title: this.postTitle,
            body: this.postBody
          }).then((response) => {})
            .catch((e) => {
              console.error(e)
            })
        },


        Cancel: function () {
          this.$nuxt.$router.replace({ path: '/' });
        }
      }
    }
</script>

<style scoped>

</style>
