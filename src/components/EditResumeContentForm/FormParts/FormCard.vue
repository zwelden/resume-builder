<template>
    <div class="form-item-card">
        <div class="card-content">
            <slot :edit-active="editActive" :cancel-edit="cancelCardEdit" :save-edit="saveCardEdit"></slot>
        </div>
        <div v-if="!editActive" class="card-actions">

            <button class="action-button btn btn-sm btn-danger-outline" @click="deleteItem">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>

            <button class="action-button btn btn-sm btn-primary" @click="activateEditMode">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>

            </button>
            <button class="action-button btn btn-sm btn-alt" @click="moveItemUp">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>

            <button class="action-button btn btn-sm btn-alt" @click="moveItemDown">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </button>

        </div>
    </div>
</template>

<script>
export default {
    name: 'FormCard',
    props: {
        referenceId: Number
    },
    data() {
        return {
            editActive: false
        }
    },
    methods: {
        activateEditMode() {
            this.editActive = true;
        },

        cancelCardEdit() {
           this.editActive = false; 
        },

        saveCardEdit() {
           this.editActive = false; 
        },

        deleteItem() {
            this.$emit('deleteItem', this.referenceId);
        },

        moveItemUp() {
            this.$emit('moveItemUp', this.referenceId);
        },

        moveItemDown() {
            this.$emit('moveItemDown', this.referenceId);
        }
    }
}
</script>

<style scoped>
.form-item-card {
    position: relative;
    border: 1px solid #e7e7e8;
    border-radius: 4px;
    background: #f8f9fb;
    margin-bottom: 1rem;
    padding: .5rem;
}

.card-content {
    width: 100%;
}

.card-actions {
    position: absolute;
    top: .5rem;
    right: .5rem;
    text-align: right;
    width: 200px;
    display: none;
}

.form-item-card:hover .card-actions {
    display: block;
}

.action-button {
    margin-right: .25rem;
    margin-bottom: .25rem;
}

.action-button:last-child {
    margin-right: 0;
}


button svg {
    height: .9rem;
}
</style>