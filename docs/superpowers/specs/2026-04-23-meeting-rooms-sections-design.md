# Meeting Rooms — Visual Sections Design

## Goal

Reorganize the ConferenceRooms component to show all Palace rooms (conference + training + phone booth) divided into two clearly labelled visual sections, while keeping the component simple with no interactive filtering.

## Decision Log

- **No interactive filter** — with only 5–7 rooms total, a filter would remove at most 2 cards. Visual sections communicate the same information without requiring interaction.
- **"Large" not "Big"** — "Large" is the standard industry term with better SEO signal. Reverts the earlier rename.
- **Training Room stays** — real product with search volume, deserves visibility.
- **Phone Booth as "Focus Pod"** — shown with a type badge, not forced into the S/M/L taxonomy.

## Layout

### Palace tab

```
── Conference Rooms ──────────────────────
[ Small ]    [ Medium ]    [ Large ]
              (3 cards, size badge)

── Other Spaces ──────────────────────────
[ Training Room ]    [ Focus Pod ]
  (badge: Training)   (badge: Focus Pod)
```

### Terrace tab

```
[ Large ]    [ Small ]
(2 cards, size badge, no section dividers)
```

Terrace has no Training Room or Phone Booth — no section dividers needed.

## Section Title Translations

| Key | EN | ES | IT |
|-----|----|----|-----|
| `conferenceRoomsLabel` | "Conference Rooms" | "Salas de Conferencias" | "Sale Conferenze" |
| `otherSpacesLabel` | "Other Spaces" | "Otros Espacios" | "Altri Spazi" |

## Badge Labels

| Room type | EN | ES | IT |
|-----------|----|----|-----|
| Size (S/M/L) | "Small" / "Medium" / "Large" | "Pequeña" / "Mediana" / "Grande" | "Piccola" / "Media" / "Grande" |
| Training Room | "Training" | "Formación" | "Formazione" |
| Focus Pod | "Focus Pod" | "Focus Pod" | "Focus Pod" |

## Room Data

### Palace — Conference Rooms (3 cards)
| ID | Size | Capacity |
|----|------|----------|
| `quarter-conference` | small | Up to 30 pax |
| `large-conference` | medium | Up to 50 pax |
| `big-conference` | large | Up to 80 pax |

### Palace — Other Spaces (2 cards)
| ID | Type badge | Capacity |
|----|-----------|----------|
| `training-room` | "Training" | Up to 40 pax |
| `phone-booth` | "Focus Pod" | 1–2 pax |

### Terrace — All rooms (2 cards)
| ID | Size | Capacity |
|----|------|----------|
| `seaside-main` | large | Up to 40 pax |
| `seaside-meeting` | small | Up to 12 pax |

## Data Model Changes

### Room interface

```ts
interface Room {
  id: string;
  name: string;
  capacity: string;
  features: string[];
  highlight: boolean;
  size?: "small" | "medium" | "large"; // conference rooms only
  roomType?: "conference" | "training" | "focus"; // all rooms
}
```

### Translation additions (all 3 languages)

```ts
conferenceRoomsLabel: string;
otherSpacesLabel: string;
sizeLabels: { small: string; medium: string; large: string };
trainingBadge: string;
focusBadge: string;
```

### Rename in translations

- `sizeLabels.big` → `sizeLabels.large` (and value: "Large" / "Grande" / "Grande")
- Update all room objects: `size: "big"` → `size: "large"`

## Component Changes

### ConferenceRooms.tsx

1. Update `Room` interface (add `roomType`, rename `size` value `"big"` → `"large"`)
2. Add translation keys: `conferenceRoomsLabel`, `otherSpacesLabel`, `trainingBadge`, `focusBadge`, update `sizeLabels`
3. Restore Training Room and Phone Booth to Palace data (all 3 languages)
4. Split Palace rendering into two sections with a labelled divider
5. Badge logic: conference rooms → `t.sizeLabels[room.size]`, training → `t.trainingBadge`, focus → `t.focusBadge`
6. Terrace: no sections, render as flat grid

### OfficesListings.tsx

Rename `sizeLabel: "Big Office"` → `sizeLabel: "Large Office"` (all 6 occurrences across EN/ES/IT).

## Files Affected

| File | Change |
|------|--------|
| `src/components/landing/ConferenceRooms.tsx` | Major restructure |
| `src/components/landing/OfficesListings.tsx` | 6-line label rename |

## Out of Scope

- No changes to individual room detail pages (MeetingRoomPage.tsx)
- No changes to roomPaths or room URLs
- No new pages
