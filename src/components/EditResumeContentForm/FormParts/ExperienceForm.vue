<template>
    <div class="experience-form">
        <FormCard 
            v-for="experience in experienceItems" 
            :key="experience.order" 
            :reference-id="experience.order" 
            v-slot="{ editActive, cancelEdit, saveEdit }" 
            @deleteItem="deleteExperienceItem($event)">
            
            <ExperienceItemCardContent 
                :company-name="experience.company"
                :job-title="experience.jobTitle"
                :start="experience.start"
                :end="experience.end" 
                :order="experience.order"
                :edit-active="editActive"
                :cancel-edit="cancelEdit"
                :save-edit="saveEdit">
            </ExperienceItemCardContent>
        </FormCard>

        <div v-if="newItemActive" class="new-experience-item-card">
            <h5>New Experience Item</h5>
            <ExperienceItemForm v-on:cancelEdit="cancelEdit" v-on:saveEdit="saveEdit"></ExperienceItemForm>  
        </div>

        <div class="action-buttons">
            <button v-if="newItemActive == false" class="btn btn-md btn-alt" @click="addNewExprItem">
                Add new exerience item
            </button>
        </div>
    </div>
</template>

<script>
import ExperienceItemForm from './ExperienceItemForm';
import FormCard from './FormCard';
import ExperienceItemCardContent from './ExperienceItemCardContent';

export default {
    name: 'ExperienceForm',
    components: {
        ExperienceItemForm,
        FormCard,
        ExperienceItemCardContent
    },
    data() {
        return {
            newItemActive: false
        }
    },
    methods: {
        addNewExprItem() {
            this.newItemActive = true;
        },
       
        cancelEdit() {
            this.newItemActive = false;
        },

        saveEdit() {
            this.newItemActive = false;
        },

        deleteExperienceItem(order) {
            this.$store.commit('deleteExperience', order);
        }
    },
    computed: {
        experienceItems() {
            return this.$store.state.resumeContent.experience;
        }
    },
    
}
</script>

<style scoped>


.new-experience-item-card {
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
.experience-form h5 {
    margin: 0;
    margin-bottom: 1rem;
}

.experience-form input,
.experience-form textarea {
    background: #fff !important;
}
</style>