import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        resumeContent: {
            applicantName: 'Person Name',
            jobTitle: 'Job Title',
            contactInfo: {
                location: 'Tulsa, Ok',
                phone: '918-918-9180',
                email: 'somename@randomemail.com',
                linkedin: 'linkedin.com/username',
                website: 'somename.com',
                github: 'github.com/username'
            },
            experience: [
                {
                    order: 0,
                    company: 'Company A',
                    jobTitle: 'Job Title',
                    start: 'July 2018',
                    end: 'present',
                    location: 'Tulsa, OK',
                    bullets: [
                        {
                            order: 0,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a scelerisque lacus.'
                        },
                        {
                            order: 1,
                            text: 'Donec velit mauris, tristique sit amet tortor ut, lacinia convallis ipsum. Nam vitae sem id purus malesuada scelerisque.'
                        }
                    ]
                }
            ],
            skills: [
                {
                    order: 0,
                    name: 'Javascript',
                    years: 5
                }
            ],
            education: [
                {
                    order: 0,
                    name: "State University",
                    degrees: [
                        {
                            order: 0,
                            name: "BA in Things"
                        }
                    ],
                    start: '2011',
                    end: '2014',
                    location: 'Chicago, IL'
                }
            ],
            interests: [
                {
                    order: 0,
                    name: "Snowboarding"
                }
            ],
            projects: []
        },
        activeDisplay: {
            resume: true,
            edit: false,
            config: false
        }
    },
    mutations: {
        showConfig(state) {
            state.activeDisplay.resume = false;
            state.activeDisplay.edit = false;
            state.activeDisplay.config = true;
        },

        showEdit(state) {
            state.activeDisplay.resume = false;
            state.activeDisplay.config = false;
            state.activeDisplay.edit = true;
        },

        showResume(state) {
            state.activeDisplay.config = false;
            state.activeDisplay.edit = false;
            state.activeDisplay.resume = true;
        },

        saveApplicantName(state, applicantName) {
            state.resumeContent.applicantName = applicantName;
        },

        saveJobTitle(state, jobTitle) {
            state.resumeContent.jobTitle = jobTitle;
        },

        saveContactInfo(state, contactInfo) {
            state.resumeContent.contactInfo = contactInfo;
        },


        // EXPERIENCE MUTATIONS //
        saveNewExperience(state, experience) {
            let exprLen = state.resumeContent.experience.length;
            experience.order = exprLen;
            state.resumeContent.experience.push(experience);
        },

        updateExperience(state, experience) {
            let targetOrder = experience.order;
            state.resumeContent.experience = state.resumeContent.experience.map(exp => { 
                if (exp.order === targetOrder) {
                    exp = experience;
                }
                return exp;
            });
        },

        deleteExperience(state, targetOrder) {
            state.resumeContent.experience = state.resumeContent.experience
                .filter(exp => exp.order !== targetOrder)
                .map((exp, idx) => {exp.order = idx; return exp; });
        },

        moveExperienceItemUp(state, currentOrder) {
            if (currentOrder === null || currentOrder === 0 || state.resumeContent.experience.length <= 1) {
                return;
            }

            state.resumeContent.experience = state.resumeContent.experience
                .map(exp => { 
                    exp.order = (exp.order === (currentOrder - 1)) ? -1 : exp.order;
                    return exp; })
                .map(exp => { 
                    exp.order = (exp.order === currentOrder) ? exp.order - 1 : exp.order;
                    return exp; })
                .map(exp => { 
                    exp.order = (exp.order === -1) ? currentOrder : exp.order;
                    return exp; })
                .sort((a, b) => a.order - b.order);
        },

        moveExperienceItemDown(state, currentOrder) {
            let expLen = state.resumeContent.experience.length;

            if (currentOrder === null || expLen <= 1 || currentOrder === (expLen - 1)) {
                return;
            }

            state.resumeContent.experience = state.resumeContent.experience
                .map(exp => { 
                    exp.order = (exp.order === (currentOrder + 1)) ? -1 : exp.order;
                    return exp; })
                .map(exp => { 
                    exp.order = (exp.order === currentOrder) ? exp.order + 1 : exp.order;
                    return exp; })
                .map(exp => { 
                    exp.order = (exp.order === -1) ? currentOrder : exp.order;
                    return exp; })
                .sort((a, b) => a.order - b.order);
        },


        // EDUCATION MUTATIONS //
        saveNewEducation (state, education) {
            let eduLen = state.resumeContent.education.length;
            education.order = eduLen;
            state.resumeContent.education.push(education);
        },

        updateEducation(state, education) {
            let targetOrder = education.order;
            state.resumeContent.education = state.resumeContent.education.map(edu => { 
                if (edu.order === targetOrder) {
                    edu = education;
                }
                return edu;
            });
        },

        deleteEducation(state, targetOrder) {
            state.resumeContent.education = state.resumeContent.education
                .filter(edu => edu.order !== targetOrder)
                .map((edu, idx) => {edu.order = idx; return edu; });
        },

        moveEducationItemUp(state, currentOrder) {
            if (currentOrder === null || currentOrder === 0 || state.resumeContent.education.length <= 1) {
                return;
            }

            state.resumeContent.education = state.resumeContent.education
                .map(edu => { 
                    edu.order = (edu.order === (currentOrder - 1)) ? -1 : edu.order;
                    return edu; })
                .map(edu => { 
                    edu.order = (edu.order === currentOrder) ? edu.order - 1 : edu.order;
                    return edu; })
                .map(edu => { 
                    edu.order = (edu.order === -1) ? currentOrder : edu.order;
                    return edu; })
                .sort((a, b) => a.order - b.order);
        },

        moveEducationItemDown(state, currentOrder) {
            let eduLen = state.resumeContent.education.length;

            if (currentOrder === null || eduLen <= 1 || currentOrder === (eduLen - 1)) {
                return;
            }

            state.resumeContent.education = state.resumeContent.education
                .map(edu => { 
                    edu.order = (edu.order === (currentOrder + 1)) ? -1 : edu.order;
                    return edu; })
                .map(edu => { 
                    edu.order = (edu.order === currentOrder) ? edu.order + 1 : edu.order;
                    return edu; })
                .map(edu => { 
                    edu.order = (edu.order === -1) ? currentOrder : edu.order;
                    return edu; })
                .sort((a, b) => a.order - b.order);
        },
    }
})