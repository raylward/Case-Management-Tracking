<template>

<body>
    <div class="grid">
        <div class="sidebar">
            <header><h1>Welcome, <br> Name</h1></header> <br>
            <nav>
                <a href="index.vue">My Profile</a> <br> <br>
                <a href="enter.vue">Enter Reports</a>
            </nav>
            </div>
            <div class="content">
            <h2>Search Reports</h2>

<div class="filter">
  <label for="autocomplete-dropdown">Autocomplete dropdown: </label>
  <autocomplete-dropdown id="autocomplete-dropdown" :options="fruitOptions" v-model="selectedFruit"></autocomplete-dropdown>
</div>

  <div class="dropdown">
      <input type="text" v-model="searchText">
  </div>

  <ul class="suggestion-list">
  <li v-for="(suggestion) in matches"
    :key="suggestion-list">
    {{ suggestion[0] }}
  </li>
</ul>

<div class="dropdown" :class="{'open' : open}"></div>

<a class="toggle" @mousedown.prevent @click="setOpen(!open)">
  <span class="arrow-up">▲</span>
  <span class="arrow-down">▼</span>
</a>


<li v-for="(suggestion, index) in matches"
  :class="{'active' : index === highlightIndex}"
  @mousedown.prevent
  @click="suggestionSelected(suggestion)"
  :key="suggestion"
>
  {{ suggestion[0] }}
</li>



<input type="text"
  ref="search"
  :placeholder="placeholder"
  v-model="searchText"
  @input="searchChanged"
  @keydown.enter="suggestionSelected(matches[highlightIndex])"
  @keydown.down="down"
  @keydown.up="up"
  @keydown.esc="setOpen(false)"
  @blur="setOpen(false)"
>





            <div class='container'>
                </div>
            </div>
           <div class="footer">
            <small>2018 footer</small>
          </div>
        </div>
</body>
</template>
<style src="./tracker.css"></style>
<style src="./main.js"></style>

