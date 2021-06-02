<template>
    <div class="resume-interest">
        {{ name }}
    </div>
</template>

<script>
export default {
    name: 'Interest',
    props: ['name']
}
</script>

<style scoped>
.resume-interest {
    font-weight: 500;
    color: #505050;
    line-height: 1.1;
    letter-spacing: .5px;
    margin-bottom: .5rem;
}
</style>