<template>
    <div class="resume-header-form">
        <div class="section-content">
            <div>
                <label for="">Your Name</label>
                <input type="text" v-model="applicantName" @keyup="checkForChanges">
            </div>

            <div>
                <label for="">Job Title</label>
                <input type="text" v-model="jobTitle" @keyup="checkForChanges">
            </div>
        </div>

        <div v-if="hasChanges" class="action-buttons">
            <button class="btn btn-md btn-primary" @click="saveHeaderForm">
                Save Header Info
            </button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'HeaderForm',
    data() {
        return {
            oldApplicantName: '',
            oldJobTitle: '',
            applicantName: '',
            jobTitle: '',
            hasChanges: false
        }
    },
    methods: {
        checkForChanges() {
            if (this.oldApplicantName !== this.applicantName
                || this.oldJobTitle !== this.jobTitle 
            ) {
                this.hasChanges = true;
            }
            else {
                this.hasChanges = false;
            }
        },

        saveHeaderForm() {
            this.$store.commit('saveApplicantName', this.applicantName);
            this.$store.commit('saveJobTitle', this.jobTitle);

            this.oldApplicantName = this.applicantName;
            this.oldJobTitle = this.jobTitle;
            this.hasChanges = false;
        }
    },
    created () {
        let applicantName = this.$store.state.resumeContent.applicantName;
        let jobTitle = this.$store.state.resumeContent.jobTitle;

        this.oldApplicantName = (applicantName) ? applicantName : '';
        this.oldJobTitle = (jobTitle) ? jobTitle : '';

        this.applicantName = (applicantName) ? applicantName : '';
        this.jobTitle = (jobTitle) ? jobTitle : '';
    }
}
</script>


<style scoped>
.action-buttons {
    text-align: right;
}
</style>