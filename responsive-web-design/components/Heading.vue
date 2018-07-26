<template>
  <div>
    <header id="heading">
      <div class="container">
        <div id="branding">
          <h1>
            <i class="fa fa-smile-o"></i>
            Am I <span class="highlight">responsive?</span>
          </h1>
        </div>
        <links></links>
      </div>
    </header>
  </div>
</template>

<script>
  import Links from '../components/Links.vue';

  export default {
    name: 'heading',
    components: {
      Links,
    }
  };
</script>
