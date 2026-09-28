// Feature cards slider (mobile)
let featIndex = 0;
const featTrack = document.getElementById('featTrack');
const featDotsEl = document.getElementById('featDots');
const featPages = featTrack ? featTrack.querySelectorAll('.feat-page').length : 0;

if (featTrack && featPages > 0) {
    for (let i = 0; i < featPages; i++) {
        const d = document.createElement('div');
        d.className = 'feat-slider-dot' + (i === 0 ? ' active' : '');
        featDotsEl.appendChild(d);
    }
    featSlide(0);
}

function featSlide(dir) {
    featIndex = Math.max(0, Math.min(featPages - 1, featIndex + dir));
    featTrack.style.transform = `translateX(-${featIndex * 100}%)`;
    document.querySelectorAll('.feat-slider-dot').forEach((d, i) => d.classList.toggle('active', i === featIndex));
    document.getElementById('featPrev').disabled = featIndex === 0;
    document.getElementById('featNext').disabled = featIndex === featPages - 1;
}

const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:0.1});
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));


const translations = {
    it: {
        nav_mission:'Missione', nav_product:'Prodotto', nav_technology:'Tecnologia', nav_how:'Come funziona', nav_cta:'Richiedi demo',
        hero_badge:'Robot di soccorso acquatico',
        hero_h1:'Salvare<br><span class="cyan">Vite.</span><br>Senza Rischi.',
        hero_sub:'Aqua Rescue Systems sviluppa robot autonomi per il soccorso in acqua che raggiungono il luogo dell\'incidente in pochi secondi, salvando vite senza mettere in pericolo i soccorritori.',
        hero_btn1:'Richiedi una demo', hero_btn2:'Scopri il prodotto',
        mission_label:'La nostra missione', mission_title:'Ogni secondo<br>conta.',
        mission_desc:'Gli incidenti per annegamento accadono in pochi istanti. Troppo in fretta per i soccorritori tradizionali. Aqua Rescue Systems colma questa lacuna critica con robot autonomi per il soccorso in acqua: pronti all\'intervento immediato, senza rischi per il personale.',
        check1:'Anello di salvataggio e assistenza al galleggiamento entro 90 secondi sul luogo dell\'incidente',
        check2:'Riconoscimento della persona con telecamera integrata anche di notte e con scarsa visibilità',
        check3:'Completamente telecomandata: nessun soccorritore entra in acqua',
        sys_label:'Parametri di sistema live', sys_speed:'Velocità vs. soccorritore umano', sys_speed_val:'5x più veloce',
        sys_safety:'Sicurezza operatori', sys_survival:'Probabilità di sopravvivenza', sys_battery:'Autonomia batteria',
        sys_status:'Sistema nominale · Pronto all\'intervento',
        stat_response:'Tempo di risposta', stat_speed:'Velocità massima', stat_tow:'Capacità di traino', stat_range:'Portata telecomando', stat_operational:'Operativo',
        ambiti_label:'Ambiti di utilizzo', ambiti_title:'Ovunque l\'acqua<br>minacci le vite.',
        uc1_tag:'Autorità e sicurezza', uc1_title:'Guardia costiera &<br>soccorso in mare',
        uc2_tag:'Sport e tempo libero', uc2_title:'Piscine &<br>stabilimenti balneari',
        uc3_tag:'Protezione civile', uc3_title:'Alluvioni &<br>catastrofi naturali',
        uc4_tag:'Primo soccorso', uc4_title:'Vigili del fuoco &<br>squadre di soccorso',
        uc5_tag:'Industria & marino', uc5_title:'Porti &<br>infrastrutture marittime',
        uc6_tag:'Eventi & sport', uc6_title:'Triathlon &<br>eventi all\'aperto',
        product_title:'La gamma DOLPHIN', product_desc:'Due versioni dello stesso robot: scegli il modello adatto alle tue esigenze.',
        col_feature:'Caratteristica', col_base:'Modello base', col_advanced:'Versione avanzata',
        spec_dim:'Dimensioni', spec_dim_note:'Lunghezza × Larghezza × Altezza',
        spec_weight:'Peso', spec_weight_note:'Peso totale del robot',
        spec_vmax:'Velocità massima', spec_vmax_note:'Velocità massima di spostamento in acqua',
        spec_battery_life:'Autonomia', spec_battery_note:'Durata della batteria in operazioni a velocità moderata',
        spec_range:'Portata telecomando', spec_range_note:'Distanza massima da cui controllare il robot',
        spec_tow_cap:'Capacità di traino', spec_tow_note:'Peso massimo che il robot può trainare in acqua',
        spec_waterproof:'Impermeabilità', spec_waterproof_note:'Standard di protezione contro polvere e acqua',
        spec_instant:'Attivazione istantanea', spec_remote_control:'Telecomando e controllo locale', spec_gopro:'Attacco GoPro',
        spec_autoright:'Autoraddrizzante', spec_autoright_note:'Si raddrizza automaticamente se capovolto',
        spec_autoreturn:'Auto Return', spec_autoreturn_note:'Ritorna automaticamente al punto di partenza',
        spec_camera:'Telecamera & Monitor remoto', spec_camera_note:'Videocamera integrata e schermo nel telecomando',
        spec_charge_stand:'Supporto di ricarica', spec_speaker_light:'Altoparlante e faro di ricerca remoti', spec_optional:'Opzionale',
        product_cta:'Richiedi contatto',
        tech_label:'Tecnologia', tech_title:'Progettato per<br>l\'impensabile.',
        tech_desc:'Ogni sistema è stato concepito per le condizioni più difficili: maltempo, zone di panico, oscurità. Tecnologia affidabile quando conta davvero.',
        feat1_title:'Telecamera integrata', feat1_desc:'Individua persone in acqua automaticamente, anche con onde, di notte e con nebbia. Visione in tempo reale per l\'operatore.', feat1_desc_s:'Individua persone in acqua automaticamente, anche con onde, di notte e con nebbia.',
        feat2_title:'Avvio immediato', feat2_desc:'Dall\'allarme all\'ingresso in acqua in pochi secondi. Sistema completamente operativo senza necessità di intervento manuale.', feat2_desc_s:'Dall\'allarme all\'ingresso in acqua in pochi secondi. Sistema completamente operativo senza intervento manuale.',
        feat3_title:'Dotazione di salvataggio', feat3_desc:'Anello di salvataggio integrato e sistema di galleggiamento per un intervento preciso senza che nessun soccorritore entri in acqua.', feat3_desc_s:'Anello di salvataggio integrato e sistema di galleggiamento per un intervento preciso.',
        feat4_title:'Telecomando a lungo raggio', feat4_desc:'Portata fino a 800 m. Navigazione precisa in tempo reale con correzione automatica per correnti e vento.', feat4_desc_s:'Portata fino a 800 m. Navigazione precisa in tempo reale con correzione automatica.',
        feat5_title:'Display in tempo reale', feat5_desc:'Video HD e dati del sensore trasmessi in diretta al posto di comando. Controllo completo dalla riva.', feat5_desc_s:'Video HD e dati del sensore trasmessi in diretta al posto di comando.',
        feat6_title:'Alta capacità di traino', feat6_desc:'Traina fino a 1.000 kg in acqua, ideale per supportare più persone contemporaneamente in situazioni di emergenza.', feat6_desc_s:'Traina fino a 1.000 kg in acqua, ideale per più persone contemporaneamente.',
        feat7_title:'Auto-raddrizzamento', feat7_desc:'Se il robot si capovolge durante il trasporto o in acque agitate, si raddrizza automaticamente in pochi secondi, senza intervento dell\'operatore.', feat7_desc_s:'Si raddrizza automaticamente in pochi secondi se si capovolge in acque agitate.',
        feat8_title:'GPS individuale via satellite', feat8_desc:'Collegabile a un GPS individuale dedicato: la posizione del Dolphin è visibile in tempo reale via satellite, anche a grande distanza o fuori dalla portata visiva.', feat8_desc_s:'Posizione visibile in tempo reale via satellite, anche a grande distanza.',
        how_label:'Come funziona', how_title:'Dall\'allarme<br>al salvataggio.', how_sub:'Tre fasi. Novanta secondi. Una vita salvata.',
        step1_title:'Allarme', step1_desc:'Chiamata di emergenza, sensore o attivazione manuale. Il sistema si mette in moto in pochi secondi.', step1_time:'< 10 secondi',
        step2_title:'Avvicinamento', step2_desc:'L\'operatore guida il robot via telecomando fino alla persona, anche contro corrente e vento. Portata fino a 800 m.', step2_time:'7 m/s velocità massima',
        step3_title:'Salvataggio', step3_desc:'La persona si aggrappa al robot e viene trasportata in sicurezza. I soccorritori restano sulla riva: zero rischi.', step3_badge:'Zero soccorritori in acqua',
        media_label:'Stampa & Media', media_title:'Conosciuto da<br>Stampa & Media', media_desc:'Il Dolphin 3 attrae l\'attenzione dei media in tutta la Germania.',
        contact_label:'Pronto per il prossimo passo?', contact_title:'Proteggi<br><span style="color:var(--cyan);">Vite Umane.</span>', contact_desc:'Prenota una demo personalizzata e scopri come Aqua Rescue Systems può rivoluzionare la tua infrastruttura di sicurezza.',
        contact_phone_lbl:'Telefono', contact_resp_lbl:'Risposta', contact_resp_val:'Entro 24 ore',
        form_name:'Nome e Cognome', form_name_ph:'Mario Rossi', form_email_ph:'mario@esempio.it',
        form_phone_lbl:'Telefono (opzionale)', form_org_lbl:'Organizzazione', form_org_ph:'Seleziona ambito di utilizzo...',
        form_opt1:'Guardia costiera / Soccorso in mare', form_opt2:'Vigili del fuoco / Squadre di soccorso',
        form_opt3:'Piscina / Stabilimento balneare', form_opt4:'Protezione civile',
        form_opt5:'Porti / Industria marittima', form_opt6:'Altro',
        form_msg_lbl:'Messaggio (opzionale)', form_msg_ph:'Come possiamo aiutarti?',
        form_submit:'Prenota una demo gratuita', form_note:'Nessun impegno · Risposta entro 24 ore',
        form_phone_ph:'+39 000 000 0000',
        partner_label:'Partner', partner_title:'Con chi lavoriamo',
        footer_legal:'Note legali', footer_contact:'Contatto',
        footer_tagline:'Robot autonomi per il soccorso in acqua, sviluppati per salvare vite senza mettere in pericolo i soccorritori.', footer_quicklinks:'Link rapidi', footer_madeby:'· made by',
        copyright:'© 2026 AquaRescueSystems · Tutti i diritti riservati',

        crumb_home:'Home', learnmore:'Scopri di più',
        mission_teaser_desc:'Ogni secondo conta. Scopri perché abbiamo creato Aqua Rescue Systems e come i nostri robot colmano il vuoto critico tra l\'allarme e il salvataggio.',
        product_teaser_desc:'Due versioni dello stesso robot: confronta specifiche, dotazioni e scegli il modello Dolphin più adatto al tuo impiego.',
        tech_teaser_desc:'Telecamera integrata, autoraddrizzamento, GPS satellitare: scopri l\'ingegneria che rende possibile un salvataggio in meno di 90 secondi.',

        ms_hero_label:'La nostra missione', ms_hero_title:'Ogni secondo<br>conta.', ms_hero_sub:'Perché esistiamo, e cosa ci spinge a costruire il futuro del soccorso in acqua.',
        ms_problem_label:'Il problema', ms_problem_title:'Il tempo è il fattore<br>che decide tutto.',
        ms_problem_p1:'L\'annegamento è una delle principali cause di morte accidentale nel mondo, e colpisce in modo silenzioso: nella maggior parte dei casi non ci sono grida o agitazione visibile, solo pochi istanti in cui una persona scompare sotto la superficie.',
        ms_problem_p2:'I soccorritori tradizionali, per quanto addestrati, devono affrontare un percorso che richiede tempo: raggiungere la riva, mettersi in sicurezza, entrare in acqua. In questo intervallo, spesso, si decide l\'esito dell\'incidente. Aqua Rescue Systems nasce per comprimere drasticamente questo tempo, e per farlo senza esporre a rischio chi soccorre.',
        ms_story_label:'La nostra storia', ms_story_title:'Da un\'esigenza reale<br>a un robot di soccorso.',
        ms_story_p1:'Aqua Rescue Systems ha sede a Bolzano, in Italia, ed è nata dall\'osservazione diretta di un problema che le tecnologie esistenti non risolvevano: i soccorritori umani non possono sempre essere i primi ad arrivare sul luogo di un annegamento, specialmente quando le condizioni sono avverse.',
        ms_story_p2:'Il Dolphin 3 viene sviluppato e prodotto in Germania, in collaborazione con partner tecnici specializzati in ingegneria navale e robotica, per garantire gli standard di affidabilità richiesti da guardia costiera, vigili del fuoco e protezione civile.',
        ms_values_label:'I nostri valori', ms_values_title:'Cosa guida ogni<br>nostra decisione.',
        ms_value1_title:'Zero rischi per i soccorritori', ms_value1_desc:'Ogni funzione del Dolphin è progettata per fare in modo che nessun operatore debba entrare in acqua per completare un salvataggio.',
        ms_value2_title:'Affidabilità in ogni condizione', ms_value2_desc:'Testato per operare con maltempo, scarsa visibilità e acque agitate: la tecnologia deve funzionare proprio quando le condizioni sono peggiori.',
        ms_value3_title:'Velocità come priorità assoluta', ms_value3_desc:'Ogni componente, dal motore al sistema di controllo, è ottimizzato per ridurre al minimo il tempo tra l\'allarme e l\'arrivo sul posto.',
        ms_value4_title:'Semplicità operativa', ms_value4_desc:'Un\'interfaccia intuitiva permette a qualsiasi operatore addestrato di utilizzare il sistema sotto pressione, senza formazione complessa.',
        ms_cta_title:'Vuoi saperne di più<br>sul nostro robot?', ms_cta_desc:'Scopri le specifiche tecniche del Dolphin 3 o richiedi una demo personalizzata.',
        ms_cta_btn1:'Scopri il prodotto', ms_cta_btn2:'Richiedi una demo',

        pr_hero_label:'Prodotto', pr_hero_title:'La gamma<br>DOLPHIN.', pr_hero_sub:'Due versioni dello stesso robot, progettate per adattarsi al tuo scenario operativo.',
        pr_which_label:'Quale modello scegliere', pr_which_title:'Base o Plus:<br>la differenza è nel controllo.',
        pr_which_p1:'Il <strong style="color:var(--text);">Dolphin 3</strong> offre tutte le funzioni essenziali per il soccorso: velocità di 7 m/s, portata di 800 m, traino fino a 1.000 kg e autoraddrizzamento automatico. È la soluzione ideale per chi cerca un sistema di soccorso rapido da integrare fin da subito.',
        pr_which_p2:'Il <strong style="color:var(--text);">Dolphin 3 Plus</strong> aggiunge Dual GNSS per una localizzazione più precisa, Auto Return per il rientro automatico e una telecamera con monitor remoto per il controllo visivo in tempo reale — pensato per team che operano su aree estese o in condizioni di scarsa visibilità.',
        pr_specs_label:'Specifiche tecniche', pr_specs_title:'Costruito per<br>resistere.',
        pr_spec1_title:'Struttura & materiali', pr_spec1_desc:'Scafo resistente agli urti con protezione IP67 contro polvere e acqua, pensato per resistere a un uso intensivo in ambienti marini e di acqua dolce.',
        pr_spec2_title:'Propulsione', pr_spec2_desc:'Sistema di propulsione ad alta efficienza che raggiunge i 7 m/s, con gestione elettronica della potenza per una navigazione stabile anche in presenza di corrente.',
        pr_spec3_title:'Ricarica & autonomia', pr_spec3_desc:'Batteria ricaricabile con autonomia fino a 70 minuti a velocità moderata, sufficiente per coprire più interventi o un turno di sorveglianza attiva.',
        pr_spec4_title:'Assistenza & garanzia', pr_spec4_desc:'Ogni unità Dolphin è coperta da garanzia del produttore e da un servizio di assistenza tecnica dedicato per le organizzazioni che lo adottano.',
        pr_cta_title:'Pronto a integrare<br>il Dolphin nel tuo team?', pr_cta_desc:'Richiedi una demo gratuita e scopri come funziona sul campo.',

        te_hero_label:'Tecnologia', te_hero_title:'Progettato per<br>l\'impensabile.', te_hero_sub:'L\'ingegneria dietro un salvataggio che deve funzionare al primo tentativo, sempre.',
        te_deep_label:'Sistemi di bordo', te_deep_title:'Otto sistemi,<br>un solo obiettivo.',
        te_rd_label:'Ricerca & sviluppo', te_rd_title:'Costruito insieme a chi<br>l\'acqua la conosce davvero.',
        te_rd_p1:'Il Dolphin 3 nasce dalla collaborazione tra Aqua Rescue Systems e partner tecnici specializzati come WRGB e HL Schiffstechnik, realtà con esperienza diretta in ingegneria navale e sistemi acquatici.',
        te_rd_p2:'Ogni iterazione del prodotto viene testata in condizioni operative reali, non solo in laboratorio, per assicurarsi che le prestazioni dichiarate — velocità, autonomia, capacità di traino — restino affidabili anche sul campo.',
        te_safety_label:'Sicurezza & certificazioni', te_safety_title:'Affidabile quando<br>conta davvero.',
        te_safety_p1:'Il grado di protezione IP67 garantisce resistenza a polvere e immersione temporanea, mentre il sistema di autoraddrizzamento riporta automaticamente il robot in assetto corretto in pochi secondi, anche in acque agitate.',
        te_safety_p2:'Tutti i sistemi elettronici sono progettati per operare in modo affidabile in ambienti marini, con protezione dalla corrosione salina e componentistica pensata per un uso intensivo e ripetuto nel tempo.',
        te_roadmap_label:'Sviluppo futuro', te_roadmap_title:'Il lavoro<br>continua.',
        te_roadmap_p1:'Il team di Aqua Rescue Systems lavora costantemente su nuove funzionalità, dall\'espansione della connettività satellitare a miglioramenti nel riconoscimento automatico delle persone in acqua, per rendere ogni futura generazione del Dolphin ancora più rapida ed efficace.',
        te_cta_title:'Scopri il Dolphin 3<br>dal vivo.', te_cta_desc:'Richiedi una demo e vedi la tecnologia in azione.'
    },
    de: {
        nav_mission:'Mission', nav_product:'Produkt', nav_technology:'Technologie', nav_how:'Funktionsweise', nav_cta:'Demo anfragen',
        hero_badge:'Wasserrettungsroboter',
        hero_h1:'Leben<br><span class="cyan">Retten.</span><br>Ohne Risiken.',
        hero_sub:'Aqua Rescue Systems entwickelt autonome Wasserrettungsroboter, die den Unfallort in wenigen Sekunden erreichen und Leben retten, ohne Retter zu gefährden.',
        hero_btn1:'Demo anfragen', hero_btn2:'Produkt entdecken',
        mission_label:'Unsere Mission', mission_title:'Jede Sekunde<br>zählt.',
        mission_desc:'Ertrinkungsunfälle geschehen in Sekundenschnelle – zu schnell für traditionelle Rettungskräfte. Aqua Rescue Systems schließt diese kritische Lücke mit autonomen Wasserrettungsrobotern: sofort einsatzbereit, ohne Risiko für das Personal.',
        check1:'Rettungsring und Auftriebshilfe innerhalb von 90 Sekunden am Unfallort',
        check2:'Personenerkennung mit integrierter Kamera, auch nachts und bei schlechter Sicht',
        check3:'Vollständig ferngesteuert: kein Retter geht ins Wasser',
        sys_label:'Live-Systemparameter', sys_speed:'Geschwindigkeit vs. menschlicher Retter', sys_speed_val:'5x schneller',
        sys_safety:'Sicherheit der Einsatzkräfte', sys_survival:'Überlebenswahrscheinlichkeit', sys_battery:'Akkukapazität',
        sys_status:'System nominal · Einsatzbereit',
        stat_response:'Reaktionszeit', stat_speed:'Höchstgeschwindigkeit', stat_tow:'Zugkapazität', stat_range:'Fernsteuerung Reichweite', stat_operational:'Betrieb',
        ambiti_label:'Einsatzbereiche', ambiti_title:'Überall wo Wasser<br>Leben bedroht.',
        uc1_tag:'Behörden & Sicherheit', uc1_title:'Küstenwache &<br>Seenotrettung',
        uc2_tag:'Sport & Freizeit', uc2_title:'Schwimmbäder &<br>Badeanlagen',
        uc3_tag:'Katastrophenschutz', uc3_title:'Überschwemmungen &<br>Naturkatastrophen',
        uc4_tag:'Erster Einsatz', uc4_title:'Feuerwehr &<br>Rettungsteams',
        uc5_tag:'Industrie & Marine', uc5_title:'Häfen &<br>maritime Infrastruktur',
        uc6_tag:'Events & Sport', uc6_title:'Triathlon &<br>Outdoor-Events',
        product_title:'Die DOLPHIN-Reihe', product_desc:'Zwei Versionen des gleichen Roboters: Wählen Sie das passende Modell für Ihre Anforderungen.',
        col_feature:'Merkmal', col_base:'Basismodell', col_advanced:'Erweiterte Version',
        spec_dim:'Abmessungen', spec_dim_note:'Länge × Breite × Höhe',
        spec_weight:'Gewicht', spec_weight_note:'Gesamtgewicht des Roboters',
        spec_vmax:'Höchstgeschwindigkeit', spec_vmax_note:'Maximale Fortbewegungsgeschwindigkeit im Wasser',
        spec_battery_life:'Akkulaufzeit', spec_battery_note:'Betriebsdauer bei moderater Geschwindigkeit',
        spec_range:'Fernsteuerung Reichweite', spec_range_note:'Maximale Fernsteuerungsdistanz',
        spec_tow_cap:'Zugkapazität', spec_tow_note:'Maximales Gewicht das der Roboter ziehen kann',
        spec_waterproof:'Wasserdichtigkeit', spec_waterproof_note:'Schutzstandard gegen Staub und Wasser',
        spec_instant:'Sofortaktivierung', spec_remote_control:'Fernbedienung & lokale Steuerung', spec_gopro:'GoPro-Halterung',
        spec_autoright:'Selbstaufrichtend', spec_autoright_note:'Richtet sich automatisch auf wenn gekentert',
        spec_autoreturn:'Auto Return', spec_autoreturn_note:'Kehrt automatisch zum Ausgangspunkt zurück',
        spec_camera:'Kamera & Fernmonitor', spec_camera_note:'Integrierte Videokamera und Bildschirm in der Fernbedienung',
        spec_charge_stand:'Ladestation', spec_speaker_light:'Fernlautsprecher & Suchscheinwerfer', spec_optional:'Optional',
        product_cta:'Kontakt anfragen',
        tech_label:'Technologie', tech_title:'Entwickelt für<br>das Undenkbare.',
        tech_desc:'Jedes System wurde für schwerste Bedingungen konzipiert: Unwetter, Paniksituationen, Dunkelheit. Zuverlässige Technologie wenn es wirklich darauf ankommt.',
        feat1_title:'Integrierte Kamera', feat1_desc:'Erkennt Personen im Wasser automatisch, auch bei Wellen, nachts und bei Nebel. Echtzeit-Sicht für den Operator.', feat1_desc_s:'Erkennt Personen im Wasser automatisch, auch bei Wellen, nachts und bei Nebel.',
        feat2_title:'Sofortstart', feat2_desc:'Vom Alarm bis zum Eintauchen ins Wasser in wenigen Sekunden. Vollständig betriebsbereit ohne manuellen Eingriff.', feat2_desc_s:'Vom Alarm bis zum Eintauchen ins Wasser in wenigen Sekunden. Vollständig betriebsbereit.',
        feat3_title:'Rettungsausrüstung', feat3_desc:'Integrierter Rettungsring und Auftriebssystem für präzisen Einsatz, ohne dass ein Retter ins Wasser muss.', feat3_desc_s:'Integrierter Rettungsring und Auftriebssystem für präzisen Einsatz.',
        feat4_title:'Langstrecken-Fernbedienung', feat4_desc:'Reichweite bis zu 800 m. Präzise Navigation in Echtzeit mit automatischer Korrektur für Strömungen und Wind.', feat4_desc_s:'Reichweite bis zu 800 m. Präzise Navigation in Echtzeit.',
        feat5_title:'Echtzeit-Display', feat5_desc:'HD-Video und Sensordaten direkt an den Kommandoposten übertragen. Vollständige Kontrolle vom Ufer.', feat5_desc_s:'HD-Video und Sensordaten direkt an den Kommandoposten übertragen.',
        feat6_title:'Hohe Zugkapazität', feat6_desc:'Zieht bis zu 1.000 kg im Wasser, ideal für mehrere Personen gleichzeitig in Notfallsituationen.', feat6_desc_s:'Zieht bis zu 1.000 kg im Wasser, ideal für mehrere Personen gleichzeitig.',
        feat7_title:'Selbstaufrichtung', feat7_desc:'Wenn der Roboter kentert, richtet er sich automatisch in Sekunden auf, ohne Eingriff des Operators.', feat7_desc_s:'Richtet sich automatisch in Sekunden auf, wenn er in aufgewühltem Wasser kentert.',
        feat8_title:'Satelliten-GPS', feat8_desc:'Anschließbar an ein dediziertes GPS: Die Position des Dolphin ist in Echtzeit per Satellit sichtbar, auch auf große Distanz.', feat8_desc_s:'Position in Echtzeit per Satellit sichtbar, auch auf große Distanz.',
        how_label:'Funktionsweise', how_title:'Vom Alarm<br>zur Rettung.', how_sub:'Drei Phasen. Neunzig Sekunden. Ein gerettetes Leben.',
        step1_title:'Alarm', step1_desc:'Notruf, Sensor oder manuelle Aktivierung. Das System ist innerhalb von Sekunden in Betrieb.', step1_time:'< 10 Sekunden',
        step2_title:'Annäherung', step2_desc:'Der Operator steuert den Roboter per Fernbedienung zur Person, auch gegen Strömung und Wind. Reichweite bis zu 800 m.', step2_time:'7 m/s Höchstgeschwindigkeit',
        step3_title:'Rettung', step3_desc:'Die Person hält sich am Roboter fest und wird sicher transportiert. Die Retter bleiben am Ufer: null Risiken.', step3_badge:'Null Retter im Wasser',
        media_label:'Presse & Medien', media_title:'Bekannt aus<br>Presse & Medien', media_desc:'Der Dolphin 3 zieht die Aufmerksamkeit der Medien in ganz Deutschland auf sich.',
        contact_label:'Bereit für den nächsten Schritt?', contact_title:'Schütze<br><span style="color:var(--cyan);">Menschenleben.</span>', contact_desc:'Buche eine persönliche Demo und entdecke, wie Aqua Rescue Systems deine Sicherheitsinfrastruktur revolutionieren kann.',
        contact_phone_lbl:'Telefon', contact_resp_lbl:'Antwortzeit', contact_resp_val:'Innerhalb 24 Stunden',
        form_name:'Vor- und Nachname', form_name_ph:'Max Mustermann', form_email_ph:'max@beispiel.de',
        form_phone_lbl:'Telefon (optional)', form_phone_ph:'+49 000 000 0000',
        form_org_lbl:'Organisation', form_org_ph:'Einsatzbereich wählen...',
        form_opt1:'Küstenwache / Seenotrettung', form_opt2:'Feuerwehr / Rettungsteams',
        form_opt3:'Schwimmbad / Badeanlage', form_opt4:'Katastrophenschutz',
        form_opt5:'Häfen / Maritime Industrie', form_opt6:'Sonstiges',
        form_msg_lbl:'Nachricht (optional)', form_msg_ph:'Wie können wir Ihnen helfen?',
        form_submit:'Kostenlose Demo buchen', form_note:'Unverbindlich · Antwort innerhalb 24 Stunden',
        partner_label:'Partner', partner_title:'Mit wem wir arbeiten',
        footer_legal:'Impressum', footer_contact:'Kontakt',
        footer_tagline:'Autonome Wasserrettungsroboter, entwickelt um Leben zu retten, ohne Retter zu gefährden.', footer_quicklinks:'Quick Links', footer_madeby:'· made by',
        copyright:'© 2026 AquaRescueSystems · Alle Rechte vorbehalten',

        crumb_home:'Home', learnmore:'Mehr erfahren',
        mission_teaser_desc:'Jede Sekunde zählt. Erfahre, warum wir Aqua Rescue Systems gegründet haben und wie unsere Roboter die kritische Lücke zwischen Alarm und Rettung schließen.',
        product_teaser_desc:'Zwei Versionen des gleichen Roboters: Vergleiche Spezifikationen und Ausstattung und wähle das passende Dolphin-Modell für deinen Einsatz.',
        tech_teaser_desc:'Integrierte Kamera, Selbstaufrichtung, Satelliten-GPS: Entdecke die Technik, die eine Rettung in unter 90 Sekunden möglich macht.',

        ms_hero_label:'Unsere Mission', ms_hero_title:'Jede Sekunde<br>zählt.', ms_hero_sub:'Warum es uns gibt, und was uns antreibt, die Zukunft der Wasserrettung zu bauen.',
        ms_problem_label:'Das Problem', ms_problem_title:'Zeit ist der Faktor,<br>der alles entscheidet.',
        ms_problem_p1:'Ertrinken ist eine der häufigsten Ursachen für tödliche Unfälle weltweit und geschieht meist lautlos: In den meisten Fällen gibt es kein sichtbares Rufen oder Zappeln, nur wenige Augenblicke, in denen eine Person unter der Wasseroberfläche verschwindet.',
        ms_problem_p2:'Auch gut ausgebildete Rettungskräfte müssen einen Weg zurücklegen, der Zeit kostet: das Ufer erreichen, sich absichern, ins Wasser gehen. In diesem Zeitfenster entscheidet sich oft der Ausgang des Unfalls. Aqua Rescue Systems wurde gegründet, um diese Zeit drastisch zu verkürzen – ohne Retter einem Risiko auszusetzen.',
        ms_story_label:'Unsere Geschichte', ms_story_title:'Von einem realen Bedarf<br>zu einem Rettungsroboter.',
        ms_story_p1:'Aqua Rescue Systems hat seinen Sitz in Bozen, Italien, und entstand aus der direkten Beobachtung eines Problems, das bestehende Technologien nicht lösten: Menschliche Retter können nicht immer als Erste am Ort eines Ertrinkungsunfalls sein, besonders wenn die Bedingungen widrig sind.',
        ms_story_p2:'Der Dolphin 3 wird in Deutschland entwickelt und produziert, in Zusammenarbeit mit spezialisierten technischen Partnern aus Schiffstechnik und Robotik, um die Zuverlässigkeitsstandards zu erfüllen, die Küstenwache, Feuerwehr und Katastrophenschutz benötigen.',
        ms_values_label:'Unsere Werte', ms_values_title:'Was jede unserer<br>Entscheidungen leitet.',
        ms_value1_title:'Null Risiko für Retter', ms_value1_desc:'Jede Funktion des Dolphin ist so konzipiert, dass kein Einsatzkräfte-Mitglied ins Wasser gehen muss, um eine Rettung abzuschließen.',
        ms_value2_title:'Zuverlässigkeit unter allen Bedingungen', ms_value2_desc:'Getestet für Unwetter, schlechte Sicht und raue See: Technologie muss genau dann funktionieren, wenn die Bedingungen am schlechtesten sind.',
        ms_value3_title:'Geschwindigkeit als oberste Priorität', ms_value3_desc:'Jede Komponente, vom Motor bis zum Steuerungssystem, ist darauf optimiert, die Zeit zwischen Alarm und Ankunft vor Ort zu minimieren.',
        ms_value4_title:'Einfache Bedienung', ms_value4_desc:'Eine intuitive Oberfläche ermöglicht jedem geschulten Operator, das System auch unter Druck ohne aufwändige Schulung zu bedienen.',
        ms_cta_title:'Mehr über unseren<br>Roboter erfahren?', ms_cta_desc:'Entdecke die technischen Daten des Dolphin 3 oder fordere eine persönliche Demo an.',
        ms_cta_btn1:'Produkt entdecken', ms_cta_btn2:'Demo anfragen',

        pr_hero_label:'Produkt', pr_hero_title:'Die DOLPHIN-<br>Reihe.', pr_hero_sub:'Zwei Versionen des gleichen Roboters, entwickelt um sich an dein Einsatzszenario anzupassen.',
        pr_which_label:'Welches Modell passt', pr_which_title:'Basis oder Plus:<br>Der Unterschied liegt in der Kontrolle.',
        pr_which_p1:'Der <strong style="color:var(--text);">Dolphin 3</strong> bietet alle wesentlichen Rettungsfunktionen: 7 m/s Geschwindigkeit, 800 m Reichweite, bis zu 1.000 kg Zugkraft und automatische Selbstaufrichtung. Die ideale Lösung für alle, die ein schnell einsatzbereites Rettungssystem suchen.',
        pr_which_p2:'Der <strong style="color:var(--text);">Dolphin 3 Plus</strong> ergänzt Dual GNSS für präzisere Ortung, Auto Return für die automatische Rückkehr und eine Kamera mit Fernmonitor für die visuelle Echtzeitkontrolle — gedacht für Teams, die in großen Gebieten oder bei schlechter Sicht arbeiten.',
        pr_specs_label:'Technische Daten', pr_specs_title:'Gebaut, um<br>standzuhalten.',
        pr_spec1_title:'Struktur & Materialien', pr_spec1_desc:'Stoßfestes Gehäuse mit IP67-Schutz gegen Staub und Wasser, konzipiert für den intensiven Einsatz in Meer- und Süßwasser.',
        pr_spec2_title:'Antrieb', pr_spec2_desc:'Hocheffizientes Antriebssystem, das 7 m/s erreicht, mit elektronischer Leistungssteuerung für stabile Navigation auch bei Strömung.',
        pr_spec3_title:'Laden & Akkulaufzeit', pr_spec3_desc:'Wiederaufladbarer Akku mit bis zu 70 Minuten Laufzeit bei moderater Geschwindigkeit — ausreichend für mehrere Einsätze oder eine aktive Überwachungsschicht.',
        pr_spec4_title:'Support & Garantie', pr_spec4_desc:'Jede Dolphin-Einheit ist durch eine Herstellergarantie und einen dedizierten technischen Support für Organisationen abgedeckt, die sie einsetzen.',
        pr_cta_title:'Bereit, den Dolphin<br>in dein Team zu integrieren?', pr_cta_desc:'Fordere eine kostenlose Demo an und erlebe, wie er im Einsatz funktioniert.',

        te_hero_label:'Technologie', te_hero_title:'Entwickelt für<br>das Undenkbare.', te_hero_sub:'Die Ingenieurskunst hinter einer Rettung, die beim ersten Versuch funktionieren muss — jedes Mal.',
        te_deep_label:'Bordsysteme', te_deep_title:'Acht Systeme,<br>ein Ziel.',
        te_rd_label:'Forschung & Entwicklung', te_rd_title:'Gebaut mit denen,<br>die das Wasser wirklich kennen.',
        te_rd_p1:'Der Dolphin 3 entsteht aus der Zusammenarbeit zwischen Aqua Rescue Systems und spezialisierten technischen Partnern wie WRGB und HL Schiffstechnik, mit direkter Erfahrung in Schiffstechnik und maritimen Systemen.',
        te_rd_p2:'Jede Produktiteration wird unter realen Einsatzbedingungen getestet, nicht nur im Labor, um sicherzustellen, dass die angegebenen Leistungswerte — Geschwindigkeit, Akkulaufzeit, Zugkraft — auch im Feld zuverlässig bleiben.',
        te_safety_label:'Sicherheit & Zertifizierungen', te_safety_title:'Zuverlässig, wenn es<br>wirklich darauf ankommt.',
        te_safety_p1:'Die Schutzart IP67 gewährleistet Beständigkeit gegen Staub und zeitweiliges Untertauchen, während das Selbstaufrichtungssystem den Roboter auch bei rauer See innerhalb weniger Sekunden automatisch wieder in die richtige Lage bringt.',
        te_safety_p2:'Alle elektronischen Systeme sind für den zuverlässigen Betrieb in maritimen Umgebungen konzipiert, mit Korrosionsschutz gegen Salzwasser und Komponenten, die für intensiven und wiederholten Einsatz über die Zeit ausgelegt sind.',
        te_roadmap_label:'Zukünftige Entwicklung', te_roadmap_title:'Die Arbeit<br>geht weiter.',
        te_roadmap_p1:'Das Team von Aqua Rescue Systems arbeitet kontinuierlich an neuen Funktionen — von erweiterter Satellitenkonnektivität bis zu Verbesserungen bei der automatischen Personenerkennung im Wasser —, um jede zukünftige Dolphin-Generation noch schneller und wirksamer zu machen.',
        te_cta_title:'Erlebe den Dolphin 3<br>live.', te_cta_desc:'Fordere eine Demo an und sieh die Technologie in Aktion.'
    },
    en: {
        nav_mission:'Mission', nav_product:'Product', nav_technology:'Technology', nav_how:'How it works', nav_cta:'Request demo',
        hero_badge:'Water Rescue Robot',
        hero_h1:'Saving<br><span class="cyan">Lives.</span><br>Without Risk.',
        hero_sub:'Aqua Rescue Systems develops autonomous water rescue robots that reach the incident site in seconds, saving lives without putting rescuers at risk.',
        hero_btn1:'Request a demo', hero_btn2:'Discover the product',
        mission_label:'Our Mission', mission_title:'Every second<br>counts.',
        mission_desc:'Drowning accidents happen in an instant – too fast for traditional rescuers. Aqua Rescue Systems fills this critical gap with autonomous water rescue robots: ready for immediate response, with no risk to personnel.',
        check1:'Life ring and buoyancy assistance at the incident site within 90 seconds',
        check2:'Person recognition with integrated camera, even at night and in low visibility',
        check3:'Fully remote-controlled: no rescuer enters the water',
        sys_label:'Live system parameters', sys_speed:'Speed vs. human rescuer', sys_speed_val:'5x faster',
        sys_safety:'Operator safety', sys_survival:'Survival probability', sys_battery:'Battery capacity',
        sys_status:'System nominal · Ready for deployment',
        stat_response:'Response time', stat_speed:'Top speed', stat_tow:'Tow capacity', stat_range:'Remote range', stat_operational:'Operational',
        ambiti_label:'Areas of use', ambiti_title:'Wherever water<br>threatens lives.',
        uc1_tag:'Authorities & safety', uc1_title:'Coast guard &<br>sea rescue',
        uc2_tag:'Sports & leisure', uc2_title:'Swimming pools &<br>beach facilities',
        uc3_tag:'Civil protection', uc3_title:'Floods &<br>natural disasters',
        uc4_tag:'First response', uc4_title:'Fire brigades &<br>rescue teams',
        uc5_tag:'Industry & marine', uc5_title:'Ports &<br>maritime infrastructure',
        uc6_tag:'Events & sports', uc6_title:'Triathlon &<br>outdoor events',
        product_title:'The DOLPHIN Range', product_desc:'Two versions of the same robot: choose the model that suits your needs.',
        col_feature:'Feature', col_base:'Base model', col_advanced:'Advanced version',
        spec_dim:'Dimensions', spec_dim_note:'Length × Width × Height',
        spec_weight:'Weight', spec_weight_note:'Total weight of the robot',
        spec_vmax:'Top speed', spec_vmax_note:'Maximum movement speed in water',
        spec_battery_life:'Battery life', spec_battery_note:'Battery duration at moderate speed',
        spec_range:'Remote range', spec_range_note:'Maximum remote control distance',
        spec_tow_cap:'Tow capacity', spec_tow_note:'Maximum weight the robot can tow in water',
        spec_waterproof:'Waterproofing', spec_waterproof_note:'Protection standard against dust and water',
        spec_instant:'Instant Activation', spec_remote_control:'Remote Controller & Local Control', spec_gopro:'GoPro Mount',
        spec_autoright:'Self-righting', spec_autoright_note:'Automatically rights itself if overturned',
        spec_autoreturn:'Auto Return', spec_autoreturn_note:'Automatically returns to starting point',
        spec_camera:'Camera & Remote Monitor', spec_camera_note:'Integrated video camera and screen in remote control',
        spec_charge_stand:'Charge Stand', spec_speaker_light:'Remote Speaker & Search Light', spec_optional:'Optional',
        product_cta:'Request contact',
        tech_label:'Technology', tech_title:'Designed for<br>the unthinkable.',
        tech_desc:'Every system was engineered for the most demanding conditions: bad weather, panic zones, darkness. Reliable technology when it truly matters.',
        feat1_title:'Integrated camera', feat1_desc:'Automatically identifies people in water, even with waves, at night and in fog. Real-time vision for the operator.', feat1_desc_s:'Automatically identifies people in water, even with waves, at night and in fog.',
        feat2_title:'Instant launch', feat2_desc:'From alert to water entry in seconds. Fully operational without the need for manual intervention.', feat2_desc_s:'From alert to water entry in seconds. Fully operational without manual intervention.',
        feat3_title:'Rescue equipment', feat3_desc:'Integrated life ring and buoyancy system for precise intervention without any rescuer entering the water.', feat3_desc_s:'Integrated life ring and buoyancy system for precise intervention.',
        feat4_title:'Long-range remote', feat4_desc:'Range up to 800 m. Precise real-time navigation with automatic correction for currents and wind.', feat4_desc_s:'Range up to 800 m. Precise real-time navigation with automatic correction.',
        feat5_title:'Real-time display', feat5_desc:'HD video and sensor data transmitted live to the command post. Full control from the shore.', feat5_desc_s:'HD video and sensor data transmitted live to the command post.',
        feat6_title:'High tow capacity', feat6_desc:'Tows up to 1,000 kg in water, ideal for supporting multiple people simultaneously in emergency situations.', feat6_desc_s:'Tows up to 1,000 kg in water, ideal for multiple people simultaneously.',
        feat7_title:'Self-righting', feat7_desc:'If the robot overturns during transport or in rough waters, it automatically rights itself in seconds, without operator intervention.', feat7_desc_s:'Automatically rights itself in seconds if overturned in rough waters.',
        feat8_title:'Satellite GPS', feat8_desc:'Connectable to a dedicated GPS: the Dolphin\'s position is visible in real time via satellite, even at great distances.', feat8_desc_s:'Position visible in real time via satellite, even at great distances.',
        how_label:'How it works', how_title:'From alarm<br>to rescue.', how_sub:'Three phases. Ninety seconds. One life saved.',
        step1_title:'Alert', step1_desc:'Emergency call, sensor, or manual activation. The system is up and running within seconds.', step1_time:'< 10 seconds',
        step2_title:'Approach', step2_desc:'The operator guides the robot via remote control to the person, even against currents and wind. Range up to 800 m.', step2_time:'7 m/s top speed',
        step3_title:'Rescue', step3_desc:'The person grabs onto the robot and is transported to safety. Rescuers stay on shore: zero risks.', step3_badge:'Zero rescuers in water',
        media_label:'Press & Media', media_title:'Featured in<br>Press & Media', media_desc:'The Dolphin 3 is attracting media attention across Germany.',
        contact_label:'Ready for the next step?', contact_title:'Protect<br><span style="color:var(--cyan);">Human Lives.</span>', contact_desc:'Book a personalized demo and discover how Aqua Rescue Systems can revolutionize your safety infrastructure.',
        contact_phone_lbl:'Phone', contact_resp_lbl:'Response', contact_resp_val:'Within 24 hours',
        form_name:'Full name', form_name_ph:'John Smith', form_email_ph:'john@example.com',
        form_phone_lbl:'Phone (optional)', form_phone_ph:'+1 000 000 0000',
        form_org_lbl:'Organization', form_org_ph:'Select area of use...',
        form_opt1:'Coast guard / Sea rescue', form_opt2:'Fire brigade / Rescue teams',
        form_opt3:'Swimming pool / Beach facility', form_opt4:'Civil protection',
        form_opt5:'Ports / Maritime industry', form_opt6:'Other',
        form_msg_lbl:'Message (optional)', form_msg_ph:'How can we help you?',
        form_submit:'Book a free demo', form_note:'No commitment · Reply within 24 hours',
        partner_label:'Partners', partner_title:'Who we work with',
        footer_legal:'Legal notice', footer_contact:'Contact',
        footer_tagline:'Autonomous water rescue robots, built to save lives without putting rescuers at risk.', footer_quicklinks:'Quick Links', footer_madeby:'· made by',
        copyright:'© 2026 AquaRescueSystems · All rights reserved',

        crumb_home:'Home', learnmore:'Learn more',
        mission_teaser_desc:'Every second counts. Discover why we founded Aqua Rescue Systems and how our robots close the critical gap between the alarm and the rescue.',
        product_teaser_desc:'Two versions of the same robot: compare specs and features, and choose the Dolphin model that fits your deployment.',
        tech_teaser_desc:'Integrated camera, self-righting, satellite GPS: discover the engineering that makes a rescue in under 90 seconds possible.',

        ms_hero_label:'Our Mission', ms_hero_title:'Every second<br>counts.', ms_hero_sub:'Why we exist, and what drives us to build the future of water rescue.',
        ms_problem_label:'The problem', ms_problem_title:'Time is the factor<br>that decides everything.',
        ms_problem_p1:'Drowning is one of the leading causes of accidental death worldwide, and it strikes silently: in most cases there is no visible shouting or splashing, just a few instants in which a person disappears beneath the surface.',
        ms_problem_p2:'Even well-trained rescuers have to cover a path that takes time: reaching the shore, securing themselves, entering the water. That window often decides the outcome of the accident. Aqua Rescue Systems was founded to drastically compress that time, without putting rescuers at risk.',
        ms_story_label:'Our story', ms_story_title:'From a real need<br>to a rescue robot.',
        ms_story_p1:'Aqua Rescue Systems is based in Bolzano, Italy, and was born from the direct observation of a problem existing technologies didn\'t solve: human rescuers can\'t always be the first to arrive at a drowning incident, especially when conditions are unfavorable.',
        ms_story_p2:'The Dolphin 3 is developed and manufactured in Germany, in partnership with technical specialists in naval engineering and robotics, to meet the reliability standards required by coast guards, fire brigades, and civil protection agencies.',
        ms_values_label:'Our values', ms_values_title:'What guides every<br>decision we make.',
        ms_value1_title:'Zero risk for rescuers', ms_value1_desc:'Every function of the Dolphin is designed so that no operator ever has to enter the water to complete a rescue.',
        ms_value2_title:'Reliability in every condition', ms_value2_desc:'Tested to operate in bad weather, low visibility and rough water: technology has to work exactly when conditions are worst.',
        ms_value3_title:'Speed as an absolute priority', ms_value3_desc:'Every component, from the motor to the control system, is optimized to minimize the time between the alarm and arrival on scene.',
        ms_value4_title:'Operational simplicity', ms_value4_desc:'An intuitive interface lets any trained operator use the system under pressure, without complex training.',
        ms_cta_title:'Want to learn more<br>about our robot?', ms_cta_desc:'Discover the Dolphin 3\'s technical specifications or request a personalized demo.',
        ms_cta_btn1:'Discover the product', ms_cta_btn2:'Request a demo',

        pr_hero_label:'Product', pr_hero_title:'The DOLPHIN<br>range.', pr_hero_sub:'Two versions of the same robot, designed to adapt to your operational scenario.',
        pr_which_label:'Which model to choose', pr_which_title:'Base or Plus:<br>the difference is in the control.',
        pr_which_p1:'The <strong style="color:var(--text);">Dolphin 3</strong> offers all the essential rescue functions: 7 m/s speed, 800 m range, up to 1,000 kg tow capacity, and automatic self-righting. It\'s the ideal solution for anyone looking for a rescue system that can be deployed right away.',
        pr_which_p2:'The <strong style="color:var(--text);">Dolphin 3 Plus</strong> adds Dual GNSS for more precise positioning, Auto Return for automatic homing, and a camera with remote monitor for real-time visual control — built for teams operating over large areas or in low-visibility conditions.',
        pr_specs_label:'Technical specifications', pr_specs_title:'Built to<br>withstand.',
        pr_spec1_title:'Structure & materials', pr_spec1_desc:'Impact-resistant hull with IP67 protection against dust and water, built to withstand intensive use in both salt and fresh water environments.',
        pr_spec2_title:'Propulsion', pr_spec2_desc:'High-efficiency propulsion system reaching 7 m/s, with electronic power management for stable navigation even in the presence of current.',
        pr_spec3_title:'Charging & battery life', pr_spec3_desc:'Rechargeable battery with up to 70 minutes of runtime at moderate speed, enough to cover multiple interventions or an active monitoring shift.',
        pr_spec4_title:'Support & warranty', pr_spec4_desc:'Every Dolphin unit is covered by a manufacturer warranty and a dedicated technical support service for the organizations that deploy it.',
        pr_cta_title:'Ready to add the Dolphin<br>to your team?', pr_cta_desc:'Request a free demo and see how it works in the field.',

        te_hero_label:'Technology', te_hero_title:'Designed for<br>the unthinkable.', te_hero_sub:'The engineering behind a rescue that has to work on the first attempt, every time.',
        te_deep_label:'Onboard systems', te_deep_title:'Eight systems,<br>one goal.',
        te_rd_label:'Research & development', te_rd_title:'Built with those who<br>really know the water.',
        te_rd_p1:'The Dolphin 3 is the result of collaboration between Aqua Rescue Systems and specialized technical partners such as WRGB and HL Schiffstechnik, with direct experience in naval engineering and marine systems.',
        te_rd_p2:'Every product iteration is tested in real operational conditions, not just in the lab, to make sure the stated performance — speed, battery life, tow capacity — stays reliable in the field.',
        te_safety_label:'Safety & certifications', te_safety_title:'Reliable when it<br>truly matters.',
        te_safety_p1:'The IP67 protection rating guarantees resistance to dust and temporary submersion, while the self-righting system automatically restores the robot to the correct orientation within seconds, even in rough water.',
        te_safety_p2:'All electronic systems are engineered to operate reliably in marine environments, with corrosion protection against salt water and components built for intensive, repeated use over time.',
        te_roadmap_label:'Future development', te_roadmap_title:'The work<br>continues.',
        te_roadmap_p1:'The Aqua Rescue Systems team is constantly working on new capabilities, from expanded satellite connectivity to improvements in automatic person-detection in water, to make every future Dolphin generation even faster and more effective.',
        te_cta_title:'See the Dolphin 3<br>in action.', te_cta_desc:'Request a demo and see the technology at work.'
    }
};

let currentLang = localStorage.getItem('lang') || 'it';

const seoMeta = {
    it: {
        title: 'Aqua Rescue Systems – Dolphin 3 | Robot di Soccorso Acquatico | Made in Germany',
        description: 'Il Dolphin 3 è il robot autonomo per il soccorso acquatico che raggiunge le vittime in meno di 90 secondi. Velocità 7 m/s, portata 800 m, traino 1.000 kg. Prenota una demo gratuita.',
        ogTitle: 'Aqua Rescue Systems – Dolphin 3 | Robot di Soccorso Acquatico',
        ogDescription: 'Il Dolphin 3 raggiunge le vittime in meno di 90 secondi. Velocità 7 m/s, portata 800 m. Zero rischi per i soccorritori. Made in Germany.'
    },
    de: {
        title: 'Aqua Rescue Systems – Dolphin 3 | Wasserrettungsroboter | Made in Germany',
        description: 'Der Dolphin 3 ist der autonome Wasserrettungsroboter, der Ertrinkende in weniger als 90 Sekunden erreicht. 7 m/s Geschwindigkeit, 800 m Reichweite, 1.000 kg Zugkraft. Demo anfragen.',
        ogTitle: 'Aqua Rescue Systems – Dolphin 3 | Wasserrettungsroboter',
        ogDescription: 'Autonomer Wasserrettungsroboter. Erreicht Opfer in weniger als 90 Sekunden. 7 m/s, 800 m Reichweite. Null Risiko für Einsatzkräfte. Made in Germany.'
    },
    en: {
        title: 'Aqua Rescue Systems – Dolphin 3 | Water Rescue Robot | Made in Germany',
        description: 'The Dolphin 3 is the autonomous water rescue robot that reaches victims in under 90 seconds. 7 m/s speed, 800 m range, 1,000 kg tow capacity. Book a free demo.',
        ogTitle: 'Aqua Rescue Systems – Dolphin 3 | Water Rescue Robot',
        ogDescription: 'Autonomous water rescue robot reaching victims in under 90 seconds. 7 m/s speed, 800 m range. Zero risk for rescuers. Made in Germany.'
    }
};

function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];
    const s = seoMeta[lang];
    document.title = document.title; // page-specific titles are set inline per page; SEO meta below stays generic
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && !descMeta.hasAttribute('data-static')) descMeta.setAttribute('content', s.description);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('[data-lang-img]').forEach(el => {
        el.style.display = el.getAttribute('data-lang-img') === lang ? '' : 'none';
    });
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
}

function toggleLangDropdown() {
    document.getElementById('langDropMenu').classList.toggle('open');
}

function toggleMobileNav() {
    const isOpen = document.getElementById('navLinksWrap').classList.toggle('open');
    document.getElementById('navBurger').classList.toggle('open', isOpen);
    document.getElementById('navBurger').setAttribute('aria-expanded', isOpen);
    document.getElementById('navOverlay').classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeMobileNav() {
    document.getElementById('navLinksWrap').classList.remove('open');
    document.getElementById('navBurger').classList.remove('open');
    document.getElementById('navBurger').setAttribute('aria-expanded', 'false');
    document.getElementById('navOverlay').classList.remove('open');
    document.body.style.overflow = '';
}
document.addEventListener('click', e => {
    if (!e.target.closest('.lang-dropdown-wrap')) {
        document.getElementById('langDropMenu')?.classList.remove('open');
    }
});
function setLangMobile(lang) {
    setLang(lang);
    document.getElementById('langDropBtn').textContent = lang.toUpperCase() + ' ▾';
    document.querySelectorAll('.lang-dropdown-item').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === lang));
    document.getElementById('langDropMenu').classList.remove('open');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    setLang(currentLang);
    const btn = document.getElementById('langDropBtn');
    if (btn) btn.textContent = currentLang.toUpperCase() + ' ▾';
    document.querySelectorAll('.lang-dropdown-item').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === currentLang));
});

// Frost the nav bar once scrolled past the top
(function () {
    const navEl = document.getElementById('nav');
    function updateNav() {
        navEl.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
})();
