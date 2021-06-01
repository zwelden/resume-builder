<template>
    <div class="project-item">
        <div>
            <label for="">Project Name</label>
            <input type="text" id="skill">
        </div>
        <div>
            <label for="">Year</label>
            <input type="text" id="years">
        </div>
        <div>
            <label for="">Project Website</label>
            <input type="text" id="link">
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
    name: 'ProjectItemForm'
}
</script>

<style scoped>

</style>