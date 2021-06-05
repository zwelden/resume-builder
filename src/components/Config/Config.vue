<template>
    <div class="config-resume">
        <div class="top-actions">
            <div>
                <button class="btn btn-primary" @click="showResume">&lt;&lt; Back to Resumé</button>
            </div>
        </div>

        <h4>Select Resume Style</h4>

        <div>
            <button class="btn btn-alt" @click="setActiveResumeStyle(1)">
                Style 1
            </button>
        </div>

        <div>
            <button class="btn btn-alt" @click="setActiveResumeStyle(2)">
                Style 2
            </button>
        </div>

        <div>
            <button class="btn btn-alt" @click="setActiveResumeStyle(3)">
                Style 3
            </button>
        </div>
    </div>
</template>

<script>


export default {
    name: 'Config',
    methods: {
        setActiveResumeStyle(styleInt) {
            this.$store.commit('setActiveResumeStyle', styleInt);
        },

        showResume() {
           this.$store.commit('showResume'); 
        }
    }
}
</script>

<style scoped>
.config-resume {
    background: #fff;
    width: 95%;
    max-width: 7.5in;
    padding: .25in;
    box-shadow: 0 5px 10px -2px #9e9e9e;
    position: relative;
    margin: auto;
    text-align: left;
}

button {
    margin-bottom: 1rem;
}

@media print {
    .config-resume {
        display: none;
    }
}
</style>