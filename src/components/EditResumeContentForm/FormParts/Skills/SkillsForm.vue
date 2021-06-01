<template>
    <div class="skills-form">
        <FormCard 
            v-for="skill in skillItems" 
            :key="skill.order" 
            :reference-id="skill.order" 
            v-slot="{ editActive, cancelEdit, saveEdit }" 
            @deleteItem="deleteSkillItem($event)"
            @moveItemUp="moveItemUp($event)"
            @moveItemDown="moveItemDown($event)">

            <SkillItemCardContent 
                :name="skill.name"
                :years="skill.years"
                :order="skill.order"
                :edit-active="editActive"
                :cancel-edit="cancelEdit"
                :save-edit="saveEdit">
            </SkillItemCardContent>
        </FormCard>

        <div v-if="newItemActive" class="new-skill-item-card">
            <h5>New Skill Item</h5>
            <SkillItemForm v-on:cancelEdit="cancelEdit" v-on:saveEdit="saveEdit"></SkillItemForm>  
        </div>

        <div class="action-buttons">
            <button v-if="newItemActive == false" class="btn btn-md btn-alt" @click="addNewSkillItem">
                Add Skill
            </button>
        </div>
    </div>
</template>

<script>
import SkillItemForm from './SkillItemForm';
import FormCard from '../FormCard';
import SkillItemCardContent from './SkillItemCardContent';


export default {
    name: 'SkillsForm',
    components: {
        SkillItemForm,
        FormCard,
        SkillItemCardContent
    },
    data() {
        return {
            newItemActive: false
        }
    },
    methods: {
        addNewSkillItem() {
            this.newItemActive = true;
        },
       
        cancelEdit() {
            this.newItemActive = false;
        },

        saveEdit() {
            this.newItemActive = false;
        },

        deleteSkillItem(order) {
            this.$store.commit('deleteSkill', order);
        },

        moveItemUp(currentOrder) {
            this.$store.commit('moveSkillItemUp', currentOrder);
        },

        moveItemDown(currentOrder) {
            this.$store.commit('moveSkillItemDown', currentOrder);
        }
    },
    computed: {
        skillItems() {
            return this.$store.state.resumeContent.skills;
        }
    },
}
</script>

<style scoped>
.new-skill-item-card {
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
.skills-form h5 {
    margin: 0;
    margin-bottom: 1rem;
}

.skills-form input,
.skills-form textarea {
    background: #fff !important;
}
</style>