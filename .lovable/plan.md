

## Galleria foto + video per Málaga Palace

### Idea

Aggiungere una sezione galleria tra "About this location" e "What's Hot in Málaga Palace" con:
- Una griglia di foto della struttura (stone walls, courtyard, meeting rooms, ecc.)
- Il video embedded che mostra la struttura

Questo ha molto senso: dopo aver letto di cosa si tratta, l'utente vede visivamente gli spazi prima di scoprire i servizi.

### Struttura proposta

```text
┌─────────────────────────────────┐
│  Hero                           │
├─────────────────────────────────┤
│  About this location            │
├─────────────────────────────────┤
│  Gallery + Video  ← NUOVA      │
├─────────────────────────────────┤
│  What's Hot in Málaga Palace    │
├─────────────────────────────────┤
│  Services                       │
├─────────────────────────────────┤
│  CTA                            │
└─────────────────────────────────┘
```

### Layout galleria

- Sfondo bianco (`bg-background`), stessi font del resto della pagina
- Video in primo piano (grande, aspect-ratio 16:9) — può essere YouTube/Vimeo embed o file locale
- Sotto il video, griglia 2-3 colonne con le foto della struttura
- Scroll animation come le altre sezioni

### Cosa serve da te

1. **Il video**: è un link YouTube/Vimeo o un file da caricare?
2. **Foto aggiuntive**: oltre a `palace-entrance.jpg` e `palace-second-floor.jpg` che già usi, hai altre foto della struttura da aggiungere? Se sì, caricale e le integro.

### Dettagli tecnici

- Nuova sezione in `MalagaPalace.tsx` tra About e What's Hot
- Video embed con iframe (YouTube/Vimeo) o tag `<video>` per file locale
- Griglia responsive: 1 colonna mobile, 2-3 desktop
- Immagini con `rounded-xl`, hover scale effect, lazy loading

