<template>
    <div class="resume-experience-detail">
        <div class="company-name">
            {{ companyName }}
        </div>
        <div class="position-title">
            {{ positionTitle }}
        </div>
        <div class="experience-subtitle">
            {{ start }} - {{ end }}, {{ location }}
        </div>
        
        <div class="experience-bullets">
            <ul>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse a scelerisque lacus.
                </li>
                <li>
                    Donec velit mauris, tristique sit amet tortor ut, lacinia 
                    convallis ipsum. Nam vitae sem id purus malesuada 
                    scelerisque.
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceDetail',
    props: ['companyName', 'start', 'end', 'location', 'positionTitle']
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