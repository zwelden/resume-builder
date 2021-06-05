<template>
    <div class="resume-header">
        <div class="header-content">
            <div class="resume-applicant-name">
                {{ applicantName.toUpperCase() }}
            </div>

            <div class="resume-job-title">
                {{ jobTitle }}
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
    position: relative;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #d8d8d8;
    flex-grow: 0;
    flex-shrink: 0;
}

.resume-applicant-name {
    font-size: 3rem;
    letter-spacing: 1px;
    line-height: 1;
    margin-bottom: 1rem;
    font-weight: 600;
}

.resume-job-title {
    font-size: 1rem;
    color: #5c5c5c;
}

@media print {
    .resume-header{
        margin: 0;
    }
}
</style>