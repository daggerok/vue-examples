<template>
  <div id="firebase-app">
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>Name</label>
        <md-input v-model="model.name" placeholder="Enter your name"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Email</label>
        <md-input v-model="model.email" placeholder="Enter your Email"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Message</label>
        <md-textarea v-model="model.message"></md-textarea>
      </md-input-container>

      <md-button type="submit" class="md-fab">
        <md-icon>add</md-icon>
      </md-button>
    </form>

    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Messages</h1>
        <md-button class="md-icon-button">
          <md-icon>filter_list</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>
      </md-toolbar>

      <md-table-alternate-header md-selected-label="selected">
        <md-button class="md-icon-button">
          <md-icon>delete</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </md-table-alternate-header>

      <md-table md-sort="date">
        <md-table-header>
          <md-table-row>
            <md-table-head md-sort-by="date">Date</md-table-head>
            <md-table-head md-sort-by="name" width="100px">Name</md-table-head>
            <md-table-head md-sort-by="email">Email</md-table-head>
            <md-table-head md-sort-by="message" md-tooltip="expand">Message</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(row, index) in messages" :key="index" :md-item="row" md-selection>
            <md-table-cell v-for="(column, i) in row" :key="i">
              <span>{{ column }}</span>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
  export default {
    name: 'firebase-app',
    data: () => ({
      initialValue: 'My initial value',
      messages: [
        {
          date: Date.now(),
          name: 'max',
          email: 'max@mail',
          message: 'ololo'
        },
        {
          date: Date.now(),
          name: 'bax',
          email: 'bax@email',
          message: 'trololo'
        },
      ],
      model: {
        name: '',
        email: '',
        message: '',
      },
    }),
    methods: {
      fetchFunction(param) {
        // param = { queryParam: query }

        // 'fetchAutocomplete' should return a Promise.

        // md-autocomplete will call fetchAutocomplete and pass
        // 'param' as an argument.
        // the 'param' is composed by a query param and
        // a query.
      },
      submit() {
        Object.keys(this.model).forEach(k => {
          this.model[k] = '';
        });
      }
    },
  };
</script>

<style scoped="">
  #firebase-app {
    padding: 2%;
  }
</style>
