<template>
    <div class="resume-header">
        <div class="header-content">
            <div class="resume-applicant-name">
                {{ applicantName.toUpperCase() }}
            </div>

            <div class="resume-job-title">
                {{ jobTitle.toUpperCase() }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['applicantName', 'jobTitle']
}
</script>

<style scoped>
.resume-header {
    height: 150px;
    background: #2d2c31;
    position: relative;
    color: #fff;
    margin-top: -0.5in;
    margin-left: -0.5in;
    margin-right: -0.5in;
    font-family: 'Barlow Condensed', sans-serif;
}

.header-content {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}

.resume-applicant-name {
    font-size: 3.5rem;
    letter-spacing: 2px;
    font-weight: 500;
}

.resume-job-title {
    font-size: 1.5rem;
    font-weight: 500;
}

@media print {
    .resume-header{
        margin: 0;
    }
}
</style>