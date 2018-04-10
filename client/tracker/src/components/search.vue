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
            <!-- content here pls -->
            <h2>Search Reports</h2>
            <div class='container'>
                    <div class='dropdown' id='period-dropdown'>
                    <div class='dropdown-button'>Pay Period</div>
                    <span class='triangle'>&#9660;</span>
                    <ul class='dropdown-selection'>
                      <li>Date01</li>
                      <li>Date02</li>
                      <li>Date03</li>
                      <li>Date04</li>
                    </ul>
                  </div>
                  <div class='dropdown' id='cm-dropdown'>
                    <div class='dropdown-button'>Case Manager</div>
                    <span class='triangle'>&#9660;</span>
                    <ul class='dropdown-selection'>
                      <li>Name01</li>
                      <li>Name02</li>
                      <li>Name03</li>
                      <li>Name04</li>
                    </ul>
                  </div>
                  </div>
  
            </div>
            <div class="footer">
                <small>2018 footer</small>
            </div>
                    </div>
</body>
</template>
<style src="./tracker.css"></style>

