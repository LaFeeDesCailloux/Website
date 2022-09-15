<template>
  <article id="banner">
    <h1>Pendules</h1>
    <img src="@/assets/realisations/pendules/header_pendule.webp" alt="" />
  </article>

  <!--<article class="content" id="description">
    <section>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu
        arcu ac risus laoreet sodales. Fusce tincidunt nibh ligula, sed tempus
        justo vehicula malesuada. Aenean erat lorem, porta eu purus vitae,
        pellentesque vulputate lacus. Etiam luctus arcu sed eleifend convallis.
        Vestibulum vel mi non mi dapibus pulvinar. Nunc blandit nisi quis congue
        efficitur. Maecenas ultrices metus eu mi facilisis consectetur. Aliquam
        molestie iaculis tellus convallis eleifend. Etiam eu massa enim. Sed
        vehicula ante sem, nec bibendum purus aliquam quis. Vivamus tincidunt,
        ipsum id tempus gravida, leo leo elementum mi, nec iaculis quam sapien a
        nisi.
      </div>
      <img src="" alt="" />
    </section>
    <section>
      <div></div>
      <img src="" alt="" />
    </section>
  </article>-->
</template>

<script>
export default {
  name: "pendulesView",
  title() {
    return "Pendules";
  },
};
</script>

<style scoped lang="scss">
#banner {
  z-index: 0;
  background-color: #070707;
  position: relative;
  height: 600px;

  h1 {
    z-index: -1;
    text-align: center;
    font-size: 8em;
    color: white;
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
  }

  img {
    margin-top: 9.4rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
