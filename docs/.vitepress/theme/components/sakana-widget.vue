<template>
    <div id="sakana-widget"></div>
</template> 

<script setup>
import 'sakana-widget/lib/index.css';
import SakanaWidget from 'sakana-widget';
import { onMounted } from 'vue';

onMounted(() => {
    const el = document.getElementById('sakana-widget')
    new SakanaWidget().mount(el);
})


</script>

<style scoped>

</style>