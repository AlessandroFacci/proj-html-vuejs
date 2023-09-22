<script>
import AppCard3 from "./AppCard3.vue";
export default {
  data() {
    return {
      articles: [
        {
          image: "../../public/img/blog4-2x.jpg",
          title: "The best protein",
          description: "By admin | November 26th, 2019 | Gym",
        },
        {
          image: "../../public/img/blog1-2x.jpg",
          title: "Ultimate cardio workout",
          description: "By admin | November 26th, 2019 | Gym",
        },
        {
          image: "../../public/img/blog3-2x.jpg",
          title: "New juices available",
          description: "By admin | November 26th, 2019 | Gym",
        },
      ],
    };
  },
  components: {
    AppCard3,
  },
};
</script>

<template>
  <div class="section3">
    <div class="articles">
      <div class="articles-container container-fluid">
        <h4>Latest articles</h4>
        <span
          >Read all articles
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </span>
      </div>
      <div class="container-fluid d-flex justify-content-between">
        <AppCard3 v-for="img in articles" :cardArticle="img"></AppCard3>
      </div>
    </div>
    <div class="buy">
      <div class="container-fluid content">
        <h2>
          "I've failed over and over again in my <br />
          life And that is why I succeed."
        </h2>
        <div class="line"></div>
        <p>
          Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In
          lacinia lacus donec sed massa <br />
          in ipsum eros, tristique. Gravida suspendisse etiam in iaculis
        </p>
        <button type="submit" class="btn btn-primary mb-3">
          Buy Avada today
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </button>
      </div>
    </div>
    <div class="partner"></div>
  </div>
</template>

<style lang="scss" scoped>
.section3 {
  width: 100%;
  height: 2000px;
  .articles {
    width: 100%;
    height: 35%;

    .articles-container {
      display: flex;
      justify-content: space-between;
      padding-top: 9rem;
    }
  }
  .buy {
    width: 100%;
    height: 40%;
    background-image: url("../../public/img/banner2-2x.jpg");
    background-size: cover;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 13rem;
      h2 {
        color: white;
      }
      p {
        color: white;
        text-align: center;
      }
      button {
        margin-top: 2rem;
        padding: 0.7rem 2rem;
        border-radius: 3rem;
      }
    }
    .line {
      width: 3rem;
      border: 1px solid var(--line-color);
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
  }
}
</style>
