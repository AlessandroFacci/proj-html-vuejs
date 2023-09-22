<script>
export default {
  props: {
    cardArticle: Object,
  },
};
</script>

<template>
  <div class="card" style="width: 19rem">
    <img :src="cardArticle.image" />
    <div class="card-content">
      <h5>{{ cardArticle.title }}</h5>
      <p>{{ cardArticle.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;
  margin-top: 3rem;
  .card-content {
    padding-left: 1rem;
    h5 {
      margin-top: 1rem;
    }
    p {
      color: var(--text-color-gray);
      font-size: 0.7rem;
    }
  }
}
</style>
