<script setup>
import { ref, onMounted } from 'vue'

const count = ref({
	cnt: 0,
	name: "HELLO"
})

function increment() {
	count.value.cnt = count.value.cnt + 1
	count.value.name = count.value.name.split('').reverse().join('')
}

onMounted(()=> {
	console.log(`initial count is ${count.value}.`)
})
</script>

<template>
	<button @click="increment">Count is: {{ count.cnt }} {{ count.name }}</button>
</template>
