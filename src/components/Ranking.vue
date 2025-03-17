<template>
  <div>
    <h2>推しメン決定！</h2>
    <ol>
      <li v-for="member in members" :key="member.id">
        {{ member.name }} <img :src="member.image" :alt="member.name" />(スコア: {{ member.score }})
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["members"]
};
</script>
