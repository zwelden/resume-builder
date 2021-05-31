<template>
    <div class="education-form">
        <FormCard 
            v-for="education in educationItems" 
            :key="education.order" 
            :reference-id="education.order" 
            v-slot="{ editActive, cancelEdit, saveEdit }" 
            @deleteItem="deleteEducationItem($event)"
            @moveItemUp="moveItemUp($event)"
            @moveItemDown="moveItemDown($event)">

            <EducationItemCardContent 
                :name="education.name"
                :location="education.location"
                :start="education.start"
                :end="education.end" 
                :order="education.order"
                :edit-active="editActive"
                :cancel-edit="cancelEdit"
                :save-edit="saveEdit">
            </EducationItemCardContent>
        </FormCard>

        <div v-if="newItemActive" class="new-education-item-card">
            <h5>New Education Item</h5>
            <EducationItemForm v-on:cancelEdit="cancelEdit" v-on:saveEdit="saveEdit"></EducationItemForm>  
        </div>

        <div class="action-buttons">
            <button v-if="newItemActive == false" class="btn btn-md btn-alt" @click="addNewEduItem">
                Add new education item
            </button>
        </div>

    </div>
</template>

<script>
import EducationItemForm from './EducationItemForm';
import FormCard from './FormCard';
import EducationItemCardContent from './EducationItemCardContent';

export default {
    name: 'EducationForm',
    components: {
        EducationItemForm,
        FormCard,
        EducationItemCardContent
    },
    data() {
        return {
            newItemActive: false
        }
    },
    methods: {
        addNewEduItem() {
            this.newItemActive = true;
        },
       
        cancelEdit() {
            this.newItemActive = false;
        },

        saveEdit() {
            this.newItemActive = false;
        },

        deleteEducationItem(order) {
            this.$store.commit('deleteEducation', order);
        },

        moveItemUp(currentOrder) {
            this.$store.commit('moveEducationItemUp', currentOrder);
        },

        moveItemDown(currentOrder) {
            this.$store.commit('moveEducationItemDown', currentOrder);
        }
    },
    computed: {
        educationItems() {
            return this.$store.state.resumeContent.education;
        }
    },
}
</script>

<style scoped>
.new-education-item-card {
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
.education-form h5 {
    margin: 0;
    margin-bottom: 1rem;
}

.education-form input,
.education-form textarea {
    background: #fff !important;
}
</style>