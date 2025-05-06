export interface RatesData {
  id: number;
  title1: string;
  title2: string;
  from: string;
  price: number;
  subtitle: string;
  features: string[][];
}

export const ratesData = [
  {
    id: 1,
    title1: 'site vitrine',
    title2: 'standard',
    from: 'à partir de',
    price: 800,
    subtitle: 'Développement sur Wordpress',
    features: [
      ['Choix de la charte graphique', 'à partir de maquettes pré-définies'],
      ['Création et intégration du contenu', '(Texte et images)'],
      ['Formulaire de contact', 'Carte intéractive'],
      ['Site réactif', '(Compatibilité tous supports)'],
      ['Optimisation du référencement', 'naturel (SEO)'],
      ["Formation à l'utilisation", 'de Wordpress'],
      ["Gestion de l'hébergement", 'Configuration du serveur web'],
    ],
  },
  {
    id: 2,
    title1: 'site vitrine',
    title2: 'personnalisé',
    from: 'à partir de',
    price: 1600,
    subtitle: 'Développement sur-mesure',
    features: [
      ["Création d'une charte graphique", 'personnalisée'],
      ['Création et intégration du contenu', '(Texte et images)'],
      ['Formulaire de contact', 'Carte intéractive'],
      ['Site réactif', '(Compatibilité tous supports)'],
      ['Optimisation du référencement', 'naturel (SEO)'],
      ['Optimisation des performances'],
      ["Gestion de l'hébergement", 'Configuration du serveur web'],
    ],
  },
  {
    id: 3,
    title1: 'plateforme',
    title2: 'e-commerce',
    from: 'à partir de',
    price: 3000,
    subtitle: 'Développement sur Wordpress ou personnalisé (Tarif plus élevé)',
    features: [
      ["Création d'une charte graphique", 'personnalisée'],
      ['Création et intégration du contenu', '(Texte et images)'],
      ['Formulaire de contact', 'Carte intéractive'],
      [
        'Interfaçage avec la plateforme',
        'de paiement que vous aurez choisi',
        '(Stripe, Paypal, Monetico, etc)',
      ],
      ['Site réactif', '(Compatibilité tous supports)'],
      ['Optimisation du référencement', 'naturel (SEO)'],
      ['Optimisation des performances'],
      ["Gestion de l'hébergement", 'Configuration du serveur web'],
      ["Formation à l'utilisation du site"],
    ],
  },
];
