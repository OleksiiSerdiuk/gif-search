<template>
<!--    <b-form-input v-model="inputVal"  :placeholder="placeholder"></b-form-input>-->
    <b-form-input
        v-bind:value="value"
        v-on:input.native="$emit('input', $event.target.value)"
    >
    </b-form-input>
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        placeholder: {
            default: 'Enter your ...',
            type: String
        },
        value: {
            type: String,
            default: '',
        }
    },
    computed: {
        inputVal: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    }
}
</script>
