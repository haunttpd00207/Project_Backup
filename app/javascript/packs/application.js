/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from "vue"
import App from "../app.vue"
window.jQuery = require('jquery');
import _ from "lodash"
import VueI18n from "vue-i18n"
import messages from "../locales/ja.js"
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(VueI18n)

document.addEventListener('DOMContentLoaded', () => {
  const i18n = new VueI18n({
    locale: 'ja',
    messages,
  })

  const elementMain = document.getElementById('app')
  if(elementMain != null) {
    var appVue = new Vue({
      el: "#app",
      i18n,
      render: h => h(App, {})
    });
  }
})
