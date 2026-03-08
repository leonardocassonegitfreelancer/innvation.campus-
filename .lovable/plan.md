

## Piano: Slideshow di foto come sfondo Hero

Trasformare la sezione hero del Málaga Palace da immagine statica a uno **slideshow automatico** che cicla tra le foto della galleria come sfondo.

### Cosa cambia

**`src/pages/en/MalagaPalace.tsx`**:
- Aggiungere un array di immagini hero (usando le foto già importate: `palaceCourtyard`, `palaceOutside`, `palaceEntrance`, `palaceSecondFloor`, `palaceSkylight`, `palaceCoffeeBar`, `palaceCatering`, `palaceCoworking`)
- Usare `useState` + `useEffect` con un intervallo di ~5 secondi per ciclare tra le immagini
- Renderizzare tutte le immagini sovrapposte con transizione di opacità (fade in/out con `transition-opacity duration-1000`)
- L'immagine attiva ha `opacity-100`, le altre `opacity-0`
- Mantenere intatto il gradiente scuro e tutto il contenuto testuale sopra

### Dettagli tecnici
- Nessuna libreria aggiuntiva, solo CSS transitions + `setInterval`
- Preload di tutte le immagini per evitare flash al primo cambio
- Cleanup dell'intervallo nel return di `useEffect`

