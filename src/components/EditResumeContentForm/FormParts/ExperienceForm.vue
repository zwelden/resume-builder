<template>
    <div class="experience-form">
        <FormCard>
            <ExperienceItemCardContent 
                v-for="experience in experienceItems" 
                :key="experience.order"
                :company-name="experience.company"
                :job-title="experience.jobTitle"
                :start="experience.start"
                :end="experience.end" >
            </ExperienceItemCardContent>
        </FormCard>

        <ExperienceItemForm />        

        <div>
            <button>Add new exerience item</button>
        </div>
    </div>
</template>

<script>
import ExperienceItemForm from './ExperienceItemForm';
import FormCard from './FormCard';
import ExperienceItemCardContent from './ExperienceItemCardContent';

export default {
    name: 'ExperienceForm',
    computed: {
        experienceItems() {
            return this.$store.state.resumeContent.experience;
        }
    },
    components: {
        ExperienceItemForm,
        FormCard,
        ExperienceItemCardContent
    }
}
</script>

<style scoped>

</style>