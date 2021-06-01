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
                },
                {
                    order: 1,
                    company: 'Company B',
                    jobTitle: 'Manager of Things',
                    start: 'July 2016',
                    end: 'July 2018',
                    location: 'Oklahoma City, OK',
                    bullets: [
                        {
                            order: 0,
                            text: 'Aenean ex massa, varius ac ultrices quis, efficitur eu magna.'
                        },
                        {
                            order: 1,
                            text: 'Etiam auctor tortor rhoncus, mollis nibh sollicitudin, efficitur arcu.'
                        },
                        {
                            order: 2,
                            text: 'Morbi ac diam ultrices, malesuada orci eget, suscipit libero.'
                        }
                    ]
                },
                {
                    order: 2,
                    company: 'Company C',
                    jobTitle: 'Engineer of Things',
                    start: 'July 2014',
                    end: 'July 2016',
                    location: 'St. Louis, MO',
                    bullets: [
                        {
                            order: 0,
                            text: 'Vestibulum tortor magna, pellentesque posuere metus vitae, hendrerit rhoncus urna.'
                        },
                        {
                            order: 1,
                            text: 'Etiam tristique sit amet sapien eu imperdiet.'
                        },
                        {
                            order: 2,
                            text: 'Nullam non mi fermentum ipsum pharetra maximus a ut purus.'
                        }
                    ]
                }
            ],
            skills: [
                {
                    order: 0,
                    name: 'Javascript',
                    years: '5'
                },
                {
                    order: 1,
                    name: 'Vue',
                    years: '2'
                },
                {
                    order: 2,
                    name: 'Python',
                    years: '3'
                }
                ,{
                    order: 3,
                    name: 'Flask',
                    years: '2'
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
                },
                {
                    order: 1,
                    name: "Reading"
                },
                {
                    order: 2,
                    name: "Traveling"
                },
                {
                    order: 3,
                    name: "Backpacking"
                }
            ],
            projects: [
                {
                    order: 0,
                    name: 'Vue App',
                    year: '2020',
                    link: 'https://google.com',
                    bullets: [
                        {
                            order: 0,
                            text: 'Integer pellentesque dolor sed erat mattis luctus. Vestibulum ac condimentum felis, vel volutpat diam.'
                        },
                        {
                            order: 1,
                            text: 'Aliquam gravida eleifend metus, ultrices porttitor libero varius a. Aliquam vitae urna ut ex rhoncus mollis vel at lectus.'
                        }
                    ]
                },
                {
                    order: 1,
                    name: 'Elixir App',
                    year: '2019',
                    link: 'https://elixir-lang.org',
                    bullets: [
                        {
                            order: 0,
                            text: 'In commodo lobortis purus nec bibendum.'
                        },
                        {
                            order: 1,
                            text: 'Suspendisse viverra massa et felis ultricies consequat.'
                        }
                    ]
                }
            ]
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

        // PROJECT MUTATIONS //
        saveNewProject(state, project) {
            let projLen = state.resumeContent.projects.length;
            project.order = projLen;
            state.resumeContent.projects.push(project);
        },

        updateProject(state, project) {
            let targetOrder = project.order;
            state.resumeContent.projects = state.resumeContent.projects.map(p => { 
                if (p.order === targetOrder) {
                    p = project;
                }
                return p;
            });
        },

        deleteProject(state, targetOrder) {
            state.resumeContent.projects = state.resumeContent.projects
                .filter(p => p.order !== targetOrder)
                .map((p, idx) => {p.order = idx; return p; });
        },

        moveProjectItemUp(state, currentOrder) {
            if (currentOrder === null || currentOrder === 0 || state.resumeContent.projects.length <= 1) {
                return;
            }

            state.resumeContent.projects = state.resumeContent.projects
                .map(p => { 
                    p.order = (p.order === (currentOrder - 1)) ? -1 : p.order;
                    return p; })
                .map(p => { 
                    p.order = (p.order === currentOrder) ? p.order - 1 : p.order;
                    return p; })
                .map(p => { 
                    p.order = (p.order === -1) ? currentOrder : p.order;
                    return p; })
                .sort((a, b) => a.order - b.order);
        },

        moveProjectItemDown(state, currentOrder) {
            let projLen = state.resumeContent.projects.length;

            if (currentOrder === null || projLen <= 1 || currentOrder === (projLen - 1)) {
                return;
            }

            state.resumeContent.projects = state.resumeContent.projects
                .map(p => { 
                    p.order = (p.order === (currentOrder + 1)) ? -1 : p.order;
                    return p; })
                .map(p => { 
                    p.order = (p.order === currentOrder) ? p.order + 1 : p.order;
                    return p; })
                .map(p => { 
                    p.order = (p.order === -1) ? currentOrder : p.order;
                    return p; })
                .sort((a, b) => a.order - b.order);
        },


        // SKILL MUTATIONS //
        saveNewSkill(state, skill) {
            let skillLen = state.resumeContent.skills.length;
            skill.order = skillLen;
            state.resumeContent.skills.push(skill);
        },

        updateSkill(state, skill) {
            let targetOrder = skill.order;
            state.resumeContent.skills = state.resumeContent.skills.map(s => { 
                if (s.order === targetOrder) {
                    s = skill;
                }
                return s;
            });
        },

        deleteSkill(state, targetOrder) {
            state.resumeContent.skills = state.resumeContent.skills
                .filter(s => s.order !== targetOrder)
                .map((s, idx) => {s.order = idx; return s; });
        },

        moveSkillItemUp(state, currentOrder) {
            if (currentOrder === null || currentOrder === 0 || state.resumeContent.skills.length <= 1) {
                return;
            }

            state.resumeContent.skills = state.resumeContent.skills
                .map(s => { 
                    s.order = (s.order === (currentOrder - 1)) ? -1 : s.order;
                    return s; })
                .map(s => { 
                    s.order = (s.order === currentOrder) ? s.order - 1 : s.order;
                    return s; })
                .map(s => { 
                    s.order = (s.order === -1) ? currentOrder : s.order;
                    return s; })
                .sort((a, b) => a.order - b.order);
        },

        moveSkillItemDown(state, currentOrder) {
            let skillLen = state.resumeContent.skills.length;

            if (currentOrder === null || skillLen <= 1 || currentOrder === (skillLen - 1)) {
                return;
            }

            state.resumeContent.skills = state.resumeContent.skills
                .map(s => { 
                    s.order = (s.order === (currentOrder + 1)) ? -1 : s.order;
                    return s; })
                .map(s => { 
                    s.order = (s.order === currentOrder) ? s.order + 1 : s.order;
                    return s; })
                .map(s => { 
                    s.order = (s.order === -1) ? currentOrder : s.order;
                    return s; })
                .sort((a, b) => a.order - b.order);
        },

        // INTERESTS MUTATIONS //
        saveNewInterest(state, interest) {
            let interestLen = state.resumeContent.interests.length;
            interest.order = interestLen;
            state.resumeContent.interests.push(interest);
        },

        updateInterest(state, interest) {
            let targetOrder = interest.order;
            state.resumeContent.interests = state.resumeContent.interests.map(i => { 
                if (i.order === targetOrder) {
                    i = interest;
                }
                return i;
            });
        },

        deleteInterest(state, targetOrder) {
            state.resumeContent.interests = state.resumeContent.interests
                .filter(i => i.order !== targetOrder)
                .map((i, idx) => {i.order = idx; return i; });
        },

        moveInterestItemUp(state, currentOrder) {
            if (currentOrder === null || currentOrder === 0 || state.resumeContent.interests.length <= 1) {
                return;
            }

            state.resumeContent.interests = state.resumeContent.interests
                .map(i => { 
                    i.order = (i.order === (currentOrder - 1)) ? -1 : i.order;
                    return i; })
                .map(i => { 
                    i.order = (i.order === currentOrder) ? i.order - 1 : i.order;
                    return i; })
                .map(i => { 
                    i.order = (i.order === -1) ? currentOrder : i.order;
                    return i; })
                .sort((a, b) => a.order - b.order);
        },

        moveInterestItemDown(state, currentOrder) {
            let interestLen = state.resumeContent.interests.length;

            if (currentOrder === null || interestLen <= 1 || currentOrder === (interestLen - 1)) {
                return;
            }

            state.resumeContent.interests = state.resumeContent.interests
                .map(i => { 
                    i.order = (i.order === (currentOrder + 1)) ? -1 : i.order;
                    return i; })
                .map(i => { 
                    i.order = (i.order === currentOrder) ? i.order + 1 : i.order;
                    return i; })
                .map(i => { 
                    i.order = (i.order === -1) ? currentOrder : i.order;
                    return i; })
                .sort((a, b) => a.order - b.order);
        },
    }
})