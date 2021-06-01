<template>
    <div class="projects-form">
        <FormCard 
            v-for="project in projectItems" 
            :key="project.order" 
            :reference-id="project.order" 
            v-slot="{ editActive, cancelEdit, saveEdit }" 
            @deleteItem="deleteProjectItem($event)"
            @moveItemUp="moveItemUp($event)"
            @moveItemDown="moveItemDown($event)">

            <ProjectItemCardContent 
                :name="project.name"
                :year="project.year"
                :link="project.link"
                :order="project.order"
                :edit-active="editActive"
                :cancel-edit="cancelEdit"
                :save-edit="saveEdit">
            </ProjectItemCardContent>
        </FormCard>

        <div v-if="newItemActive" class="new-project-item-card">
            <h5>New Project Item</h5>
            <ProjectItemForm v-on:cancelEdit="cancelEdit" v-on:saveEdit="saveEdit"></ProjectItemForm>  
        </div>

        <div class="action-buttons">
            <button v-if="newItemActive == false" class="btn btn-md btn-alt" @click="addNewProjItem">
                Add Project
            </button>
        </div>
    </div>
</template>

<script>
import ProjectItemForm from './ProjectItemForm';
import FormCard from '../FormCard';
import ProjectItemCardContent from './ProjectItemCardContent';


export default {
    name: 'ProjectsForm',
    components: {
        ProjectItemForm,
        FormCard,
        ProjectItemCardContent
    },
    data() {
        return {
            newItemActive: false
        }
    },
    methods: {
        addNewProjItem() {
            this.newItemActive = true;
        },
       
        cancelEdit() {
            this.newItemActive = false;
        },

        saveEdit() {
            this.newItemActive = false;
        },

        deleteProjectItem(order) {
            this.$store.commit('deleteProject', order);
        },

        moveItemUp(currentOrder) {
            this.$store.commit('moveProjectItemUp', currentOrder);
        },

        moveItemDown(currentOrder) {
            this.$store.commit('moveProjectItemDown', currentOrder);
        }
    },
    computed: {
        projectItems() {
            return this.$store.state.resumeContent.projects;
        }
    },
}
</script>

<style scoped>
.new-project-item-card {
    position: relative;
    border: 1px solid #e7e7e8;
    border-radius: 4px;
    background: #f8f9fb;
    margin-bottom: 1rem;
    padding: .5rem;
}

.action-buttons {
    text-align: right;
}
</style>

<style>
.projects-form h5 {
    margin: 0;
    margin-bottom: 1rem;
}

.projects-form input,
.projects-form textarea {
    background: #fff !important;
}
</style>