<template>
    <div class="container content">
        <br>
        <h3>Order complete!</h3>
        <p>
            Congratulations! You have added the Persons to the table.
            <br>
            <router-link to="/"><a class="rtbtn">Return to Home</a></router-link>
            <br>
            Thank you!
        </p>
    </div>
</template>
<style>
    dt {
        font-weight: bold;
    }
    .rtbtn{
        color: #009435;
    }
</style>
<script>
    export default {
      name: 'complete'
    }
</script>