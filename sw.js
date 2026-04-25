# DocAuto 🚗

Aplicatie PWA pentru gestionarea documentelor auto: **ITP · RCA · Rovinieta · Revizie**

Se instaleaza pe **Android si iOS** ca o aplicatie nativa, direct din browser.

---

## 📱 Cum instalezi pe telefon

### Android (Chrome)
1. Deschide link-ul GitHub Pages in **Chrome**
2. Apasa bannerul **"Adauga pe ecranul principal"** sau
3. Meniu `⋮` → **Adauga pe ecranul principal**

### iOS (Safari)
1. Deschide link-ul in **Safari** (nu Chrome!)
2. Apasa butonul **Share** (patrat cu sageata ↑)
3. Scroll jos → **"Adauga pe ecranul principal"**

---

## 🚀 Cum pui pe GitHub Pages (prima data)

```bash
# 1. Creeaza repo nou pe GitHub (Public)
#    github.com → New → Name: DocAuto → Public → Create

# 2. Cloneaza-l local
git clone https://github.com/USERNAME/DocAuto.git
cd DocAuto

# 3. Copiaza fisierele din arhiva in folder
# (index.html, manifest.json, sw.js, icons/, .github/)

# 4. Push
git add .
git commit -m "DocAuto PWA"
git push origin main
```

**Apoi in GitHub:**
`Settings → Pages → Source → GitHub Actions → Save`

Link-ul final: `https://USERNAME.github.io/DocAuto/`

GitHub Actions face deploy automat la fiecare push (~1 minut).

---

## ✨ Functionalitati

| Feature | Detalii |
|---|---|
| **Masini multiple** | Adaugi oricate masini |
| **Logo branduri** | 18 branduri: Audi, BMW, Cupra, Dacia, Honda, Hyundai, Kia, Mazda, Mercedes, Nissan, Opel, Peugeot, Renault, SEAT, Skoda, Toyota, VW |
| **ITP / RCA / Rovinieta** | Data expirare + zile ramase |
| **Revizie** | Bazat pe km — calculeaza automat urmatoarea revizie |
| **Cod culori** | 🟢 Valid · 🟡 Expira in 30 zile · 🔴 Expirat |
| **Mod zi/noapte** | Toggle in topbar |
| **Offline** | Functioneaza fara internet dupa prima deschidere |
| **Date locale** | Salvate pe telefon, private |

---

## 📁 Structura

```
DocAuto/
├── index.html          ← Aplicatia completa
├── manifest.json       ← Config PWA (icona, nume, culori)
├── sw.js               ← Service worker (offline)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── .github/
    └── workflows/
        └── deploy.yml  ← GitHub Actions auto-deploy
```
