<template>
  <div id="firebase-app">
    <form novalidate @submit.prevent="$validator.validateAll() && sendMessage()">
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
      <!--<pre>errors: {{errors}}</pre>-->
      <md-button type="submit" class="md-fab" v-show="!errors.any()">
        <md-icon @submit.prevent="$validator.validateAll() && sendMessage()">add</md-icon>
      </md-button>
    </form>

    <md-table-card>
      <md-table md-sort="date" @select="onSelect">
        <md-table-body>
          <md-table-row v-for="(row, index) in messages" :key="index" :md-item="row" md-selection>
            <md-table-cell v-for="(column, i) in row" :key="i">
              <span>{{ index }} - {{ column }}</span>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>

      <md-button @click="onDelete" v-show="showTrash" class="md-icon-button">
        <md-icon>delete</md-icon>
      </md-button>
    </md-table-card>
  </div>
</template>

<script>
  import '../vendor/vue-material';
  import '../vendor/vee-validate';
  import '../vendor/vuefire';
  import { db } from '../firebase';

  export default {
    firebase: {
      messages: db.ref('messages'),
    },
    name: 'firebase-app',
    data() {
      return {
        model: {
          name: '',
          email: '',
          message: '',
        },
        keys: [],
      };
    },
    computed: {
      showTrash() {
        return this.keys && this.keys.length > 0;
      },
    },
    methods: {
      onDelete() {
        this.keys = this.keys.forEach(key =>
          this.$firebaseRefs.messages.child(key).remove()) || [];
      },
      onSelect(items) {
        if (!items) return;
        this.keys = items.map(item => item['.key']);
      },
      sendMessage() {
        this.$validator.resume();
        this.$validator.validateAll().then(result => {
          if (!result) return;
          if (this.errors.any()) return;

          const keys = Object.keys(this.model);
          const len = keys.length;
          const values = keys.map(k => this.model[k]);
          const nonEmpty = values.filter(v => !!v).length;

          if (len !== nonEmpty) return;

          this.$firebaseRefs.messages.push({
            date: Date.now(),
            name: this.model.name,
            email: this.model.email,
            message: this.model.message,
          });

          keys.forEach(k => {
            this.model[k] = '';
          });
          this.$validator.pause();
        });
      },
    },
  };
</script>

<style scoped="">
  @import "~material-design-icons/iconfont/material-icons.css";

  #firebase-app {
    padding: 2%;
  }
</style>
