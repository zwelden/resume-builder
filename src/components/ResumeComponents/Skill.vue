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
    margin-bottom: .5rem;
}

.skill-name {
    font-weight: 500;
    color: #505050;
    line-height: 1.1;
    letter-spacing: .5px;
}
.skill-years {
    font-style: italic;
    font-size: .85rem;
    color: #505050;
}
</style>