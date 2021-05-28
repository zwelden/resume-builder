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

        <div class="new-experience-item-card">
            <h5>New Experience Item</h5>
            <ExperienceItemForm />  
        </div>

        <div class="action-buttons">
            <button class="btn btn-sm btn-alt">
                Add new exerience item
            </button>
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
h5 {
    margin: 0;
    margin-bottom: 1rem;
}

.new-experience-item-card {
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
.new-experience-item-card input,
.new-experience-item-card textarea {
    background: #fff !important;
}
</style>