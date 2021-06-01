<template>
    <div class="resume-project">
        <div class="project-title">
            {{ data.name }}
        </div>
        <div class="project-year">
            {{ data.year }}
        </div>
        <div v-if="data.projectLink" class="project-link">
            <small><a :href="data.projectLink">{{ data.projectLink }}</a></small>
        </div>

        <div v-if="data.bullets.length > 0" class="project-bullets">
            <ul>
                <li v-for="bullet in data.bullets" :key="bullet.order" class="project-bullet">
                    {{ bullet.text }}
                </li>
            </ul>
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
    margin-bottom: 1rem;
}

.project-title  {
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 4px;
}

.project-year {
    font-size: .8rem;
    color: #8a8a8a;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1px;
}

.project-link {
    line-height: 1.1;
    margin-bottom: 2px;
}
.project-bullets ul {
    margin-top: 0;
    padding-left: 18px;
}

.project-bullets ul li {
    font-size: .9rem;   
}


</style>