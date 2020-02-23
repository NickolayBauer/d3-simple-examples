<template>
    <div id="app" class="m-5">
        <router-link
            :to="{name:'Home'}"
            class="btn btn-dark mb-5"
            tag="button"
            v-if="$router.currentRoute.name != 'Home'"
        >back</router-link>
        <router-view></router-view>
    </div>
</template>