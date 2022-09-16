<template>
  <header>
    <article>
      <router-link :to="{ name: 'home' }">
        <img alt="Vue logo" src="@/assets/logo.webp" />
        La Fée Des Cailloux
      </router-link>
      <nav>
        <router-link
          :to="{ name: 'home' }"
          :class="$route.name === 'home' ? 'current' : ''"
        >
          Accueil
        </router-link>
        <a
          id="realisations"
          :class="$route.path.startsWith('/realisations/') ? 'current' : ''"
        >
          Mes réalisations <font-awesome-icon icon="fa-solid fa-chevron-down" />
          <div>
            <router-link to="/">Chemins de vie</router-link>
            <router-link to="/">Bracelets thérapeutiques</router-link>
            <router-link :to="{ name: 'pendules' }">Pendules</router-link>
            <router-link to="/">Pendentifs et colliers</router-link>
            <router-link to="/">Druses et Géodes</router-link>
            <router-link to="/">Pierres roulées</router-link>
          </div>
        </a>
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
      transition: all 300ms;
      height: inherit;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 1.2rem;
      font-weight: bold;
      font-size: 1.8em;
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
        transition: all 300ms;
        padding: 1.6rem;
        text-decoration: none;
        color: black;

        &:last-of-type {
          padding-right: 0;
        }
      }

      #realisations {
        display: inline-flex;
        align-items: center;
        gap: 0.7rem;
        position: relative;
        cursor: pointer;

        svg {
          font-size: 0.7em;
        }

        &:hover div {
          opacity: 1;
          pointer-events: auto;
          top: 100%;

          a {
            animation: dropdown-link-appear 150ms;
            animation-fill-mode: both;
          }

          @for $i from 1 through 6 {
            a:nth-child(#{$i}n) {
              animation-delay: #{$i * 30}ms;
            }
          }
        }

        div {
          transition: all 250ms;
          opacity: 0;
          cursor: auto;
          display: flex;
          position: absolute;
          top: 88%;
          right: 0;
          width: max-content;
          flex-flow: column nowrap;
          background-color: #dcdcdc;
          border-radius: 6px;
          padding: 0.8rem;
          pointer-events: none;

          a {
            padding: 0.5rem;
            font-weight: normal;
          }
        }

        @keyframes dropdown-link-appear {
          from {
            transform: translateX(-10px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      }
    }
  }
}

.scroll {
  > article {
    height: 60px;

    > a {
      font-size: 1.5em;

      img {
        height: 44px;
      }
    }

    > nav {
      height: inherit;

      a {
        padding: 1rem 1.2rem;
      }
    }
  }
}

.current {
  font-weight: bold;
}
</style>
