<template>
    <div class="skills-form">
        <SkillItemForm />
        
        <div>
            <button>Add New Skill</button>
        </div>
    </div>
</template>

<script>
import SkillItemForm from './SkillItemForm';

export default {
    name: 'SkillsForm',
    components: {
        SkillItemForm
    }
}
</script>

<style scoped>

</style>