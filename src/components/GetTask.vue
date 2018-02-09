<template>
    <div id="get-todo">
        <form @submit.prevent="addTask">
            <input 
                class="form-control"
                :value="newTask"
                @change="getTask"
                placeholder="I need to...">
            <br>
            <button type="submit" class="btn btn-primary"><i class="fa fa-plus"></i> New Task</button>
        </form> 
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default{
        methods: {
            getTask(e){
                this.$store.dispatch('getTask', e.target.value)
            },
            addTask(e){
                e.preventDefault();
                this.$store.dispatch('addTask')
                this.$store.dispatch('clearTask')
            }
        },
        computed: {
            newTask(){
            	return this.$store.getters.newTask
            },
        }
    }
</script>
