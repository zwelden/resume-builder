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
    text-align: left;
    margin-bottom: .75rem;
}

.skill-name {
    font-weight: 400;
    line-height: 1.1;
}

.skill-years {
    font-size: .8rem;
    color: #676767;
}
</style>