<template>
    <div class="resume-education">
        <div class="education-title">
            {{ title }}
        </div>
        <div class="education-courses">
            <div v-for="course in courses" :key="course" class="education-course">
                {{ course }}
            </div>
        </div>

        <div class="education-location-duration">
            <div>{{ duration }}</div>
            <div>{{ location }}</div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Education',
    props: {
        title: String,
        courses: Array,
        duration: String,
        location: String
    }
}
</script>

<style scoped>
.resume-education {
    margin-bottom: 1rem;
}

.education-title  {
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 4px;
}

.education-courses {
    margin-bottom: 4px;
}

.education-course {
    font-style: italic;
    font-weight: 500;
    line-height: 1.1;
}

.education-location-duration {
    font-size: .9rem;
    color: #8a8a8a;
}
</style>