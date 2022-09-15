<template>
  <header>
    <article>
      <router-link to="/">
        <img alt="Vue logo" src="@/assets/logo.webp" />
        La Fée Des Cailloux
      </router-link>
      <nav>
        <router-link to="/" class="current">Accueil</router-link>
        <router-link to="/">Mes réalisations</router-link>
        <router-link to="/">Pierres</router-link>
        <router-link to="/">Contact</router-link>
      </nav>
    </article>
  </header>
</template>

<script>
export default {
  name: "headerComponent",
  data() {
    return {
      header: {},
    };
  },
  mounted() {
    this.header = document.getElementsByTagName("header")[0];
    document.addEventListener("scroll", this.scrollClassToggler);
  },
  beforeUnmount() {
    document.removeEventListener("scroll", this.scrollClassToggler);
  },
  methods: {
    scrollClassToggler() {
      if (document.documentElement.scrollTop > 6) {
        this.header.classList.add("scroll");
      } else {
        this.header.classList.remove("scroll");
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  z-index: 99;
  height: 90px;
  position: sticky;
  top: -30px;
  right: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);

  > article {
    transition: all 300ms;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: min(100% - 3rem, 1650px);
    margin-inline: auto;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    > a {
      height: inherit;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 1.2rem;
      font-weight: bold;
      font-size: 1.5em;
      text-decoration: none;
      color: black;

      img {
        transition: all 300ms;
        height: 70px;
      }
    }

    > nav {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      a {
        padding: 1.6rem;
        text-decoration: none;
        color: black;

        &:last-of-type {
          padding-right: 0;
        }
      }
    }
  }
}

.scroll {
  > article {
    height: 60px;

    > a img {
      height: 44px;
    }

    > nav {
      height: inherit;
      overflow: hidden;
    }
  }
}

.current {
  font-weight: bold;
}
</style>
