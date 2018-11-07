<template>
  <form
    id="app"
    @submit.prevent="SaveData"
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

    <b-field horizontal label="Type">
      <b-select placeholder="Security" rounded v-model="Security" >
        <option value="Private">Private</option>
        <option value="Public">Public</option>
      </b-select>
    </b-field>

    <b-field horizontal label="Name">
      <b-input rounded placeholder="Name" expanded v-model="Name" ></b-input>
    </b-field>



    <b-field horizontal label="Description">
      <b-input type="textarea"  v-model="Description"></b-input>
    </b-field>


    <b-field  horizontal label="Select a start date"  >
      <b-datepicker v-model="StartDate"
        placeholder="Click to select..."
        icon="calendar-today">
      </b-datepicker>
    </b-field>



    <b-field  horizontal label="Select a end date">
      <b-datepicker  v-model="EndDate"
        placeholder="Click to select..."
        icon="calendar-today">
      </b-datepicker>
    </b-field>

    <b-field  horizontal label="Status">



        <b-radio v-model="status"
                 native-value="Idle">
          Idle
        </b-radio>
        <b-radio v-model="status"
                 native-value="started">
          started
        </b-radio>
        <b-radio v-model="status"
                 native-value="OnHold">
          OnHold
        </b-radio>
        <b-radio v-model="status"
                 native-value="Ended">
          Ended
        </b-radio>

  </b-field>




    <button class="button is-primary" @click="SaveData">
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
          status: 'Idle',
          Security: 'Private',
          Name: '',
          Description: '',
          StartDate: null,
          EndDate: null



        }
      },
      methods: {
        SaveData: function () {
          alert( this.status + this.Description + this. Name +  this.Security +  this.StartDate + this. EndDate);
          console.log(status +  this.Description +  this.Name +  this.Security +  this.StartDate +  this.EndDate);
        }
      }
    }
</script>

<style scoped>

</style>
