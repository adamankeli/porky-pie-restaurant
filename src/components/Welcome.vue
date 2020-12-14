<template>
  <div class="welcome">
    <img id="logoImg" alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to Porky Pie Restaurant</h1>
    <p>
      For a guide and recipes on how to configure / customize this project
    </p>
    <div class="row">
            <div class="column">
                <div class="card">
                    <h3>Table 1</h3>
                    <p>Add Person's to table</p>
                    <button> Book Table </button>
    <router-link to="/table">About</router-link>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <h3>Table 2</h3>
                    <p>Add Person's to table</p>
                    <button> Book Table </button>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <h3>Table 3</h3>
                    <p>Add Person's to table</p>
                    <button> Book Table </button>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
        font-weight: normal;
}

* {
  box-sizing: border-box;
}
.welcome {
  width: 100%;
}
/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
