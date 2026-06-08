# Maître Arnaud GOSSA — Site vitrine

Site one-page pour avocat à Nice (Next.js 16 + Tailwind CSS).  
Prêt pour déploiement gratuit sur [Vercel](https://vercel.com).

**Domaine :** [gossa-avocat.com](https://gossa-avocat.com)  
**Email :** arnaud@gossa-avocat.com

---

## Contenu du site

Une seule page avec trois sections :

| Section | Ancre | Contenu |
|---------|-------|---------|
| Présentation | `#presentation` | Domaines d'intervention, aide juridictionnelle, langues |
| L'avocat | `#avocat` | Parcours, serment, Barreau de Nice |
| Contact | `#contact` | Adresse, téléphone, email, carte Google Maps |

**Langues :** français (par défaut), anglais, russe — sélecteur FR / EN / RU.

**Actions contact :**
- Appeler
- Enregistrer le contact (fichier `.vcf`)
- Envoyer un email

Les anciennes URLs `/services`, `/a-propos` et `/contact` redirigent vers les ancres correspondantes.

---

## Structure du projet

```
src/
├── app/              # layout, page, styles, SEO (sitemap, robots)
├── components/       # Header, Footer, HomeContent, ContactActions…
├── context/          # LanguageContext (choix de langue)
└── lib/
    ├── site.ts       # coordonnées, SEO, carte
    └── translations.ts   # textes FR / EN / RU
```

---

## Personnalisation

### Coordonnées et SEO

Fichier `src/lib/site.ts` :

- nom, email, téléphone, adresse
- URL du site (`website`)
- carte Google Maps (`mapsEmbedUrl`)
- meta title / description

### Textes

Fichier `src/lib/translations.ts` — tous les paragraphes dans les trois langues.

### Style

Fichier `src/app/globals.css` — couleurs navy / or, composants (boutons, bloc contact).

---

## Lancer en local

```bash
cd avocat-site
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Build de production :

```bash
npm run build
npm start
```

---

## Mise en ligne (Vercel)

### 1. GitHub

```bash
git add .
git commit -m "Site Maître Arnaud GOSSA"
git push -u origin main
```

### 2. Vercel

1. Compte sur [vercel.com](https://vercel.com) (connexion GitHub)
2. **Add New → Project** → choisir le dépôt
3. **Deploy** (aucune variable d'environnement requise)

Le site est accessible sur `https://votre-projet.vercel.app`.

### 3. Domaine `gossa-avocat.com`

1. Vercel → **Settings → Domains** → ajouter `gossa-avocat.com` et `www.gossa-avocat.com`
2. Copier les enregistrements DNS indiqués par Vercel
3. Les ajouter chez le registrar du domaine (OVH, Gandi, etc.)

**Important — ne pas casser l'email :**

- Ne pas modifier les enregistrements **MX** (messagerie)
- Modifier uniquement les enregistrements **A / CNAME** pour le site web

---

## Coûts

| Service | Coût |
|---------|------|
| Vercel (petit site) | Gratuit |
| GitHub | Gratuit |
| Domaine `gossa-avocat.com` | Déjà en place chez le client (~15 €/an au renouvellement) |
| Email `arnaud@gossa-avocat.com` | Déjà en place |

Hébergement du site : **0 €/mois** sur le plan gratuit Vercel.

---

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com)
- Polices : Cormorant Garamond + DM Sans
- SEO : metadata, `sitemap.xml`, `robots.txt`
