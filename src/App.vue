<template>
  <div id="app">
    <ResumePage />
  </div>
</template>

<script>
import ResumePage from './components/ResumePage.vue'

export default {
  name: 'App',
  components: {
    ResumePage
  }
}
</script>

<style>
html, body {
  background: #f7f7f7;
  padding: 0;
  margin: 0;
}

body div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding-top: 2rem;
  padding-bottom: 2rem;
}

a {
  color: #2b79cb;
}

a:visited {
  color: #2b79cb; 
}

@media print {
  #app {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
