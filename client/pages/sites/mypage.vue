<template>
    
    <div>
        <h1>My Page {{user}}</h1>
    </div>
</template>

<script>
export default {
async asyncData ({store}){

    return {
        user: store.state.authUser,
    }
    },
}
</script>

<style>

</style>
