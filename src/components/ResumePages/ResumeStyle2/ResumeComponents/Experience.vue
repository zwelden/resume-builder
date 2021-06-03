<template>
    <div class="resume-experience-detail">
        <div class="position-title">
            {{ data.jobTitle.toUpperCase() }}
        </div>

        <div class="company-name">
            {{ data.company }}
        </div>
        
        <div class="experience-subtitle">
            <span class="location">{{ data.location }}</span> | <span class="date-range">{{ data.start }} - {{ data.end }}</span>
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
    name: 'Experience',
    props: {
        data: Object
    }
}
</script>

<style scoped>
.resume-experience-detail {
    text-align: left;
    margin-bottom: 1.5rem;
}

.position-title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.2;
}

.company-name {
    font-size: 1rem;
    line-height: 1.2;
    font-style: italic;
}

.experience-subtitle {
    margin-bottom: 0.25rem;
}

.location,
.date-range {
    font-size: .9rem;
    color: #8a8a8a;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1px;
}

.experience-bullets ul {
    margin-top: 0;
    padding-left: 18px;
}

.experience-bullets ul li {
    font-size: .9rem;   
}
</style>