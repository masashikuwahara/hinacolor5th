<template>
  <div class="container">
    <h2>あなたの推しメンは・・・</h2>
    <ol class="ranking-list">
      <li v-for="member in members" :key="member.id">
        {{ member.name }} <br>
        <img :src="member.image" :alt="member.name" />
      </li>
    </ol>
    <button @click="resetGame">もう一回やる</button>
  </div>
</template>

<script>
export default {
  props: {
    members: Array
  },
  emits: ["resetGame"],
  methods: {
    resetGame() {
      this.$emit("resetGame");
    }
  }
};
</script>

<style>
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.ranking-list {
  list-style-position: inside; /* 番号をリスト内に配置 */
  padding: 0;
  text-align: center; /* 中央揃え */
}
.container {
  text-align: center;

}
</style>
