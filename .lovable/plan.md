

## Piano: Componente LogoLoop riutilizzabile

### Obiettivo
Creare un componente `LogoLoop` che mostra un carosello infinito di loghi scorrevoli, basato sul codice fornito dall'utente, adattato allo stack del progetto (React + Tailwind).

### Cosa verrà creato

**1. Nuovo file: `src/components/ui/LogoLoop.tsx`**
- Componente riutilizzabile con le stesse props del codice fornito
- Scorrimento infinito con animazione via `requestAnimationFrame`
- Supporto per direzione (left/right/up/down), velocità, pausa su hover
- Fade-out opzionale ai bordi
- Scale on hover opzionale
- Supporto per loghi come immagini (`src`) o nodi React (`node`)
- Rispetto di `prefers-reduced-motion`
- Hook interni: `useResizeObserver`, `useImageLoader`, `useAnimationLoop`

**2. Esempio di utilizzo nella homepage (opzionale, per test)**
- Aggiunta temporanea nella homepage `Index.tsx` con loghi placeholder per verificare il funzionamento

### Dettagli tecnici
- Il componente sarà una traduzione fedele del codice fornito, già scritto in React/TypeScript
- Verrà salvato in `src/components/ui/` per coerenza con la struttura esistente
- Nessuna dipendenza esterna aggiuntiva necessaria
- Il componente è già self-contained con hooks custom inline

### Passi
1. Creare `src/components/ui/LogoLoop.tsx` con il codice del componente adattato
2. Aggiungere il componente nella homepage con alcuni loghi placeholder per verificare che funzioni
3. Sarà poi riutilizzabile ovunque con `<LogoLoop logos={[...]} />`

