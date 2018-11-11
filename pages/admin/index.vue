<template>
  <section>
    <section grouped group-multiline>
      <button class="button field is-dark" @click="AddUser()"
              :disabled="!selected">
        <b-icon icon="account" ></b-icon>
        <span>Add User</span>
      </button>
      <button class="button field is-dark" @click="EditUser"
              :disabled="!selected">
        <b-icon icon="account" ></b-icon>
        <span>Edit User</span>
      </button>
      <button class="button field is-danger" @click="selected = null"
              :disabled="!selected">
        <b-icon icon="close"></b-icon>
        <span>Delete selected</span>
      </button>
    </section>
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
      :data="data"
      :paginated="isPaginated"
      :selected.sync="selected"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :default-sort-direction="defaultSortDirection"
      default-sort="first_name"
      focusable>

      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
          {{ props.row.id }}
        </b-table-column>

        <b-table-column field="first_name" label="First Name" sortable>
          {{ props.row.first_name }}
        </b-table-column>


        <b-table-column field="last_name" label="Last Name" sortable>
          {{ props.row.last_name }}
        </b-table-column>

        <b-table-column field="Username" label="Username" sortable>
          {{ props.row.Username }}
        </b-table-column>


        <b-table-column field="date" label="Date" sortable centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
        </b-table-column>

        <b-table-column label="Gender">
          <b-icon pack="fas"
                  :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
          </b-icon>
          {{ props.row.gender }}
        </b-table-column>
      </template>
    </b-table>
    <pre>{{ selected.first_name }}</pre>
  </section>
</template>

<script>
  const data = [
    {"id":1,"first_name":"Jesse","last_name":"Simmons","Username":"Simmons","Password":"password","date":"2016/10/15 13:43:27","gender":"Male"},
    {"id":2,"first_name":"Jesse2","last_name":"Simmons","Username":"Simmons","Password":"password","date":"2016/10/15 13:43:27","gender":"Female"},
    {"id":3,"first_name":"Jesse3","last_name":"Simmons","Username":"Simmons","Password":"password","date":"2016/10/15 13:43:27","gender":"Male"}
    ]


  import adduser from '../../components/AddUser';
  import editUser from '../../components/EditUser';

  export default {
    data() {
      return {
        data,
        isPaginated: true,
        isPaginationSimple: false,
        defaultSortDirection: 'asc',
        currentPage: 1,
        perPage: 5,
        selected: data[1],
      }
    },
    methods:
      {
        AddUser(){
          this.$modal.open({
            parent: this,
            component: adduser,
            hasModalCard: true
          })

        },EditUser(){
          this.$modal.open({
            parent: this,
            component: editUser,
            hasModalCard: true
          })

        }
      }
  }
</script>
