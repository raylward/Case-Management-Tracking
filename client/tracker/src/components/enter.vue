<template>

<body>
    <div class="grid">
        <div class="sidebar">
            <header><h1>Welcome, <br> Name</h1></header> <br>
            <nav>
                <a href="index.vue">My Profile</a> <br> <br>
                <a href="search.vue">Search Reports</a>
            </nav>
            </div>
            <div class="content">
                <h2>Enter Reports</h2>
                <div class='container'>
                 <dropdown :data="data" :cbChanged="changed"></dropdown>
                </div>
            </div>
            <div class="footer">
                <small>2018 footer</small>
        </div>
    </div>

</body>
</template>
<style src="./tracker.css"></style>
