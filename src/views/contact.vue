<template>
  <article class="wrapper">
    <section class="content">
      <div>
        <h1>Me contacter</h1>
        <p>
          Concernant les contacts téléphoniques, merci de bien vouloir me
          joindre de préférence en semaine.
        </p>
        <p>
          Vous souhaitez acheter un bracelet ? Pensez à renseigner votre tour de
          poignet lors de votre commande.
        </p>
      </div>
      <div>
        <a href="tel:0647861284">
          <font-awesome-icon icon="fa-solid fa-phone" fixed-width />
          06 47 86 12 84
        </a>
        <a href="mailto:contact@lafeedescailloux.fr">
          <font-awesome-icon icon="fa-solid fa-envelope" fixed-width />
          contact@lafeedescailloux.fr
        </a>
        <a href="https://instagram.com/lafeedescailloux">
          <font-awesome-icon icon="fa-brands fa-instagram" fixed-width />
          @LaFeeDesCailloux
        </a>
      </div>
      <form @submit.prevent="sendMail">
        <label for="name">Votre nom</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          required
          autocomplete="name"
        />

        <label for="email custom-object">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          required
          autocomplete="email"
        />

        <label for="object">Objet</label>
        <select name="object" id="object" v-model="object" required>
          <option value="" selected disabled>Sélectionnez une option</option>
          <option value="chemin-de-vie">Chemin de vie</option>
          <option value="bracelet-therapeutique">Bracelet thérapeutique</option>
          <option value="pierres">Pierres</option>
          <option value="info">Demande de renseignements</option>
          <option value="other">Autre</option>
        </select>

        <input
          v-if="object === 'other'"
          type="text"
          name="custom-object"
          id="custom-object"
          required
        />

        <div v-if="object === 'chemin-de-vie'">
          <label for="cdv-prenoms">Vos prénoms</label>
          <input type="text" name="cdv-prenoms" id="cdv-prenoms" required />

          <label for="cdv-pere">Nom du père</label>
          <input type="text" name="cdv-pere" id="cdv-pere" required />

          <label for="cdv-mere">Nom de la mère</label>
          <input type="text" name="cdv-mere" id="cdv-mere" required />

          <label for="cdv-naissance">Date de naissance</label>
          <input type="date" name="cdv-naissance" id="cdv-naissance" required />
        </div>

        <label for="message">Message</label>
        <textarea name="message" id="message" v-model="message" required />

        <button class="button" type="submit">Envoyer</button>
      </form>
    </section>
    <img src="@/assets/svg/cristaux.svg" alt="Cristaux" />
  </article>
</template>

<script>
export default {
  name: "contactView",
  title() {
    return "Me contacter";
  },
  data() {
    return {
      name: "",
      email: "",
      object: "",
      message: "",
    };
  },
  methods: {
    sendMail() {
      // TODO: Send email
      console.log("Email sent");
    },
  },
};
</script>

<style scoped lang="scss">
article {
  padding-top: var(--content-margin);
  position: relative;
  overflow: hidden;

  .content {
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    > div:first-of-type {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 0.8rem;

      h1 {
        font-size: 3em;
        margin-bottom: 0;
      }
    }

    > div:last-of-type {
      background-color: var(--primary-bg-color);
      padding: 1rem;
      border-radius: var(--border-radius);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      gap: 2rem;

      a {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--global-text-color);
        text-decoration: none;
        font-size: 1.1em;
        padding: 1rem;

        svg {
          font-size: 1.6em;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: min(100%, var(--form-max-width));

      > div {
        display: inherit;
        flex-direction: inherit;
      }

      label {
        margin: 0 0 8px 8px;
        font-weight: bold;
      }

      input,
      select,
      textarea {
        margin-bottom: 1.6rem;
        padding: 0.5rem 0.6rem;
        font-size: 0.94em;
        border: 2px solid black;
        border-radius: 6px;
        font-family: "Arial", sans-serif;
        resize: vertical;
        outline: none;
        position: relative;
        transition: border 250ms;
        background-color: var(--global-bg-color);
      }

      textarea {
        min-height: 206px;
      }

      button {
        font-family: var(--global-font);
        font-size: 1em;
        margin-inline: auto;
        z-index: 1;
        display: block;
        text-align: center;
        padding: 0.6rem 2rem;
        border: 2px solid black;
        border-radius: var(--border-radius);
        color: black;
        background-color: var(--global-bg-color);
        text-decoration: none;
        font-weight: bold;
        transform: scale(1.005);
        transition: transform 400ms;
        cursor: pointer;

        &:hover {
          transform: scale(1.04);
        }
      }
    }
  }

  img {
    z-index: -1;
    opacity: 0.2;
    height: calc(100% - 220px);
    margin-inline: auto;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -180px;
    filter: saturate(0.6);
  }
}
</style>
