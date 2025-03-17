<script setup>
import { ref, computed, onMounted } from "vue";
import Battle from "./components/Battle.vue";
import Ranking from "./components/Ranking.vue";

const members = ref([
  { id: 1, name: "A", image: "a.jpg", score: 0 },
  { id: 2, name: "B", image: "b.jpg", score: 0 },
  { id: 3, name: "C", image: "c.jpg", score: 0 },
  { id: 4, name: "D", image: "d.jpg", score: 0 },
  { id: 5, name: "E", image: "d.jpg", score: 0 },
  { id: 6, name: "F", image: "d.jpg", score: 0 },
  { id: 7, name: "G", image: "d.jpg", score: 0 },
]);

const matches = ref(14);
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

  // player1, player2 が null にならないようチェック
  player1.value = sorted[index1] || sorted[0];
  player2.value = sorted[index2] || sorted[1];

  currentRound.value++;
};

const selectWinner = (winner) => {
  winner.score += 1;
  startMatch();
};

onMounted(() => {
  startMatch();
});
</script>

<template>
  <div class="app">
    <h1>推しメン決定戦</h1>
    <Battle v-if="!finished" :player1="player1" :player2="player2" @winnerSelected="selectWinner" />
    <Ranking v-if="finished" :members="sortedMembers" />
  </div>
</template>
