

## Piano: Aggiornare il titolo SEO della homepage

Invertire l'ordine: prima "Innovation Campus" poi i servizi.

### Modifiche

**`src/pages/Index.tsx`**
- Cambiare il titolo SEO da `"Coworking Spaces in Málaga & Ancona"` a `"Uffici - Coworking - Eventi"`
- Il `fullTitle` in SEOHead diventa: **"Uffici - Coworking - Eventi | Innovation Campus"**

**`src/components/SEOHead.tsx`**
- Invertire il formato del titolo da `{title} | Innovation Campus` → `Innovation Campus | {title}`

**`index.html`**
- Aggiornare `<title>` e og/twitter title di fallback a: `"Innovation Campus | Uffici - Coworking - Eventi"`

Risultato su Google: **Innovation Campus | Uffici - Coworking - Eventi**

