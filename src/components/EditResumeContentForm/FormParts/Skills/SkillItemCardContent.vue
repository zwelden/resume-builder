<template>
    <div class="skill-item-card-content">
        <div v-if="!editActive" class="saved-data">
            <div class="skill-name">
                {{ name }}
            </div>
            <div class="skill-years">
                {{ years }} years
            </div>
        </div>
        
        <div v-if="editActive" class="edit-form">
            <h5>Edit Skill Item</h5>
            <SkillItemForm :order="order" @cancelEdit="cancelEdit" @saveEdit="saveEdit"></SkillItemForm>
        </div>
    </div>
</template>

<script>
import SkillItemForm from './SkillItemForm';

export default {
    name: 'SkillItemCardContent',
    props: {
        name: String, 
        years: String, 
        order: Number,
        editActive: Boolean,
        cancelEdit: Function,
        saveEdit: Function
    },
    components: {
        SkillItemForm
    }
}
</script>

<style scoped>
.skill-name {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
}

.skill-years {
    font-size: .8rem;
    color: #8a8a8a;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1px;
    margin-bottom: 2px;
}
</style>