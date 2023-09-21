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
  <div class="card" style="width: 18rem">
    <img :src="cardInfo.image" class="card-img-top" alt="img" />
    <div class="card-body">
      <h5 class="card-title">{{ cardInfo.title }}</h5>
      <p class="card-text">
        {{ cardInfo.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
