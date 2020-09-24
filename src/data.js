
import img1 from "./images/pale-ale.jpeg";
import img2 from "./images/french-ale.jpeg";
import img3 from "./images/triple.jpeg";
import img4 from "./images/porter.jpeg";
import img5 from "./images/tempo1.jpeg";
import img6 from "./images/tempo1.jpeg";
import img7 from "./images/tempo1.jpeg";
import img8 from "./images/tempo1.jpeg";
import img9 from "./images/tempo1.jpeg";


export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Pale Ale",
      slug: "pale-ale",
      type: "Blonde",
      size:  75,
      price: 100,
      pack: 200,
      vol: 3.5,
      featured: true,
      description:
        "Blonde dorée légère en alcool. rafraichissante, légère et vive. Houblons aromatiques aux note d'agrumes. Faible amertume",
      extras: [
        "Houmous de betterave",
        "Saumon fumé",
        "Cookies de dreche"
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "French Ale",
      slug: "french-ale",
      type: "Blonde",
      price: 20,
      pack: 250,
      vol: 5.6,
      featured: true,
      description:
        "Blonde cuivrée avec houblons Français. Arômes maltés saveurs fruitées deshoublons. Finale longue et sèche",
      extras: [
        "Fromages pâtes cuites",
        "Filet de boeuf aux baies roses",
        "Forêt noire"
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "La Triple",
      slug: "triple",
      type: "Triple",
      price: 350,
      pack: 20,
      vol: 8.6,
      featured: true,
      description:
        "Ambrée foncée pur malt.Gourmandise biscuitée équilibrée.Mangue et goyave compotées.Force aromatique amertume moyenne.",
      extras: [
        "Asperges vertes vinaigre de mangue",
        "Potjevlesch frites",
        "Tiramisu spéculos"
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Porter",
      slug: "porter",
      type: "noire",
      price: 101,
      pack: 202,
      vol: 7,
      featured: false,
      description:
        "Bière noire, maltée torréfiée Flaveurs grillées, cacao et café subtil. Sèche et intense",
      extras: [
        "Houmous de betterave",
        "Saumon fumé",
        "Full-sized, pH-balanced toiletries",
        "Cookies de dreche"
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Saisonniere 1",
      slug: "saison1",
      type: "Ambrée",
      price: 100,
      pack: 200,
      vol: 12,
      featured: false,
      description:
        "texte de la biere saisonniere 1",
      extras: [
        "extra-1",
        "extra-2",
        "extra-3"
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Saisonniere 2",
      slug: "saison2",
      type: "IPA",
      price: 100,
      pack: 200,
      vol: 12,
      featured: false,
      description:
        "texte de la biere saisonniere 2",
      extras: [
        "extra-1",
        "extra-2",
        "extra-3"
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "Saisonniere 3",
      slug: "saison1",
      type: "gueuze",
      price: 100,
      pack: 200,
      vol: 12,
      featured: false,
      description:
        "texte de la biere saisonniere 3",
      extras: [
        "extra-1",
        "extra-2",
        "extra-3"
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "Saisonniere 4",
      slug: "saison1",
      type: "Ambrée",
      price: 100,
      pack: 200,
      vol: 12,
      featured: false,
      description:
        "texte de la biere saisonniere 4",
      extras: [
        "extra-1",
        "extra-2",
        "extra-3"
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "collab beer",
      slug: "collab",
      type: "noire",
      price: 100,
      pack: 200,
      vol: 12,
      featured: false,
      description:
        "texte de la biere collab",
      extras: [
        "extra-1",
        "extra-2",
        "extra-3"
        
        
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        
      ]
    }
  },
];
