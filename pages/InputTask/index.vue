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

    <b-field horizontal label="Name" :class="{'has-error': errors.has('Task.Name')}">
      <b-input rounded placeholder="Name" expanded v-model="Task.Name"  v-validate.initial="Task.Name" data-rules="required|alpha|min:3"></b-input>
      <p class="text-danger" v-if="errors.has('Task.Name')">{{ errors.first('Task.Name') }}</p>
    </b-field>



    <b-field horizontal label="Description" :class="{'has-error': errors.has('Task.Description')}">
      <b-input type="textarea"  v-model="Task.Description"  v-validate.initial="Task.Description" data-rules="required|alpha|min:3"></b-input>
      <p class="text-danger" v-if="errors.has('Task.Description')">{{ errors.first('Task.Description') }}</p>
    </b-field>


    <b-field  horizontal label="Select a start date"  >
      <b-datepicker v-model="Task.StartDate"
        placeholder="Click to select..."
        icon="calendar-today">
      </b-datepicker>
    </b-field>



    <b-field  horizontal label="Select a end date">
      <b-datepicker  v-model="Task.EndDate"
        placeholder="Click to select..."
        icon="calendar-today">
      </b-datepicker>
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
        validateBeforeSubmit(e) {
          this.$validator.validateAll();
          if (!this.errors.any()) {
            this.SaveData()
          }
        },
        SaveData: function () {

          this.$store.commit('addItem', this.Task);
          this.$nuxt.$router.replace({ path: '/' });
        },

        Cancel: function () {
          this.$nuxt.$router.replace({ path: '/' });
        }
      }
    }
</script>

<style scoped>

</style>
