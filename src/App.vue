<script>
import category from "@/assets/category.json"

const categories = category;

export default {
  data() {
    return {
      categories,
    };
  },
};
</script>

<template>
  <div>
  	<ul>
      <li v-for="c in categories">
        <span>{{ c.name }}&nbsp;</span>
        <span>{{ c.code }}</span>
      </li>
    </ul>
  </div>
</template>
