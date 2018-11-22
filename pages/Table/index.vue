<template>
  <section>
    <button class="button field is-danger" @click="checkedRows = []"
            :disabled="!checkedRows.length">

      <b-icon icon="close"></b-icon>
      <span>Clear checked</span>
    </button>
    <button class="button field is-danger" @click="deleteTasks"
            :disabled="!checkedRows.length">

      <b-icon icon="close"></b-icon>
      <span>Delete</span>
    </button>
    <b-field grouped group-multiline>
      <b-select v-model="defaultSortDirection">
        <option value="asc">Default sort direction: ASC</option>
        <option value="desc">Default sort direction: DESC</option>
      </b-select>
      <b-select v-model="perPage" :disabled="!isPaginated">
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="15">15 per page</option>
        <option value="20">20 per page</option>
      </b-select>
      <div class="control">
        <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
      </div>
      <div class="control is-flex">
        <b-switch v-model="isPaginated">Paginated</b-switch>
      </div>
      <div class="control is-flex">
        <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
      </div>
    </b-field>

    <b-table
      :data="tasks"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :default-sort-direction="defaultSortDirection"
      default-sort="user.first_name"
      :checked-rows.sync="checkedRows"

      checkable
    >

      <template slot-scope="props">
        <b-table-column field="Id" label="ID" width="40" sortable numeric>
          {{ props.row.id }}
        </b-table-column>

        <b-table-column field="Name" label="Name" sortable>
          {{ props.row.Name }}
        </b-table-column>

        <b-table-column field="Description" label="Last Name" sortable>
          {{ props.row.Description }}
        </b-table-column>

        <b-table-column field="Status" label="Status" sortable>
          {{ props.row.Status }}
        </b-table-column>

        <b-table-column field="Security" label="Security" sortable>
          {{ props.row.Security }}
        </b-table-column>

        <b-table-column field="StartDate" label="Start Date" sortable centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.StartDate).toLocaleDateString() }}
                    </span>
        </b-table-column>


        <b-table-column field="EndDate" label="End Date" sortable centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.EndDate).toLocaleDateString() }}
                    </span>
        </b-table-column>


      </template>
      <template slot="bottom-left">
        <b>Total checked</b>: {{ checkedRows.length }}
      </template>
    </b-table>
<div>
  <div id="app">
    <h1>Bitcoin Price Index</h1>

    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div
        v-else
        v-for="currency in info"
        class="currency"
      >
        {{ currency }}:
        <span class="lighten">
        <span v-html="currency"></span>{{ currency }}
      </span>
      </div>

    </section>
  </div>
</div>
  </section>

</template>

<script>
  import axios from 'axios'
  export default {

    methods:
      {
        deleteTasks: function () {



              this.$store.commit('deleteItem', this.checkedRows);
this.checkedRows=[];

        }
      },
    computed: {
      loadedTasks() {
        return this.$store.getters.loadedTasks
      },


    },
    data() {

      return {
        tasks: this.$store.getters.loadedTasks,
        checkedRows: [],
        isPaginated: true,
        isPaginationSimple: false,
        defaultSortDirection: 'asc',
        currentPage: 1,
        perPage: 5,
        info: null,
        loading: true,
        errored: false
      }
    },

 filters: {
   currencydecimal (value) {
     return value.toFixed(2)
   },
    mounted () {
      axios
        .get('http://localhost:5000/api/todo')
        .then(response => {

          this.info = response.data.bpi;
          console.log(this.info);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => this.loading = false)
    }
  }
  }
</script>
