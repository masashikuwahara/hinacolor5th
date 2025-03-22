<template>
  <div class="home">
    <h1>日向坂五期生推しメンチェッカー</h1>
    <p>あなたの推しメンを決めよう！</p>
    <div class="top">
      <img src="https://daytripper.site/img/hinatazaka5th.jpg" alt="" class="hinata">
    </div>
    <router-link to="/battle">
      <button class="start-button">推すしかねえので</button>
    </router-link>
    <div class="history">-更新履歴-</div>
  <div v-for="history in histories">
    {{ history.date }} {{ history.content }}
  </div>
    <p>v.1.0.0</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      histories: [
        { date: '2025.03.15', content: 'リリースしました'}
      ],
    }
  }
};
</script>

<style>
body {
  font-family: monospace;
}
.hinata {
  margin: auto;
  width: 320px;
}
.home {
  text-align: center;
  margin-top: 50px;
}
.start-button {
  padding: 15px 30px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.start-button:hover {
  background-color: #0056b3;
}
.history {
  margin: 10px;
}
</style>
