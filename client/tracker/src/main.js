import Vue from 'vue'
import App from './App'
import router from './router'
import VuejsDialog from 'vuejs-dialog'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// eslint disable-next-line
Vue.use(VuejsDialog)

/*
let message = {
  title: 'Are you sure?',
  body: 'form will not be saved'
}

let options = {
  html: false,
  loader: false,
  reverse: false,
  okText: 'Sumbit',
  cancelText: 'Cancel',
  animation: 'zoom',
  type: 'basic',
  verification: 'continue',
  verificationHelp: false,
  clicksCount: 1,
  backdropClose: true
}

this.$dialog.confirm(message, options)
*/
