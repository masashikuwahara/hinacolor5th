<template>
  <div v-if="player1 && player2" class="sentou">
    <h2>どちらが推し？</h2>
    <div class="battle-container">
      <div class="player" @click="selectWinner(player1)">
        <img :src="player1.image" alt="player1">
        <p>{{ player1.name }}</p>
      </div>
      <div class="vs">VS</div>
      <div class="player" @click="selectWinner(player2)">
        <img :src="player2.image" alt="player2">
        <p>{{ player2.name }}</p>
      </div>
    </div>
    <button class="draw-button" @click="drawMatch">選べないよ</button>
  </div>
</template>

<script>
export default {
  props: {
    player1: Object,
    player2: Object
  },
  emits: ["winnerSelected", "draw"],
  methods: {
    selectWinner(winner) {
      this.$emit("winnerSelected", winner);
    },
    drawMatch() {
      this.$emit("draw");
    }
  }
};
</script>

<style>
.sentou {
  text-align: center;
}
.battle-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.player {
  cursor: pointer;
  border: 2px solid #333;
  padding: 10px;
  transition: 0.3s;
}
.player:hover {
  transform: scale(1.1);
}
.draw-button {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 18px;
  background-color: #f39c12; /* オレンジ */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.draw-button:hover {
  background-color: #e67e22;
}
img {
  width: 320px;
}
h2 {
  text-align: center;
}
@media screen and (max-width: 480px) {
  img {width: 120px;
  }
}
</style>
