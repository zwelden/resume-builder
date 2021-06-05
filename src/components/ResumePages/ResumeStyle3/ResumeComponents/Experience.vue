<template>
    <div class="resume-experience-detail">
        <div class="position-title">
            <div class="job-title">{{ data.jobTitle }}</div>
            <div class="location"><small>{{ data.location }}</small></div>
        </div>

        <div class="company-detail">
            <div class="company-name">{{ data.company }}</div>
            <div class="date-range">{{ data.start }} - {{ data.end }}</div>
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
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.2;
    display: flex;
    justify-content: space-between;
}


.location {
    font-weight: 400;
    color: #686868;
}
.company-detail {
    font-size: .9rem;
    line-height: 1.2;
    display: flex;
    justify-content: space-between;
    margin-bottom: .35rem;
}

.experience-subtitle {
    margin-bottom: 0.25rem;
}


.date-range {
    font-size: .9rem;
    color: #686868;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1px;
}

.experience-bullets ul {
    margin-top: 0;
    padding-left: 24px;
}

.experience-bullets ul li {
    font-size: .9rem;   
}

.experience-bullets ul li::marker {
    color: #686868;
}
</style>