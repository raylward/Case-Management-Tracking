<template>

<body>
    <div class="grid">
        <div class="sidebar">
            <header><h1>Welcome, <br> Name</h1></header> <br>
            <nav>
                <a href="#/index">My Profile</a> <br> <br>
                <a href="#/enter">Enter Reports</a>
            </nav>
            </div>
            <div class="content">
         <h2>Search Reports</h2>
<label>Case Manager: </label>
<input type=”text” list=”casemanager” /> 
 <datalist id=”casemanager”>
      <option value=Name01 />
      <option value=Name02 />
</datalist>

<label>Status: </label>
<input type=”text” list=”status” /> 
 <datalist id=”status”>
      <option value=Approved />
      <option value=Pending />
      <option value=Rejected />
</datalist>

<label>Pay Period: </label>
<input type=”text” list=”payperiod” /> 
 <datalist id=”payperiod”>
      <option value=Date01 />
      <option value=Date02 />
</datalist>
            </div>
           <div class="footer">
            <small>2018 footer</small>
          </div>
        </div>
</body>
</template>
<style src="./tracker.css"></style>
<style src="./main.js"></style>
