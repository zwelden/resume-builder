<template>
    <div class="experience-item-form">
        <div>
            <label for="">Company Name</label>
            <input type="text" id="company-name">
        </div>
        <div>
            <label for="">Job Title</label>
            <input type="text" id="job-title">
        </div>

        <div class="start-end-containers">
            <div class="start-wrapper">
                <label for="">Start</label>
                <input type="text" id="job-start">
            </div>
            <div class="end-wrapper">
                <label for="">End</label>
                <input type="text" id="job-end" placeholder="Present">
            </div>
        </div>
        

        <div>
            <label for="">Bullets</label>
            <textarea name="" id="bullet-info-1"  rows="2"></textarea>
            <div>
                <button>Add new bullet</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceItemForm'
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