<template>
    <div class="resume-skill">
        <div class="skill-name">
            {{ skillName }}
        </div>
        <div class="skill-years">
            {{ skillYears }} Year<span v-if="skillYears > 1">s</span> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skill',
    props: ['skillName', 'skillYears']
}
</script>

<style scoped>
.resume-skill {
    /* font-family: 'Open Sans', sans-serif; */
    text-align: left;
    margin-bottom: 1rem;
}

.skill-name {
    font-weight: 400;
    color: #3f3d44;
    line-height: 1.1;
}

.skill-years {
    font-style: italic;
    font-size: .85rem;
    color: #676767;
}
</style>