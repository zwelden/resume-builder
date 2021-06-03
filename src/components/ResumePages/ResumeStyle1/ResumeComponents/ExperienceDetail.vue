<template>
    <div class="resume-experience-detail">
        <div class="company-name">
            {{ data.company }}
        </div>
        <div class="position-title">
            {{ data.jobTitle }}
        </div>
        <div class="experience-subtitle">
            {{ data.start }} - {{ data.end }} | {{ data.location }}
        </div>
        
        <div v-if="data.bullets.length > 0" class="experience-bullets">
            <ul>
                <li v-for="bullet in data.bullets" :key="bullet.order">
                    {{ bullet.text }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceDetail',
    props: {
        data: Object
    }
}
</script>

<style scoped>
.resume-experience-detail {
    margin-bottom: 1rem;
}

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

.experience-bullets ul {
    margin-top: 0;
    padding-left: 18px;
}

.experience-bullets ul li {
    font-size: .9rem;   
}
</style>