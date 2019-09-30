# ING102

Guide til layout:
Det legges ut en egen %person%work.html fil for hvert medlem. Arbeid i denne, så holder vi originalkode i %person%.html filene midlertidig
Denne får en enkel copy-paste av basic layout, der navbar og sections er lagt til.
Navbar trengs ikke å fikses på, den bør være statisk på hver side, men kan gjerne endres ved tilbakemelding.
Sections har ganske mange <div> elementer, dette er for å fikse layout, disse bør ikke endres på uten en plan for å få lik layout.
Hver section er en container med ferdige størrelser. Vil du overgå disse kan vi legge til ekstra CSS for siden din, ta kontakt med Gunnar.
Sections alternerer farger, så det er lett å se hvor mye du har å arbeide med.
Tekst skal automatisk plasseres i midten av section. Du kan overstyre dette i style eller egne klasser kan lages om det blir brukt en del.
Legg merke til at text fungerer annerledes inni sections. 
Du kan også sjekke Flexbox "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" nye klasser for disse kan lett legges til, men det er et par allerede.
For å legge til innhold i disse, arbeider du innenfor elementet med klassen "cat", lag en ny div eller arbeid innenfor parent.
