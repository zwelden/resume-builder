<template>
  <div id="app">
    <ResumePage v-if="resumeActive"/>
    <SideMenu />
    <EditResumeContentForm v-if="editActive"/>
  </div>
</template>

<script>
import ResumePage from './components/ResumePage.vue'
import SideMenu from './components/SideMenu/SideMenu'
import EditResumeContentForm from './components/EditResumeContentForm/EditResumeContentForm'

export default {
  name: 'App',

  components: {
    ResumePage,
    SideMenu,
    EditResumeContentForm
  },

  computed: {
    resumeActive() {
      return this.$store.state.activeDisplay.resume;
    },

    configActive() {
      return this.$store.state.activeDisplay.config;
    },

    editActive() {
      return this.$store.state.activeDisplay.edit;
    }
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
  position: relative;

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
