

## Rifacciamo la scheda Terrace con sfondo marino

### Idea
Aggiungere alla card Seaside/Terrace un background che evochi il mare — un gradiente azzurro con un pattern SVG di onde sottili, mantenendo la leggibilità del testo e la coerenza con il design system.

### Modifiche

**1. `src/index.css`** — Aggiungere una classe CSS `.sea-wave-bg` con:
- Gradiente azzurro che va da un blu chiaro in alto a un turchese/acqua più caldo in basso (usando le variabili `--seaside-bg` e `--seaside-bg-cool`)
- Pattern SVG inline di onde stilizzate in overlay con opacità bassa (~8-10%) per dare texture marina senza distrarre
- Possibile aggiunta di un'animazione CSS lenta e sottile sulle onde (opzionale, leggera)

**2. `src/components/landing/LocationsSection.tsx`** — Modificare la card Seaside:
- Sostituire il gradiente inline con la nuova classe `.sea-wave-bg`
- Aggiungere un overlay decorativo con onde SVG nella parte superiore o inferiore della card
- Eventualmente aggiustare i colori del testo per garantire contrasto sul nuovo sfondo

### Risultato atteso
La card Terrace avrà un background che richiama il mare con gradiente blu/azzurro e texture a onde, differenziandosi ancora di più dalla card Historic e rafforzando l'identità "seaside".

