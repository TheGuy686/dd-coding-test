<template>
<a-modal title="Basic Modal" v-model:visible="visible" @ok="$emit('submit-clicked')">

    <p>Content</p>

    {{ entity }}

</a-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

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
        show(entity) {
            this.setEntity(entity);
            this.visible = true;
        },
        hids() { this.visible = false },

        ...mapMutations({
            setEntity: 'setCreateEditEntity',
        })
    },
}
</script>