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
    font-size: 1.25rem;
    line-height: 1.1;
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
    padding-left: 24px;
}

.project-bullets ul li {
    font-size: .9rem;   
}

.project-bullets ul li::marker {
    color: #686868;
}


</style>