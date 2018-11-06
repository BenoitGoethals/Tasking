<template>
  <div class="container">
  <section>
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Vertical...</p>

        </article>

      </div>
    </div>

    <b-field horizontal label="Rounded">
      <b-select placeholder="Select a character" rounded>
        <option value="flint">Flint</option>
        <option value="silver">Silver</option>
      </b-select>
    </b-field>

    <b-field horizontal label="Name">
      <b-input rounded placeholder="Name" expanded></b-input>
    </b-field>

    <b-field horizontal label="Rounded">
      <b-input  rounded></b-input>
    </b-field>

    <b-field horizontal label="Message">
      <b-input type="textarea"></b-input>
    </b-field>


    <b-field  horizontal label="Select a date">
      <b-datepicker
        placeholder="Click to select..."
        icon="calendar-today">
      </b-datepicker>
    </b-field>



    <b-field  horizontal label="Select a date">
      <b-datepicker
        placeholder="Click to select..."
        icon="calendar-today">
      </b-datepicker>
    </b-field>

    <b-field  horizontal label="Select a date">
    <b-tooltip label="Maybe you like a little animation"
               position="is-bottom"
               animated>



        <b-radio v-model="radio"
                 native-value="Flint">
          Flint
        </b-radio>
        <b-radio v-model="radio"
                 native-value="Silver">
          Silver
        </b-radio>
        <b-radio v-model="radio"
                 native-value="Jack">
          Jack
        </b-radio>
        <b-radio v-model="radio"
                 native-value="Vane"
                 disabled>
          Vane
        </b-radio>
    </b-tooltip>
  </b-field>

    <b-field  horizontal label="Select a date">
      <p class="content">
        <b>Selection:</b>
        {{ radio }}
      </p>
  </b-field>

    <b-field  horizontal label="Select a date">
    <button class="button is-primary">
      Send message
    </button>
  </b-field>

    </section>

  </div>
</template>

<script>
    export default {
        name: "InputForm",
      data() {
        return {
          radio: 'Jack'
        }
      }
    }
</script>

<style scoped>

</style>
