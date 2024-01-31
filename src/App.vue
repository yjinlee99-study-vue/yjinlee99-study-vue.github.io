<script>
import champion from "@/assets/champion.json"

const champions = champion;

export default {
  data() {
    return {
     	champions,
    };
  },
};
</script>

<template>
  <div>
  	<ul>
      <li v-for="c in champions.data">
	<strong>{{ c.name }}</strong><br>
	<p>{{c.title}} <br> {{c.blurb}}</p>
	<span>공격력 {{ c.info.attack }} 방어력 {{ c.info.defense }} 주문력 {{ c.info.magic }} 포지션 {{ c.tags }} </span><br><br>
      </li>
    </ul>
  </div>
</template>
