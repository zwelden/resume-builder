<template>
    <div class="contact-form">
        <div>
            <label for="">Location</label>
            <input type="text" v-model="location" @keyup="checkForChanges">
        </div>
        <div>
            <label for="">Phone #</label>
            <input type="text" v-model="phone" @keyup="checkForChanges">
        </div>
        <div>
            <label for="">Email</label>
            <input type="text" v-model="email" @keyup="checkForChanges">
        </div>
        <div>
            <label for="">Website</label>
            <input type="text" v-model="website" @keyup="checkForChanges">
        </div>
        <div>
            <label for="">LinkedIn</label>
            <input type="text" v-model="linkedin" @keyup="checkForChanges">
        </div>
        <div>
            <label for="">Github</label>
            <input type="text" v-model="github" @keyup="checkForChanges">
        </div>

        <div v-if="hasChanges" class="action-buttons">
            <button class="btn btn-md btn-primary" @click="saveContactForm">
                Save Contact Info
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            oldLocation: '',
            oldPhone: '',
            oldEmail: '',
            oldWebsite: '',
            oldLinkedin: '',
            oldGithub: '',
            location: '',
            phone: '',
            email: '',
            website: '',
            linkedin: '',
            github: '',
            hasChanges: false
        }
    },
    methods: {
        checkForChanges() {
            if (this.oldLocation !== this.location
                || this.oldPhone !== this.phone 
                || this.oldEmail !== this.email
                || this.oldWebsite !== this.website
                || this.oldLinkedin !== this.linkedin
                || this.oldGithub !== this.github
            ) {
                this.hasChanges = true;
            }
            else {
                this.hasChanges = false;
            }
        },

        saveContactForm() {
            let contactInfo = {
                location: this.location,
                phone: this.phone,
                email: this.email,
                website: this.website,
                linkedin: this.linkedin,
                github: this.github
            }

            this.$store.commit('saveContactInfo', contactInfo);

            this.oldLocation = this.location;
            this.oldPhone = this.phone;
            this.oldEmail = this.email;
            this.oldWebsite = this.website;
            this.oldLinkedin = this.linkedin;
            this.oldGithub = this.github;
            this.hasChanges = false;
        }
    },
    created () {
        let contactInfo = this.$store.state.resumeContent.contactInfo;

        this.oldLocation = (contactInfo.location) ? contactInfo.location : '';
        this.oldPhone = (contactInfo.phone) ? contactInfo.phone : '';
        this.oldEmail = (contactInfo.email) ? contactInfo.email : '';
        this.oldWebsite = (contactInfo.website) ? contactInfo.website : '';
        this.oldLinkedin = (contactInfo.linkedin) ? contactInfo.linkedin : '';
        this.oldGithub = (contactInfo.github) ? contactInfo.github : '';

        this.location = (contactInfo.location) ? contactInfo.location : '';
        this.phone = (contactInfo.phone) ? contactInfo.phone : '';
        this.email = (contactInfo.email) ? contactInfo.email : '';
        this.website = (contactInfo.website) ? contactInfo.website : '';
        this.linkedin = (contactInfo.linkedin) ? contactInfo.linkedin : '';
        this.github = (contactInfo.github) ? contactInfo.github : '';
    }
}
</script>

<style scoped>
.action-buttons {
    text-align: right;
}
</style>