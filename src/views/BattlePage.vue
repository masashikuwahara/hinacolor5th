<template>
  <div v-if="!finished">
    <Battle :player1="player1" :player2="player2" @winnerSelected="selectWinner" @draw="drawMatch" />
  </div>
  <div v-if="finished">
    <Ranking :members="sortedMembers" @resetGame="resetGame" />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import Battle from "@/components/Battle.vue";
import Ranking from "@/components/Ranking.vue";

export default {
  components: { Battle, Ranking },
  setup() {
    const membersInitialState = [
      { id: 1, name: "大野愛実", image: "https://www.thefirsttimes.jp/admin/wp-content/uploads/2025/03/20250311-ci-121000.jpg", score: 0 },
      { id: 2, name: "鶴崎仁香", image: "https://www.thefirsttimes.jp/admin/wp-content/uploads/5025/03/20250312-ci-124000.jpg", score: 0 },
      { id: 3, name: "坂井新奈", image: "https://www.thefirsttimes.jp/admin/wp-content/uploads/5025/03/20250313-ty-120801.jpg", score: 0 },
      { id: 4, name: "佐藤優羽", image: "https://www.thefirsttimes.jp/admin/wp-content/uploads/5025/03/20250314-dm-11001.jpg", score: 0 },
      { id: 5, name: "下田衣珠季", image: "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/03/20250315-st-121201.jpg", score: 0 },
      { id: 6, name: "片山紗希", image: "https://www.thefirsttimes.jp/admin/wp-content/uploads/2025/03/20250316-sai-181601.jpg", score: 0 },
      { id: 7, name: "大田美月", image: "https://www.thefirsttimes.jp/admin/wp-content/uploads/5025/03/20250317-ci-120000.jpg", score: 0 },
      { id: 8, name: "高井俐香", image: "https://www.thefirsttimes.jp/admin/wp-content/uploads/2025/03/20250318-ci-121000.jpg", score: 0 },
{ id: 9, name: "松尾桜", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjdVL6Qlh6tvuNUsCXFgnImCVVT4kAIkjJ3G2DkcGEp6jfufXSH9bdy1d&s=10", score: 0 }
    ];

    const members = ref([...membersInitialState]);
    const matches = ref(16);
    const currentRound = ref(0);
    const finished = ref(false);
    const player1 = ref(null);
    const player2 = ref(null);

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

    const drawMatch = () => {
      startMatch();
    };

    const resetGame = () => {
      members.value = [...membersInitialState];
      matches.value = 5;
      currentRound.value = 0;
      finished.value = false;
      player1.value = null;
      player2.value = null;
      startMatch();
    };

    onMounted(() => {
      startMatch();
    });

    return { player1, player2, selectWinner, drawMatch, finished, sortedMembers, resetGame };
  }
};
</script>
