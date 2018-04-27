<template>
<body>
    <div class="grid">
        <div class="sidebar">
            <header><h1>Welcome, <br> 'Name'</h1></header> <br>
            <nav>
                <a href="#/index">My Profile</a> <br> <br>
                <a href="#/enter">Enter Reports</a>
            </nav>
            </div>
            <div class="content">
         <h2>Search Reports</h2>

        <model-select :options="options"
                                v-model="item"
                                placeholder="Pay Period">
         </model-select>
<br>
         <model-select :options="options2"
                                 v-model="item2"
                                 placeholder="Status">
         </model-select>

        <table>
            <tr>
                <th>Pay Period</th>
                <th>Status</th>
            </tr>
            <tr><td>Feb 1 2018 - Feb 15 2018</td>
            <td>Approved</td></tr>
            <tr><td>Feb 16 2018 - Feb 28 2018</td>
            <td>Approved</td></tr>
            <tr><td>March 1 2018 - March 15 2018</td>
            <td>Pending</td></tr>
        </table>
        </div>
           <div class="footer">
            <small>2018</small>
          </div>
        </div>
</body>
</template>

<script>
  import { ModelSelect } from 'vue-search-select'

  export default {
    data () {
      return {
        options: [
          { value: '1', text: 'Date01' },
          { value: '2', text: 'Date02' },
          { value: '3', text: 'Date03' },
          { value: '4', text: 'Date04' },
          { value: '5', text: 'Date05' }
        ],
        item: {
          value: '',
          text: ''
        },
        options2: [
          { value: '1', text: 'Approved' },
          { value: '2', text: 'Pending' },
          { value: '3', text: 'Rejected' }
        ],
        item2: ''
      }
    },
    methods: {
      reset () {
        this.item = {}
      },
      selectOption () {
        // select option from parent component
        this.item = this.options[0]
      },
      reset2 () {
        this.item2 = ''
      },
      selectOption2 () {
        // select option from parent component
        this.item2 = this.options2[0].value
      }
    },
    components: {
      ModelSelect
    }
  }
</script>

<style src="./tracker.css"></style>
<style src="./main.js"></style>
