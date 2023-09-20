<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Home",
          url: "#",
        },
        {
          name: "Services",
          url: "#",
        },
        {
          name: "About",
          url: "#",
        },
        {
          name: "Videos",
          url: "#",
        },
        {
          name: "Blog",
          url: "#",
        },
        {
          name: "Store",
          url: "#",
        },
      ],
    };
  },
};
</script>

<template>
  <nav class="navbar">
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
    >
      <div>
        <a href="#">
          <img
            src="../../public/img/logo.png"
            alt="Logo"
            class="d-inline-block align-text-top"
          />
        </a>
      </div>
      <div>
        <ul>
          <li v-for="link in links">
            <a :href="link.url">{{ link.name }}</a>
          </li>
          <li>
            <span>new</span>
          </li>
          <li>
            <button type="button" class="btn btn-primary">
              Schedule a workout
            </button>
          </li>
          <li>
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </a>
          </li>
          <li>
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  .container-fluid {
    width: 1000px;
  }
  background-color: var(--bg-nav);
  ul {
    list-style-type: none;
    margin: 0;
    display: flex;
    li {
      margin: 0;
      a {
        text-decoration: none;
        margin: 0 0.5rem;
        padding: 0;
        color: var(--text-nav-link);
        font-size: 0.8rem;
      }

      span {
        background-color: var(--bg-nav-popup);
        padding: 3px;
        margin: 1rem 1rem 1rem 0;
        font-size: 10px;
        border-radius: 2px;
      }

      button {
        padding: 0.5rem 1rem;
        border-radius: 3rem;
        font-size: 0.5rem;
        margin: 0 1rem;
      }
    }
  }
  a:hover {
    color: var(--hover-nav-link);
  }
}
</style>
