<template>
  <div id="app">
    <div v-if="resumeActive && activeResumeStyle === 1" class="resume-container">
      <ResumeStyle1 />
    </div>

    <div v-if="resumeActive && activeResumeStyle === 2" class="resume-container">
      <ResumeStyle2 />
    </div>
    
    
    <SideMenu />

    <div v-if="editActive" class="edit-resume-container">
      <EditResumeContentForm />
    </div>
    
  </div>
</template>

<script>
import ResumeStyle1 from './components/ResumePages/ResumeStyle1/ResumeStyle1.vue'
import ResumeStyle2 from './components/ResumePages/ResumeStyle2/ResumeStyle2.vue'
import SideMenu from './components/SideMenu/SideMenu'
import EditResumeContentForm from './components/EditResumeContentForm/EditResumeContentForm'

export default {
  name: 'App',
  
  data() {
    return {
      activeResumeStyle: 1
    }
  },

  components: {
    ResumeStyle1,
    ResumeStyle2,
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
  width: 100%;
  max-width: 100%;
}

.edit-resume-container,
.resume-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4px;
  padding-right: 5px;
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
  margin-right: .25rem;
}

.btn:last-child {
  margin-right: 0;
}

.btn-sm {
  padding: .25rem .5rem;
  font-size: .85rem;
  font-weight: 600;
}

.btn-md {
  padding: .35rem .7rem;
  font-size: .95rem;
}

.btn-primary {
  background: rgba(31,196,199,1);
  background: linear-gradient(180deg, rgba(59,218,200,1) 0%, rgba(31,196,199,1) 90%);
  color: #fff;
  text-shadow: 1px 1px 2px #1d9698;
}

.btn-primary:hover {
  background: #27b5b8;
}

.btn-secondary {
  background: rgba(190,190,190,1);
  background: linear-gradient(180deg, rgb(230 230 230) 0%, rgb(218 218 218) 90%);
  color: #6e6e70;
}

.btn-secondary:hover {
  background: #bababa;
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
  /* background: rgba(43,120,203,1));
  background: linear-gradient(180deg, rgba(59,149,218,1) 0%, rgba(43,120,203,1) 90%); */

  background: rgb(79,170,240);
  background: linear-gradient(180deg, rgba(79,170,240,1) 0%, rgba(57,139,227,1) 90%);

  background: rgb(79,186,240);
  background: linear-gradient(180deg, rgba(79,186,240,1) 0%, rgba(57,159,227,1) 90%);
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

  .resume-container {
    padding: 0;
  }
}
</style>
