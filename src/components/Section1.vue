<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="section1">
    <div class="youtube">
      <div class="card-container">
        <div class="card big-card"></div>
        <button type="button" class="btn btn-light btn-circle">
          <font-awesome-icon icon="fa-solid fa-play" />
        </button>
      </div>
      <div
        class="visit-channel d-flex align-items-center justify-content-center"
      >
        <div class="channel">
          <span> Tune up your workout </span>
          <h2>The best health & fitness advice online</h2>
          <div class="d-flex logo">
            <div>
              <img src="../../public/img/unnamed.jpg" alt="." />
            </div>
            <div>
              <h6>Theme fusion</h6>
              <div class="youtube-counter d-flex">
                <div class="youtube-logo">
                  <font-awesome-icon icon="fa-brands fa-youtube" />
                  YouTube
                </div>
                <div class="counter">999+</div>
              </div>
            </div>
          </div>
          <p>
            Arcu eu facilisi ut quisque placerat nunc habitat. Magna semper
            mauris, venenatis, leo integer sit pellentesque.
          </p>
          <button class="btn btn-danger youtube-button">
            <font-awesome-icon icon="fa-brands fa-youtube" />
            Visit my YouTube channel
          </button>
        </div>
      </div>
    </div>
    <div class="playlist"></div>
  </div>
</template>

<style lang="scss" scoped>
.section1 {
  width: 100%;
  height: 1600px;
  .youtube {
    width: 100%;
    height: 55%;
    display: flex;
    .card-container {
      width: 50%;
      height: 100%;
      position: relative;
      .big-card {
        width: 100%;
        aspect-ratio: 1;
        border-radius: 0 0 2rem;
        background-image: url("../../public/img/service15-2x.jpg");
        background-size: cover;
        background-repeat: no-repeat;

        position: absolute;
        top: -3.5rem;
      }
      .btn-circle {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: absolute;
        top: 25rem;
        left: 30rem;

        .fa-play {
          color: var(--color-play);
        }
      }
    }
    .visit-channel {
      width: 50%;
      height: 100%;

      .channel {
        width: 80%;
      }

      span {
        font-size: 1.5rem;
        color: var(--text-youtube-blu);
      }
      h2 {
        font-size: 3rem;
        color: var(--text-youtube-black);
        margin-top: 3rem;
        margin-bottom: 3rem;
      }
      p {
        font-size: 1.4rem;
        color: rgb(133, 131, 131);
        margin-bottom: 3rem;
      }
      .youtube-button {
        padding: 0.8rem 1.3rem;
        border-radius: 3rem;
        font-size: 1rem;
        margin-right: 1rem;
      }
      .youtube-logo {
        padding: 3px 6px;
        background-color: red;
        color: white;
        font-size: 10px;
        padding-top: 5px;
      }
      .counter {
        background-color: white;
        padding: 3px 6px;
        font-size: 10px;
        color: gray;
        border: 0.5px solid gray;
        padding-top: 6px;
      }
      h6 {
        font-size: 10px;
        color: gray;
      }
      img {
        margin-right: 5px;
      }
      .logo {
        margin-bottom: 3rem;
      }
    }
  }
  .playlist {
    width: 100%;
    height: 45%;
    background-color: aquamarine;
  }
}
</style>
