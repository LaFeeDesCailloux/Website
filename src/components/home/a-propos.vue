<template>
  <article>
    <section class="content">
      <h2>À propos</h2>
      <section>
        <div>
          <p><strong>Bienvenue,</strong></p>
          <p>
            Passionnée par les pierres et leurs innombrables vertus, je suis
            praticienne en lithothérapie depuis de nombreuses années.
          </p>
          <p>
            Afin de vous apporter ma connaissance sur le sujet, je souhaite
            aider toute personne qui en fera la demande car il n’y a pas de
            hasard. Si vous faites la démarche, le moment est venu pour vous.
          </p>
          <p>
            Je confectionne les chemins de vie et les bracelets thérapeutiques,
            avec tout mon cœur et amour, en portant particulièrement attention à
            la place de chaque pierre dans le bracelet car, détail très
            important, elles ne sont pas toutes compatibles entre elles et
            peuvent même se neutraliser.
          </p>
          <p>
            Si toutefois vous souhaitez posséder une création personnalisée,
            n’hésitez pas... prenez contact avec moi.
          </p>
          <p>
            <strong>Alors ?... Prêt pour l’aventure ?</strong>
          </p>
          <div>
            <a href="https://instagram.com/lafeedescailloux">
              <font-awesome-icon icon="fa-brands fa-instagram" fixed-width />
            </a>
            <a href="mailto:contact@lafeedescailloux.fr">
              <font-awesome-icon icon="fa-solid fa-envelope" fixed-width />
            </a>
            <a href="tel:0647861284">
              <font-awesome-icon icon="fa-solid fa-phone" fixed-width />
            </a>
          </div>
        </div>
        <div>
          <img src="@/assets/svg/fée.svg" alt="A propos" />
          <img src="@/assets/svg/étoiles.svg" alt="A propos" />
          <img
            class="blob-static"
            src="@/assets/img/a-propos.webp"
            alt="A propos"
          />
        </div>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: "aProposComponent",
};
</script>

<style scoped lang="scss">
article {
  margin-top: var(--content-margin);
  padding: var(--content-padding) 0;
  background-color: var(--primary-bg-color);

  .content {
    margin-top: 0;

    section {
      padding: 0 2rem 0 0;
      display: grid;
      grid-template-columns: 1.35fr 0.65fr;
      align-items: center;
      gap: 5rem;

      > div:first-of-type {
        text-align: right;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        p:first-of-type {
          margin-bottom: 1rem;
          font-size: 1.05em;
        }

        p:last-of-type {
          margin-top: 1.5rem;
          font-size: 1.05em;
        }

        div {
          display: flex;
          justify-content: flex-end;
          gap: 2rem;
          font-size: 1.5em;

          a {
            padding: 0.6rem;
            color: black;
            text-decoration: none;
            transform: scale(1.01);
            transition: transform 250ms;

            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }

      > div:last-of-type {
        position: relative;
        height: 420px;

        img:first-of-type {
          z-index: 1;
          position: absolute;
          transform: scaleX(-1) rotate(15deg);
          width: 100px;
          left: 14px;
        }

        img:nth-of-type(2) {
          position: absolute;
          width: 310px;
          top: -8%;
          right: 0;
        }

        img:last-of-type {
          z-index: 2;
          position: absolute;
          border-radius: 57% 43% 34% 66% / 56% 64% 36% 44%;
          height: 360px;
          width: 100%;
          object-fit: cover;
          bottom: 0;
        }
      }
    }
  }
}
</style>
