<template>
<a-modal title="Basic Modal" v-model:visible="visible" @ok="$emit('submit-clicked')">

    <p>Content</p>

    {{ entity }}

</a-modal>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {},
    computed: {
        ...mapState([ 'entity' ]),
    },
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        
        show() { this.visible = true },
        hids() { this.visible = false },
    },
}
</script>