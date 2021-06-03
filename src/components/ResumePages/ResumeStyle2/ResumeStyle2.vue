<template>
    <div class="resume-page resume-style-2" v-bind:style="{ transform: transform }">

        <Header :applicant-name="resumeContent.applicantName" 
                :job-title="resumeContent.jobTitle">
        </Header>


        <div class="resume-content-wrapper">

            <div class="left-col">
                <div class="section-wrapper">
                    <ShortSectionTitle title-name="Contact"></ShortSectionTitle>
                    <Contact :data="resumeContent.contactInfo"></Contact>
                </div>
                
                <div class="section-wrapper">
                    <ShortSectionTitle title-name="Education"></ShortSectionTitle>
                    <Education v-for="education in resumeContent.education" :key="education.order" :data="education"></Education>
                </div>

                <div class="section-wrapper">
                    <ShortSectionTitle title-name="Skills"></ShortSectionTitle>
                    <Skill v-for="skill in resumeContent.skills" :key="skill.order" :skill-name="skill.name" :skill-years="skill.years"></Skill>
                </div>
            </div>

            <div class="content-col">
                <div class="section-wrapper">
                    <LongSectionTitle title-name="Work Experience"></LongSectionTitle>
                    <Experience v-for="experience in resumeContent.experience" :key="experience.order" :data="experience"></Experience>
                </div>

                <div v-if="resumeContent.projects.length > 0" class="section-wrapper">
                    <LongSectionTitle title-name="Projects"></LongSectionTitle>
                    <Project v-for="project in resumeContent.projects" :key="project.order" :data="project"></Project>
                </div>
            </div>            
        </div>
        

    </div>
</template>

<script>
import Header from './ResumeComponents/Header';
import ShortSectionTitle from './ResumeComponents/ShortSectionTitle';
import LongSectionTitle from './ResumeComponents/LongSectionTitle';
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
        ShortSectionTitle,
        LongSectionTitle,
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
    /* position: relative; */
    /* left: 50%; */
    margin: auto;
    transform-origin: top left;
    overflow: hidden;
}

.resume-content-wrapper {
    display: flex;
    justify-content: space-between;
    min-height: 100%;
}

.left-col {
    min-height: 100%;
    width: 250px;
    background: #f5f5f5;
    margin-left: -0.15in;
    padding: 1rem;
    padding-left: 1.5rem;
    flex-shrink: 0;
}

.content-col {
    width: 100%;
    padding: 1rem;
    padding-left: 2rem;
}

.section-wrapper {
    margin-bottom: 2.5rem;
}

.content-col .section-wrapper {
    margin-bottom: 1.5rem;
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

    .left-col {
        margin-left: .35in;
    }

    .content-col {
        padding-right: 2.5rem;
    }
}
</style>

<style>
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