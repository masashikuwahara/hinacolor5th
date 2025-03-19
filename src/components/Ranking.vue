<template>
  <Transition name="fade">
    <div v-if="showRanking" class="container">
      <h2>結果はこちら・・・</h2>
      <ol class="ranking-list">
        <li v-for="member in members" :key="member.id">
          {{ member.name }} <br>
          <img :src="member.image" :alt="member.name" class="gazou" />
        </li>
      </ol>
      <button @click="resetGame">もう一回やる</button>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    members: Array
  },
  data() {
    return {
      showRanking: false
    };
  },
  mounted() {
    // ランキングページが表示されたら0.5秒後にアニメーション開始
    setTimeout(() => {
      this.showRanking = true;
    }, 500);
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
  font-size: 15px;
}
.container {
  text-align: center;

}
.gazou {
  width: 320px;
}
.fade-enter-active {
  transition: opacity 0.8s ease-out;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>
