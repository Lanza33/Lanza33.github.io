// Feature cards slider (mobile)
let featIndex = 0;
const featTrack = document.getElementById('featTrack');
const featDotsEl = document.getElementById('featDots');
const featPages = featTrack ? featTrack.querySelectorAll('.feat-page').length : 0;

if (featTrack && featPages > 0) {
    if (featDotsEl) {
        for (let i = 0; i < featPages; i++) {
            const d = document.createElement('div');
            d.className = 'feat-slider-dot' + (i === 0 ? ' active' : '');
            featDotsEl.appendChild(d);
        }
    }
    featSlide(0);

    let featAutoTimer = setInterval(() => featGoTo((featIndex + 1) % featPages), 3500);
    function featResetAuto() {
        clearInterval(featAutoTimer);
        featAutoTimer = setInterval(() => featGoTo((featIndex + 1) % featPages), 3500);
    }

    let featTouchStartX = null;
    featTrack.addEventListener('touchstart', e => { featTouchStartX = e.touches[0].clientX; }, {passive:true});
    featTrack.addEventListener('touchend', e => {
        if (featTouchStartX === null) return;
        const dx = e.changedTouches[0].clientX - featTouchStartX;
        featTouchStartX = null;
        if (Math.abs(dx) > 0) { featSlide(dx > 0 ? -1 : 1); featResetAuto(); }
    }, {passive:true});
}

function featGoTo(index) {
    featIndex = index;
    featTrack.style.transform = `translateX(-${featIndex * 100}%)`;
    document.querySelectorAll('.feat-slider-dot').forEach((d, i) => d.classList.toggle('active', i === featIndex));
    const featPrevEl = document.getElementById('featPrev');
    const featNextEl = document.getElementById('featNext');
    if (featPrevEl) featPrevEl.disabled = featIndex === 0;
    if (featNextEl) featNextEl.disabled = featIndex === featPages - 1;
    document.querySelectorAll('.feat-swipe-hint').forEach(h => h.classList.toggle('hidden', featIndex > 0));
}

function featSlide(dir) {
    featGoTo(Math.max(0, Math.min(featPages - 1, featIndex + dir)));
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
        spec_immediate_on:'Accensione immediata', spec_standby:'Modalità standby magnetica', spec_onboard_control:'Controllo a bordo', spec_water_activation:'Attivazione in acqua',
        spec_oled:'Display OLED',
        spec_autoright:'Autoraddrizzamento automatico', spec_autoright_note:'Si raddrizza automaticamente se capovolto',
        spec_gnss:'Dual GNSS', spec_gnss_note:'Localizzazione GPS doppia per maggiore precisione',
        spec_autoreturn:'Auto Return', spec_autoreturn_note:'Ritorna automaticamente al punto di partenza',
        spec_camera:'Telecamera di bordo', spec_monitor:'Monitor remoto',
        spec_charge_stand:'Supporto di ricarica', spec_speaker_light:'Faro di ricerca e altoparlante', spec_optional:'Opzionale',
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
        footer_tagline:'Robot autonomi per il soccorso in acqua, sviluppati per salvare vite senza mettere in pericolo i soccorritori.', footer_quicklinks:'Link rapidi', footer_madeby:'· made by', footer_madeby_top:'made by', swipe_hint:'Scorri per vedere gli altri step',
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

        pr_hero_label:'Prodotto', pr_hero_title:'La gamma<br>DOLPHIN', pr_hero_sub:'Due versioni dello stesso robot, progettate per adattarsi al tuo scenario operativo.',
        pr_which_label:'Quale modello scegliere', pr_which_title:'Base o Plus:<br>la differenza è nel controllo.',
        pr_which_p1:'Il <strong style="color:var(--text);">Dolphin 3</strong> offre tutte le funzioni essenziali per il soccorso: velocità di 7 m/s, portata di 800 m, traino fino a 1.000 kg e autoraddrizzamento automatico. È la soluzione ideale per chi cerca un sistema di soccorso rapido da integrare fin da subito.',
        pr_which_p2:'Il <strong style="color:var(--text);">Dolphin 3 Plus</strong> aggiunge Dual GNSS per una localizzazione più precisa, Auto Return per il rientro automatico e una telecamera con monitor remoto per il controllo visivo in tempo reale — pensato per team che operano su aree estese o in condizioni di scarsa visibilità.',
        pr_specs_label:'Specifiche tecniche', pr_specs_title:'Costruito per<br>resistere.',
        pr_spec1_title:'Struttura & materiali', pr_spec1_desc:'Scafo resistente agli urti con protezione IP67 contro polvere e acqua, pensato per resistere a un uso intensivo in ambienti marini e di acqua dolce.',
        pr_spec2_title:'Propulsione', pr_spec2_desc:'Sistema di propulsione ad alta efficienza che raggiunge i 7 m/s, con gestione elettronica della potenza per una navigazione stabile anche in presenza di corrente.',
        pr_spec3_title:'Ricarica & autonomia', pr_spec3_desc:'Batteria ricaricabile con autonomia fino a 70 minuti a velocità moderata, sufficiente per coprire più interventi o un turno di sorveglianza attiva.',
        pr_spec4_title:'Assistenza & garanzia', pr_spec4_desc:'Ogni unità Dolphin è coperta da garanzia del produttore e da un servizio di assistenza tecnica dedicato per le organizzazioni che lo adottano.',
        pr_cta_title:'Pronto a integrare<br>il Dolphin nel tuo team?', pr_cta_desc:'Richiedi una demo gratuita e scopri come funziona sul campo.',

        te_hero_label:'Tecnologia', te_hero_title:'Progettato per<br>l\'impensabile', te_hero_sub:'L\'ingegneria dietro un salvataggio che deve funzionare al primo tentativo, sempre.',
        ct_hero_label:'Contatto', ct_hero_title:'Contattaci', ct_hero_sub:'Richiedi una demo gratuita del Dolphin e scopri come funziona sul campo.', nav_cta_short:'Contatto',
        te_deep_label:'Sistemi di bordo', te_deep_title:'Otto sistemi,<br>un solo obiettivo.',
        te_rd_label:'Ricerca & sviluppo', te_rd_title:'Costruito insieme a chi<br>l\'acqua la conosce davvero.',
        te_rd_p1:'Il Dolphin 3 nasce dalla collaborazione tra Aqua Rescue Systems e partner tecnici specializzati come WRGB e HL Schiffstechnik, realtà con esperienza diretta in ingegneria navale e sistemi acquatici.',
        te_rd_p2:'Ogni iterazione del prodotto viene testata in condizioni operative reali, non solo in laboratorio, per assicurarsi che le prestazioni dichiarate — velocità, autonomia, capacità di traino — restino affidabili anche sul campo.',
        te_safety_label:'Sicurezza & certificazioni', te_safety_title:'Affidabile quando<br>conta davvero.',
        te_safety_p1:'Il grado di protezione IP67 garantisce resistenza a polvere e immersione temporanea, mentre il sistema di autoraddrizzamento riporta automaticamente il robot in assetto corretto in pochi secondi, anche in acque agitate.',
        te_safety_p2:'Tutti i sistemi elettronici sono progettati per operare in modo affidabile in ambienti marini, con protezione dalla corrosione salina e componentistica pensata per un uso intensivo e ripetuto nel tempo.',
        te_cta_title:'Scopri il Dolphin 3<br>dal vivo.', te_cta_desc:'Richiedi una demo e vedi la tecnologia in azione.',
        note_eyebrow:'Informazioni legali', note_title:'Note Legali',
        note_owner_label:'Titolare del sito', note_owner_body:'SportForYou Srls<br>Via Enrico Fermi 5, 39100 Bolzano (BZ), Italia<br>P.IVA: IT03275830218 · C.F.: 03275830218<br>REA: BZ-246529',
        note_contact_label:'Contatti', note_contact_body:'E-mail: <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a><br>PEC: <a href="mailto:sportforyou@arubapec.it" style="color:var(--cyan);">sportforyou@arubapec.it</a><br>Mobile: +39 335 285676',
        note_ip_label:'Proprietà intellettuale', note_ip_body:'Tutti i contenuti presenti su questo sito — testi, immagini, loghi, grafica — sono di proprietà esclusiva di SportForYou Srls o dei rispettivi titolari e sono protetti dalla normativa vigente in materia di diritto d\'autore. È vietata la riproduzione, anche parziale, senza autorizzazione scritta.',
        note_liability_label:'Limitazione di responsabilità', note_liability_body:'Le informazioni contenute in questo sito hanno carattere puramente informativo. SportForYou Srls non si assume alcuna responsabilità per eventuali errori, omissioni o imprecisioni nei contenuti, né per danni diretti o indiretti derivanti dall\'utilizzo delle informazioni presenti.',
        note_links_label:'Link a siti terzi', note_links_body:'Questo sito può contenere collegamenti a siti web di terzi (es. Unsplash, social network). SportForYou Srls non esercita alcun controllo su tali siti e non si assume responsabilità per i loro contenuti o per le rispettive informative sulla privacy.',
        note_law_label:'Legge applicabile', note_law_body:'Il presente sito è regolato dalla legge italiana. Per qualsiasi controversia sarà competente in via esclusiva il Foro del luogo della sede legale della società.',
        note_odr_label:'Risoluzione delle controversie online', note_odr_body:'La Commissione Europea mette a disposizione dei consumatori una piattaforma per la risoluzione online delle controversie (ODR), raggiungibile all\'indirizzo <a href="https://ec.europa.eu/consumers/odr" target="_blank" style="color:var(--cyan);">ec.europa.eu/consumers/odr</a>.',
        legal_updated_label:'Ultimo aggiornamento', legal_updated_date:'Gennaio 2026',

        privacy_eyebrow:'Trattamento dati personali', privacy_title:'Privacy Policy',
        priv_owner_label:'Titolare del trattamento', priv_owner_body:'SportForYou Srls<br>Via Enrico Fermi 5, 39100 Bolzano (BZ)<br>P.IVA: IT03275830218<br>E-mail: <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a><br>PEC: <a href="mailto:sportforyou@arubapec.it" style="color:var(--cyan);">sportforyou@arubapec.it</a>',
        priv_data_label:'Dati raccolti', priv_data_body:'Tramite il modulo di contatto vengono raccolti: nome, indirizzo e-mail, numero di telefono (facoltativo) e messaggio. Il server di hosting raccoglie inoltre automaticamente alcuni dati tecnici di navigazione (es. indirizzo IP, tipo di browser, pagine visitate) necessari al funzionamento del sito.',
        priv_purpose_label:'Finalità del trattamento', priv_purpose_body:'I dati raccolti tramite il modulo di contatto sono utilizzati esclusivamente per rispondere alle richieste di informazioni o di demo e per la gestione del rapporto precontrattuale. I dati tecnici di navigazione sono trattati per garantire il corretto funzionamento e la sicurezza del sito.',
        priv_legal_label:'Base giuridica', priv_legal_body:'Il trattamento si basa sul consenso dell\'interessato (Art. 6, par. 1, lett. a GDPR) espresso mediante l\'invio del modulo di contatto, e sul legittimo interesse del Titolare (Art. 6, par. 1, lett. f GDPR) per i dati tecnici necessari al funzionamento del sito.',
        priv_mode_label:'Modalità del trattamento', priv_mode_body:'I dati sono trattati con strumenti informatici, con l\'adozione di misure di sicurezza tecniche e organizzative adeguate a prevenirne la perdita, l\'uso illecito o non corretto e l\'accesso non autorizzato. L\'accesso ai dati è limitato al personale autorizzato.',
        priv_recipients_label:'Destinatari dei dati', priv_recipients_body:'I dati possono essere comunicati a fornitori terzi che operano come responsabili del trattamento (es. servizio di hosting, provider e-mail), esclusivamente per le finalità sopra indicate. I dati non vengono in alcun caso venduti o ceduti a terzi per finalità di marketing.',
        priv_transfer_label:'Trasferimento dei dati extra-UE', priv_transfer_body:'Alcuni servizi tecnici utilizzati dal sito (es. hosting su GitHub Pages, font di Google) sono forniti da aziende con sede negli Stati Uniti e possono comportare un trasferimento di dati al di fuori dello Spazio Economico Europeo. Tali trasferimenti avvengono sulla base di clausole contrattuali standard o di altre garanzie adeguate previste dal GDPR.',
        priv_retention_label:'Conservazione dei dati', priv_retention_body:'I dati personali vengono conservati per il tempo strettamente necessario a evadere la richiesta e comunque non oltre 12 mesi dalla raccolta, salvo obblighi di legge che impongano una conservazione più lunga.',
        priv_automated_label:'Processi decisionali automatizzati', priv_automated_body:'Il Titolare non effettua alcun trattamento basato su processi decisionali automatizzati, inclusa la profilazione, ai sensi dell\'Art. 22 GDPR.',
        priv_voluntary_label:'Facoltatività del conferimento', priv_voluntary_body:'Il conferimento dei dati tramite il modulo di contatto è facoltativo ma necessario per poter rispondere alla richiesta. Il mancato conferimento comporta l\'impossibilità di evadere la richiesta stessa.',
        priv_rights_label:'Diritti dell\'interessato', priv_rights_body:'In conformità al GDPR (Reg. UE 2016/679) hai diritto di accesso, rettifica, cancellazione, limitazione del trattamento, portabilità dei dati e opposizione al trattamento, oltre al diritto di revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento basato sul consenso prima della revoca. Per esercitare tali diritti scrivi a <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a>.',
        priv_complaint_label:'Diritto di reclamo', priv_complaint_body:'Se ritieni che il trattamento dei tuoi dati violi la normativa vigente, hai diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" style="color:var(--cyan);">www.garanteprivacy.it</a>), autorità di controllo competente in Italia, oppure all\'autorità di controllo del tuo Stato membro di residenza.',
        priv_cookie_label:'Cookie', priv_cookie_body:'Questo sito non utilizza cookie di profilazione. Per maggiori dettagli sui cookie tecnici e di terze parti utilizzati consulta la <a href="#" onclick="document.getElementById(\'modal-privacy\').style.display=\'none\';document.getElementById(\'modal-cookie\').style.display=\'flex\';return false;" style="color:var(--cyan);">Cookie Policy</a>.',

        cookie_eyebrow:'Informativa Cookie', cookie_title:'Cookie Policy',
        cookie_what_label:'Cosa sono i cookie', cookie_what_body:'I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell\'utente durante la navigazione. Vengono utilizzati per far funzionare il sito in modo efficiente e per fornire informazioni ai proprietari del sito.',
        cookie_technical_label:'Cookie tecnici', cookie_technical_body:'Questo sito utilizza esclusivamente cookie tecnici strettamente necessari al funzionamento della pagina (es. gestione della sessione). Non vengono utilizzati cookie di profilazione o tracciamento di terze parti.',
        cookie_thirdparty_label:'Servizi di terze parti', cookie_thirdparty_body:'Questo sito carica caratteri tipografici da Google Fonts (fonts.googleapis.com) e librerie tecniche da Tailwind CDN (cdn.tailwindcss.com). Questi servizi, forniti da aziende con sede negli Stati Uniti, possono ricevere l\'indirizzo IP del dispositivo al momento del caricamento della pagina. Alcune immagini di sfondo sono inoltre caricate da server Unsplash (unsplash.com). Per maggiori informazioni consulta le rispettive informative: <a href="https://policies.google.com/privacy" target="_blank" style="color:var(--cyan);">Google</a>, <a href="https://unsplash.com/privacy" target="_blank" style="color:var(--cyan);">Unsplash</a>.',
        cookie_manage_label:'Gestione dei cookie', cookie_manage_body:'Puoi gestire o disabilitare i cookie attraverso le impostazioni del tuo browser. La disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.',
        cookie_contact_label:'Contatto', cookie_contact_body:'Per qualsiasi informazione sui cookie utilizzati da questo sito scrivi a <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a>.',
        footer_privacy:'Privacy', footer_cookie:'Cookie Policy',

        fb_hero_label:'Nuovo prodotto in sviluppo', fb_hero_title:'Il futuro del<br>soccorso antincendio.', fb_hero_sub:'Il prossimo mezzo Aqua Rescue Systems: un\'unità di soccorso antincendio autonoma, pensata per intervenire su incendi in porti, banchine e impianti offshore senza esporre i soccorritori al pericolo.',
        fb_intro_label:'Innovazione', fb_intro_title:'Zero equipaggio<br>in prima linea.', fb_intro_p1:'Gli incendi in ambito portuale e offshore richiedono un intervento rapido e potente, spesso in condizioni estreme. Il nuovo mezzo antincendio di Aqua Rescue Systems nasce per raggiungere il fuoco in autonomia, senza mettere a rischio la vita di chi interviene.', fb_intro_p2:'Due monitor ad alta portata, navigazione autonoma con anticollisione e stabilizzazione giroscopica per operare anche con mare mosso: un supporto pensato per guardia costiera, vigili del fuoco portuali e gestori di impianti industriali.',
        fb_gallery_label:'In azione', fb_gallery_title:'Progettato per<br>l\'emergenza reale.',
        fb_specs_label:'Dati tecnici indicativi', fb_specs_title:'Potenza pensata<br>per contenere il fuoco.',
        fb_spec1_title:'Portata di pompaggio', fb_spec1_desc:'Pompa principale da 3.000 gpm (circa 11.350 l/min) per un getto d\'acqua ad alta pressione e volume.',
        fb_spec2_title:'Doppio monitor', fb_spec2_desc:'Due monitor da 2.500 gpm a 10 bar di pressione, orientabili per colpire il fuoco da più angolazioni.',
        fb_spec3_title:'Gittata', fb_spec3_desc:'Getto d\'acqua efficace oltre 80 metri di distanza, per operare in sicurezza lontano dalle fiamme.',
        fb_spec4_title:'Velocità massima', fb_spec4_desc:'Oltre 35 nodi (circa 65 km/h) grazie a motore diesel Cummins e idrogetto Doen, per raggiungere l\'incendio in pochi minuti.',
        fb_spec5_title:'Stabilizzazione', fb_spec5_desc:'Stabilizzazione giroscopica che consente operazioni sicure fino a stato del mare 4.',
        fb_spec6_title:'Navigazione autonoma', fb_spec6_desc:'Sistema di navigazione completamente autonomo con anticollisione e mantenimento della posizione tramite thruster.',
        fb_cta_title:'Vuoi essere aggiornato<br>sul lancio?', fb_cta_desc:'Lasciaci i tuoi contatti: sarai tra i primi a sapere quando il nuovo mezzo antincendio sarà disponibile.', fb_cta_btn:'Contattaci per maggiori informazioni'
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
        spec_immediate_on:'Sofortiges Einschalten', spec_standby:'Magnetischer Standby-Modus', spec_onboard_control:'Steuerung am Gerät', spec_water_activation:'Aktivierung im Wasser',
        spec_oled:'OLED-Display',
        spec_autoright:'Automatisches Selbstaufrichten', spec_autoright_note:'Richtet sich automatisch auf wenn gekentert',
        spec_gnss:'Dual GNSS', spec_gnss_note:'Doppelte GPS-Ortung für höhere Präzision',
        spec_autoreturn:'Auto Return', spec_autoreturn_note:'Kehrt automatisch zum Ausgangspunkt zurück',
        spec_camera:'Bordkamera', spec_monitor:'Fernmonitor',
        spec_charge_stand:'Ladestation', spec_speaker_light:'Suchscheinwerfer & Lautsprecher', spec_optional:'Optional',
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
        footer_tagline:'Autonome Wasserrettungsroboter, entwickelt um Leben zu retten, ohne Retter zu gefährden.', footer_quicklinks:'Quick Links', footer_madeby:'· made by', footer_madeby_top:'made by', swipe_hint:'Wische für die weiteren Schritte',
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
        ct_hero_label:'Kontakt', ct_hero_title:'Kontaktiere uns', ct_hero_sub:'Fordere eine kostenlose Demo des Dolphin an und erlebe, wie er im Einsatz funktioniert.', nav_cta_short:'Kontakt',
        te_deep_label:'Bordsysteme', te_deep_title:'Acht Systeme,<br>ein Ziel.',
        te_rd_label:'Forschung & Entwicklung', te_rd_title:'Gebaut mit denen,<br>die das Wasser wirklich kennen.',
        te_rd_p1:'Der Dolphin 3 entsteht aus der Zusammenarbeit zwischen Aqua Rescue Systems und spezialisierten technischen Partnern wie WRGB und HL Schiffstechnik, mit direkter Erfahrung in Schiffstechnik und maritimen Systemen.',
        te_rd_p2:'Jede Produktiteration wird unter realen Einsatzbedingungen getestet, nicht nur im Labor, um sicherzustellen, dass die angegebenen Leistungswerte — Geschwindigkeit, Akkulaufzeit, Zugkraft — auch im Feld zuverlässig bleiben.',
        te_safety_label:'Sicherheit & Zertifizierungen', te_safety_title:'Zuverlässig, wenn es<br>wirklich darauf ankommt.',
        te_safety_p1:'Die Schutzart IP67 gewährleistet Beständigkeit gegen Staub und zeitweiliges Untertauchen, während das Selbstaufrichtungssystem den Roboter auch bei rauer See innerhalb weniger Sekunden automatisch wieder in die richtige Lage bringt.',
        te_safety_p2:'Alle elektronischen Systeme sind für den zuverlässigen Betrieb in maritimen Umgebungen konzipiert, mit Korrosionsschutz gegen Salzwasser und Komponenten, die für intensiven und wiederholten Einsatz über die Zeit ausgelegt sind.',
        te_cta_title:'Erlebe den Dolphin 3<br>live.', te_cta_desc:'Fordere eine Demo an und sieh die Technologie in Aktion.',
        note_eyebrow:'Rechtliche Hinweise', note_title:'Impressum',
        note_owner_label:'Websitebetreiber', note_owner_body:'SportForYou Srls<br>Via Enrico Fermi 5, 39100 Bozen (BZ), Italien<br>USt-IdNr.: IT03275830218 · Steuernummer: 03275830218<br>Handelsregisternummer (REA): BZ-246529',
        note_contact_label:'Kontakt', note_contact_body:'E-Mail: <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a><br>Zertifizierte E-Mail (PEC): <a href="mailto:sportforyou@arubapec.it" style="color:var(--cyan);">sportforyou@arubapec.it</a><br>Mobil: +39 335 285676',
        note_ip_label:'Geistiges Eigentum', note_ip_body:'Alle Inhalte dieser Website — Texte, Bilder, Logos, Grafiken — sind ausschließlliches Eigentum von SportForYou Srls oder der jeweiligen Rechteinhaber und durch die geltenden Urheberrechtsbestimmungen geschützt. Die Vervielfältigung, auch auszugsweise, ist ohne schriftliche Genehmigung untersagt.',
        note_liability_label:'Haftungsbeschränkung', note_liability_body:'Die auf dieser Website enthaltenen Informationen dienen ausschließlich der allgemeinen Information. SportForYou Srls übernimmt keine Haftung für etwaige Fehler, Auslassungen oder Ungenauigkeiten der Inhalte sowie für direkte oder indirekte Schäden, die sich aus der Nutzung der bereitgestellten Informationen ergeben.',
        note_links_label:'Links zu Drittanbieter-Websites', note_links_body:'Diese Website kann Links zu Websites Dritter enthalten (z. B. Unsplash, soziale Netzwerke). SportForYou Srls übt keine Kontrolle über diese Websites aus und übernimmt keine Verantwortung für deren Inhalte oder die jeweiligen Datenschutzerklärungen.',
        note_law_label:'Anwendbares Recht', note_law_body:'Diese Website unterliegt italienischem Recht. Für sämtliche Streitigkeiten ist ausschließlich das Gericht am Sitz des Unternehmens zuständig.',
        note_odr_label:'Online-Streitbeilegung', note_odr_body:'Die Europäische Kommission stellt Verbrauchern eine Plattform zur Online-Streitbeilegung (OS) zur Verfügung, erreichbar unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" style="color:var(--cyan);">ec.europa.eu/consumers/odr</a>.',
        legal_updated_label:'Letzte Aktualisierung', legal_updated_date:'Januar 2026',

        privacy_eyebrow:'Verarbeitung personenbezogener Daten', privacy_title:'Datenschutzerklärung',
        priv_owner_label:'Verantwortlicher für die Datenverarbeitung', priv_owner_body:'SportForYou Srls<br>Via Enrico Fermi 5, 39100 Bozen (BZ)<br>USt-IdNr.: IT03275830218<br>E-Mail: <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a><br>Zertifizierte E-Mail (PEC): <a href="mailto:sportforyou@arubapec.it" style="color:var(--cyan);">sportforyou@arubapec.it</a>',
        priv_data_label:'Erhobene Daten', priv_data_body:'Über das Kontaktformular werden folgende Daten erhoben: Name, E-Mail-Adresse, Telefonnummer (optional) und Nachricht. Der Hosting-Server erfasst außerdem automatisch einige technische Navigationsdaten (z. B. IP-Adresse, Browsertyp, besuchte Seiten), die für den Betrieb der Website erforderlich sind.',
        priv_purpose_label:'Zweck der Verarbeitung', priv_purpose_body:'Die über das Kontaktformular erhobenen Daten werden ausschließlich zur Beantwortung von Informations- oder Demoanfragen sowie zur Abwicklung des vorvertraglichen Verhältnisses verwendet. Die technischen Navigationsdaten werden verarbeitet, um den ordnungsgemäßen Betrieb und die Sicherheit der Website zu gewährleisten.',
        priv_legal_label:'Rechtsgrundlage', priv_legal_body:'Die Verarbeitung stützt sich auf die Einwilligung der betroffenen Person (Art. 6 Abs. 1 lit. a DSGVO), die durch das Absenden des Kontaktformulars erteilt wird, sowie auf das berechtigte Interesse des Verantwortlichen (Art. 6 Abs. 1 lit. f DSGVO) hinsichtlich der für den Betrieb der Website erforderlichen technischen Daten.',
        priv_mode_label:'Art der Verarbeitung', priv_mode_body:'Die Daten werden mit IT-Systemen verarbeitet, wobei angemessene technische und organisatorische Sicherheitsmaßnahmen getroffen werden, um Verlust, unrechtmäßige oder unsachgemäße Nutzung sowie unbefugten Zugriff zu verhindern. Der Zugriff auf die Daten ist auf autorisiertes Personal beschränkt.',
        priv_recipients_label:'Empfänger der Daten', priv_recipients_body:'Die Daten können an Drittanbieter weitergegeben werden, die als Auftragsverarbeiter tätig sind (z. B. Hosting-Dienst, E-Mail-Anbieter), ausschließlich für die oben genannten Zwecke. Die Daten werden in keinem Fall zu Marketingzwecken verkauft oder an Dritte weitergegeben.',
        priv_transfer_label:'Datenübermittlung außerhalb der EU', priv_transfer_body:'Einige von der Website genutzte technische Dienste (z. B. Hosting über GitHub Pages, Google-Schriftarten) werden von Unternehmen mit Sitz in den USA bereitgestellt und können eine Übermittlung von Daten außerhalb des Europäischen Wirtschaftsraums zur Folge haben. Solche Übermittlungen erfolgen auf der Grundlage von Standardvertragsklauseln oder anderer von der DSGVO vorgesehener geeigneter Garantien.',
        priv_retention_label:'Speicherdauer', priv_retention_body:'Die personenbezogenen Daten werden nur so lange gespeichert, wie es zur Bearbeitung der Anfrage unbedingt erforderlich ist, in jedem Fall jedoch nicht länger als 12 Monate ab der Erhebung, sofern nicht gesetzliche Pflichten eine längere Aufbewahrung vorschreiben.',
        priv_automated_label:'Automatisierte Entscheidungsfindung', priv_automated_body:'Der Verantwortliche führt keine Verarbeitung durch, die auf automatisierten Entscheidungsprozessen beruht, einschließlich Profiling, im Sinne von Art. 22 DSGVO.',
        priv_voluntary_label:'Freiwilligkeit der Angabe', priv_voluntary_body:'Die Angabe der Daten über das Kontaktformular ist freiwillig, aber notwendig, um die Anfrage beantworten zu können. Eine Nichtangabe hat zur Folge, dass die Anfrage nicht bearbeitet werden kann.',
        priv_rights_label:'Rechte der betroffenen Person', priv_rights_body:'Gemäß der DSGVO (VO (EU) 2016/679) haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung sowie das Recht, eine erteilte Einwilligung jederzeit zu widerrufen, ohne dass die Rechtmäßigkeit der bis zum Widerruf aufgrund der Einwilligung erfolgten Verarbeitung berührt wird. Um diese Rechte auszuüben, schreiben Sie an <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a>.',
        priv_complaint_label:'Beschwerderecht', priv_complaint_body:'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen geltendes Recht verstößt, haben Sie das Recht, bei der italienischen Datenschutzbehörde (Garante per la Protezione dei Dati Personali, <a href="https://www.garanteprivacy.it" target="_blank" style="color:var(--cyan);">www.garanteprivacy.it</a>) oder bei der Aufsichtsbehörde Ihres Wohnsitzmitgliedstaats Beschwerde einzureichen.',
        priv_cookie_label:'Cookies', priv_cookie_body:'Diese Website verwendet keine Profiling-Cookies. Weitere Einzelheiten zu den verwendeten technischen Cookies und Cookies Dritter finden Sie in der <a href="#" onclick="document.getElementById(\'modal-privacy\').style.display=\'none\';document.getElementById(\'modal-cookie\').style.display=\'flex\';return false;" style="color:var(--cyan);">Cookie-Richtlinie</a>.',

        cookie_eyebrow:'Cookie-Hinweis', cookie_title:'Cookie Policy',
        cookie_what_label:'Was sind Cookies', cookie_what_body:'Cookies sind kleine Textdateien, die Websites während der Nutzung auf dem Gerät des Nutzers speichern. Sie werden verwendet, um die Website effizient funktionieren zu lassen und den Website-Betreibern Informationen bereitzustellen.',
        cookie_technical_label:'Technische Cookies', cookie_technical_body:'Diese Website verwendet ausschließlich technische Cookies, die für den Betrieb der Seite unbedingt erforderlich sind (z. B. Sitzungsverwaltung). Es werden keine Profiling- oder Tracking-Cookies von Dritten verwendet.',
        cookie_thirdparty_label:'Dienste Dritter', cookie_thirdparty_body:'Diese Website lädt Schriftarten von Google Fonts (fonts.googleapis.com) und technische Bibliotheken vom Tailwind CDN (cdn.tailwindcss.com). Diese von Unternehmen mit Sitz in den USA bereitgestellten Dienste können beim Laden der Seite die IP-Adresse des Geräts empfangen. Einige Hintergrundbilder werden zudem von Unsplash-Servern (unsplash.com) geladen. Weitere Informationen finden Sie in den jeweiligen Datenschutzerklärungen: <a href="https://policies.google.com/privacy" target="_blank" style="color:var(--cyan);">Google</a>, <a href="https://unsplash.com/privacy" target="_blank" style="color:var(--cyan);">Unsplash</a>.',
        cookie_manage_label:'Verwaltung der Cookies', cookie_manage_body:'Sie können Cookies über die Einstellungen Ihres Browsers verwalten oder deaktivieren. Die Deaktivierung technischer Cookies kann die ordnungsgemäße Funktion der Website beeinträchtigen.',
        cookie_contact_label:'Kontakt', cookie_contact_body:'Für weitere Informationen zu den auf dieser Website verwendeten Cookies schreiben Sie an <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a>.',
        footer_privacy:'Privacy', footer_cookie:'Cookie Policy',

        fb_hero_label:'Neues Produkt in Entwicklung', fb_hero_title:'Die Zukunft der<br>Brandbekämpfung auf dem Wasser.', fb_hero_sub:'Das nächste Aqua Rescue Systems-Fahrzeug: eine autonome Löscheinheit für Brände in Häfen, an Kais und auf Offshore-Anlagen, ohne Einsatzkräfte in Gefahr zu bringen.',
        fb_intro_label:'Innovation', fb_intro_title:'Keine Besatzung<br>in der Gefahrenzone.', fb_intro_p1:'Brände in Häfen und Offshore-Anlagen erfordern ein schnelles und kraftvolles Eingreifen, oft unter extremen Bedingungen. Das neue Löschfahrzeug von Aqua Rescue Systems erreicht das Feuer autonom, ohne das Leben der Einsatzkräfte zu gefährden.', fb_intro_p2:'Zwei leistungsstarke Monitore, autonome Navigation mit Kollisionsvermeidung und Kreiselstabilisierung für den Einsatz auch bei bewegter See: konzipiert für Küstenwache, Hafenfeuerwehr und Betreiber industrieller Anlagen.',
        fb_gallery_label:'Im Einsatz', fb_gallery_title:'Entwickelt für den<br>echten Ernstfall.',
        fb_specs_label:'Vorläufige technische Daten', fb_specs_title:'Leistung, die das<br>Feuer eindämmt.',
        fb_spec1_title:'Pumpenleistung', fb_spec1_desc:'Hauptpumpe mit 3.000 gpm (ca. 11.350 l/min) für einen Wasserstrahl mit hohem Druck und Volumen.',
        fb_spec2_title:'Doppel-Monitor', fb_spec2_desc:'Zwei Monitore mit je 2.500 gpm bei 10 bar Druck, schwenkbar für den Angriff aus mehreren Winkeln.',
        fb_spec3_title:'Reichweite', fb_spec3_desc:'Wirksamer Wasserstrahl über 80 Meter Entfernung, für einen sicheren Einsatz abseits der Flammen.',
        fb_spec4_title:'Höchstgeschwindigkeit', fb_spec4_desc:'Über 35 Knoten (ca. 65 km/h) dank Cummins-Dieselmotor und Doen-Wasserstrahlantrieb, um den Brandort in Minuten zu erreichen.',
        fb_spec5_title:'Stabilisierung', fb_spec5_desc:'Kreiselstabilisierung ermöglicht sicheren Betrieb bis Seegang 4.',
        fb_spec6_title:'Autonome Navigation', fb_spec6_desc:'Vollständig autonomes Navigationssystem mit Kollisionsvermeidung und Positionshaltung über Tunnel-Thruster.',
        fb_cta_title:'Möchtest du über den<br>Launch informiert werden?', fb_cta_desc:'Hinterlasse deine Kontaktdaten: Du erfährst als Erster, wenn das neue Löschfahrzeug verfügbar ist.', fb_cta_btn:'Kontaktiere uns für mehr Informationen'
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
        spec_immediate_on:'Immediate ON', spec_standby:'Magnetic Standby Mode', spec_onboard_control:'Onboard Control', spec_water_activation:'Water Activation',
        spec_oled:'OLED Display',
        spec_autoright:'Auto Self-Righting', spec_autoright_note:'Automatically rights itself if overturned',
        spec_gnss:'Dual GNSS', spec_gnss_note:'Dual GPS location for higher precision',
        spec_autoreturn:'Auto Return', spec_autoreturn_note:'Automatically returns to starting point',
        spec_camera:'On-board Camera', spec_monitor:'Remote Monitor',
        spec_charge_stand:'Charging Stand', spec_speaker_light:'Search Light & Loudspeaker', spec_optional:'Optional',
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
        footer_tagline:'Autonomous water rescue robots, built to save lives without putting rescuers at risk.', footer_quicklinks:'Quick Links', footer_madeby:'· made by', footer_madeby_top:'made by', swipe_hint:'Swipe to see the other steps',
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
        ct_hero_label:'Contact', ct_hero_title:'Contact Us', ct_hero_sub:'Request a free demo of the Dolphin and see how it works in the field.', nav_cta_short:'Contact',
        te_deep_label:'Onboard systems', te_deep_title:'Eight systems,<br>one goal.',
        te_rd_label:'Research & development', te_rd_title:'Built with those who<br>really know the water.',
        te_rd_p1:'The Dolphin 3 is the result of collaboration between Aqua Rescue Systems and specialized technical partners such as WRGB and HL Schiffstechnik, with direct experience in naval engineering and marine systems.',
        te_rd_p2:'Every product iteration is tested in real operational conditions, not just in the lab, to make sure the stated performance — speed, battery life, tow capacity — stays reliable in the field.',
        te_safety_label:'Safety & certifications', te_safety_title:'Reliable when it<br>truly matters.',
        te_safety_p1:'The IP67 protection rating guarantees resistance to dust and temporary submersion, while the self-righting system automatically restores the robot to the correct orientation within seconds, even in rough water.',
        te_safety_p2:'All electronic systems are engineered to operate reliably in marine environments, with corrosion protection against salt water and components built for intensive, repeated use over time.',
        te_cta_title:'See the Dolphin 3<br>in action.', te_cta_desc:'Request a demo and see the technology at work.',
        note_eyebrow:'Legal Information', note_title:'Legal Notice',
        note_owner_label:'Website Owner', note_owner_body:'SportForYou Srls<br>Via Enrico Fermi 5, 39100 Bolzano (BZ), Italy<br>VAT No.: IT03275830218 · Tax Code: 03275830218<br>REA: BZ-246529',
        note_contact_label:'Contact', note_contact_body:'E-mail: <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a><br>Certified E-mail (PEC): <a href="mailto:sportforyou@arubapec.it" style="color:var(--cyan);">sportforyou@arubapec.it</a><br>Mobile: +39 335 285676',
        note_ip_label:'Intellectual Property', note_ip_body:'All content on this website — texts, images, logos, graphics — is the exclusive property of SportForYou Srls or the respective rights holders and is protected under applicable copyright law. Reproduction, even partial, without written authorization is prohibited.',
        note_liability_label:'Limitation of Liability', note_liability_body:'The information contained on this website is provided for general informational purposes only. SportForYou Srls assumes no responsibility for any errors, omissions or inaccuracies in the content, nor for direct or indirect damages arising from the use of the information provided.',
        note_links_label:'Links to Third-Party Websites', note_links_body:'This website may contain links to third-party websites (e.g. Unsplash, social networks). SportForYou Srls exercises no control over such websites and assumes no responsibility for their content or respective privacy policies.',
        note_law_label:'Applicable Law', note_law_body:'This website is governed by Italian law. Any disputes shall be subject to the exclusive jurisdiction of the court where the company has its registered office.',
        note_odr_label:'Online Dispute Resolution', note_odr_body:'The European Commission provides consumers with an online dispute resolution (ODR) platform, available at <a href="https://ec.europa.eu/consumers/odr" target="_blank" style="color:var(--cyan);">ec.europa.eu/consumers/odr</a>.',
        legal_updated_label:'Last Updated', legal_updated_date:'January 2026',

        privacy_eyebrow:'Processing of Personal Data', privacy_title:'Privacy Policy',
        priv_owner_label:'Data Controller', priv_owner_body:'SportForYou Srls<br>Via Enrico Fermi 5, 39100 Bolzano (BZ)<br>VAT No.: IT03275830218<br>E-mail: <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a><br>Certified E-mail (PEC): <a href="mailto:sportforyou@arubapec.it" style="color:var(--cyan);">sportforyou@arubapec.it</a>',
        priv_data_label:'Data Collected', priv_data_body:'The contact form collects: name, e-mail address, phone number (optional) and message. The hosting server also automatically collects certain technical browsing data (e.g. IP address, browser type, pages visited) necessary for the website to function.',
        priv_purpose_label:'Purpose of Processing', priv_purpose_body:'Data collected through the contact form is used exclusively to respond to requests for information or demos and to manage the pre-contractual relationship. Technical browsing data is processed to ensure the proper functioning and security of the website.',
        priv_legal_label:'Legal Basis', priv_legal_body:'Processing is based on the consent of the data subject (Art. 6(1)(a) GDPR), expressed by submitting the contact form, and on the legitimate interest of the Controller (Art. 6(1)(f) GDPR) for the technical data necessary for the website to function.',
        priv_mode_label:'Processing Methods', priv_mode_body:'Data is processed using IT systems, with appropriate technical and organizational security measures adopted to prevent loss, unlawful or improper use, and unauthorized access. Access to the data is restricted to authorized personnel.',
        priv_recipients_label:'Data Recipients', priv_recipients_body:'Data may be shared with third-party providers acting as data processors (e.g. hosting service, e-mail provider), exclusively for the purposes stated above. Data is never sold or transferred to third parties for marketing purposes.',
        priv_transfer_label:'Transfer of Data Outside the EU', priv_transfer_body:'Some technical services used by the website (e.g. hosting on GitHub Pages, Google Fonts) are provided by companies based in the United States and may involve the transfer of data outside the European Economic Area. Such transfers take place on the basis of standard contractual clauses or other appropriate safeguards provided for by the GDPR.',
        priv_retention_label:'Data Retention', priv_retention_body:'Personal data is retained for the time strictly necessary to process the request, and in any case for no longer than 12 months from collection, unless legal obligations require a longer retention period.',
        priv_automated_label:'Automated Decision-Making', priv_automated_body:'The Controller does not carry out any processing based on automated decision-making, including profiling, pursuant to Art. 22 GDPR.',
        priv_voluntary_label:'Voluntary Nature of Data Provision', priv_voluntary_body:'Providing data through the contact form is voluntary but necessary in order to respond to the request. Failure to provide the data will make it impossible to process the request.',
        priv_rights_label:'Your Rights', priv_rights_body:'In accordance with the GDPR (EU Regulation 2016/679) you have the right to access, rectify, erase, restrict processing, port your data and object to processing, as well as the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal. To exercise these rights, write to <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a>.',
        priv_complaint_label:'Right to Lodge a Complaint', priv_complaint_body:'If you believe that the processing of your data violates applicable law, you have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali, <a href="https://www.garanteprivacy.it" target="_blank" style="color:var(--cyan);">www.garanteprivacy.it</a>), the competent supervisory authority in Italy, or with the supervisory authority of your member state of residence.',
        priv_cookie_label:'Cookies', priv_cookie_body:'This website does not use profiling cookies. For more details on the technical and third-party cookies used, see the <a href="#" onclick="document.getElementById(\'modal-privacy\').style.display=\'none\';document.getElementById(\'modal-cookie\').style.display=\'flex\';return false;" style="color:var(--cyan);">Cookie Policy</a>.',

        cookie_eyebrow:'Cookie Notice', cookie_title:'Cookie Policy',
        cookie_what_label:'What Are Cookies', cookie_what_body:'Cookies are small text files that websites save on the user\'s device while browsing. They are used to make the website function efficiently and to provide information to the website owners.',
        cookie_technical_label:'Technical Cookies', cookie_technical_body:'This website uses only technical cookies that are strictly necessary for the page to function (e.g. session management). No third-party profiling or tracking cookies are used.',
        cookie_thirdparty_label:'Third-Party Services', cookie_thirdparty_body:'This website loads typefaces from Google Fonts (fonts.googleapis.com) and technical libraries from the Tailwind CDN (cdn.tailwindcss.com). These services, provided by companies based in the United States, may receive the device\'s IP address when the page loads. Some background images are also loaded from Unsplash servers (unsplash.com). For more information see the respective privacy notices: <a href="https://policies.google.com/privacy" target="_blank" style="color:var(--cyan);">Google</a>, <a href="https://unsplash.com/privacy" target="_blank" style="color:var(--cyan);">Unsplash</a>.',
        cookie_manage_label:'Managing Cookies', cookie_manage_body:'You can manage or disable cookies through your browser settings. Disabling technical cookies may compromise the proper functioning of the website.',
        cookie_contact_label:'Contact', cookie_contact_body:'For any information about the cookies used by this website, write to <a href="mailto:info@aquarescuesystems.com" style="color:var(--cyan);">info@aquarescuesystems.com</a>.',
        footer_privacy:'Privacy', footer_cookie:'Cookie Policy',

        fb_hero_label:'New product in development', fb_hero_title:'The future of<br>marine firefighting.', fb_hero_sub:'The next Aqua Rescue Systems vehicle: an autonomous firefighting unit designed to respond to fires at ports, docks and offshore facilities without putting rescuers at risk.',
        fb_intro_label:'Innovation', fb_intro_title:'Zero crew<br>on the front line.', fb_intro_p1:'Fires at ports and offshore facilities demand a fast, powerful response, often under extreme conditions. Aqua Rescue Systems\' new firefighting vehicle is built to reach the fire autonomously, without putting responders\' lives at risk.', fb_intro_p2:'Two high-capacity monitors, autonomous navigation with collision avoidance, and gyro stabilization for operation even in rough seas: built to support coast guards, port fire brigades and industrial facility operators.',
        fb_gallery_label:'In action', fb_gallery_title:'Built for real<br>emergencies.',
        fb_specs_label:'Indicative technical data', fb_specs_title:'Power built to<br>contain the fire.',
        fb_spec1_title:'Pumping capacity', fb_spec1_desc:'3,000 gpm primary pump (approx. 11,350 l/min) for a high-pressure, high-volume water jet.',
        fb_spec2_title:'Twin monitors', fb_spec2_desc:'Two 2,500 gpm monitors at 10-bar pressure, steerable to strike the fire from multiple angles.',
        fb_spec3_title:'Spray range', fb_spec3_desc:'Effective water jet beyond 80 meters, allowing safe operation well away from the flames.',
        fb_spec4_title:'Maximum speed', fb_spec4_desc:'Over 35 knots (approx. 65 km/h) thanks to a Cummins diesel engine and Doen waterjet, reaching the fire in minutes.',
        fb_spec5_title:'Stabilization', fb_spec5_desc:'Gyro stabilization enables safe operation up to Sea State 4.',
        fb_spec6_title:'Autonomous navigation', fb_spec6_desc:'Fully autonomous navigation system with collision avoidance and position-locking via tunnel thrusters.',
        fb_cta_title:'Want to stay updated<br>on the launch?', fb_cta_desc:'Leave your contact details: you\'ll be among the first to know when the new firefighting vehicle becomes available.', fb_cta_btn:'Contact us for more information'
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
    if (isOpen) {
        document.getElementById('nav').classList.remove('nav-hidden');
    }
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

// Frost the nav bar once scrolled past the top, and hide it on scroll-down / reveal on scroll-up
(function () {
    const navEl = document.getElementById('nav');
    const navLinksWrap = document.getElementById('navLinksWrap');
    let lastScrollY = window.scrollY;
    function updateNav() {
        const y = window.scrollY;
        navEl.classList.toggle('scrolled', y > 40);
        if (!navLinksWrap.classList.contains('open')) {
            if (y > lastScrollY && y > 80) {
                navEl.classList.add('nav-hidden');
            } else if (y < lastScrollY) {
                navEl.classList.remove('nav-hidden');
            }
        } else {
            navEl.classList.remove('nav-hidden');
        }
        lastScrollY = y;
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
})();

// Hide the dolphin cursor while scrolling up; it comes back on the next hover
(function () {
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function () {
        const y = window.scrollY;
        if (y < lastScrollY) {
            document.body.classList.add('hide-dolphin-cursor');
        }
        lastScrollY = y;
    }, { passive: true });
    window.addEventListener('mousemove', function () {
        document.body.classList.remove('hide-dolphin-cursor');
    }, { passive: true });
})();
