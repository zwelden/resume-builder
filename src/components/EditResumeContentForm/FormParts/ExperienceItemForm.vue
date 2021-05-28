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
        
        <div class="bullets-wrapper">
            <h5>Bullets</h5>
            <label for="">Bullet</label>
            <textarea name="" id="bullet-info-1"  rows="2"></textarea>
            <div class="action-buttons">
                <button class="btn btn-sm btn-alt">Add new bullet</button>
            </div>
        </div>

        <div class="action-buttons">
            <button class="btn btn-md btn-secondary">Cancel</button>
            <button class="btn btn-md btn-primary">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceItemForm'
}
</script>

<style scoped>
h5 {
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

.bullets-wrapper {
    margin-bottom: 1.5rem;
}

.action-buttons {
    text-align: right;
}
</style>