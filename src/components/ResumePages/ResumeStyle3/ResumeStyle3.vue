<template>
    <div class="resume-page resume-style-3" v-bind:style="{ transform: transform }">

        <Header :applicant-name="resumeContent.applicantName" 
                :job-title="resumeContent.jobTitle">
        </Header>


        <div class="resume-content-wrapper">

            <div class="left-col">
                <div class="section-wrapper">
                    <SectionTitle title-name="Contact"></SectionTitle>
                    <Contact :data="resumeContent.contactInfo"></Contact>
                </div>
                
                <div class="section-wrapper">
                    <SectionTitle title-name="Education"></SectionTitle>
                    <Education v-for="education in resumeContent.education" :key="education.order" :data="education"></Education>
                </div>

                <div class="section-wrapper">
                    <SectionTitle title-name="Skills"></SectionTitle>
                    <Skill v-for="skill in resumeContent.skills" :key="skill.order" :skill-name="skill.name" :skill-years="skill.years"></Skill>
                </div>
            </div>

            <div class="content-col">
                <div class="section-wrapper">
                    <SectionTitle title-name="Experience"></SectionTitle>
                    <Experience v-for="experience in resumeContent.experience" :key="experience.order" :data="experience"></Experience>
                </div>

                <div v-if="resumeContent.projects.length > 0" class="section-wrapper">
                    <SectionTitle title-name="Projects"></SectionTitle>
                    <Project v-for="project in resumeContent.projects" :key="project.order" :data="project"></Project>
                </div>
            </div>            
        </div>
        

    </div>
</template>

<script>
import Header from './ResumeComponents/Header';
import SectionTitle from './ResumeComponents/SectionTitle';
import Contact from './ResumeComponents/Contact';
import Education from './ResumeComponents/Education';
import Skill from './ResumeComponents/Skill';
import Experience from './ResumeComponents/Experience';
import Project from './ResumeComponents/Project';

export default {
    name: 'ResumeStyle2',
    data() {
        return {
            transform: 'scale(1)'
        }
    },
    components: {
        Header,
        SectionTitle,
        Contact,
        Education,
        Skill,
        Experience,
        Project
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
    margin: auto;
    transform-origin: top left;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.resume-content-wrapper {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    flex-grow: 1;
}

.left-col {
    width: 225px;
    padding-right: 1rem;
    padding-top: 1rem;
    flex-shrink: 0;
    border-right: 2px solid #d8d8d8;
}

.content-col {
    width: 100%;
    padding: 1rem;
    padding-left: 2rem;
}

.section-wrapper {
    margin-bottom: 2.5rem;
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

<style>
.resume-style-3 {
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    color: #323232;
}


.resume-style-2 a {
    color: #3f3d44;
}

.resume-style-2 a:visited {
    color: #3f3d44;
}

.resume-style-2 a:hover {
    color: #343238;
}
</style>