# Guide Pratique Git & GitHub — Workflow & Commandes

Ce document récapitule de manière synthétique et visuelle les étapes et commandes nécessaires pour versionner et envoyer (pousser) votre code sur GitHub.

---

## ⚡ 1. Résumé express : Le workflow quotidien (À mémoriser)

Une fois le projet déjà connecté à GitHub, chaque fois que vous modifiez du code, vous n'avez besoin que de **3 commandes** :

```bash
# 1. Préparer toutes les modifications
git add .

# 2. Enregistrer la version avec un message clair
git commit -m "Description de ce qui a changé"

# 3. Envoyer vers GitHub
git push
```

---

## 🛠️ 2. Ce qui a été fait aujourd'hui (Premier envoi du projet)

Comme le dossier n'avait pas encore d'historique Git relié à ce dépôt, voici les étapes exactes exécutées dans l'ordre :

### Étape 1 — Protéger le projet (`.gitignore`)
* **Pourquoi :** Éviter absolument d'envoyer les dossiers lourds générés automatiquement (`node_modules/`, `.next/`, etc.). Sans cette étape, le dépôt pèserait des centaines de mégaoctets et le push échouerait.
* **Fichier créé :** `.gitignore`

### Étape 2 — Initialiser Git dans le dossier
```bash
git init
git branch -M main
```
* `git init` : crée le dossier caché `.git` qui sert de mémoire locale à votre projet.
* `git branch -M main` : s'assure que la branche principale s'appelle bien `main` (standard moderne GitHub).

### Étape 3 — Relier le dossier local au dépôt GitHub
```bash
git remote add origin https://github.com/gkarchiinternational-coder/cv-site-gkarchi-pro.git
```
* `origin` : c'est le surnom donné à l'adresse de votre dépôt distant sur GitHub.

### Étape 4 — Configurer votre identité d'auteur
```bash
git config user.name "Georges Kfoury"
git config user.email "gkarchisn@gmail.com"
```
* Signe les commits avec votre nom et email sur GitHub.

### Étape 5 — Indexer les fichiers (Staging)
```bash
git add .
```
* Le point `.` signifie "tous les fichiers modifiés ou créés" (sauf ceux exclus par `.gitignore`).

### Étape 6 — Créer le point de sauvegarde (Commit)
```bash
git commit -m "feat: initial commit - GK ARCHI portfolio & CV Next.js application"
```
* Crée un point de sauvegarde local daté et signé.

### Étape 7 — Envoyer sur GitHub (Push)
```bash
git push -u origin main
```
* `-u origin main` : envoie la branche `main` vers `origin` et établit la liaison automatique pour que les prochains envois ne demandent que `git push`.

---

## 🔍 3. Les commandes utiles de contrôle

| Commande | À quoi elle sert |
| :--- | :--- |
| `git status` | Voir quels fichiers ont été modifiés, ajoutés ou sont en attente de commit |
| `git log --oneline -n 5` | Consulter les 5 derniers commits enregistrés |
| `git remote -v` | Vérifier l'adresse du dépôt GitHub associé |
| `git diff` | Voir le détail exact ligne par ligne de ce qui a changé avant de faire `git add` |

---

## 💡 4. Bonnes pratiques pour les messages de commit

Un message clair permet de retrouver facilement une version :
- `feat: ajout de la section galerie photo`
- `fix: correction de la taille du logo sur mobile`
- `style: ajustement des marges et des typographies`
- `chore: mise à jour des dépendances`
