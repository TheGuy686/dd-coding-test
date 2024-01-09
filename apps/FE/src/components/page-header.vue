<style scoped>
.title {
    font-size: 30px;
    font-weight: bold;
}
</style>

<template>
<a-row justify="space-between" align="middle">

    <a-col span="16" justify="center">

        <h1 class="ph-ph-title">{{ title }}</h1>

    </a-col>

    <a-col span="8" justify="center" align="end">

        <a-button type="primary" @click="$emit('right-btn-clicked')" v-if="showRightBtn">

            {{ rightBtnText ?? 'Click' }}

        </a-button>

    </a-col>

</a-row>
</template>

<script>
export default {
    props: {
        title: String,
        showRightBtn: {
            type: Boolean,
            default: true,
        },
        rightBtnText: String,
    },
}
</script>