<template>
    <div>
        <h1>Dynamic Routing</h1>
    </div>
</template>

<script>
export default {
    // # dynamic/params
    // ## 검증. return 값이 true여야 랜더링 시작
    validate ({ params }) {
        
        return /^\d+$/.test(params.id)
    }
}
</script>

<style>

</style>
