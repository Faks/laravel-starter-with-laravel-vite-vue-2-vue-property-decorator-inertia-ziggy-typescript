<template>
    <div>
        Welcome to about page!

        <Link :href="route('home')">Home</Link>
        <Link :href="route('about')">About</Link>
    </div>
</template>

<script lang="ts">
import {Link} from '@inertiajs/inertia-vue'
import {Component, Vue} from 'vue-property-decorator'

@Component({
    name: "about",
    components: {Link},
})
export default class About extends Vue {
}
</script>


<style scoped>

</style>
