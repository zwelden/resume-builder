<template>
    <div class="education-item-card-content">
        <div v-if="!editActive" class="saved-data">
            <div class="school-name">
                {{ name }}
            </div>
            <div class="school-location">
                {{ location }}
            </div>
            <div class="education-subtitle">
                {{ start }} - {{ end }}
            </div>
        </div>
        
        <div v-if="editActive" class="edit-form">
            <h5>Edit Education Item</h5>
            <EducationItemForm :order="order" @cancelEdit="cancelEdit" @saveEdit="saveEdit"></EducationItemForm>
        </div>
    </div>
</template>

<script>
import EducationItemForm from './EducationItemForm';

export default {
    name: 'EducationItemCardContent',
    props: {
        name: String, 
        location: String, 
        start: String, 
        end: String, 
        order: Number,
        editActive: Boolean,
        cancelEdit: Function,
        saveEdit: Function
    },
    components: {
        EducationItemForm
    }
}
</script>

<style scoped>
.school-name {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
}

.school-location {
    font-style: italic;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.2;
}

.education-subtitle {
    font-size: .8rem;
    color: #8a8a8a;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1px;
    margin-bottom: 2px;
}
</style>