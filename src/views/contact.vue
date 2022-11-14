<template>
  <article class="wrapper">
    <section class="content">
      <div>
        <h1>Me contacter</h1>
        <p>
          Concernant les contacts téléphoniques, merci de bien vouloir me
          joindre de préférence en semaine.
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
      <form @click.prevent="sendMail">
        <label for="name">Votre nom</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          required
          autocomplete="name"
        />

        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          required
          autocomplete="email"
        />

        <!-- TODO: Faire l'objet de contact avec les champs supplémentaires pour le chemin de vie -->
        <label for="object">Objet</label>
        <input
          type="text"
          name="object"
          id="object"
          v-model="object"
          required
          autocomplete="object"
        />

        <label for="message">Message</label>
        <textarea name="message" id="message" v-model="message" required />

        <button class="button" type="submit">Envoyer</button>
      </form>
    </section>
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

      label {
        margin: 0 0 8px 8px;
        font-weight: bold;
      }

      input,
      textarea {
        margin-bottom: 1.6rem;
        background-color: transparent;
        padding: 0.5rem 0.6rem;
        font-size: 0.94em;
        border: 2px solid black;
        border-radius: 6px;
        font-family: "Arial", sans-serif;
        resize: vertical;
        outline: none;
        position: relative;
        transition: border 250ms;
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
}
</style>
