// Array contenente i dati delle opere d'arte
const OPERE_DATA = [
  {
    "id": 1,
    "immagine": "Opera1.png",
    "autore": "PITTORE IRLANDESE",
    "titolo": "BOOK OF KELLS, CAPOLETTERA",
    "tecnica": "TEMPERA SU PERGAMENA",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 2,
    "immagine": "Opera2.png",
    "autore": "PITTORE DI REIMS",
    "titolo": "SALTERIO DI UTRECHT",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 3,
    "immagine": "Opera3.png",
    "autore": "PITTORE AUSTRIACO",
    "titolo": "IL VENERABILE BEDA",
    "tecnica": "PENNA E INCHIOSTRO BLU E ROSSO E ACQUERELLO SU PERGAMENA",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 4,
    "immagine": "Opera4.png",
    "autore": "TADDEO GADDI",
    "titolo": "LA PRESENTAZIONE DELLA VERGINE AL TEMPIO",
    "tecnica": "PENNELLO, ACQUERELLO, LUMEGGIATURE BIANCHE E ORO SU CARTA PREPARATA VERDE",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 5,
    "immagine": "Opera5.png",
    "autore": "SEGUACE DI SIMONE MARTINI",
    "titolo": "ALLEGORIA DELLA TEMPERANZA",
    "tecnica": "PUNTA D'ARGENTO SU C.P. IN ROSSO",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 6,
    "immagine": "Opera6.png",
    "autore": "MAESTRO DEL PARAMENTO DI NARBONNE",
    "titolo": "ARCIERE",
    "tecnica": "PENNELLO E INCHIOSTRO NERO SU PERGAMENA",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 7,
    "immagine": "Opera7.png",
    "autore": "PITTORE TEDESCO",
    "titolo": "L'EDUCAZIONE DI MARIA",
    "tecnica": "PENNA E INCHIOSTRO NERO",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 8,
    "immagine": "Opera8.png",
    "autore": "PITTORE LOMBARDO",
    "titolo": "SCENA DI CACCIA",
    "tecnica": "PENNA, PENNELLO E INCHIOSTRO RIALZATO DI BIANCO SU CARTA PREPARATA VERDE",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 9,
    "immagine": "Opera9.png",
    "autore": "GENTILE DA FABRIANO",
    "titolo": "NUDI FEMMNILI E ALTRE FIGURE",
    "tecnica": "PENNA SU PERGAMENA",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 10,
    "immagine": "Opera10.png",
    "autore": "GIOVANNINO DE GRASSI",
    "titolo": "DUE DAME CON CETRA",
    "tecnica": "INCHIOSTRO E ACQUERELLO SU PERGAMENA",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 11,
    "immagine": "Opera11.png",
    "autore": "PISANELLO",
    "titolo": "STUDI DI NUDO E UN'ANNUNCIAZIONE",
    "tecnica": "PENNA E INCHIOSTRO",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 12,
    "immagine": "Opera12.png",
    "autore": "PISANELLO",
    "titolo": "STUDI DI COSTUME",
    "tecnica": "PENNA INCHIOSTRO E ACQUERELLO",
    "periodo": "IL MEDIOEVO IN EUROPA",
    "parte": 1
  },
  {
    "id": 13,
    "immagine": "Opera13.png",
    "autore": "DONATELLO",
    "titolo": "GIOVANE CORONATO D'ALLORO",
    "tecnica": "PENNA E INCHIOSTRO BRUNO, ACQUERELLO GRIGIO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 14,
    "immagine": "Opera14.png",
    "autore": "PAOLO UCCELLO",
    "titolo": "PROFILO CON TURBANTE",
    "tecnica": "BISTRO E ACQUERELLO SU CARTA TINTA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 15,
    "immagine": "Opera15.png",
    "autore": "BENOZZO GOZZOLI",
    "titolo": "TESTA DI SAN LORENZO",
    "tecnica": "PUNTA D'ARGENTO RIALZATA DI BIACCA SU C.P. ARANCIONE",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 16,
    "immagine": "Opera16.png",
    "autore": "ANTONIO POLLAIOLO",
    "titolo": "CAVALIERE E NEMICO CADUTO",
    "tecnica": "PENNA E BISTRO SU CARTA TINTA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 17,
    "immagine": "Opera17.png",
    "autore": "BOTTICELLI",
    "titolo": "ABBONDANZA E AUTUNNO",
    "tecnica": "PENNA E INCHIOSTRO, ACQUERELLO BRUNO, RIALZATO DI BIANCO SU TRACCIA DI CARBONCINO, C.P. ROSA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 18,
    "immagine": "Opera18.png",
    "autore": "VERROCCHIO",
    "titolo": "TESTA DI DONNA",
    "tecnica": "PUNTA METALLICA RIALZATA DI BIANCO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 19,
    "immagine": "Opera19.png",
    "autore": "FILIPPINO LIPPI",
    "titolo": "TESTA DI VECCHIO",
    "tecnica": "PUNTA METALLICA RIALZATA DI BIANCO SU C.P. ARDESIA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 20,
    "immagine": "Opera20.png",
    "autore": "LORENZO DI CREDI",
    "titolo": "TESTA DI DONNA",
    "tecnica": "PUNTA D'ARGENTO E LUMEGGIATURE A BIACCA SU CARTA CREMA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 21,
    "immagine": "Opera21.png",
    "autore": "PERUGINO",
    "titolo": "STUDI DI UOMINI E UNA MADONNA",
    "tecnica": "PUNTA D'ARGENTO E LUMEGGIATURE A BIACCA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 22,
    "immagine": "Opera22.png",
    "autore": "LUCA SIGNORELLI",
    "titolo": "ERCOLE E ANTEO",
    "tecnica": "GESSETTO GRIGIO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 23,
    "immagine": "Opera23.png",
    "autore": "JACOPO BELLINI",
    "titolo": "FLAGELLAZIONE DI CRISTO",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 24,
    "immagine": "Opera24.png",
    "autore": "ANDREA MANTEGNA",
    "titolo": "MARTE VENERE E DIANA",
    "tecnica": "PENNA, INCHIOSTRO E ACQUERELLO BRUNO CON TOCCHI DI BIANCO E DI COLORE",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 25,
    "immagine": "Opera25.png",
    "autore": "ERCOLE DE ROBERTI",
    "titolo": "STUDI PER UNA CROCIFISSIONE",
    "tecnica": "PENNA E PENNELLO BRUNO RIALZATO DI BIANCO SU CARTA GRIGIA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 26,
    "immagine": "Opera26.png",
    "autore": "MARCO ZOPPO",
    "titolo": "SEI STUDI DI MADONNA COL BAMBINO",
    "tecnica": "PENNA, INCHIOSTRO BRUNO E ACQUERELLO SU CARTA COLORATA ROSA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 27,
    "immagine": "Opera27.png",
    "autore": "GIOVANNI BELLINI",
    "titolo": "PIETÀ",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 28,
    "immagine": "Opera28.png",
    "autore": "GIOVANNI BELLINI",
    "titolo": "RITRATTO DI GENTILE BELLINI",
    "tecnica": "MATITA NERA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 29,
    "immagine": "Opera29.png",
    "autore": "GENTILE BELLINI",
    "titolo": "PROCESSIONE IN CAMPO SAN LIO",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 30,
    "immagine": "Opera30.png",
    "autore": "VITTORE CARPACCIO",
    "titolo": "SOGNO DI SANT'ORSOLA",
    "tecnica": "PENNA E PENNELLO CON INCHIOSTRO BRUNO SU CARTA GIALLINA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 31,
    "immagine": "Opera31.png",
    "autore": "VITTORE CARPACCIO",
    "titolo": "TESTA DI GIOVANE",
    "tecnica": "GESSETTO NERO, PENNELLO E INCHIOSTRO BRUNO RIALZATO A BIACCA SU CARTA AZZURRA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 32,
    "immagine": "Opera32.png",
    "autore": "JAN VAN EYCK",
    "titolo": "IL CARDINALE NICOLA ALBERGATI",
    "tecnica": "PUNTA D'ARGENTO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 33,
    "immagine": "Opera33.png",
    "autore": "ANTONELLO DA MESSINA",
    "titolo": "RITRATTO DI GIOVANE",
    "tecnica": "CARBONCINO SFUMATO SU CARTA BRUNA",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 34,
    "immagine": "Opera34.png",
    "autore": "JEAN FOUQET",
    "titolo": "RITRATTO DI ECCLESIASTICO",
    "tecnica": "PUNTA D'ARGENTO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 35,
    "immagine": "Opera35.png",
    "autore": "ROGIER VAN DER WEYDEN",
    "titolo": "MADONNA COL BAMBINO",
    "tecnica": "PUNTA D'ARGENTO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 36,
    "immagine": "Opera36.png",
    "autore": "KONRAD WITZ",
    "titolo": "MADONNA CON BAMBINO",
    "tecnica": "PENNA E TINTEGGIATURA IN INCHIOSTRO DI CHINA, ACQUERELLO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 37,
    "immagine": "Opera37.png",
    "autore": "BOSCH",
    "titolo": "ALBERO FANTASTICO IN FORMA D'UOMO",
    "tecnica": "PENNA E BISTRO",
    "periodo": "LA PRIMA RINASCENZA",
    "parte": 1
  },
  {
    "id": 38,
    "immagine": "Opera38.png",
    "autore": "DONATO BRAMANTE",
    "titolo": "SAN CRISTOFORO",
    "tecnica": "PUNTA D'ARGENTO RIALZATA A BIACCA SU CARTA AZZURRA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 39,
    "immagine": "Opera39.png",
    "autore": "LEONARDO DA VINCI",
    "titolo": "SCENE DI BATTAGLIA CON CAVALIERI",
    "tecnica": "PENNA, INCHIOSTRO MARRONE",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 40,
    "immagine": "Opera40.png",
    "autore": "LEONARDO DA VINCI",
    "titolo": "BUSTO DI PROFILO, SCHEMA DELLE MISURE DELLA TESTA UMANA, STUDIO DI CAVALLO E CAVALIERI",
    "tecnica": "PENNA, MATITA NERA, SANGUIGNA E INCHIOSTRO MARRONE",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 41,
    "immagine": "Opera41.png",
    "autore": "LEONARDO DA VINCI",
    "titolo": "STUDIO DI PANNEGGIO",
    "tecnica": "PUNTA METALLICA, CARBONCINO, BISTRO E BIACCA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 42,
    "immagine": "Opera42.png",
    "autore": "LEONARDO DA VINCI",
    "titolo": "AUTORITRATTO",
    "tecnica": "SANGUIGNA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 43,
    "immagine": "Opera43.png",
    "autore": "MICHELANGELO",
    "titolo": "TESTA DI PROFILO",
    "tecnica": "SANGUIGNA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 44,
    "immagine": "Opera44.png",
    "autore": "MICHELANGELO",
    "titolo": "CROCIFISSIONE",
    "tecnica": "GESSETTO NERO E BIACCA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 45,
    "immagine": "Opera45.png",
    "autore": "RAFFAELLO",
    "titolo": "SANTA CATERINA D'ALESSANDRIA",
    "tecnica": "CARBONCINO RIALZATO IN BIANCO",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 46,
    "immagine": "Opera46.png",
    "autore": "RAFFAELLO",
    "titolo": "TESTA D'ANGELO",
    "tecnica": "CARBONCINO RIALZATO IN BIANCO",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 47,
    "immagine": "Opera47.png",
    "autore": "RAFFAELLO",
    "titolo": "DONNA CHE LEGGE A UN BAMBINO",
    "tecnica": "PUNTA METALLICA, RIALZATA DI BIANCO",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 48,
    "immagine": "Opera48.png",
    "autore": "ANDREA DEL SARTO",
    "titolo": "TESTA DI PROFILO",
    "tecnica": "SANGUIGNA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 49,
    "immagine": "Opera49.png",
    "autore": "FRA' BARTOLOMEO",
    "titolo": "TESTA DI UOMO ANZIANO",
    "tecnica": "CARBONCINO",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 50,
    "immagine": "Opera50.png",
    "autore": "PONTORMO",
    "titolo": "DUE DONNE VELATE",
    "tecnica": "SANGUIGNA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 51,
    "immagine": "Opera51.png",
    "autore": "DOMENICO BECCAFUMI",
    "titolo": "NUDO DISTESO",
    "tecnica": "MATITA NERA, PENNELLO E BISTRO, LUMEGGIATURE A BIACCA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 52,
    "immagine": "Opera52.png",
    "autore": "PARMIGIANINO",
    "titolo": "LE NOZZE MISTICHE DI SANTA CATERINA",
    "tecnica": "PENNA E INCHIOSTRO BRUNO, ACQUERELLATE IN SEPPIA, LUMEGGIATURE A BIACCA SU CARTA TINTA IN ROSA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 53,
    "immagine": "Opera53.png",
    "autore": "CORREGGIO",
    "titolo": "EVA",
    "tecnica": "SANGUIGNA RIALZATA IN BIANCO",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 54,
    "immagine": "Opera54.png",
    "autore": "NICOLÒ DELL'ABATE",
    "titolo": "GIOVANE CHE ABBRACCIA UNA DONNA IGNUDA",
    "tecnica": "PENNA E BISTRO CON LUMEGGIATURE IN BIANCO SU CARTA BRUNA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 55,
    "immagine": "Opera55.png",
    "autore": "FEDERICO BAROCCI",
    "titolo": "TESTA DI PROFILO",
    "tecnica": "TRE GESSETTI SU CARTA AZZURRA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 56,
    "immagine": "Opera56.png",
    "autore": "LUCA CAMBIASO",
    "titolo": "VENERE TRATTIENE ADONE",
    "tecnica": "PENNA E INCHIOSTRO SEPPIA SU CARTA",
    "periodo": "IL CINQUECENTO DA FIRENZE A ROMA",
    "parte": 1
  },
  {
    "id": 57,
    "immagine": "Opera57.png",
    "autore": "GIORGIONE",
    "titolo": "PASTORELLO",
    "tecnica": "SANGUIGNA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 58,
    "immagine": "Opera58.png",
    "autore": "LORENZO LOTTO",
    "titolo": "TESTA DI DONNA",
    "tecnica": "PUNTA D'ARGENTO PENNELLATO A BIACCA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 59,
    "immagine": "Opera59.png",
    "autore": "LORENZO LOTTO",
    "titolo": "MARTIRIO DI UN SANTO",
    "tecnica": "PENNA, INCHIOSTRO BRUNO, MATITA NERA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 60,
    "immagine": "Opera60.png",
    "autore": "LORENZO LOTTO",
    "titolo": "PRELATO NELLO STUDIO",
    "tecnica": "PENNA, PENNELLO E INCHIOSTRO BRUNO CON LUMEGGIATURE A BIACCA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 61,
    "immagine": "Opera61.png",
    "autore": "SEBASTIANO DEL PIOMBO",
    "titolo": "DONNA NUDA IN PIEDI",
    "tecnica": "GESSETTO NERO RIALZATO IN BIANCO SU CARTA AZZURRA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 62,
    "immagine": "Opera62.png",
    "autore": "TIZIANO VECELLIO",
    "titolo": "RITRATTO DI GIOVANE DONNA",
    "tecnica": "GESSETTO NERO RIALZATO DI GESSETTO BIANCO",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 63,
    "immagine": "Opera63.png",
    "autore": "TIZIANO VECELLIO",
    "titolo": "COPPIA MITOLOGICA ABBRACCIATA",
    "tecnica": "CARBONCINO LUMEGGIATURE A BIACCA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 64,
    "immagine": "Opera64.png",
    "autore": "TIZIANO VECELLIO",
    "titolo": "PAESAGGIO CON DONNA NUDA DORMIENTE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO CON LUMEGGIATURE A BIACCA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 65,
    "immagine": "Opera65.png",
    "autore": "DOMENICO CAMPAGNOLA",
    "titolo": "GIUDIZIO DI PARIDE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 66,
    "immagine": "Opera66.png",
    "autore": "PORDENONE",
    "titolo": "MARTIRIO DI SAN PIETRO MARTIRE",
    "tecnica": "SANGUIGNA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 67,
    "immagine": "Opera67.png",
    "autore": "ANDREA SCHIAVONE",
    "titolo": "ANNUNCIAZIONE",
    "tecnica": "GESSETTO NERO, PENNELLO E INCHIOSTRO BRUNO RIALZATO DI BIANCO",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 68,
    "immagine": "Opera68.png",
    "autore": "JACOPO BASSANO",
    "titolo": "TESTA DI DONNA",
    "tecnica": "PENNELLO E OLIO BRUNO, GRIGIO ROSSO E BIANCO",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 69,
    "immagine": "Opera69.png",
    "autore": "JACOPO BASSANO",
    "titolo": "FLAGELLAZIONE",
    "tecnica": "GESSETTI COLORATI SU CARTA AZZURRA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 70,
    "immagine": "Opera70.png",
    "autore": "JACOPO BASSANO",
    "titolo": "DIANA",
    "tecnica": "GESSETTO NERO RIALZATO DI BIANCO SU CARTA AZZURRA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 71,
    "immagine": "Opera71.png",
    "autore": "JACOPO TINTORETTO",
    "titolo": "ARCIERE",
    "tecnica": "GESSETTO NERO SU CARTA MARRONCINA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 72,
    "immagine": "Opera72.png",
    "autore": "JACOPO TINTORETTO",
    "titolo": "VENERE, VULCANO E MARTE",
    "tecnica": "PENNA E PENNELLO, INCHIOSTRO NERO E LUMEGGIATURE BIACCA SU CARTA AZZURRA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 73,
    "immagine": "Opera73.png",
    "autore": "DOMENICO TINTORETTO",
    "titolo": "SCENA DI CONTADINI",
    "tecnica": "CARBONCINO E PENNELLO, TEMPERA GRIGIA E BIACCA SU CARTA AZZURRINA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 74,
    "immagine": "Opera74.png",
    "autore": "EL GRECO",
    "titolo": "STUDIA DAL GIORNO DI MICHELANGELO",
    "tecnica": "GESSETTO NERO E BIANCO E ACQUERELLO SU CARTA AZZURRA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 75,
    "immagine": "Opera75.png",
    "autore": "JACOPO PALMA IL GIOVANE",
    "titolo": "DEPOSIZIONE",
    "tecnica": "PENNA E ACQUERELLO RIALZATO CON ORO SU CARTA GRIGIO VERDASTRA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 76,
    "immagine": "Opera76.png",
    "autore": "PAOLO VERONESE",
    "titolo": "FOGLIO DI STUDI",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 77,
    "immagine": "Opera77.png",
    "autore": "PAOLO VERONESE",
    "titolo": "LA VITTORIA",
    "tecnica": "PENNA E BISTRO CON LUMEGGIATURE BIANCHE SU CARTA PREPARATA GRIGIO O AZZURRO",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 78,
    "immagine": "Opera78.png",
    "autore": "PAOLO VERONESE",
    "titolo": "TESTA DI DONNA",
    "tecnica": "GESSETTO NERO E BIANCO SU CARTA AZZURRA",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 79,
    "immagine": "Opera79.png",
    "autore": "CARLETTO CALIARI",
    "titolo": "RITRATTO D'UOMO",
    "tecnica": "GESSETTO NERO, BRUNO E ROSSO, TRACCE DI GESSETTO BIANCO",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 80,
    "immagine": "Opera80.png",
    "autore": "FEDERICO ZUCCARI",
    "titolo": "TADDEO ZUCCARI GIOVINETTO IN CASA DI GIOVANNI PIERO",
    "tecnica": "PENNA, PENNELLO E INCHIOSTRO BRUNO",
    "periodo": "IL CINQUECENTO A VENEZIA",
    "parte": 1
  },
  {
    "id": 81,
    "immagine": "Opera81.png",
    "autore": "MARTIN SCHONGAUER",
    "titolo": "MADONNA COL BAMBINO E IL GAROFANO",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 82,
    "immagine": "Opera82.png",
    "autore": "ALBRECHT DURER",
    "titolo": "MADONNA DEGLI ANIMALI",
    "tecnica": "PENNA, INCHIOSTRO NERO E ACQUERELLO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 83,
    "immagine": "Opera83.png",
    "autore": "ALBRECHT DURER",
    "titolo": "VEDUTA DI ARCO",
    "tecnica": "ACQUERELLO E GUAZZO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 84,
    "immagine": "Opera84.png",
    "autore": "ALBRECHT DURER",
    "titolo": "LEPRE",
    "tecnica": "ACQUERELLO E LUMEGGIATURE A TEMPERA SU CARTA",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 85,
    "immagine": "Opera85.png",
    "autore": "ALBRECHT DURER",
    "titolo": "ZOLLA D'ERBA",
    "tecnica": "ACQUERELLO E GUAZZO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 86,
    "immagine": "Opera86.png",
    "autore": "ALBRECHT DURER",
    "titolo": "TESTA DI DONNA",
    "tecnica": "CARBONCINO CON SFONDO IN ACQUERELLO IN VERDE OLIVA",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 87,
    "immagine": "Opera87.png",
    "autore": "CRANACH IL VECCHIO",
    "titolo": "TESTA DI UOMO CON BERRETTO DI PELLICCIA",
    "tecnica": "PENNELLO E ACQUERELLO, ACCENTUATO A PENNA",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 88,
    "immagine": "Opera88.png",
    "autore": "MATHIS GRUNEWALD",
    "titolo": "TRE TESTE",
    "tecnica": "GESSETTO NERO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 89,
    "immagine": "Opera89.png",
    "autore": "BALDUNG GREIN",
    "titolo": "LA DONNA E LA MORTE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO, LUMEGGIATURE A BIACCA SU CARTA PREPARATA,BRUNA",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 90,
    "immagine": "Opera90.png",
    "autore": "DEUTSCH",
    "titolo": "ALLEGORIA DELLA MORTE",
    "tecnica": "PENNA E INCHIOSTRO DI CHINA RIALZATO DI BIANCO SU CARTA PREPARATA IN OCRA",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 91,
    "immagine": "Opera91.png",
    "autore": "URS GRAF",
    "titolo": "COPPIA VISTA DA DIETRO",
    "tecnica": "PENNA E INCHIOSTRO DI CHINA",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 92,
    "immagine": "Opera92.png",
    "autore": "URS GRAF",
    "titolo": "DAMA",
    "tecnica": "PENNA E INCHIOSTRO DI CHINA",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 93,
    "immagine": "Opera93.png",
    "autore": "LUCA DA LEIDA",
    "titolo": "FANCIULLA CHE LEGGE",
    "tecnica": "GESSETTO NERO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 94,
    "immagine": "Opera94.png",
    "autore": "HOLBEIN IL GIOVANE",
    "titolo": "RITRATTO DI DAMA",
    "tecnica": "GESSETTO NERO E COLORATI",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 95,
    "immagine": "Opera95.png",
    "autore": "BRUEGEL IL VECCHIO",
    "titolo": "I CIECHI",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 96,
    "immagine": "Opera96.png",
    "autore": "BRUEGEL IL VECCHIO",
    "titolo": "VEDUTA DI RIPA GRANDE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 97,
    "immagine": "Opera97.png",
    "autore": "HENDRICK GOLTZIUS",
    "titolo": "DAFNE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO SU TRACCIA DI SANGUIGNA E GESSETTO NERO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 98,
    "immagine": "Opera98.png",
    "autore": "FRANCOIS CLOUET",
    "titolo": "RITRATTO DI GENTILUOMO",
    "tecnica": "GESSETTO NERO E ROSSO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 99,
    "immagine": "Opera99.png",
    "autore": "HENDRICK GOLTZIUS",
    "titolo": "PAESAGGIO CON ALBERI",
    "tecnica": "PENNA, PENNELLO E INCHIOSTRO BRUNO",
    "periodo": "IL CINQUECENTO IN EUROPA",
    "parte": 1
  },
  {
    "id": 100,
    "immagine": "Opera100.png",
    "autore": "LUDOVICO CARRACCI",
    "titolo": "QUATTRO FIGURE PER L'AFFRESCO CON SAN PIETRO IN CASA DI SIMON CUOIAIO",
    "tecnica": "SANGUIGNA E LUMEGGIATURE A BIACCA SU CARTA",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 1
  },
  {
    "id": 101,
    "immagine": "Opera101.png",
    "autore": "AGOSTINO CARRACCI",
    "titolo": "ANCHISE E VENERE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO SU TRACCIA DI SANGUIGNA",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 1
  },
  {
    "id": 102,
    "immagine": "Opera102.png",
    "autore": "ANNIBALE CARRACCI",
    "titolo": "PAESAGGIO CON FIUME E BARCA",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 1
  },
  {
    "id": 103,
    "immagine": "Opera103.png",
    "autore": "ANNIBALE CARRACCI",
    "titolo": "RITRATTO DI UOMO PENSOSO",
    "tecnica": "GESSETTO NERO SU CARTA BIANCA",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 1
  },
  {
    "id": 104,
    "immagine": "Opera104.png",
    "autore": "ANNIBALE CARRACCI",
    "titolo": "FANCIULLO MALATO",
    "tecnica": "SANGUIGNA ACQUERELLATO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 1
  },
  {
    "id": 105,
    "immagine": "Opera105.png",
    "autore": "CECCO BRAVO",
    "titolo": "FANCIULLA DI PROFILO",
    "tecnica": "SANGUIGNA",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 1
  },
  {
    "id": 106,
    "immagine": "Opera106.png",
    "autore": "GUERCINO",
    "titolo": "BUSTO DI DONNA DI PROFILO",
    "tecnica": "PENNA SU CARTA AVORIO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 1
  },
  {
    "id": 107,
    "immagine": "Opera107.png",
    "autore": "GUERCINO",
    "titolo": "NOZZE MISTICHE DI SANTA CATERINA",
    "tecnica": "GESSETTO NERO, PENNA, PENNELLO E INCHIOSTRO BRUNO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 1
  },
  {
    "id": 108,
    "immagine": "Opera108.png",
    "autore": "GIAN LORENZO BERNINI",
    "titolo": "RITRATTO DI GIOVANE",
    "tecnica": "GESSETTO NERO E SANGUIGNA, RIALZATO DI BIANCO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 109,
    "immagine": "Opera109.png",
    "autore": "GIAN LORENZO BERNINI",
    "titolo": "AUTORITRATTO",
    "tecnica": "SANGUIGNA RIALZATA A GESSETTO BIANCO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 110,
    "immagine": "Opera110.png",
    "autore": "SIMON VOUET",
    "titolo": "DONNA CON DUE SCULTURE IN MANO E STUDIO DI MANI",
    "tecnica": "GESSETTO NERO RIALZATO DI BIANCO SU CARTA AZZURRA",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 111,
    "immagine": "Opera111.png",
    "autore": "PIETRO DA CORTONA",
    "titolo": "TESTA DI GIOVANE",
    "tecnica": "GESSETTO NERO E BIACCA",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 112,
    "immagine": "Opera112.png",
    "autore": "NICOLAS POUSSIN",
    "titolo": "IL PONTE MOLLE VICINO A ROMA",
    "tecnica": "PENNA, PENNELLO E BISTRO SU TRACCIA DI PUNTA METALLICA",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 113,
    "immagine": "Opera113.png",
    "autore": "NICOLAS POUSSIN",
    "titolo": "MEDORO E ANGELICA",
    "tecnica": "SANGUIGNA, PENNA, PENNELLO E BISTRO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 114,
    "immagine": "Opera114.png",
    "autore": "CLAUDE LORRAIN",
    "titolo": "PAESAGGIO CON DIANA E CALLISTO",
    "tecnica": "PENNA E PENNELLO GRIGIO E BRUNO CON RIALZI DI BIANCO SU TRACCIA DI GESSETTO NERO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 115,
    "immagine": "Opera115.png",
    "autore": "CARLO MARATTA",
    "titolo": "STUDI DI FIGURA E DI PANNEGGIO",
    "tecnica": "GESSETTO NERO, RIALZATO DI BIANCO A PENNELLO SU CARTA AZZURRA",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 116,
    "immagine": "Opera116.png",
    "autore": "BACICCIO",
    "titolo": "NUDO DI FANCIULLO DISTESO",
    "tecnica": "SANGUIGNA RIALZATA DI BIANCO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 117,
    "immagine": "Opera117.png",
    "autore": "PIER FRANCESCO MOLA",
    "titolo": "GIUSEPPE INTERPRETA I SOGNI",
    "tecnica": "PENNA E INCHIOSTRO BRUNO, ACQUERELLO BRUNO SU TRACCIA DI SANGUIGNA E GESSETTO NERO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 118,
    "immagine": "Opera118.png",
    "autore": "MATTIA PRETI",
    "titolo": "LA CARITÀ ROMANA",
    "tecnica": "SANGUIGNA",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 119,
    "immagine": "Opera119.png",
    "autore": "LUCA GIORDANO",
    "titolo": "ANNUNCIAZIONE",
    "tecnica": "GESSETTO NERO, PENNA, PENNELLO E BISTRO, ACQUERELLO BRUNO E GRIGIO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 120,
    "immagine": "Opera120.png",
    "autore": "BERNARDO STROZZI",
    "titolo": "TESTA D'UOMO DI PROFILO",
    "tecnica": "CARBONCINO",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 121,
    "immagine": "Opera121.png",
    "autore": "GRECHETTO",
    "titolo": "RACHELE CON I FIGLI E IL GREGGE DI GIACOBBE",
    "tecnica": "PENNELLO, TREMENTINA E OLIO SU CARTA",
    "periodo": "IL SEICENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 122,
    "immagine": "Opera122.png",
    "autore": "PIETER PAUL RUBENS",
    "titolo": "TRE CARIATIDI",
    "tecnica": "SANGUIGNA, PENNELLO E LUMEGGIATURE A BIACCA",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 123,
    "immagine": "Opera123.png",
    "autore": "PIETER PAUL RUBENS",
    "titolo": "STUDIO PER IL CRISTO CHE SOLLEVA LA CROCE",
    "tecnica": "GESSETTO NERO RIALZATO DI BIANCO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 124,
    "immagine": "Opera124.png",
    "autore": "PIETER PAUL RUBENS",
    "titolo": "LEONE",
    "tecnica": "GESSETTO NERO E GIALLO RIALZATO DI BIANCO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 125,
    "immagine": "Opera125.png",
    "autore": "ANTON VAN DYCK",
    "titolo": "RITRATTO DEL PUTEANUS",
    "tecnica": "GESSETTO NERO E ACQUERELLO BRUNO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 126,
    "immagine": "Opera126.png",
    "autore": "JACOB JORDAENS",
    "titolo": "DUE DONNE E UN BAMBINO A LUME DI CANDELA",
    "tecnica": "ACQUERELLO, PENNELLO E BISTRO RIALZATO DI BIANCO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 127,
    "immagine": "Opera127.png",
    "autore": "REMBRANDT",
    "titolo": "DONNA E PETTINATRICE",
    "tecnica": "PENNA E BISTRO, ACQUERELLATO CON BISTRO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 128,
    "immagine": "Opera128.png",
    "autore": "REMBRANDT",
    "titolo": "DONNA NUDA SEDUTA",
    "tecnica": "PENNA E PENNELLO, BISTRO, GESSETTO NERO E CARBONCINO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 129,
    "immagine": "Opera129.png",
    "autore": "REMBRANDT",
    "titolo": "PAESAGGIO CON CASA RUSTICA",
    "tecnica": "PENNA E PENNELLO CON INCHIOSTRO BRUNO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 130,
    "immagine": "Opera130.png",
    "autore": "REMBRANDT",
    "titolo": "DONNA PENSOSA",
    "tecnica": "PENNELLO E INCHIOSTRO BRUNO ACQUERELLATO CON TOCCHI DI BIACCA",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 131,
    "immagine": "Opera131.png",
    "autore": "REMBRANDT",
    "titolo": "SASKIA A LETTO, CON UN'ASSISTENTE",
    "tecnica": "PENNA E PENNELLO CON INCHIOSTRO BRUNO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 132,
    "immagine": "Opera132.png",
    "autore": "REMBRANDT",
    "titolo": "SASKIA ALLA FINESTRA",
    "tecnica": "PENNELLO CON INCHIOSTRO NERO E GRIGIO, RIALZATO DI BIANCO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 133,
    "immagine": "Opera133.png",
    "autore": "LEONARD BRAMER",
    "titolo": "DONNA CON BAMBOLA",
    "tecnica": "PENNA, PENNELLO E ACQUERELLO, BISTRO E INCHIOSTRO INDIANO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 134,
    "immagine": "Opera134.png",
    "autore": "ADRIAEN VAN OSTADE",
    "titolo": "LETTORI ALL'OSTERIA",
    "tecnica": "BISTRO, PENNA E INCHIOSTRO SU GESSETTO NERO, ACQUERELLO SU CARTA AZZURRA",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 135,
    "immagine": "Opera135.png",
    "autore": "ALBERT CUYP",
    "titolo": "VEDUTA DI DORDRECHT DA SUD",
    "tecnica": "GESSETTO NERO, PENNA BRUNA E PENNELLO NERO E GIALLINO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 136,
    "immagine": "Opera136.png",
    "autore": "HENDRICK AVERCAMP",
    "titolo": "PESCATORI IN UN POLDER",
    "tecnica": "PENNA, INCHIOSTRO BRUNO E ACQUERELLO SU TRACCIA DI MATITA",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 137,
    "immagine": "Opera137.png",
    "autore": "FRANCISCO DE ZURBARAN",
    "titolo": "TESTA DI MONACO",
    "tecnica": "GESSETTO NERO E PENNELLO CON INCHIOSTRO GRIGIO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 138,
    "immagine": "Opera138.png",
    "autore": "CHARLES LE BRUN",
    "titolo": "LE NAZIONI D'ASIA",
    "tecnica": "GESSETTO NERO RIALZATO DI BIANCO E TRACCE DI SANGUIGNA",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 139,
    "immagine": "Opera139.png",
    "autore": "JACQUES CALLOT",
    "titolo": "CATTURA DI CRISTO",
    "tecnica": "PENNELLO E ACQUERELLO BRUNO SU TRACCIA DI GESSETTO NERO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 140,
    "immagine": "Opera140.png",
    "autore": "JUSEPE DE RIBERA",
    "titolo": "SANT'IRENE",
    "tecnica": "SANGUIGNA RIALZATA DI BIANCO",
    "periodo": "IL SEICENTO IN EUROPA",
    "parte": 2
  },
  {
    "id": 141,
    "immagine": "Opera141.png",
    "autore": "GIOVANNI ANTONIO PELLEGRINI",
    "titolo": "IL CORPO DI DARIO PORTATO AVANTI DA ALESSANDRO",
    "tecnica": "PENNA E INCHIOSTRO SEPPIA SU TRACCIA DI MATITA",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 142,
    "immagine": "Opera142.png",
    "autore": "SEBASTIANO RICCI",
    "titolo": "PAESAGGIO CON FIGURE",
    "tecnica": "MATITA NERA, PENNA E PENNELLO, INCHIOSTRO BRUNO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 143,
    "immagine": "Opera143.png",
    "autore": "GIAN ANTONIO GUARDI",
    "titolo": "IL RIDOTTO O IL BALLO MASCHERATO",
    "tecnica": "PENNA E ACQUERELLO BRUNO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 144,
    "immagine": "Opera144.png",
    "autore": "GASPARE DIZIANI",
    "titolo": "COSTUMI PER VOGATORI",
    "tecnica": "CARBONCINO, PENNA, SEPPIA, GESSETTI COLORATI",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 145,
    "immagine": "Opera145.png",
    "autore": "DONATO CRETI",
    "titolo": "NUDO DI UOMO DORMIENTE",
    "tecnica": "PENNELLO E OLIO BRUNO E BIANCO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 146,
    "immagine": "Opera146.png",
    "autore": "GIAN BATTISTA PIAZZETTA",
    "titolo": "RITRATTO DEL MARESCIALLO SCHULEMBURG",
    "tecnica": "GESSETTO NERO E BIANCO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 147,
    "immagine": "Opera147.png",
    "autore": "GIAN BATTISTA PIAZZETTA",
    "titolo": "FANCIULLA CON ROSA",
    "tecnica": "CARBONCINO CON LUMEGGIATURA A BIACCA",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 148,
    "immagine": "Opera148.png",
    "autore": "MARCO RICCI",
    "titolo": "PAESAGGIO CON MULINO",
    "tecnica": "PENNA E INCHIOSTRO SEPPIA",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 149,
    "immagine": "Opera149.png",
    "autore": "ALESSANDRO MAGNASCO",
    "titolo": "PAESAGGIO CON FIGURE E MUSICANTI",
    "tecnica": "ACQUERELLO BRUNO RIALZATO DI BIANCO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 150,
    "immagine": "Opera150.png",
    "autore": "FRANCESCO ZUCCARELLI",
    "titolo": "PAESAGGIO CON FIGURE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 151,
    "immagine": "Opera151.png",
    "autore": "GIAMBATTISTA TIEPOLO",
    "titolo": "RITRATTO DI FANCIULLA",
    "tecnica": "GESSETTO NERO E LUMEGGIATURE A BIACCA",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 152,
    "immagine": "Opera152.png",
    "autore": "GIAMBATTISTA TIEPOLO",
    "titolo": "DUE DEE E MINERVA SU NUBI",
    "tecnica": "PENNA, PENNELLO E BISTRO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 153,
    "immagine": "Opera153.png",
    "autore": "GIAN BATTISTA PIRANESI",
    "titolo": "FANTASIA ARCHITETTONICA",
    "tecnica": "PENNA, PENNELLO E INCHIOSTRO BRUNO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 154,
    "immagine": "Opera154.png",
    "autore": "PIETRO LONGHI",
    "titolo": "RAGAZZA CON GABBIETTA",
    "tecnica": "CARBONCINO LUMEGGIATO A BIACCA",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 155,
    "immagine": "Opera155.png",
    "autore": "CANALETTO",
    "titolo": "IL CANTON DEL BROGIO",
    "tecnica": "PENNA E INCHIOSTRO BRUNO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 156,
    "immagine": "Opera156.png",
    "autore": "CANALETTO",
    "titolo": "VEDUTA DI SANT'ELENA",
    "tecnica": "MATITA, PENNA E INCHIOSTRO BRUNO, PENNELLO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 157,
    "immagine": "Opera157.png",
    "autore": "FRANCESCO GUARDI",
    "titolo": "PROGETTO DI DECORAZIONE PER SOFFITTO",
    "tecnica": "PENNA, PENNELLO, INCHIOSTRO SEPPIA ACQUERELLATO A COLORI",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 158,
    "immagine": "Opera158.png",
    "autore": "FRANCESCO GUARDI",
    "titolo": "VEDUTA DEL BACINO DI SAN MARCO",
    "tecnica": "GESSETTO NERO, PENNA E INCHIOSTRO BRUNO",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 159,
    "immagine": "Opera159.png",
    "autore": "FRANCESCO GUARDI",
    "titolo": "BANCHETTO ALLE NOZZE POLIGNAC",
    "tecnica": "MATITA NERA PENNA E SEPPIA, ACQUERELLATO A COLORI",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 160,
    "immagine": "Opera160.png",
    "autore": "FRANCESCO GUARDI",
    "titolo": "LA FENICE",
    "tecnica": "PENNA E INCHIOSTRO SEPPIA",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 161,
    "immagine": "Opera161.png",
    "autore": "GIANDOMENICO TIEPOLO",
    "titolo": "CONCERTINO",
    "tecnica": "CARBONCINO, PENNA E SEPPIA, ACQUERELLATO A SEPPIA",
    "periodo": "IL SETTECENTO IN ITALIA",
    "parte": 2
  },
  {
    "id": 162,
    "immagine": "Opera162.png",
    "autore": "JEAN ANTOINE WATTEAU",
    "titolo": "TRE FIGURE DI DONNE SEDUTE",
    "tecnica": "SANGUIGNA E GESSETTO NERO E BIANCO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 163,
    "immagine": "Opera163.png",
    "autore": "JEAN ANTOINE WATTEAU",
    "titolo": "DONNA NUDA SU UN DIVANO",
    "tecnica": "SANGUIGNA E GESSETTO NERO SU CARTA BLUASTRA MOLTO CHIARA",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 164,
    "immagine": "Opera164.png",
    "autore": "MAURICE QUENTIN DE LATOUR",
    "titolo": "AUTORITRATTO",
    "tecnica": "PASTELLO SU CARTA VERDASTRA",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 165,
    "immagine": "Opera165.png",
    "autore": "FRANCOIS BOUCHER",
    "titolo": "DONNA NUDA DISTESA",
    "tecnica": "SANGUIGNA RIALZATA DI BIANCO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 166,
    "immagine": "Opera166.png",
    "autore": "FRANCOIS BOUCHER",
    "titolo": "RITRATTO DI FANCIULLO CON CAROTA",
    "tecnica": "PASTELLO SU CARTA GIALLINA",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 167,
    "immagine": "Opera167.png",
    "autore": "FRANCOIS BOUCHER",
    "titolo": "PAESAGGIO CON PONTE E RUSCELLO",
    "tecnica": "GESSETTO NERO E BIANCO SU CARTA AZZURRA",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 168,
    "immagine": "Opera168.png",
    "autore": "JEAN BAPTISTE SIMEON CHARDIN",
    "titolo": "SERVITORE CHE VERSA VINO A UN SIGNORE",
    "tecnica": "SANGUIGNA E GESSETTO NERO RIALZATI DI BIANCO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 169,
    "immagine": "Opera169.png",
    "autore": "JEAN BAPTISTE SIMEON CHARDIN",
    "titolo": "RITRATTO DI FRANCOISE MARGUERITE POUGET CHARDIN",
    "tecnica": "PASTELLO SU CARTA FODERATA",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 170,
    "immagine": "Opera170.png",
    "autore": "JEAN ETIENNE LIOTARD",
    "titolo": "AUTORITRATTO DA VECCHIO",
    "tecnica": "CARBONCINO RIALZATO IN BIANCO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 171,
    "immagine": "Opera171.png",
    "autore": "JEAN BAPTISTE GREUZE",
    "titolo": "TESTA DI GIOVANE DONNA",
    "tecnica": "PASTELLO E SANGUIGNA, RIALZATI DI BIANCO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 172,
    "immagine": "Opera172.png",
    "autore": "JEAN HONORE FRAGONARD",
    "titolo": "LA MERENDA DI BERGERET",
    "tecnica": "SANGUIGNA",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 173,
    "immagine": "Opera173.png",
    "autore": "JEAN HONORE FRAGONARD",
    "titolo": "DUE DONNE IN CONVERSAZIONE",
    "tecnica": "PENNELLO BRUNO SU TRACCIA DI GESSETTO NERO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 174,
    "immagine": "Opera174.png",
    "autore": "HUBERT ROBERT",
    "titolo": "IL COLOSSEO VISTO DAL PALATINO",
    "tecnica": "SANGUIGNA",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 175,
    "immagine": "Opera175.png",
    "autore": "THOMAS GAINSBOROUGH",
    "titolo": "DONNA VISTA DA DIETRO",
    "tecnica": "GESSETTO NERO E SFUMINO, RIALZATO DI GESSETTO BIANCO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 176,
    "immagine": "Opera176.png",
    "autore": "THOMAS GAINSBOROUGH",
    "titolo": "PAESAGGIO CON GREGGE ALL'ABBEVERATOIO",
    "tecnica": "GESSETTO NERO E SFUMINO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 177,
    "immagine": "Opera177.png",
    "autore": "RICHARD WILSON",
    "titolo": "DONNA FELICE BOCCA STRETTO",
    "tecnica": "GESSETTO NERO E SFUMINO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 178,
    "immagine": "Opera178.png",
    "autore": "THOMAS ROWLANDSON",
    "titolo": "IL VENDITORE DI MELE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO ROSASTRO, ACQUERELLO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 179,
    "immagine": "Opera179.png",
    "autore": "FRANCISCO GOYA",
    "titolo": "FANCIULLA CHE SALTA LA CORDA",
    "tecnica": "GESSETTO NERO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 180,
    "immagine": "Opera180.png",
    "autore": "FRANCISCO GOYA",
    "titolo": "MASCHERE DELLA SETTIMANA SANTA",
    "tecnica": "PENNELLO, INCHIOSTRO GRIGIO E NERO",
    "periodo": "IL SETTECENTO IN FRANCIA, INGHILTERRA, SPAGNA",
    "parte": 2
  },
  {
    "id": 181,
    "immagine": "Opera181.png",
    "autore": "ANTONIO CANOVA",
    "titolo": "ISABELLA ABRIZZI",
    "tecnica": "SANGUIGNA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 182,
    "immagine": "Opera182.png",
    "autore": "ANGELICA KAUFFMANN",
    "titolo": "RITRATTO DI DONNA CON CUFFIA DI PIZZO",
    "tecnica": "GESSETTI COLORATI",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 183,
    "immagine": "Opera183.png",
    "autore": "ELISABETH VIGEE-LEBRUN",
    "titolo": "GIOVINETTA",
    "tecnica": "PASTELLO E GESSETTO AZZURRO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 184,
    "immagine": "Opera184.png",
    "autore": "JACQUES LOUIS DAVID",
    "titolo": "LA PRINCIPESSA MURAT E PAOLINA BORGHESE",
    "tecnica": "MATITA SU CARTA AVORIO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 185,
    "immagine": "Opera185.png",
    "autore": "FELICE GIANI",
    "titolo": "SACRIFICIO A ESCULAPIO",
    "tecnica": "PENNA E BISTRO, TRACCE DI MATITA NERA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 186,
    "immagine": "Opera186.png",
    "autore": "PIERRE PAUL PRUD'HON",
    "titolo": "LA SOURCE",
    "tecnica": "GESSETTO NERO E BIANCO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 187,
    "immagine": "Opera187.png",
    "autore": "JEAN AUGUSTE DOMINIQUE INGRES",
    "titolo": "ADAMO ED EVA",
    "tecnica": "MATITA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 188,
    "immagine": "Opera188.png",
    "autore": "JOHANN HEINRICH FUSSLI",
    "titolo": "MAMILIUS E UNA SIGNORA",
    "tecnica": "PENNA E INCHIOSTRO CON ACQUERELLO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 189,
    "immagine": "Opera189.png",
    "autore": "WILLIAM BLAKE",
    "titolo": "IL SOGNO DELLA REGINA CATERINA",
    "tecnica": "ACQUERELLO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 190,
    "immagine": "Opera190.png",
    "autore": "JOHN CONSTABLE",
    "titolo": "FLATFORD, DEDHAM VALE",
    "tecnica": "MATITA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 191,
    "immagine": "Opera191.png",
    "autore": "WILLIAM TURNER",
    "titolo": "VEDUTA DEL BACINO DI SAN MARCO",
    "tecnica": "ACQUERELLO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 192,
    "immagine": "Opera192.png",
    "autore": "DANTE GABRIEL ROSSETTI",
    "titolo": "RITRATTO DI JANE BURDEN",
    "tecnica": "PENNA E INCHIOSTRO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 193,
    "immagine": "Opera193.png",
    "autore": "JOHN RUSKIN",
    "titolo": "ARCATE BIZANTINE A VENEZIA",
    "tecnica": "PENNA ACQUERELLO E GUAZZO SU TRACCIA DI MATITA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 194,
    "immagine": "Opera194.png",
    "autore": "EUGENE DELACROIX",
    "titolo": "TIGRE",
    "tecnica": "ACQUERELLO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 195,
    "immagine": "Opera195.png",
    "autore": "HONORE DAUMIER",
    "titolo": "I CONOSCITORI DI QUADRI",
    "tecnica": "PENNA E PENNELLO, INCHIOSTRO GRIGIO E BRUNO RIALZATO DI BIANCO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 196,
    "immagine": "Opera196.png",
    "autore": "JEAN FRANCOIS MILLET",
    "titolo": "GUARDIANA DI PECORE",
    "tecnica": "GESSETTO NERO E GESSETTI COLORATI",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 197,
    "immagine": "Opera197.png",
    "autore": "CAMILLE COROT",
    "titolo": "LA FORESTA DI COMPIEGNE",
    "tecnica": "CRAYON E PENNA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 198,
    "immagine": "Opera198.png",
    "autore": "WINSLOW HOMER",
    "titolo": "LA RETE DELLE ARINGHE",
    "tecnica": "MATITA NERA E GESSETTO BIANCO SU CARTA VERDE",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 199,
    "immagine": "Opera199.png",
    "autore": "GUSTAVE COURBET",
    "titolo": "AUTORITRATTO CON LA PIPA",
    "tecnica": "CARBONCINO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 200,
    "immagine": "Opera200.png",
    "autore": "EUGENE BOUDIN",
    "titolo": "DAME SULLA SPIAGGIA",
    "tecnica": "ACQUERELLO SU INDICAZIONI A MATITA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 201,
    "immagine": "Opera201.png",
    "autore": "ANTONIO FONTANESI",
    "titolo": "COPPIA VICINO AGLI ALBERI",
    "tecnica": "MATITA NERA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 202,
    "immagine": "Opera202.png",
    "autore": "GIOVANNI FATTORI",
    "titolo": "SUORA",
    "tecnica": "MATITA SU CARTONCINO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 203,
    "immagine": "Opera203.png",
    "autore": "GIOVANNI SEGANTINI",
    "titolo": "DUE DONNE IN PAESAGGIO",
    "tecnica": "MATITA NERA, MATITE COLORATE E GESSETTO BIANCO",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 204,
    "immagine": "Opera204.png",
    "autore": "TRANQUILLO CREMONA",
    "titolo": "QUATTRO FANCIULLE",
    "tecnica": "ACQUERELLO SU CARTA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 205,
    "immagine": "Opera205.png",
    "autore": "GUGLIELMO CIARDI",
    "titolo": "PRIME NEVI",
    "tecnica": "MATITA RIALZATA DI BIANCO SU CARTA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 206,
    "immagine": "Opera206.png",
    "autore": "MARIANO FORTUNY",
    "titolo": "RITRATTO DELLA MOGLIE A PORTICI",
    "tecnica": "ACQUERELLO RIALZATO DI BIANCO SU TRACCIA DI MATITA",
    "periodo": "DAL NEOCLASSICISMO AL REALISMO",
    "parte": 2
  },
  {
    "id": 207,
    "immagine": "Opera207.png",
    "autore": "CLAUDE MONET",
    "titolo": "PESCATORI IN DUE BARCE",
    "tecnica": "CRAYON NERO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 208,
    "immagine": "Opera208.png",
    "autore": "EDUARD MANET",
    "titolo": "DONNA NUDA SEDUTA",
    "tecnica": "SANGUIGNA",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 209,
    "immagine": "Opera209.png",
    "autore": "EDGAR DEGAS",
    "titolo": "BALLERINE",
    "tecnica": "CRYAN NERO, PASTELLO E TEMPERA",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 210,
    "immagine": "Opera210.png",
    "autore": "EDGAR DEGAS",
    "titolo": "DOPO IL BAGNO",
    "tecnica": "CARBONCINO E PASTELLO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 211,
    "immagine": "Opera211.png",
    "autore": "PIERRE AUGUSTE RENOIR",
    "titolo": "STUDIO PER LE BAGNANTI",
    "tecnica": "MATITA SANGUIGNA, GESSETTO NERO E BIANCO RITOCCATO A PENNELLO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 212,
    "immagine": "Opera 212.png",
    "autore": "PIERRE AUGUSTE RENOIR",
    "titolo": "MADEMOISELLE JEANNE SAMARY",
    "tecnica": "PASTELLO SU CARTA",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 213,
    "immagine": "Opera 213.png",
    "autore": "PAUL CÉZANNE",
    "titolo": "NUDO FEMMINILE, FIGURE E AUTORITRATTO",
    "tecnica": "UN GESSETTO NERO E MATITA SU CARTA BIANCA",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 214,
    "immagine": "Opera 214.png",
    "autore": "PAUL CÉZANNE",
    "titolo": "CHATEAU NOIR",
    "tecnica": "MATITA E ACQUERELLO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 215,
    "immagine": "Opera 215.png",
    "autore": "JAMES WHISTLER",
    "titolo": "DONNA CHE LEGGE",
    "tecnica": "CARBONCINO E GESSETTO BIANCO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 216,
    "immagine": "Opera 216.png",
    "autore": "GIUSEPPE DE NITTIS",
    "titolo": "PIOPPI NELL'ACQUA",
    "tecnica": "INCHIOSTRO DI CHINA E ACQUERELLO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 217,
    "immagine": "Opera 217.png",
    "autore": "FEDERICO ZANDOMENEGHI",
    "titolo": "LA MANICA A GIGOT",
    "tecnica": "PASTELLO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 218,
    "immagine": "Opera 218.png",
    "autore": "ODILON REDON",
    "titolo": "IL RAGNO",
    "tecnica": "CARBONCINO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 219,
    "immagine": "Opera 219.png",
    "autore": "GEORGES SEURAT",
    "titolo": "DONNA DI PROFILO",
    "tecnica": "MATITA CONTÈ",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 220,
    "immagine": "Opera 220.png",
    "autore": "AUGUSTE RODIN",
    "titolo": "NUDO FEMMINILE",
    "tecnica": "MATITA E ACQUERELLO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 221,
    "immagine": "Opera 221.png",
    "autore": "PAUL GAUGUIN",
    "titolo": "NAVE NAVE FENUA",
    "tecnica": "PENNELLO CON INCHIOSTRO NERO E ACQUERELLO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 222,
    "immagine": "Opera 222.png",
    "autore": "PAUL GAUGUIN",
    "titolo": "RITRATTO DI GIOVANE CONTADINA BRETONE",
    "tecnica": "MATITA, CREO NERO E ROSSO, ACQUERELLO NERO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 223,
    "immagine": "Opera 223.png",
    "autore": "VINCENT VAN GOGH",
    "titolo": "CANALE CON LAVANDAIE",
    "tecnica": "PENNA INCHIOSTRO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 224,
    "immagine": "Opera 224.png",
    "autore": "VINCENT VAN GOGH",
    "titolo": "RITRATTO DI RAGAZZA SPETTINATA",
    "tecnica": "GESSETTO NERO E PENNELLO CON ACQUERELLO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 225,
    "immagine": "Opera 225.png",
    "autore": "HENRI DE TOULOUSE LAUTREC",
    "titolo": "YVETTE GUILBERT RINGRAZIA IL PUBBLICO",
    "tecnica": "CRAYON E ACQUERELLO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 226,
    "immagine": "Opera 226.png",
    "autore": "HENRI DE TOULOUSE LAUTREC",
    "titolo": "MADEMOISELLE COCYTE",
    "tecnica": "MATITA E SANGUIGNA RIALZATA IN BIANCO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 227,
    "immagine": "Opera 227.png",
    "autore": "FERDINAND HODLER",
    "titolo": "RITRATTO DI FANCIULLA",
    "tecnica": "MATITA",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 228,
    "immagine": "Opera 228.png",
    "autore": "AUBREY BEARDSLEY",
    "titolo": "J'AI BAISÉ TA BOUCHE",
    "tecnica": "PENNA E INCHIOSTRO",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 229,
    "immagine": "Opera 229.png",
    "autore": "GEORGES BARBIER",
    "titolo": "LE TAPIS PERSAN",
    "tecnica": "GUAZZO ORO E ARGENTO SU TRACCIA DI MATITA",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 230,
    "immagine": "Opera 230.png",
    "autore": "GUSTAV KLIMT",
    "titolo": "DONNA CHE LEGGE DI PROFILO",
    "tecnica": "MATITA",
    "periodo": "IMPRESSIONISMO E POST-IMPRESSIONISMO",
    "parte": 2
  },
  {
    "id": 231,
    "immagine": "Opera 231.png",
    "autore": "HENRI MATISSE",
    "titolo": "SPAGNOLA CON VENTAGLIO",
    "tecnica": "CARBONCINO E SFUMINO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 232,
    "immagine": "Opera 232.png",
    "autore": "GEORGES BRAQUE",
    "titolo": "NATURA MORTA",
    "tecnica": "SANGUIGNA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 233,
    "immagine": "Opera 233.png",
    "autore": "PABLO PICASSO",
    "titolo": "DUE FIGURE FEMMINILI",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 234,
    "immagine": "Opera 234.png",
    "autore": "PABLO PICASSO",
    "titolo": "FERDINANDE OLIVIER",
    "tecnica": "CARBONCINO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 235,
    "immagine": "Opera 235.png",
    "autore": "PABLO PICASSO",
    "titolo": "GUERNICA",
    "tecnica": "MATITA SU CARTA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 236,
    "immagine": "Opera 236.png",
    "autore": "FERDINAND LEGER",
    "titolo": "LA MÉRE ET L'ENFANT",
    "tecnica": "CRAYON",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 237,
    "immagine": "Opera 237.png",
    "autore": "AMEDEO MODIGLIANI",
    "titolo": "DONNA NUDA SEDUTA",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 238,
    "immagine": "Opera 238.png",
    "autore": "CASIMIR MALEVIC",
    "titolo": "VANNO IN CHIESA",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 239,
    "immagine": "opera 239.png",
    "autore": "OSKAR KOKOSCHKA",
    "titolo": "STUDIO PER IL CONCERTO",
    "tecnica": "MATITA LITOGRAFICA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 240,
    "immagine": "Opera240.png",
    "autore": "GEORGES ROUAULT",
    "titolo": "PROSTITUTA DAVANTI ALLO SPECCHIO",
    "tecnica": "ACQUERELLO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 241,
    "immagine": "Opera241.png",
    "autore": "CARLO CARRÀ",
    "titolo": "TESTA DI FANCIULLA",
    "tecnica": "INCHIOSTRO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 242,
    "immagine": "Opera242.png",
    "autore": "MARC CHAGALL",
    "titolo": "L'ANNIVERSARIO",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 243,
    "immagine": "Opera243.png",
    "autore": "UMBERTO BOCCIONI",
    "titolo": "DINAMISMO DI UN CICLISTA",
    "tecnica": "PENNA E PENNELLO CON TRATTEGGI DI INCHIOSTRO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 244,
    "immagine": "Opera244.png",
    "autore": "GINO ROSSI",
    "titolo": "COSTUMI BRETONI",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 245,
    "immagine": "Opera245.png",
    "autore": "GIORGIO MORANDI",
    "titolo": "NATURA MORTA",
    "tecnica": "ACQUERELLO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 246,
    "immagine": "Opera246.png",
    "autore": "PIO SEMEGHINI",
    "titolo": "BAMBINA CON FRUTTA IN GREMBO",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 247,
    "immagine": "Opera247.png",
    "autore": "FILIPPO DE PISIS",
    "titolo": "RITRATTO DI PIRANDELLO",
    "tecnica": "INCHIOSTRO ACQUERELLATO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 248,
    "immagine": "Opera248.png",
    "autore": "ALBERTO VIANI",
    "titolo": "FIGURA",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 249,
    "immagine": "Opera249.png",
    "autore": "GIACOMO MANZÙ",
    "titolo": "IL PITTORE E LA MODELLA",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 250,
    "immagine": "Opera250.png",
    "autore": "MARINO MARINI",
    "titolo": "COMPOSIZIONE IN ROSSO",
    "tecnica": "TEMPERA SU CARTONCINO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 251,
    "immagine": "Opera251.png",
    "autore": "PAUL KLEE",
    "titolo": "SIMBIOSI",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 252,
    "immagine": "Opera252.png",
    "autore": "VASILIJ KANDINSKIJ",
    "titolo": "STUDIO IMPROVVISAZIONE 160 B",
    "tecnica": "ACQUERELLO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 253,
    "immagine": "Opera253.png",
    "autore": "PIET MONDRIAN",
    "titolo": "IL MARE",
    "tecnica": "CARBONCINO E GUAZZO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 254,
    "immagine": "Opera254.png",
    "autore": "MAX ERNST",
    "titolo": "MATERNITÀ",
    "tecnica": "MATITA RIALZATA DI GESSETTO BIANCO SU CARTA ARANCIONE",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 255,
    "immagine": "Opera255.png",
    "autore": "JUAN MIRÒ",
    "titolo": "LA FAMIGLIA",
    "tecnica": "GESSETTO NERO E ROSSO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 256,
    "immagine": "Opera256.png",
    "autore": "SALVADOR DALÌ",
    "titolo": "STUDIO PER LA MADONNA DI PORT LLIGAT",
    "tecnica": "INCHIOSTRO DI CHINA E ACQUERELLO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 257,
    "immagine": "Opera257.png",
    "autore": "ANTON ZORAN MUSIC",
    "titolo": "DONNE CON ANIMALI",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 258,
    "immagine": "Opera258.png",
    "autore": "GRAHAM SUTHERLAND",
    "titolo": "CERVO VOLANTE E LAMPADINA",
    "tecnica": "MATITA CONTÉ E ACQUERELLO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 259,
    "immagine": "Opera259.png",
    "autore": "SCIPIONE",
    "titolo": "IL CARDINALE",
    "tecnica": "PENNA E INCHIOSTRO NERO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 260,
    "immagine": "Opera260.png",
    "autore": "ALBERTO GIACOMETTI",
    "titolo": "TESTA D'UOMO IN UN INTERNO",
    "tecnica": "MATITA LITOGRAFICA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 261,
    "immagine": "Opera261.png",
    "autore": "MAX BECKMANN",
    "titolo": "CARNEVALE A NAPOLI",
    "tecnica": "PENNELLO E INCHIOSTRO INDIANO, CRAYON NERO E GESSETTO BIANCO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 262,
    "immagine": "Opera262.png",
    "autore": "HENRY MOORE",
    "titolo": "MADONNA COL BAMBINO",
    "tecnica": "ACQUERELLO GRIGIO, MATITA GRASSA, PENNA, INCHIOSTRO E CARBONCINO, RIALZATO DI BIANCO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 263,
    "immagine": "Opera263.png",
    "autore": "GEORGE GROSZ",
    "titolo": "THE SURVIVOR",
    "tecnica": "PENNA E INCHIOSTRO INDIANO",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  },
  {
    "id": 264,
    "immagine": "Opera264.png",
    "autore": "ROY LIECHTENSTEIN",
    "titolo": "UN UOMO QUALSIASI",
    "tecnica": "MATITA",
    "periodo": "DAL CUBISMO AD OGGI",
    "parte": 2
  }
];
