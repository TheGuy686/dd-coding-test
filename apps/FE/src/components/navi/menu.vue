<template>
<a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">

    <a-menu-item :key="rte.key" v-for="rte in routes">

		<component :is="rte.icon" />

        <span>{{ rte.title }}</span>

    </a-menu-item>

</a-menu>
</template>

<script lang="ts">
import { ref, computed, data } from 'vue';

import routes from '../../routes';

export default {
    data() {
        return {
            routes: routes,
            selectedKeys: ref<string[]>([ 'home' ]),
        }
    },
}
</script>