<template>
    <div class="interest-item">
        <div>
            <label for="">Interest Name</label>
            <input type="text" v-model="name">
        </div>

        <div class="action-buttons">
            <button class="btn btn-md btn-secondary" @click="cancelEdit">Cancel</button>
            <button class="btn btn-md btn-primary" @click="saveInterest">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InterestItemForm',
    props: {
        order: Number
    },
    data () {
        return {
            name: ''
        }
    },
    methods: {
        cancelEdit() {
            this.$emit('cancelEdit');
        },

        saveInterest() {
            let newInterest = {
                name: this.name
            };

            if (this.order !== undefined) {
                newInterest.order = this.order;
                this.$store.commit('updateInterest', newInterest);
            }
            else {
                this.$store.commit('saveNewInterest', newInterest);
            }
            
            this.$emit('saveEdit');
        }
    },
    created () {
        if (this.order === undefined) {
            return;
        }

        let targetOrder = this.order;
        let interest = this.$store.state.resumeContent.interests.filter(i => i.order === targetOrder)[0];

        this.name = interest.name;
    }
}
</script>

<style scoped>
.action-buttons {
    text-align: right;
}
</style>