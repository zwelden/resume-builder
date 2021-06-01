<template>
    <div class="interests-form">
        <FormCard 
            v-for="interest in interestItems" 
            :key="interest.order" 
            :reference-id="interest.order" 
            v-slot="{ editActive, cancelEdit, saveEdit }" 
            @deleteItem="deleteInterestItem($event)"
            @moveItemUp="moveItemUp($event)"
            @moveItemDown="moveItemDown($event)">

            <InterestsItemCardContent 
                :name="interest.name"
                :order="interest.order"
                :edit-active="editActive"
                :cancel-edit="cancelEdit"
                :save-edit="saveEdit">
            </InterestsItemCardContent>
        </FormCard>

        <div v-if="newItemActive" class="new-interest-item-card">
            <h5>New Interest Item</h5>
            <InterestsItemForm v-on:cancelEdit="cancelEdit" v-on:saveEdit="saveEdit"></InterestsItemForm>  
        </div>

        <div class="action-buttons">
            <button v-if="newItemActive == false" class="btn btn-md btn-alt" @click="addNewInterestItem">
                Add Interest
            </button>
        </div>
    </div>
</template>

<script>
import InterestsItemForm from './InterestsItemForm';
import FormCard from '../FormCard';
import InterestsItemCardContent from './InterestsItemCardContent';


export default {
    name: 'InterestsForm',
    components: {
        InterestsItemForm,
        FormCard,
        InterestsItemCardContent
    },
    data() {
        return {
            newItemActive: false
        }
    },
    methods: {
        addNewInterestItem() {
            this.newItemActive = true;
        },
       
        cancelEdit() {
            this.newItemActive = false;
        },

        saveEdit() {
            this.newItemActive = false;
        },

        deleteInterestItem(order) {
            this.$store.commit('deleteInterest', order);
        },

        moveItemUp(currentOrder) {
            this.$store.commit('moveInterestItemUp', currentOrder);
        },

        moveItemDown(currentOrder) {
            this.$store.commit('moveInterestItemDown', currentOrder);
        }
    },
    computed: {
        interestItems() {
            return this.$store.state.resumeContent.interests;
        }
    },
}
</script>

<style scoped>
.new-interest-item-card {
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
.interests-form h5 {
    margin: 0;
    margin-bottom: 1rem;
}

.interests-form input,
.interests-form textarea {
    background: #fff !important;
}
</style>