<template>
    <div class="projects-form">
        <ProjectItemForm />
        
        <div>
            <button>Add New Skill</button>
        </div>
    </div>
</template>

<script>
import ProjectItemForm from './ProjectItemForm';

export default {
    name: 'ProjectsForm',
    components: {
        ProjectItemForm
    }
}
</script>

<style scoped>

</style>