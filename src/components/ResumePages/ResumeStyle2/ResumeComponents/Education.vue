<template>
    <div class="resume-education">
        <div class="education-title">
            {{ data.name.toUpperCase() }}
        </div>
        <div class="education-courses">
            <div v-for="degree in data.degrees" :key="degree.order" class="education-course">
                {{ degree.name }}
            </div>
        </div>

        <div class="education-location-duration">
            <div>{{ data.start }} - {{ data.end }}</div>
            <!-- <div>{{ data.location }}</div> -->
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Education',
    props: {
        data: Object
    }
}
</script>

<style scoped>
.resume-education {
    margin-bottom: 1.5rem;
    text-align: left;
    color: #323232;
}

.education-title  {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 4px;
}

.education-courses {
    font-size: .9rem;
    color: #3f3d44;
    margin-bottom: 4px;
}

.education-course {
    /* font-style: italic;
    font-weight: 500; */
    line-height: 1.1;
}

.education-location-duration {
    font-size: .9rem;
    color: #3f3d44;;
}
</style>