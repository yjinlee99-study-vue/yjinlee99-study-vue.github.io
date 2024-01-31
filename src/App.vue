<script setup>
import { ref } from 'vue'
const message = ref({name:"YJIN", age:26})
const name = "영진"
</script>

<template>
	<h1>{{ message }}</h1>
</template>
