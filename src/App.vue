<template>
  <Header />

  <router-view />

  <Footer />
</template>

<script>
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;1,400&display=swap");

:root {
  --global-font: "Plus Jakarta Sans", "Georgia", "Arial", sans-serif;
  --title-font: "Montserrat", "Arial", "Georgia", sans-serif;

  --content-max-width: 1400px;
  --content-spacing: 4rem;
  --border-radius: 12px;
  --blur: 12px;

  --global-bg-color: #ffffff;
  --primary-bg-color: rgba(138, 84, 20, 0.15);
  --secondary-bg-color: rgba(0, 0, 0, 0.15);
  --global-text-color: #000000;
  --special-text-color: #8a5414;
  --stars-color: #d0b34c;
}

::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 14px 14px black;
  border: solid 4px transparent;
  border-radius: 14px;
}

::-webkit-scrollbar-button {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  color: var(--global-text-color);
  font-family: var(--global-font);
  overflow: overlay;
  background-color: var(--global-bg-color);

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
}

.content {
  padding: var(--content-spacing) 0;
  width: min(100% - 2rem, var(--content-max-width));
  margin-inline: auto;

  h2 {
    font-family: var(--title-font);
    font-size: 2.2em;
    text-align: center;
    margin-bottom: 2rem;
  }
}

.blob {
  border-radius: 100%;
  transition: border-radius 15s;
}
</style>
