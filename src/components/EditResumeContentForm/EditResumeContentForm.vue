<template>
    <div class="edit-resume-content-form">
        <div class="top-actions">
            <div>
                <button class="btn btn-primary" @click="showResume">&lt;&lt; Back to Resumé</button>
            </div>
            <div v-if="!jsonLoaderActive" class="json-options-btns">
                <button class="btn btn-secondary" @click="exportJson">Export to JSON</button>
                <button class="btn btn-secondary" @click="loadJson">Load from JSON</button>
            </div>
        </div>

        <div v-if="!jsonLoaderActive" class="edit-sections">

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

        <div v-if="jsonLoaderActive" class="json-load-wrapper">
            <JsonLoader :load-type="jsonLoadType" @cancelJson="cancelJson"></JsonLoader>
        </div>
    </div>
</template>

<script>
import FormSection from './FormParts/FormSection';
import HeaderForm from './FormParts/Header/HeaderForm';
import ContactForm from './FormParts/Contact/ContactForm';
import ExperienceForm from './FormParts/Experience/ExperienceForm';
import EducationForm from './FormParts/Education/EducationForm';
import SkillsForm from './FormParts/Skills/SkillsForm';
import InterestsForm from './FormParts/Interests/InterestsForm';
import ProjectsForm from './FormParts/Project/ProjectsForm';
import JsonLoader from './FormParts/JsonLoader';

export default {
    name: 'EditResumeContentForm',
    data() {
        return {
            jsonLoaderActive: false,
            jsonLoadType: 'import'
        }
    },
    components: {
        FormSection,
        HeaderForm,
        ContactForm,
        ExperienceForm,
        EducationForm,
        SkillsForm,
        InterestsForm,
        ProjectsForm,
        JsonLoader
    },
    methods: {
        showResume() {
            this.$store.commit('showResume');
        },

        loadJson() {
            this.jsonLoadType = 'import';
            this.jsonLoaderActive = true;
        },

        exportJson() {
            this.jsonLoadType = 'export';
            this.jsonLoaderActive = true;
        },

        cancelJson() {
            this.jsonLoaderActive = false;
        }
    }
}
</script>

<style scoped>
.edit-resume-content-form {
    background: #fff;
    width: 95%;
    max-width: 7.5in;
    padding: .25in;
    box-shadow: 0 5px 10px -2px #9e9e9e;
    position: relative;
    margin: auto;
    text-align: left;
}

.top-actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.json-options-btns {
    text-align: right;
}

.json-options-btns .btn {
    margin-right: 0;
    margin-left: .25rem;
    margin-bottom: .5rem;
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


@media print {
    .edit-resume-content-form {
        display: none;
    }
}
</style>