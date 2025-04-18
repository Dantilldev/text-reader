# Text Läsaren

Detta projekt är gjort för att hjälpa en familjemedlem som har språksvårigheter. Med hjälp av bilder och talsyntes kan man klicka på olika behov eller känslor och få det uppläst. Det kan till exempel vara "Jag är hungrig" eller "Jag vill hem".

Projektet är också ett sätt för mig att repetera grunderna i HTML, CSS och JavaScript utan att använda några ramverk eller bibliotek.

Under arbetet med projektet lärde jag mig bland annat att använda webbläsarens inbyggda API för talsyntes SpeechSynthesis. (https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)

## Funktioner

- Bilder med tillhörande text som kan klickas på. Texten läses upp högt.
- Möjlighet att skriva egen text och få den uppläst.
- Val av röst.
- Enkel och tydlig design som fungerar på både dator och mobil.

## Sammanfattning av kodens delar

### HTML  
Strukturen för sidan. Här finns knappar, textruta, röstval och en plats där alla bildrutor visas.

### CSS  
Styr utseendet. Den gör sidan responsiv, tydlig och lätt att använda. Färger och layout är valda för att vara lugna och enkla.

### JavaScript  
Logiken bakom sidan. Skapar bildrutorna, kopplar ihop dem med text och röst, hanterar klick, och läser upp både förinställd och egen text. Här används SpeechSynthesis API:t för att ge sidan talsyntes funktioner.


