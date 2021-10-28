<template>
    <div>
        Welcome to home page!

        <Link :href="route('home')">Home</Link>
        <Link :href="route('about')">About</Link>
    </div>
</template>

<script lang="ts">
import {Link} from '@inertiajs/inertia-vue'
import {Component, Vue} from 'vue-property-decorator'

@Component({
    name: "home",
    components: {Link},
})
export default class About extends Vue {
}
</script>

<style scoped>

</style>
