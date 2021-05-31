<template>
    <div class="education-item-form">
        <div>
            <label for="">School Name</label>
            <input type="text" v-model="name">
        </div>
        <div>
            <label for="">Location</label>
            <input type="text" v-model="location">
        </div>

        <div class="start-end-containers">
            <div class="start-wrapper">
                <label for="">Start</label>
                <input type="text" v-model="start">
            </div>
            <div class="end-wrapper">
                <label for="">End</label>
                <input type="text" v-model="end" placeholder="Present">
            </div>
        </div>

        <div class="degrees-wrapper">
            <h5>Degrees/Certs</h5>
            <div class="degree-container" v-for="degree in degrees" :key="degree.order">
                <label for="">Degree/Cert</label>
                <div class="degree-input-wrapper">
                    <input type="text" v-model="degree.name">
                    <button class="btn btn-sm btn-danger-outline delete-degree-btn" @click="deleteDegree(degree.order)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
                
            </div>
            
            <div class="">
                <button class="btn btn-sm btn-alt" @click="addNewDegree">Add new degree/cert</button>
            </div>
        </div>

        <div class="action-buttons">
            <button class="btn btn-md btn-secondary" @click="cancelEdit">Cancel</button>
            <button class="btn btn-md btn-primary" @click="saveEducation">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EducationItemForm',
    props: {
        order: Number
    },
    data () {
        return {
            name: '',
            location: '',
            start: '',
            end: '',
            degrees: []
        }
    },
    methods: {
        addNewDegree() {
            let degreesLen = this.degrees.length;
            if (degreesLen > 0) {
                let lastDegree = this.degrees[degreesLen - 1];

                if (lastDegree.name.trim().length == 0) {
                    return;
                }
            }

            this.degrees.push({order: degreesLen, name: ''});
        },

        deleteDegree(order) {
            this.degrees = this.degrees
                            .filter(degree => degree.order !== order)
                            .map((degree, idx) => { degree.order = idx; return degree; });
        },

        cancelEdit() {
            this.$emit('cancelEdit');
        },

        saveEducation() {
            let degrees = this.degrees.filter(deg => deg.name.trim().length > 0);
            let newEducation = {
                name: this.name,
                location: this.location,
                start: this.start,
                end: this.end,
                degrees: degrees
            };

            if (this.order !== undefined) {
                newEducation.order = this.order;
                this.$store.commit('updateEducation', newEducation);
            }
            else {
                this.$store.commit('saveNewEducation', newEducation);
            }
            
            this.$emit('saveEdit');
        }
    },
    created () {
        if (this.order === undefined) {
            return;
        }

        let targetOrder = this.order;
        let education = this.$store.state.resumeContent.education.filter(exp => exp.order === targetOrder)[0];

        this.name = education.name;
        this.location = education.location;
        this.start = education.start;
        this.end = education.end;
        this.degrees = education.degrees;
    }
}
</script>

<style scoped>
.degrees-wrapper h5 {
    margin: 0;
    margin-bottom: .5rem;
}

.start-end-containers {
    display: flex;
    justify-content: space-between;
}

.start-wrapper,
.end-wrapper {
    width: 48%;
}

.degress-wrapper {
    margin-bottom: 1.5rem;
}

.degree-input-wrapper {
    display: flex;
}

.degree-input-wrapper textarea {
    font-size: .9rem;
}

.delete-degree-btn {
    align-self: start;
    margin-left: .25rem;
}
.delete-degree-btn svg {
    height: .9rem;
}

.action-buttons {
    text-align: right;
}
</style>