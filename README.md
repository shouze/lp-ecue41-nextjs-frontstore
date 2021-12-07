# lp-ecue41-nextjs-frontstore

Module e-commerce Licence Pro ECUE41 - Front Store Next.js


## Mise en route

Après s'être assuré d'avoir un woocommer allumé sur http://localhost:8080 avec des clés d'api et des permaliens personnalisés afin que l'api fonctionne (tel que dans TD2).

1. Sur Github : forker le dépôt [lp-ecue41-nextjs-frontstore](https://github.com/shouze/lp-ecue41-nextjs-frontstore)
2. Cloner sur votre ordinateur : `git clone https://github.com/<VOTRE_PSEUDO>/lp-ecue41-nextjs-frontstore.git`
3. Ajouter un remote upstream : `git remote add upstream https://github.com/shouze/lp-ecue41-nextjs-frontstore.git`
4. Le git flow sera alors le suivant :
  - git checkout -b ma-fonctionnalite
  - git fetch upstream
  - git rebase upstream/main
  - git add .
  - git commit -m "mes modifications"
  - git push
5. Initialiser le projet cloné
```shell
cd lp-ecue41-nextjs-frontstore

# installer les dépendances node
npm install

# éditer le fichier .env.local, mettez vos valeurs personnelles pour les variables vides
WORDPRESS_URL=http://localhost:8080
WOOCOMMERCE_KEY=
WOOCOMMERCE_SECRET=
NEXT_PUBLIC_BASE_URL=http://localhost:3000/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# démarrer le serveur de développement
npm run dev


# rendez-vous sur http://localhost:3000 sur votre ordinateur,
# vous devriez voir la liste de vos produits
```

## Règles


### Équipes

Vous allez former des équipes de 3 à 4.

### Pair programming en équipe

Chaque équipe doit fonctionner selon le principe de pair programming. Cela consiste à ce qu'une seule personne à la fois - par tranche de 15 à 20 minutes - code. Les autres personnes du groupe doivent alors remplir ces rôles en parallèle :
1. Relecteur/ice en direct : suggérer des meilleures façons de faire, corriger des erreurs.
2. Se documenter : aller chercher la connaissance et revenir avec des solutions pour faire gagner du temps à celui/celle qui code.
3. Testeur/ice : à minima, faute d'écrire des tests automatisés, tester la fonctionnalité en parallèle sur un autre ordinateur
4.Planificateur : lire la prochaine issue, la comprendre et se renseigner pour aider à la démarrer le plus vite possible.

Vous devrez successivement vous relayer sur chacun de ces rôles.

### Pull requests

chaque équipe qui prendra une issue devra la soumettre sur Github par système de pull requests, afin que je puisse relire et apprécier le travail. Chaque équipe devra soumettre ses pull request à destination de la branche qui porte le nom de son Pool.

### Pools

Enfin, les équipes seront réparties dans 2 pools. Chaque pool sera en concurrence et devra réaliser exactement les mêmes issues par équipe.

À la fin du TD, un pool sera désigné vainqueur sur l'ensemble du travail réalisé. Chaque équipe sera également évaluée pour son travail au sein de chaque pool.

# Répartition des Pools et Équipes

Respecter le format `Sébastien H.` pour un minimum de respect de la vie privée.

## Pool A

### Équipe A

-
-
-
-


### Équipe B

-
-
-
-
### Équipe C

-
-
-
-

## Pool B

### Équipe A

-
-
-
-

### Équipe B

-
-
-
-
### Équipe C

-
-
-
-

