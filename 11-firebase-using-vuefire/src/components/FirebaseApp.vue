<template>
  <div id="firebase-app">
    <form novalidate @submit.prevent="validateAndSend">
      <md-input-container :class="{'md-input-invalid': errors.has('form-name')}">
        <label for="form-name">Name</label>
        <md-input id="form-name"
                  data-vv-name="form-name"
                  type="email"
                  v-validate
                  name="form-name"
                  data-vv-rules="required|min:3"
                  placeholder="Enter your Name"
                  v-model="model.name"></md-input>
        <span class="md-error">{{errors.first('form-name')}}</span>
      </md-input-container>

      <md-input-container :class="{'md-input-invalid': errors.has('form-email')}">
        <label for="form-email">Email</label>
        <md-input id="form-email"
                  data-vv-name="form-email"
                  type="email"
                  v-validate
                  name="form-email"
                  data-vv-rules="required|email"
                  placeholder="Enter your Email"
                  v-model="model.email"></md-input>
        <span class="md-error">{{errors.first('form-email')}}</span>
      </md-input-container>

      <md-input-container :class="{'md-input-invalid': errors.has('form-message')}">
        <label for="form-message">Message</label>
        <md-input id="form-message"
                  data-vv-name="form-message"
                  type="email"
                  v-validate
                  name="form-message"
                  data-vv-rules="required|min:10"
                  placeholder="Enter your Message"
                  v-model="model.message"></md-input>
        <span class="md-error">{{errors.first('form-message')}}</span>
      </md-input-container>

      <md-button type="submit" class="md-fab">
        <md-icon>add</md-icon>
      </md-button>

      <!--<pre>errors: {{errors}}</pre>-->
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

  import MdInputContainer from '../../node_modules/vue-material/src/components/mdInputContainer/mdInputContainer.vue';

  export default {

    components: { MdInputContainer },
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
      validateAndSend() {

        this.$validator.resume();

        this.$validator.validateAll();

        const keys = Object.keys(this.model);
        const len = keys.length;
        const values = keys.map(k => this.model[k]);
        const nonEmpty = values.filter(v => !!v).length;

        if (len !== nonEmpty) return;
        keys.forEach(k => {
          this.model[k] = '';
        });

        this.$validator.pause();
      },
    },
  };
</script>

<style scoped="">
  #firebase-app {
    padding: 2%;
  }
</style>
