<template>
    <div class="side-menu">
        <ul class="side-nav">
            <li class="nav-item print-btn" @click="printResume">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
            </li>
            <li class="nav-item config-btn" @click="showConfig">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </li>
            <li v-if="!editViewVisible" class="nav-item edit-btn" @click="showEdit">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </li>
            <li v-if="editViewVisible" class="nav-item edit-btn" @click="showResume">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SideMenu',
    computed: {
        editViewVisible() {
            return this.$store.state.activeDisplay.edit;
        }
    },
    methods: {
        printResume() {
            this.$store.commit('showResume');
            setTimeout(function () {
                 window.print();
            }, 100);
        },

        showConfig() {
            this.$store.commit('showConfig');
        },

        showEdit() {
            this.$store.commit('showEdit');
        },

        showResume() {
            this.$store.commit('showResume');
        }
    }
}
</script>

<style scoped>
.side-menu {
    position: fixed;
    top: 30%;
    transform: translateY(-50%);
    right: 10px;
    width: 60px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 10px -6px #9e9e9e;
    z-index: 50;
    /* background: #fff; */
}

.side-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    background: #fff;
}

.nav-item {
    padding: .5rem .25rem;
    cursor: pointer;
    line-height: 1;
}

.nav-item svg {
    height: 2.5rem;
    color: #2bc8cb;
}

.nav-item:hover {
    background: #2bc8cb;
    background: linear-gradient(180deg, rgba(59,218,200,1) 0%, rgba(43,200,203,1) 90%);
}

.nav-item:hover svg {
    color: #fff;
}

@media only screen and (max-width: 900px) {
    .side-menu {
        top: 2px;
        right: auto;
        left: 50%;
        width: auto;
        transform: translateX(-50%);

    }

    .side-nav {
        display: flex;
    }

    .nav-item {
        display: block;
    }

    .nav-item svg {
        height: 1.75rem;
    }
}

@media print {
    .side-menu {
        display: none;
    }
}
</style>