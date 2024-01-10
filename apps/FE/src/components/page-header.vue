<style scoped>
.ph-title {
    font-size: 20px;
    font-weight: bold;
}
</style>

<template>
<a-row justify="space-between" align="middle">

    <a-col span="16" justify="center" align="left">

        <h1 class="ph-title">{{ title }}</h1>

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