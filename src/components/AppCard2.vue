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
  <div class="card" style="width: 19rem">
    <img :src="cardInfo.image" class="card-img-top" alt="img" />
    <button type="button" class="btn btn-light btn-circle">
      <font-awesome-icon icon="fa-solid fa-play" />
    </button>
    <div class="card-body text-center">
      <h5 class="card-title">{{ cardInfo.title }}</h5>
      <p class="card-text">
        {{ cardInfo.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;
  position: relative;
  .btn-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 4rem;
    left: 8rem;
    .fa-play {
      color: var(--color-play);
    }
  }

  .card-img-top {
    border-radius: 0 0 2rem;
  }
  .card-text {
    color: var(--color-play);
  }
}
</style>
