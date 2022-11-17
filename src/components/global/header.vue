<template>
  <header>
    <article>
      <router-link :to="{ name: 'home' }">
        <img alt="Logo La Fée des Cailloux" src="@/assets/img/logo.webp" />
        <img alt="La Fée des Cailloux" src="@/assets/svg/logo-title.svg" />
      </router-link>
      <nav>
        <a
          @click.prevent="go('home')"
          :class="$route.name === 'home' ? 'current' : ''"
        >
          Accueil
        </a>
        <a
          id="realisations"
          :class="$route.path.startsWith('/realisations/') ? 'current' : ''"
        >
          Mes réalisations
          <font-awesome-icon icon="fa-solid fa-sort-down" />
          <div>
            <a
              @click.prevent="go('chemins-de-vie')"
              :class="
                $route.path.startsWith('/realisations/chemins-de-vie')
                  ? 'current'
                  : ''
              "
            >
              Chemins de vie
            </a>
            <a
              @click.prevent="go('bracelets-therapeutiques')"
              :class="
                $route.path.startsWith('/realisations/bracelets-therapeutiques')
                  ? 'current'
                  : ''
              "
            >
              Bracelets thérapeutiques
            </a>
            <a
              @click.prevent="go('pendules')"
              :class="
                $route.path.startsWith('/realisations/pendules')
                  ? 'current'
                  : ''
              "
            >
              Pendules
            </a>
            <a
              @click.prevent="go('pendentifs-et-colliers')"
              :class="
                $route.path.startsWith('/realisations/pendentifs-et-colliers')
                  ? 'current'
                  : ''
              "
            >
              Pendentifs et colliers
            </a>
            <a
              @click.prevent="go('druses-et-geodes')"
              :class="
                $route.path.startsWith('/realisations/druses-et-geodes')
                  ? 'current'
                  : ''
              "
            >
              Druses et Géodes
            </a>
            <a
              @click.prevent="go('pierres-roulees')"
              :class="
                $route.path.startsWith('/realisations/pierres-roulees')
                  ? 'current'
                  : ''
              "
            >
              Pierres roulées
            </a>
          </div>
        </a>
        <a
          @click.prevent="go('entretenir-ses-pierres')"
          :class="$route.name === 'entretenir-ses-pierres' ? 'current' : ''"
        >
          Entretenir ses pierres
        </a>
        <a
          @click.prevent="go('contact')"
          :class="$route.name === 'contact' ? 'current' : ''"
        >
          Me contacter
        </a>
      </nav>
    </article>
  </header>
  <a id="scroll_btn" @click.prevent="scrollToTop">
    <hr />
    <font-awesome-icon icon="fa-solid fa-up-long" />
  </a>
</template>

<script>
export default {
  name: "headerComponent",
  data() {
    return {
      header: {},
      scroll_btn: {},
    };
  },
  mounted() {
    this.header = document.getElementsByTagName("header")[0];
    this.scroll_btn = document.getElementById("scroll_btn");
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
      if (document.documentElement.scrollTop > 550) {
        this.scroll_btn.classList.add("scroll");
      } else {
        this.scroll_btn.classList.remove("scroll");
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    go(page) {
      if (this.$route.name === page) {
        this.scrollToTop();
      } else {
        this.$router.push({ name: page });
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  transition: all 300ms;
  z-index: 99;
  height: 90px;
  position: fixed;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(var(--blur));

  > article {
    width: min(100% - 3rem, 100%);
    margin-inline: auto;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    > a {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      img {
        transition: all 300ms;
        height: 70px;

        &:last-of-type {
          height: 50px;
        }
      }
    }

    > nav {
      display: flex;
      align-items: center;

      a {
        transition: all 300ms;
        padding: 1.6rem;
        text-decoration: none;
        color: var(--global-text-color);
        position: relative;
        cursor: pointer;

        &::after {
          transition: all 300ms;
          content: "";
          position: absolute;
          top: 80%;
          left: 1.6rem;
          right: 100%;
          height: 1px;
          border-radius: var(--border-radius);
          background-color: var(--global-text-color);
        }

        &:hover::after {
          right: 1.6rem;
        }

        &.current::after {
          left: 1.6rem;
          right: 1.6rem;
        }
      }

      #realisations {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        cursor: pointer;

        svg {
          font-size: 0.9em;
          transform: translateY(-1px);
        }

        &:hover div {
          opacity: 1;
          pointer-events: auto;
          top: 100%;

          a {
            animation: dropdown-link-appear 150ms;
            animation-fill-mode: both;

            &.current {
              font-weight: bold;
            }
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
          display: flex;
          position: absolute;
          top: 88%;
          right: 0;
          width: max-content;
          flex-flow: column nowrap;
          background-color: #dcdcdc;
          border-radius: calc(var(--border-radius) / 2);
          padding: 0.8rem;
          pointer-events: none;
          box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
            rgba(0, 0, 0, 0.25) 0 25px 50px -12px;

          a {
            padding: 0.5rem;

            &::after {
              content: none;
            }
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
  transition: all 300ms;
  height: 60px;

  > article {
    > a {
      font-size: 1.5em;

      img {
        height: 44px;

        &:last-of-type {
          height: 34px;
        }
      }
    }

    > nav {
      height: inherit;

      a {
        padding: 1rem 1.2rem;

        &::after {
          left: 1.2rem;
        }

        &:hover::after {
          right: 1.2rem;
        }

        &.current::after {
          left: 1.2rem;
          right: 1.2rem;
        }
      }
    }
  }
}

#scroll_btn {
  transition: all 500ms ease-in-out;
  opacity: 0;
  user-focus: none;
  pointer-events: none;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  width: 56px;
  height: 56px;
  z-index: 99;
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: var(--secondary-bg-color);
  font-size: 1.3em;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(var(--blur));
  gap: 3px;

  hr {
    border-radius: var(--border-radius);
    border: none;
    background-color: black;
    height: 4px;
    width: 38%;
  }

  &.scroll {
    opacity: 1;
    user-focus: auto;
    pointer-events: auto;
    cursor: pointer;
  }
}
</style>
