<script>
import { ref, computed, onMounted } from "vue";
import Battle from "./components/Battle.vue";
import Ranking from "./components/Ranking.vue";

const membersInitialState = [
  { id: 1, name: "大野 愛実", image: "a.jpg", score: 0 },
  { id: 2, name: "鶴崎 仁香", image: "b.jpg", score: 0 },
  { id: 3, name: "坂井 新奈", image: "c.jpg", score: 0 },
  { id: 4, name: "佐藤 優羽", image: "d.jpg", score: 0 },
  { id: 5, name: "下田 衣珠季", image: "d.jpg", score: 0 },
  { id: 6, name: "片山 紗希", image: "d.jpg", score: 0 },
  { id: 7, name: "大田 美月", image: "d.jpg", score: 0 },
];

export default {
  components: { Battle, Ranking },
  setup() {
    const members = ref([...membersInitialState]); // 初期状態をコピー
    const matches = ref(5);
    const currentRound = ref(0);
    const player1 = ref(null);
    const player2 = ref(null);
    const finished = ref(false);

    const sortedMembers = computed(() => [...members.value].sort((a, b) => b.score - a.score));

    const startMatch = () => {
      if (currentRound.value >= matches.value) {
        finished.value = true;
        return;
      }

      let sorted = sortedMembers.value;
      if (sorted.length < 2) {
        finished.value = true;
        return;
      }

      let index1 = Math.floor(Math.random() * sorted.length / 2);
      let index2 = index1 + Math.floor(sorted.length / 2);

      player1.value = sorted[index1] || sorted[0];
      player2.value = sorted[index2] || sorted[1];

      currentRound.value++;
    };

    const selectWinner = (winner) => {
      winner.score += 1;
      startMatch();
    };

    const resetGame = () => {
      members.value = [...membersInitialState]; // スコアを初期化
      matches.value = 5;
      currentRound.value = 0;
      finished.value = false;
      player1.value = null;
      player2.value = null;
      startMatch(); // ゲームを再スタート
    };

    onMounted(() => {
      startMatch();
    });

    return { members, player1, player2, finished, sortedMembers, selectWinner, resetGame };
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
</style>

<template>
  <div class="app">
    <h1>五期生推しメンチェッカー</h1>
    <Battle v-if="!finished" :player1="player1" :player2="player2" @winnerSelected="selectWinner" />
    <Ranking v-if="finished" :members="sortedMembers" />
    <button v-if="finished" @click="resetGame">スタートに戻る</button>
  </div>
</template>
