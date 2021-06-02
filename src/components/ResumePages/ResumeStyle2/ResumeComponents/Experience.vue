<template>
    <div class="resume-experience-detail">
        <div class="position-title">
            {{ data.jobTitle.toUpperCase() }}
        </div>

        <div class="company-name">
            
        </div>
        
        <div class="experience-subtitle">
            <span class="company-name">{{ data.company }}</span> | <span class="location">{{ data.location }}</span> | <span class="date-range">{{ data.start }} - {{ data.end }}</span>
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
    margin-bottom: 2rem;
}

.position-title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.2;
}

.company-name {
    font-size: .9rem;
    line-height: 1.2;
}

.experience-subtitle {
    margin-bottom: 0.5rem;
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