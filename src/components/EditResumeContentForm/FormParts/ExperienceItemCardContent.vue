<template>
    <div class="experience-item-card-content">
        <div class="company-name">
            {{ companyName }}
        </div>
        <div class="position-title">
            {{ jobTitle }}
        </div>
        <div class="experience-subtitle">
            {{ start }} - {{ end }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceItemCardContent',
    props: ['companyName', 'jobTitle', 'start', 'end']
}
</script>

<style scoped>
/* button svg {
    height: .9rem;
} */

.company-name {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
}

.position-title {
    font-style: italic;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.2;
}

.experience-subtitle {
    font-size: .8rem;
    color: #8a8a8a;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1px;
    margin-bottom: 2px;
}
</style>