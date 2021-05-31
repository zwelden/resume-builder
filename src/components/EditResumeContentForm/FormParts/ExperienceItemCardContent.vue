<template>
    <div class="experience-item-card-content">
        <div v-if="!editActive" class="saved-data">
            <div class="company-name">
                {{ companyName }}
            </div>
            <div class="position-title">
                {{ jobTitle }}
            </div>
            <div class="experience-subtitle">
                {{ start }} - {{ end }}
            </div>
        </div>
        
        <div v-if="editActive" class="edit-form">
            <h5>Edit Experience Item</h5>
            <ExperienceItemForm :order="order" @cancelEdit="cancelEdit" @saveEdit="saveEdit"></ExperienceItemForm>
        </div>
    </div>
</template>

<script>
import ExperienceItemForm from './ExperienceItemForm';

export default {
    name: 'ExperienceItemCardContent',
    props: {
        companyName: String, 
        jobTitle: String, 
        start: String, 
        end: String, 
        order: Number,
        editActive: Boolean,
        cancelEdit: Function,
        saveEdit: Function
    },
    components: {
        ExperienceItemForm
    }
}
</script>

<style scoped>
.company-name {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
}

.position-title {
    font-style: italic;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.2;
}

.experience-subtitle {
    font-size: .8rem;
    color: #8a8a8a;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1px;
    margin-bottom: 2px;
}
</style>