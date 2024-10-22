# HashMap Implementation in JavaScript

## Beskrivelse
Dette prosjektet er en enkel implementasjon av en **HashMap** i JavaScript som bruker **LinkedList** for å håndtere kollisjoner. Dette prosjektet illustrerer hvordan en HashMap kan bruke separate chaining (ved å bruke en linked list) for å håndtere tilfeller der to eller flere nøkler gir samme hash-verdi.

## Filstruktur
- `HashMap.mjs`: Inneholder implementasjonen av HashMap-klassen, inkludert metoder som `hash`, `assign`, og `get`.
- `LinkedList.mjs`: Implementerer en enkel LinkedList-struktur som brukes i HashMap for å håndtere kollisjoner.
- `Node.mjs`: Representerer en node i en LinkedList, som holder data og peker til den neste noden i listen.

## Funksjoner i HashMap

### `hash(key)`
Denne funksjonen genererer en hash-verdi basert på en gitt nøkkel. Hash-verdien blir deretter begrenset til størrelsen på HashMap ved hjelp av modulus (`%`), for å sikre at indeksen er innenfor rekkevidden til arrayen som utgjør hashmappet.

### `assign(key, value)`
Legger til en verdi i HashMap ved hjelp av en nøkkel. Hvis det allerede finnes en verdi på den genererte hash-indeksen, legges den til i en LinkedList.

### `get(key)`
Returnerer verdien som er tilknyttet en gitt nøkkel. Hvis ingen verdi er funnet for den oppgitte nøkkelen, returneres `null`.

## Funksjoner i LinkedList

### `addToHead(data)`
Legger til en node i begynnelsen av LinkedList.

### `addToTail(data)`
Legger til en node i slutten av LinkedList.

### `findNodeByKey(key)`
Finner en node i LinkedList basert på nøkkelen.

### `removeHead()`
Fjerner hodet (første element) fra listen.

### `removeTail()`
Fjerner halen (siste element) fra listen.

## Eksempel på bruk

```javascript
import HashMap from "./HashMap.mjs";

const hashMap = new HashMap(10);

// Legg til noen nøkler og verdier
hashMap.assign('navn', 'Patrik');
hashMap.assign('alder', 36);

// Hent verdiene basert på nøklene
console.log(hashMap.get('navn')); // Patrik
console.log(hashMap.get('alder')); // 36

// Hent en verdi som ikke eksisterer
console.log(hashMap.get('jobb')); // null
