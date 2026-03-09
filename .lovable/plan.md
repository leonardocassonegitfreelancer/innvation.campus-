## Piano: Pagine Sale Conferenze Private (EN/ES/IT)

Creo le pagine Conference Rooms seguendo la struttura del Coworking, ma con **cards delle sale** invece del pricing.

### Struttura Pagina

```
ServicePageLayout (hero)
├── ConferenceIntro (highlights: capacità, tech, catering)
├── ConferenceRooms (cards delle 4 sale)
├── ConferenceIncludes (amenities incluse)
├── ConferenceGallery (foto sale)
└── ConferenceCTA (Book a Visit)
```

### Componenti da Creare

**1. ConferenceIntro** - Sezione intro scura con 3 highlights

**2. ConferenceRooms** - 4 cards sale:

- **City Center Picasso** (HIGHLIGHTED - bordo primary, badge "Flagship Room") - Sala principale, fino a 30 persone
- **Half Picasso** - Metà sala, fino a 15 persone
- **Quarter Picasso** - Un quarto, fino a 8 persone  
- **Pablo Neruda** - Sala intima, fino a 6 persone

Ogni card mostra: nome, capacità, features (schermo, video call, whiteboard, etc.), bottone "Request Quote"

**3. ConferenceIncludes** - Griglia amenities (WiFi, proiettore, coffee, reception, etc.)

**4. ConferenceGallery** - 3 foto delle sale meeting

**5. ConferenceCTA** - "Book Your Room" con link al portale

### Files da Creare/Modificare

- `src/components/landing/ConferenceIntro.tsx`
- `src/components/landing/ConferenceRooms.tsx`
- `src/components/landing/ConferenceIncludes.tsx`
- `src/components/landing/ConferenceGallery.tsx`
- `src/components/landing/ConferenceCTA.tsx`
- Update `src/pages/en/ConferenceRoom.tsx`
- Update `src/pages/es/ConferenceRoom.tsx`
- Update `src/pages/it/ConferenceRoom.tsx`

Tutti i testi tradotti in 3 lingue.  
  
add also catering option syas that catering and ood improves the event satisfactiuon by 3x

&nbsp;