<template>
  <div class="home">
    <h1>日向坂5期生推しメンチェッカー</h1>
    <p>あなたの推しメンを決めよう！</p>
    <router-link to="/battle">
      <button class="start-button">推すしかねえので</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
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
</style>
