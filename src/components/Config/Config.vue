<template>
    <div class="config-resume">
        <div class="top-actions">
            <div>
                <button class="btn btn-primary" @click="showResume">&lt;&lt; Back to Resumé</button>
            </div>
        </div>

        <h4>Select Resume Style</h4>

        <div class="resume-style-options">
            <div class="resume-option-card" @click="setActiveResumeStyle(1)">
                <div class="card-header">
                    Style 1
                </div>
                <div class="card-body">
                    <img src="@/assets/img/resume-style-1.jpeg" alt="Resume Style 1"> 
                </div>
                
            </div>

            <div class="resume-option-card" @click="setActiveResumeStyle(2)">
                <div class="card-header">
                    Style 2
                </div>
                <div class="card-body">
                    <img src="@/assets/img/resume-style-2.jpeg" alt="Resume Style 2"> 
                </div>
            </div>

            <div class="resume-option-card" @click="setActiveResumeStyle(3)">
                <div class="card-header">
                    Style 3
                </div>
                <div class="card-body">
                    <img src="@/assets/img/resume-style-3.jpeg" alt="Resume Style 3"> 
                </div>
                
            </div>

        </div>
    </div>
</template>

<script>


export default {
    name: 'Config',
    methods: {
        setActiveResumeStyle(styleInt) {
            this.$store.commit('setActiveResumeStyle', styleInt);
            this.$store.commit('showResume'); 
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

.resume-style-options {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.resume-option-card {
    border: 1px solid #ccc;
    border-radius: .25rem;
    cursor: pointer;
    background: #f0f0f0;
    max-width: 200px;
    margin-bottom: 1.5rem;
    margin-left: .25rem;
    margin-right: .25rem;
}

.resume-option-card:hover {
    box-shadow: 0 5px 10px -2px #9e9e9e;
}

.resume-option-card .card-header {
    padding: .5rem .5rem;
    font-weight: 600;
    letter-spacing: .5px;
}

.resume-option-card .card-body {
    padding: .5rem;
    padding-top: 0;
}

.resume-option-card img {
    width: 100%;
}

button {
    margin-bottom: 1rem;
}

@media only screen and (max-width: 520px) {
    .resume-style-options {
        justify-content: center;
    }

    .resume-option-card {
        max-width: 250px;
    }
}

@media print {
    .config-resume {
        display: none;
    }
}
</style>