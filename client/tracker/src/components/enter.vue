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
            <input type=”text” list=”payperiod”>
            <datalist id=”payperiod”>
                <option value=Date01></option>
                <option value=Date02></option>
            </datalist>

<table>
        <tr>
        <th>Program</th>
        <th>Case Load</th>
        <th>Total</th>
        <th>Assessments</th>
        <th>Total</th>
        </tr>

        <tr><td>OHC</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>SRS</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>HCCM</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>SCL (KY)</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>ISC</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>SC</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>DDRS</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>MS</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>Options</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>Buckeye Survey</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>Buckeye HRA</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>UHC</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>PEAT</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>PTCM</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>CLS</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text"></td>
        <td>0</td></tr>
        <tr><td>Initial Contact SRS</td>
        <td><input type="text"></td>
        <td>0</td>
        <td><input type="text" size=""></td>
        <td>0</td></tr>
    </table>
    <p><strong>Total Points: </strong></p>
    <p><strong>Total Points Above: </strong></p>
    <div class="button">
        <button type="button">Save</button>
        <button type="submit" v-confirm="Submit">Submit</button>
    </div>
    </div>
        <div class="footer">
            <small>2018</small>
        </div>
        </div>

</body>
</template>

<script>
// eslint-disable-next-line
window.Vue.use(VuejsDialog.default)

</script>

<script type="text/javascript" src=".\node_modules\vuejs-dialog\dist\vuejs-dialog.min.js"></script>

<style src=".\tracker.css"></style>
<script src=".\main.js"></script>
