<template>
    <div class="skill-item">
        <div>
            <label for="">Skill Name</label>
            <input type="text" v-model="name">
        </div>
        <div>
            <label for="">Number of Years</label>
            <input type="text" v-model="years">
        </div>

        <div class="action-buttons">
            <button class="btn btn-md btn-secondary" @click="cancelEdit">Cancel</button>
            <button class="btn btn-md btn-primary" @click="saveSkill">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillItemForm',
    props: {
        order: Number
    },
    data () {
        return {
            name: '',
            years: ''
        }
    },
    methods: {
        cancelEdit() {
            this.$emit('cancelEdit');
        },

        saveSkill() {
            let newSkill = {
                name: this.name,
                years: this.years,
            };

            if (this.order !== undefined) {
                newSkill.order = this.order;
                this.$store.commit('updateSkill', newSkill);
            }
            else {
                this.$store.commit('saveNewSkill', newSkill);
            }
            
            this.$emit('saveEdit');
        }
    },
    created () {
        if (this.order === undefined) {
            return;
        }

        let targetOrder = this.order;
        let skill = this.$store.state.resumeContent.skills.filter(s => s.order === targetOrder)[0];
        console.log(skill);

        this.name = skill.name;
        this.years = skill.years;
    }
}
</script>

<style scoped>
.action-buttons {
    text-align: right;
}
</style>