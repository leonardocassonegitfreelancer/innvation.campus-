

## Piano: Arricchire la pagina Coworking & Pricing

Attualmente la pagina ha solo l'hero + la sezione pricing. Per renderla completa e convincente, propongo di aggiungere queste sezioni **prima e dopo** il pricing:

```text
┌─────────────────────────────────┐
│           HERO (già presente)    │
├─────────────────────────────────┤
│  1. INTRO — breve testo         │
│     "Scegli il piano perfetto"  │
│     + 3 icone highlight         │
│     (WiFi veloce, Community,    │
│      Location centrali)         │
├─────────────────────────────────┤
│  2. PRICING (già presente)      │
│     Tab Monthly / Short Stays   │
├─────────────────────────────────┤
│  3. WHAT'S INCLUDED             │
│     Griglia icone con tutti i   │
│     servizi inclusi (WiFi,      │
│     caffè, cucina, stampante,   │
│     armadietti, monitor, etc.)  │
├─────────────────────────────────┤
│  4. GALLERY / PHOTO STRIP       │
│     2-3 foto degli spazi        │
│     coworking (già abbiamo      │
│     asset disponibili)          │
├─────────────────────────────────┤
│  5. FAQ COWORKING               │
│     4-5 domande frequenti       │
│     (orari, prova gratuita,     │
│      come prenotare, etc.)      │
├─────────────────────────────────┤
│  6. CTA FINALE                  │
│     "Ready to start?" +         │
│     bottone Book a Tour /       │
│     Contact Us                  │
├─────────────────────────────────┤
│           FOOTER (già presente)  │
└─────────────────────────────────┘
```

### Sezioni nel dettaglio

**1. Intro con 3 highlight** — Sfondo scuro (`neutral-dark`), breve paragrafo che spiega il coworking, con 3 icone/numeri (es. "200Mbps WiFi", "2 Locations in Málaga", "Active Community"). Dà contesto prima di mostrare i prezzi.

**2. Pricing** — Già implementato, resta com'è.

**3. What's Included** — Griglia 3x3 o 4x2 con icone Lucide: WiFi, Coffee, Printer, Locker, Kitchen, Monitor, Air Conditioning, Community Events. Mostra il valore oltre il prezzo.

**4. Photo Strip** — 2-3 immagini affiancate degli spazi (usiamo gli asset esistenti: `palace-coworking.jpg`, `palace-coffee-bar.jpg`, `terrace-community.jpg`). Sfondo scuro per contrasto.

**5. FAQ Coworking** — Componente Accordion con 4-5 domande tipo: "Can I try before committing?", "What are the opening hours?", "Can I switch plans?", "Is there parking?", "Can I bring guests?".

**6. CTA Finale** — Sezione con sfondo primary, testo bianco, due bottoni: "Book a Tour" (link esterno members) e "Contact Us" (link a /#contact).

### File da modificare

- **`src/pages/en/CoworkingSpace.tsx`** — Comporre tutte le nuove sezioni come children del layout
- **`src/components/landing/CoworkingIntro.tsx`** — Nuovo componente intro + highlights
- **`src/components/landing/CoworkingIncludes.tsx`** — Nuovo componente griglia "what's included"
- **`src/components/landing/CoworkingGallery.tsx`** — Nuovo componente photo strip
- **`src/components/landing/CoworkingFAQ.tsx`** — Nuovo componente FAQ con accordion
- **`src/components/landing/CoworkingCTA.tsx`** — Nuovo componente CTA finale

Tutti i componenti seguiranno le convenzioni esistenti: font-display per titoli, font-body per testo, colori primary/foreground/muted, tracking-wider per label uppercase.

