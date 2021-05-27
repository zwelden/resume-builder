<template>
    <div class="edit-resume-content-form">
        <div class="return-to-resume-wrapper">
            <button class="btn" @click="showResume">&lt;&lt; Back to Resumé</button>
        </div>

        <div class="selection-wrapper">
            <select class="resume-section-select" v-model="selectedEdit" @change="showEditSection">
                <option value="">Choose A Section To Edit</option>
                <option value="header">Header</option>
                <option value="contact">Contact</option>
                <option value="experience">Experience</option>
                <option value="education">Education</option>
                <option value="skills">Skills</option>
                <option value="projects">Projects</option>
                <option value="interests">Interests</option>
            </select>
        </div>

        <div class="edit-sections">
            <HeaderForm v-if="activeSections.header" />
        </div>
    </div>
</template>

<script>
import HeaderForm from './FormParts/HeaderForm'

export default {
    name: 'EditResumeContentForm',
    components: {
        HeaderForm
    },
    data() {
        return {
            selectedEdit: "",
            activeSections: {
                header: false,
                contact: false,
                experience: false,
                education: false,
                skills: false,
                projects: false,
                interests: false
            }
        }
    },
    methods: {
        showResume() {
            this.$store.commit('showResume');
        },

        showEditSection() {

            for (let section in this.activeSections) {
                this.activeSections[section] = false;
            }

            if (Object.prototype.hasOwnProperty.call(this.activeSections, this.selectedEdit)) {
                this.activeSections[this.selectedEdit] = true;
            }
        }
    }
}
</script>

<style scoped>
.edit-resume-content-form {
    background: #fff;
    width: 8.5in;
    padding: .25in;
    box-shadow: 0 5px 10px -2px #9e9e9e;
    position: relative;
    left: 50%;
    transform: translateX(-50%) scale(1);
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