<template>
  <article id="title" class="content">
    <h1>Me contacter</h1>
    <p>Ouais, c'est pas une science exacte.</p>
  </article>

  <article id="links" class="content">
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
  </article>

  <article id="form" class="content">
    <form @submit.prevent="send">
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

      <label for="message">Message</label>
      <textarea name="message" id="message" v-model="message" required />

      <button type="submit">Envoyer</button>
    </form>
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
      message: "",
    };
  },
  methods: {
    send() {
      // TODO: Send email
      console.log("Email sent");
    },
  },
};
</script>

<style scoped lang="scss">
#title {
  padding-bottom: 0;

  h1 {
    font-size: 4em;
    text-align: center;
  }

  p {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.1em;
  }
}

#links {
  padding-bottom: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  a {
    padding: 1rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.1em;
    text-decoration: none;
    color: black;

    svg {
      font-size: 1.3em;
    }
  }
}

#form form {
  display: flex;
  flex-flow: column nowrap;
  width: min(100%, 900px);
  margin-inline: auto;

  label {
    font-weight: bold;
    margin: 0 0 0.4rem 0.4rem;
  }

  input,
  textarea {
    margin-bottom: 1.6rem;
    background-color: transparent;
    padding: 0.5rem 0.6rem;
    font-size: 0.94em;
    border: 2px solid rgba(104, 86, 65, 0.5);
    border-radius: 6px;
    font-family: "Arial", sans-serif;
    resize: vertical;
    outline: none;
    position: relative;
    transition: border 250ms;

    &:focus {
      border: 2px solid rgba(104, 86, 65, 1);
    }
  }

  textarea {
    min-height: 140px;
  }

  button {
    display: inline-flex;
    align-self: center;
    text-align: center;
    padding: 0.7rem 1.8rem;
    border: 2px solid black;
    border-radius: 6px;
    font-size: 0.9em;
    color: black;
    text-decoration: none;
    font-weight: bold;
    transform: scale(1);
    transition: transform 400ms;
    background-color: transparent;

    &:hover {
      transform: scale(1.04);
    }
  }
}
</style>
