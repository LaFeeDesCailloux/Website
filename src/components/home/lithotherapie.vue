<template>
  <article class="content" id="lithotherapie">
    <h2>Lithothérapie</h2>
    <section>
      <img
        class="blob"
        src="@/assets/img/lithotherapie.webp"
        alt="Pierres utilisées avec la lithothérapie"
        loading="lazy"
      />
      <div>
        <p>
          Lithothérapie vient du Grec "<span>Lithos</span>" qui signifie Pierre
          et "<span>Thérapeia</span>" thérapie ou cure ; thérapie par les
          pierres.<br />
          De nombreuses civilisations très anciennes utilisaient les pierres
          pour leurs nombreuses vertues.
        </p>
        <p>
          Ces pierres et cristaux agissent sur nos organismes par les vibrations
          qu'elles dégagent. Elles agissent tant sur le plan physique, mental,
          émotionnel ou encore spirituel.<br />
          Tout est question de rééquilibrage et d'harmonisation des énergies
          vibratoires.<br />
          Chaque minéral a ses propres caractéristiques en fonction de sa
          composition.
        </p>
        <p>
          Peu importe vos croyances en leurs vertus, les pierres vous
          apporteront tous leurs bienfaits.
        </p>
        <p><strong>Fiez-vous à votre intuition.</strong></p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "lithotherapieComponent",
};
</script>

<style scoped lang="scss">
article {
  position: relative;
  margin-top: calc(var(--content-margin) / 3);

  section {
    img {
      display: none;
    }

    div p {
      font-size: 1.1em;
      text-align: center;
      margin-bottom: 1rem;

      span {
        font-style: oblique;
      }

      &:last-of-type {
        margin-top: 3rem;
        margin-bottom: 0;
      }
    }

    @media (min-width: 900px) {
      display: grid;
      grid-template-columns: 0.65fr 1.35fr;
      align-items: center;
      gap: 5rem;

      img {
        display: unset;
        border-radius: 71% 29% 27% 73% / 69% 56% 44% 31%;
        height: 400px;
        width: 100%;
        object-fit: cover;
      }

      div p {
        text-align: justify;
      }
    }
  }
}
</style>
