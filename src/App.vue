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

body, div, span, p, a, button, ul, li, input, select, textarea {
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

label {
  display: block;
  color: #8b8b8c;
  margin-bottom: 2px;
  line-height: 1;
  font-size: .85rem;
}

textarea,
select,
input {
  display: block;
  width: 100%;
  padding: .25rem .5rem;
  font-size: 1rem;
  border: 1px solid #e7e7e8;
  border-radius: 4px;
  background: #f8f9fb;
  margin-bottom: .75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: .5rem 1rem;
  border-radius: .25rem;
  font-weight: 600;
  cursor: pointer;
  line-height: 1;
}

.btn-sm {
  padding: .25rem .5rem;
  font-size: .85rem;
}

.btn-primary {
  background: #2bc8cb;
  background: linear-gradient(180deg, rgba(59,218,200,1) 0%, rgba(43,200,203,1) 90%);
  color: #fff;
}

.btn-primary:hover {
  background: #27b5b8;
}

.btn-danger {
  background: rgba(203,43,43,1);
  background: linear-gradient(180deg, rgba(218,59,117,1) 0%, rgba(203,43,43,1) 90%);
  color: #fff;
}

.btn-danger:hover {
  background: rgb(193, 41, 41);
  color: #fff;
}

.btn-danger-outline {
  padding: calc(.25rem - 1px) calc(.5rem - 1px);
  border: 1px solid rgba(203,43,43,.75);
  color: rgba(203,43,43,1);
  background: rgba(255, 255, 255, .3);
}

.btn-danger-outline:hover {
  background: rgb(193, 41, 41);
  color: #fff;
}

.btn-alt {
  background: rgba(43,120,203,1));
  background: linear-gradient(180deg, rgba(59,149,218,1) 0%, rgba(43,120,203,1) 90%);
  color: #fff;
}

.btn-alt:hover {
  background: rgb(39, 109, 184);
}

@media print {
  #app {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
