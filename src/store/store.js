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
        }
    }
})