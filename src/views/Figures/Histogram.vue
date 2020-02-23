<template>
    <div class="Histogram">
        <p v-for="(city, index) in cities" :key="index">
            <span v-for="(value, key, index) in city" :key="index">
                {{key}}:{{value}}
            </span>
        </p>
    </div>
</template>
<script>
import data_set from "./dataset.js"
export default {
    data(){
        return{
            cities:data_set.data,
        }
    }   
}
</script>