<script>
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      imgesServices: [
        {
          path: "../../public/img/service6-2x.jpg",
          title: "Crossfit woukout",
          underTitle: "Push your limits",
        },
        {
          path: "../../public/img/box1-2x.jpg",
          title: "New gym apparel",
          underTitle: "Look good, feel good",
        },
        {
          path: "../../public/img/box3-2x.jpg",
          title: "Team training",
          underTitle: "Find a partner",
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
      <div class="container-fluid position-relative">
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
    <div class="service">
      <div class="img-service">
        <div class="container-fluid position-relative">
          <div class="card-container">
            <div class="d-flex justify-content-between">
              <AppCard v-for="img in imgesServices" :cardInfo="img"></AppCard>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="text-service container-fluid">
          <h2>
            "How you respond to the challenge in the second half will determine
            what you become after the game, whether you are a winner or a
            loser."
          </h2>
          <div class="line"></div>
          <div class="icon-service">
            <ul>
              <li>
                <div class="icon-circle"></div>
              </li>
              <li>
                <span>Brad Johnson</span>
              </li>
              <li>
                <span class="place">Las Vegas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 1200px;
  .slider {
    width: 100%;
    height: 40%;
    background-image: url("../../public/img/slider82x-scaled.jpg");
    background-size: cover;

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
      right: 0;
      bottom: 3.5rem;
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
    height: 60%;
    background-color: #9e0746;

    .img-service {
      height: 50%;
      .card-container {
        width: 100%;
        position: absolute;
        top: -4rem;
      }
    }
    .text-service {
      width: 45%;
      height: 50%;

      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        text-align: center;
        color: var(--title-card-hero);
        margin-bottom: 2rem;
      }

      .line {
        width: 3rem;
        border: 1px solid var(--line-color);
        margin-bottom: 1rem;
      }
      .icon-service {
        ul {
          list-style-type: none;
          display: flex;
          align-items: center;
          li {
            margin: 0 0.5rem;
            .icon-circle {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background-image: url("../../public/img/avatar-1-2x.jpg");
              background-size: cover;
            }
            span {
              color: var(--title-card-hero);
            }
            span.place {
              color: var(--text-color-gray);
            }
          }
        }
      }
    }
  }
}
</style>
