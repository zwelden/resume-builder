<template>
    <div class="resume-project">
        <div class="project-title">
            {{ data.name }}
        </div>

        <div class="project-subtitle">
            <span class="project-year">
                {{ data.year }}
            </span> 
            <span v-if="data.link" class="project-link">
                <small>| <a :href="data.link">{{ data.link }}</a></small>
            </span>
        </div>
        

        <div v-if="data.summary.length > 0" class="project-summary">
            {{ data.summary }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: {
        data: Object
    }
}
</script>

<style scoped>
.resume-project {
    text-align: left;
    margin-bottom: 1.5rem;
}

.project-title  {
    font-weight: 600;
    line-height: 1.1;
    font-size: 1rem;
}

.project-year {
    font-size: .8rem;
    color: #8a8a8a;
    font-weight: 500;
    line-height: 1;
}

.project-link {
    line-height: 1;
    margin-bottom: 2px;
}
.project-summary {
    font-size: .9rem;
}


</style>