<template>
    <div class="resume-page" v-bind:style="{ transform: transform }">
        <div class="resume-page-section resume-header">
            <div class="resume-col col-2">
                <Title :applicant-name="resumeContent.applicantName" 
                        :job-title="resumeContent.jobTitle">
                </Title>
            </div>
            <div v-if="resumeContent.contactInfo" class="resume-col col-1">
                <Contact :data="resumeContent.contactInfo"></Contact>
            </div>
        </div>

        <div class="resume-page-section resume-content">
            <div class="resume-col col-2">

                <div v-if="resumeContent.experience.length > 0" class="resume-detail-section">
                    <SectionTitle title-name="Related Experience"></SectionTitle>
                    
                    <ExperienceDetail v-for="experience in resumeContent.experience" :key="experience.order" :data="experience"></ExperienceDetail>
                </div>
                
                <div v-if="resumeContent.projects.length > 0" class="resume-detail-section">
                    <SectionTitle title-name="Projects"></SectionTitle>

                    <Project v-for="project in resumeContent.projects" :key="project.order" :data="project"></Project>
                </div>
                
            </div>
            <div class="resume-col col-1">

                <div v-if="resumeContent.skills.length > 0" class="resume-detail-section">
                    <SectionTitle title-name="Skills"></SectionTitle>
                    
                    <Skill v-for="skill in resumeContent.skills" :key="skill.order" :skill-name="skill.name" :skill-years="skill.years"></Skill>
                </div>

                <div v-if="resumeContent.education.length > 0" class="resume-detail-section">
                    <SectionTitle title-name="Education"></SectionTitle>

                    <Education v-for="education in resumeContent.education" :key="education.order" :data="education"></Education>
                </div>

                <div v-if="resumeContent.interests.length > 0" class="resume-detail-section">
                    <SectionTitle title-name="Interests"></SectionTitle>

                    <Interest v-for="interest in resumeContent.interests" :key="interest.order" :name="interest.name"></Interest>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Title from './ResumeComponents/Title';
import Contact from './ResumeComponents/Contact';
import SectionTitle from './ResumeComponents/SectionTitle';
import ExperienceDetail from './ResumeComponents/ExperienceDetail';
import Project from './ResumeComponents/Project';
import Skill from './ResumeComponents/Skill';
import Education from './ResumeComponents/Education';
import Interest from './ResumeComponents/Interest';

export default {
    name: 'ResumeStyle1',
    data() {
        return {
            transform: 'scale(1)'
        }
    },
    components: {
        Title,
        Contact,
        SectionTitle,
        ExperienceDetail,
        Project,
        Skill,
        Education,
        Interest
    },
    computed: {
        resumeContent() {
            return this.$store.state.resumeContent;
        }
    },
    created() {
        // let windowDPI = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        let windowWidth = window.innerWidth;
        let windowInches = windowWidth / 96; // not terribly accurate

        if (windowInches >= 8.6) {
            this.transform = 'scale(1)';
        }
        else if (windowInches >= 8.5) {
            this.transform = 'scale(.95)';
        }
        else {
            let scale = (windowInches / 8.5) * .98;
            this.transform = 'scale(' + scale + ')';
        }
    }
}
</script>

<style scoped>
.resume-page {
    background: #fff;
    width: 8.5in;
    height: 11in;
    padding: .5in;
    box-shadow: 0 5px 10px -2px #9e9e9e;
    /* position: relative; */
    /* left: 50%; */
    margin: auto;
    transform-origin: top left;
}

.resume-page-section {
    display: flex;
    justify-content: between;
}

.resume-col {
    flex-shrink: 0;
    flex-grow: 0;
    text-align: left;
}


.col-2 {
    width: 70%;
    padding: 1rem;
}

.col-1 {
    width: 30%;
    padding: 1rem;
}

.resume-detail-section {
    margin-bottom: 2rem;
}

@media print {
    .resume-page {
        width: 100%;
        box-shadow: none;
        top:0;
        left:0;
        transform: none;
        margin: 0;
        padding: 0;
    }
}
</style>
