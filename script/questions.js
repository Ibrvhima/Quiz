const questions = [
  {
    question:
      "Quelle est la différence entre var, let, et const en JavaScript ?",
    reponses: [
      " Elles ne sont pas différentes.",
      "var est global, let est local et const est immuable.",
      "let et const sont hoistés, mais pas accessibles.",
      "var est immuable, const est global.",
    ],
    reponseCorrect: 1,
  },

  {
    question: "./images/questionnair5.png",
    reponses: [
      "'Hello' s'affiche 1 fois",
      "'Hello' s'affiche 3 fois",
      "'Hello' s'affiche 4 fois",
      "undifined",
    ],
    reponseCorrect: 1,
  },

  {
    question: "Quel est le resultat de 5 + '5' ? ",

    reponses: ["10", "NaN", "Error", " '55' "],
    reponseCorrect: 3,
  },

  {
    question:
      "Qeulle méthode est utilisée pour ajouter un élement dans un tableau ?",
    reponses: ["push()", "pop()", "shift()", "unshift()"],
    reponseCorrect: 0,
  },

  {
    question:
      "Quelle méthode transformer un tableau en chaîne de caractères séparés par des virgules ? ",

    reponses: ["join()", "split()", "toString()", "concat()"],
    reponseCorrect: 0,
  },
  {
    question:
      "Qeulle méthode est utilisée pour supprimer le dernier  élement d'un tableau",
    reponses: ["push()", "pop()", "remove()", "delete()"],
    reponseCorrect: 1,
  },

  {
    question: "Que fait la méthode console.log() en JavaScript ?",

    reponses: [
      "Afficher un message dans la console du navigateur",
      "Afficher une fenêtre pop-up",
      "Exécuter un code JavaScript",
      "Arrêter l'exécution du scenario ",
    ],
    reponseCorrect: 0,
  },

  {
    question: "./images/questionnair1.png",

    reponses: ["10, 10", "20, 20", "20, 10", "10, 20"],
    reponseCorrect: 2,
  },

  {
    question: "./images/questionnair3.png",

    reponses: ["NaN", "5", "undefined", "null"],
    reponseCorrect: 0,
  },

  {
    question: "Quelle est la valeur de typeof NaN en JavaScript ? ",

    reponses: ["number", "NaN", "string", " undefined "],
    reponseCorrect: 1,
  },

  {
    question: "./images/questionnair6.png",

    reponses: ["[1, 2, 3]", "[1, 2]", "[1, 3]", "[1, 3, undefined]"],
    reponseCorrect: 1,
  },

  {
    question:
      " Quelle est la syntaxe correcte pour ajouter une propriété age avec la valeur 25 à un objet nommé person?",

    reponses: [
      "person.age = 25;",
      "person['age'] = 25;",
      "Object.assign(person, { age: 25 });",
      "Toutes les réponses ci-dessus.",
    ],
    reponseCorrect: 3,
  },

  {
    question: "./images/questionnair2.png",

    reponses: ["[1, 2, 3]", "[1, 2, 3, 4]", "TypeError", "undefined"],
    reponseCorrect: 1,
  },

  {
    question: "Quelle structure permet de créer des objets en  JavaScript ?",

    reponses: [" [] ", " () ", " {} ", " <> "],
    reponseCorrect: 2,
  },

  {
    question: "./images/questionnair7.png",

    reponses: ["0", "1", "TypeError", "undefined"],
    reponseCorrect: 1,
  },

  {
    question: " Comment déclarer une fonction en JavaScript ?",

    reponses: [
      "function maFonction() {}",
      "func maFonction() {}",
      "def maFonction() {}",
      "declare maFonction() {}",
    ],
    reponseCorrect: 0,
  },

  {
    question: "./images/questionnair4.png",

    reponses: ["TypeError", "ReferenceError", "5", "undefined"],
    reponseCorrect: 2,
  },

  {
    question: "Que renvoyer null == undefineden en JavaScript ?",

    reponses: ["undifined", "false", "NaN", "true"],
    reponseCorrect: 3,
  },

  {
    question: "Que fait la méthode Array.isArray() en JavaScript ?",

    reponses: [
      "Elle vérifie si une variable est un tableau",
      "Elle crée un tableau vidéo",
      "Elle retourne le nombre d'éléments dans un tableau",
      "Elle transforme une chaîne de caractères en tableau",
    ],
    reponseCorrect: 0,
  },
  {
    question: "Quelle méthode permet de trier un tableau en JavaScript ?",

    reponses: ["order()", "sort()", "arrange()", "arrangeBy()"],
    reponseCorrect: 1,
  },
];
