<template>
  <article id="calculateur">
    <h2>Calculateur de Chemin de vie</h2>
    <form id="inputs" class="content">
      <section>
        <label for="names">Prénoms (séparé par ",") :</label>
        <input
          id="names"
          v-model="names"
          placeholder="Prénom, Prénom, Prénom"
          type="text"
          required
        />
      </section>
      <section>
        <label for="birthdate">Date de naissance :</label>
        <input id="birthdate" v-model="birthdate" type="date" required />
      </section>
      <section>
        <label for="last-name-father">Nom du Père :</label>
        <input
          id="last-name-father"
          v-model="last_name_father"
          placeholder="Nom"
          type="text"
          required
        />
      </section>
      <section>
        <label for="last-name-mother">Nom de jeune fille de la Mère :</label>
        <input
          id="last-name-mother"
          v-model="last_name_mother"
          placeholder="Nom"
          type="text"
          required
        />
      </section>
      <section>
        <button type="reset" @click="resetForm">Réinitialiser</button>
      </section>
    </form>

    <article id="results" class="content">
      <section>
        <div v-if="stone_base">
          <span>
            <img
              :alt="stone_base"
              :src="
                require('@/assets/img/chemins_de_vie/calculateur/' +
                  image[base_id[1]])
              "
            />
          </span>
          <p>Pierre de base</p>
          <h3>{{ stone_base }}</h3>
        </div>
        <div v-else>
          <span class="unknown">?</span>
          <p>Pierre de base</p>
          <h3>Inconnu</h3>
        </div>
      </section>
      <section>
        <div v-if="stone_sommet">
          <span>
            <img
              :alt="stone_sommet"
              :src="
                require('@/assets/img/chemins_de_vie/calculateur/' +
                  image[sommet_id[1]])
              "
            />
          </span>
          <p>Pierre de sommet</p>
          <h3>{{ stone_sommet }}</h3>
        </div>
        <div v-else>
          <span class="unknown">?</span>
          <p>Pierre de sommet</p>
          <h3>Inconnu</h3>
        </div>
      </section>
      <section>
        <div v-if="stone_vie">
          <span>
            <img
              :alt="stone_vie"
              :src="
                require('@/assets/img/chemins_de_vie/calculateur/' +
                  image[vie_id[1]])
              "
            />
          </span>
          <p>Chemin de vie</p>
          <h3>{{ stone_vie }}</h3>
        </div>
        <div v-else>
          <span class="unknown">?</span>
          <p>Chemin de vie</p>
          <h3>Inconnu</h3>
        </div>
      </section>
      <section>
        <div v-if="stone_appel">
          <span>
            <img
              :alt="stone_appel"
              :src="
                require('@/assets/img/chemins_de_vie/calculateur/' +
                  image[appel_id[1]])
              "
            />
          </span>
          <p>Pierre d'appel</p>
          <h3>{{ stone_appel }}</h3>
        </div>
        <div v-else>
          <span class="unknown">?</span>
          <p>Pierre d'appel</p>
          <h3>Inconnu</h3>
        </div>
      </section>
      <section>
        <div v-if="stone_personnalite">
          <span>
            <img
              :alt="stone_personnalite"
              :src="
                require('@/assets/img/chemins_de_vie/calculateur/' +
                  image[personnalite_id[1]])
              "
            />
          </span>
          <p>Pierre de personnalité</p>
          <h3>{{ stone_personnalite }}</h3>
        </div>
        <div v-else>
          <span class="unknown">?</span>
          <p>Pierre de personnalité</p>
          <h3>Inconnu</h3>
        </div>
      </section>
      <section>
        <div v-if="stone_expression">
          <span>
            <img
              :alt="stone_expression"
              :src="
                require('@/assets/img/chemins_de_vie/calculateur/' +
                  image[expression_id[1]])
              "
            />
          </span>
          <p>Pierre d'expression</p>
          <h3>{{ stone_expression }}</h3>
        </div>
        <div v-else>
          <span class="unknown">?</span>
          <p>Pierre d'expression</p>
          <h3>Inconnu</h3>
        </div>
      </section>
      <section>
        <div v-if="stone_touche">
          <span>
            <img
              :alt="stone_touche"
              :src="
                require('@/assets/img/chemins_de_vie/calculateur/' +
                  image[touche_id[1]])
              "
            />
          </span>
          <p>Pierre de touche</p>
          <h3>{{ stone_touche }}</h3>
        </div>
        <div v-else>
          <span class="unknown">?</span>
          <p>Pierre de touche</p>
          <h3>Inconnu</h3>
        </div>
      </section>
      <section>
        <div v-if="stone_voeux">
          <span>
            <img
              :alt="stone_voeux"
              :src="
                require('@/assets/img/chemins_de_vie/calculateur/' +
                  image[voeux_id[1]])
              "
            />
          </span>
          <p>Pierre de vœux</p>
          <h3>{{ stone_voeux }}</h3>
        </div>
        <div v-else>
          <span class="unknown">?</span>
          <p>Pierre de vœux</p>
          <h3>Inconnu</h3>
        </div>
      </section>
    </article>
  </article>
</template>

<script>
export default {
  name: "calculateurComponent",
  data() {
    return {
      stone: [
        "Quartz rose",
        "Jaspe rouge",
        "Calcédoine",
        "Jade",
        "Émeraude",
        "Grenat",
        "Citrine",
        "Obsidienne",
        "Aigue Marine",
        "Rhodochrosite",
        "Cornaline",
        "Ambre",
        "Hematite",
        "Amethyste",
        "Malachite",
        "Opale",
        "Turquoise",
        "Pierre de Lune",
        "Topaze",
        "Lapis lazuli",
        "Tourmaline",
        "Cristal de Roche",
        "Azurite",
        "Amazonite",
        "Œil du Tigre",
        "Pyrite",
        "Fluorite",
        "Perle",
        "Sodalite",
        "Quartz fumé",
        "Soufre",
        "Mercure",
        "Sel",
      ],
      table: [
        ["A", "J", "S"],
        ["B", "K", "T"],
        ["C", "L", "U"],
        ["D", "M", "V"],
        ["E", "N", "W"],
        ["F", "O", "X"],
        ["G", "P", "Y"],
        ["H", "Q", "Z"],
        ["I", "R"],
      ],
      image: [
        "",
        "quartz_rose.webp",
        "jaspe_rouge.webp",
        "calcedoine.webp",
        "jade.webp",
        "emeraude.webp",
        "grenat.webp",
        "citrine.webp",
        "obsidienne.webp",
        "aigue_marine.webp",
        "rhodochrosite.webp",
        "cornaline.webp",
        "ambre.webp",
        "hematite.webp",
        "amethyste.webp",
        "malachite.webp",
        "opale.webp",
        "turquoise.webp",
        "pierre_de_lune.webp",
        "topaze.webp",
        "lapis_lazuli.webp",
        "tourmaline.webp",
        "cristal_de_roche.webp",
        "azurite.webp",
        "amazonite.webp",
        "oeil_du_tigre.webp",
        "pyrite.webp",
        "fluorite.webp",
        "perle.webp",
        "sodalite.webp",
        "quartz_fume.webp",
        "soufre.webp",
        "mercure.webp",
        "sel.webp",
      ],
      wrong_letter: [
        "á",
        "à",
        "ã",
        "â",
        "ä",
        "À",
        "Á",
        "Ã",
        "Â",
        "Ä",
        "é",
        "è",
        "ê",
        "ë",
        "É",
        "È",
        "Ê",
        "Ë",
        "í",
        "ì",
        "î",
        "ï",
        "Í",
        "Ì",
        "Î",
        "Ï",
        "ó",
        "ò",
        "ô",
        "õ",
        "ö",
        "Ó",
        "Ò",
        "Ô",
        "Õ",
        "Ö",
        "ú",
        "ù",
        "û",
        "ü",
        "Ú",
        "Ù",
        "Û",
        "Ü",
        "ç",
        "Ç",
        "ñ",
        "Ñ",
        "-",
        "_",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        " ",
        "&",
        "~",
        "#",
        "{",
        "[",
        "|",
        "`",
        "\\",
        "^",
        "@",
        "]",
        "}",
        "=",
        "+",
        "-",
        "°",
        "²",
        "!",
        "§",
        "/",
        ":",
        ";",
        "?",
        ">",
        "<",
        "µ",
        "*",
        "%",
        "¨",
        "^",
        "$",
        "£",
        "¤",
        '"',
        "'",
        "(",
        ")",
        ".",
      ],
      last_name_father: "",
      last_name_mother: "",
      names: "",
      birthdate: "",
      reduce_form: "",
      base_id: [0, 0],
      sommet_id: [0, 0],
      vie_id: [0, 0],
      appel_id: [0, 0],
      personnalite_id: [0, 0],
      expression_id: [0, 0],
      touche_id: [0, 0],
      voeux_id: [0, 0],
      reduce: [0, 0],
      toggle: false,
    };
  },
  methods: {
    resetForm() {
      this.last_name_father =
        this.last_name_mother =
        this.names =
        this.birthdate =
          "";
    },
    parseArray(array) {
      let parsed_array = [];
      for (let name of array) {
        parsed_array.push(this.parseString(name));
      }
      parsed_array = parsed_array.filter((el) => {
        return el != null && el !== "";
      });
      return parsed_array;
    },
    parseString(string) {
      let parsed_string = "";
      let split_string = string.split("");
      for (let letter of split_string) {
        let index = this.wrong_letter.indexOf(letter);
        if (!(index === -1)) {
          switch (true) {
            case index < 0:
              letter = "";
              break;
            case index <= 9:
              letter = "A";
              break;
            case index <= 17:
              letter = "E";
              break;
            case index <= 25:
              letter = "I";
              break;
            case index <= 35:
              letter = "O";
              break;
            case index <= 43:
              letter = "U";
              break;
            case index <= 45:
              letter = "C";
              break;
            case index <= 47:
              letter = "N";
              break;
            case index > 47:
              letter = "";
              break;
          }
        }
        parsed_string += letter.toUpperCase();
      }
      return parsed_string;
    },
    mergeNames(name1, name2) {
      return [this.parseString(name1), this.parseString(name2)];
    },
    getLetterNumber(letter) {
      if (letter) {
        let id = 0;
        for (let letters of this.table) {
          if (letters.find((value) => value === letter.toUpperCase())) {
            return id + 1;
          }
          id++;
        }
      }
    },
    reduceNumber(number) {
      while (number > 33) {
        let slice = number.toString().split("");
        number = 0;
        for (let integer of slice) {
          number += parseInt(integer);
        }
      }
      return number;
    },
    computeFirstLetter(string) {
      let number = 0;
      for (let name of string) {
        let temp = name.split("");
        number += this.getLetterNumber(temp[0]);
      }
      return number;
    },
    computeLastLetter(string) {
      let number = 0;
      for (let name of string) {
        let temp = name.split("");
        number += this.getLetterNumber(temp[temp.length - 1]);
      }
      return number;
    },
    computeDate(string) {
      let number = 0;
      for (let date of string) {
        number += parseInt(date);
      }
      return number;
    },
    computeVowels(string) {
      let number = 0;
      for (let name of string) {
        let split_name = name.split("");
        for (let character of split_name) {
          if (/[AEIOUY]/.test(character)) {
            number += this.getLetterNumber(character);
          }
        }
      }
      return number;
    },
    computeConsonants(string) {
      let number = 0;
      for (let name of string) {
        let temp = name.split("");
        for (let character of temp) {
          if (!/[AEIOUY]/.test(character)) {
            number += this.getLetterNumber(character);
          }
        }
      }
      return number;
    },
    firstVowel(string) {
      let split_name = string.split("");
      for (let character of split_name) {
        if (/[AEIOUY]/.test(character)) {
          return this.getLetterNumber(character);
        }
      }
    },
    computeFirstVowel(string) {
      let number = 0;
      for (let name of string) {
        number += this.firstVowel(name);
      }
      return number;
    },
    reduceNumberNine(number) {
      while (number > 9) {
        let slice = number.toString().split("");
        number = 0;
        for (let integer of slice) {
          number += parseInt(integer);
        }
      }
      return number;
    },
    computeAllLetter(string) {
      let number = 0;
      for (let name of string) {
        let temp = name.split("");
        for (let character of temp) {
          number += this.getLetterNumber(character);
        }
      }
      return number;
    },
    calculateBase() {
      this.base_id[0] = this.computeFirstLetter(this.last_names);
      this.base_id[0] += this.computeFirstLetter(this.first_names);
      this.base_id[1] = this.reduceNumber(this.base_id[0]);
      return this.stone[this.base_id[1] - 1];
    },
    calculateSommet() {
      this.sommet_id[0] = this.computeLastLetter(this.last_names);
      this.sommet_id[0] += this.computeLastLetter(this.first_names);
      this.sommet_id[1] = this.reduceNumber(this.sommet_id[0]);
      return this.stone[this.sommet_id[1] - 1];
    },
    calculateVie() {
      this.vie_id[0] = this.computeDate(this.birthdate.split("-"));
      this.vie_id[1] = this.reduceNumber(this.vie_id[0]);
      return this.stone[this.vie_id[1] - 1];
    },
    calculateAppel() {
      this.appel_id[0] = this.computeVowels(this.last_names);
      this.appel_id[0] += this.computeVowels(this.first_names);
      this.appel_id[1] = this.reduceNumber(this.appel_id[0]);
      return this.stone[this.appel_id[1] - 1];
    },
    calculatePersonnalite() {
      this.personnalite_id[0] = this.computeConsonants(this.last_names);
      this.personnalite_id[0] += this.computeConsonants(this.first_names);
      this.personnalite_id[1] = this.reduceNumber(this.personnalite_id[0]);
      return this.stone[this.personnalite_id[1] - 1];
    },
    calculateExpression() {
      this.expression_id[0] = this.appel_id[0] + this.personnalite_id[0];
      this.expression_id[1] = this.reduceNumber(this.expression_id[0]);
      return this.stone[this.expression_id[1] - 1];
    },
    calculateTouche() {
      this.touche_id[0] =
        this.base_id[0] +
        this.sommet_id[0] +
        this.appel_id[0] +
        this.personnalite_id[0] +
        this.expression_id[0];
      this.touche_id[1] = this.reduceNumber(this.touche_id[0]);
      return this.stone[this.touche_id[1] - 1];
    },
    calculateVoeux() {
      this.voeux_id[0] = this.computeFirstVowel(this.last_names);
      this.voeux_id[0] += this.computeFirstVowel(this.first_names);
      this.voeux_id[1] = this.reduceNumber(this.voeux_id[0]);
      return this.stone[this.voeux_id[1] - 1];
    },
    calculateResult() {
      this.reduce[0] = this.computeAllLetter(
        this.parseString(this.reduce_form)
      );
      this.reduce[1] = this.reduceNumberNine(this.reduce[0]);
      return this.reduce[1];
    },
  },
  computed: {
    first_names() {
      return this.parseArray(this.names.split(","));
    },
    last_names() {
      if (this.last_name_father && !this.last_name_mother) {
        return Array.of(this.parseString(this.last_name_father));
      } else if (!this.last_name_father && this.last_name_mother) {
        return Array.of(this.parseString(this.last_name_mother));
      } else {
        return this.mergeNames(this.last_name_father, this.last_name_mother);
      }
    },
    stone_base() {
      return this.calculateBase();
    },
    stone_sommet() {
      return this.calculateSommet();
    },
    stone_vie() {
      return this.calculateVie();
    },
    stone_appel() {
      return this.calculateAppel();
    },
    stone_personnalite() {
      return this.calculatePersonnalite();
    },
    stone_expression() {
      return this.calculateExpression();
    },
    stone_touche() {
      return this.calculateTouche();
    },
    stone_voeux() {
      return this.calculateVoeux();
    },
    reduce_result() {
      return this.calculateResult();
    },
  },
};
</script>

<style scoped lang="scss">
#inputs {
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: end;

  section:nth-of-type(1) {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  section:nth-of-type(2) {
    grid-column: 3 / 4;
    grid-row: 1;
  }

  section:nth-of-type(3) {
    grid-column: 1 / 2;
    grid-row: 2;
  }

  section:nth-of-type(4) {
    grid-column: 2 / 3;
    grid-row: 2;
  }

  section:nth-of-type(5) {
    grid-column: 3 / 4;
    grid-row: 2;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 0 0 8px 8px;
    font-weight: bold;
  }

  input,
  button {
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

  button {
    cursor: pointer;
  }
}

#results {
  margin-top: var(--content-padding);
  margin-bottom: var(--content-margin);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  section {
    flex: 0 0 21%;
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 230px;
    border: 2px solid black;
    border-radius: var(--border-radius);
    background-color: var(--primary-bg-color);
  }

  span {
    width: 100%;
    height: 140px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }

  .unknown {
    font-size: 4.4em;
    font-weight: 500;
  }

  img {
    width: 90px;
    -webkit-filter: var(--drop-shadow);
    filter: var(--drop-shadow);
    transition: all 1s linear;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.2em;

    &::before,
    &::after {
      border-top: 0.08em solid;
      content: "";
      flex: 1;
      border-radius: var(--border-radius);
    }
  }

  h3 {
    margin: 1rem 0 0;
    padding: 0;
    text-align: center;
  }
}
</style>
