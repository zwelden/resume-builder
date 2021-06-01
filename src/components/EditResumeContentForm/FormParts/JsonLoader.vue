<template>
    <div class="json-loader">
        <div v-if="!actionComplete">
            <label for="">JSON</label>
            <textarea class="json-textarea" rows="30" v-model="jsonString"></textarea>
        </div>

        <div v-if="actionComplete" class="result-message">
            <div class="action-alert success">
                {{ actionCompleteMessage }}
            </div>
        </div>

        <div class="action-buttons">
            <button v-if="!actionComplete" class="btn btn-secondary" @click="cancelJson">Cancel</button>
            <button v-if="actionComplete" class="btn btn-primary" @click="cancelJson">Back</button>
            <button v-if="loadType === 'import' && !actionComplete" class="btn btn-primary" @click="loadJson">Load</button>
            <button v-if="loadType === 'export' && !actionComplete" class="btn btn-primary" @click="copyJson">Copy</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JsonLoader',
    data() {
        return {
            jsonString: '',
            actionComplete: false,
            actionCompleteMessage: ''
        }
    },
    props: {
        loadType: {
            type: String,
            default: 'import'
        }
    },
    methods: {
        cancelJson() {
            this.$emit('cancelJson');
        },

        copyJson() {
            let jsonTxt = document.querySelector(".json-textarea");
            jsonTxt.select();
            jsonTxt.setSelectionRange(0, 99999); 
            document.execCommand("copy");

            this.actionComplete = true;
            this.actionCompleteMessage = 'JSON has been sucessfully copied.'
        },

        loadJson() {
            let resumeContent = {};

            if (this.jsonString.length <= 1) {
                alert('Please enter valid json');
                return false;
            }

            try {
                resumeContent = JSON.parse(this.jsonString);
            } catch (e) {
                alert('Please enter valid json');
                return false;
            }

            this.$store.commit('loadResumeContent', resumeContent);

            this.actionComplete = true;
            this.actionCompleteMessage = 'JSON has been sucessfully loaded.'
        }
    },
    created() {
        if (this.loadType === 'export') {
            this.jsonString = JSON.stringify(this.$store.state.resumeContent);
        }
    }
}
</script>

<style>
.json-textarea {
    width: 100%;
}

.action-buttons {
    text-align: right;
}

.action-alert {
    border-radius: .25rem;
    padding: 1rem;
    margin-bottom: 2rem;
}

.action-alert.success {
    background: #deffef;
    border: 1px solid #c0e8d5;
    color: #436b58;
}
</style>