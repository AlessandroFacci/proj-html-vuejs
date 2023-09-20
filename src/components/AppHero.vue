<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="hero">
    <div class="slider d-flex align-items-center">
      <div class="container-fluid">
        <h6>Certified fitness professional</h6>
        <h1>Take control o your health</h1>
        <div class="line"></div>
        <p>
          Curabitor non nulla sit amet nisl tempus cconvallis quis ac lectus
          dolor sit amet
        </p>
        <div>
          <button></button>
          <button></button>
        </div>
        <button type="button" class="btn btn-light btn-circle">
          <font-awesome-icon icon="fa-solid fa-play" />
        </button>
      </div>
    </div>
    <div class="container-fluid"></div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 1000px;
  background-color: red;
  .slider {
    width: 100%;
    height: 50%;
    background-image: url("../../public/img/slider82x-scaled.jpg");
    object-fit: inherit;
    background-size: cover;
    position: relative;
    h6 {
      color: var(--text-color-red);
    }
    h1 {
      color: var(--text-color-white);
    }
    p {
      color: var(--text-color-gray);
    }
    .btn-circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      position: absolute;
      right: 19rem;
      bottom: 15.5rem;
    }
    .fa-play {
      color: var(--color-play);
    }
  }
  .line {
    width: 3rem;
    border: 1px solid var(--line-color);
  }
}
</style>
