<template>
  <div>
    <h2>推しメン決定！</h2>
    <ol>
      <li v-for="member in members" :key="member.id">
        {{ member.name }} (勝ち点: {{ member.score }})
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["members"]
};
</script>
