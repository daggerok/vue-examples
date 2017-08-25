<template>
  <section>
    <heading></heading>
    <nuxt/>
    <hanging></hanging>
  </section>
</template>

<script>
  import Heading from '../components/Heading.vue';
  import Hanging from '../components/Hanging.vue';

  export default {
    components: {
      Heading,
      Hanging,
    }
  };
</script>

<style>

  /*@import "../node_modules/font-awesome/css/font-awesome.min.css";*/

  body {
    padding: 0;
    margin: 0;
    background-color: #f4f4f4;
    font: 2vh/1.5 Arial, Helvetica, sans-serif;
  }

  .container {
    width: 90%;
    margin: auto;
    overflow: hidden;
  }

  /**/

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  header {
    background: #353637;
    color: #fff;
    padding-top: 3vh;
    min-height: 7vh;
  }

  header a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 2vh;
  }

  /*
  item1
  item2 => item1 item2 item3
  item3
   */
  header li {
    float: left;
    display: inline;
    padding: 0 2vh;
  }

  header #branding {
    float: left;
  }

  header #branding h1 {
    margin: 0;
  }

  /* move nav right */
  header nav {
    float: right;
    margin-top: 1vh;
  }

  header .highlight, header .current a {
    color: #32a0c2;
  }

  header a:hover {
    color: #ccc;
    font-weight: bold;
  }

  /**/

  #showcase {
    min-height: 40vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../static/i.jpg") no-repeat;
    background-size: cover;
    text-align: center;
    color: #fff;
  }

  #showcase h1 {
    margin-top: 10vh;
    font-size: 5vh;
    margin-bottom: 1vh;
  }

  #showcase p {
    font-size: 2vh;
  }

  /**/

  #newsletter {
    min-height: 5vh;
    padding: 2vh;
    color: #fff;
    background: #353637;
  }

  #newsletter h1 {
    float: left;
    margin: 1vh 0 0 2vh;
  }

  #newsletter form {
    float: right;
    margin-top: 1vh;
  }

  #newsletter input[type="email"] {
    padding: 4px;
    height: 25px;
    width: 200px;
  }

  .subscribe-btn {
    height: 38px;
    background: #ccc;
    border: 0;
    padding: 0 20px 0 20px;
    color: #353637;
  }

  /**/

  #boxes {
    margin-top: 20px;
  }

  #boxes .box {
    float: left;
    text-align: center;
    width: 31.5%;
    /*min-width: 300px;*/
    padding: 10px;
  }

  footer {
    text-align: center;
    color: #32a0c2;
    background: #353637;
    height: 10vh;
    padding-top: 2vh;
    margin-top: 2vh;
  }

</style>
