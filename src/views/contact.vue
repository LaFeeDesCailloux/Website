<template>
  <article>
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
        <p>
          Il est important de rappeler que la lithothérapie n'est pas considérée
          comme une forme de traitement médical reconnue et qu'elle ne doit pas
          être utilisée à la place d'un traitement médical conventionnel.
        </p>
      </div>
      <div>
        <a href="tel:+33620495045">
          <font-awesome-icon fixed-width icon="fa-solid fa-phone" />
          06 20 49 50 45
        </a>
        <a href="mailto:contact@lafeedescailloux.fr">
          <font-awesome-icon fixed-width icon="fa-solid fa-envelope" />
          contact@lafeedescailloux.fr
        </a>
        <a href="https://instagram.com/lafeedescailloux">
          <font-awesome-icon fixed-width icon="fa-brands fa-instagram" />
          @LaFeeDesCailloux
        </a>
      </div>
      <form @submit.prevent="sendMail">
        <label for="name">Votre nom</label>
        <input
          id="name"
          v-model="name"
          autocomplete="name"
          name="name"
          required
          type="text"
        />

        <label for="email custom-object">Email</label>
        <input
          id="email"
          v-model="email"
          autocomplete="email"
          name="email"
          required
          type="email"
        />

        <label for="subject">Objet</label>
        <select id="subject" v-model="subject" name="object" required>
          <option disabled selected value="">Sélectionnez une option</option>
          <option value="chemin-de-vie">Chemin de vie</option>
          <option value="bracelets-therapeutiques">
            Bracelets thérapeutiques
          </option>
          <option value="pendules">Pendules</option>
          <option value="pendentifs-colliers">Pendentifs et Colliers</option>
          <option value="druses-geodes">Druses et Géodes</option>
          <option value="pierres-roulees">Pierres roulées</option>
          <option value="info">Demande de renseignements</option>
          <option value="other">Autre</option>
        </select>

        <input
          v-if="subject === 'other'"
          id="custom-object"
          v-model="custom_subject"
          name="custom-object"
          required
          type="text"
        />

        <div
          v-if="
            subject === 'bracelets-therapeutiques' ||
            subject === 'chemin-de-vie'
          "
        >
          <label for="size">Tour de poignet</label>
          <input id="size" v-model="size" name="size" required type="number" />
        </div>

        <div v-if="subject === 'chemin-de-vie'">
          <label for="cdv-prenoms">Vos prénoms</label>
          <input
            id="cdv-prenoms"
            v-model="cdv.names"
            name="cdv-prenoms"
            required
            type="text"
          />

          <label for="cdv-pere">Nom du père</label>
          <input
            id="cdv-pere"
            v-model="cdv.father"
            name="cdv-pere"
            required
            type="text"
          />

          <label for="cdv-mere">Nom de jeune fille de la mère</label>
          <input
            id="cdv-mere"
            v-model="cdv.mother"
            name="cdv-mere"
            required
            type="text"
          />

          <label for="cdv-naissance">Date de naissance</label>
          <input
            id="cdv-naissance"
            v-model="cdv.birthdate"
            name="cdv-naissance"
            required
            type="date"
          />
        </div>

        <label for="message">Message</label>
        <textarea id="message" v-model="message" name="message" required />

        <div id="rgpd-wrapper">
          <label for="rgpd">
            J'accepte la
            <router-link :to="{ name: 'politique-de-confidentialite' }">
              politique de confidentialité
            </router-link>
            et déclare avoir plus de 15 ans.
          </label>
          <input id="rgpd" name="rgpd" required type="checkbox" />
        </div>

        <button id="send" :disabled="loading" class="button" type="submit">
          <font-awesome-icon
            v-if="loading"
            icon="fa-solid fa-spinner"
            spin-pulse
          />
          <span v-else-if="success">
            Message envoyé
            <font-awesome-icon icon="fa-solid fa-check" />
          </span>
          <span v-else-if="error">
            Une erreur s'est produite
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </span>
          <span v-else> Envoyer </span>
        </button>
      </form>
    </section>
    <img alt="Cristaux" src="@/assets/svg/cristaux.svg" />
  </article>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "contactView",
  title() {
    return "Me contacter";
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      cdv: {
        names: "",
        father: "",
        mother: "",
        birthdate: "",
      },
      custom_subject: "",
      size: "",
      message: "",
      success: false,
      error: false,
      loading: false,
    };
  },
  mounted() {
    if (this.$route.query.subject === "chemin-de-vie") {
      this.subject = this.$route.query.subject;
      this.cdv.names = this.$route.query.names;
      this.cdv.father = this.$route.query.name_father;
      this.cdv.mother = this.$route.query.name_mother;
      this.cdv.birthdate = this.$route.query.birthdate;
    }
  },
  methods: {
    async sendMail() {
      let button = document.getElementById("send");
      this.resetButton(button);

      this.loading = true;

      let select = document.getElementById("subject");
      let subject = "";
      if (this.subject === "other") {
        subject = this.custom_subject;
      } else {
        subject = select.children[select.selectedIndex].text;
      }

      let message = "";
      if (this.subject === "chemin-de-vie") {
        message +=
          "Information du chemin de vie :\n" +
          `Prénoms : ${this.cdv.names}\n` +
          `Nom du père : ${this.cdv.father}\n` +
          `Nom de la mère : ${this.cdv.mother}\n` +
          `Date de naissance : ${this.cdv.birthdate}\n\n\n` +
          this.message;
      } else if (this.subject === "bracelets-therapeutiques") {
        message += `Tour de poignet : ${this.size}\n\n\n` + this.message;
      } else {
        message += this.message;
      }

      emailjs
        .send(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          {
            from_name: this.name,
            reply_to: this.email,
            subject: subject,
            content: message,
          },
          process.env.VUE_APP_USER_ID
        )
        .then(() => {
          button.classList.add("success");
          this.success = true;
        })
        .catch(() => {
          button.classList.add("error");
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
          setTimeout(() => {
            this.resetButton(button);
          }, 3000);
        });
    },
    resetButton(button) {
      button.classList.remove("success");
      button.classList.remove("error");
      this.loading = this.success = this.error = false;
    },
  },
};
</script>

<style lang="scss" scoped>
article {
  overflow: hidden;
  padding-top: var(--content-margin);
  position: relative;

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin: 2rem auto;

    > div:first-of-type {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      text-align: center;

      h1 {
        font-size: 3em;
        margin-bottom: 0;
      }

      p {
        max-width: 900px;
      }
    }

    > div:last-of-type {
      align-items: center;
      background-color: var(--primary-bg-color);
      border-radius: var(--border-radius);
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem 2rem;
      justify-content: space-evenly;
      max-width: 1100px;
      padding: 1rem;
      width: 100%;

      a {
        align-items: center;
        color: var(--global-text-color);
        display: inline-flex;
        flex: 1 1 36%;
        font-size: 1.1em;
        gap: 0.5rem;
        justify-content: center;
        padding: 1rem;
        text-align: center;
        text-decoration: none;

        @media (min-width: 800px) {
          flex: 1 0 24%;
        }

        svg {
          font-size: 1.6em;
        }
      }

      @media (max-width: 380px) {
        flex-direction: column;
        padding: 0.6rem;

        a {
          flex-direction: column;
          word-break: break-word;
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
        font-weight: bold;
        margin: 0 0 8px 8px;
      }

      input,
      select,
      textarea {
        background-color: var(--global-bg-color);
        border: 2px solid black;
        border-radius: 6px;
        font-family: "Arial", sans-serif;
        font-size: 0.94em;
        margin-bottom: 1.6rem;
        outline: none;
        padding: 0.5rem 0.6rem;
        position: relative;
        resize: vertical;
        transition: border 250ms;
      }

      textarea {
        min-height: 206px;
      }

      button {
        background-color: var(--global-bg-color);
        border: 2px solid black;
        border-radius: var(--border-radius);
        color: black;
        cursor: pointer;
        display: block;
        font-family: var(--global-font);
        font-size: 1em;
        font-weight: bold;
        margin-inline: auto;
        padding: 0.6rem 2rem;
        text-align: center;
        text-decoration: none;
        transform: scale(1.005);
        transition: all 400ms;
        z-index: 1;

        svg {
          margin-left: 0.4rem;
        }

        &:hover {
          transform: scale(1.04);
        }
      }
    }
  }

  img {
    filter: saturate(0.6);
    height: calc(100% - 220px);
    left: 0;
    margin-inline: auto;
    max-width: 600px;
    opacity: 0.2;
    position: absolute;
    right: 0;
    top: 100%;
    transform: translateY(-52%);
    width: 100%;
    z-index: -1;

    @media (min-width: 600px) {
      transform: translateY(-78%);
    }

    @media (max-width: 600px) {
      object-fit: cover;
    }
  }
}

.success {
  border: 2px solid green !important;
  color: green !important;
}

.error {
  border: 2px solid red !important;
  color: red !important;
}

#rgpd-wrapper {
  align-items: baseline;
  display: inline-flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-bottom: 1.6rem;

  input {
    margin: 0;
  }

  a {
    color: var(--global-text-color);
    display: inline-block;
  }
}
</style>
