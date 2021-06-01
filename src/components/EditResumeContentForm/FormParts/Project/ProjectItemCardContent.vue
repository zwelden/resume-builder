<template>
    <div class="project-item-card-content">
        <div v-if="!editActive" class="saved-data">
            <div class="project-name">
                {{ name }}
            </div>
            <div class="project-year">
                {{ year }}
            </div>
            <div class="project-link">
                {{ link }}
            </div>
        </div>
        
        <div v-if="editActive" class="edit-form">
            <h5>Edit Project Item</h5>
            <ProjectItemForm :order="order" @cancelEdit="cancelEdit" @saveEdit="saveEdit"></ProjectItemForm>
        </div>
    </div>
</template>

<script>
import ProjectItemForm from './ProjectItemForm';

export default {
    name: 'ProjectItemCardContent',
    props: {
        name: String, 
        year: String, 
        link: String, 
        order: Number,
        editActive: Boolean,
        cancelEdit: Function,
        saveEdit: Function
    },
    components: {
        ProjectItemForm
    }
}
</script>

<style scoped>
.project-name {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
}

.project-year {
    font-style: italic;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.2;
}

.project-link {
    font-size: .8rem;
    color: #8a8a8a;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1px;
    margin-bottom: 2px;
}
</style>