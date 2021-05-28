<template>
    <div class="experience-form">
        <ExperienceItemForm />        

        <div>
            <button>Add new exerience item</button>
        </div>
    </div>
</template>

<script>
import ExperienceItemForm from './ExperienceItemForm';

export default {
    name: 'ExperienceForm',
    components: {
        ExperienceItemForm
    }
}
</script>

<style scoped>

</style>