<template>
    <div class="interests-form">
        <InterestItemForm />

        <div>
            <button>Add New Interest</button>
        </div>
    </div>
</template>

<script>
import InterestItemForm from './InterestItemForm';

export default {
    name: 'InterestsForm',
    components: {
        InterestItemForm
    }
}
</script>

<style scoped>

</style>