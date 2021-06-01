<template>
    <div class="project-item">
        <div>
            <label for="">Project Name</label>
            <input type="text" v-model="name">
        </div>
        <div>
            <label for="">Year</label>
            <input type="text" v-model="year">
        </div>
        <div>
            <label for="">Project Website</label>
            <input type="text" v-model="link">
        </div>

        <div class="bullets-wrapper">
            <h5>Bullets</h5>
            <div class="bullet-container" v-for="bullet in bullets" :key="bullet.order">
                <label for="">Bullet</label>
                <div class="bullet-input-wrapper">
                    <input type="text" v-model="bullet.text">
                    <button class="btn btn-sm btn-danger-outline delete-bullet-btn" @click="deleteBullet(bullet.order)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
                
            </div>
            
            <div class="">
                <button class="btn btn-sm btn-alt" @click="addNewBullet">Add Bullet</button>
            </div>
        </div>

        <div class="action-buttons">
            <button class="btn btn-md btn-secondary" @click="cancelEdit">Cancel</button>
            <button class="btn btn-md btn-primary" @click="saveProject">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectItemForm',
    props: {
        order: Number
    },
    data () {
        return {
            name: '',
            year: '',
            link: '',
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

            this.bullets.push({order: bulletsLen, name: ''});
        },

        deleteBullet(order) {
            this.bullets = this.bullets
                            .filter(b => b.order !== order)
                            .map((b, idx) => { b.order = idx; return b; });
        },

        cancelEdit() {
            this.$emit('cancelEdit');
        },

        saveProject() {
            let bullets = this.bullets.filter(b => b.text.trim().length > 0);
            let newProject = {
                name: this.name,
                year: this.year,
                link: this.link,
                bullets: bullets
            };

            if (this.order !== undefined) {
                newProject.order = this.order;
                this.$store.commit('updateProject', newProject);
            }
            else {
                this.$store.commit('saveNewProject', newProject);
            }
            
            this.$emit('saveEdit');
        }
    },
    created () {
        if (this.order === undefined) {
            return;
        }

        let targetOrder = this.order;
        let project = this.$store.state.resumeContent.projects.filter(p => p.order === targetOrder)[0];

        this.name = project.name;
        this.year = project.year;
        this.link = project.link;
        this.bullets = project.bullets;
    }
}
</script>

<style scoped>
.bullets-wrapper h5 {
    margin: 0;
    margin-bottom: .5rem;
}

.bullets-wrapper {
    margin-bottom: 1.5rem;
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