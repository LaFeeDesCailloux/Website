<template>
    <article id="calculateur">
        <h2>Calculateur de chemin de vie</h2>
        <form id="inputs" class="content">
            <section>
                <label for="names">Prénoms (séparé par ",") :</label>
                <input
                    id="names"
                    v-model="names"
                    placeholder="Prénom, Prénom, Prénom"
                    type="text"
                    required />
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
                    required />
            </section>
            <section>
                <label for="last-name-mother">Nom de jeune fille de la Mère :</label>
                <input
                    id="last-name-mother"
                    v-model="last_name_mother"
                    placeholder="Nom"
                    type="text"
                    required />
            </section>
            <section>
                <button type="reset" @click="resetForm">Réinitialiser</button>
            </section>
        </form>

        <article id="results" class="content">
            <section>
                <div v-if="stone_base">
                    <span>
                        <img :alt="stone_base" :src="require(folder + image[base_id[1]])" />
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
                        <img :alt="stone_sommet" :src="require(folder + image[sommet_id[1]])" />
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
                        <img :alt="stone_vie" :src="require(folder + image[vie_id[1]])" />
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
                        <img :alt="stone_appel" :src="require(folder + image[appel_id[1]])" />
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
                        <img :alt="stone_personnalite" :src="require(folder + image[personnalite_id[1]])" />
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
                        <img :alt="stone_expression" :src="require(folder + image[expression_id[1]])" />
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
                        <img :alt="stone_touche" :src="require(folder + image[touche_id[1]])" />
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
                        <img :alt="stone_voeux" :src="require(folder + image[voeux_id[1]])" />
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

        <article id="price" class="content">
            <section
                v-if="
                    stone_base &&
                    stone_personnalite &&
                    stone_voeux &&
                    stone_touche &&
                    stone_expression &&
                    stone_sommet &&
                    stone_appel &&
                    stone_vie
                ">
                <div>
                    <p>Prix estimé :</p>
                    <p>
                        <strong>{{ price }} €</strong>
                    </p>
                </div>
                <a @click.prevent="goToContact">Commander</a>
            </section>
        </article>
    </article>
</template>

<script setup>
    import { ref, computed } from "vue"

    const folder = "../assets/img/chemins_de_vie/calculateur/"
    const stone = [
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
        "Sel"
    ]
    const table = [
        ["A", "J", "S"],
        ["B", "K", "T"],
        ["C", "L", "U"],
        ["D", "M", "V"],
        ["E", "N", "W"],
        ["F", "O", "X"],
        ["G", "P", "Y"],
        ["H", "Q", "Z"],
        ["I", "R"]
    ]
    const image = [
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
        "sel.webp"
    ]
    const wrong_letter = [
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
        "."
    ]

    const last_name_father = ref('')
    const last_name_mother = ref('')
    const names = ref('')
    const birthdate = ref('')
    const reduce_form = ref('')
    const base_id = ref([0, 0])
    const sommet_id = ref([0, 0])
    const vie_id = ref([0, 0])
    const appel_id = ref([0, 0])
    const personnalite_id = ref([0, 0])
    const expression_id = ref([0, 0])
    const touche_id = ref([0, 0])
    const voeux_id = ref([0, 0])
    const reduce = ref([0, 0])

    const price = computed(() => {
        let emeraude = false
        let topaze = false

        if ([stone_base.value, stone_sommet.value, stone_vie.value, stone_appel.value, stone_personnalite.value, stone_expression.value, stone_touche.value, stone_voeux.value].includes("Émeraude")) {
            emeraude = true
        }

        if ([stone_base.value, stone_sommet.value, stone_vie.value, stone_appel.value, stone_personnalite.value, stone_expression.value, stone_touche.value, stone_voeux.value].includes("Topaze")) {
            topaze = true
        }

        if (emeraude && topaze) {
            return 60
        } else if (emeraude || topaze) {
            return 50
        }

        return 45
    })

    const first_names = computed(() => {
        return parseArray(names.value.split(','))
    })

    const last_names = computed(() => {
        if (last_name_father.value && !last_name_mother.value) {
            return Array.of(parseString(last_name_father.value))
        } else if (!last_name_father.value && last_name_mother.value) {
            return Array.of(parseString(last_name_mother.value))
        }

        return mergeNames(last_name_father.value, last_name_mother.value)
    })


    const stone_base = computed(() => {
        return calculateBase()
    })

    const stone_sommet = computed(() => {
        return calculateSommet()
    })

    const stone_vie = computed(() => {
        return calculateVie()
    })

    const stone_appel = computed(() => {
        return calculateAppel()
    })

    const stone_personnalite = computed(() => {
        return calculatePersonnalite()
    })

    const stone_expression = computed(() => {
        return calculateExpression()
    })

    const stone_touche = computed(() => {
        return calculateTouche()
    })

    const stone_voeux = computed(() => {
        return calculateVoeux()
    })

    function goToContact() {
        const url = new URL(window.location.href)
        url.pathname = '/contact'
        url.searchParams.set('subject', 'chemin-de-vie')
        url.searchParams.set('names', names.value)
        url.searchParams.set('name_father', last_name_father.value)
        url.searchParams.set('name_mother', last_name_mother.value)
        url.searchParams.set('birthdate', birthdate.value)

        window.location.href = url.toString()
    }

    function resetForm() {
        last_name_father.value = ''
        last_name_mother.value = ''
        names.value = ''
        birthdate.value = ''
    }

    function parseString(string) {
        let parsed_string = ''
        let split_string = string.split('')

        for (let letter of split_string) {
            let index = wrong_letter.indexOf(letter)
            if (!(index === -1)) {
                switch (true) {
                    case index < 0:
                        letter = ''
                        break

                    case index <= 9:
                        letter = "A"
                        break

                    case index <= 17:
                        letter = "E"
                        break

                    case index <= 25:
                        letter = "I"
                        break

                    case index <= 35:
                        letter = "O"
                        break

                    case index <= 43:
                        letter = "U"
                        break

                    case index <= 45:
                        letter = "C"
                        break

                    case index <= 47:
                        letter = "N"
                        break

                    case index > 47:
                        letter = ''
                        break
                }
            }
            parsed_string += letter.toUpperCase()
        }

        return parsed_string
    }

    function parseArray(array) {
        let parsed_array = []
        for (let name of array) {
            parsed_array.push(parseString(name))
        }

        return parsed_array.filter((el) => el != null && el !== '')
    }


    function mergeNames(name1, name2) {
        return [parseString(name1), parseString(name2)]
    }

    function getLetterNumber(letter) {
        if (letter) {
            let id = 0

            for (let letters of table) {
                if (letters.find((value) => value === letter.toUpperCase())) {
                    return id + 1
                }

                id++
            }
        }
    }

    function reduceNumber(number) {
        while (number > 33) {
            let slice = number.toString().split('')
            number = 0

            for (let integer of slice) {
                number += parseInt(integer)
            }
        }

        return number
    }

    function computeFirstLetter(string) {
        let number = 0

        for (let name of string) {
            let temp = name.split('')
            number += getLetterNumber(temp[0])
        }

        return number
    }

    function computeLastLetter(string) {
        let number = 0

        for (let name of string) {
            let temp = name.split('')
            number += getLetterNumber(temp[temp.length - 1])
        }

        return number
    }

    function computeDate(string) {
        let number = 0

        for (let date of string) {
            number += parseInt(date)
        }

        return number
    }

    function computeVowels(string) {
        let number = 0

        for (let name of string) {
            let split_name = name.split('')
            for (let character of split_name) {
                if (/[AEIOUY]/.test(character)) {
                    number += getLetterNumber(character)
                }
            }
        }

        return number
    }

    function computeConsonants(string) {
        let number = 0

        for (let name of string) {
            let temp = name.split('')
            for (let character of temp) {
                if (!/[AEIOUY]/.test(character)) {
                    number += getLetterNumber(character)
                }
            }
        }

        return number
    }

    function firstVowel(string) {
        let split_name = string.split('')

        for (let character of split_name) {
            if (/[AEIOUY]/.test(character)) {
                return getLetterNumber(character)
            }
        }
    }

    function computeFirstVowel(string) {
        let number = 0

        for (let name of string) {
            number += firstVowel(name)
        }

        return number
    }

    function reduceNumberNine(number) {
        while (number > 9) {
            let slice = number.toString().split('')
            number = 0

            for (let integer of slice) {
                number += parseInt(integer)
            }
        }

        return number
    }

    function computeAllLetter(string) {
        let number = 0

        for (let name of string) {
            let temp = name.split('')
            for (let character of temp) {
                number += getLetterNumber(character)
            }
        }

        return number
    }

    function calculateBase() {
        base_id.value[0] = computeFirstLetter(last_names.value)
        base_id.value[0] += computeFirstLetter(first_names.value)
        base_id.value[1] = reduceNumber(base_id.value[0])

        return stone[base_id.value[1] - 1]
    }

    function calculateSommet() {
        sommet_id.value[0] = computeLastLetter(last_names.value)
        sommet_id.value[0] += computeLastLetter(first_names.value)
        sommet_id.value[1] = reduceNumber(sommet_id.value[0])

        return stone[sommet_id.value[1] - 1]
    }

    function calculateVie() {
        vie_id.value[0] = computeDate(birthdate.value.split("-"))
        vie_id.value[1] = reduceNumber(vie_id.value[0])

        return stone[vie_id.value[1] - 1]
    }

    function calculateAppel() {
        appel_id.value[0] = computeVowels(last_names.value)
        appel_id.value[0] += computeVowels(first_names.value)
        appel_id.value[1] = reduceNumber(appel_id.value[0])

        return stone[appel_id.value[1] - 1]
    }

    function calculatePersonnalite() {
        personnalite_id.value[0] = computeConsonants(last_names.value)
        personnalite_id.value[0] += computeConsonants(first_names.value)
        personnalite_id.value[1] = reduceNumber(personnalite_id.value[0])

        return stone[personnalite_id.value[1] - 1]
    }

    function calculateExpression() {
        expression_id.value[0] = appel_id.value[0] + personnalite_id.value[0]
        expression_id.value[1] = reduceNumber(expression_id.value[0])

        return stone[expression_id.value[1] - 1]
    }

    function calculateTouche() {
        touche_id.value[0] =
            base_id.value[0] +
            sommet_id.value[0] +
            appel_id.value[0] +
            personnalite_id.value[0] +
            expression_id.value[0]
        touche_id.value[1] = reduceNumber(touche_id.value[0])

        return stone[touche_id.value[1] - 1]
    }

    function calculateVoeux() {
        voeux_id.value[0] = computeFirstVowel(last_names.value)
        voeux_id.value[0] += computeFirstVowel(first_names.value)
        voeux_id.value[1] = reduceNumber(voeux_id.value[0])

        return stone[voeux_id.value[1] - 1]
    }

    function calculateResult() {
        reduce.value[0] = computeAllLetter(
            parseString(reduce_form.value)
        )
        reduce.value[1] = reduceNumberNine(reduce.value[0])

        return reduce.value[1]
    }
</script>

<style scoped>
    #inputs {
        margin-top: 0;
        display: grid;
        gap: 2rem;
        align-items: end;

        section:nth-of-type(1) {
            grid-row: 1;
        }

        section:nth-of-type(2) {
            grid-row: 4;
        }

        section:nth-of-type(3) {
            grid-row: 2;
        }

        section:nth-of-type(4) {
            grid-row: 3;
        }

        section:nth-of-type(5) {
            grid-row: 5;
        }

        @media (min-width: 500px) {
            section:nth-of-type(1) {
                grid-column: 1 / 3;
                grid-row: 1;
            }

            section:nth-of-type(2) {
                grid-column: 1 / 2;
                grid-row: 3;
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
                grid-column: 2 / 3;
                grid-row: 3;
            }
        }

        @media (min-width: 900px) {
            section:nth-of-type(2) {
                grid-column: 3 / 4;
                grid-row: 1;
            }

            section:nth-of-type(5) {
                grid-column: 3 / 4;
                grid-row: 2;
            }
        }

        section {
            display: flex;
            flex-direction: column;
            grid-column: 1 / 1;
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
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row wrap;
        gap: 2rem;

        section {
            width: 100%;
            max-width: 300px;
            border: 2px solid black;
            border-radius: var(--border-radius);
            background-color: var(--primary-bg-color);

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
                -webkit-filter: drop-shadow(0 16px 10px rgba(0, 0, 0, 0.3));
                filter: drop-shadow(0 16px 10px rgba(0, 0, 0, 0.3));
                transition: all 1s linear;
            }

            p {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                font-size: 1.2em;
                text-align: center;

                &::before,
                &::after {
                    border-top: 0.1em solid;
                    content: "";
                    flex: 1;
                }
            }

            h3 {
                margin: 1rem 0 0;
                padding: 0 0 1rem;
                text-align: center;
            }
        }

        @media (min-width: 500px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    #price {
        margin-top: calc(var(--content-padding) / 1.8);
        margin-bottom: var(--content-margin);
        max-width: 600px;

        section {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-evenly;
            gap: 1.6rem 2rem;

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                gap: 0.4rem;

                p:first-of-type {
                    font-size: 1.2em;
                }

                p:last-of-type {
                    font-size: 1.6em;
                }
            }

            a {
                padding: 0.8rem 1.7rem;
                font-size: 1.1em;
                border: 2px solid black;
                border-radius: 6px;
                font-family: "Arial", sans-serif;
                resize: vertical;
                outline: none;
                position: relative;
                background-color: var(--global-bg-color);
                color: black;
                text-decoration: none;
                transition: transform 250ms;
                cursor: pointer;

                &:hover {
                    transform: scale(1.03);
                }
            }
        }
    }
</style>
