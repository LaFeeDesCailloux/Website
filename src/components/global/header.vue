<template>
  <!-- Header -->
  <header>
    <article>
      <!-- Logo -->
      <router-link :to="{ name: 'home' }">
        <img alt="Logo La Fée des Cailloux" src="@/assets/img/logo.webp" />
        <img alt="La Fée des Cailloux" src="@/assets/svg/logo-title.svg" />
      </router-link>

      <!-- Navigation -->
      <nav>
        <!-- Show links button for mobile -->
        <font-awesome-icon
          @click.prevent="toggleNav"
          id="bars"
          icon="fa-solid fa-bars"
        />

        <!-- Links -->
        <section :class="show_nav ? 'show' : ''" @mouseleave="show_nav = false">
          <a
            @click.prevent="go('home')"
            :class="$route.name === 'home' ? 'current' : ''"
          >
            Accueil
          </a>
          <a
            id="realisations"
            :class="$route.path.startsWith('/realisations/') ? 'current' : ''"
            @click="
              show_realisations = !show_realisations;
              show_nav = false;
            "
          >
            Mes réalisations
            <font-awesome-icon icon="fa-solid fa-sort-down" />
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
        </section>

        <!-- Realisations -->
        <section
          :class="show_realisations ? 'show' : ''"
          @mouseleave="show_realisations = false"
        >
          <a
            @click.prevent="
              show_realisations = false;
              show_nav = true;
            "
            id="close_realisations"
          >
            <font-awesome-icon icon="fa-solid fa-sort-down" />
          </a>
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
              $route.path.startsWith('/realisations/pendules') ? 'current' : ''
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
        </section>
      </nav>
    </article>
  </header>

  <!-- Go to top button -->
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
      show_nav: false,
      show_realisations: false,
    };
  },
  mounted() {
    this.header = document.getElementsByTagName("header")[0];
    this.scroll_btn = document.getElementById("scroll_btn");
    document.addEventListener("scroll", this.scrollClassToggle);
  },
  beforeUnmount() {
    document.removeEventListener("scroll", this.scrollClassToggle);
  },
  methods: {
    scrollClassToggle() {
      this.show_nav = this.show_realisations = false;
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
    toggleNav() {
      if (!this.show_nav && !this.show_realisations) {
        this.show_nav = true;
      } else {
        this.show_nav = this.show_realisations = false;
      }
    },
    go(page) {
      this.show_nav = this.show_realisations = false;
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
      gap: 1.3rem;

      img {
        transition: all 300ms;
        height: 68px;

        &:last-of-type {
          height: 50px;

          @media (max-width: 560px) {
            display: none;
          }
        }
      }
    }

    > nav {
      > svg {
        transition: all 300ms;
        display: block;
        padding: 1.2rem;
        font-size: 1.6em;
        cursor: pointer;
      }

      > section {
        transition: all 300ms;
        transform: translateX(110%);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        background-color: rgba(255, 255, 255, 0.96);
        backdrop-filter: blur(var(--blur));
        position: absolute;
        top: 100%;
        right: 0;
        height: calc(100vh - 90px);
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        overflow-y: auto;
        overflow-x: hidden;

        &.show {
          transition: all 300ms;
          transform: translateX(0);

          a {
            animation: dropdown-link-appear 300ms;
            animation-fill-mode: both;

            @for $i from 1 through 7 {
              &:nth-child(#{$i}n) {
                animation-delay: #{$i * 30 + 50}ms;
              }
            }

            @keyframes dropdown-link-appear {
              from {
                transform: translateX(30px);
              }
              to {
                transform: translateX(0);
              }
            }
          }
        }

        a {
          transition: all 300ms;
          padding: 1.6rem;
          text-align: center;
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
          gap: 0.4rem;

          @media (max-width: 1159px) {
            svg {
              transform: rotate(-90deg) translateX(-4px);
            }
          }
        }

        #close_realisations {
          line-height: 0;
          font-size: 1.4em;
          transform: rotate(90deg) translateY(-4px) translateX(5px) !important;

          &::after {
            content: unset;
          }
        }
      }
    }

    @media (min-width: 1160px) {
      > nav {
        > svg {
          display: none;
        }

        > section {
          transition: font-size 300ms;
          transform: translateX(0);
          box-shadow: none;
          background-color: transparent;
          backdrop-filter: none;
          position: relative;
          top: 0;
          right: 0;
          height: max-content !important;
          flex-direction: row;

          &:last-of-type {
            transition: all 300ms;
            position: absolute;
            top: 90%;
            right: 358px;
            flex-direction: column;
            background-color: #e5e5e5;
            border-radius: calc(var(--border-radius) / 2);
            padding: 0.8rem;
            pointer-events: none;
            box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
              rgba(0, 0, 0, 0.25) 0 25px 50px -12px;
            transform: translateY(-2%);
            opacity: 0;

            > a {
              padding: 0.5em;

              &::after {
                content: none;
              }

              &.current {
                font-weight: bold;
              }
            }

            &.show {
              opacity: 1;
              transform: translateY(0);
              pointer-events: auto;

              a {
                animation: dropdown-link-appear 150ms;
                animation-fill-mode: both;

                @for $i from 1 through 7 {
                  &:nth-child(#{$i}n) {
                    animation-delay: #{$i * 30}ms;
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

          #close_realisations {
            display: none;
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
    img {
      height: 44px;

      &:last-of-type {
        height: 34px;
      }
    }

    > nav {
      > svg {
        padding: 0.6em;
      }

      > section {
        height: calc(100vh - 60px);

        @media (min-width: 1159px) {
          &:first-of-type {
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

          &:last-of-type {
            right: 330px;
          }
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
  z-index: 98;
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
