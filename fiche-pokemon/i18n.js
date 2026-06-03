/**
 * ════════════════════════════════════════════════════════════════════
 *  i18n.js — Système de traduction multilingue automatique
 *  Pokémon Cendres Antiques
 *
 *  FONCTIONNEMENT : ZÉRO modification HTML requise.
 *  Le script scanne automatiquement tous les nœuds texte du DOM et
 *  remplace les textes français connus par leur traduction.
 *
 *  UTILISATION (une seule ligne par page, dans <head>) :
 *    Depuis la racine     : <script src="fiche-pokemon/i18n.js"></script>
 *    Depuis fiche-pokemon : <script src="i18n.js"></script>
 *
 *  DEUX SYSTÈMES INDÉPENDANTS :
 *  [A] Textes UI → dictionnaire PAGE_TEXTS intégré (scan automatique)
 *  [B] Noms d'attaques, talents, Pokémon → CSV (fiche-pokemon)
 * ════════════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════════════
     LANGUES
  ══════════════════════════════════════════════════════════════════ */
  const LANGS = [
    { code: 'fr', label: 'Français', flag: '🇫🇷', csvCol: 1 },
    { code: 'en', label: 'English',  flag: '🇬🇧', csvCol: 0 },
    { code: 'de', label: 'Deutsch',  flag: '🇩🇪', csvCol: 3 },
    { code: 'es', label: 'Español',  flag: '🇪🇸', csvCol: 4 },
    { code: 'it', label: 'Italiano', flag: '🇮🇹', csvCol: 2 },
  ];

  /* ══════════════════════════════════════════════════════════════════
     [A] DICTIONNAIRE DE TRADUCTIONS — SCAN AUTOMATIQUE DU DOM
     Format : 'texte exact en français' : { en, de, es, it }
     Le français est la valeur par défaut — pas besoin de le stocker.
  ══════════════════════════════════════════════════════════════════ */
  const T = {

    // ── Navigation ──────────────────────────────────────────────────
    'Guide':          { en:'Guide',        de:'Guide',          es:'Guía',           it:'Guida'           },
    'Pokémon':        { en:'Pokémon',      de:'Pokémon',        es:'Pokémon',        it:'Pokémon'         },
    'Objets':         { en:'Items',        de:'Items',          es:'Objetos',        it:'Oggetti'         },
    'Évolutions':     { en:'Evolutions',   de:'Entwicklungen',  es:'Evoluciones',    it:'Evoluzioni'      },
    'Pokémon Fangame':{ en:'Pokémon Fangame', de:'Pokémon Fangame', es:'Pokémon Fangame', it:'Pokémon Fangame' },
    'Cendres Antiques':{ en:'Ancient Cinders', de:'Antike Asche', es:'Cenizas Antiguas', it:'Ceneri Antiche' },

    // ── Index — Hero ─────────────────────────────────────────────────
    '✦ Fangame Pokémon ✦':           { en:'✦ Pokémon Fangame ✦',    de:'✦ Pokémon Fangame ✦',   es:'✦ Pokémon Fangame ✦',   it:'✦ Pokémon Fangame ✦'   },
    'Commencer l\'aventure':         { en:'Begin the Adventure',    de:'Abenteuer starten',     es:'Comenzar la aventura',  it:'Inizia l\'avventura'   },
    'Voir les Pokémon disponibles':  { en:'See available Pokémon',  de:'Pokémon ansehen',       es:'Ver Pokémon disponibles',it:'Vedi i Pokémon'        },
    'Sous les sables brûlants d\'une terre aride, des Pokémon millénaires sommeillent.\n          L\'Égypte Antique t\'attend, ses cités, ruines, temples, pyramides et secrets enfouis.':
      { en:'Beneath the scorching sands of an arid land, ancient Pokémon slumber.\n          Ancient Egypt awaits you — its cities, ruins, temples, pyramids and buried secrets.',
        de:'Unter den sengenden Sanden einer kargen Erde schlummern jahrtausendealte Pokémon.\n          Das Alte Ägypten wartet auf dich — Städte, Ruinen, Tempel, Pyramiden und vergrabene Geheimnisse.',
        es:'Bajo las ardientes arenas de una tierra árida, duermen Pokémon milenarios.\n          El Antiguo Egipto te espera — sus ciudades, ruinas, templos, pirámides y secretos enterrados.',
        it:'Sotto le sabbie roventi di una terra arida, dormentano Pokémon millenari.\n          L\'Antico Egitto ti aspetta — le sue città, rovine, templi, piramidi e segreti sepolti.'
      },

    // ── Index — Image section ─────────────────────────────────────────
    'Une région en 2 parties':  { en:'A region in 2 parts',   de:'Eine Region in 2 Teilen', es:'Una región en 2 partes', it:'Una regione in 2 parti' },
    'Explore des cités vivantes ou abandonnées, des tombeaux secrets et des oasis enchantées.\n              Chaque partie de la région regorge de mystères que seuls les plus courageux oseront percer.':
      { en:'Explore living or abandoned cities, secret tombs and enchanted oases.\n              Each part of the region is full of mysteries that only the bravest will dare unravel.',
        de:'Erkunde lebendige oder verlassene Städte, geheime Grabmäler und verzauberte Oasen.\n              Jeder Teil der Region ist voller Geheimnisse, die nur die Mutigsten zu lüften wagen.',
        es:'Explora ciudades vivas o abandonadas, tumbas secretas y oasis encantados.\n              Cada parte de la región está llena de misterios que solo los más valientes se atreverán a descifrar.',
        it:'Esplora città vive o abbandonate, tombe segrete e oasi incantate.\n              Ogni parte della regione è piena di misteri che solo i più coraggiosi oseranno svelare.'
      },
    'Pokémon Inédits':    { en:'Brand-New Pokémon',  de:'Neue Pokémon',       es:'Pokémon Inéditos',   it:'Pokémon Inediti'   },
    'Un grand nombre de formes régionales et de créatures remaniées et inspirées de la mythologie égyptienne.\n              Liste disponible dans l\'onglet Pokémon via le menu principal.':
      { en:'A large number of regional forms and revamped creatures inspired by Egyptian mythology.\n              List available in the Pokémon tab via the main menu.',
        de:'Viele Regionalformen und überarbeitete Wesen, inspiriert von der ägyptischen Mythologie.\n              Liste im Pokémon-Tab des Hauptmenüs verfügbar.',
        es:'Un gran número de formas regionales y criaturas renovadas inspiradas en la mitología egipcia.\n              Lista disponible en la pestaña Pokémon del menú principal.',
        it:'Un gran numero di forme regionali e creature rinnovate ispirate alla mitologia egizia.\n              Lista disponibile nella scheda Pokémon del menu principale.'
      },
    'Une épopée complète': { en:'A Complete Epic',  de:'Ein vollständiges Epos', es:'Una epopeya completa', it:'Un\'epopea completa' },
    'Une histoire originale mêlant complots d\'organisations secrètes, de pharaons, magie ancienne et légendes inoubliables. \n              Tes choix forgeront le destin de l\'Égypte Pokémon.':
      { en:'An original story blending plots of secret organizations, pharaohs, ancient magic and unforgettable legends.\n              Your choices will forge the destiny of Pokémon Egypt.',
        de:'Eine originelle Geschichte voller Komplotte geheimer Organisationen, Pharaonen, alter Magie und unvergesslicher Legenden.\n              Deine Entscheidungen formen das Schicksal des Pokémon-Ägyptens.',
        es:'Una historia original que mezcla complots de organizaciones secretas, faraones, magia antigua y leyendas inolvidables.\n              Tus decisiones forjarán el destino del Egipto Pokémon.',
        it:'Una storia originale che mescola intrighi di organizzazioni segrete, faraoni, magia antica e leggende indimenticabili.\n              Le tue scelte forgeranno il destino dell\'Egitto Pokémon.'
      },

    // ── Index — Features ──────────────────────────────────────────────
    '✦ Caractéristiques ✦':  { en:'✦ Features ✦',      de:'✦ Merkmale ✦',      es:'✦ Características ✦', it:'✦ Caratteristiche ✦' },
    'Ce qui t\'attend':      { en:'What awaits you',    de:'Was dich erwartet', es:'Lo que te espera',     it:'Cosa ti aspetta'      },
    'Un fangame soigné, de la carte du monde à la dernière salle du boss.': { en:'A polished fangame, from the world map to the final boss room.', de:'Ein liebevoll gestaltetes Fangame, von der Weltkarte bis zum letzten Boss-Raum.', es:'Un fangame cuidado, desde el mapa del mundo hasta la última sala del jefe.', it:'Un fangame curato, dalla mappa del mondo all\'ultima stanza del boss.' },
    'Carte immersive':       { en:'Immersive Map',      de:'Immersive Karte',   es:'Mapa inmersivo',       it:'Mappa immersiva'      },
    'Une région entièrement dessinée à la main, inspirée du delta du Nil et des déserts de Nubie.': { en:'A fully hand-drawn region inspired by the Nile Delta and Nubian deserts.', de:'Eine vollständig handgezeichnete Region, inspiriert vom Nildelta und den nubischen Wüsten.', es:'Una región completamente dibujada a mano, inspirada en el delta del Nilo y los desiertos de Nubia.', it:'Una regione interamente disegnata a mano, ispirata al delta del Nilo e ai deserti della Nubia.' },
    'Légendaires divins':    { en:'Divine Legendaries', de:'Göttliche Legendäre', es:'Legendarios divinos', it:'Leggendari divini'    },
    'Rencontre Râ, Anubis, Bastet ou encore Tutankamon et d\'autres Pokémon légendaires.': { en:'Meet Râ, Anubis, Bastet, Tutankhamun and other legendary Pokémon.', de:'Begegne Râ, Anubis, Bastet, Tutanchamun und anderen legendären Pokémon.', es:'Conoce a Râ, Anubis, Bastet, Tutankamón y otros Pokémon legendarios.', it:'Incontra Râ, Anubis, Bastet, Tutankhamon e altri Pokémon leggendari.' },
    'Objets adaptés':        { en:'Adapted Items',      de:'Angepasste Items',  es:'Objetos adaptados',    it:'Oggetti adattati'     },
    'Des objets existants modifiés et adaptés au thème ainsi que de nouveaux objets disponibles.': { en:'Existing items modified and adapted to the theme, plus new items available.', de:'Bestehende Items überarbeitet und dem Thema angepasst, sowie neue Items verfügbar.', es:'Objetos existentes modificados y adaptados al tema, además de nuevos objetos disponibles.', it:'Oggetti esistenti modificati e adattati al tema, più nuovi oggetti disponibili.' },

    // ── Index — Quick links ────────────────────────────────────────────
    '✦ Explorer ✦':   { en:'✦ Explore ✦',       de:'✦ Erkunden ✦',    es:'✦ Explorar ✦',    it:'✦ Esplorare ✦'   },
    'Rubriques du site': { en:'Site Sections',   de:'Seitenbereiche',  es:'Secciones del sitio', it:'Sezioni del sito' },
    'Soluces, astuces et progression complète du jeu.': { en:'Walkthroughs, tips and full game progression.', de:'Lösungen, Tipps und vollständige Spielprogression.', es:'Guías, trucos y progresión completa del juego.', it:'Guide, trucchi e progressione completa del gioco.' },
    'Pokédex complet avec formes régionales et statistiques.': { en:'Complete Pokédex with regional forms and statistics.', de:'Vollständiger Pokédex mit Regionalformen und Statistiken.', es:'Pokédex completo con formas regionales y estadísticas.', it:'Pokédex completo con forme regionali e statistiche.' },
    'Tous les artefacts, amulettes et équipements trouvables.': { en:'All findable artefacts, amulets and equipment.', de:'Alle findbaren Artefakte, Amulette und Ausrüstungen.', es:'Todos los artefactos, amuletos y equipamientos disponibles.', it:'Tutti gli artefatti, amuleti e equipaggiamenti trovabili.' },
    'Emplacements, conditions d\'obtention et lore des dieux.': { en:'Locations, obtaining conditions and lore of the gods.', de:'Fundorte, Bedingungen und Lore der Götter.', es:'Ubicaciones, condiciones de obtención y trasfondo de los dioses.', it:'Posizioni, condizioni di ottenimento e lore degli dei.' },

    // ── Index — Footer ─────────────────────────────────────────────────
    'Navigation':    { en:'Navigation',  de:'Navigation', es:'Navegación', it:'Navigazione' },
    'Accueil':       { en:'Home',        de:'Startseite', es:'Inicio',     it:'Home'        },
    'Types':         { en:'Types',       de:'Typen',      es:'Tipos',      it:'Tipi'        },
    'Bases Stats':   { en:'Base Stats',  de:'Basiswerte', es:'Stats base', it:'Stats base'  },
    'Papyrus':       { en:'Papyrus',     de:'Papyrus',    es:'Papiro',     it:'Papiro'      },
    'Mes Réseaux':   { en:'My Socials',  de:'Meine Netzwerke', es:'Mis redes', it:'I miei social' },
    'Suis le projet pour les dernières news, devlogs et avant-premières !': { en:'Follow the project for the latest news, devlogs and previews!', de:'Folge dem Projekt für die neuesten News, Devlogs und Vorschauen!', es:'¡Sigue el proyecto para las últimas noticias, devlogs y avances!', it:'Segui il progetto per le ultime news, devlog e anteprime!' },
    '© 2026 Cendres Antiques | Fangame | Tous droits réservés': { en:'© 2026 Ancient Cinders | Fangame | All rights reserved', de:'© 2026 Antike Asche | Fangame | Alle Rechte vorbehalten', es:'© 2026 Cenizas Antiguas | Fangame | Todos los derechos reservados', it:'© 2026 Ceneri Antiche | Fangame | Tutti i diritti riservati' },
    'Pokémon Cendres Antiques est un fangame non officiel et non commercial.\n          Pokémon est une marque déposée de Nintendo / Game Freak / The Pokémon Company.': { en:'Pokémon Ancient Cinders is an unofficial, non-commercial fangame.\n          Pokémon is a trademark of Nintendo / Game Freak / The Pokémon Company.', de:'Pokémon Antike Asche ist ein inoffizielles, nicht-kommerzielles Fangame.\n          Pokémon ist eine eingetragene Marke von Nintendo / Game Freak / The Pokémon Company.', es:'Pokémon Cenizas Antiguas es un fangame no oficial y no comercial.\n          Pokémon es una marca registrada de Nintendo / Game Freak / The Pokémon Company.', it:'Pokémon Ceneri Antiche è un fangame non ufficiale e non commerciale.\n          Pokémon è un marchio registrato di Nintendo / Game Freak / The Pokémon Company.' },

    // ── Pokédex (pokemon.html) ─────────────────────────────────────────
    'Codex de Khemis':       { en:'Codex of Khemis',   de:'Kodex von Khemis',  es:'Códice de Khemis',    it:'Codice di Khemis'    },
    '✦ Codex de Khemis ✦':   { en:'✦ Codex of Khemis ✦', de:'✦ Kodex von Khemis ✦', es:'✦ Códice de Khemis ✦', it:'✦ Codice di Khemis ✦' },
    'Le Pokédex de la région':{ en:'The regional Pokédex', de:'Der regionale Pokédex', es:'La Pokédex regional', it:'Il Pokédex regionale' },
    'Rechercher un Pokémon…': { en:'Search a Pokémon…', de:'Pokémon suchen…',   es:'Buscar un Pokémon…',  it:'Cerca un Pokémon…'   },
    'Tous':              { en:'All',         de:'Alle',          es:'Todos',          it:'Tutti'          },
    'Communs':           { en:'Common',      de:'Gewöhnlich',    es:'Comunes',        it:'Comuni'         },
    'Pokémon au total':       { en:'Pokémon in total',      de:'Pokémon insgesamt',    es:'Pokémon en total',        it:'Pokémon in totale' },
    'Bases Stats modifiées':  { en:'Modified Base Stats',      de:'Modifizierte Basiswerte',    es:'Estadísticas base modificadas',        it:'Statistiche base modificate' },
    'Semi-Légendaires':  { en:'Semi-Legendary', de:'Semi-Legendär', es:'Semi-Legendarios', it:'Semi-Leggendari' },
    'Légendaires':       { en:'Legendary',   de:'Legendär',      es:'Legendarios',    it:'Leggendari'     },
    'Légendaires région':{ en:'Region Legendaries', de:'Regions-Legendäre', es:'Legendarios región', it:'Leggendari regione' },
    'Nom français':      { en:'French Name', de:'Französ. Name', es:'Nombre francés', it:'Nome francese'  },
    'Nom anglais':       { en:'English Name',de:'Engl. Name',    es:'Nombre inglés',  it:'Nome inglese'   },
    'Type(s)':           { en:'Type(s)',      de:'Typ(en)',       es:'Tipo(s)',         it:'Tipo/i'         },
    'Rareté':            { en:'Rarity',       de:'Seltenheit',    es:'Rareza',          it:'Rarità'         },

    // Rareté badges
    '🐫 Commun':               { en:'🐫 Common',            de:'🐫 Gewöhnlich',       es:'🐫 Común',              it:'🐫 Comune'            },
    '🦉 Semi-Légendaire':      { en:'🦉 Semi-Legendary',    de:'🦉 Semi-Legendär',    es:'🦉 Semi-Legendario',    it:'🦉 Semi-Leggendario'  },
    '🐉 Légendaire':           { en:'🐉 Legendary',         de:'🐉 Legendär',         es:'🐉 Legendario',         it:'🐉 Leggendario'       },
    '🐦‍🔥​ Légendaire Région':  { en:'🐦‍🔥​ Region Legendary', de:'🐦‍🔥​ Regions-Legendär', es:'🐦‍🔥​ Legendario Región', it:'🐦‍🔥​ Leggendario Regione' },

    // Sections codex
    'Pokémon de la Région':    { en:'Region Pokémon',       de:'Pokémon der Region',  es:'Pokémon de la región',  it:'Pokémon della regione' },
    'Évolutions d\'Évoli':     { en:'Eevee Evolutions',     de:'Evoli-Entwicklungen', es:'Evoluciones de Eevee',  it:'Evoluzioni di Eevee'   },
    'Légendaires Capturables': { en:'Catchable Legendaries',de:'Fangbare Legendäre',  es:'Legendarios capturables',it:'Leggendari catturabili'},
    'Légendaires de la Région':{ en:'Region Legendaries',   de:'Regions-Legendäre',   es:'Legendarios de la región',it:'Leggendari della regione'},
    'Grands Légendaires':      { en:'Major Legendaries',    de:'Große Legendäre',     es:'Grandes Legendarios',   it:'Grandi Leggendari'     },

    // ── Fiche Pokémon ──────────────────────────────────────────────────
    'Codex de Khemis ←':      { en:'← Codex of Khemis',   de:'← Kodex von Khemis', es:'← Códice de Khemis',   it:'← Codice di Khemis'   },
    '← Retour au Codex':      { en:'← Back to Pokédex',   de:'← Zurück',           es:'← Volver',             it:'← Indietro'            },
    'Informations générales':  { en:'General Information', de:'Allg. Informationen', es:'Información general',   it:'Informazioni generali' },
    'Statistiques de base':    { en:'Base Stats',          de:'Basiswerte',          es:'Estadísticas base',     it:'Statistiche di base'   },
    'Capacités Spéciales':     { en:'Abilities',           de:'Fähigkeiten',         es:'Habilidades',           it:'Abilità'               },
    'Chaîne d\'Évolution':     { en:'Evolution Chain',     de:'Entwicklungskette',   es:'Cadena de evolución',   it:'Catena evolutiva'      },
    'Capacités apprenables':   { en:'Learnable Moves',     de:'Erlernbare Attacken', es:'Movimientos aprendibles',it:'Mosse apprendibili'   },
    'Par niveau':    { en:'By level',    de:'Nach Stufe',   es:'Por nivel',    it:'Per livello'  },
    'Tuteur':        { en:'Tutor',       de:'Lehrmeister',  es:'Tutor',        it:'Tutor'        },
    'Reproduction':  { en:'Egg Moves',   de:'Zucht',        es:'Reproducción', it:'Riproduzione' },
    'PE / Papyrus d\'Enseignement': { en:'TP / SP', de:'EP / HP', es:'EP / PS', it:'PD / PS' },
    'Numéro Pokédex':  { en:'Pokédex No.', de:'Pokédex-Nr.',   es:'N.° Pokédex',    it:'N. Pokédex'    },
    'Catégorie':       { en:'Category',    de:'Kategorie',    es:'Categoría',      it:'Categoria'     },
    'Type':            { en:'Type',        de:'Typ',          es:'Tipo',           it:'Tipo'          },
    'Taille':          { en:'Height',      de:'Größe',        es:'Altura',         it:'Altezza'       },
    'Poids':           { en:'Weight',      de:'Gewicht',      es:'Peso',           it:'Peso'          },
    'Taux de capture': { en:'Catch Rate',  de:'Fangrate',     es:'Tasa captura',   it:'Tasso cattura' },
    'Bonheur de base': { en:'Base Happiness', de:'Basis-Freundschaft', es:'Amistad base', it:'Amicizia base' },
    'Taux femelle':    { en:'Female Rate', de:'Weiblichenquote', es:'Tasa hembra', it:'Tasso femmina' },
    'Groupe Œuf':      { en:'Egg Group',   de:'Ei-Gruppe',    es:'Grupo huevo',    it:'Gruppo uova'   },
    'Pas d\'éclosion': { en:'Hatch Steps', de:'Brutschritte', es:'Pasos eclosión', it:'Passi schiusa' },
    'Exp. de base':    { en:'Base Exp.',   de:'Basis-EP',     es:'Exp. base',      it:'Esp. base'     },
    'Courbe de progression': { en:'Growth Rate', de:'Wachstumsrate', es:'Curva crecimiento', it:'Curva crescita' },
    'Points d\'effort obtenus': { en:'EVs Earned', de:'EP-Ertrag', es:'PE obtenidos', it:'PE ottenuti' },
    'PV':        { en:'HP',     de:'KP',              es:'PS',       it:'PS'      },
    'Attaque':   { en:'Attack', de:'Angriff',          es:'Ataque',   it:'Attacco' },
    'Défense':   { en:'Defense',de:'Verteidigung',     es:'Defensa',  it:'Difesa'  },
    'Att. Spé.': { en:'Sp.Atk', de:'Sp.-Angriff',     es:'At.Esp.',  it:'Att.Sp.' },
    'Déf. Spé.': { en:'Sp.Def', de:'Sp.-Verteidigung',es:'Def.Esp.', it:'Dif.Sp.' },
    'Vitesse':   { en:'Speed',  de:'Initiative',       es:'Velocidad',it:'Velocità'},
    'Total':     { en:'Total',  de:'Gesamt',           es:'Total',    it:'Totale'  },
    'Capacité normale':  { en:'Normal Ability',  de:'Normale Fähigkeit',   es:'Habilidad normal', it:'Abilità normale' },
    'Capacité cachée':   { en:'Hidden Ability',  de:'Versteckte Fähigkeit',es:'Habilidad oculta', it:'Abilità nascosta'},
    'Consultation du Codex…': { en:'Loading Pokédex…', de:'Lade Daten…', es:'Cargando…', it:'Caricamento…' },
    'Pokémon introuvable':    { en:'Pokémon not found', de:'Pokémon nicht gefunden', es:'Pokémon no encontrado', it:'Pokémon non trovato' },
    // Stats display
    'Niv.':      { en:'Lv.',    de:'Lv.',    es:'Nv.',  it:'Lv.' },
    'Capacité':  { en:'Move',   de:'Attacke',es:'Movimiento', it:'Mossa' },
    'Aucune capacité dans cette catégorie': { en:'No moves in this category', de:'Keine Attacken', es:'Sin movimientos', it:'Nessuna mossa' },
    'Aucun talent': { en:'No abilities', de:'Keine Fähigkeiten', es:'Sin habilidades', it:'Nessuna abilità' },
    'Pas d\'évolution': { en:'No Evolution', de:'Keine Entwicklung', es:'Sin evolución', it:'Nessuna evoluzione' },
    // Conditions évolutions
    'Bonheur élevé': { en:'High Happiness', de:'Hohes Glück', es:'Alta amistad', it:'Alta amicizia' },
    'Échange':       { en:'Trade',          de:'Tausch',      es:'Intercambio',  it:'Scambio'       },
    'Échange (objet)':{ en:'Trade (item)',  de:'Tausch (Held)', es:'Intercambio (objeto)', it:'Scambio (oggetto)' },
    'Zone spéciale': { en:'Special location', de:'Spezialort', es:'Zona especial', it:'Zona speciale' },
    'Capacité apprise':{ en:'Move learned', de:'Attacke gelernt', es:'Movimiento aprendido', it:'Mossa appresa' },
    'Météo spéciale':{ en:'Special weather', de:'Spezialwetter', es:'Clima especial', it:'Meteo speciale' },
    'Condition spéciale':{ en:'Special condition', de:'Spezialzustand', es:'Condición especial', it:'Condizione speciale' },
    'Masculin':      { en:'Male',           de:'Männlich',    es:'Macho',        it:'Maschio'       },
    'Féminin':       { en:'Female',         de:'Weiblich',    es:'Hembra',       it:'Femmina'       },
    'Objet tenu':    { en:'Held item',      de:'Gehaltenes Obj.', es:'Objeto equipado', it:'Oggetto tenuto' },
    // Pierre évolutions
    'Pierre Feu':    { en:'Fire Stone',    de:'Feuerstein',   es:'Piedra Fuego',  it:'Pietrafuoco'  },
    'Pierre Eau':    { en:'Water Stone',   de:'Wasserstein',  es:'Piedra Agua',   it:'Pietraqua'    },
    'Pierre Foudre': { en:'Thunder Stone', de:'Donnerstein',  es:'Piedra Trueno', it:'Pietratuono'  },
    'Pierre Plante': { en:'Leaf Stone',    de:'Blattstein',   es:'Piedra Hoja',   it:'Pietrafoglia' },
    'Pierre Lune':   { en:'Moon Stone',    de:'Mondstein',    es:'Piedra Lunar',  it:'Pietralunar'  },
    'Pierre Solaire':{ en:'Sun Stone',     de:'Sonnenstein',  es:'Piedra Solar',  it:'Pietrasolare' },
    'Pierre Aube':   { en:'Dawn Stone',    de:'Morgenrötestein',es:'Piedra Alba', it:'Pietraalba'   },
    'Pierre Nuit':   { en:'Dusk Stone',    de:'Abenddunkelstein',es:'Piedra Noche',it:'Pietranotte' },
    'Pierre Éclat':  { en:'Shiny Stone',   de:'Glanzstein',   es:'Piedra Brillo', it:'Pietrabrillo' },
    'Pierre Glace':  { en:'Ice Stone',     de:'Eisstein',     es:'Piedra Hielo',  it:'Pietraghiaccio'},
    // Groupes œuf
    'Inconnu':       { en:'Unknown',     de:'Unbekannt',   es:'Desconocido',    it:'Sconosciuto'  },
    'Terrain':       { en:'Field',       de:'Feld',        es:'Campo',          it:'Campo'        },
    'Plante':        { en:'Grass',       de:'Pflanze',     es:'Planta',         it:'Pianta'       },
    'Insecte':       { en:'Bug',         de:'Käfer',       es:'Bicho',          it:'Coleottero'   },
    'Vol':           { en:'Flying',      de:'Flug',        es:'Volador',        it:'Volante'      },
    'Humanoïde':     { en:'Human-Like',  de:'Humanoid',    es:'Humanoide',      it:'Umanoide'     },
    'Eau 1':         { en:'Water 1',     de:'Wasser 1',    es:'Agua 1',         it:'Acqua 1'      },
    'Fée':           { en:'Fairy',       de:'Fee',         es:'Hada',           it:'Folletto'     },
    'Minéral':       { en:'Mineral',     de:'Mineral',     es:'Mineral',        it:'Minerale'     },
    'Amorphe':       { en:'Amorphous',   de:'Amorph',      es:'Amorfo',         it:'Amorfo'       },
    'Eau 3':         { en:'Water 3',     de:'Wasser 3',    es:'Agua 3',         it:'Acqua 3'      },
    'Eau 2':         { en:'Water 2',     de:'Wasser 2',    es:'Agua 2',         it:'Acqua 2'      },
    'Dragon':        { en:'Dragon',      de:'Drache',      es:'Dragón',         it:'Drago'        },
    'Non-Genré':     { en:'Ditto',       de:'Ditto',       es:'Ditto',          it:'Ditto'        },
    'Nécrozma':      { en:'Necrozma',    de:'Necrozma',    es:'Necrozma',       it:'Necrozma'     },
    'Chaos':         { en:'Chaos',       de:'Chaos',       es:'Caos',           it:'Caos'         },
    // Courbes expérience
    'Rapide':        { en:'Fast',        de:'Schnell',     es:'Rápido',         it:'Veloce'       },
    'Mi-Rapide':     { en:'Medium Fast', de:'Mittelschnell',es:'Medio rápido',  it:'Medio veloce' },
    'Fluctuante':    { en:'Fluctuating', de:'Unbeständig', es:'Fluctuante',     it:'Fluttuante'   },
    'Mi-Lente':      { en:'Medium Slow', de:'Mittellang',  es:'Medio lento',    it:'Medio lento'  },
    'Lente':         { en:'Slow',        de:'Langsam',     es:'Lento',          it:'Lento'        },
    'Erratique':     { en:'Erratic',     de:'Erratisch',   es:'Errático',       it:'Erratico'     },
    // Taux femelle
    'Asexué':              { en:'Genderless',   de:'Geschlechtslos', es:'Sin género',  it:'Senza genere' },
    '0 % (Mâle)':          { en:'0% (Male)',    de:'0% (Männlich)',  es:'0% (Macho)',  it:'0% (Maschio)' },
    '100 % (Femelle)':     { en:'100% (Female)',de:'100% (Weiblich)',es:'100% (Hembra)',it:'100% (Femmina)'},
    // Footer fiche
    '© 2026 Cendres Antiques | Fangame': { en:'© 2026 Ancient Cinders | Fangame', de:'© 2026 Antike Asche | Fangame', es:'© 2026 Cenizas Antiguas | Fangame', it:'© 2026 Ceneri Antiche | Fangame' },
    'Pokémon © Nintendo / Game Freak / The Pokémon Company · Sprites © PokeAPI': { en:'Pokémon © Nintendo / Game Freak / The Pokémon Company · Sprites © PokeAPI', de:'Pokémon © Nintendo / Game Freak / The Pokémon Company · Sprites © PokeAPI', es:'Pokémon © Nintendo / Game Freak / The Pokémon Company · Sprites © PokeAPI', it:'Pokémon © Nintendo / Game Freak / The Pokémon Company · Sprites © PokeAPI' },
    // Affichage codex count
    'Affichage de': { en:'Showing', de:'Zeige', es:'Mostrando', it:'Mostrando' },
    '/ 230 Pokémon': { en:'/ 230 Pokémon', de:'/ 230 Pokémon', es:'/ 230 Pokémon', it:'/ 230 Pokémon' },

    // ── Guide (guide.html) ────────────────────────────────────────
    '✦ Soluce Complète ✦':         { en:'✦ Full Walkthrough ✦',  de:'✦ Komplettlösung ✦',    es:'✦ Guía Completa ✦',       it:'✦ Guida Completa ✦'      },
    'Le Guide':                    { en:'The Guide',              de:'Der Leitfaden',           es:'La Guía',                 it:'La Guida'                },
    'Chaque zone, chaque secret, chaque Pokémon sauvage, cartographiés pour toi par les scribes de l\'Égypte Antique.':
      { en:'Every zone, every secret, every wild Pokémon, mapped for you by the scribes of Ancient Egypt.',
        de:'Jede Zone, jedes Geheimnis, jedes wilde Pokémon, von den Schreibern des Alten Ägyptens für dich kartiert.',
        es:'Cada zona, cada secreto, cada Pokémon salvaje, cartografiados para ti por los escribas del Antiguo Egipto.',
        it:'Ogni zona, ogni segreto, ogni Pokémon selvatico, mappati per te dagli scribi dell\'Antico Egitto.'
      },
    '𓂀 Sommaire':                  { en:'𓂀 Contents',            de:'𓂀 Inhalt',               es:'𓂀 Índice',               it:'𓂀 Sommario'             },
    '— Début du jeu —':            { en:'— Start of game —',      de:'— Spielbeginn —',         es:'— Inicio del juego —',    it:'— Inizio del gioco —'    },
    '— 1ère Arène Pokémon —':      { en:'— 1st Pokémon Gym —',    de:'— 1. Arena —',            es:'— 1ª Gimnasio Pokémon —', it:'— 1ª Palestra Pokémon —' },
    '— Possession d\'un badge —':  { en:'— With 1 badge —',       de:'— Mit 1 Orden —',         es:'— Con 1 medalla —',       it:'— Con 1 medaglia —'      },
    '— 2ème Arène Pokémon —':      { en:'— 2nd Pokémon Gym —',    de:'— 2. Arena —',            es:'— 2º Gimnasio Pokémon —', it:'— 2ª Palestra Pokémon —' },
    '— Possession de 2 badges —':  { en:'— With 2 badges —',      de:'— Mit 2 Orden —',         es:'— Con 2 medallas —',      it:'— Con 2 medaglie —'      },
    '— 3ème Arène Pokémon —':      { en:'— 3rd Pokémon Gym —',    de:'— 3. Arena —',            es:'— 3er Gimnasio Pokémon —',it:'— 3ª Palestra Pokémon —' },
    '— 4ème Arène Pokémon —':      { en:'— 4th Pokémon Gym —',    de:'— 4. Arena —',            es:'— 4º Gimnasio Pokémon —', it:'— 4ª Palestra Pokémon —' },
    '— Possession de 4 badges —':  { en:'— With 4 badges —',      de:'— Mit 4 Orden —',         es:'— Con 4 medallas —',      it:'— Con 4 medaglie —'      },
    '— Bientôt —':                 { en:'— Coming soon —',        de:'— Demnächst —',           es:'— Próximamente —',        it:'— Prossimamente —'       },
    'Début de l\'aventure':        { en:'Start of the adventure', de:'Abenteuer-Beginn',         es:'Comienzo de la aventura', it:'Inizio dell\'avventura'  },
    'Zones à venir':               { en:'Upcoming zones',         de:'Kommende Gebiete',        es:'Zonas próximas',          it:'Zone in arrivo'          },
    'Lire le guide':               { en:'Read the guide',         de:'Leitfaden lesen',         es:'Leer la guía',            it:'Leggi la guida'          },
    'Village de départ':           { en:'Starting village',       de:'Startdorf',               es:'Pueblo inicial',          it:'Villaggio iniziale'      },
    'Village':                     { en:'Village',                de:'Dorf',                    es:'Pueblo',                  it:'Villaggio'               },
    'Route':                       { en:'Route',                  de:'Route',                   es:'Ruta',                    it:'Percorso'                },
    'Carrière':                    { en:'Quarry',                 de:'Steinbruch',              es:'Cantera',                 it:'Cava'                    },
    'Ville':                       { en:'City',                   de:'Stadt',                   es:'Ciudad',                  it:'Città'                   },
    'Île':                         { en:'Island',                 de:'Insel',                   es:'Isla',                    it:'Isola'                   },
    'Tour':                        { en:'Tower',                  de:'Turm',                    es:'Torre',                   it:'Torre'                   },
    'Capitale':                    { en:'Capital',                de:'Hauptstadt',              es:'Capital',                 it:'Capitale'                },
    'Ruines':                      { en:'Ruins',                  de:'Ruinen',                  es:'Ruinas',                  it:'Rovine'                  },
    'Zone 01':                     { en:'Zone 01',                de:'Zone 01',                 es:'Zona 01',                 it:'Zona 01'                 },
    'Zone 02':                     { en:'Zone 02',                de:'Zone 02',                 es:'Zona 02',                 it:'Zona 02'                 },
    'Zone 03':                     { en:'Zone 03',                de:'Zone 03',                 es:'Zona 03',                 it:'Zona 03'                 },
    'Zone 04':                     { en:'Zone 04',                de:'Zone 04',                 es:'Zona 04',                 it:'Zona 04'                 },
    'Zone 05':                     { en:'Zone 05',                de:'Zone 05',                 es:'Zona 05',                 it:'Zona 05'                 },
    'Zone 06':                     { en:'Zone 06',                de:'Zone 06',                 es:'Zona 06',                 it:'Zona 06'                 },
    'Zone 07':                     { en:'Zone 07',                de:'Zone 07',                 es:'Zona 07',                 it:'Zona 07'                 },
    'Zone 08':                     { en:'Zone 08',                de:'Zone 08',                 es:'Zona 08',                 it:'Zona 08'                 },
    'Zone 09':                     { en:'Zone 09',                de:'Zone 09',                 es:'Zona 09',                 it:'Zona 09'                 },
    'Zone 10':                     { en:'Zone 10',                de:'Zone 10',                 es:'Zona 10',                 it:'Zona 10'                 },
    'Zone 11':                     { en:'Zone 11',                de:'Zone 11',                 es:'Zona 11',                 it:'Zona 11'                 },
    'Zone 12':                     { en:'Zone 12',                de:'Zone 12',                 es:'Zona 12',                 it:'Zona 12'                 },
    'Zone 13':                     { en:'Zone 13',                de:'Zone 13',                 es:'Zona 13',                 it:'Zona 13'                 },
    'Zone 14':                     { en:'Zone 14',                de:'Zone 14',                 es:'Zona 14',                 it:'Zona 14'                 },
    'Zone 15':                     { en:'Zone 15',                de:'Zone 15',                 es:'Zona 15',                 it:'Zona 15'                 },
    'Zone 16':                     { en:'Zone 16',                de:'Zone 16',                 es:'Zona 16',                 it:'Zona 16'                 },
    'Zone 17':                     { en:'Zone 17',                de:'Zone 17',                 es:'Zona 17',                 it:'Zona 17'                 },
    'Zone 18':                     { en:'Zone 18',                de:'Zone 18',                 es:'Zona 18',                 it:'Zona 18'                 },
    'Zone 19':                     { en:'Zone 19',                de:'Zone 19',                 es:'Zona 19',                 it:'Zona 19'                 },

    // ── Objets (objets.html) ──────────────────────────────────────
    '✦ Artefacts & Reliques ✦':    { en:'✦ Artefacts & Relics ✦', de:'✦ Artefakte & Relikte ✦', es:'✦ Artefactos y Reliquias ✦', it:'✦ Artefatti e Reliquie ✦' },
    'Tous les objets, amulettes, papyrus d\'enseignement et trésors de la région de Khemis, des plus communs aux plus précieux.':
      { en:'All items, amulets, teaching papyri and treasures of the Khemis region, from the most common to the most precious.',
        de:'Alle Gegenstände, Amulette, Lehrpapyri und Schätze der Region Khemis, vom häufigsten bis zum wertvollsten.',
        es:'Todos los objetos, amuletos, papiros de enseñanza y tesoros de la región de Khemis, de los más comunes a los más preciados.',
        it:'Tutti gli oggetti, amuleti, papiri d\'insegnamento e tesori della regione di Khemis, dai più comuni ai più preziosi.'
      },
    'Rechercher un objet…':        { en:'Search an item…',        de:'Gegenstand suchen…',      es:'Buscar un objeto…',       it:'Cerca un oggetto…'       },
    'À tenir':                     { en:'Hold',                   de:'Halten',                  es:'A llevar',                it:'Da tenere'               },
    'Soins':                       { en:'Medicine',               de:'Heilung',                 es:'Curación',                it:'Cura'                    },
    'Balls':                       { en:'Balls',                  de:'Bälle',                   es:'Balls',                   it:'Ball'                    },
    'Pierres':                     { en:'Stones',                 de:'Steine',                  es:'Piedras',                 it:'Pietre'                  },
    'Papyrus d\'Enseignement':     { en:'Teaching Papyrus',       de:'Lehrpapyrus',             es:'Enseñando Papyrus',       it:'Papiro didattico'        },
    'Papyrus Sacré':               { en:'Sacred Papyrus',         de:'Heiliger Papyrus',        es:'Papiro Sagrado',          it:'Papiro Sacro'            },
    'Fossiles':                    { en:'Fossils',                de:'Fossilien',               es:'Fósiles',                 it:'Fossili'                 },
    'Joyaux':                      { en:'Gems',                   de:'Edelsteine',              es:'Gemas',                   it:'Gemme'                   },
    'Trésors':                     { en:'Treasures',              de:'Schätze',                 es:'Tesoros',                 it:'Tesori'                  },
    'Uniques':                     { en:'Unique',                 de:'Einzigartige',            es:'Únicos',                  it:'Unici'                   },
    'Autres':                      { en:'Others',                 de:'Andere',                  es:'Otros',                   it:'Altri'                   },
    '𓋹 Catégories':               { en:'𓋹 Categories',          de:'𓋹 Kategorien',            es:'𓋹 Categorías',           it:'𓋹 Categorie'            },
    'Objets à tenir':              { en:'Held items',             de:'Halte-Items',             es:'Objetos a llevar',        it:'Oggetti da tenere'       },
    'Objets de soin':              { en:'Healing items',          de:'Heilgegenstände',         es:'Objetos de curación',     it:'Oggetti curativi'        },
    'Pierres d\'évolution':        { en:'Evolution Stones',       de:'Entwicklungssteine',      es:'Piedras de evolución',    it:'Pietre evolutive'        },
    'Objets uniques':              { en:'Unique items',           de:'Einzigartige Items',      es:'Objetos únicos',          it:'Oggetti unici'           },
    'Autres objets':               { en:'Other items',            de:'Andere Gegenstände',      es:'Otros objetos',           it:'Altri oggetti'           },
    'Catégorie :':                 { en:'Category:',              de:'Kategorie:',              es:'Categoría:',              it:'Categoria:'              },
    '⚔ Physique':                  { en:'⚔ Physical',             de:'⚔ Physisch',              es:'⚔ Físico',                it:'⚔ Fisico'                },
    '✦ Spéciale':                  { en:'✦ Special',              de:'✦ Speziell',              es:'✦ Especial',              it:'✦ Speciale'              },
    '◆ Statut':                    { en:'◆ Status',               de:'◆ Status',                es:'◆ Estado',                it:'◆ Stato'                 },
    'Rechercher un papyrus ou une attaque…': { en:'Search a papyrus or a move…', de:'Papyrus oder Attacke suchen…', es:'Buscar un papiro o un movimiento…', it:'Cerca un papiro o una mossa…' },
    // ── Stats (stats.html) ────────────────────────────────────────
    'Bases Stats Modifiées':       { en:'Modified Base Stats',    de:'Geänderte Basiswerte',    es:'Stats Base Modificadas',  it:'Statistiche Base Modificate' },
    'Les Pokémon de type Insect et Dragon sont beaucoup plus puissants que la plupart des Pokémon des autres types dans la région de Khemis.':
      { en:'Bug and Dragon type Pokémon are much stronger than most Pokémon of other types in the Khemis region.',
        de:'Pokémon vom Typ Käfer und Drache sind in der Region Khemis viel stärker als die meisten anderen Typen.',
        es:'Los Pokémon de tipo Insecto y Dragón son mucho más poderosos que la mayoría de los Pokémon de otros tipos en la región de Khemis.',
        it:'I Pokémon di tipo Insetto e Drago sono molto più forti della maggior parte dei Pokémon degli altri tipi nella regione di Khemis.'
      },
    'Ancienne Base Stats':         { en:'Old Base Stats',         de:'Alte Basiswerte',         es:'Stats Base Antiguas',     it:'Statistiche Base Vecchie'},
    'Nouvelle Base Stats':         { en:'New Base Stats',         de:'Neue Basiswerte',         es:'Stats Base Nuevas',       it:'Statistiche Base Nuove'  },

    // ── Types (types.html) ────────────────────────────────────────
    '✦ Les Énergies de Khemis ✦':  { en:'✦ The Energies of Khemis ✦', de:'✦ Die Energien von Khemis ✦', es:'✦ Las Energías de Khemis ✦', it:'✦ Le Energie di Khemis ✦' },
    'Les 18 types de la région, certains ont été renommés pour mieux refléter la culture et la magie de l\'Égypte antique de Khemis.':
      { en:'The 18 types of the region, some have been renamed to better reflect the culture and magic of Ancient Egypt of Khemis.',
        de:'Die 18 Typen der Region, einige wurden umbenannt, um die Kultur und Magie des alten Ägyptens von Khemis besser widerzuspiegeln.',
        es:'Los 18 tipos de la región, algunos han sido renombrados para reflejar mejor la cultura y la magia del Antiguo Egipto de Khemis.',
        it:'I 18 tipi della regione, alcuni sono stati rinominati per riflettere meglio la cultura e la magia dell\'Antico Egitto di Khemis.'
      },
    '𓂋 Renommés':                  { en:'𓂋 Renamed',             de:'𓂋 Umbenannt',            es:'𓂋 Renombrados',          it:'𓂋 Rinominati'           },
    'Rechercher un type…':         { en:'Search a type…',         de:'Typ suchen…',             es:'Buscar un tipo…',         it:'Cerca un tipo…'          },
    'Les 18 Types':                { en:'The 18 Types',           de:'Die 18 Typen',            es:'Los 18 Tipos',            it:'I 18 Tipi'               },
    'Tableau des Affinités':       { en:'Type Chart',             de:'Typentabelle',            es:'Tabla de Afinidades',     it:'Tabella Affinità'        },
    'Lignes = type de l\'attaque · Colonnes = type du Pokémon défenseur.\n      Survolez une cellule pour voir sa valeur.':
      { en:'Rows = attack type · Columns = defending Pokémon type.\n      Hover a cell to see its value.',
        de:'Zeilen = Angriffstyp · Spalten = Typ des verteidigenden Pokémon.\n      Fahren Sie über eine Zelle, um ihren Wert zu sehen.',
        es:'Filas = tipo del ataque · Columnas = tipo del Pokémon defensor.\n      Pasa el cursor sobre una celda para ver su valor.',
        it:'Righe = tipo d\'attacco · Colonne = tipo del Pokémon difensore.\n      Passa il cursore su una cella per vedere il valore.'
      },
    'Super efficace (×2)':         { en:'Super effective (×2)',   de:'Sehr effektiv (×2)',      es:'Súper eficaz (×2)',        it:'Super efficace (×2)'     },
    'Normal (×1)':                 { en:'Normal (×1)',            de:'Normal (×1)',             es:'Normal (×1)',              it:'Normale (×1)'            },
    'Résisté (×½)':                { en:'Resisted (×½)',          de:'Resistent (×½)',          es:'Resistido (×½)',           it:'Resistito (×½)'          },
    'Immunisé (×0)':               { en:'Immune (×0)',            de:'Immun (×0)',              es:'Inmune (×0)',              it:'Immune (×0)'             },
    '✕ Fermer':                    { en:'✕ Close',                de:'✕ Schließen',             es:'✕ Cerrar',                it:'✕ Chiudi'                },
    'Anciennement :':              { en:'Formerly:',              de:'Früher:',                 es:'Anteriormente:',          it:'In precedenza:'          },
    'Nom inchangé':                { en:'Name unchanged',         de:'Name unverändert',        es:'Nombre sin cambiar',      it:'Nome invariato'          },
    '⬆ Super efficace contre':     { en:'⬆ Super effective against', de:'⬆ Sehr effektiv gegen', es:'⬆ Súper eficaz contra',  it:'⬆ Super efficace contro' },
    '⬇ Peu efficace contre':       { en:'⬇ Not very effective against', de:'⬇ Nicht sehr effektiv gegen', es:'⬇ Poco eficaz contra', it:'⬇ Poco efficace contro' },
    '✕ Sans effet contre':         { en:'✕ No effect against',   de:'✕ Keine Wirkung gegen',   es:'✕ Sin efecto contra',     it:'✕ Nessun effetto contro' },
    '⚠ Faible face à':             { en:'⚠ Weak to',              de:'⚠ Schwach gegen',         es:'⚠ Débil ante',            it:'⚠ Debole contro'         },
    '🛡 Résiste à':                { en:'🛡 Resistant to',        de:'🛡 Resistent gegen',      es:'🛡 Resistente a',         it:'🛡 Resistente a'         },
    '🚫 Immunisé contre':          { en:'🚫 Immune to',           de:'🚫 Immun gegen',          es:'🚫 Inmune a',             it:'🚫 Immune a'             },
    'Aucun':                       { en:'None',                   de:'Keiner',                  es:'Ninguno',                 it:'Nessuno'                 },
    'Super vs':                    { en:'Super vs',               de:'Super gegen',             es:'Súper vs',                it:'Super vs'                },

    // ── Évolutions (evolutions.html) ─────────────────────────────
    '✦ Khemis Évolué ✦':           { en:'✦ Evolved Khemis ✦',    de:'✦ Entwickeltes Khemis ✦', es:'✦ Khemis Evolucionado ✦', it:'✦ Khemis Evoluto ✦'      },
    'Toutes les conditions d\'évolution de la région, notamment les évolutions simplifiées spécifiques à Khemis, avec leurs objets et lieux requis.':
      { en:'All evolution conditions in the region, including the simplified evolutions specific to Khemis, with their required items and locations.',
        de:'Alle Entwicklungsbedingungen der Region, einschließlich der vereinfachten Entwicklungen speziell für Khemis, mit den erforderlichen Gegenständen und Orten.',
        es:'Todas las condiciones de evolución de la región, incluidas las evoluciones simplificadas específicas de Khemis, con sus objetos y lugares requeridos.',
        it:'Tutte le condizioni di evoluzione della regione, incluse le evoluzioni semplificate specifiche di Khemis, con gli oggetti e luoghi richiesti.'
      },
    'Méthodes :':                  { en:'Methods:',               de:'Methoden:',               es:'Métodos:',                it:'Metodi:'                 },
    '💎 Pierre':                   { en:'💎 Stone',               de:'💎 Stein',                es:'💎 Piedra',               it:'💎 Pietra'               },
    '⬆️ Niveau':                   { en:'⬆️ Level',               de:'⬆️ Level',                es:'⬆️ Nivel',                it:'⬆️ Livello'              },
    '🏺 Objet':                    { en:'🏺 Item',                de:'🏺 Item',                 es:'🏺 Objeto',               it:'🏺 Oggetto'              },
    '📍 Lieu':                     { en:'📍 Location',            de:'📍 Ort',                  es:'📍 Lugar',                it:'📍 Luogo'                },
    '✦ Spécial':                   { en:'✦ Special',              de:'✦ Speziell',              es:'✦ Especial',              it:'✦ Speciale'              },
    'Rechercher une évolution':    { en:'Search an evolution',    de:'Entwicklung suchen',      es:'Buscar una evolución',    it:'Cerca un\'evoluzione'    },
    'Pierre':                      { en:'Stone',                  de:'Stein',                   es:'Piedra',                  it:'Pietra'                  },
    'Niveau':                      { en:'Level',                  de:'Level',                   es:'Nivel',                   it:'Livello'                 },
    'Objet':                       { en:'Item',                   de:'Item',                    es:'Objeto',                  it:'Oggetto'                 },
    'Lieu':                        { en:'Location',               de:'Ort',                     es:'Lugar',                   it:'Luogo'                   },
    'Spécial':                     { en:'Special',                de:'Speziell',                es:'Especial',                it:'Speciale'                },
    'Simplifiées':                 { en:'Simplified',             de:'Vereinfacht',             es:'Simplificadas',           it:'Semplificate'            },
    '/ 36 évolutions':             { en:'/ 36 evolutions',        de:'/ 36 Entwicklungen',      es:'/ 36 evoluciones',        it:'/ 36 evoluzioni'         },
    '✦ Simplifiée':                { en:'✦ Simplified',           de:'✦ Vereinfacht',           es:'✦ Simplificada',          it:'✦ Semplificata'          },
    // ── Éléments UI communs à plusieurs pages ────────────────────
    '© 2026 Cendres Antiques - Fangame': { en:'© 2026 Ancient Cinders - Fangame', de:'© 2026 Antike Asche - Fangame', es:'© 2026 Cenizas Antiguas - Fangame', it:'© 2026 Ceneri Antiche - Fangame' },
    'Pokémon © Nintendo / Game Freak / The Pokémon Company': { en:'Pokémon © Nintendo / Game Freak / The Pokémon Company', de:'Pokémon © Nintendo / Game Freak / The Pokémon Company', es:'Pokémon © Nintendo / Game Freak / The Pokémon Company', it:'Pokémon © Nintendo / Game Freak / The Pokémon Company' },

    // ── Papyrus (papyrus.html) ────────────────────────────────────
    '✦ Région de Khemis ✦':             { en:'✦ Region of Khemis ✦',   de:'✦ Region Khemis ✦',       es:'✦ Región de Khemis ✦',    it:'✦ Regione di Khemis ✦'   },
    'Les Papyrus d\'Enseignement (PE) et Papyrus Sacrés (PS) permettent d\'apprendre des capacités spéciales à vos Pokémon.':
      { en:'Teaching Papyri (PE) and Sacred Papyri (PS) allow your Pokémon to learn special moves.',
        de:'Lehrpapyri (PE) und Heilige Papyri (PS) ermöglichen es deinen Pokémon, spezielle Attacken zu lernen.',
        es:'Los Papiros de Enseñanza (PE) y los Papiros Sagrados (PS) permiten a tus Pokémon aprender movimientos especiales.',
        it:'I Papiri d\'Insegnamento (PE) e i Papiri Sacri (PS) permettono ai tuoi Pokémon di imparare mosse speciali.'
      },
    'Catégorie :':                       { en:'Category:',              de:'Kategorie:',              es:'Categoría:',              it:'Categoria:'              },
    'Nom':                               { en:'Name',                   de:'Name',                    es:'Nombre',                  it:'Nome'                    },
    'Image':                             { en:'Image',                  de:'Bild',                    es:'Imagen',                  it:'Immagine'                },
    'Attaque':                           { en:'Move',                   de:'Attacke',                 es:'Movimiento',              it:'Mossa'                   },
    'PP':                                { en:'PP',                     de:'AP',                      es:'PP',                      it:'PP'                      },
    'Puissance':                         { en:'Power',                  de:'Stärke',                  es:'Potencia',                it:'Potenza'                 },
    'Précision':                         { en:'Accuracy',               de:'Genauigkeit',             es:'Precisión',               it:'Precisione'              },
    'Prix':                              { en:'Price',                  de:'Preis',                   es:'Precio',                  it:'Prezzo'                  },
    'Tous':                              { en:'All',                    de:'Alle',                    es:'Todos',                   it:'Tutti'                   },
    'PE':                                { en:'PE',                     de:'PE',                      es:'PE',                      it:'PE'                      },
    'PS':                                { en:'PS',                     de:'PS',                      es:'PS',                      it:'PS'                      },
    'Affichage de ':                     { en:'Showing ',               de:'Zeige ',                  es:'Mostrando ',              it:'Mostrando '              },

    // ── Stats (stats.html) — compléments ─────────────────────────
    '✦ Région de Khemis ✦':             { en:'✦ Region of Khemis ✦',   de:'✦ Region Khemis ✦',       es:'✦ Región de Khemis ✦',    it:'✦ Regione di Khemis ✦'   },
    'BST':                               { en:'BST',                    de:'BST',                     es:'BST',                     it:'BST'                     },
    'N°':                                { en:'No.',                    de:'Nr.',                     es:'N.°',                     it:'N.'                      },
    '/ 46 Pokémon':                      { en:'/ 46 Pokémon',           de:'/ 46 Pokémon',            es:'/ 46 Pokémon',            it:'/ 46 Pokémon'            },

    // ── Types (types.html) — compléments ─────────────────────────
    'Super vs':                          { en:'Super vs',               de:'Super gegen',             es:'Súper vs',                it:'Super vs'                },
    'Psy':                               { en:'Psychic',                de:'Psycho',                  es:'Psíquico',                it:'Psico'                   },
    'Roche':                             { en:'Rock',                   de:'Gestein',                 es:'Roca',                    it:'Roccia'                  },
    'Acier':                             { en:'Steel',                  de:'Stahl',                   es:'Acero',                   it:'Acciaio'                 },
    'Spectre':                           { en:'Ghost',                  de:'Geist',                   es:'Fantasma',                it:'Spettro'                 },
    'Fée':                               { en:'Fairy',                  de:'Fee',                     es:'Hada',                    it:'Folletto'                },
    'Électrik':                          { en:'Electric',               de:'Elektro',                 es:'Eléctrico',               it:'Elettrico'               },
    'Ténèbres':                          { en:'Dark',                   de:'Unlicht',                 es:'Siniestro',               it:'Buio'                    },
    'Glace':                             { en:'Ice',                    de:'Eis',                     es:'Hielo',                   it:'Ghiaccio'                },

    // ── Guide (guide.html) — descriptions de zones ───────────────
    'Ce village est un petit oasis proche du Canilis. Reculé, calme et accueillant, cette cité n\'abrite pas de mystère particulier.':
      { en:'This village is a small oasis near the Canilis. Remote, calm and welcoming, it holds no particular mystery.',
        de:'Dieses Dorf ist eine kleine Oase nahe des Canilis. Abgelegen, ruhig und einladend, birgt es kein besonderes Geheimnis.',
        es:'Este pueblo es un pequeño oasis cerca del Canilis. Alejado, tranquilo y acogedor, no alberga ningún misterio particular.',
        it:'Questo villaggio è una piccola oasi vicino al Canilis. Remoto, calmo e accogliente, non nasconde alcun mistero particolare.'
      },
    'La toute première route de l\'aventure. \nUn chemin étendu longeant l\'Est du Canilis et abritant des Pokémon sauvages à la fois dans des hautes herbes et dans le sable. \n':
      { en:'The very first route of the adventure. A long path running along the east of the Canilis, home to wild Pokémon in tall grass and sand.',
        de:'Die allererste Route des Abenteuers. Ein langer Weg entlang des östlichen Canilis, in dem wilde Pokémon sowohl im hohen Gras als auch im Sand leben.',
        es:'La primera ruta de la aventura. Un largo camino que bordea el este del Canilis, con Pokémon salvajes tanto en la hierba alta como en la arena.',
        it:'La primissima rotta dell\'avventura. Un lungo sentiero lungo l\'est del Canilis, con Pokémon selvatici sia nell\'erba alta che nella sabbia.'
      },
    'Ce petit village, au bord du Canilis se voit être une terre fertile pour le papyrus, ressource très convoitée. ':
      { en:'This small village on the banks of the Canilis is fertile ground for papyrus, a highly sought-after resource.',
        de:'Dieses kleine Dorf am Ufer des Canilis ist fruchtbares Land für Papyrus, eine sehr begehrte Ressource.',
        es:'Este pequeño pueblo a orillas del Canilis es tierra fértil para el papiro, un recurso muy codiciado.',
        it:'Questo piccolo villaggio sulle rive del Canilis è terreno fertile per il papiro, una risorsa molto ambita.'
      },
    'Dans la continuité de la route 1, ce chemin longe aussi le Canilis et permet de rejoindre le village d\'Isara.':
      { en:'Continuing from Route 1, this path also runs along the Canilis and leads to the village of Isara.',
        de:'In Fortsetzung der Route 1 verläuft dieser Weg ebenfalls entlang des Canilis und führt zum Dorf Isara.',
        es:'Continuando desde la Ruta 1, este camino también bordea el Canilis y conduce al pueblo de Isara.',
        it:'Proseguendo dalla Rotta 1, questo sentiero costeggia anch\'esso il Canilis e porta al villaggio di Isara.'
      },
    'Ce village est un endroit paisible proche du Canilis et d\'un Oasis, où règnent la faune et la flore et surtout un champion redoutable. ':
      { en:'This village is a peaceful place near the Canilis and an oasis, where nature thrives and a formidable gym leader awaits.',
        de:'Dieses Dorf ist ein ruhiger Ort nahe des Canilis und einer Oase, wo Fauna und Flora gedeihen und ein gefürchteter Arenaleiter wartet.',
        es:'Este pueblo es un lugar tranquilo cerca del Canilis y un oasis, donde la fauna y la flora prosperan y un formidable líder de gimnasio aguarda.',
        it:'Questo villaggio è un luogo tranquillo vicino al Canilis e a un\'oasi, dove fauna e flora prosperano e un formidabile capo palestra attende.'
      },
    'Rive conviviale sur laquelle se trouvent quelques maisons et un port qui permet de faire une liaison entre les 2 parties de la région.':
      { en:'A welcoming riverbank with a few houses and a port linking the two parts of the region.',
        de:'Ein einladendes Flussufer mit einigen Häusern und einem Hafen, der die beiden Teile der Region verbindet.',
        es:'Una orilla acogedora con algunas casas y un puerto que une las dos partes de la región.',
        it:'Una riva accogliente con alcune case e un porto che collega le due parti della regione.'
      },
    'La carrière Thurae est une carrière de calcaire très importante pour la région.':
      { en:'The Thurae Quarry is a limestone quarry of great importance to the region.',
        de:'Der Steinbruch Thurae ist ein für die Region sehr wichtiger Kalksteinbruch.',
        es:'La Cantera Thurae es una cantera de caliza de gran importancia para la región.',
        it:'La cava Thurae è una cava di calcare di grande importanza per la regione.'
      },
    'Une route en plein désert qui connecte la carrière Thurae et la ville portuaire de Peramaris.':
      { en:'A desert route connecting Thurae Quarry and the port city of Peramaris.',
        de:'Eine Wüstenroute, die den Steinbruch Thurae mit der Hafenstadt Peramaris verbindet.',
        es:'Una ruta en pleno desierto que conecta la Cantera Thurae con la ciudad portuaria de Peramaris.',
        it:'Una rotta nel deserto che collega la cava Thurae con la città portuale di Peramaris.'
      },
    'Ville portuaire située au Nord-Est de la région, Peramaris renferme un champion aventurier et redoutable.':
      { en:'A port city in the northeast of the region, Peramaris is home to an adventurous and formidable gym leader.',
        de:'Peramaris, eine Hafenstadt im Nordosten der Region, beherbergt einen abenteuerlustigen und gefürchteten Arenaleiter.',
        es:'Ciudad portuaria al noreste de la región, Peramaris alberga a un líder de gimnasio aventurero y formidable.',
        it:'Città portuale a nordest della regione, Peramaris ospita un capo palestra avventuroso e formidabile.'
      },
    'Située tout au Nord-Est de la région, l\'île Kheperet est une île gelée bien éloignée des terres.':
      { en:'Located far to the northeast of the region, Kheperet Island is a frozen island far from the mainland.',
        de:'Die Insel Kheperet liegt weit im Nordosten der Region und ist eine gefrorene Insel, weit entfernt vom Festland.',
        es:'Situada al noreste de la región, la Isla Kheperet es una isla helada bien alejada de las tierras firmes.',
        it:'Situata a nordest della regione, l\'isola Kheperet è un\'isola ghiacciata lontana dalle terre emerse.'
      },
    'Cette île paradisiaque, située tout à l\'Est de la région renferme des Pokémon atypiques.':
      { en:'This paradise island, located to the east of the region, is home to unusual Pokémon.',
        de:'Diese Paradiesinsel, weit im Osten der Region gelegen, beherbergt atypische Pokémon.',
        es:'Esta isla paradisíaca, situada al este de la región, alberga Pokémon atípicos.',
        it:'Quest\'isola paradisiaca, situata a est della regione, ospita Pokémon atipici.'
      },
    'Une route en plein désert dans laquelle se trouve une très grande tour appelée Obelisk.':
      { en:'A desert route containing a very tall tower called the Obelisk.',
        de:'Eine Wüstenroute, auf der sich ein sehr großer Turm namens Obelisk befindet.',
        es:'Una ruta en pleno desierto que alberga una enorme torre llamada Obelisk.',
        it:'Una rotta nel deserto in cui si trova un\'altissima torre chiamata Obelisk.'
      },
    'L\'Obelisk est une très grande tour située au centre de la partie Est de la région.':
      { en:'The Obelisk is a very tall tower located at the centre of the eastern part of the region.',
        de:'Der Obelisk ist ein sehr großer Turm im Zentrum des östlichen Teils der Region.',
        es:'El Obelisk es una enorme torre situada en el centro de la parte este de la región.',
        it:'L\'Obelisk è un\'altissima torre situata al centro della parte orientale della regione.'
      },
    'Une route qui fait le lien entre le village Papyris, la route 4 et la ville de Thèba.':
      { en:'A route linking the village of Papyris, Route 4 and the city of Thèba.',
        de:'Eine Route, die das Dorf Papyris, Route 4 und die Stadt Thèba verbindet.',
        es:'Una ruta que une el pueblo de Papyris, la Ruta 4 y la ciudad de Thèba.',
        it:'Una rotta che collega il villaggio di Papyris, la Rotta 4 e la città di Thèba.'
      },
    'Capitale de la région, Thèba est la ville des échanges et des esprits.':
      { en:'Capital of the region, Thèba is the city of trade and spirits.',
        de:'Als Hauptstadt der Region ist Thèba die Stadt des Handels und der Geister.',
        es:'Capital de la región, Thèba es la ciudad de los intercambios y los espíritus.',
        it:'Capitale della regione, Thèba è la città degli scambi e degli spiriti.'
      },
    'Située au Sud-Est de la région de Khemis, cette carrière de granite abrite quelques habitants ou plutôt des ouvriers.':
      { en:'Located in the southeast of the Khemis region, this granite quarry houses a few inhabitants — or rather, workers.',
        de:'Im Südosten der Region Khemis gelegen, beherbergt dieser Granitsteinbruch einige Einwohner – oder vielmehr Arbeiter.',
        es:'Situada al sureste de la región de Khemis, esta cantera de granito alberga a algunos habitantes, o más bien trabajadores.',
        it:'Situata a sudest della regione di Khemis, questa cava di granito ospita alcuni abitanti, o meglio operai.'
      },
    'La route longe le bord de la Mer Rubea à l\'Est de la région pour atteindre les ruines d\'une ancienne cité plus au Nord du nom de Per-Ankh.':
      { en:'The route runs along the Rubea Sea to the east of the region, leading to the ruins of an ancient city called Per-Ankh to the north.',
        de:'Die Route verläuft entlang des Rubea-Meeres im Osten der Region und führt zu den Ruinen einer alten Stadt namens Per-Ankh im Norden.',
        es:'La ruta bordea el Mar Rubea al este de la región para llegar a las ruinas de una antigua ciudad al norte llamada Per-Ankh.',
        it:'La rotta costeggia il Mare Rubea a est della regione per raggiungere le rovine di un\'antica città a nord chiamata Per-Ankh.'
      },
    'Une tour cachée située tout au Sud-Est de la région. On dit qu\'elle est occupée par des âmes de Pokémon.':
      { en:'A hidden tower located in the far southeast of the region. It is said to be haunted by the souls of Pokémon.',
        de:'Ein versteckter Turm im äußersten Südosten der Region. Man sagt, er sei von Pokémon-Seelen bewohnt.',
        es:'Una torre oculta situada en el extremo sureste de la región. Se dice que está ocupada por almas de Pokémon.',
        it:'Una torre nascosta situata all\'estremo sudest della regione. Si dice sia occupata da anime di Pokémon.'
      },
    'Per-Ankh était autrefois une ville de savoir. Elle abritait des antiquités et des écrits de longue date.':
      { en:'Per-Ankh was once a city of knowledge. It housed antiquities and long-standing writings.',
        de:'Per-Ankh war einst eine Stadt des Wissens. Sie beherbergte Antiquitäten und jahrhundertealte Schriften.',
        es:'Per-Ankh fue en su día una ciudad del saber. Albergaba antigüedades y escritos de larga data.',
        it:'Per-Ankh era un tempo una città del sapere. Ospitava antichità e scritti di lunga data.'
      },
    'Île Nephthys':                      { en:'Nephthys Island',        de:'Insel Nephthys',          es:'Isla Nephthys',           it:'Isola Nephthys'          },
    'Chemin du temple de Phyrae':        { en:'Path to the Phyrae Temple', de:'Weg zum Phyrae-Tempel', es:'Camino al Templo Phyrae', it:'Sentiero del Tempio Phyrae' },
    'Temple de Phyrae':                  { en:'Phyrae Temple',          de:'Phyrae-Tempel',           es:'Templo Phyrae',           it:'Tempio Phyrae'           },
    'Rive':                              { en:'Riverbank',              de:'Flussufer',               es:'Orilla',                  it:'Riva'                    },
    'Rive Sobek':                        { en:'Sobek Riverbank',        de:'Sobek-Ufer',              es:'Orilla Sobek',            it:'Riva Sobek'              },
    'Carrière Thurae':                   { en:'Thurae Quarry',          de:'Steinbruch Thurae',       es:'Cantera Thurae',          it:'Cava Thurae'             },
    'Carrière Granos':                   { en:'Granos Quarry',          de:'Steinbruch Granos',       es:'Cantera Granos',          it:'Cava Granos'             },
    'Obelisk':                           { en:'Obelisk',                de:'Obelisk',                 es:'Obelisk',                 it:'Obelisk'                 },
    'Tour Mystérieuse':                  { en:'Mysterious Tower',       de:'Mysteriöser Turm',        es:'Torre Misteriosa',        it:'Torre Misteriosa'        },
    'Ruines Per-Ankh':                   { en:'Per-Ankh Ruins',         de:'Ruinen Per-Ankh',         es:'Ruinas Per-Ankh',         it:'Rovine Per-Ankh'         },
    'Île Kheperet':                      { en:'Kheperet Island',        de:'Insel Kheperet',          es:'Isla Kheperet',           it:'Isola Kheperet'          },
    'Île Sokaris':                       { en:'Sokaris Island',         de:'Insel Sokaris',           es:'Isla Sokaris',            it:'Isola Sokaris'           },
    'Ouasis':                            { en:'Ouasis',                 de:'Ouasis',                  es:'Ouasis',                  it:'Ouasis'                  },
    'Papyris':                           { en:'Papyris',                de:'Papyris',                 es:'Papyris',                 it:'Papyris'                 },
    'Isara':                             { en:'Isara',                  de:'Isara',                   es:'Isara',                   it:'Isara'                   },
    'Peramaris':                         { en:'Peramaris',              de:'Peramaris',               es:'Peramaris',               it:'Peramaris'               },
    'Thèba':                             { en:'Thèba',                  de:'Thèba',                   es:'Thèba',                   it:'Thèba'                   },
    'Î le':                              { en:'Island',                 de:'Insel',                   es:'Isla',                    it:'Isola'                   },
    'Lire le guide ':                    { en:'Read the guide ',        de:'Leitfaden lesen ',        es:'Leer la guía ',           it:'Leggi la guida '         },

    // ── Objets (objets.html) — sections / sidebar ─────────────────
    'Affichage de':                      { en:'Showing',                de:'Zeige',                   es:'Mostrando',               it:'Mostrando'               },
    'objets':                            { en:'items',                  de:'Items',                   es:'objetos',                 it:'oggetti'                 },
    'Équipement':                        { en:'Equipment',              de:'Ausrüstung',              es:'Equipamiento',            it:'Equipaggiamento'         },
    'Médecine':                          { en:'Medicine',               de:'Medizin',                 es:'Medicina',                it:'Medicina'                },
    'Capture':                           { en:'Capture',                de:'Fangen',                  es:'Captura',                 it:'Cattura'                 },
    'Évolution':                         { en:'Evolution',              de:'Entwicklung',             es:'Evolución',               it:'Evoluzione'              },
    'Capacités':                         { en:'Moves',                  de:'Attacken',                es:'Movimientos',             it:'Mosse'                   },
    'Archéologie':                       { en:'Archaeology',            de:'Archäologie',             es:'Arqueología',             it:'Archeologia'             },
    'Gemmes':                            { en:'Gems',                   de:'Edelsteine',              es:'Gemas',                   it:'Gemme'                   },
    'Antiquités':                        { en:'Antiquities',            de:'Antiquitäten',            es:'Antigüedades',            it:'Antichità'               },
    'Reliques':                          { en:'Relics',                 de:'Relikte',                 es:'Reliquias',               it:'Reliquie'                },
    'Divers':                            { en:'Miscellaneous',          de:'Sonstiges',               es:'Varios',                  it:'Vario'                   },
    'Objets Uniques':                    { en:'Unique Items',           de:'Einzigartige Items',      es:'Objetos Únicos',          it:'Oggetti Unici'           },
    'Autres Objets':                     { en:'Other Items',            de:'Andere Gegenstände',      es:'Otros Objetos',           it:'Altri Oggetti'           },
    'Objets de soin':                    { en:'Healing items',          de:'Heilgegenstände',         es:'Objetos de curación',     it:'Oggetti curativi'        },
    'Objets à tenir':                    { en:'Held items',             de:'Halte-Items',             es:'Objetos a llevar',        it:'Oggetti da tenere'       },
    '69 objets':                         { en:'69 items',               de:'69 Items',                es:'69 objetos',              it:'69 oggetti'              },
    '22 objets':                         { en:'22 items',               de:'22 Items',                es:'22 objetos',              it:'22 oggetti'              },
    '11 balls':                          { en:'11 balls',               de:'11 Bälle',                es:'11 balls',                it:'11 ball'                 },
    '11 pierres — 100 P$ chacune':       { en:'11 stones — 100 P$ each', de:'11 Steine — je 100 P$',  es:'11 piedras — 100 P$ c/u',  it:'11 pietre — 100 P$ ciascuna' },
    '2 types':                           { en:'2 types',                de:'2 Typen',                 es:'2 tipos',                 it:'2 tipi'                  },
    '7 fossiles — Carrière Granos':      { en:'7 fossils — Granos Quarry', de:'7 Fossilien — Steinbruch Granos', es:'7 fósiles — Cantera Granos', it:'7 fossili — Cava Granos' },
    '18 joyaux — 5 P$ chacun':          { en:'18 gems — 5 P$ each',    de:'18 Edelsteine — je 5 P$', es:'18 gemas — 5 P$ c/u',     it:'18 gemme — 5 P$ ciascuna' },
    '14 objets — À revendre':            { en:'14 items — To sell',     de:'14 Items — Zu verkaufen', es:'14 objetos — Para vender', it:'14 oggetti — Da rivendere' },
    '12 objets':                         { en:'12 items',               de:'12 Items',                es:'12 objetos',              it:'12 oggetti'              },
    '8 objets':                          { en:'8 items',                de:'8 Items',                 es:'8 objetos',               it:'8 oggetti'              },
    'Consommable':                       { en:'Consumable',             de:'Verbrauchsgegenstand',    es:'Consumible',              it:'Consumabile'             },
    'Permanent, doré et orné de lapis-lazuli': { en:'Permanent, gold and adorned with lapis lazuli', de:'Dauerhaft, golden und mit Lapislazuli verziert', es:'Permanente, dorado y adornado con lapislázuli', it:'Permanente, dorato e ornato di lapislazzuli' },
    'Unique':                            { en:'Unique',                 de:'Einzigartig',             es:'Único',                   it:'Unico'                   },
    'Inestimable':                       { en:'Priceless',              de:'Unbezahlbar',             es:'Inestimable',             it:'Inestimabile'            },
    'Objet de quête':                    { en:'Quest item',             de:'Questgegenstand',         es:'Objeto de misión',        it:'Oggetto missione'        },
    'Objet mystérieux':                  { en:'Mysterious item',        de:'Mysteriöses Objekt',      es:'Objeto misterioso',       it:'Oggetto misterioso'      },
    'Bonne valeur':                      { en:'Good value',             de:'Guter Wert',              es:'Buen valor',              it:'Buon valore'             },
    'Grande valeur':                     { en:'High value',             de:'Hoher Wert',              es:'Gran valor',              it:'Grande valore'           },
    'Très grande valeur':                { en:'Very high value',        de:'Sehr hoher Wert',         es:'Muy gran valor',          it:'Valore molto alto'       },
    'Valeur exceptionnelle':             { en:'Exceptional value',      de:'Außergewöhnlicher Wert',  es:'Valor excepcional',       it:'Valore eccezionale'      },
    'PS Éclate-Roc':                     { en:'PS Rock Smash',          de:'PS Felsbrecher',          es:'PS Rompecanto',           it:'PS Forza Bruta'          },

    // ── Évolutions (evolutions.html) — textes notes ───────────────
    'Affichage de ':                     { en:'Showing ',               de:'Zeige ',                  es:'Mostrando ',              it:'Mostrando '              },
    'Niv. ':                             { en:'Lv. ',                   de:'Lv. ',                    es:'Nv. ',                    it:'Lv. '                    },

    // ── Index (index.html) — footer brand ─────────────────────────
    'Un fangame Pokémon amateur créé avec passion, plongé dans la magie et le mystère de l\'Égypte Antique.':
      { en:'An amateur Pokémon fangame created with passion, steeped in the magic and mystery of Ancient Egypt.',
        de:'Ein liebevoll erstelltes Amateur-Pokémon-Fangame, durchdrungen von der Magie und dem Geheimnis des alten Ägyptens.',
        es:'Un fangame Pokémon amateur creado con pasión, impregnado de la magia y el misterio del Antiguo Egipto.',
        it:'Un fangame Pokémon amatoriale creato con passione, impregnato della magia e del mistero dell\'Antico Egitto.'
      },
    'En développement':                  { en:'In development',         de:'In Entwicklung',          es:'En desarrollo',           it:'In sviluppo'             },

    // ════════════════════════════════════════════════════════════════
    // TYPES (types.html) — noms Khemis + anciens noms + UI
    // ════════════════════════════════════════════════════════════════
    // Noms des types Khemis
    'Normal':   { en:'Normal',   de:'Normal',    es:'Normal',   it:'Normale'  },
    'Feu':      { en:'Fire',     de:'Feuer',      es:'Fuego',    it:'Fuoco'    },
    'Eau':      { en:'Water',    de:'Wasser',     es:'Agua',     it:'Acqua'    },
    'Foudre':   { en:'Thunder',  de:'Blitz',      es:'Trueno',   it:'Tuono'    },
    'Plante':   { en:'Grass',    de:'Pflanze',    es:'Planta',   it:'Erba'     },
    'Gel':      { en:'Frost',    de:'Frost',      es:'Hielo',    it:'Gelo'     },
    'Combat':   { en:'Fighting', de:'Kampf',      es:'Lucha',    it:'Lotta'    },
    'Poison':   { en:'Poison',   de:'Gift',       es:'Veneno',   it:'Veleno'   },
    'Sol':      { en:'Ground',   de:'Boden',      es:'Tierra',   it:'Terra'    },
    'Vol':      { en:'Flying',   de:'Flug',       es:'Volador',  it:'Volante'  },
    'Esprit':   { en:'Spirit',   de:'Geist',      es:'Espíritu', it:'Spirito'  },
    'Insect':   { en:'Bug',      de:'Käfer',      es:'Bicho',    it:'Coleottero' },
    'Granit':   { en:'Rock',     de:'Gestein',    es:'Roca',     it:'Roccia'   },
    'Âme':      { en:'Soul',     de:'Seele',      es:'Alma',     it:'Anima'    },
    'Dragon':   { en:'Dragon',   de:'Drachen',    es:'Dragón',   it:'Drago'    },
    'Métal':    { en:'Steel',    de:'Stahl',      es:'Acero',    it:'Acciaio'  },
    'Ombre':    { en:'Shadow',   de:'Schatten',   es:'Sombra',   it:'Ombra'    },
    'Divin':    { en:'Divine',   de:'Göttlich',   es:'Divino',   it:'Divino'   },
    // Anciens noms (rename-banner)
    'Psy':      { en:'Psychic',  de:'Psycho',     es:'Psíquico', it:'Psico'    },
    'Glace':    { en:'Ice',      de:'Eis',        es:'Hielo',    it:'Ghiaccio' },
    'Acier':    { en:'Steel',    de:'Stahl',      es:'Acero',    it:'Acciaio'  },
    'Électrik': { en:'Electric', de:'Elektro',    es:'Eléctrico',it:'Elettrico'},
    'Spectre':  { en:'Ghost',    de:'Geist',      es:'Fantasma', it:'Spettro'  },
    'Ténèbres': { en:'Dark',     de:'Unlicht',    es:'Siniestro',it:'Buio'     },
    'Roche':    { en:'Rock',     de:'Gestein',    es:'Roca',     it:'Roccia'   },
    'Fée':      { en:'Fairy',    de:'Fee',        es:'Hada',     it:'Folletto' },
    // UI types.html
    '✦ Les Énergies de Khemis ✦':   { en:'✦ The Energies of Khemis ✦', de:'✦ Die Energien von Khemis ✦', es:'✦ Las Energías de Khemis ✦', it:'✦ Le Energie di Khemis ✦' },
    'Les 18 types de la région, certains ont été renommés pour mieux refléter la culture et la magie de l\'Égypte antique de Khemis.':
      { en:'The 18 types of the region, some of which have been renamed to better reflect the culture and magic of ancient Khemis.',
        de:'Die 18 Typen der Region, von denen einige umbenannt wurden, um die Kultur und Magie des antiken Khemis besser widerzuspiegeln.',
        es:'Los 18 tipos de la región, algunos renombrados para reflejar mejor la cultura y la magia del antiguo Khemis.',
        it:'I 18 tipi della regione, alcuni rinominati per riflettere meglio la cultura e la magia dell\'antico Khemis.' },
    '𓂋 Renommés':       { en:'𓂋 Renamed',      de:'𓂋 Umbenannt',    es:'𓂋 Renombrados', it:'𓂋 Rinominati'  },
    'Les 18 Types':      { en:'The 18 Types',    de:'Die 18 Typen',    es:'Los 18 Tipos',   it:'I 18 Tipi'     },
    'Tableau des Affinités': { en:'Type Chart',  de:'Typentabelle',   es:'Tabla de Afinidades', it:'Tabella delle Affinità' },
    'Lignes = type de l\'attaque · Colonnes = type du Pokémon défenseur.\n      Survolez une cellule pour voir sa valeur.':
      { en:'Rows = attacking type · Columns = defending Pokémon type. Hover a cell to see its value.',
        de:'Zeilen = Angriffstyp · Spalten = Typ des verteidigenden Pokémon. Zelle hovern für den Wert.',
        es:'Filas = tipo atacante · Columnas = tipo del Pokémon defensor. Pasa el cursor para ver el valor.',
        it:'Righe = tipo attaccante · Colonne = tipo del Pokémon difensore. Passa sopra per vedere il valore.' },
    'Super efficace (×2)': { en:'Super effective (×2)', de:'Sehr effektiv (×2)', es:'Súper eficaz (×2)', it:'Super efficace (×2)' },
    'Normal (×1)':         { en:'Normal (×1)',          de:'Normal (×1)',        es:'Normal (×1)',       it:'Normale (×1)'       },
    'Résisté (×½)':        { en:'Resistant (×½)',       de:'Resistent (×½)',     es:'Resistido (×½)',    it:'Resistito (×½)'     },
    'Immunisé (×0)':       { en:'Immune (×0)',          de:'Immun (×0)',         es:'Inmune (×0)',       it:'Immunizzato (×0)'   },
    'Super efficace vs':   { en:'Super effective vs',   de:'Sehr effektiv gg.',  es:'Súper eficaz vs',  it:'Super efficace vs'  },
    'Anciennement :':      { en:'Formerly:',            de:'Früher:',            es:'Anteriormente:',   it:'In precedenza:'     },
    'Nom inchangé':        { en:'Unchanged name',       de:'Name unverändert',   es:'Nombre sin cambio',it:'Nome invariato'     },
    '⬆ Super efficace contre': { en:'⬆ Super effective against', de:'⬆ Sehr effektiv gegen', es:'⬆ Súper eficaz contra', it:'⬆ Super efficace contro' },
    '⬇ Peu efficace contre':   { en:'⬇ Not very effective against', de:'⬇ Wenig effektiv gegen', es:'⬇ Poco eficaz contra', it:'⬇ Poco efficace contro' },
    '✕ Sans effet contre':     { en:'✕ No effect against',  de:'✕ Keine Wirkung gegen', es:'✕ Sin efecto contra', it:'✕ Nessun effetto contro' },
    '⚠ Faible face à':         { en:'⚠ Weak to',            de:'⚠ Schwach gegen',       es:'⚠ Débil frente a',   it:'⚠ Debole contro'        },
    '🛡 Résiste à':            { en:'🛡 Resists',           de:'🛡 Resistent gegen',    es:'🛡 Resiste a',       it:'🛡 Resiste a'           },
    '🚫 Immunisé contre':      { en:'🚫 Immune to',         de:'🚫 Immun gegen',        es:'🚫 Inmune a',        it:'🚫 Immune a'            },
    '✕ Fermer':                { en:'✕ Close',              de:'✕ Schließen',           es:'✕ Cerrar',           it:'✕ Chiudi'               },
    'Aucun':                   { en:'None',                 de:'Keine',                 es:'Ninguno',            it:'Nessuno'                },
    'Rechercher un type…':     { en:'Search a type…',       de:'Typ suchen…',           es:'Buscar un tipo…',    it:'Cerca un tipo…'         },

    // ════════════════════════════════════════════════════════════════
    // ÉVOLUTIONS (evolutions.html) — UI + objets + notes
    // ════════════════════════════════════════════════════════════════
    '✦ Khemis Évolué ✦':    { en:'✦ Evolved Khemis ✦',   de:'✦ Entwickeltes Khemis ✦', es:'✦ Khemis Evolucionado ✦', it:'✦ Khemis Evoluto ✦' },
    'Toutes les conditions d\'évolution de la région, notamment les évolutions simplifiées spécifiques à Khemis, avec leurs objets et lieux requis.':
      { en:'All evolution conditions of the region, including simplified evolutions specific to Khemis, with their required items and locations.',
        de:'Alle Entwicklungsbedingungen der Region, einschließlich vereinfachter, für Khemis spezifischer Entwicklungen, mit den erforderlichen Gegenständen und Orten.',
        es:'Todas las condiciones de evolución de la región, incluidas las evoluciones simplificadas específicas de Khemis, con sus objetos y lugares requeridos.',
        it:'Tutte le condizioni di evoluzione della regione, comprese le evoluzioni semplificate specifiche di Khemis, con gli oggetti e i luoghi richiesti.' },
    'Méthodes :':    { en:'Methods:',          de:'Methoden:',          es:'Métodos:',           it:'Metodi:'            },
    '💎 Pierre':     { en:'💎 Stone',           de:'💎 Stein',            es:'💎 Piedra',           it:'💎 Pietra'           },
    '⬆️ Niveau':     { en:'⬆️ Level',           de:'⬆️ Level',            es:'⬆️ Nivel',            it:'⬆️ Livello'          },
    '🏺 Objet':      { en:'🏺 Item',            de:'🏺 Item',             es:'🏺 Objeto',           it:'🏺 Oggetto'          },
    '📍 Lieu':       { en:'📍 Location',        de:'📍 Ort',              es:'📍 Lugar',            it:'📍 Luogo'            },
    '✦ Spécial':     { en:'✦ Special',          de:'✦ Speziell',          es:'✦ Especial',          it:'✦ Speciale'         },
    'Rechercher une évolution': { en:'Search an evolution', de:'Entwicklung suchen', es:'Buscar una evolución', it:'Cerca un\'evoluzione' },
    'Pierre':        { en:'Stone',              de:'Stein',               es:'Piedra',              it:'Pietra'             },
    'Niveau':        { en:'Level',              de:'Level',               es:'Nivel',               it:'Livello'            },
    'Objet':         { en:'Item',               de:'Item',                es:'Objeto',              it:'Oggetto'            },
    'Lieu':          { en:'Location',           de:'Ort',                 es:'Lugar',               it:'Luogo'              },
    'Spécial':       { en:'Special',            de:'Speziell',            es:'Especial',            it:'Speciale'           },
    '/ 36 évolutions': { en:'/ 36 evolutions', de:'/ 36 Entwicklungen',  es:'/ 36 evoluciones',    it:'/ 36 evoluzioni'    },
    '💎 Pierre':     { en:'💎 Stone',           de:'💎 Stein',            es:'💎 Piedra',           it:'💎 Pietra'           },
    '⬆️ Niveau':     { en:'⬆️ Level',           de:'⬆️ Level',            es:'⬆️ Nivel',            it:'⬆️ Livello'          },
    '🏺 Objet':      { en:'🏺 Item',            de:'🏺 Item',             es:'🏺 Objeto',           it:'🏺 Oggetto'          },
    '📍 Lieu':       { en:'📍 Location',        de:'📍 Ort',              es:'📍 Lugar',            it:'📍 Luogo'            },
    '✦ Spécial':     { en:'✦ Special',          de:'✦ Speziell',          es:'✦ Especial',          it:'✦ Speciale'         },
    // Noms d'objets d'évolution
    'Pierre Eau':         { en:'Water Stone',      de:'Wasserstein',        es:'Piedra Agua',         it:'Pietracqua'         },
    'Pierre Gelée':       { en:'Ice Stone',        de:'Eisstein',           es:'Piedra Hielo',        it:'Pietragelo'         },
    'Pierre Aube':        { en:'Shiny Stone',      de:'Glitzerstein',       es:'Piedra Refulgente',   it:'Pietrabrillo'       },
    'Peau Métal':         { en:'Metal Coat',       de:'Metallmantel',       es:'Revestimiento Férreo',it:'Metallmanto'        },
    'Masse Os':           { en:'Thick Club',       de:'Knotenkeule',        es:'Hueso Gordo',         it:'Nodosomazza'        },
    'Écaille Draco':      { en:'Dragon Scale',     de:'Drachenschuppe',     es:'Escama Draco',        it:'Squama Drago'       },
    'Tissu Fauche':       { en:'Reaper Cloth',     de:'Sensenstoff',        es:'Tela Guadaña',        it:'Tessuto Falce'      },
    'Écaille Divine':     { en:'Prism Scale',      de:'Prismaschuppe',      es:'Escama Prisma',       it:'Squama Prisma'      },
    'Croc Dragon':        { en:'Dragon Fang',      de:'Drachenzahn',        es:'Colmillo Dragón',     it:'Zanna Drago'        },
    'Gantelet d\'Anubis': { en:'Anubis Gauntlet',  de:'Anubis-Handschuh',   es:'Guantelete de Anubis',it:'Guanto di Anubis'   },
    'Griffe Rasoir':      { en:'Razor Claw',       de:'Schneiderklaue',     es:'Garra Afilada',       it:'Artiglio Rasoio'    },
    'Croc Rasoir':        { en:'Razor Fang',       de:'Schneiderzahn',      es:'Colmillo Afilado',    it:'Zanna Rasoio'       },
    'Vase Hanté':         { en:'Haunted Vase',     de:'Gespenstervase',     es:'Jarrón Embrujado',    it:'Vaso Infestato'     },
    'Collier de Bastet':  { en:'Bastet\'s Collar', de:'Bastet-Halsband',    es:'Collar de Bastet',    it:'Collare di Bastet'  },
    'Protecteur':         { en:'Protector',        de:'Protektor',          es:'Protector',           it:'Protettore'         },
    'Bec Pointu':         { en:'Sharp Beak',       de:'Scharfschnabel',     es:'Pico Puntiagudo',     it:'Becco Aguzzo'       },
    // Lieux d'évolution
    'Île Sokaris':        { en:'Sokaris Island',   de:'Insel Sokaris',      es:'Isla Sokaris',        it:'Isola Sokaris'      },
    'Pyramide Djeser':    { en:'Djeser Pyramid',   de:'Djeser-Pyramide',    es:'Pirámide Djeser',     it:'Piramide Djeser'    },
    'Pyramide Atumis':    { en:'Atumis Pyramid',   de:'Atumis-Pyramide',    es:'Pirámide Atumis',     it:'Piramide Atumis'    },
    'Temple Phyrae':      { en:'Phyrae Temple',    de:'Phyrae-Tempel',      es:'Templo Phyrae',       it:'Tempio Phyrae'      },
    'Grotte Granos':      { en:'Granos Cave',      de:'Granos-Höhle',       es:'Cueva Granos',        it:'Grotta Granos'      },
    // Notes d'évolution
    'Plus besoin d\'entraîner un misérable magicarpe pour qu\'il évolue, donnez-lui une Pierre Eau et sa puissance n\'en sera que multipliée !':
      { en:'No need to train a pitiful Magikarp to make it evolve — give it a Water Stone and its power will be multiplied!',
        de:'Kein mühsames Training mehr für einen erbärmlichen Karpador — gib ihm einfach einen Wasserstein und seine Kraft wird vervielfacht!',
        es:'Ya no hace falta entrenar a un patético Magikarp para que evolucione — ¡dale una Piedra Agua y su poder se multiplicará!',
        it:'Non è più necessario allenare un misero Magikarp per farlo evolvere — dagli una Pietracqua e la sua potenza sarà moltiplicata!' },
    'Utiliser une Pierre Gelée sur Stalgamin à partir du niveau 30 pour obtenir Oniglali.':
      { en:'Use an Ice Stone on Swinub from level 30 to obtain Piloswine.',
        de:'Benutze einen Eisstein auf Quiekel ab Level 30, um Zweipiter zu erhalten.',
        es:'Usa una Piedra Hielo en Swinub desde el nivel 30 para obtener Piloswine.',
        it:'Usa una Pietragelo su Swinub dal livello 30 per ottenere Piloswine.' },
    'Utiliser une Pierre Gelée sur Stalgamin à partir du niveau 30 pour obtenir Momartik.':
      { en:'Use a Shiny Stone on Swinub from level 30 to obtain Mamoswine.',
        de:'Benutze einen Glitzerstein auf Quiekel ab Level 30, um Mamutel zu erhalten.',
        es:'Usa una Piedra Refulgente en Swinub desde el nivel 30 para obtener Mamoswine.',
        it:'Usa una Pietrabrillo su Swinub dal livello 30 per ottenere Mamoswine.' },
    'Gravalanch évolue à partir du niveau 45 en Grolem !':
      { en:'Graveler evolves from level 45 into Golem!',
        de:'Georok entwickelt sich ab Level 45 zu Geowaz!',
        es:'Graveler evoluciona a partir del nivel 45 en Golem.',
        it:'Graveler si evolve dal livello 45 in Golem!' },
    'Spectrum évolue à partir du niveau 45 en Ectoplasma.':
      { en:'Haunter evolves from level 45 into Gengar.',
        de:'Gastly entwickelt sich ab Level 45 zu Gengar.',
        es:'Haunter evoluciona a partir del nivel 45 en Gengar.',
        it:'Haunter si evolve dal livello 45 in Gengar.' },
    'Kadabra évolue à partir du niveau 45 en Alakazam.':
      { en:'Kadabra evolves from level 45 into Alakazam.',
        de:'Kadabra entwickelt sich ab Level 45 zu Simsala.',
        es:'Kadabra evoluciona a partir del nivel 45 en Alakazam.',
        it:'Kadabra si evolve dal livello 45 in Alakazam.' },
    'Kraknoix évolue à partir du niveau 30 en Vibraninf.':
      { en:'Krabby evolves from level 30 into Kingler.',
        de:'Krabby entwickelt sich ab Level 30 zu Kingler.',
        es:'Krabby evoluciona a partir del nivel 30 en Kingler.',
        it:'Krabby si evolve dal livello 30 in Kingler.' },
    'Hypotrempe évolue à partir du niveau 25 en Hypocéan.':
      { en:'Horsea evolves from level 25 into Seadra.',
        de:'Seeper entwickelt sich ab Level 25 zu Seemon.',
        es:'Horsea evoluciona a partir del nivel 25 en Seadra.',
        it:'Horsea si evolve dal livello 25 in Seadra.' },
    'Skelénox évolue à partir du niveau 30 en Téraclope.':
      { en:'Duskull evolves from level 30 into Dusclops.',
        de:'Zwirrlicht entwickelt sich ab Level 30 zu Zwirrklop.',
        es:'Duskull evoluciona a partir del nivel 30 en Dusclops.',
        it:'Duskull si evolve dal livello 30 in Dusclops.' },
    'Pyronille évolue en Pyrax au niveau 26 - évolution standard (Starter).':
      { en:'Pyronille evolves into Pyrax at level 26 — standard evolution (Starter).',
        de:'Pyronille entwickelt sich ab Level 26 zu Pyrax — Standardentwicklung (Starter).',
        es:'Pyronille evoluciona en Pyrax al nivel 26 — evolución estándar (Inicial).',
        it:'Pyronille si evolve in Pyrax al livello 26 — evoluzione standard (Starter).' },
    'Scalpion évolue en Scalproie au niveau 26 - évolution standard (Starter).':
      { en:'Scalpion evolves into Scalproie at level 26 — standard evolution (Starter).',
        de:'Scalpion entwickelt sich ab Level 26 zu Scalproie — Standardentwicklung (Starter).',
        es:'Scalpion evoluciona en Scalproie al nivel 26 — evolución estándar (Inicial).',
        it:'Scalpion si evolve in Scalproie al livello 26 — evoluzione standard (Starter).' },
    'Zorua évolue en Zoroark au niveau 26 - évolution standard (Starter).':
      { en:'Zorua evolves into Zoroark at level 26 — standard evolution (Starter).',
        de:'Zorua entwickelt sich ab Level 26 zu Zoroark — Standardentwicklung (Starter).',
        es:'Zorua evoluciona en Zoroark al nivel 26 — evolución estándar (Inicial).',
        it:'Zorua si evolve in Zoroark al livello 26 — evoluzione standard (Starter).' },
    'Amonita évolue en Amonistar au niveau 30 - évolution standard.':
      { en:'Omanyte evolves into Omastar at level 30 — standard evolution.',
        de:'Amonitas entwickelt sich ab Level 30 zu Amoroso — Standardentwicklung.',
        es:'Omanyte evoluciona en Omastar al nivel 30 — evolución estándar.',
        it:'Omanyte si evolve in Omastar al livello 30 — evoluzione standard.' },
    'Kabuto évolue en Kabutops au niveau 30 - évolution standard.':
      { en:'Kabuto evolves into Kabutops at level 30 — standard evolution.',
        de:'Kabuto entwickelt sich ab Level 30 zu Kabutops — Standardentwicklung.',
        es:'Kabuto evoluciona en Kabutops al nivel 30 — evolución estándar.',
        it:'Kabuto si evolve in Kabutops al livello 30 — evoluzione standard.' },
    'Lilia évolue en Vacilys au niveau 30 - évolution standard.':
      { en:'Budew evolves into Roselia at level 30 — standard evolution.',
        de:'Knospi entwickelt sich ab Level 30 zu Roselia — Standardentwicklung.',
        es:'Budew evoluciona en Roselia al nivel 30 — evolución estándar.',
        it:'Budew si evolve in Roselia al livello 30 — evoluzione standard.' },
    'Anorith évolue en Armaldo au niveau 30 - évolution standard.':
      { en:'Anorith evolves into Armaldo at level 30 — standard evolution.',
        de:'Anorith entwickelt sich ab Level 30 zu Armaldo — Standardentwicklung.',
        es:'Anorith evoluciona en Armaldo al nivel 30 — evolución estándar.',
        it:'Anorith si evolve in Armaldo al livello 30 — evoluzione standard.' },
    'Carapagos évolue en Megapagos au niveau 30 - évolution standard.':
      { en:'Shieldon evolves into Bastiodon at level 30 — standard evolution.',
        de:'Schildovil entwickelt sich ab Level 30 zu Bastiodon — Standardentwicklung.',
        es:'Shieldon evoluciona en Bastiodon al nivel 30 — evolución estándar.',
        it:'Shieldon si evolve in Bastiodon al livello 30 — evoluzione standard.' },
    'Arkéapti évolue en Aéroptéryx au niveau 30 - évolution standard.':
      { en:'Cranidos evolves into Rampardos at level 30 — standard evolution.',
        de:'Koknodon entwickelt sich ab Level 30 zu Rameidon — Standardentwicklung.',
        es:'Cranidos evoluciona en Rampardos al nivel 30 — evolución estándar.',
        it:'Cranidos si evolve in Rampardos al livello 30 — evoluzione standard.' },
    'Bennu évolue en Râ au niveau 55 - évolution standard.':
      { en:'Bennu evolves into Râ at level 55 — standard evolution.',
        de:'Bennu entwickelt sich ab Level 55 zu Râ — Standardentwicklung.',
        es:'Bennu evoluciona en Râ al nivel 55 — evolución estándar.',
        it:'Bennu si evolve in Râ al livello 55 — evoluzione standard.' },
    'Monter d\'un niveau avec la Peau Métal à partir du niveau 30.':
      { en:'Level up with Metal Coat from level 30.',
        de:'Ein Level aufsteigen mit Metallmantel ab Level 30.',
        es:'Subir un nivel con Revestimiento Férreo desde el nivel 30.',
        it:'Salire di un livello con Metallmanto dal livello 30.' },
    'Monter d\'un niveau avec la Masse Os à partir du niveau 28.':
      { en:'Level up with Thick Club from level 28.',
        de:'Ein Level aufsteigen mit Knotenkeule ab Level 28.',
        es:'Subir un nivel con Hueso Gordo desde el nivel 28.',
        it:'Salire di un livello con Nodosomazza dal livello 28.' },
    'Monter d\'un niveau avec l\'Écaille Draco à partir du niveau 40.':
      { en:'Level up with Dragon Scale from level 40.',
        de:'Ein Level aufsteigen mit Drachenschuppe ab Level 40.',
        es:'Subir un nivel con Escama Draco desde el nivel 40.',
        it:'Salire di un livello con Squama Drago dal livello 40.' },
    'Monter d\'un niveau avec le Tissu Fauche à partir du niveau 40.':
      { en:'Level up with Reaper Cloth from level 40.',
        de:'Ein Level aufsteigen mit Sensenstoff ab Level 40.',
        es:'Subir un nivel con Tela Guadaña desde el nivel 40.',
        it:'Salire di un livello con Tessuto Falce dal livello 40.' },
    'Monter d\'un niveau avec l\'Écaille Divine à partir du niveau 28.':
      { en:'Level up with Prism Scale from level 28.',
        de:'Ein Level aufsteigen mit Prismaschuppe ab Level 28.',
        es:'Subir un nivel con Escama Prisma desde el nivel 28.',
        it:'Salire di un livello con Squama Prisma dal livello 28.' },
    'Monter d\'un niveau avec le Croc Dragon à partir du niveau 36.':
      { en:'Level up with Dragon Fang from level 36.',
        de:'Ein Level aufsteigen mit Drachenzahn ab Level 36.',
        es:'Subir un nivel con Colmillo Dragón desde el nivel 36.',
        it:'Salire di un livello con Zanna Drago dal livello 36.' },
    'Monter d\'un niveau avec la Griffe Rasoir à partir du niveau 30.':
      { en:'Level up with Razor Claw from level 30.',
        de:'Ein Level aufsteigen mit Schneiderklaue ab Level 30.',
        es:'Subir un nivel con Garra Afilada desde el nivel 30.',
        it:'Salire di un livello con Artiglio Rasoio dal livello 30.' },
    'Monter d\'un niveau avec le Croc Rasoir à partir du niveau 30.':
      { en:'Level up with Razor Fang from level 30.',
        de:'Ein Level aufsteigen mit Schneiderzahn ab Level 30.',
        es:'Subir un nivel con Colmillo Afilado desde el nivel 30.',
        it:'Salire di un livello con Zanna Rasoio dal livello 30.' },
    'Monter d\'un niveau avec le Protecteur à partir du niveau 36.':
      { en:'Level up with Protector from level 36.',
        de:'Ein Level aufsteigen mit Protektor ab Level 36.',
        es:'Subir un nivel con Protector desde el nivel 36.',
        it:'Salire di un livello con Protettore dal livello 36.' },
    'Monter d\'un niveau avec le Bec Pointu à partir du niveau 36.':
      { en:'Level up with Sharp Beak from level 36.',
        de:'Ein Level aufsteigen mit Scharfschnabel ab Level 36.',
        es:'Subir un nivel con Pico Puntiagudo desde el nivel 36.',
        it:'Salire di un livello con Becco Aguzzo dal livello 36.' },
    'Monter d\'un niveau sur l\'île Sokaris à partir du niveau 16.':
      { en:'Level up on Sokaris Island from level 16.',
        de:'Ein Level aufsteigen auf Insel Sokaris ab Level 16.',
        es:'Subir un nivel en la Isla Sokaris desde el nivel 16.',
        it:'Salire di un livello sull\'Isola Sokaris dal livello 16.' },
    'Monter d\'un niveau avec le Gantelet d\'Anubis dans la Pyramide Djeser à partir du niveau 30. Pokémon Semi-légendaire.':
      { en:'Level up with the Anubis Gauntlet in the Djeser Pyramid from level 30. Semi-legendary Pokémon.',
        de:'Ein Level aufsteigen mit dem Anubis-Handschuh in der Djeser-Pyramide ab Level 30. Halb-legendäres Pokémon.',
        es:'Subir un nivel con el Guantelete de Anubis en la Pirámide Djeser desde el nivel 30. Pokémon semelegendario.',
        it:'Salire di un livello con il Guanto di Anubis nella Piramide Djeser dal livello 30. Pokémon semileggendario.' },
    'Monter d\'un niveau avec le Vase Hanté dans la Pyramide Atumis à partir du niveau 30. Pokémon Semi-légendaire.':
      { en:'Level up with the Haunted Vase in the Atumis Pyramid from level 30. Semi-legendary Pokémon.',
        de:'Ein Level aufsteigen mit der Gespenstervase in der Atumis-Pyramide ab Level 30. Halb-legendäres Pokémon.',
        es:'Subir un nivel con el Jarrón Embrujado en la Pirámide Atumis desde el nivel 30. Pokémon semelegendario.',
        it:'Salire di un livello con il Vaso Infestato nella Piramide Atumis dal livello 30. Pokémon semileggendario.' },
    'Monter d\'un niveau avec le Collier de Bastet dans le Temple Phyrae à partir du niveau 30. Pokémon Semi-légendaire.':
      { en:'Level up with Bastet\'s Collar in the Phyrae Temple from level 30. Semi-legendary Pokémon.',
        de:'Ein Level aufsteigen mit dem Bastet-Halsband im Phyrae-Tempel ab Level 30. Halb-legendäres Pokémon.',
        es:'Subir un nivel con el Collar de Bastet en el Templo Phyrae desde el nivel 30. Pokémon semelegendario.',
        it:'Salire di un livello con il Collare di Bastet nel Tempio Phyrae dal livello 30. Pokémon semileggendario.' },
    'Monter d\'un niveau avec la Peau Métal. L\'évolution doit avoir lieu dans la grotte Granos.':
      { en:'Level up with Metal Coat. The evolution must take place in the Granos Cave.',
        de:'Ein Level aufsteigen mit Metallmantel. Die Entwicklung muss in der Granos-Höhle stattfinden.',
        es:'Subir un nivel con Revestimiento Férreo. La evolución debe ocurrir en la Cueva Granos.',
        it:'Salire di un livello con Metallmanto. L\'evoluzione deve avvenire nella Grotta Granos.' },
    'Ningale évolue en Ninjask à partir du niveau 20 le jour.':
      { en:'Nincada evolves into Ninjask from level 20 during the day.',
        de:'Nincada entwickelt sich ab Level 20 tagsüber zu Ninjask.',
        es:'Nincada evoluciona en Ninjask desde el nivel 20 durante el día.',
        it:'Nincada si evolve in Ninjask dal livello 20 di giorno.' },
    'Ningale évolue en Munja à partir du niveau 20 la nuit.':
      { en:'Nincada evolves into Shedinja from level 20 at night.',
        de:'Nincada entwickelt sich ab Level 20 nachts zu Ninjatom.',
        es:'Nincada evoluciona en Shedinja desde el nivel 20 durante la noche.',
        it:'Nincada si evolve in Shedinja dal livello 20 di notte.' },
    // Méthodes badges dans les cartes
    '💎 Pierre':     { en:'💎 Stone',    de:'💎 Stein',   es:'💎 Piedra',  it:'💎 Pietra'  },
    '⬆️ Niveau':     { en:'⬆️ Level',    de:'⬆️ Level',   es:'⬆️ Nivel',   it:'⬆️ Livello' },
    '🏺 Objet':      { en:'🏺 Item',     de:'🏺 Item',    es:'🏺 Objeto',  it:'🏺 Oggetto' },
    '📍 Lieu':       { en:'📍 Location', de:'📍 Ort',     es:'📍 Lugar',   it:'📍 Luogo'   },
    '✦ Spécial':     { en:'✦ Special',   de:'✦ Speziell', es:'✦ Especial', it:'✦ Speciale' },

    // ════════════════════════════════════════════════════════════════
    // PAPYRUS (papyrus.html) — types Khemis + catégories + noms d'attaques
    // ════════════════════════════════════════════════════════════════
    // Catégories d'attaques
    '⚔ Physique':   { en:'⚔ Physical',  de:'⚔ Physisch',   es:'⚔ Físico',   it:'⚔ Fisico'   },
    '✦ Spéciale':   { en:'✦ Special',   de:'✦ Speziell',   es:'✦ Especial', it:'✦ Speciale' },
    '◆ Statut':     { en:'◆ Status',    de:'◆ Status',     es:'◆ Estado',   it:'◆ Stato'    },
    'Physique':     { en:'Physical',    de:'Physisch',     es:'Físico',     it:'Fisico'     },
    'Spéciale':     { en:'Special',     de:'Speziell',     es:'Especial',   it:'Speciale'   },
    'Statut':       { en:'Status',      de:'Status',       es:'Estado',     it:'Stato'      },
    'Catégorie':    { en:'Category',    de:'Kategorie',    es:'Categoría',  it:'Categoria'  },
    'Type':         { en:'Type',        de:'Typ',          es:'Tipo',       it:'Tipo'       },
    // Hero papyrus
    '📜 Papyrus & Capacités':   { en:'📜 Papyri & Moves', de:'📜 Papyri & Attacken', es:'📜 Papiros y Movimientos', it:'📜 Papiri e Mosse' },
    'Papyrus d\'Enseignement & Papyrus Sacrés | Pokémon Cendres Antiques':
      { en:'Teaching Papyri & Sacred Papyri | Pokémon Ancient Cinders',
        de:'Lehrpapyri & Heilige Papyri | Pokémon Antike Asche',
        es:'Papiros de Enseñanza y Papiros Sagrados | Pokémon Cenizas Antiguas',
        it:'Papiri d\'Insegnamento e Papiri Sacri | Pokémon Ceneri Antiche' },
    // Noms d'attaques (orthographe exacte du fichier papyrus.html)
    'Flash':              { en:'Flash',           de:'Blitz',          es:'Destello',          it:'Flash'           },
    'Éclate-Roc':         { en:'Rock Smash',       de:'Zertrümmerer',   es:'Golpe Roca',        it:'Spaccaroccia'    },
    'Force':              { en:'Strength',         de:'Stärke',         es:'Fuerza',            it:'Forza'           },
    'Surf':               { en:'Surf',             de:'Surfer',         es:'Surf',              it:'Surf'            },
    'Vol':                { en:'Fly',              de:'Fliegen',        es:'Vuelo',             it:'Volo'            },
    'Taillade':           { en:'Fury Cutter',      de:'Zornklinge',     es:'Corte Furia',       it:'Tagliofuria'     },
    'Plongée':            { en:'Dive',             de:'Taucher',        es:'Buceo',             it:'Sub'             },
    "Ailes d'Acier":      { en:'Steel Wing',       de:'Stahlflügel',    es:'Ala de Acero',      it:'Alacciaio'       },
    'Luminocanon':        { en:'Flash Cannon',     de:'Lichtkanone',    es:'Foco Resplandor',   it:'Cannonflash'     },
    'Queue de Fer':       { en:'Iron Tail',        de:'Eisenschweif',   es:'Cola Férrea',       it:'Codacciaio'      },
    'Strido-Son':         { en:'Metal Sound',      de:'Metallsound',    es:'Eco Metálico',      it:'Ferrostrido'     },
    'Casse-Brique':       { en:'Brick Break',      de:'Durchbruch',     es:'Demolición',        it:'Breccia'         },
    'Dynamo-Poing':       { en:'Dynamic Punch',    de:'Wuchtschlag',    es:'Puño Dinámico',     it:'Dinamipugno'     },
    'Gonflette':          { en:'Bulk Up',          de:'Protzer',        es:'Corpulencia',       it:'Granfisico'      },
    'Projection':         { en:'Circle Throw',     de:'Überkopfwurf',   es:'Llave Giro',        it:'Ribaltiro'       },
    'Prévention':         { en:'Quick Guard',      de:'Rapidschutz',    es:'Anticipo',          it:'Anticipo'        },
    'Vampi-Poing':        { en:'Drain Punch',      de:'Ableithieb',     es:'Puño Drenaje',      it:'Assorbipugno'    },
    'Draco-Météore':      { en:'Draco Meteor',     de:'Draco Meteor',   es:'Cometa Draco',      it:'Dragobolide'     },
    'Draco-Choc':         { en:'Dragon Pulse',     de:'Drachenpuls',    es:'Pulso Dragón',      it:'Dragopulsar'     },
    'Draco-Griffe':       { en:'Dragon Claw',      de:'Drachenklaue',   es:'Garra Dragón',      it:'Dragartigli'     },
    'Aqua-Jet':           { en:'Aqua Jet',         de:'Wasserdüse',     es:'Acua Jet',          it:'Acquagetto'      },
    'Danse-Pluie':        { en:'Rain Dance',       de:'Regentanz',      es:'Danza Lluvia',      it:'Pioggiadanza'    },
    'Ébullition':         { en:'Scald',            de:'Siedewasser',    es:'Escaldar',          it:'Idrovampata'     },
    'Hydro-Queue':        { en:'Aqua Tail',        de:'Nassschweif',    es:'Acua Cola',         it:'Idrondata'       },
    'Pince-Masse':        { en:'Crabhammer',       de:'Krabbhammer',    es:'Martillazo',        it:'Martellata'      },
    'Saumure':            { en:'Brine',            de:'Lake',           es:'Salmuera',          it:'Acquadisale'     },
    'Vibraqua':           { en:'Water Pulse',      de:'Aquawelle',      es:'Hidropulso',        it:'Idropulsar'      },
    'Cage-Éclair':        { en:'Thunder Wave',     de:'Donnerwelle',    es:'Onda Trueno',       it:'Tuononda'        },
    "Coup d'Jus":         { en:'Discharge',        de:'Ladungsstoß',    es:'Chispazo',          it:'Scarica'         },
    'Élecanon':           { en:'Zap Cannon',       de:'Blitzkanone',    es:'Electrocañón',      it:'Falcecannone'    },
    'Fatal-Foudre':       { en:'Thunder',          de:'Donner',         es:'Trueno',            it:'Tuono'           },
    'Onde de Choc':       { en:'Shock Wave',       de:'Schockwelle',    es:'Onda Voltio',       it:'Ondashock'       },
    'Poing-Éclair':       { en:'Thunder Punch',    de:'Donnerschlag',   es:'Puño Trueno',       it:'Tuonopugno'      },
    'Tonnerre':           { en:'Thunderbolt',      de:'Donnerblitz',    es:'Rayo',              it:'Fulmine'         },
    'Vol Magnétik':       { en:'Magnet Rise',      de:'Magnetflug',     es:'Levitón',           it:'Magnetascesa'    },
    'Charme':             { en:'Charm',            de:'Charme',         es:'Encanto',           it:'Fascino'         },
    'Doux Baiser':        { en:'Sweet Kiss',       de:'Bitterkuss',     es:'Beso Dulce',        it:'Dolcebacio'      },
    'Éclat Magique':      { en:'Dazzling Gleam',   de:'Zauberschein',   es:'Brillo Mágico',     it:'Magibrillio'     },
    'Voix Enjôleuse':     { en:'Disarming Voice',  de:'Säuselstimme',   es:'Voz Cautivadora',   it:'Incantavoce'     },
    'Calcination':        { en:'Incinerate',       de:'Einäschern',     es:'Calcinación',       it:'Bruciatutto'     },
    'Danse Flammes':      { en:'Fire Spin',        de:'Feuerwirbel',    es:'Giro Fuego',        it:'Turbofuoco'      },
    'Déflagration':       { en:'Fire Blast',       de:'Feuersturm',     es:'Llamarada',         it:'Fuocobomba'      },
    'Feu Follet':         { en:'Will-O-Wisp',      de:'Irrlicht',       es:'Fuego Fatuo',       it:'Fuocofatuo'      },
    'Lance-Flammes':      { en:'Flamethrower',     de:'Flammenwurf',    es:'Lanzallamas',       it:'Lanciafiamme'    },
    'Nitrocharge':        { en:'Flame Charge',     de:'Nitroladung',    es:'Nitrocarga',        it:'Nitrocarica'     },
    'Zénith':             { en:'Sunny Day',        de:'Sonnentag',      es:'Día Soleado',       it:'Giornodisole'    },
    'Avalanche':          { en:'Avalanche',        de:'Lawine',         es:'Alud',              it:'Slavina'         },
    'Blizzard':           { en:'Blizzard',         de:'Blizzard',       es:'Ventisca',          it:'Bora'            },
    'Crocs Givre':        { en:'Ice Fang',         de:'Eiszahn',        es:'Colmillo Hielo',    it:'Gelodenti'       },
    'Grêle':              { en:'Hail',             de:'Hagelsturm',     es:'Granizo',           it:'Grandine'        },
    'Laser Glace':        { en:'Ice Beam',         de:'Eisstrahl',      es:'Rayo Hielo',        it:'Geloraggio'      },
    'Souffle Glacé':      { en:'Frost Breath',     de:'Eisesodem',      es:'Vaho Gélido',       it:'Alitogelido'     },
    'Bourdon':            { en:'Bug Buzz',         de:'Käfergebrumm',   es:'Zumbido',           it:'Ronzio'          },
    'Demi-Tour':          { en:'U-turn',           de:'Kehrtwende',     es:'Ida y Vuelta',      it:'Retromarcia'     },
    'Piqûre':             { en:'Bug Bite',         de:'Käferbiss',      es:'Picadura',          it:'Coleomorso'      },
    'Plaie Croix':        { en:'X-Scissor',        de:'Kreuzschere',    es:'Tijera X',          it:'Forbice X'       },
    'Toile':              { en:'Spider Web',       de:'Spinnennetz',    es:'Telaraña',          it:'Ragnatela'       },
    'Vent Argenté':       { en:'Silver Wind',      de:'Silberhauch',    es:'Viento Plata',      it:'Ventargenteo'    },
    'Balle Graine':       { en:'Bullet Seed',      de:'Kugelsaat',      es:'Semilladora',       it:'Semitraglia'     },
    'Éco-Sphère':         { en:'Energy Ball',      de:'Energieball',    es:'Energibola',        it:'Energipalla'     },
    'Giga-Sangsue':       { en:'Giga Drain',       de:'Gigasauger',     es:'Gigadrenado',       it:'Gigassorbimento' },
    'Lance-Soleil':       { en:'Solar Beam',       de:'Solarstrahl',    es:'Rayo Solar',        it:'Solarraggio'     },
    'Noeud Herbe':        { en:'Grass Knot',       de:'Strauchler',     es:'Hierba Lazo',       it:'Laccioerboso'    },
    'Poing Dard':         { en:'Needle Arm',       de:'Nietenranke',    es:'Brazo Pincho',      it:'Pugnospine'      },
    'Spore':              { en:'Spore',            de:'Pilzspore',      es:'Espora',            it:'Spora'           },
    'Tempête Verte':      { en:'Leaf Storm',       de:'Blättersturm',   es:'Lluevehojas',       it:'Verdebufera'     },
    'Acidarmure':         { en:'Acid Armor',       de:'Säurepanzer',    es:'Armadura Ácida',    it:'Scudo Acido'     },
    'Bombe Beurk':        { en:'Sludge Bomb',      de:'Matschbombe',    es:'Bomba Lodo',        it:'Fangobomba'      },
    'Détricanon':         { en:'Gunk Shot',        de:'Mülltreffer',    es:'Lanzamugre',        it:'Sporcolancio'    },
    'Queue-Poison':       { en:'Poison Tail',      de:'Giftschweif',    es:'Cola Veneno',       it:'Velenocoda'      },
    'Toxik':              { en:'Toxic',            de:'Toxin',          es:'Tóxico',            it:'Tossina'         },
    'Choc Psy':           { en:'Psyshock',         de:'Psychoschock',   es:'Psicocarga',        it:'Psicoshock'      },
    'Dévorêve':           { en:'Dream Eater',      de:'Traumfresser',   es:'Comesueños',        it:'Mangiasogni'     },
    'Distorsion':         { en:'Trick Room',       de:'Bizarroraum',    es:'Espacio Raro',      it:'Distortozona'    },
    'Hypnose':            { en:'Hypnosis',         de:'Hypnose',        es:'Hipnosis',          it:'Ipnosi'          },
    'Mur Lumière':        { en:'Light Screen',     de:'Lichtschild',    es:'Pantalla de Luz',   it:'Schermoluce'     },
    'Plénitude':          { en:'Calm Mind',        de:'Gedankengut',    es:'Paz Mental',        it:'Calmamente'      },
    'Protection':         { en:'Reflect',          de:'Reflektor',      es:'Reflejo',           it:'Riflesso'        },
    'Provoc':             { en:'Taunt',            de:'Verhöhner',      es:'Mofa',              it:'Provocazione'    },
    'Psyko':              { en:'Psychic',          de:'Psychokinese',   es:'Psíquico',          it:'Psichico'        },
    'Voeu Soin':          { en:'Healing Wish',     de:'Heilopfer',      es:'Deseo Cura',        it:'Curardore'       },
    'Éboulement':         { en:'Rock Slide',       de:'Steinhagel',     es:'Avalancha',         it:'Frana'           },
    'Lame de Roc':        { en:'Stone Edge',       de:'Steinkante',     es:'Roca Afilada',      it:'Pietrataglio'    },
    'Piège de Roc':       { en:'Stealth Rock',     de:'Tarnsteine',     es:'Trampa Rocas',      it:'Levitoroccia'    },
    'Tomberoche':         { en:'Rock Tomb',        de:'Felsgrab',       es:'Tumba Rocas',       it:'Rocciotomba'     },
    "Coud'Boue":          { en:'Mud-Slap',         de:'Lehmschelle',    es:'Bofetón Lodo',      it:'Fangosberla'     },
    'Piétisol':           { en:'Bulldoze',         de:'Dampfwalze',     es:'Terratemblor',      it:'Battiterra'      },
    'Séisme':             { en:'Earthquake',       de:'Erdbeben',       es:'Terremoto',         it:'Terremoto'       },
    'Tempête de Sable':   { en:'Sandstorm',        de:'Sandsturm',      es:'Tormenta Arena',    it:'Terrempesta'     },
    'Tunnel':             { en:'Dig',              de:'Schaufler',      es:'Excavar',           it:'Fossa'           },
    "Ball'Ombre":         { en:'Shadow Ball',      de:'Spukball',       es:'Bola Sombra',       it:'Palla Ombra'     },
    'Griffe Ombre':       { en:'Shadow Claw',      de:'Dunkelklaue',    es:'Garra Umbría',      it:'Ombrartigli'     },
    'Vent Mauvais':       { en:'Ominous Wind',     de:'Unheilböen',     es:'Viento Aciago',     it:'Funestovento'    },
    'Aiguisage':          { en:'Hone Claws',       de:'Klauenwetzer',   es:'Afilagarras',       it:'Unghiaguzze'     },
    'Larcin':             { en:'Thief',            de:'Raub',           es:'Ladrón',            it:'Furto'           },
    'Représailles':       { en:'Payback',          de:'Gegenstoß',      es:'Vendetta',          it:'Rivincita'       },
    'Vibrobscur':         { en:'Dark Pulse',       de:'Finsteraura',    es:'Pulso Umbrío',      it:'Neropulsar'      },
    'Acrobatie':          { en:'Acrobatics',       de:'Akrobatik',      es:'Acróbata',          it:'Acrobazia'       },
    'Aéropique':          { en:'Aerial Ace',       de:'Aero-Ass',       es:'Golpe Aéreo',       it:'Aeroassalto'     },
    'Atterrissage':       { en:'Roost',            de:'Ruheort',        es:'Respiro',           it:'Trespolo'        },
    'Rapace':             { en:'Brave Bird',       de:'Sturzflug',      es:'Pájaro Osado',      it:'Baldeali'        },
    'Abri':               { en:'Protect',          de:'Schutzschild',   es:'Protección',        it:'Protezione'      },
    'Bâillement':         { en:'Yawn',             de:'Gähner',         es:'Bostezo',           it:'Sbadiglio'       },
    'Danse Lames':        { en:'Swords Dance',     de:'Schwerttanz',    es:'Danza Espada',      it:'Danzaspada'      },
    'Frustration':        { en:'Frustration',      de:'Frustration',    es:'Frustración',       it:'Frustrazione'    },
    'Hurlement':          { en:'Roar',             de:'Brüller',        es:'Rugido',            it:'Boato'           },
    'Retour':             { en:'Return',           de:'Rückkehr',       es:'Retribución',       it:'Ritorno'         },
  };

  /* ══════════════════════════════════════════════════════════════════
     NŒUDS À IGNORER (ne pas toucher au contenu de ces balises)
  ══════════════════════════════════════════════════════════════════ */
  const SKIP_TAGS = new Set(['SCRIPT','STYLE','CODE','PRE','TEXTAREA','INPUT','SELECT','OPTION','SVG','IMG','META','LINK','HEAD']);
  // Classes CSS dont le contenu ne doit jamais être traduit
  const SKIP_CLASSES = ['t-feu','t-eau','t-plante','t-sol','t-foudre','t-vol','t-esprit','t-gel','t-combat','t-poison','t-ame','t-ombre','t-dragon','t-metal','t-granit','t-insect','t-divin','t-normal','stat-num','dex-num','poke-en','move-level','move-name','ability-name','evo-en','poke-name'];

  /* ══════════════════════════════════════════════════════════════════
     STATE
  ══════════════════════════════════════════════════════════════════ */
  const state = {
    lang: localStorage.getItem('ca_lang') || 'fr',
    moves: {},
    abilities: {},
    names: {},       // { 'charmander': { en:'Charmander', fr:'Salamèche', de:'Glumanda', es:'Charmander', it:'Charmander' } }
    csvReady: false,
    callbacks: [],
    // Cache des nœuds texte originaux : Map<TextNode, string originale en FR>
    originalTexts: new Map(),
  };

  /* ══════════════════════════════════════════════════════════════════
     UTILITAIRES
  ══════════════════════════════════════════════════════════════════ */
  function getBasePath() {
    const scripts = document.querySelectorAll('script[src]');
    for (const s of scripts) {
      if (s.src.includes('i18n.js')) return s.src.replace(/[^/]*i18n\.js.*$/, '');
    }
    return '';
  }

  function normalizeKey(str) {
    return str.toLowerCase().replace(/[''′]/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
  }

  /**
   * Normalise un texte pour la correspondance souple :
   * - apostrophes typographiques → apostrophe ASCII
   * - retours à la ligne + espaces multiples → espace simple
   * - trim
   */
  function normalizeText(str) {
    return str
      .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035\uFF07']/g, "'") // toutes variantes d'apostrophe → droite ASCII
      .replace(/[\r\n]+[ \t]*/g, '\n') // retours à la ligne + indentation → \n seul
      .replace(/[ \t]+/g, ' ')         // espaces/tabs multiples → un seul espace
      .trim();
  }

  /**
   * Index de lookup : normalizeText(clé FR) → clé FR originale
   * Construit une seule fois, permet de retrouver la clé même si les
   * apostrophes ou les espaces ne correspondent pas exactement.
   */
  const T_LOOKUP = new Map();
  for (const key of Object.keys(T)) {
    T_LOOKUP.set(normalizeText(key), key);
  }

  /** Cherche une entrée dans T en tolérant les apostrophes et espaces. */
  function findEntry(rawText) {
    // Correspondance exacte d'abord
    if (T[rawText] !== undefined) return { key: rawText, entry: T[rawText] };
    // Correspondance normalisée
    const norm = normalizeText(rawText);
    const origKey = T_LOOKUP.get(norm);
    if (origKey !== undefined) return { key: origKey, entry: T[origKey] };
    return null;
  }

  function csvColFor(lang) {
    return (LANGS.find(l => l.code === lang) || LANGS[0]).csvCol;
  }

  function splitCSVLine(line) { return line.split(',').map(c => c.trim()); }

  function shouldSkipNode(node) {
    let el = node.parentElement;
    while (el) {
      if (SKIP_TAGS.has(el.tagName)) return true;
      if (el.classList) {
        for (const cls of SKIP_CLASSES) {
          if (el.classList.contains(cls)) return true;
        }
      }
      el = el.parentElement;
    }
    return false;
  }

  /* ══════════════════════════════════════════════════════════════════
     [B] CHARGEMENT CSV
  ══════════════════════════════════════════════════════════════════ */
  async function loadCSVs(base) {
    const [mR, aR, nR] = await Promise.all([
      fetch(base + 'moves.csv').catch(() => null),
      fetch(base + 'abilities.csv').catch(() => null),
      fetch(base + 'names.csv').catch(() => null),
    ]);

    if (mR?.ok) {
      const lines = (await mR.text()).split('\n');
      for (let i = 2; i < lines.length; i++) {
        const row = splitCSVLine(lines[i]);
        if (!row[0] || /^[—―-]/.test(row[0])) continue;
        const key = normalizeKey(row[0]);
        if (key) state.moves[key] = [row[0]||'', row[1]||'', row[2]||'', row[3]||'', row[4]||''];
      }
    }
    if (aR?.ok) {
      const lines = (await aR.text()).split('\n');
      for (let i = 1; i < lines.length; i++) {
        const row = splitCSVLine(lines[i]);
        if (!row[0] || row[0].startsWith('[')) continue;
        const key = normalizeKey(row[0]);
        if (key) state.abilities[key] = [row[0]||'', row[1]||'', row[2]||'', row[3]||'', row[4]||''];
      }
    }
    if (nR?.ok) {
      const lines = (await nR.text()).split('\n');
      for (let i = 1; i < lines.length; i++) {
        const row = splitCSVLine(lines[i]);
        if (!row[0]) continue;
        const key = row[0].toLowerCase();
        if (!state.names[key]) {
          state.names[key] = { en: row[0], fr: row[1]||'', it: row[2]||'', de: row[3]||'', es: row[4]||'' };
        }
      }
    }

    state.csvReady = true;
    state.callbacks.forEach(fn => fn());
    state.callbacks = [];
  }

  /* ══════════════════════════════════════════════════════════════════
     [A] SCAN ET TRADUCTION AUTOMATIQUE DU DOM
  ══════════════════════════════════════════════════════════════════ */

  /**
   * Collecte tous les nœuds texte du document et mémorise leur valeur FR originale.
   * N'est appelé qu'une seule fois (à l'init, en FR).
   */
  function collectOriginalTexts(root) {
    const walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const text = node.textContent;
      if (!text || !text.trim()) continue;
      if (shouldSkipNode(node)) continue;
      // Cherche dans le dictionnaire avec correspondance souple (apostrophes, espaces)
      const trimmed = text.trim();
      const found = findEntry(trimmed);
      if (found) {
        // Mémorise la clé FR canonique (celle du dictionnaire) et le texte brut original
        state.originalTexts.set(node, { key: found.key, raw: text });
      }
    }
  }

  /**
   * Traduit tous les nœuds texte mémorisés vers la langue cible.
   * Si lang === 'fr', restaure les originaux.
   */
  function translateDOM(lang) {
    state.originalTexts.forEach(({ key, raw }, node) => {
      // Vérifie que le nœud est encore dans le document
      if (!node.parentNode) return;
      if (lang === 'fr') {
        // Restaure le texte brut original
        node.textContent = raw;
      } else {
        const entry = T[key];
        if (entry && entry[lang]) {
          // Préserve les espaces/indentation autour du texte traduit
          const leading  = raw.match(/^[\s\n]*/)[0];
          const trailing = raw.match(/[\s\n]*$/)[0];
          node.textContent = leading + entry[lang] + trailing;
        }
      }
    });

    // Traduit aussi les placeholders
    document.querySelectorAll('input[placeholder]').forEach(el => {
      const ph = el.getAttribute('data-i18n-orig-placeholder') || el.placeholder;
      if (!el.getAttribute('data-i18n-orig-placeholder')) {
        el.setAttribute('data-i18n-orig-placeholder', ph);
      }
      const found = findEntry(ph);
      if (lang === 'fr') el.placeholder = ph;
      else if (found && found.entry[lang]) el.placeholder = found.entry[lang];
    });

    // Met à jour l'attribut lang du document
    document.documentElement.lang = lang;
  }

  /**
   * Re-scanne le DOM et traduit les nouveaux nœuds (générés dynamiquement).
   * Utilisé après buildTable(), renderMoveset(), etc.
   */
  function rescanAndTranslate(root, lang) {
    const l = lang || state.lang;
    if (l === 'fr') return; // En FR rien à faire, les textes sont natifs
    const walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const text = node.textContent;
      if (!text || !text.trim()) continue;
      if (shouldSkipNode(node)) continue;
      const trimmed = text.trim();
      const found = findEntry(trimmed);
      if (found && found.entry[l]) {
        // Mémorise pour les changements futurs (structure {key, raw})
        if (!state.originalTexts.has(node)) state.originalTexts.set(node, { key: found.key, raw: text });
        const leading  = text.match(/^[\s\n]*/)[0];
        const trailing = text.match(/[\s\n]*$/)[0];
        node.textContent = leading + found.entry[l] + trailing;
      }
    }
  }

  /* ══════════════════════════════════════════════════════════════════
     NOMS POKÉMON dans pokemon.html
     Traduit la colonne "Nom français" dynamiquement.
  ══════════════════════════════════════════════════════════════════ */
  function translatePokemonNames(lang) {
    // .poke-fr = nom français dans le tableau pokédex
    document.querySelectorAll('.poke-fr').forEach(el => {
      const fr = el.getAttribute('data-name-fr') || el.textContent.trim();
      if (!el.getAttribute('data-name-fr')) el.setAttribute('data-name-fr', fr);

      if (lang === 'fr') {
        el.textContent = fr;
        return;
      }
      // Cherche via names.csv (clé = nom EN, on a le FR → cherche la correspondance)
      // Le CODEX stocke [fr, en, ...] donc on cherche par EN via data-en sur la <tr>
      const row = el.closest('tr');
      const enName = row ? (row.dataset.en || '') : '';
      const nameData = enName ? state.names[enName.toLowerCase()] : null;
      if (nameData && nameData[lang]) {
        el.textContent = nameData[lang];
      }
    });
  }

  /* ══════════════════════════════════════════════════════════════════
     SÉLECTEUR DE LANGUE (injecté dans la nav)
  ══════════════════════════════════════════════════════════════════ */
  function injectStyles() {
    if (document.getElementById('i18n-styles')) return;
    const s = document.createElement('style');
    s.id = 'i18n-styles';
    s.textContent = `
      .lang-selector{position:relative;display:flex;align-items:center}
      .lang-btn{display:flex;align-items:center;gap:.4rem;background:none;border:1px solid rgba(201,151,58,.2);border-radius:4px;padding:.3rem .7rem;cursor:pointer;font-family:var(--font-heading,'Cinzel',serif);font-size:.72rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--text-muted,#A89060);transition:all .3s ease;white-space:nowrap}
      .lang-btn:hover,.lang-selector.is-open .lang-btn{border-color:rgba(201,151,58,.5);color:var(--gold-light,#E8C06A);background:rgba(201,151,58,.06)}
      .lang-btn .lang-flag{font-size:1rem;line-height:1}
      .lang-btn .lang-caret{font-size:.55rem;opacity:.6;transition:transform .25s ease}
      .lang-selector.is-open .lang-caret{transform:rotate(180deg)}
      .lang-dropdown{position:absolute;top:calc(100% + 6px);right:0;background:linear-gradient(180deg,rgba(15,12,5,.98),rgba(26,20,8,.97));border:1px solid rgba(201,151,58,.22);border-radius:5px;backdrop-filter:blur(16px);min-width:155px;z-index:300;overflow:hidden;opacity:0;transform:translateY(-6px);pointer-events:none;transition:opacity .22s ease,transform .22s ease;box-shadow:0 12px 40px rgba(0,0,0,.5)}
      .lang-selector.is-open .lang-dropdown{opacity:1;transform:translateY(0);pointer-events:all}
      .lang-option{display:flex;align-items:center;gap:.65rem;padding:.6rem 1rem;cursor:pointer;font-family:var(--font-heading,'Cinzel',serif);font-size:.75rem;font-weight:600;letter-spacing:.12em;color:var(--text-muted,#A89060);border-bottom:1px solid rgba(201,151,58,.07);transition:background .2s,color .2s}
      .lang-option:last-child{border-bottom:none}
      .lang-option:hover{background:rgba(201,151,58,.08);color:var(--gold-light,#E8C06A)}
      .lang-option.active{color:var(--gold,#C9973A);background:rgba(201,151,58,.06)}
      .lang-option .opt-flag{font-size:1.05rem}
      .lang-option .opt-check{margin-left:auto;font-size:.7rem;opacity:0;color:var(--gold,#C9973A)}
      .lang-option.active .opt-check{opacity:1}
      .mobile-lang-bar{display:flex;justify-content:center;gap:.5rem;padding:1.1rem 1.5rem .6rem;border-bottom:1px solid rgba(201,151,58,.1)}
      .mobile-lang-pill{display:flex;align-items:center;gap:.3rem;background:rgba(255,255,255,.03);border:1px solid rgba(201,151,58,.15);border-radius:20px;padding:.3rem .7rem;cursor:pointer;font-family:var(--font-heading,'Cinzel',serif);font-size:.62rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--text-muted,#A89060);transition:all .25s ease}
      .mobile-lang-pill:hover{background:rgba(201,151,58,.1);color:var(--gold-light,#E8C06A);border-color:rgba(201,151,58,.4)}
      .mobile-lang-pill.active{background:rgba(201,151,58,.12);color:var(--gold,#C9973A);border-color:rgba(201,151,58,.5)}
      .mobile-lang-pill .pill-flag{font-size:.9rem}
      @media(max-width:768px){.lang-selector{display:none!important}}
      @media(min-width:769px){.mobile-lang-bar{display:none!important}}
    `;
    document.head.appendChild(s);
  }

  function buildSelectorHTML(currentLang) {
    const flag = LANGS.find(l => l.code === currentLang)?.flag || '🇫🇷';
    return `
      <button class="lang-btn" id="lang-btn-desktop" aria-haspopup="listbox" aria-expanded="false">
        <span class="lang-flag">${flag}</span>
        <span class="lang-caret">▼</span>
      </button>
      <div class="lang-dropdown" id="lang-dropdown-desktop">
        ${LANGS.map(l => `
          <div class="lang-option${l.code===currentLang?' active':''}" data-lang="${l.code}" role="option">
            <span class="opt-flag">${l.flag}</span><span>${l.label}</span><span class="opt-check">✦</span>
          </div>`).join('')}
      </div>`;
  }

  function injectDesktopSelector() {
    const nav = document.querySelector('nav');
    if (!nav || document.getElementById('lang-selector-desktop')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'lang-selector';
    wrapper.id = 'lang-selector-desktop';
    wrapper.setAttribute('role', 'listbox');
    wrapper.innerHTML = buildSelectorHTML(state.lang);
    const burger = nav.querySelector('.burger');
    burger ? nav.insertBefore(wrapper, burger) : nav.appendChild(wrapper);
    const btn = document.getElementById('lang-btn-desktop');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      wrapper.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', wrapper.classList.contains('is-open'));
    });
    wrapper.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => { wrapper.classList.remove('is-open'); window.I18n.setLang(opt.dataset.lang); });
    });
    document.addEventListener('click', () => { wrapper.classList.remove('is-open'); });
  }

  function injectMobileSelector() {
    const mobileNav = document.getElementById('mobile-nav');
    if (!mobileNav || document.getElementById('lang-bar-mobile')) return;
    const bar = document.createElement('div');
    bar.className = 'mobile-lang-bar';
    bar.id = 'lang-bar-mobile';
    bar.innerHTML = LANGS.map(l => `
      <button class="mobile-lang-pill${l.code===state.lang?' active':''}" data-lang="${l.code}" aria-label="${l.label}">
        <span class="pill-flag">${l.flag}</span><span>${l.code.toUpperCase()}</span>
      </button>`).join('');
    const ornament = mobileNav.querySelector('.mobile-nav-ornament');
    ornament ? mobileNav.insertBefore(bar, ornament) : mobileNav.prepend(bar);
    bar.querySelectorAll('.mobile-lang-pill').forEach(p => {
      p.addEventListener('click', () => window.I18n.setLang(p.dataset.lang));
    });
  }

  function updateSelectorUI(lang) {
    const flag = LANGS.find(l => l.code === lang)?.flag || '🇫🇷';
    const flagEl = document.querySelector('#lang-btn-desktop .lang-flag');
    if (flagEl) flagEl.textContent = flag;
    document.querySelectorAll('#lang-dropdown-desktop .lang-option').forEach(o => o.classList.toggle('active', o.dataset.lang === lang));
    document.querySelectorAll('#lang-bar-mobile .mobile-lang-pill').forEach(p => p.classList.toggle('active', p.dataset.lang === lang));
  }

  /* ══════════════════════════════════════════════════════════════════
     API PUBLIQUE — window.I18n
  ══════════════════════════════════════════════════════════════════ */
  window.I18n = {
    get lang()      { return state.lang; },
    get moves()     { return state.moves; },
    get abilities() { return state.abilities; },
    get names()     { return state.names; },
    get langs()     { return LANGS; },

    /** Traduction UI (clé = texte FR exact) */
    t(frText, lang) {
      const l = lang || state.lang;
      if (l === 'fr') return frText;
      const found = findEntry(frText);
      return (found && found.entry[l]) || frText;
    },

    /** Traduit un nom d'attaque (CSV) */
    moveName(key, lang) {
      const data = state.moves[key];
      if (!data) return null;
      return data[csvColFor(lang || state.lang)] || data[1] || data[0] || null;
    },

    /** Traduit un nom de talent (CSV) */
    abilityName(key, lang) {
      const data = state.abilities[key];
      if (!data) return null;
      return data[csvColFor(lang || state.lang)] || data[1] || data[0] || null;
    },

    /** Traduit un nom de Pokémon (CSV, clé = dbSymbol EN lowercase) */
    pokemonName(enSymbol, lang) {
      const key = (enSymbol || '').toLowerCase();
      const data = state.names[key];
      if (!data) return null;
      const l = lang || state.lang;
      return data[l] || data['fr'] || data['en'] || null;
    },

    /** Attend que les CSV soient chargés */
    onReady(fn) { if (state.csvReady) fn(); else state.callbacks.push(fn); },

    /**
     * Re-scanne un sous-arbre DOM (après rendu dynamique) et applique la langue courante.
     * Appeler après buildTable(), renderMoveset(), etc.
     */
    rescan(rootEl) { rescanAndTranslate(rootEl, state.lang); },

    /**
     * Change la langue active.
     */
    setLang(code) {
      state.lang = code;
      localStorage.setItem('ca_lang', code);
      document.documentElement.lang = code;
      updateSelectorUI(code);
      // 1. Traduit le DOM statique
      translateDOM(code);
      // 2. Traduit les noms Pokémon (pokemon.html)
      translatePokemonNames(code);
      // 3. Re-rend les données Pokémon (fiche.html)
      if (typeof window.reloadPokemonData === 'function') window.reloadPokemonData();
      // 4. Événement custom pour les autres pages
      document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: code } }));
    },
  };

  /* ══════════════════════════════════════════════════════════════════
     INITIALISATION
  ══════════════════════════════════════════════════════════════════ */
  function init() {
    document.documentElement.lang = state.lang;
    loadCSVs(getBasePath());

    const domReady = () => {
      injectStyles();
      injectDesktopSelector();
      injectMobileSelector();

      // Collecte les textes originaux (on est en FR à ce stade)
      collectOriginalTexts(document.body);

      // Si la langue mémorisée n'est pas FR, on traduit immédiatement
      if (state.lang !== 'fr') {
        translateDOM(state.lang);
      }

      // Observe les mutations DOM (contenu généré dynamiquement)
      const observer = new MutationObserver(mutations => {
        if (state.lang === 'fr') return;
        mutations.forEach(m => {
          m.addedNodes.forEach(node => {
            if (node.nodeType === 1) rescanAndTranslate(node, state.lang);
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });

      // Sur pokemon.html : traduit les noms après buildTable
      document.addEventListener('pokemonTableBuilt', () => {
        if (state.lang !== 'fr') translatePokemonNames(state.lang);
      });
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', domReady);
    else domReady();
  }

  init();

})();