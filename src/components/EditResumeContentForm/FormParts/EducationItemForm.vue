<template>
    <div class="education-item-form">
        <div>
            <label for="">School Name</label>
            <input type="text" id="school-name">
        </div>
        <div>
            <label for="">Location</label>
            <input type="text" id="school-location">
        </div>

        <div class="start-end-containers">
            <div class="start-wrapper">
                <label for="">Start</label>
                <input type="text" id="start-date">
            </div>
            <div class="end-wrapper">
                <label for="">End</label>
                <input type="text" id="end-date" placeholder="Present">
            </div>
        </div>

        <div class="degrees-container">
            <div>
                <label for="">Degree Name</label>
                <input type="text" id="degree-name">
            </div>
            <div>
                <button>Add Degree</button>
            </div>
        </div>

        <div class="action-buttons">
            <button class="btn btn-sm btn-secondary" @click="cancelEdit">Cancel</button>
            <button class="btn btn-sm btn-primary">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EducationItemForm',
    methods: {
        cancelEdit() {
            this.$emit('cancelEdit');
        }
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
</style>