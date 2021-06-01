<template>
    <div class="interest-item-card-content">
        <div v-if="!editActive" class="saved-data">
            <div class="interest-name">
                {{ name }}
            </div>
        </div>
        
        <div v-if="editActive" class="edit-form">
            <h5>Edit Interest Item</h5>
            <InterestsItemForm :order="order" @cancelEdit="cancelEdit" @saveEdit="saveEdit"></InterestsItemForm>
        </div>
    </div>
</template>

<script>
import InterestsItemForm from './InterestsItemForm';

export default {
    name: 'InterestsItemCardContent',
    props: {
        name: String, 
        order: Number,
        editActive: Boolean,
        cancelEdit: Function,
        saveEdit: Function
    },
    components: {
        InterestsItemForm
    }
}
</script>

<style scoped>
.interest-name {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
}
</style>