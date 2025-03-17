<template>
  <div v-if="player1 && player2" class="battle">
    <h2>どちらが推し？</h2>
    <div class="candidate" @click="$emit('winnerSelected', player1)">
      <img :src="player1.image" :alt="player1.name" />
      <p>{{ player1.name }}</p>
    </div>
    <div class="vs">VS</div>
    <div class="candidate" @click="$emit('winnerSelected', player2)">
      <img :src="player2.image" :alt="player2.name" />
      <p>{{ player2.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["player1", "player2"]
};
</script>

<style>
.battle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.candidate {
  cursor: pointer;
  border: 2px solid #333;
  padding: 10px;
  transition: 0.3s;
}
.candidate:hover {
  transform: scale(1.1);
}
.vs {
  font-size: 24px;
  font-weight: bold;
}
</style>
