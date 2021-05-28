<template>
    <div class="education-form">
        <EducationItemForm />

        <div>
            <button>Add New Eduction Item</button>
        </div>
    </div>
</template>

<script>
import EducationItemForm from './EducationItemForm';

export default {
    name: 'EducationForm',
    components: {
        EducationItemForm
    }
}
</script>

<style scoped>

</style>