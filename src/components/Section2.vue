<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <div class="section2">
      <div class="subscribe">
        <div class="content-container container-fluid">
          <h5>Join our mailing list today</h5>
          <h1>
            Insider offers & flash sales in your <br />
            inbox every week
          </h1>
          <div class="line"></div>
          <div class="d-flex">
            <form class="row g-3">
              <div class="col-auto">
                <input
                  type="mail"
                  class="form-control"
                  id="."
                  placeholder="Insert your email...*"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">
                  Subscribt
                </button>
              </div>
            </form>
          </div>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus
            dolor sit amet, consectetur <br />
            adipiscing elit sed porttitor lectus.
          </p>
        </div>
      </div>
      <div class="container-fluid">
        <div class="offers">
          <div class="card text-center" style="width: 18rem">
            <font-awesome-icon icon="fa-regular fa-clock" class="icon" />
            <h4>Team training</h4>
            <h5>Find a partner</h5>
            <p>
              Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing.
              Nisl sit fames amet senectus eget sed duis vehicula. Tristique
            </p>
            <a href="#"
              >Find a partner
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a>
          </div>
          <div class="card text-center" style="width: 18rem">
            <font-awesome-icon icon="fa-solid fa-dumbbell" class="icon" />
            <h4>Crossfit workout</h4>
            <h5>Push you limits</h5>
            <p>
              Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing.
              Nisl sit fames amet senectus eget sed duis vehicula. Tristique
            </p>
            <a href="#"
              >Learn about Crossfit
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a>
          </div>
          <div class="card text-center" style="width: 18rem">
            <font-awesome-icon icon="fa-solid fa-person" class="icon" />
            <h4>Weight loss plan</h4>
            <h5>Shed those pounds</h5>
            <p>
              Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing.
              Nisl sit fames amet senectus eget sed duis vehicula. Tristique
            </p>
            <a href="#"
              >Schedule a workout
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section2 {
  width: 100%;
  height: 1400px;
  background-color: #060607;

  .subscribe {
    height: 50%;
    background-image: url("../../public/img/banner1-2x.jpg");
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-container {
    h5 {
      color: var(--text-color-red);
    }
    h1 {
      color: white;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    p {
      color: var(--text-color-gray);
      margin-top: 2rem;
    }
    button {
      padding: 0.5rem 5rem;
      border-radius: 3rem;
    }
    input {
      width: 30rem;
      border-radius: 3rem;
    }
  }
}
.line {
  width: 3rem;
  border: 1px solid var(--line-color);
  margin-bottom: 1rem;
}

.offers {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  .card {
    background-color: #060607;
    border: 2px solid var(--bg-button-blue);
    margin-top: 9rem;
  }
  .icon {
    font-size: 5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
  }
  h4 {
    color: white;
  }
  h5 {
    color: var(--line-color);
  }
  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
  }
  a {
    margin-bottom: 2rem;
    text-decoration: none;
    color: white;
  }
}
</style>
