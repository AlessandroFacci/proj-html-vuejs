<script>
export default {
  data() {
    return {};
  },
  props: {
    cardInfo: Object,
  },
};
</script>

<template>
  <div class="card position-relative" style="width: 19rem">
    <img :src="cardInfo.path" />
    <div class="card-content">
      <div class="line"></div>
      <h5>{{ cardInfo.title }}</h5>
      <h6>{{ cardInfo.underTitle }}</h6>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  border: 0;
  border-radius: 0 0 2rem;
  img {
    border-radius: 0 0 2rem;
  }
  .card-content {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    h5 {
      color: var(--title-card-hero);
    }
    h6 {
      color: var(--under-title-card-hero);
    }
  }
  .line {
    width: 3rem;
    border: 1px solid var(--line-card-hero);
    margin-bottom: 1rem;
  }
}
</style>
