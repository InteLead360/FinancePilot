// DONNEES CENTRALISEES - FINANCEPILOT 360
// Mise à jour: Mai 2026

let APP_DATA = {
    hypotheses: { prixClientSalesX: 10000, chargesFixesSalesX: 100000, budgetMarketingSalesX: 60000 },
    kpis: { encaissementsTotal: 0, depensesTotal: 0, netTresorerie: 0, budgetSalesX: 250000, subventionSalesX: 200000, caNoraTotal: 0, resteNora: 0, consommationSalesX: 0 },
    
    obligations: [
        { id: 1, obligation: "Bilan 2024 - SalesFlow", entite: "SalesFlow SARL AU", type: "Bilan comptable", statut: "Non déclaré", echeance: "2025-06-30", risque: "critical", horizon: "30j", pieces: "Grand-livre 2024, balance", action: "Mandater expert-comptable", piecesStatus: "Non commencé" },
        { id: 2, obligation: "Bilan 2025 - SalesFlow", entite: "SalesFlow SARL AU", type: "Bilan comptable", statut: "Non déclaré", echeance: "2026-06-30", risque: "critical", horizon: "60j", pieces: "Grand-livre 2025, balance", action: "Préparer dossier 2025", piecesStatus: "Non commencé" },
        { id: 3, obligation: "Bilan 2024 - Intelead", entite: "Intelead SARL", type: "Bilan comptable", statut: "Non déclaré", echeance: "2025-06-30", risque: "critical", horizon: "30j", pieces: "Factures fournisseurs, paie", action: "Rassembler justificatifs", piecesStatus: "Non commencé" },
        { id: 4, obligation: "TVA 2024-2025", entite: "SalesFlow / Intelead", type: "Déclaration fiscale", statut: "Inconnu", echeance: "2025-03-31", risque: "critical", horizon: "30j", pieces: "Tableaux DGI", action: "Consulter DGI", piecesStatus: "Non commencé" },
        { id: 5, obligation: "CNSS 2024-2025", entite: "Intelead SARL", type: "Cotisations sociales", statut: "Retard historique", echeance: "2025-02-28", risque: "critical", horizon: "30j", pieces: "État CNSS/Damancom", action: "Plan de paiement", piecesStatus: "Non commencé" },
        { id: 6, obligation: "IS / Acomptes", entite: "SalesFlow / Intelead", type: "Impôt société", statut: "Inconnu", echeance: "2025-04-30", risque: "high", horizon: "60j", pieces: "Déclarations IS", action: "Calculer base imposable", piecesStatus: "Non commencé" },
        { id: 7, obligation: "IR Salaires", entite: "SalesFlow / Intelead", type: "IR / Social", statut: "Inconnu", echeance: "2025-05-31", risque: "medium", horizon: "60j", pieces: "Fiches de paie", action: "Établir liste salariés", piecesStatus: "Non commencé" },
        { id: 8, obligation: "Modèle J / Attestation", entite: "SalesFlow / Intelead", type: "Documents légaux", statut: "À collecter", echeance: "2025-09-30", risque: "medium", horizon: "90j", pieces: "Modèle J RC", action: "Commander", piecesStatus: "Non commencé" }
    ],

    salesxBudget: [
        { id: 1, categorie: "Développement", poste: "Plateforme front-end + backend", budget: 40000, realise: 12000, fiabilite: "Estimé", justificatif: "", dateDepense: "" },
        { id: 2, categorie: "Développement", poste: "Optimisation scripts", budget: 40000, realise: 35000, fiabilite: "Estimé", justificatif: "", dateDepense: "" },
        { id: 3, categorie: "RH", poste: "Ingénieur data science", budget: 50000, realise: 45000, fiabilite: "Estimé", justificatif: "", dateDepense: "" },
        { id: 4, categorie: "RH", poste: "Second ingénieur support", budget: 40000, realise: 15000, fiabilite: "Estimé", justificatif: "", dateDepense: "" },
        { id: 5, categorie: "Marketing", poste: "Campagnes acquisition", budget: 30000, realise: 5000, fiabilite: "Estimé", justificatif: "", dateDepense: "" },
        { id: 6, categorie: "Marketing", poste: "Support commercial", budget: 30000, realise: 3000, fiabilite: "Estimé", justificatif: "", dateDepense: "" },
        { id: 7, categorie: "Opérationnel", poste: "Hébergement & SaaS & outils", budget: 20000, realise: 8500, fiabilite: "Estimé", justificatif: "", dateDepense: "" }
    ],

    noraFactures: [
        { id: 1, ref: "NORA-B2B-001", client: "AVA***", secteur: "Événementiel", caHt: 16000, encaisse: 16000, statut: "payé", date: "2026-03-03", type: "Formation IA sur mesure", nbSessions: 2 },
        { id: 2, ref: "NORA-B2B-002", client: "AVA***", secteur: "Événementiel", caHt: 16000, encaisse: 0, statut: "impayé", date: "2026-03-06", type: "Formation IA sur mesure", nbSessions: 2 },
        { id: 3, ref: "NORA-B2B-003", client: "COL***", secteur: "Enseignement", caHt: 7200, encaisse: 7200, statut: "payé", date: "2025-04-19", type: "Formation IA enseignants", nbSessions: 2 },
        { id: 4, ref: "NORA-B2B-004", client: "HEM***", secteur: "Enseignement", caHt: 7200, encaisse: 7200, statut: "payé", date: "2025-04-12", type: "Formation IA enseignants", nbSessions: 2 },
        { id: 5, ref: "NORA-B2B-005", client: "ICO***", secteur: "Digital", caHt: 6000, encaisse: 6000, statut: "payé", date: "2025-12-08", type: "Formation IA Tanger", nbSessions: 1 },
        { id: 6, ref: "NORA-B2B-006", client: "AIK***", secteur: "Conseil", caHt: 6000, encaisse: 0, statut: "impayé", date: "2026-03-18", type: "Formation IA personnalisée", nbSessions: 4 },
        { id: 7, ref: "NORA-B2B-007", client: "TIM***", secteur: "Télécom", caHt: 4400, encaisse: 4400, statut: "payé", date: "2025-05-22", type: "Formation IA enseignants", nbSessions: 2 },
        { id: 8, ref: "NORA-B2B-008", client: "TIM***", secteur: "Télécom", caHt: 4400, encaisse: 4400, statut: "payé", date: "2025-07-17", type: "Formation IA enseignants", nbSessions: 2 },
        { id: 9, ref: "NORA-B2B-009", client: "TIM***", secteur: "Télécom", caHt: 11000, encaisse: 11000, statut: "payé", date: "2025-11-10", type: "Formation IA vente/marketing", nbSessions: 4 },
        { id: 10, ref: "NORA-B2B-010", client: "TIM***", secteur: "Télécom", caHt: 5500, encaisse: 0, statut: "impayé", date: "2026-04-27", type: "Formation IA équipe SI", nbSessions: 2 },
        { id: 11, ref: "NORA-B2B-011", client: "TIM***", secteur: "Télécom", caHt: 4950, encaisse: 0, statut: "impayé", date: "2026-04-06", type: "Formation IA Smart Manager", nbSessions: 2 },
        { id: 12, ref: "NORA-B2B-012", client: "TIM***", secteur: "Télécom", caHt: 5500, encaisse: 5500, statut: "payé", date: "2025-09-15", type: "Formation IA Marketing", nbSessions: 2 },
        { id: 13, ref: "NORA-B2B-013", client: "TIM***", secteur: "Télécom", caHt: 11000, encaisse: 0, statut: "impayé", date: "2026-01-12", type: "Formation IA commerciale", nbSessions: 4 },
        { id: 14, ref: "NORA-B2B-014", client: "TIM***", secteur: "Télécom", caHt: 5500, encaisse: 5500, statut: "payé", date: "2026-02-05", type: "Formation IA vente marketing", nbSessions: 2 },
        { id: 15, ref: "NORA-B2B-015", client: "TIM***", secteur: "Télécom", caHt: 11000, encaisse: 11000, statut: "payé", date: "2025-09-25", type: "Formation IA Marketing", nbSessions: 4 },
        { id: 16, ref: "NORA-B2B-016", client: "GRO***", secteur: "Formation", caHt: 3500, encaisse: 3500, statut: "payé", date: "2025-06-20", type: "Formation IA", nbSessions: 1 },
        { id: 17, ref: "NORA-B2B-017", client: "MYE***", secteur: "Entrepreneuriat", caHt: 5000, encaisse: 4583, statut: "partiel", date: "2025-06-14", type: "Formation IA", nbSessions: 2 },
        { id: 18, ref: "NORA-B2B-018", client: "TEA***", secteur: "Conseil", caHt: 8000, encaisse: 8000, statut: "payé", date: "2025-07-10", type: "Formation IA institution", nbSessions: 2 },
        { id: 19, ref: "NORA-B2B-019", client: "TEA***", secteur: "Conseil", caHt: 2000, encaisse: 0, statut: "impayé", date: "2025-12-04", type: "Formation IA Institut Français", nbSessions: 0.5 },
        { id: 20, ref: "NORA-B2B-020", client: "TEA***", secteur: "Conseil", caHt: 6000, encaisse: 6000, statut: "payé", date: "2025-11-04", type: "Audit + atelier IA", nbSessions: 1.5 },
        { id: 21, ref: "NORA-B2B-021", client: "PHI***", secteur: "Pharma", caHt: 7500, encaisse: 7500, statut: "payé", date: "2025-03-17", type: "Formation IA", nbSessions: 2 }
    ],

    noraParticipants: {},
    noraCoutsHistorique: [],

    tresorerieMensuelle: [
        { mois: "Janv 2024", encaissements: 101098, depenses: 80028 }, { mois: "Févr 2024", encaissements: 59914, depenses: 52653 },
        { mois: "Mars 2024", encaissements: 47300, depenses: 82377 }, { mois: "Avr 2024", encaissements: 166746, depenses: 115051 },
        { mois: "Mai 2024", encaissements: 161681, depenses: 152361 }, { mois: "Juin 2024", encaissements: 154491, depenses: 176882 },
        { mois: "Juil 2024", encaissements: 96738, depenses: 94977 }, { mois: "Août 2024", encaissements: 42352, depenses: 82806 },
        { mois: "Sep 2024", encaissements: 119662, depenses: 94622 }, { mois: "Oct 2024", encaissements: 171240, depenses: 172676 },
        { mois: "Nov 2024", encaissements: 87924, depenses: 99203 }, { mois: "Déc 2024", encaissements: 133184, depenses: 115230 },
        { mois: "Janv 2025", encaissements: 80882, depenses: 100682 }, { mois: "Févr 2025", encaissements: 87505, depenses: 87733 },
        { mois: "Mars 2025", encaissements: 68846, depenses: 77531 }, { mois: "Avr 2025", encaissements: 104825, depenses: 102844 },
        { mois: "Mai 2025", encaissements: 124799, depenses: 107618 }, { mois: "Juin 2025", encaissements: 63653, depenses: 71222 },
        { mois: "Juil 2025", encaissements: 20576, depenses: 30705 }, { mois: "Août 2025", encaissements: 57758, depenses: 57778 },
        { mois: "Sep 2025", encaissements: 37529, depenses: 37303 }, { mois: "Oct 2025", encaissements: 67217, depenses: 67380 },
        { mois: "Nov 2025", encaissements: 66169, depenses: 58394 }, { mois: "Déc 2025", encaissements: 36308, depenses: 29513 }
    ],

    depensesCategories: [
        { categorie: "Autres dépenses", montant: 1329585 }, { categorie: "RH - Salaires", montant: 383074 },
        { categorie: "Prestataires ext.", montant: 189333 }, { categorie: "Logiciels SaaS", montant: 69276 },
        { categorie: "Retraits espèces", montant: 65000 }, { categorie: "Loyer", montant: 61000 },
        { categorie: "Téléphonie/VOIP", montant: 35961 }, { categorie: "Frais bancaires", montant: 12157 }
    ],

    topClients: [
        { client: "ALTH", montant2024: 165600, montant2025: 187953, total: 353553 },
        { client: "KUEH", montant2024: 156780, montant2025: 174840, total: 331620 },
        { client: "OVIE", montant2024: 214362, montant2025: 9914, total: 224276 },
        { client: "GREE", montant2024: 115099, montant2025: 12532, total: 127631 },
        { client: "NOUV", montant2024: 107490, montant2025: 0, total: 107490 },
        { client: "BIDA", montant2024: 62257, montant2025: 34240, total: 96497 },
        { client: "ONEL", montant2024: 30815, montant2025: 58820, total: 89635 },
        { client: "MARG", montant2024: 59640, montant2025: 29812, total: 89452 }
    ]
};

function updateKPIs() {
    const encTotal = APP_DATA.tresorerieMensuelle.reduce((s, i) => s + i.encaissements, 0);
    const depTotal = APP_DATA.tresorerieMensuelle.reduce((s, i) => s + i.depenses, 0);
    APP_DATA.kpis.encaissementsTotal = encTotal;
    APP_DATA.kpis.depensesTotal = depTotal;
    APP_DATA.kpis.netTresorerie = encTotal - depTotal;
    const totalBudget = APP_DATA.salesxBudget.reduce((s, i) => s + i.budget, 0);
    const totalRealise = APP_DATA.salesxBudget.reduce((s, i) => s + i.realise, 0);
    APP_DATA.kpis.budgetSalesX = totalBudget;
    APP_DATA.kpis.consommationSalesX = (totalRealise / totalBudget * 100).toFixed(1);
    const caTotal = APP_DATA.noraFactures.reduce((s, i) => s + i.caHt, 0);
    const encaisseTotal = APP_DATA.noraFactures.reduce((s, i) => s + i.encaisse, 0);
    APP_DATA.kpis.caNoraTotal = caTotal;
    APP_DATA.kpis.resteNora = caTotal - encaisseTotal;
}

const savedParticipants = localStorage.getItem('noraParticipants');
if (savedParticipants) APP_DATA.noraParticipants = JSON.parse(savedParticipants);
const savedCouts = localStorage.getItem('noraCoutsHistorique');
if (savedCouts) APP_DATA.noraCoutsHistorique = JSON.parse(savedCouts);

updateKPIs();