<template>
    <div class="edit-resume-content-form">
        <div class="return-to-resume-wrapper">
            <button class="btn" @click="showResume">&lt;&lt; Back to Resumé</button>
        </div>

        <div class="edit-sections">

            <FormSection section-title="Resume Header">
                <HeaderForm></HeaderForm>
            </FormSection>

            <FormSection section-title="Contact Info">
                <ContactForm></ContactForm>
            </FormSection>

            <FormSection section-title="Experience">
                <ExperienceForm></ExperienceForm>
            </FormSection>

            <FormSection section-title="Education">
                <EducationForm></EducationForm>
            </FormSection>

            <FormSection section-title="Projects">
                <ProjectsForm></ProjectsForm>
            </FormSection>

            <FormSection section-title="Skills">
                <SkillsForm></SkillsForm>
            </FormSection>

            <FormSection section-title="Interests">
                <InterestsForm></InterestsForm>
            </FormSection>

        </div>
    </div>
</template>

<script>
import FormSection from './FormParts/FormSection';
import HeaderForm from './FormParts/HeaderForm';
import ContactForm from './FormParts/ContactForm';
import ExperienceForm from './FormParts/ExperienceForm';
import EducationForm from './FormParts/EducationForm';
import SkillsForm from './FormParts/SkillsForm';
import InterestsForm from './FormParts/InterestsForm';
import ProjectsForm from './FormParts/ProjectsForm';

export default {
    name: 'EditResumeContentForm',
    components: {
        FormSection,
        HeaderForm,
        ContactForm,
        ExperienceForm,
        EducationForm,
        SkillsForm,
        InterestsForm,
        ProjectsForm
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
    background: linear-gradient(180deg, rgba(59,218,200,1) 0%, rgba(43,200,203,1) 90%);
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}

.btn:hover {
    background: #27b5b8;
}

.resume-section-select {
    padding: .25rem .5rem;
    font-size: 1rem;
    width: 300px;
    color: #30b4b6;
    font-weight: 600;
    letter-spacing: .5px;
    border-color: #777;
    border: none;
    border-bottom: 2px solid #2bc8cb;
    margin-bottom: 1rem;
}

</style>