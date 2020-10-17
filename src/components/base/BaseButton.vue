<template>
    <b-button
        :variant="computedTheme"
        :size="computedSize"
        type="button"
        @click="$emit('click')"
    >
        <slot></slot>
    </b-button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        theme: {
            default: 'danger',
            type: String,
        },
        size: {
            default: '',
            type: String,
        }
    },
    computed: {
        computedTheme: function () {
            const props = this.$props;
            return props.theme
        },
        computedSize: function () {
            const props = this.$props;
            return props.size

        },
    }
}
</script>
