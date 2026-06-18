// Array contenente i dati delle 107 opere d'arte
const OPERE_DATA = [
  {
    "id": 1,
    "immagine": "Opera1.png",
    "autore": "PITTORE IRLANDESE",
    "titolo": "BOOK OF KELLS, CAPOLETTERA",
    "tecnica": "TEMPERA SU PERGAMENA"
  },
  {
    "id": 2,
    "immagine": "Opera2.png",
    "autore": "PITTORE DI REIMS",
    "titolo": "SALTERIO DI UTRECHT",
    "tecnica": "PENNA E INCHIOSTRO BRUNO"
  },
  {
    "id": 3,
    "immagine": "Opera3.png",
    "autore": "PITTORE AUSTRIACO",
    "titolo": "IL VENERABILE BEDA",
    "tecnica": "PENNA E INCHIOSTRO BLU E ROSSO E ACQUERELLO SU PERGAMENA"
  },
  {
    "id": 4,
    "immagine": "Opera4.png",
    "autore": "TADDEO GADDI",
    "titolo": "LA PRESENTAZIONE DELLA VERGINE AL TEMPIO",
    "tecnica": "PENNELLO, ACQUERELLO, LUMEGGIATURE BIANCHE E ORO SU CARTA PREPARATA VERDE"
  },
  {
    "id": 5,
    "immagine": "Opera5.png",
    "autore": "SEGUACE DI SIMONE MARTINI",
    "titolo": "ALLEGORIA DELLA TEMPERANZA",
    "tecnica": "PUNTA D'ARGENTO SU C.P. IN ROSSO"
  },
  {
    "id": 6,
    "immagine": "Opera6.png",
    "autore": "MAESTRO DEL PARAMENTO DI NARBONNE",
    "titolo": "ARCIERE",
    "tecnica": "PENNELLO E INCHIOSTRO NERO SU PERGAMENA"
  },
  {
    "id": 7,
    "immagine": "Opera7.png",
    "autore": "L'EDUCAZIONE DI MARIA",
    "titolo": "PITTORE TEDESCO",
    "tecnica": "PENNA E INCHIOSTRO NERO"
  },
  {
    "id": 8,
    "immagine": "Opera8.png",
    "autore": "PITTORE LOMBARDO",
    "titolo": "SCENA DI CACCIA",
    "tecnica": "PENNA, PENNELLO E INCHIOSTRO RIALZATO DI BIANCO SU CARTA PREPARATA VERDE"
  },
  {
    "id": 9,
    "immagine": "Opera9.png",
    "autore": "GENTILE DA FABRIANO",
    "titolo": "NUDI FEMMNILI E ALTRE FIGURE",
    "tecnica": "PENNA SU PERGAMENA"
  },
  {
    "id": 10,
    "immagine": "Opera10.png",
    "autore": "GIOVANNINO DE GRASSI",
    "titolo": "DUE DAME CON CETRA",
    "tecnica": "INCHIOSTRO E ACQUERELLO SU PERGAMENA"
  },
  {
    "id": 11,
    "immagine": "Opera11.png",
    "autore": "PISANELLO",
    "titolo": "STDI DI NUDO E UN'ANNUNCIAZIONE",
    "tecnica": "PENNA E INCHIOSTRO"
  },
  {
    "id": 12,
    "immagine": "Opera12.png",
    "autore": "PISANELLO",
    "titolo": "STUDI DI COSTUME",
    "tecnica": "PENNA INCHIOSTRO E ACQUERELLO"
  },
  {
    "id": 13,
    "immagine": "Opera13.png",
    "autore": "DONATELLO",
    "titolo": "GIOVANE CORONATO D'ALLORO",
    "tecnica": "PENNA E INCHIOSTRO BRUNO, ACQUERELLO GRIGIO"
  },
  {
    "id": 14,
    "immagine": "Opera14.png",
    "autore": "PAOLO UCCELLLO",
    "titolo": "PROFILO CON TURBANTE",
    "tecnica": "BISTRO E ACQUERELLO SU CARTA TINTA"
  },
  {
    "id": 15,
    "immagine": "Opera15.png",
    "autore": "BENOZZO GOZZOLI",
    "titolo": "TESTA DI SAN LORENZO",
    "tecnica": "PUNTA D'ARGENTO RIALZATA DI BIACCA SU C.P. ARANCIONE"
  },
  {
    "id": 16,
    "immagine": "Opera16.png",
    "autore": "ANTONIO POLLAIOLO",
    "titolo": "CAVALIERE E NEMICO CADUTO",
    "tecnica": "PENNA E BISTRO SU CARTA TINTA"
  },
  {
    "id": 17,
    "immagine": "Opera17.png",
    "autore": "BOTTICELLI",
    "titolo": "ABBONDANZA E AUTUNNO",
    "tecnica": "PENNA E INCHIOSTRO, ACQUERELLO BRUNO, RIALZATO DI BIANCO SU TRACCIA DI CARBONCINO, C.P. ROSA"
  },
  {
    "id": 18,
    "immagine": "Opera18.png",
    "autore": "VERROCCHIO",
    "titolo": "TESTA DI DONNA",
    "tecnica": "PUNTA METALLICA RIALZATA DI BIANCO"
  },
  {
    "id": 19,
    "immagine": "Opera19.png",
    "autore": "FILIPPINO LIPPI",
    "titolo": "TESTA DI VECCHIO",
    "tecnica": "PUNTA METALLICA RIALZATA DI BIANCO SU C.P. ARDESIA"
  },
  {
    "id": 20,
    "immagine": "Opera20.png",
    "autore": "LORENZO DI CREDI",
    "titolo": "TESTA DI DONNA",
    "tecnica": "PUNTA D'ARGENTO E LUMEGGIATURE A BIACCA SU CARTA CREMA"
  },
  {
    "id": 21,
    "immagine": "Opera21.png",
    "autore": "PERUGINO",
    "titolo": "STUDI DI UOMINI E UNA MADONNA",
    "tecnica": "PUNTA D'ARGENTO E LUMEGGIATURE A BIACCA"
  },
  {
    "id": 22,
    "immagine": "Opera22.png",
    "autore": "LUCA SIGNORELLI",
    "titolo": "ERCOLE E ANTEO",
    "tecnica": "GESSETTO GRIGIO"
  },
  {
    "id": 23,
    "immagine": "Opera23.png",
    "autore": "JACOPO BELLINI",
    "titolo": "FLAGELLAZIONE DI CRISTO",
    "tecnica": "PENNA E INCHIOSTRO BRUNO"
  },
  {
    "id": 24,
    "immagine": "Opera24.png",
    "autore": "ANDREA MANTEGNA",
    "titolo": "MARTE VENERE E DIANA",
    "tecnica": "PENNA, INCHIOSTRO E ACQUERELLO BRUNO CON TOCCHI DI BIANCO E DI COLORE"
  },
  {
    "id": 25,
    "immagine": "Opera25.png",
    "autore": "ERCOLE DE ROBERTI",
    "titolo": "STUDI PER UNA CROCIFISSIONE",
    "tecnica": "PENNA E PENNELLO BRUNO RIALZATO DI BIANCO SU CARTA GRIGIA"
  },
  {
    "id": 26,
    "immagine": "Opera26.png",
    "autore": "MARCO ZOPPO",
    "titolo": "SEI STUDI DI MADONNA COL BAMBINO",
    "tecnica": "PENNA, INCHIOSTRO BRUNO E ACQUERELLO SU CARTA COLORATA ROSA"
  },
  {
    "id": 27,
    "immagine": "Opera27.png",
    "autore": "GIOVANNI BELLINI",
    "titolo": "RITRATTO DI GENTILE BELLINI",
    "tecnica": "MATITA NERA"
  },
  {
    "id": 28,
    "immagine": "Opera28.png",
    "autore": "GIOVANNI BELLINI",
    "titolo": "PIETÀ",
    "tecnica": "PENNA E INCHIOSTRO BRUNO"
  },
  {
    "id": 29,
    "immagine": "Opera29.png",
    "autore": "GENTILE BELLINI",
    "titolo": "PROCESSIONE IN CAMPO SAN LIO",
    "tecnica": "PENNA E INCHIOSTRO BRUNO"
  },
  {
    "id": 30,
    "immagine": "Opera30.png",
    "autore": "VITTORE CARPACCIO",
    "titolo": "SOGNO DI SANT'ORSOLA",
    "tecnica": "PENNA E PENNELLO CON INCHIOSTRO BRUNO SU CARTA GIALLINA"
  },
  {
    "id": 31,
    "immagine": "Opera31.png",
    "autore": "VITTORE CARPACCIO",
    "titolo": "TESTA DI GIOVANE",
    "tecnica": "GESSETTO NERO, PENNELLO E INCHIOSTRO BRUNO RIALZATO A BIACCA SU CARTA AZZURRA"
  },
  {
    "id": 32,
    "immagine": "Opera32.png",
    "autore": "JAN VAN EYCK",
    "titolo": "IL CARDINALE NICOLA ALBERGATI",
    "tecnica": "PUNTA D'ARGENTO"
  },
  {
    "id": 33,
    "immagine": "Opera33.png",
    "autore": "ANTONELLO DA MESSINA",
    "titolo": "RITRATTO DI GIOVANE",
    "tecnica": "CARBONCINO SFUMATO SU CARTA BRUNA"
  },
  {
    "id": 34,
    "immagine": "Opera34.png",
    "autore": "JEAN FOUQET",
    "titolo": "RITRATTO DI ECCLESIASTICO",
    "tecnica": "PUNTA D'ARGENTO"
  },
  {
    "id": 35,
    "immagine": "Opera35.png",
    "autore": "ROGIER VAN DER WEYDEN",
    "titolo": "MADONNA COL BAMBINO",
    "tecnica": "PUNTA D'ARGENTO"
  },
  {
    "id": 36,
    "immagine": "Opera36.png",
    "autore": "KONRAD WITZ",
    "titolo": "MADONNA CON BAMBINO",
    "tecnica": "PENNA E TINTEGGIATURA IN INCHIOSTRO DI CHINA, ACQUERELLO"
  },
  {
    "id": 37,
    "immagine": "Opera37.png",
    "autore": "BOSCH",
    "titolo": "ALBERO FANTASTICO IN FORMA D'UOMO",
    "tecnica": "PENNA E BISTRO"
  },
  {
    "id": 38,
    "immagine": "Opera38.png",
    "autore": "DONATO BRAMANTE",
    "titolo": "SAN CRISTOFORO",
    "tecnica": "PUNTA D'ARGENTO RIALZATA A BIACCA SU CARTA AZZURRA"
  },
  {
    "id": 39,
    "immagine": "Opera39.png",
    "autore": "LEONARDO DA VINCI",
    "titolo": "SCENE DI BATTAGLIA CON CAVALIERI",
    "tecnica": "PENNA, INCHIOSTRO MARRONE"
  },
  {
    "id": 40,
    "immagine": "Opera40.png",
    "autore": "LEONARDO DA VINCI",
    "titolo": "BUSTO DI PROFILO, SCHEMA DELLE MISURE DELLA TESTA UMANA, STUDIO DI CAVALLO E CAVALIERI",
    "tecnica": "PENNA, MATITA NERA, SANGUIGNA E INCHIOSTRO MARRONE"
  },
  {
    "id": 41,
    "immagine": "Opera41.png",
    "autore": "LEONARDO DA VINCI",
    "titolo": "STUDIO DI PANNEGGIO",
    "tecnica": "PUNTA METALLICA, CARBONCINO, BISTRO E BIACCA"
  },
  {
    "id": 42,
    "immagine": "Opera42.png",
    "autore": "LEONARDO DA VINCI",
    "titolo": "AUTORITRATTO",
    "tecnica": "SANGUIGNA"
  },
  {
    "id": 43,
    "immagine": "Opera43.png",
    "autore": "MICHELANGELO",
    "titolo": "TESTA DI PROFILO",
    "tecnica": "SANGUIGNA"
  },
  {
    "id": 44,
    "immagine": "Opera44.png",
    "autore": "MICHELANGELO",
    "titolo": "CROCIFISSIONE",
    "tecnica": "GESSETTO NERO E BIACCA"
  },
  {
    "id": 45,
    "immagine": "Opera45.png",
    "autore": "RAFFAELLO",
    "titolo": "SANTA CATERINA D'ALESSANDRIA",
    "tecnica": "CARBONCINO RIALZATO IN BIANCO"
  },
  {
    "id": 46,
    "immagine": "Opera46.png",
    "autore": "RAFFAELLO",
    "titolo": "TESTA D'ANGELO",
    "tecnica": "CARBONCINO RIALZATO IN BIANCO"
  },
  {
    "id": 47,
    "immagine": "Opera47.png",
    "autore": "RAFFAELLO",
    "titolo": "DONNA CHE LEGGE UN BAMBINO",
    "tecnica": "PUNTA METALLICA, RIALZATA DI BIANCO"
  },
  {
    "id": 48,
    "immagine": "Opera48.png",
    "autore": "ANDREA DEL SARTO",
    "titolo": "TESTA DI PROFILO",
    "tecnica": "SANGUIGNA"
  },
  {
    "id": 49,
    "immagine": "Opera49.png",
    "autore": "FRA' BARTOLOMEO",
    "titolo": "TESTA DI UOMO ANZIANO",
    "tecnica": "CARBONCINO"
  },
  {
    "id": 50,
    "immagine": "Opera50.png",
    "autore": "PONTORMO",
    "titolo": "DUE DONNE VELATE",
    "tecnica": "SANGUIGNA"
  },
  {
    "id": 51,
    "immagine": "Opera51.png",
    "autore": "DOMENICO BECCAFUMI",
    "titolo": "NUDO DISTESO",
    "tecnica": "MATITA NERA, PENNELLO E BISTRO, LUMEGGIATURE A BIACCA"
  },
  {
    "id": 52,
    "immagine": "Opera52.png",
    "autore": "PARMIGIANINO",
    "titolo": "LE NOZZE MISTICHE DI SANTA CATERINA",
    "tecnica": "PENNA E INCHIOSTRO BRUNO, ACQUERELLATE IN SEPPIA, LUMEGGIATURE A BIACCA SU CARTA TINTA IN ROSA"
  },
  {
    "id": 53,
    "immagine": "Opera53.png",
    "autore": "CORREGGIO",
    "titolo": "EVA",
    "tecnica": "SANGUIGNA RIALZATA IN BIANCO"
  },
  {
    "id": 54,
    "immagine": "Opera54.png",
    "autore": "NICOLÒ DELL'ABATE",
    "titolo": "GIOVANE CHE ABBRACCIA UNA DONNA IGNUDA",
    "tecnica": "PENNA E BISTRO CON LUMEGGIATURE IN BIANCO SU CARTA BRUNA"
  },
  {
    "id": 55,
    "immagine": "Opera55.png",
    "autore": "FEDERICO BAROCCI",
    "titolo": "TESTA DI PROFILO",
    "tecnica": "TRE GESSETTI SU CARTA AZZURRA"
  },
  {
    "id": 56,
    "immagine": "Opera56.png",
    "autore": "LUCA CAMBIASO",
    "titolo": "VENERE TRATTIENE ADONE",
    "tecnica": "PENNA E INCHIOSTRO SEPPIA SU CARTA"
  },
  {
    "id": 57,
    "immagine": "Opera57.png",
    "autore": "GIORGIONE",
    "titolo": "PASTORELLO",
    "tecnica": "SANGUIGNA"
  },
  {
    "id": 58,
    "immagine": "Opera58.png",
    "autore": "LORENZO LOTTO",
    "titolo": "TESTA DI DONNA",
    "tecnica": "PUNTA D'ARGENTO PENNELLATO A BIACCA"
  },
  {
    "id": 59,
    "immagine": "Opera59.png",
    "autore": "LORENZO LOTTO",
    "titolo": "MARTIRIO DI UN SANTO",
    "tecnica": "PENNA, INCHIOSTRO BRUNO, MATITA NERA"
  },
  {
    "id": 60,
    "immagine": "Opera60.png",
    "autore": "LORENZO LOTTO",
    "titolo": "PRELATO NELLO STUDIO",
    "tecnica": "PENNA, PENNELLO E INCHIOSTRO BRUNO CON LUMEGGIATURE A BIACCA"
  },
  {
    "id": 61,
    "immagine": "Opera61.png",
    "autore": "SEBASTIANO DEL PIOMBO",
    "titolo": "DONNA NUDA IN PIEDI",
    "tecnica": "GESSETTO NERO RIALZATO IN BIANCO SU CARTA AZZURRA"
  },
  {
    "id": 62,
    "immagine": "Opera62.png",
    "autore": "TIZIANO VECELLIO",
    "titolo": "RITRATTO DI GIOVANE DONNA",
    "tecnica": "GESSETTO NERO RIALZATO DI GESSETTO BIANCO"
  },
  {
    "id": 63,
    "immagine": "Opera63.png",
    "autore": "TIZIANO VECELLIO",
    "titolo": "COPPIA MITOLOGICA ABBRACCIATA",
    "tecnica": "CARBONCINO LUMEGGIATURE A BIACCA"
  },
  {
    "id": 64,
    "immagine": "Opera64.png",
    "autore": "TIZIANO VECELLIO",
    "titolo": "PAESAGGIO CON DONNA NUDA DORMIENTE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO CON LUMEGGIATURE A BIACCA"
  },
  {
    "id": 65,
    "immagine": "Opera65.png",
    "autore": "DOMENICO CAMPAGNOLA",
    "titolo": "GIUDIZIO DI PARIDE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO"
  },
  {
    "id": 66,
    "immagine": "Opera66.png",
    "autore": "PORDENONE",
    "titolo": "MARTIRIO DI SAN PIETRO MARTIRE",
    "tecnica": "SANGUIGNA"
  },
  {
    "id": 67,
    "immagine": "Opera67.png",
    "autore": "ANDREA SCHIAVONE",
    "titolo": "ANNUNCIAZIONE",
    "tecnica": "GESSETTO NERO, PENNELLO E INCHIOSTRO BRUNO RIALZATO DI BIANCO"
  },
  {
    "id": 68,
    "immagine": "Opera68.png",
    "autore": "JACOPO BASSANO",
    "titolo": "TESTA DI DONNA",
    "tecnica": "PENNELLO E OLIO BRUNO, GRIGIO ROSSO E BIANCO"
  },
  {
    "id": 69,
    "immagine": "Opera69.png",
    "autore": "JACOPO BASSANO",
    "titolo": "FLAGELLAZIONE",
    "tecnica": "GESSETTI COLORATI SU CARTA AZZURRA"
  },
  {
    "id": 70,
    "immagine": "Opera70.png",
    "autore": "JACOPO BASSANO",
    "titolo": "DIANA",
    "tecnica": "GESSETTO NERO RIALZATO DI BIANCO SU CARTA AZZURRA"
  },
  {
    "id": 71,
    "immagine": "Opera71.png",
    "autore": "JACOPO TINTORETTO",
    "titolo": "ARCIERE",
    "tecnica": "GESSETTO NERO SU CARTA MARRONCINA"
  },
  {
    "id": 72,
    "immagine": "Opera72.png",
    "autore": "JACOPO TINTORETTO",
    "titolo": "VENERE, VULCANO E MARTE",
    "tecnica": "PENNA E PENNELLO, INCHIOSTRO NERO E LUMEGGIATURE BIACCA SU CARTA AZZURRA"
  },
  {
    "id": 73,
    "immagine": "Opera73.png",
    "autore": "DOMENICO TINTORETTO",
    "titolo": "SCENA DI CONTADINI",
    "tecnica": "CARBONCINO E PENNELLO, TEMPERA GRIGIA E BIACCA SU CARTA AZZURRINA"
  },
  {
    "id": 74,
    "immagine": "Opera74.png",
    "autore": "EL GRECO",
    "titolo": "STUDIA DAL GIORNO DI MICHELANGELO",
    "tecnica": "GESSETTO NERO E BIANCO E ACQUERELLO SU CARTA AZZURRA"
  },
  {
    "id": 75,
    "immagine": "Opera75.png",
    "autore": "JACOPO PALMA IL GIOVANE",
    "titolo": "DEPOSIZIONE",
    "tecnica": "PENNA E ACQUERELLO RIALZATO CON ORO SU CARTA GRIGIO VERDASTRA"
  },
  {
    "id": 76,
    "immagine": "Opera76.png",
    "autore": "PAOLO VERONESE",
    "titolo": "FOGLIO DI STUDI",
    "tecnica": "PENNA E INCHIOSTRO BRUNO"
  },
  {
    "id": 77,
    "immagine": "Opera77.png",
    "autore": "PAOLO VERONESE",
    "titolo": "LA VITTORIA",
    "tecnica": "PENNA E BISTRO CON LUMEGGIATURE BIANCHE SU CARTA PREPARATA GRIGIO O AZZURRO"
  },
  {
    "id": 78,
    "immagine": "Opera78.png",
    "autore": "PAOLO VERONESE",
    "titolo": "TESTA DI DONNA",
    "tecnica": "GESSETTO NERO E BIANCO SU CARTA AZZURRA"
  },
  {
    "id": 79,
    "immagine": "Opera79.png",
    "autore": "CARLETTO CALIARI",
    "titolo": "RITRATTO D'UOMO",
    "tecnica": "GESSETTO NERO, BRUNO E ROSSO, TRACCE DI GESSETTO BIANCO"
  },
  {
    "id": 80,
    "immagine": "Opera80.png",
    "autore": "FEDERICO ZUCCARI",
    "titolo": "TADDEO ZUCCARI GIOVINETTO IN CASA DI GIOVANNI PIERO",
    "tecnica": "PENNA, PENNELLO E INCHIOSTRO BRUNO"
  },
  {
    "id": 81,
    "immagine": "Opera81.png",
    "autore": "MARTIN SCHONGAUER",
    "titolo": "MADONNA COL BAMBINO E IL GAROFANO",
    "tecnica": "PENNA E INCHIOSTRO BRUNO"
  },
  {
    "id": 82,
    "immagine": "Opera82.png",
    "autore": "ALBRECHT DURER",
    "titolo": "MADONNA DEGLI ANIMALI",
    "tecnica": "PENNA, INCHIOSTRO NERO E ACQUERELLO"
  },
  {
    "id": 83,
    "immagine": "Opera83.png",
    "autore": "ALBRECHT DURER",
    "titolo": "VEDUTA DI ARCO",
    "tecnica": "ACQUERELLO E GUAZZO"
  },
  {
    "id": 84,
    "immagine": "Opera84.png",
    "autore": "ALBRECHT DURER",
    "titolo": "LEPRE",
    "tecnica": "ACQUERELLO E LUMEGGIATURE A TEMPERA SU CARTA"
  },
  {
    "id": 85,
    "immagine": "Opera85.png",
    "autore": "ALBRECHT DURER",
    "titolo": "ZOLLA D'ERBA",
    "tecnica": "ACQUERELLO E GUAZZO"
  },
  {
    "id": 86,
    "immagine": "Opera86.png",
    "autore": "ALBRECHT DURER",
    "titolo": "TESTA DI DONNA",
    "tecnica": "CARBONCINO CON SFONDO IN ACQUERELLO IN VERDE OLIVA"
  },
  {
    "id": 87,
    "immagine": "Opera87.png",
    "autore": "CRANACH IL VECCHIO",
    "titolo": "TESTA DI UOMO CON BERRETTO DI PELLICCIA",
    "tecnica": "PENNELLO E ACQUERELLO, ACCENTUATO A PENNA"
  },
  {
    "id": 88,
    "immagine": "Opera88.png",
    "autore": "MATHIS GRUNEWALD",
    "titolo": "TRE TESTE",
    "tecnica": "GESSETTO NERO"
  },
  {
    "id": 89,
    "immagine": "Opera89.png",
    "autore": "BALDUNG GREIN",
    "titolo": "LA DONNA E LA MORTE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO, LUMEGGIATURE A BIACCA SU CARTA PREPARATA,BRUNA"
  },
  {
    "id": 90,
    "immagine": "Opera90.png",
    "autore": "DEUTSCH",
    "titolo": "ALLEGORIA DELLA MORTE",
    "tecnica": "PENNA E INCHIOSTRO DI CHINA RIALZATO DI BIANCO SU CARTA PREPARATA IN OCRA"
  },
  {
    "id": 91,
    "immagine": "Opera91.png",
    "autore": "URS GRAF",
    "titolo": "COPPIA VISTA DA DIETRO",
    "tecnica": "PENNA E INCHIOSTRO DI CHINA"
  },
  {
    "id": 92,
    "immagine": "Opera92.png",
    "autore": "URS GRAF",
    "titolo": "DAMA",
    "tecnica": "PENNA E INCHIOSTRO DI CHINA"
  },
  {
    "id": 93,
    "immagine": "Opera93.png",
    "autore": "LUCA DA LEIDA",
    "titolo": "FANCIULLA CHE LEGGE",
    "tecnica": "GESSETTO NERO"
  },
  {
    "id": 94,
    "immagine": "Opera94.png",
    "autore": "HOLBEIN IL GIOVANE",
    "titolo": "RITRATTO DI DAMA",
    "tecnica": "GESSETTO NERO E COLORATI"
  },
  {
    "id": 95,
    "immagine": "Opera95.png",
    "autore": "BRUEGEL IL VECCHIO",
    "titolo": "I CIECHI",
    "tecnica": "PENNA E INCHIOSTRO BRUNO"
  },
  {
    "id": 96,
    "immagine": "Opera96.png",
    "autore": "BRUEGEL IL VECCHIO",
    "titolo": "VEDUTA DI RIPA GRANDE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO"
  },
  {
    "id": 97,
    "immagine": "Opera97.png",
    "autore": "HENDRICK GOLTZIUS",
    "titolo": "DAFNE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO SU TRACCIA DI SANGUIGNA E GESSETTO NERO"
  },
  {
    "id": 98,
    "immagine": "Opera98.png",
    "autore": "HENDRICK GOLTZIUS",
    "titolo": "PAESAGGIO CON ALBERI",
    "tecnica": "PENNA, PENNELLO E INCHIOSTRO BRUNO"
  },
  {
    "id": 99,
    "immagine": "Opera99.png",
    "autore": "FRANCOIS CLOUET",
    "titolo": "RITRATTO DI GENTILUOMO",
    "tecnica": "GESSETTO NERO E ROSSO"
  },
  {
    "id": 100,
    "immagine": "Opera100.png",
    "autore": "LUDOVICO CARRACCI",
    "titolo": "QUATTRO FIGURE PER L'AFFRESCO CON SAN PIETRO IN CASA DI SIMON CUOIAIO",
    "tecnica": "SANGUIGNA E LUMEGGIATURE A BIACCA SU CARTA"
  },
  {
    "id": 101,
    "immagine": "Opera101.png",
    "autore": "AGOSTINO CARRACCI",
    "titolo": "ANCHISE E VENERE",
    "tecnica": "PENNA E INCHIOSTRO BRUNO SU TRACCIA DI SANGUIGNA"
  },
  {
    "id": 102,
    "immagine": "Opera102.png",
    "autore": "ANNIBALE CARRACCI",
    "titolo": "PAESAGGIO CON FIUME E BARCA",
    "tecnica": "PENNA E INCHIOSTRO BRUNO"
  },
  {
    "id": 103,
    "immagine": "Opera103.png",
    "autore": "ANNIBALE CARRACCI",
    "titolo": "RITRATTO DI UOMO PENSOSO",
    "tecnica": "GESSETTO NERO SU CARTA BIANCA"
  },
  {
    "id": 104,
    "immagine": "Opera104.png",
    "autore": "ANNIBALE CARRACCI",
    "titolo": "FANCIULLO MALATO",
    "tecnica": "SANGUIGNA ACQUERELLATO"
  },
  {
    "id": 105,
    "immagine": "Opera105.png",
    "autore": "CECCO BRAVO",
    "titolo": "FANCIULLA DI PROFILO",
    "tecnica": "SANGUIGNA"
  },
  {
    "id": 106,
    "immagine": "Opera106.png",
    "autore": "GUERCINO",
    "titolo": "BUSTO DI DONNA DI PROFILO",
    "tecnica": "PENNA SU CARTA AVORIO"
  },
  {
    "id": 107,
    "immagine": "Opera107.png",
    "autore": "GUERCINO",
    "titolo": "NOZZE MISTICHE DI SANTA CATERINA",
    "tecnica": "GESSETTO NERO, PENNA, PENNELLO E INCHIOSTRO BRUNO"
  }
];
