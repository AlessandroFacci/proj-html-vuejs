<script>
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      imgServices: [
        {
          path: "../../public/img/service6-2x.jpg",
        },
        {
          path: "../../public/img/box1-2x.jpg",
        },
        {
          path: "../../public/img/box3-2x.jpg",
        },
      ],
    };
  },
  components: {
    AppCard,
  },
};
</script>

<template>
  <div class="hero">
    <div class="slider d-flex align-items-center">
      <div class="container-fluid">
        <h5>Certified fitness professional</h5>
        <h1>Take control o your health</h1>
        <div class="line"></div>
        <p>
          Curabitor non nulla sit amet nisl tempus cconvallis quis ac lectus
          dolor sit amet
        </p>
        <div>
          <button class="btn btn-primary hero-button">
            <font-awesome-icon icon="fa-brands fa-youtube" />
            Visit my YouTube channel
          </button>
          <button class="btn btn-outline-light hero-button">
            Buy Avada today
          </button>
        </div>
        <button type="button" class="btn btn-light btn-circle">
          <font-awesome-icon icon="fa-solid fa-play" />
        </button>
      </div>
    </div>
    <div class="container-fluid service">
      <AppCard></AppCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 1000px;
  .slider {
    width: 100%;
    height: 50%;
    background-image: url("../../public/img/slider82x-scaled.jpg");
    background-size: cover;
    position: relative;
    h5 {
      color: var(--text-color-red);
      margin-bottom: 1rem;
    }
    h1 {
      color: var(--text-color-white);
      margin-bottom: 1rem;
    }
    .line {
      width: 3rem;
      border: 1px solid var(--line-color);
      margin-bottom: 1rem;
    }
    p {
      color: var(--text-color-gray);
      margin-bottom: 1rem;
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
    .hero-button {
      padding: 0.5rem 1rem;
      border-radius: 3rem;
      font-size: 0.5rem;
      margin-right: 1rem;
    }
  }
  .service {
    width: 100%;
    height: 50%;
    background-color: #9e0746;
  }
}
</style>
