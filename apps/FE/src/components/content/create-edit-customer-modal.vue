<style scoped>
.danger-text { color: red; font-size: 12px; }
</style>

<template>
<a-modal
    :title="`${isEdit ? 'Edit' : 'Create' } Customer`"
    :ok-button-props="{ disabled: !canSubmitForm }"
    :confirmLoading="doingRequest"
    v-model:visible="visible"
    @ok="createEditCustomer()"
>
    <a-form ref="frm" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol" @finish="createEditCustomer">

        <a-form-item label="Customer Name">

            <a-input :value="entity.name" @input="setEntityProp({
                key: 'name',
                value: $event.target.value,
            })"/>

        </a-form-item>

        <a-form-item label="Address Line 1">

            <a-input :value="entity.addressLine1" @input="setEntityProp({
                key: 'addressLine1',
                value: $event.target.value,
            })"/>

        </a-form-item>

        <a-form-item label="Address Line 2">

            <a-input :value="entity.addressLine2" @input="setEntityProp({
                key: 'addressLine2',
                value: $event.target.value,
            })"/>

        </a-form-item>

        <a-form-item label="Post Code">

            <a-input :value="entity.postCode" @input="setEntityProp({
                key: 'postCode',
                value: $event.target.value,
            })"/>

        </a-form-item>

        <a-form-item label="Email">

            <a-input
                :value="entity.email" @input="setEntityProp({
                    key: 'email',
                    value: $event.target.value,
                })"
            />

            <span class="danger-text" v-if="!emailIsValid && email != ''">Given email was not a valid email format</span>

        </a-form-item>

        <a-form-item label="Contact Number">

            <a-input
                :value="entity.phone" @input="setEntityProp({
                    key: 'phone',
                    value: $event.target.value,
                })"
            />

            <span class="danger-text" v-if="!phoneIsValid && phNo != ''">Given phone number was not a valid email format.<br>Expected: +56-985-985-9989, +44 098 090 0900, +440989878769 or 0894857699</span>

        </a-form-item>

    </a-form>

</a-modal>
</template>

<script lang="ts">
import { mapState, mapMutations } from 'vuex';

export default {
    props: {},  
    computed: {
        ...mapState([ 'entity', 'isEdit', 'doingRequest', 'lastError' ]),

        phNo() { return this.entity?.phone ?? '' },
        email() { return this.entity?.email ?? '' },

        emailIsValid() {
            if (!(!!this.email)) return false;

            return /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(this.email);
        },

        /** 
         * Supported formats:
         * - +56-985-985-9989
         * - +44 098 090 0900
         * - +440989878769
         * - 0894857699
        */
        phoneIsValid() {
            if (!(!!this.phNo)) return false;

            return /^([0-9]+)|(\+(\d{1,3})[-\s]?(\d{1,4})(?:[-\s]?(\d{1,4})){0,2})$/.test(this.phNo);
        },

        formIsValid() {
            // the first two checks here are there because even if the values are empty then we 
            // don't want to be showing errors everywhere until there has been some form interaction
            if (this.email == '') return true;
            if (this.phNo == '') return true;
            if (!this.emailIsValid) return false;
            if (!this.phoneIsValid) return false;
            return  true;
        },

        canSubmitForm() {
            if (this.email == '') return false;
            if (this.phNo == '') return false;
            if (!this.emailIsValid) return false;
            if (!this.phoneIsValid) return false;

            const keys = [ 'name', 'addressLine1', 'postCode' ];

            // addressLine2 is optional
            for (const k of keys) {
                const v = this.entity?.[k] ?? '';

                if (typeof v == 'undefined' || v == '') return false;
            }

            return  true;
        },
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
        hide() { this.visible = false },

        async createEditCustomer() {
           if (!this.canSubmitForm) return false;

            const res = await this.$store.dispatch(this.isEdit ? 'updateCustomer' : 'createCustomer');

           if (!res) {
				this.$notification.error({
					message: 'Operation error',
					description:
					this.lastError ?? 'There was an error retrieving your customers.',
					duration: 2,
				});
			}
            else {500
                await this.$store.dispatch('fetchCustomers');

                this.hide();

                this.$notification.success({
					message: 'Operation Successful',
					description:
					`The customer information was successfully ${this.isEdit ? 'updated' : 'created'}`,
					duration: 2,
				});
            }
        },

        ...mapMutations({
            setEntity: 'setCreateEditEntity',
            setEntityProp: 'setEntityProp',
        }),
    },
}
</script>