<template>
    <div>
        <router-link
            class="d-block"
            :to="link.path"
            v-for="(link, index) in $router.options.routes.filter(link => !execField.includes(link.name))"
            :key="index"
        >{{link.name}}</router-link>
    </div>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            execField: ["Home"]
        };
    }
};
</script>