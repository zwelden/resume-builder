<template>
    <div class="form-section">
        <div class="section-title">
            <h4>{{ sectionTitle }}</h4>
        </div>
        <div class="section-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormSection',
    props: ['sectionTitle']
}
</script>

<style scoped>
.form-section {
    margin-bottom: 2.5rem;
}

h4 {
    margin-top: 0;
}

.form-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.section-title {
    width: 25%;
    flex-shrink: 0;
    flex-grow: 0;
}

.section-content {
    width: 70%;
    flex-shrink: 0;
    flex-grow: 0;
}
</style>