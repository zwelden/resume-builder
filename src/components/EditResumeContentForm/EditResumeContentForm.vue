<template>
    <div class="edit-resume-content-form">
        <div class="return-to-resume-wrapper">
            <button class="btn" @click="showResume">&lt;&lt; Back to Resumé</button>
        </div>

        <div class="edit-sections">

            <FormSection section-title="Resume Header">
                <HeaderForm></HeaderForm>
            </FormSection>

            <FormSection section-title="Experience">
                <ExperienceForm></ExperienceForm>
            </FormSection>

            <FormSection section-title="Education">
                <EducationForm></EducationForm>
            </FormSection>
            
        </div>
    </div>
</template>

<script>
import FormSection from './FormParts/FormSection';
import HeaderForm from './FormParts/HeaderForm';
import ExperienceForm from './FormParts/ExperienceForm';
import EducationForm from './FormParts/EducationForm';

export default {
    name: 'EditResumeContentForm',
    components: {
        FormSection,
        HeaderForm,
        ExperienceForm,
        EducationForm
    },
    methods: {
        showResume() {
            this.$store.commit('showResume');
        }
    }
}
</script>

<style scoped>
.edit-resume-content-form {
    background: #fff;
    width: 7.5in;
    padding: .25in;
    box-shadow: 0 5px 10px -2px #9e9e9e;
    position: relative;
    left: 50%;
    transform: translateX(-50%) scale(1);
    text-align: left;
}

.return-to-resume-wrapper {
    text-align: left;
    margin-bottom: 1rem;
}

.btn {
    border: none;
    padding: .5rem 1rem;
    border-radius: .25rem;
    background: #2bc8cb;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}

.btn:hover {
    background: #23a0a2;
}

.resume-section-select {
    padding: .25rem .5rem;
    font-size: 1rem;
    width: 300px;
    color: #23a0a2;
    font-weight: 600;
    letter-spacing: .5px;
    border-color: #777;
    border: none;
    border-bottom: 2px solid #2bc8cb;
    margin-bottom: 1rem;
}

</style>