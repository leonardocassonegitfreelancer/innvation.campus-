# Events Hub — Design Spec
**Date:** 2026-04-12  
**Status:** Approved

---

## Obiettivo

Costruire una sezione eventi completa su innovationcampus.biz con:
- Hub page trilingue (EN/IT/ES) con tab Upcoming / Past
- Landing page statica per ogni evento (una per lingua)
- Thank-you page statica per ogni evento (una per lingua)
- Tracciamento completo GA4, Meta Pixel, Simple Analytics su ogni CTA

---

## Contesto business

I partner organizzatori (SheWins, Toastmasters, Ladies That UX, ecc.) ospitano eventi a Innovation Campus. Il sito diventa il punto di promozione ufficiale, sponsorizzato via Google Business Profile + PMAX già attiva. La thank-you page registra il lead prima che l'utente esca verso Meetup/Eventbrite. I dati di lead generation vengono venduti ai partner come servizio premium.

---

## 1. Dataset — `src/data/events.ts`

Dataset leggero usato solo dall'hub per generare le card e filtrare upcoming/past.

```ts
export interface EventData {
  slug: string;                  // es. "ladies-that-ux-malaga-aprile-2026"
  date: string;                  // ISO: "2026-04-07"
  time: string;                  // es. "19:00 - 21:00"
  location: string;              // es. "La Malagueta" | "Málaga Palace"
  image: string;                 // path asset
  tag: "networking" | "workshop" | "talk" | "other";
  externalUrl: string;           // link Meetup/Eventbrite per il bottone thank-you
  translations: {
    en: { title: string; excerpt: string };
    it: { title: string; excerpt: string };
    es: { title: string; excerpt: string };
  };
}
```

Popolare con gli eventi attuali presi da `/coworking-events/`.

---

## 2. Hub Pages — Upcoming / Past

### Route (esistenti, da sostituire)
```
/en/events    → src/pages/en/Events.tsx
/it/eventi    → src/pages/it/Events.tsx
/es/eventos   → src/pages/es/Events.tsx
```

### Logica filtro (React state, no routing)
```ts
const today = new Date();
const upcoming = events.filter(e => new Date(e.date) >= today);
const past     = events.filter(e => new Date(e.date) <  today);
```

- Default: tab Upcoming aperto
- Se upcoming è vuoto: messaggio "Nessun evento in programma, torna presto" (tradotto per lingua)
- Tab switching: stato React interno — NON usa `<a href>`, è solo un filtro UI

### Card evento
Campi mostrati:
- Immagine
- Data + ora
- Titolo
- Location
- Tag (Networking / Workshop / Talk)
- CTA: `<a href="/it/eventi/[slug]">Scopri di più →</a>` — full reload, tracciato

Card Past: badge "Passato" / "Past" / "Pasado" in overlay sull'immagine (grigio). Nessuna manipolazione CSS dell'immagine — solo il badge condizionale:
```jsx
{isPast && <span className="badge">Passato</span>}
```

---

## 3. Event Detail Pages — Template statico

### Componente condiviso
`src/components/landing/EventPageTemplate.tsx` — riceve tutti i dati come props.

### Sezioni del template
1. **Hero** — immagine grande, titolo, tag
2. **Event Details Card** — data, ora, location, organizer
3. **Descrizione** — testo libero + bullet points speaker/topic
4. **Schedule Timeline** — walk-in, evento, networking
5. **CTA** — `<a href="/it/eventi/[slug]/grazie">Prenota il tuo posto →</a>` — full reload, tracciato

### Route per ogni evento (esempio: Ladies That UX)
```
/en/events/ladies-that-ux-malaga-aprile-2026   → LadiesThatUXEN.tsx
/it/eventi/ladies-that-ux-malaga-aprile-2026   → LadiesThatUXIT.tsx
/es/eventos/ladies-that-ux-malaga-aprile-2026  → LadiesThatUXES.tsx
```

Ogni file è piccolo: importa `EventPageTemplate` e passa i dati hardcodati.

---

## 4. Thank-You Pages — Template statico

### Componente condiviso
`src/components/landing/EventThankYouTemplate.tsx` — riceve props.

### Contenuto
1. Messaggio di conferma — "Grazie! Ti aspettiamo il [data]"
2. Riepilogo evento (nome, data, location)
3. Bottone manuale — `<a href={externalUrl}>Prenota il tuo posto →</a>` (link esterno, full reload)
4. Placeholder newsletter — sezione vuota pronta per integrazione futura (Mailchimp/Brevo)

**Nessun redirect automatico.** L'utente clicca manualmente.

### Route per ogni evento (esempio: Ladies That UX)
```
/en/events/ladies-that-ux-malaga-aprile-2026/thank-you  → LadiesThatUXThankYouEN.tsx
/it/eventi/ladies-that-ux-malaga-aprile-2026/grazie     → LadiesThatUXThankYouIT.tsx
/es/eventos/ladies-that-ux-malaga-aprile-2026/gracias   → LadiesThatUXThankYouES.tsx
```

### Tracciamento conversione
La thank-you page è il punto di registrazione lead. GA4/Meta Pixel sparano pageview al caricamento (full reload da `<a href>` sulla detail page). Questo dato viene presentato al partner come "lead generati".

---

## 5. Regole di routing e tracciamento

| Navigazione | Metodo | Motivo |
|---|---|---|
| Card hub → detail | `<a href>` | Full reload, tracciato |
| Detail → thank-you | `<a href>` | Full reload, conversione tracciata |
| Thank-you → esterno | `<a href>` target blank | Esce dal dominio |
| Tab Upcoming ↔ Past | React state | Solo filtro UI, nessun reload |
| Navbar / Footer | `<Link>` | Navigazione secondaria |

---

## 6. SEO

- Tutte le pagine (hub, detail, thank-you) sono **statiche** — nessun routing dinamico `:slug`
- Ogni route è hardcodata in `App.tsx`
- Ogni pagina usa `<SEOHead>` con title/description/path specifici per evento e lingua
- Gli slug degli eventi vengono aggiunti alla `sitemap.xml` ad ogni nuovo evento
- Thank-you pages: non indicizzate (aggiungere `<meta name="robots" content="noindex">`)

---

## 7. Workflow aggiunta nuovo evento

1. Aggiungere oggetto in `src/data/events.ts`
2. Creare 3 file detail page (EN/IT/ES) copiando un evento esistente, cambiando dati
3. Creare 3 file thank-you page (EN/IT/ES) copiando un esistente
4. Aggiungere 6 route in `App.tsx`
5. Aggiungere slug alla `sitemap.xml`
6. Deploy → Netlify → live

Su Lovable: copy-paste + modifica testi. Gestibile dalla SMM.

---

## 8. Fuori scope

- Form di iscrizione interno (resta su Meetup/Eventbrite)
- Newsletter (placeholder lasciato, integrazione rinviata)
- Pagine archivio per evento scaduto (restano online, badge "Passato" nell'hub)
- Backend / CMS (tutto hardcodato)
