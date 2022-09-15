<template>
  <Header />

  <router-view />

  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");

:root {
  --font-family: "Montserrat", "Georgia", "Arial", sans-serif;
  --max-width-global: 1300px;
  --max-width-contact: 900px;
  --spacing: 4rem;
  --border-radius: 2px;
  --global-bg-color: #ffffff;
  --primary-bg-color: #cabcab;
  --secondary-bg-color: #edebe8;
  --global-text-color: #000000;
  --header-text-color: #ffffff;
  --primary-text-color: #685641;
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
  //background-color: black;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  color: var(--global-text-color);
  font-family: var(--font-family);
  overflow: overlay;

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
}

.content {
  padding: var(--spacing) 0;
  width: min(100% - 2rem, var(--max-width-global));
  margin-inline: auto;
}
</style>
