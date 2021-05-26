<template>
    <div class="resume-page">
        <div class="resume-page-section resume-header">
            <div class="resume-col col-2">
                <Title />
            </div>
            <div class="resume-col col-1">
                <Contact />
            </div>
        </div>

        <div class="resume-page-section resume-content">
            <div class="resume-col col-2">

                <div class="resume-detail-section">
                    <SectionTitle title-name="Related Experience"></SectionTitle>

                    <ExperienceDetail company-name="Tenstreet LLC" start="June 2018" end="Present" location="Tulsa, OK" position-title="Software Engineer"></ExperienceDetail>
                    <ExperienceDetail company-name="Brothers & Company" start="July 2017" end="May 2018" location="Tulsa, OK" position-title="Front End Developer"></ExperienceDetail>
                    <!-- <ExperienceDetail company-name="DePaul University" start="2011" end="2013" location="Chicago, IL" position-title="Help Desk Analyst"></ExperienceDetail> -->
                    <ExperienceDetail company-name="U.S. Air Force" start="2004" end="2010" location="UK, S. Korea, Italy, S.E. Asia" position-title="SSgt. - Network Management Technician"></ExperienceDetail>
                </div>
                
                <div class="resume-detail-section">
                    <SectionTitle title-name="Projects"></SectionTitle>
                </div>
                
            </div>
            <div class="resume-col col-1">
                <div class="resume-detail-section">
                    <SectionTitle title-name="Skills"></SectionTitle>
                    
                    <Skill skill-name="Linux" skill-years="10"></Skill>
                    <Skill skill-name="Javascript" skill-years="5"></Skill>
                    <Skill skill-name="HTML/CSS" skill-years="5"></Skill>
                    <Skill skill-name="Git" skill-years="5"></Skill>
                    <Skill skill-name="Php" skill-years="4"></Skill>
                    <Skill skill-name="SQL" skill-years="4"></Skill>
                    <Skill skill-name="Python" skill-years="3"></Skill>
                    <Skill skill-name="Vue" skill-years="2"></Skill>
                </div>

                <div class="resume-detail-section">
                    <SectionTitle title-name="Education"></SectionTitle>
                    <Education title="Beijing Language and Culture University" :courses="['Chinese Language Study']" duration="2014 - 2015" location="Beijing, China"></Education>
                    <Education title="DePaul University" :courses="['BA in Economics (Honors)', 'BA in Chinese Studies']" duration="2011 - 2014" location="Chicago, IL"></Education>
                </div>

                <div class="resume-detail-section">
                    <SectionTitle title-name="Interests"></SectionTitle>

                    <Interest name="Snowboarding"></Interest>
                    <Interest name="Running (5k, 10k)"></Interest>
                    <Interest name="Reading"></Interest>
                    <Interest name="Traveling"></Interest>
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
import Skill from './ResumeComponents/Skill';
import Education from './ResumeComponents/Education';
import Interest from './ResumeComponents/Interest';

export default {
    name: 'ResumePage',
    components: {
        Title,
        Contact,
        SectionTitle,
        ExperienceDetail,
        Skill,
        Education,
        Interest
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
    position: relative;
    left: 50%;
    transform: translateX(-50%) scale(1);
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
    width: 66%;
    padding: 1rem;
}

.col-1 {
    width: 33%;
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
