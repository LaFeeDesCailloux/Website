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
  --form-max-width: 600px;
  --content-margin: 7rem;
  --content-padding: 5rem;
  --border-radius: 12px;
  --blur: 12px;

  --global-bg-color: #ffffff;
  --primary-bg-color: #eee6dc;
  --primary-bg-color-alt: rgba(138, 84, 20, 0.15);
  --secondary-bg-color: #d9d9d9;
  --global-text-color: #000000;
  --special-text-color: #8a5414;
  --stars-color: #ffb439;
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
  margin-top: var(--content-margin);
  width: min(100% - 2rem, var(--content-max-width));
  margin-inline: auto;
}

h1,
h2 {
  font-family: var(--title-font);
  font-size: 2.2em;
  text-align: center;
  margin-bottom: 2.5rem;
}

.blob,
.blob-static {
  border-radius: 100%;
  transition: border-radius 15s;
  box-shadow: 28px 28px var(--primary-bg-color);
}

.button {
  z-index: 1;
  display: block;
  text-align: center;
  padding: 0.8rem 2rem;
  border: 2px solid black;
  border-radius: var(--border-radius);
  color: black;
  background-color: var(--secondary-bg-color);
  text-decoration: none;
  font-weight: bold;
  transform: scale(1.005);
  transition: transform 400ms;

  &:hover {
    transform: scale(1.04);
  }
}
</style>
