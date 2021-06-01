<template>
    <div class="experience-item-form">
        <div>
            <label for="">Company Name</label>
            <input type="text" id="company-name" v-model="company">
        </div>
        <div>
            <label for="">Job Title</label>
            <input type="text" id="job-title" v-model="jobTitle">
        </div>

        <div>
            <label for="">Job Location</label>
            <input type="text" id="job-location" v-model="location">
        </div>

        <div class="start-end-containers">
            <div class="start-wrapper">
                <label for="">Start</label>
                <input type="text" id="job-start" v-model="start">
            </div>
            <div class="end-wrapper">
                <label for="">End</label>
                <input type="text" id="job-end" v-model="end" placeholder="Present">
            </div>
        </div>
        
        <div class="bullets-wrapper">
            <h5>Bullets</h5>
            <div class="bullet-container" v-for="bullet in bullets" :key="bullet.order">
                <label for="">Bullet</label>
                <div class="bullet-input-wrapper">
                    <textarea name="" rows="2" style="resize:none;" v-model="bullet.text"></textarea>
                    <button class="btn btn-sm btn-danger-outline delete-bullet-btn" @click="deleteBullet(bullet.order)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
                
            </div>
            
            <div class="">
                <button class="btn btn-sm btn-alt" @click="addNewBullet">Add new bullet</button>
            </div>
        </div>

        <div class="action-buttons">
            <button class="btn btn-md btn-secondary" @click="cancelEdit">Cancel</button>
            <button class="btn btn-md btn-primary" @click="saveExperience">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order',
    props: {
        order: Number
    },
    data() {
        return {
            company: '',
            location: '',
            jobTitle: '',
            start: '',
            end: '',
            bullets: []
        }
    },
    methods: {
        addNewBullet() {
            let bulletsLen = this.bullets.length;
            if (bulletsLen > 0) {
                let lastBullet = this.bullets[bulletsLen - 1];

                if (lastBullet.text.trim().length == 0) {
                    return;
                }
            }

            this.bullets.push({order: bulletsLen, text: ''});
        },

        deleteBullet(order) {
            this.bullets = this.bullets.filter(bullet => bullet.order !== order)
                                       .map((bullet, idx) => { bullet.order = idx; return bullet; });
        },

        cancelEdit() {
            this.$emit('cancelEdit');
        },

        saveExperience() {
            let bullets = this.bullets.filter(b => b.text.trim().length > 0);
            let newExperience = {
                company: this.company,
                location: this.location,
                jobTitle: this.jobTitle,
                start: this.start,
                end: this.end,
                bullets: bullets
            };

            if (this.order !== undefined) {
                newExperience.order = this.order;
                this.$store.commit('updateExperience', newExperience);
            }
            else {
                this.$store.commit('saveNewExperience', newExperience);
            }
            
            this.$emit('saveEdit');
        }
    },
    created () {
        if (this.order === undefined) {
            return;
        }

        let targetOrder = this.order;
        let experience = this.$store.state.resumeContent.experience.filter(exp => exp.order === targetOrder)[0];

        this.company = experience.company;
        this.location = experience.location;
        this.jobTitle = experience.jobTitle;
        this.start = experience.start;
        this.end = experience.end;
        this.bullets = experience.bullets;
    }
}
</script>

<style scoped>
.start-end-containers {
    display: flex;
    justify-content: space-between;
}

.start-wrapper,
.end-wrapper {
    width: 48%;
}

.bullets-wrapper {
    margin-bottom: 1.5rem;
}

.bullets-wrapper h5 {
    margin: 0;
    margin-bottom: .5rem;
}

.bullet-input-wrapper {
    display: flex;
}

.bullet-input-wrapper textarea {
    font-size: .9rem;
}

.delete-bullet-btn {
    align-self: start;
    margin-left: .25rem;
}
.delete-bullet-btn svg {
    height: .9rem;
}

.action-buttons {
    text-align: right;
}
</style>