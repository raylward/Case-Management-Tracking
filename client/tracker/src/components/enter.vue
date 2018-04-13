<template>

<body>
    <div class="grid">
        <div class="sidebar">
            <header><h1>Welcome, <br> 'Name'</h1></header> <br>
            <nav>
                <a href="#/index">My Profile</a> <br> <br>
                <a href="#/search">Search Reports</a>
            </nav>
            </div>
            <div class="content">
                <h2>Enter Reports</h2>
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
