    (() => {
      'use strict';

      /* ══════════════════════════════════════════
         TRANSLATIONS
      ══════════════════════════════════════════ */
      const T = {
        fr: {
          nav_badge: 'Gratuit · Sans compte · 100% local',
          issuer_name_placeholder: 'Raison sociale',
          btn_download: 'Télécharger PDF',
          btn_download_full: 'Télécharger ma facture (PDF)', btn_share: 'Partager',
          toast_share_copied: '✓ Lien copié dans le presse-papier !', toast_share_too_long: '⚠️ Facture trop volumineuse pour un lien. Exportez en fichier.',
          s1_title: 'Vos informations', s1_sub: 'Émetteur · Sauvegardé localement',
          s2_title: 'Informations client', s2_sub: 'Non sauvegardé · Confidentialité',
          s3_title: 'Détails de la facture', s3_sub: 'Numéro, dates, type',
          s4_title: 'Lignes de prestation', s4_sub: 'ligne(s) · ',
          s5_title: 'TVA', s5_sub: '& Options',
          saved: '✓ Sauvegardé',
          e_name: 'Nom complet / Raison sociale *', e_address: 'Adresse complète *', e_email: 'Email *', e_web: 'Site web / Téléphone (optionnel)',
          c_name: "Nom de l'entreprise / Client *", c_email: 'Email client (optionnel)',
          c_billing: 'Adresse de facturation *', c_delivery_toggle: 'Adresse de livraison différente ?', c_delivery: 'Adresse de livraison',
          inv_number: 'N° de facture *', inv_type: 'Type de prestation *', inv_date: "Date d'émission *", inv_due: "Date d'échéance *",
          inv_ref: 'Objet / Référence (optionnel)', inv_payment: 'Conditions de paiement (optionnel)', inv_note: 'Note / Mentions complémentaires (optionnel)',
          tva_franchise_title: 'Franchise en base de TVA', tva_franchise_sub: 'Auto-entrepreneur / Micro-entreprise · Facture HT uniquement',
          tva_rate_label: 'Taux de TVA', add_line: 'Ajouter une ligne',
          col_desc: 'Prestation', col_qty: 'Qté', col_pu: 'P.U.', col_unit: 'Unité', col_discount: 'Remise', col_amount: 'Montant',
          unit_h: 'heure', unit_j: 'jour', unit_forfait: 'forfait', unit_u: 'unité', unit_km: 'km', unit_mois: 'mois',
          tva_advanced_toggle: 'TVA par ligne',
          local_storage: 'Stocké dans votre navigateur uniquement', clear: 'Effacer',
          siret_hint: '14 chiffres · sur votre avis INSEE', siren_hint: '9 chiffres · obligatoire 2026',
          siren_tooltip: 'Obligatoire depuis 2026 · art. L441-9 Code de Commerce · 9 premiers chiffres du SIRET',
          type_tooltip: 'Mention obligatoire depuis janvier 2026 (Loi de finances)',
          preview_live: 'Prévisualisation en direct', preview_format: 'Format A4 · PDF haute fidélité',
          pdf_white_notice: 'Le PDF sera toujours téléchargé sur fond blanc.',
          step_labels: ['Émetteur', 'Client', 'Facture', 'Lignes', 'TVA'],
          type_services: 'Prestation de services', type_goods: 'Vente de biens', type_mixed: 'Mixte (biens & services)', type_custom: 'Autre (personnalisé)',
          tva_20: '20% — Taux normal', tva_10: '10% — Taux intermédiaire', tva_5: '5,5% — Taux réduit', tva_2: '2,1% — Taux super-réduit',
          type_custom_label: 'Décrivez votre type de prestation *',
          toast_saved: '✓ Informations sauvegardées', toast_cleared: 'Informations émetteur effacées.',
          toast_ok: '✅ "{f}" téléchargé avec succès !', toast_err: '❌ Erreur de génération. Réessayez.', toast_valid: '⚠️ Renseignez votre nom et le numéro de facture.', toast_gen: 'Génération…',
          inv_badge: 'FACTURE', lbl_num: 'N°', lbl_date: 'Émise le', lbl_due: 'Échéance',
          lbl_billed: 'Facturé à', lbl_shipped: 'Livré à', lbl_ref: 'Objet · ',
          lbl_subtotal: 'Sous-total HT', lbl_total_ht: 'TOTAL HT', lbl_total_ttc: 'TOTAL TTC',
          lbl_advanced: 'Options avancées', lbl_delete_line: 'Supprimer la ligne', lbl_duplicate_line: 'Dupliquer la ligne',
          color_accent_label: 'Couleur du document', font_label: 'Police du document', template_label: 'Modèle de facture',
          lbl_payment: 'Modalités de paiement · ', lbl_siret: 'SIRET :', lbl_siren: 'SIREN :',
          th_desc: 'Description', th_qty: 'Qté', th_pu: 'P.U. HT', th_amt: 'Montant HT',
          empty_lines: 'Aucune prestation ajoutée…',
          tva_art: 'TVA non applicable, art. 293 B du CGI',
          legal_penalties: "Tout retard de paiement entraîne l'application de pénalités de retard au taux de 3 fois le taux légal en vigueur, ainsi qu'une indemnité forfaitaire de recouvrement de 40 € (art. L441-10 du Code de commerce).",
          inv_payment_default: 'Virement bancaire — IBAN : FR76 XXXX XXXX XXXX',
          tax_custom: 'Taux personnalisé (%)',
          tax_custom_rate_label: 'Taux de taxe personnalisé (%)',
          logo_label: 'Logo émetteur (optionnel)', logo_hint: 'Cliquez pour ajouter votre logo…', logo_remove: 'Supprimer',
          toggle_doctype: 'Type de document', doc_invoice: 'Facture', doc_quote: 'Devis', doc_credit: 'Avoir', doc_proforma: 'Proforma',
          quote_badge: 'DEVIS', credit_badge: 'AVOIR', proforma_badge: 'PROFORMA', quote_validity: 'Devis valable {n} jours à compter de la date d\'émission.',
          credit_mention: 'Cet avoir représente un crédit à déduire de factures ultérieures.',
          proforma_mention: 'Cette facture proforma n\'a pas de valeur contractuelle. Elle est fournie à titre informatif.',
          wm_label: 'Filigrane', wm_none: 'Aucun', wm_draft: 'BROUILLON', wm_paid: 'PAYÉ',
          fo_export: '.iloveinvoice', fo_import: '.iloveinvoice',
          fo_clients: 'Clients récents', fo_clients_save: 'Sauvegarder client actuel',
          fo_clients_empty: 'Aucun client enregistré',
          fo_tip1: 'Exporter : sauvegarde la facture en cours (émetteur, client, lignes, TVA, options) dans un fichier .iloveinvoice que vous pouvez rouvrir plus tard ou partager.',
          fo_tip2: 'Importer : charge un fichier .iloveinvoice et restaure toutes les données (remplace le formulaire actuel).',
          fo_tip3: 'Clients : enregistre le client actuel dans un carnet d\'adresses local pour le retrouver en un clic.',
          toast_imported: '✓ Fichier importé avec succès.', toast_import_err: '❌ Fichier invalide ou corrompu.',
          toast_client_saved: '✓ Client sauvegardé.', toast_exported: '✓ Fichier .iloveinvoice exporté.',
          history_title: 'Historique des factures', history_export_csv: 'Exporter en CSV', history_empty: 'Aucune facture enregistrée.', history_load: 'Charger', history_duplicate: 'Dupliquer', history_delete: 'Supprimer', history_status_draft: 'Brouillon', history_status_sent: 'Envoyée', history_status_paid: 'Payée', toast_history_saved: '✓ Sauvegardé dans l\'historique.', toast_history_loaded: '✓ Facture chargée.', toast_history_duplicated: '✓ Facture dupliquée.', toast_history_deleted: '✓ Entrée supprimée.',
          deposit_toggle: 'Demander un acompte ?', deposit_mode_percent: '%', deposit_mode_fixed: '€ (fixe)',
          deposit_value: 'Montant/Pourcentage', lbl_deposit_amount: 'Acompte', lbl_balance_due: 'Solde à payer',
          lbl_cont_next: '↓ suite page suivante',
          select_country: 'Pays et Fiscalité', select_lang: 'Langue d\'affichage', search_country: 'Rechercher un pays...', select_country_recent: 'Récents',
          discount_global_label: 'Remise globale',
          discount_global_amount: 'Montant',
          tva_line_global: 'Taux global',
          toast_client_name: '⚠️ Renseignez le nom du client.',
          toast_catalog_saved: '✓ Prestation sauvegardée au catalogue.',
          toast_duplicate_number: '⚠️ Ce numéro de facture existe déjà dans votre historique.',
          lbl_issuer: 'Émetteur',
          lbl_discount: 'Remise',
          custom_fields_label: 'Champs personnalisés', custom_fields_add: '+ Ajouter un champ', custom_field_placeholder_label: 'Intitulé (ex: N° BC)', custom_field_placeholder_value: 'Valeur',
        },
        en: {
          nav_badge: 'Free · No account · 100% local',
          issuer_name_placeholder: 'Company Name',
          btn_download: 'Download PDF', btn_download_full: 'Download my invoice (PDF)', btn_share: 'Share',
          toast_share_copied: '✓ Link copied to clipboard!', toast_share_too_long: '⚠️ Invoice too large for a link. Export as file instead.',
          s1_title: 'Your information', s1_sub: 'Issuer · Saved locally',
          s2_title: 'Client information', s2_sub: 'Not saved · Privacy',
          s3_title: 'Invoice details', s3_sub: 'Number, dates, type',
          s4_title: 'Line items', s4_sub: 'item(s) · ',
          s5_title: 'Tax', s5_sub: '& Options',
          saved: '✓ Saved',
          e_name: 'Full name / Company name *', e_address: 'Full address *', e_email: 'Email *', e_web: 'Website / Phone (optional)',
          c_name: 'Company / Client name *', c_email: 'Client email (optional)',
          c_billing: 'Billing address *', c_delivery_toggle: 'Different delivery address?', c_delivery: 'Delivery address',
          inv_number: 'Invoice number *', inv_type: 'Service type *', inv_date: 'Issue date *', inv_due: 'Due date *',
          inv_ref: 'Subject / Reference (optional)', inv_payment: 'Payment terms (optional)', inv_note: 'Note / Additional mentions (optional)',
          tva_franchise_title: 'Tax exempt (small business)', tva_franchise_sub: 'Micro-enterprise · Invoice without tax',
          tva_rate_label: 'Tax rate', add_line: 'Add a line',
          col_desc: 'Description', col_qty: 'Qty', col_pu: 'Price', col_unit: 'Unit', col_discount: 'Discount', col_amount: 'Amount',
          unit_h: 'hour', unit_j: 'day', unit_forfait: 'flat rate', unit_u: 'unit', unit_km: 'km', unit_mois: 'month',
          tva_advanced_toggle: 'Per-line tax rate',
          local_storage: 'Stored in your browser only', clear: 'Clear',
          siret_hint: '14 digits · French business ID', siren_hint: '9 digits · required 2026',
          siren_tooltip: 'Mandatory since 2026 · art. L441-9 French Commercial Code · first 9 digits of SIRET',
          type_tooltip: 'Mandatory mention since January 2026 (French Finance Act)',
          preview_live: 'Live preview', preview_format: 'A4 format · High-fidelity PDF',
          pdf_white_notice: 'The PDF will always be downloaded on a white background.',
          step_labels: ['Issuer', 'Client', 'Invoice', 'Lines', 'Tax'],
          type_services: 'Service', type_goods: 'Goods', type_mixed: 'Mixed', type_custom: 'Other',
          tva_20: '20% — Standard rate', tva_10: '10% — Intermediate rate', tva_5: '5.5% — Reduced rate', tva_2: '2.1% — Super-reduced rate',
          type_custom_label: 'Describe your service type *',
          toast_saved: '✓ Information saved', toast_cleared: 'Issuer information cleared.',
          toast_ok: '✅ "{f}" downloaded successfully!', toast_err: '❌ Generation error. Please retry.', toast_valid: '⚠️ Please fill in your name and invoice number.', toast_gen: 'Generating…',
          inv_badge: 'INVOICE', lbl_num: 'No.', lbl_date: 'Issued', lbl_due: 'Due',
          lbl_billed: 'Billed to', lbl_shipped: 'Ship to', lbl_ref: 'Subject · ',
          lbl_subtotal: 'Subtotal (excl. tax)', lbl_total_ht: 'TOTAL (excl. tax)', lbl_total_ttc: 'TOTAL (incl. tax)',
          lbl_advanced: 'Advanced options', lbl_delete_line: 'Delete line', lbl_duplicate_line: 'Duplicate line',
          color_accent_label: 'Document colour', font_label: 'Document font', template_label: 'Invoice template',
          lbl_payment: 'Payment terms · ', lbl_siret: 'SIRET:', lbl_siren: 'SIREN:',
          th_desc: 'Description', th_qty: 'Qty', th_pu: 'Unit price', th_amt: 'Amount',
          empty_lines: 'No items added yet…',
          tva_art: 'Tax not applicable',
          legal_penalties: 'Any late payment will result in penalty interest at 3× the legal rate, plus a flat recovery fee of €40 (art. L441-10 French Commercial Code).',
          inv_payment_default: 'Bank transfer — IBAN: FR76 XXXX XXXX XXXX',
          tax_custom: 'Custom rate (%)',
          tax_custom_rate_label: 'Custom tax rate (%)',
          logo_label: 'Issuer logo (optional)', logo_hint: 'Click to add your logo…', logo_remove: 'Remove',
          toggle_doctype: 'Document type', doc_invoice: 'Invoice', doc_quote: 'Quote', doc_credit: 'Credit Note', doc_proforma: 'Proforma',
          quote_badge: 'QUOTE', credit_badge: 'CREDIT NOTE', proforma_badge: 'PROFORMA', quote_validity: 'Quote valid for {n} days from the issue date.',
          credit_mention: 'This credit note represents a credit to be deducted from future invoices.',
          proforma_mention: 'This proforma invoice has no contractual value. It is provided for informational purposes.',
          wm_label: 'Watermark', wm_none: 'None', wm_draft: 'DRAFT', wm_paid: 'PAID',
          fo_export: '.iloveinvoice', fo_import: '.iloveinvoice',
          fo_clients: 'Recent clients', fo_clients_save: 'Save current client',
          fo_clients_empty: 'No saved clients',
          fo_tip1: 'Export: saves the current invoice (issuer, client, lines, tax, options) to a .iloveinvoice file you can reopen later or share.',
          fo_tip2: 'Import: loads a .iloveinvoice file and restores all data (replaces the current form).',
          fo_tip3: 'Clients: saves the current client to a local address book for one-click reuse.',
          toast_imported: '✓ File imported successfully.', toast_import_err: '❌ Invalid or corrupt file.',
          toast_client_saved: '✓ Client saved.', toast_exported: '✓ .iloveinvoice file exported.',
          history_title: 'Invoice History', history_export_csv: 'Export as CSV', history_empty: 'No invoices saved.', history_load: 'Load', history_duplicate: 'Duplicate', history_delete: 'Delete', history_status_draft: 'Draft', history_status_sent: 'Sent', history_status_paid: 'Paid', toast_history_saved: '✓ Saved to history.', toast_history_loaded: '✓ Invoice loaded.', toast_history_duplicated: '✓ Invoice duplicated.', toast_history_deleted: '✓ Entry deleted.',
          deposit_toggle: 'Request a deposit?', deposit_mode_percent: '%', deposit_mode_fixed: 'Fixed amount',
          deposit_value: 'Amount/Percentage', lbl_deposit_amount: 'Deposit', lbl_balance_due: 'Balance due',
          lbl_cont_next: '↓ continued on next page',
          select_country: 'Country & Tax', select_lang: 'Display language', search_country: 'Search for a country...', select_country_recent: 'Recent',
          discount_global_label: 'Global discount',
          discount_global_amount: 'Amount',
          tva_line_global: 'Global rate',
          toast_client_name: '⚠️ Please fill in the client name.',
          toast_catalog_saved: '✓ Item saved to catalog.',
          toast_duplicate_number: '⚠️ This invoice number already exists in your history.',
          lbl_issuer: 'Issuer',
          lbl_discount: 'Discount',
          custom_fields_label: 'Custom fields', custom_fields_add: '+ Add a field', custom_field_placeholder_label: 'Label (e.g. PO No.)', custom_field_placeholder_value: 'Value',
        },
        pt: {
          nav_badge: 'Grátis · Sem conta · 100% local',
          issuer_name_placeholder: 'Razão social',
          btn_download: 'Baixar PDF', btn_download_full: 'Baixar minha fatura (PDF)', btn_share: 'Compartilhar',
          toast_share_copied: '✓ Link copiado para a área de transferência!', toast_share_too_long: '⚠️ Fatura muito grande para um link. Exporte como arquivo.',
          s1_title: 'Suas informações', s1_sub: 'Emissor · Salvo localmente',
          s2_title: 'Informações do cliente', s2_sub: 'Não salvo · Privacidade',
          s3_title: 'Detalhes da fatura', s3_sub: 'Número, datas, tipo',
          s4_title: 'Linhas de serviço', s4_sub: 'linha(s) · ',
          s5_title: 'Imposto', s5_sub: '& Opções',
          saved: '✓ Salvo',
          e_name: 'Nome completo / Razão social *', e_address: 'Endereço completo *', e_email: 'Email *', e_web: 'Site / Telefone (opcional)',
          c_name: 'Nome da empresa / Cliente *', c_email: 'E-mail do cliente (opcional)',
          c_billing: 'Endereço de cobrança *', c_delivery_toggle: 'Endereço de entrega diferente?', c_delivery: 'Endereço de entrega',
          inv_number: 'N° da fatura *', inv_type: 'Tipo de serviço *', inv_date: 'Data de emissão *', inv_due: 'Data de vencimento *',
          inv_ref: 'Objeto / Referência (opcional)', inv_payment: 'Condições de pagamento (opcional)', inv_note: 'Nota / Menções adicionais (opcional)',
          tva_franchise_title: 'Isento de imposto (microempresa)', tva_franchise_sub: 'Microempresa · Fatura sem imposto',
          tva_rate_label: 'Taxa de imposto', add_line: 'Adicionar linha',
          col_desc: 'Item', col_qty: 'Qtd', col_pu: 'P.U.',
          local_storage: 'Armazenado apenas no seu navegador', clear: 'Limpar',
          siret_hint: '14 dígitos · ID fiscal francês', siren_hint: '9 dígitos · obrigatório 2026',
          siren_tooltip: 'Obrigatório desde 2026 · art. L441-9 Código Comercial francês · 9 primeiros dígitos do SIRET',
          type_tooltip: 'Menção obrigatória desde janeiro de 2026 (Lei de Finanças francesa)',
          preview_live: 'Pré-visualização em tempo real', preview_format: 'Formato A4 · PDF alta fidelidade',
          pdf_white_notice: 'O PDF será sempre descarregado com fundo branco.',
          step_labels: ['Emissor', 'Cliente', 'Fatura', 'Linhas', 'Imposto'],
          type_services: 'Prestação de serviços', type_goods: 'Venda de bens', type_mixed: 'Misto (bens & serviços)', type_custom: 'Outro (personalizado)',
          tva_20: '20% — Taxa padrão', tva_10: '10% — Taxa intermediária', tva_5: '5,5% — Taxa reduzida', tva_2: '2,1% — Taxa super-reduzida',
          type_custom_label: 'Descreva seu tipo de serviço *',
          toast_saved: '✓ Informações salvas', toast_cleared: 'Informações do emissor apagadas.',
          toast_ok: '✅ "{f}" baixado com sucesso!', toast_err: '❌ Erro na geração. Tente novamente.', toast_valid: '⚠️ Preencha seu nome e o número da fatura.', toast_gen: 'Gerando…',
          inv_badge: 'FATURA', lbl_num: 'N°', lbl_date: 'Emitida em', lbl_due: 'Vencimento',
          lbl_billed: 'Faturado a', lbl_shipped: 'Entregue a', lbl_ref: 'Objeto · ',
          lbl_subtotal: 'Subtotal s/ imposto', lbl_total_ht: 'TOTAL S/ IMPOSTO', lbl_total_ttc: 'TOTAL C/ IMPOSTO',
          lbl_advanced: 'Opções avançadas', lbl_delete_line: 'Eliminar linha', lbl_duplicate_line: 'Duplicar linha',
          color_accent_label: 'Cor do documento', font_label: 'Fonte do documento', template_label: 'Modelo de fatura',
          lbl_payment: 'Condições de pagamento · ', lbl_siret: 'SIRET:', lbl_siren: 'SIREN:',
          th_desc: 'Descrição', th_qty: 'Qtd', th_pu: 'P.U. s/ imposto', th_amt: 'Valor s/ imposto',
          empty_lines: 'Nenhuma linha adicionada…',
          tva_art: 'Imposto não aplicável',
          legal_penalties: 'Qualquer atraso no pagamento implica juros de mora a 3× a taxa legal vigente, além de uma indenização forfetária de recuperação de 40 € (art. L441-10 do Código Comercial francês).',
          inv_payment_default: 'Transferência bancária — IBAN: FR76 XXXX XXXX XXXX',
          tax_custom: 'Taxa personalizada (%)',
          tax_custom_rate_label: 'Taxa de imposto personalizada (%)',
          logo_label: 'Logotipo do emissor (opcional)', logo_hint: 'Clique para adicionar seu logotipo…', logo_remove: 'Remover',
          toggle_doctype: 'Tipo de documento', doc_invoice: 'Fatura', doc_quote: 'Orçamento',
          quote_badge: 'ORÇAMENTO', quote_validity: 'Orçamento válido por {n} dias a partir da data de emissão.',
          wm_label: 'Marca d\'água', wm_none: 'Nenhum', wm_draft: 'RASCUNHO', wm_paid: 'PAGO',
          fo_export: '.iloveinvoice', fo_import: '.iloveinvoice',
          fo_clients: 'Clientes recentes', fo_clients_save: 'Salvar cliente atual',
          fo_clients_empty: 'Nenhum cliente salvo',
          fo_tip1: 'Exportar: salva a fatura atual (emissor, cliente, linhas, impostos, opções) num arquivo .iloveinvoice para reabrir ou partilhar.',
          fo_tip2: 'Importar: carrega um arquivo .iloveinvoice e restaura todos os dados (substitui o formulário atual).',
          fo_tip3: 'Clientes: salva o cliente atual num livro de endereços local para reutilizar com um clique.',
          toast_imported: '✓ Arquivo importado com sucesso.', toast_import_err: '❌ Arquivo inválido ou corrompido.',
          toast_client_saved: '✓ Cliente salvo.', toast_exported: '✓ Arquivo .iloveinvoice exportado.',
          history_title: 'Histórico de faturas', history_export_csv: 'Exportar como CSV', history_empty: 'Nenhuma fatura salva.', history_load: 'Carregar', history_duplicate: 'Duplicar', history_delete: 'Excluir', history_status_draft: 'Rascunho', history_status_sent: 'Enviada', history_status_paid: 'Paga', toast_history_saved: '✓ Salvo no histórico.', toast_history_loaded: '✓ Fatura carregada.', toast_history_duplicated: '✓ Fatura duplicada.', toast_history_deleted: '✓ Entrada excluída.',
          deposit_toggle: 'Solicitar um depósito?', deposit_mode_percent: '%', deposit_mode_fixed: 'Valor fixo',
          deposit_value: 'Valor/Percentual', lbl_deposit_amount: 'Depósito', lbl_balance_due: 'Saldo a pagar',
          lbl_cont_next: '↓ continua na próxima página',
          select_country: 'País e Imposto', select_lang: 'Língua de exibição', search_country: 'Procurar um país...', select_country_recent: 'Recentes',
          col_unit: 'Unidade', col_discount: 'Desconto', col_amount: 'Valor',
          tva_advanced_toggle: 'Taxa de imposto por linha',
          doc_credit: 'Nota de crédito', doc_proforma: 'Proforma',
          credit_badge: 'NOTA DE CRÉDITO', proforma_badge: 'PROFORMA',
          credit_mention: 'Esta nota de crédito representa um crédito a deduzir de faturas futuras.',
          proforma_mention: 'Esta fatura proforma não tem valor contratual. É fornecida a título informativo.',
          discount_global_label: 'Desconto global',
          discount_global_amount: 'Montante',
          tva_line_global: 'Taxa global',
          toast_client_name: '⚠️ Preencha o nome do cliente.',
          toast_catalog_saved: '✓ Item salvo no catálogo.',
          toast_duplicate_number: '⚠️ Este número de fatura já existe no histórico.',
          lbl_issuer: 'Emissor',
          lbl_discount: 'Desconto',
          custom_fields_label: 'Campos personalizados', custom_fields_add: '+ Adicionar campo', custom_field_placeholder_label: 'Rótulo (ex: N.º Encomenda)', custom_field_placeholder_value: 'Valor',
        },
        es: {
          nav_badge: 'Gratis · Sin cuenta · 100% local',
          issuer_name_placeholder: 'Razón social',
          btn_download: 'Descargar PDF', btn_download_full: 'Descargar mi factura (PDF)', btn_share: 'Compartir',
          toast_share_copied: '✓ ¡Enlace copiado al portapapeles!', toast_share_too_long: '⚠️ Factura demasiado grande para un enlace. Expórtela como archivo.',
          s1_title: 'Sus datos', s1_sub: 'Emisor · Guardado localmente',
          s2_title: 'Datos del cliente', s2_sub: 'No guardado · Privacidad',
          s3_title: 'Detalles de la factura', s3_sub: 'Número, fechas, tipo',
          s4_title: 'Líneas de servicio', s4_sub: 'línea(s) · ',
          s5_title: 'Impuesto', s5_sub: '& Opciones',
          saved: '✓ Guardado',
          e_name: 'Nombre completo / Razón social *', e_address: 'Dirección completa *', e_email: 'Email *', e_web: 'Sitio web / Teléfono (opcional)',
          c_name: 'Nombre de la empresa / Cliente *', c_email: 'Email del cliente (opcional)',
          c_billing: 'Dirección de facturación *', c_delivery_toggle: '¿Dirección de entrega diferente?', c_delivery: 'Dirección de entrega',
          inv_number: 'N° de factura *', inv_type: 'Tipo de servicio *', inv_date: 'Fecha de emisión *', inv_due: 'Fecha de vencimiento *',
          inv_ref: 'Asunto / Referencia (opcional)', inv_payment: 'Condiciones de pago (opcional)', inv_note: 'Nota / Menciones adicionales (opcional)',
          tva_franchise_title: 'Exento de IVA (microempresa)', tva_franchise_sub: 'Microempresa · Factura sin IVA',
          tva_rate_label: 'Tipo de IVA', add_line: 'Añadir línea',
          col_desc: 'Artículo', col_qty: 'Cant.', col_pu: 'P.U.',
          local_storage: 'Almacenado solo en su navegador', clear: 'Borrar',
          siret_hint: '14 dígitos · ID fiscal francés', siren_hint: '9 dígitos · obligatorio 2026',
          siren_tooltip: 'Obligatorio desde 2026 · art. L441-9 Código de Comercio francés · 9 primeros dígitos del SIRET',
          type_tooltip: 'Mención obligatoria desde enero de 2026 (Ley de Finanzas francesa)',
          preview_live: 'Vista previa en vivo', preview_format: 'Formato A4 · PDF alta fidelidad',
          pdf_white_notice: 'El PDF siempre se descargará con fondo blanco.',
          step_labels: ['Emisor', 'Cliente', 'Factura', 'Líneas', 'Impuesto'],
          type_services: 'Prestación de servicios', type_goods: 'Venta de bienes', type_mixed: 'Mixto (bienes & servicios)', type_custom: 'Otro (personalizado)',
          tva_20: '20% — Tipo general', tva_10: '10% — Tipo reducido', tva_5: '5,5% — Tipo superreducido', tva_2: '2,1% — Tipo mínimo',
          type_custom_label: 'Describa su tipo de servicio *',
          toast_saved: '✓ Información guardada', toast_cleared: 'Datos del emisor borrados.',
          toast_ok: '✅ "{f}" descargado correctamente!', toast_err: '❌ Error de generación. Inténtelo de nuevo.', toast_valid: '⚠️ Complete su nombre y el número de factura.', toast_gen: 'Generando…',
          inv_badge: 'FACTURA', lbl_num: 'N°', lbl_date: 'Emitida el', lbl_due: 'Vencimiento',
          lbl_billed: 'Facturado a', lbl_shipped: 'Entregado a', lbl_ref: 'Asunto · ',
          lbl_subtotal: 'Subtotal s/ IVA', lbl_total_ht: 'TOTAL S/ IVA', lbl_total_ttc: 'TOTAL C/ IVA',
          lbl_advanced: 'Opciones avanzadas', lbl_delete_line: 'Eliminar línea', lbl_duplicate_line: 'Duplicar línea',
          color_accent_label: 'Color del documento', font_label: 'Fuente del documento', template_label: 'Plantilla de factura',
          lbl_payment: 'Condiciones de pago · ', lbl_siret: 'SIRET:', lbl_siren: 'SIREN:',
          th_desc: 'Descripción', th_qty: 'Cant.', th_pu: 'P.U. s/ IVA', th_amt: 'Importe s/ IVA',
          empty_lines: 'No hay líneas añadidas…',
          tva_art: 'IVA no aplicable',
          legal_penalties: 'Cualquier retraso en el pago generará intereses de demora al triple del tipo legal vigente, más una indemnización forfetaria de recuperación de 40 € (art. L441-10 del Código de Comercio francés).',
          inv_payment_default: 'Transferencia bancaria — IBAN: FR76 XXXX XXXX XXXX',
          tax_custom: 'Tipo personalizado (%)',
          tax_custom_rate_label: 'Tipo de impuesto personalizado (%)',
          logo_label: 'Logotipo del emisor (opcional)', logo_hint: 'Haga clic para añadir su logotipo…', logo_remove: 'Eliminar',
          toggle_doctype: 'Tipo de documento', doc_invoice: 'Factura', doc_quote: 'Presupuesto',
          quote_badge: 'PRESUPUESTO', quote_validity: 'Presupuesto válido {n} días desde la fecha de emisión.',
          wm_label: 'Marca de agua', wm_none: 'Ninguno', wm_draft: 'BORRADOR', wm_paid: 'PAGADO',
          fo_export: '.iloveinvoice', fo_import: '.iloveinvoice',
          fo_clients: 'Clientes recientes', fo_clients_save: 'Guardar cliente actual',
          fo_clients_empty: 'No hay clientes guardados',
          fo_tip1: 'Exportar: guarda la factura actual (emisor, cliente, líneas, impuestos, opciones) en un archivo .iloveinvoice para reabrirlo o compartirlo.',
          fo_tip2: 'Importar: carga un archivo .iloveinvoice y restaura todos los datos (reemplaza el formulario actual).',
          fo_tip3: 'Clientes: guarda el cliente actual en una libreta de direcciones local para reutilizarlo con un clic.',
          toast_imported: '✓ Archivo importado correctamente.', toast_import_err: '❌ Archivo inválido o corrupto.',
          toast_client_saved: '✓ Cliente guardado.', toast_exported: '✓ Archivo .iloveinvoice exportado.',
          history_title: 'Historial de facturas', history_export_csv: 'Exportar como CSV', history_empty: 'No hay facturas guardadas.', history_load: 'Cargar', history_duplicate: 'Duplicar', history_delete: 'Eliminar', history_status_draft: 'Borrador', history_status_sent: 'Enviada', history_status_paid: 'Pagada', toast_history_saved: '✓ Guardado en el historial.', toast_history_loaded: '✓ Factura cargada.', toast_history_duplicated: '✓ Factura duplicada.', toast_history_deleted: '✓ Entrada eliminada.',
          deposit_toggle: '¿Solicitar un anticipo?', deposit_mode_percent: '%', deposit_mode_fixed: 'Cantidad fija',
          deposit_value: 'Cantidad/Porcentaje', lbl_deposit_amount: 'Anticipo', lbl_balance_due: 'Saldo pendiente',
          lbl_cont_next: '↓ continúa en la página siguiente',
          select_country: 'País e Impuesto', select_lang: 'Idioma de visualización', search_country: 'Buscar un país...', select_country_recent: 'Recientes',
          col_unit: 'Unidad', col_discount: 'Descuento', col_amount: 'Importe',
          tva_advanced_toggle: 'Tipo impuesto por línea',
          doc_credit: 'Nota de crédito', doc_proforma: 'Proforma',
          credit_badge: 'NOTA DE CRÉDITO', proforma_badge: 'PROFORMA',
          credit_mention: 'Esta nota de crédito representa un crédito a deducir de facturas futuras.',
          proforma_mention: 'Esta factura proforma no tiene valor contractual. Se proporciona a título informativo.',
          discount_global_label: 'Descuento global',
          discount_global_amount: 'Importe',
          tva_line_global: 'Tipo global',
          toast_client_name: '⚠️ Complete el nombre del cliente.',
          toast_catalog_saved: '✓ Artículo guardado en el catálogo.',
          toast_duplicate_number: '⚠️ Este número de factura ya existe en el historial.',
          lbl_issuer: 'Emisor',
          lbl_discount: 'Descuento',
          custom_fields_label: 'Campos personalizados', custom_fields_add: '+ Añadir campo', custom_field_placeholder_label: 'Etiqueta (p. ej. N.º pedido)', custom_field_placeholder_value: 'Valor',
        },
        de: {
          nav_badge: 'Kostenlos · Kein Konto · 100% lokal',
          issuer_name_placeholder: 'Firmenname',
          btn_download: 'PDF herunterladen', btn_download_full: 'Meine Rechnung herunterladen (PDF)', btn_share: 'Teilen',
          toast_share_copied: '✓ Link in die Zwischenablage kopiert!', toast_share_too_long: '⚠️ Rechnung zu groß für einen Link. Als Datei exportieren.',
          s1_title: 'Ihre Informationen', s1_sub: 'Aussteller · Lokal gespeichert',
          s2_title: 'Kundeninformationen', s2_sub: 'Nicht gespeichert · Datenschutz',
          s3_title: 'Rechnungsdetails', s3_sub: 'Nummer, Daten, Typ',
          s4_title: 'Leistungspositionen', s4_sub: 'Position(en) · ',
          s5_title: 'Steuern', s5_sub: '& Optionen',
          saved: '✓ Gespeichert',
          e_name: 'Vollständiger Name / Unternehmensname *', e_address: 'Vollständige Adresse *', e_email: 'E-Mail *', e_web: 'Website / Telefon (optional)',
          c_name: 'Unternehmensname / Kundenname *', c_email: 'Kundenmail (optional)',
          c_billing: 'Rechnungsadresse *', c_delivery_toggle: 'Abweichende Lieferadresse?', c_delivery: 'Lieferadresse',
          inv_number: 'Rechnungsnummer *', inv_type: 'Leistungstyp *', inv_date: 'Rechnungsdatum *', inv_due: 'Fälligkeitsdatum *',
          inv_ref: 'Betreff / Referenz (optional)', inv_payment: 'Zahlungsbedingungen (optional)', inv_note: 'Notiz / Ergänzende Hinweise (optional)',
          tva_franchise_title: 'Kleinunternehmerregelung', tva_franchise_sub: 'Kleinunternehmen · Rechnung ohne Steuer',
          tva_rate_label: 'Steuersatz', add_line: 'Position hinzufügen',
          col_desc: 'Beschreibung', col_qty: 'Menge', col_pu: 'P.U.',
          local_storage: 'Nur in Ihrem Browser gespeichert', clear: 'Löschen',
          siret_hint: '14 Ziffern · französische Betriebsstättennummer', siren_hint: '9 Ziffern · erforderlich ab 2026',
          siren_tooltip: 'Erforderlich ab 2026 · art. L441-9 Französisches Handelsgesetzbuch · erste 9 Ziffern der SIRET',
          type_tooltip: 'Erforderliche Angabe seit Januar 2026 (Französisches Finanzgesetz)',
          preview_live: 'Live-Vorschau', preview_format: 'A4-Format · hochwertige PDF',
          pdf_white_notice: 'Das PDF wird immer mit weißem Hintergrund heruntergeladen.',
          step_labels: ['Aussteller', 'Kunde', 'Rechnung', 'Positionen', 'Steuern'],
          type_services: 'Dienstleistung', type_goods: 'Warenverkauf', type_mixed: 'Gemischt (Waren & Dienstleistungen)', type_custom: 'Sonstiges (angepasst)',
          tva_20: '20% — Regelsteuersatz', tva_10: '10% — ermäßigter Satz', tva_5: '5,5% — niedrigerer Satz', tva_2: '2,1% — Mini-Satz',
          type_custom_label: 'Beschreiben Sie Ihren Leistungstyp *',
          toast_saved: '✓ Informationen gespeichert', toast_cleared: 'Ausstellerinformationen gelöscht.',
          toast_ok: '✅ "{f}" erfolgreich heruntergeladen!', toast_err: '❌ Generierungsfehler. Bitte versuchen Sie es erneut.', toast_valid: '⚠️ Bitte füllen Sie Ihren Namen und die Rechnungsnummer aus.', toast_gen: 'Wird generiert…',
          inv_badge: 'RECHNUNG', lbl_num: 'Nr.', lbl_date: 'Ausgestellt am', lbl_due: 'Fällig',
          lbl_billed: 'Abrechnung für', lbl_shipped: 'Lieferung an', lbl_ref: 'Betreff · ',
          lbl_subtotal: 'Summe ohne Steuer', lbl_total_ht: 'SUMME OHNE STEUER', lbl_total_ttc: 'SUMME MIT STEUER',
          lbl_advanced: 'Erweiterte Optionen', lbl_delete_line: 'Zeile löschen', lbl_duplicate_line: 'Zeile duplizieren',
          color_accent_label: 'Dokumentfarbe', font_label: 'Dokumentschrift', template_label: 'Rechnungsvorlage',
          lbl_payment: 'Zahlungsbedingungen · ', lbl_siret: 'SIRET:', lbl_siren: 'SIREN:',
          th_desc: 'Beschreibung', th_qty: 'Menge', th_pu: 'P.U.', th_amt: 'Betrag',
          empty_lines: 'Keine Positionen hinzugefügt…',
          tva_art: 'Steuer nicht anwendbar',
          legal_penalties: 'Jede Zahlungsverzögerung führt zu Verzugszinsen in Höhe des 3-fachen des geltenden Gesetzes plus pauschal € 40 Verzugsgebühr (art. L441-10 französisches Handelsgesetzbuch).',
          inv_payment_default: 'Banküberweisung — IBAN: FR76 XXXX XXXX XXXX',
          tax_custom: 'Individueller Steuersatz (%)',
          tax_custom_rate_label: 'Eigener Steuersatz (%)',
          logo_label: 'Emitterlogo (optional)', logo_hint: 'Klicken Sie, um Ihr Logo hinzuzufügen…', logo_remove: 'Entfernen',
          toggle_doctype: 'Dokumenttyp', doc_invoice: 'Rechnung', doc_quote: 'Angebot',
          quote_badge: 'ANGEBOT', quote_validity: 'Angebot gültig {n} Tage ab Ausstellungsdatum.',
          wm_label: 'Wasserzeichen', wm_none: 'Keins', wm_draft: 'ENTWURF', wm_paid: 'BEZAHLT',
          fo_export: '.iloveinvoice', fo_import: '.iloveinvoice',
          fo_clients: 'Aktuelle Kunden', fo_clients_save: 'Aktuellen Kunden speichern',
          fo_clients_empty: 'Keine gespeicherten Kunden',
          fo_tip1: 'Exportieren: speichert die aktuelle Rechnung (Absender, Kunde, Positionen, Steuer, Optionen) als .iloveinvoice-Datei zum späteren Öffnen oder Teilen.',
          fo_tip2: 'Importieren: lädt eine .iloveinvoice-Datei und stellt alle Daten wieder her (ersetzt das aktuelle Formular).',
          fo_tip3: 'Kunden: speichert den aktuellen Kunden in einem lokalen Adressbuch zur Wiederverwendung per Klick.',
          toast_imported: '✓ Datei erfolgreich importiert.', toast_import_err: '❌ Datei ungültig oder beschädigt.',
          toast_client_saved: '✓ Kunde gespeichert.', toast_exported: '✓ .iloveinvoice-Datei exportiert.',
          history_title: 'Rechnungsverlauf', history_export_csv: 'Als CSV exportieren', history_empty: 'Keine Rechnungen gespeichert.', history_load: 'Laden', history_duplicate: 'Duplizieren', history_delete: 'Löschen', history_status_draft: 'Entwurf', history_status_sent: 'Gesendet', history_status_paid: 'Bezahlt', toast_history_saved: '✓ Im Verlauf gespeichert.', toast_history_loaded: '✓ Rechnung geladen.', toast_history_duplicated: '✓ Rechnung dupliziert.', toast_history_deleted: '✓ Eintrag gelöscht.',
          deposit_toggle: 'Eine Anzahlung verlangen?', deposit_mode_percent: '%', deposit_mode_fixed: 'Fester Betrag',
          deposit_value: 'Betrag/Prozentsatz', lbl_deposit_amount: 'Anzahlung', lbl_balance_due: 'Zu zahlender Restbetrag',
          lbl_cont_next: '↓ Fortsetzung auf nächster Seite',
          select_country: 'Land und Steuer', select_lang: 'Anzeigesprache', search_country: 'Land suchen...', select_country_recent: 'Zuletzt verwendet',
          col_unit: 'Einheit', col_discount: 'Rabatt', col_amount: 'Betrag',
          tva_advanced_toggle: 'MwSt pro Position',
          doc_credit: 'Gutschrift', doc_proforma: 'Proforma',
          credit_badge: 'GUTSCHRIFT', proforma_badge: 'PROFORMA',
          credit_mention: 'Diese Gutschrift stellt ein Guthaben dar, das von zukünftigen Rechnungen abzuziehen ist.',
          proforma_mention: 'Diese Proforma-Rechnung hat keinen Vertragswert. Sie wird nur zu Informationszwecken bereitgestellt.',
          discount_global_label: 'Globaler Rabatt',
          discount_global_amount: 'Betrag',
          tva_line_global: 'Globaler Satz',
          toast_client_name: '⚠️ Bitte geben Sie den Kundennamen ein.',
          toast_catalog_saved: '✓ Position im Katalog gespeichert.',
          toast_duplicate_number: '⚠️ Diese Rechnungsnummer existiert bereits im Verlauf.',
          lbl_issuer: 'Aussteller',
          lbl_discount: 'Rabatt',
          custom_fields_label: 'Benutzerdefinierte Felder', custom_fields_add: '+ Feld hinzufügen', custom_field_placeholder_label: 'Bezeichnung (z. B. Bestell-Nr.)', custom_field_placeholder_value: 'Wert',
        },
        it: {
          nav_badge: 'Gratuito · Senza account · 100% locale',
          issuer_name_placeholder: 'Ragione sociale',
          btn_download: 'Scarica PDF', btn_download_full: 'Scarica la mia fattura (PDF)', btn_share: 'Condividi',
          toast_share_copied: '✓ Link copiato negli appunti!', toast_share_too_long: '⚠️ Fattura troppo grande per un link. Esporta come file.',
          s1_title: 'Le tue informazioni', s1_sub: 'Emittente · Salvato localmente',
          s2_title: 'Informazioni cliente', s2_sub: 'Non salvato · Privacy',
          s3_title: 'Dettagli fattura', s3_sub: 'Numero, date, tipo',
          s4_title: 'Linee di prestazione', s4_sub: 'riga(e) · ',
          s5_title: 'Imposte', s5_sub: '& Opzioni',
          saved: '✓ Salvato',
          e_name: 'Nome completo / Ragione sociale *', e_address: 'Indirizzo completo *', e_email: 'Email *', e_web: 'Sito web / Telefono (opzionale)',
          c_name: 'Nome ditta / Cliente *', c_email: 'Email cliente (opzionale)',
          c_billing: 'Indirizzo di fatturazione *', c_delivery_toggle: 'Indirizzo di consegna diverso?', c_delivery: 'Indirizzo di consegna',
          inv_number: 'Numero fattura *', inv_type: 'Tipo di prestazione *', inv_date: 'Data di emissione *', inv_due: 'Data scadenza *',
          inv_ref: 'Oggetto / Riferimento (opzionale)', inv_payment: 'Termini di pagamento (opzionale)', inv_note: 'Nota / Menzioni supplementari (opzionale)',
          tva_franchise_title: 'REGIME FORFETTARIO', tva_franchise_sub: 'Piccola impresa · Fattura senza IVA',
          tva_rate_label: 'Aliquota IVA', add_line: 'Aggiungi riga',
          col_desc: 'Articolo', col_qty: 'Qtà', col_pu: 'P.U.',
          local_storage: 'Archiviato solo nel tuo browser', clear: 'Cancella',
          siret_hint: '14 cifre · numero francese', siren_hint: '9 cifre · obbligatorio dal 2026',
          siren_tooltip: 'Obbligatorio dal 2026 · art. L441-9 Codice Commerciale francese · prime 9 cifre del SIRET',
          type_tooltip: 'Menzione obbligatoria dal gennaio 2026 (Legge di Bilancio francese)',
          preview_live: 'Anteprima in diretta', preview_format: 'Formato A4 · PDF alta fedeltà',
          pdf_white_notice: 'Il PDF verrà sempre scaricato con sfondo bianco.',
          step_labels: ['Emittente', 'Cliente', 'Fattura', 'Righe', 'Imposte'],
          type_services: 'Prestazione di servizi', type_goods: 'Vendita di beni', type_mixed: 'Misto (beni & servizi)', type_custom: 'Altro (personalizzato)',
          tva_20: '20% — Aliquota ordinaria', tva_10: '10% — Aliquota intermedia', tva_5: '5,5% — Aliquota ridotta', tva_2: '2,1% — Aliquota super-ridotta',
          type_custom_label: 'Descrivi il tuo tipo di prestazione *',
          toast_saved: '✓ Informazioni salvate', toast_cleared: 'Informazioni emittente cancellate.',
          toast_ok: '✅ "{f}" scaricato con successo!', toast_err: '❌ Errore di generazione. Riprova.', toast_valid: '⚠️ Compila il tuo nome e il numero fattura.', toast_gen: 'Generazione…',
          inv_badge: 'FATTURA', lbl_num: 'N°', lbl_date: 'Emessa il', lbl_due: 'Scadenza',
          lbl_billed: 'Fatturato a', lbl_shipped: 'Consegnato a', lbl_ref: 'Oggetto · ',
          lbl_subtotal: 'Subtotale imponibile', lbl_total_ht: 'TOTALE IMPONIBILE', lbl_total_ttc: 'TOTALE IVA INCLUSA',
          lbl_advanced: 'Opzioni avanzate', lbl_delete_line: 'Elimina riga', lbl_duplicate_line: 'Duplica riga',
          color_accent_label: 'Colore del documento', font_label: 'Carattere del documento', template_label: 'Modello di fattura',
          lbl_payment: 'Termini di pagamento · ', lbl_siret: 'SIRET:', lbl_siren: 'SIREN:',
          th_desc: 'Descrizione', th_qty: 'Qtà', th_pu: 'P.U.', th_amt: 'Importo',
          empty_lines: 'Nessuna prestazione aggiunta…',
          tva_art: 'Imposta non applicabile',
          legal_penalties: 'Qualsiasi ritardo nel pagamento comporta interessi di mora al triplo del tasso legale vigente, più indennità forfettaria di € 40 (art. L441-10 Codice Commerciale francese).',
          inv_payment_default: 'Bonifico bancario — IBAN: FR76 XXXX XXXX XXXX',
          tax_custom: 'Aliquota personalizzata (%)',
          tax_custom_rate_label: 'Aliquota fiscale personalizzata (%)',
          logo_label: 'Logo emittente (opzionale)', logo_hint: 'Fai clic per aggiungere il tuo logo…', logo_remove: 'Rimuovi',
          toggle_doctype: 'Tipo di documento', doc_invoice: 'Fattura', doc_quote: 'Preventivo',
          quote_badge: 'PREVENTIVO', quote_validity: 'Preventivo valido {n} giorni dalla data di emissione.',
          wm_label: 'Filigrana', wm_none: 'Nessuno', wm_draft: 'BOZZA', wm_paid: 'PAGATO',
          fo_export: '.iloveinvoice', fo_import: '.iloveinvoice',
          fo_clients: 'Clienti recenti', fo_clients_save: 'Salva cliente attuale',
          fo_clients_empty: 'Nessun cliente salvato',
          fo_tip1: 'Esporta: salva la fattura corrente (emittente, cliente, righe, imposte, opzioni) in un file .iloveinvoice da riaprire o condividere.',
          fo_tip2: 'Importa: carica un file .iloveinvoice e ripristina tutti i dati (sostituisce il modulo attuale).',
          fo_tip3: 'Clienti: salva il cliente attuale in una rubrica locale per riutilizzarlo con un clic.',
          toast_imported: '✓ File importato con successo.', toast_import_err: '❌ File non valido o corrotto.',
          toast_client_saved: '✓ Cliente salvato.', toast_exported: '✓ File .iloveinvoice esportato.',
          history_title: 'Storico fatture', history_export_csv: 'Esporta come CSV', history_empty: 'Nessuna fattura salvata.', history_load: 'Carica', history_duplicate: 'Duplica', history_delete: 'Elimina', history_status_draft: 'Bozza', history_status_sent: 'Inviata', history_status_paid: 'Pagata', toast_history_saved: '✓ Salvato nello storico.', toast_history_loaded: '✓ Fattura caricata.', toast_history_duplicated: '✓ Fattura duplicata.', toast_history_deleted: '✓ Voce eliminata.',
          deposit_toggle: 'Richiedere un acconto?', deposit_mode_percent: '%', deposit_mode_fixed: 'Importo fisso',
          deposit_value: 'Importo/Percentuale', lbl_deposit_amount: 'Acconto', lbl_balance_due: 'Saldo da pagare',
          lbl_cont_next: '↓ segue alla pagina successiva',
          select_country: 'Paese e Fisco', select_lang: 'Lingua di visualizzazione', search_country: 'Cerca un paese...', select_country_recent: 'Recenti',
          col_unit: 'Unità', col_discount: 'Sconto', col_amount: 'Importo',
          tva_advanced_toggle: 'Aliquota per riga',
          doc_credit: 'Nota di credito', doc_proforma: 'Proforma',
          credit_badge: 'NOTA DI CREDITO', proforma_badge: 'PROFORMA',
          credit_mention: 'Questa nota di credito rappresenta un credito da detrarre da fatture future.',
          proforma_mention: 'Questa fattura pro forma non ha valore contrattuale. È fornita a scopo informativo.',
          discount_global_label: 'Sconto globale',
          discount_global_amount: 'Importo',
          tva_line_global: 'Aliquota globale',
          toast_client_name: '⚠️ Inserire il nome del cliente.',
          toast_catalog_saved: '✓ Articolo salvato nel catalogo.',
          toast_duplicate_number: '⚠️ Questo numero di fattura esiste già nello storico.',
          lbl_issuer: 'Emittente',
          lbl_discount: 'Sconto',
          custom_fields_label: 'Campi personalizzati', custom_fields_add: '+ Aggiungi campo', custom_field_placeholder_label: 'Etichetta (es. N. ordine)', custom_field_placeholder_value: 'Valore',
        },
        nl: {
          nav_badge: 'Gratis · Geen account · 100% lokaal',
          issuer_name_placeholder: 'Bedrijfsnaam',
          btn_download: 'PDF downloaden', btn_download_full: 'Download mijn factuur (PDF)', btn_share: 'Delen',
          toast_share_copied: '✓ Link gekopieerd naar klembord!', toast_share_too_long: '⚠️ Factuur te groot voor een link. Exporteer als bestand.',
          s1_title: 'Uw gegevens', s1_sub: 'Verzender · Lokaal opgeslagen',
          s2_title: 'Klantgegevens', s2_sub: 'Niet opgeslagen · Privacy',
          s3_title: 'Factuurdetails', s3_sub: 'Nummer, datums, type',
          s4_title: 'Regelitems', s4_sub: 'item(s) · ',
          s5_title: 'Belasting', s5_sub: '& Opties',
          saved: '✓ Opgeslagen',
          e_name: 'Volledige naam / Bedrijfsnaam *', e_address: 'Volledig adres *', e_email: 'E-mail *', e_web: 'Website / Telefoonnummer (optioneel)',
          c_name: 'Bedrijfsnaam / Klantennaam *', c_email: 'E-mail klant (optioneel)',
          c_billing: 'Factuuradres *', c_delivery_toggle: 'Ander afleveradres?', c_delivery: 'Afleveradres',
          inv_number: 'Factuurnummer *', inv_type: 'Servicetype *', inv_date: 'Factuurdatum *', inv_due: 'Vervaldatum *',
          inv_ref: 'Onderwerp / Referentie (optioneel)', inv_payment: 'Betalingsvoorwaarden (optioneel)', inv_note: 'Opmerking / Aanvullende vermeldingen (optioneel)',
          tva_franchise_title: 'Kleine onderneming vrijstelling', tva_franchise_sub: 'Kleine onderneming · Factuur zonder belasting',
          tva_rate_label: 'Belastingtarief', add_line: 'Regel toevoegen',
          col_desc: 'Artikel', col_qty: 'Hoev.', col_pu: 'P.U.',
          local_storage: 'Alleen opgeslagen in uw browser', clear: 'Wissen',
          siret_hint: '14 cijfers · Frans bedrijfsnummer', siren_hint: '9 cijfers · verplicht van 2026',
          siren_tooltip: 'Verplicht van 2026 · art. L441-9 Frans Handelswetboek · eerste 9 cijfers van SIRET',
          type_tooltip: 'Verplichte vermelding sinds januari 2026 (Franse Financiewet)',
          preview_live: 'Live-voorbeeld', preview_format: 'A4-indeling · hoogwaardige PDF',
          pdf_white_notice: 'Het PDF wordt altijd gedownload met witte achtergrond.',
          step_labels: ['Verzender', 'Klant', 'Factuur', 'Regels', 'Belasting'],
          type_services: 'Dienstverlening', type_goods: 'Verkoop van goederen', type_mixed: 'Gemengd (goederen & diensten)', type_custom: 'Overig (aangepast)',
          tva_20: '20% — Standaardtarief', tva_10: '10% — Verlaagd tarief', tva_5: '5,5% — Laag tarief', tva_2: '2,1% — Super-laag tarief',
          type_custom_label: 'Beschrijf uw servicetype *',
          toast_saved: '✓ Informatie opgeslagen', toast_cleared: 'Verzendergegevens verwijderd.',
          toast_ok: '✅ "{f}" succesvol gedownload!', toast_err: '❌ Genereringsfout. Probeer het opnieuw.', toast_valid: '⚠️ Vul uw naam en factuurnummer in.', toast_gen: 'Genereren…',
          inv_badge: 'FACTUUR', lbl_num: 'Nr.', lbl_date: 'Uitgegeven op', lbl_due: 'Vervaldatum',
          lbl_billed: 'Gefactureerd aan', lbl_shipped: 'Bezorgd aan', lbl_ref: 'Onderwerp · ',
          lbl_subtotal: 'Subtotaal excl. belasting', lbl_total_ht: 'TOTAAL EXCL. BELASTING', lbl_total_ttc: 'TOTAAL INCL. BELASTING',
          lbl_advanced: 'Geavanceerde opties', lbl_delete_line: 'Regel verwijderen', lbl_duplicate_line: 'Regel dupliceren',
          color_accent_label: 'Documentkleur', font_label: 'Documentlettertype', template_label: 'Factuursjabloon',
          lbl_payment: 'Betalingsvoorwaarden · ', lbl_siret: 'SIRET:', lbl_siren: 'SIREN:',
          th_desc: 'Beschrijving', th_qty: 'Hoev.', th_pu: 'P.U.', th_amt: 'Bedrag',
          empty_lines: 'Geen items toegevoegd…',
          tva_art: 'Belasting niet van toepassing',
          legal_penalties: 'Elke betalingsvertraging resulteert in rente op achterstallige betalingen tegen 3× het geldende tarief, plus een forfaitaire terugvorderingsbijdrage van € 40 (art. L441-10 Frans Handelswetboek).',
          inv_payment_default: 'Banktransfer — IBAN: FR76 XXXX XXXX XXXX',
          tax_custom: 'Aangepast belastingtarief (%)',
          tax_custom_rate_label: 'Aangepast belastingtarief (%)',
          logo_label: 'Zenderlogo (optioneel)', logo_hint: 'Klik om uw logo toe te voegen…', logo_remove: 'Verwijderen',
          toggle_doctype: 'Documenttype', doc_invoice: 'Factuur', doc_quote: 'Offerte',
          quote_badge: 'OFFERTE', quote_validity: 'Offerte geldig {n} dagen vanaf de uitgiftedatum.',
          wm_label: 'Watermerk', wm_none: 'Geen', wm_draft: 'CONCEPT', wm_paid: 'BETAALD',
          fo_export: '.iloveinvoice', fo_import: '.iloveinvoice',
          fo_clients: 'Recente klanten', fo_clients_save: 'Huidige klant opslaan',
          fo_clients_empty: 'Geen opgeslagen klanten',
          fo_tip1: 'Exporteren: slaat de huidige factuur (afzender, klant, regels, btw, opties) op als .iloveinvoice-bestand om later te openen of te delen.',
          fo_tip2: 'Importeren: laadt een .iloveinvoice-bestand en herstelt alle gegevens (vervangt het huidige formulier).',
          fo_tip3: 'Klanten: slaat de huidige klant op in een lokaal adresboek voor hergebruik met één klik.',
          toast_imported: '✓ Bestand succesvol geïmporteerd.', toast_import_err: '❌ Bestand ongeldig of beschadigd.',
          toast_client_saved: '✓ Klant opgeslagen.', toast_exported: '✓ .iloveinvoice-bestand geëxporteerd.',
          history_title: 'Factuurgeschiedenis', history_export_csv: 'Exporteren als CSV', history_empty: 'Geen facturen opgeslagen.', history_load: 'Laden', history_duplicate: 'Dupliceren', history_delete: 'Verwijderen', history_status_draft: 'Concept', history_status_sent: 'Verzonden', history_status_paid: 'Betaald', toast_history_saved: '✓ Opgeslagen in geschiedenis.', toast_history_loaded: '✓ Factuur geladen.', toast_history_duplicated: '✓ Factuur gedupliceerd.', toast_history_deleted: '✓ Item verwijderd.',
          deposit_toggle: 'Een aanbetaling vragen?', deposit_mode_percent: '%', deposit_mode_fixed: 'Vast bedrag',
          deposit_value: 'Bedrag/Percentage', lbl_deposit_amount: 'Aanbetaling', lbl_balance_due: 'Te betalen saldo',
          lbl_cont_next: '↓ vervolg op volgende pagina',
          select_country: 'Land en Belasting', select_lang: 'Weergavetaal', search_country: 'Zoek een land...', select_country_recent: 'Recent',
          col_unit: 'Eenheid', col_discount: 'Korting', col_amount: 'Bedrag',
          tva_advanced_toggle: 'Belasting per regel',
          doc_credit: 'Creditnota', doc_proforma: 'Proforma',
          credit_badge: 'CREDITNOTA', proforma_badge: 'PROFORMA',
          credit_mention: 'Deze creditnota vertegenwoordigt een tegoed in mindering te brengen op toekomstige facturen.',
          proforma_mention: 'Deze proforma factuur heeft geen contractuele waarde. Ze wordt uitsluitend ter informatie verstrekt.',
          discount_global_label: 'Globale korting',
          discount_global_amount: 'Bedrag',
          tva_line_global: 'Globaal tarief',
          toast_client_name: '⚠️ Vul de klantennaam in.',
          toast_catalog_saved: '✓ Item opgeslagen in catalogus.',
          toast_duplicate_number: '⚠️ Dit factuurnummer bestaat al in de geschiedenis.',
          lbl_issuer: 'Verzender',
          lbl_discount: 'Korting',
          custom_fields_label: 'Aangepaste velden', custom_fields_add: '+ Veld toevoegen', custom_field_placeholder_label: 'Label (bijv. Bestel-nr.)', custom_field_placeholder_value: 'Waarde',
        },
        sv: {
          nav_badge: 'Gratis · Inget konto · 100% lokalt',
          issuer_name_placeholder: 'Företagsnamn',
          btn_download: 'Ladda ner PDF', btn_download_full: 'Ladda ner min faktura (PDF)', btn_share: 'Dela',
          toast_share_copied: '✓ Länk kopierad till urklipp!', toast_share_too_long: '⚠️ Fakturan är för stor för en länk. Exportera som fil istället.',
          s1_title: 'Dina uppgifter', s1_sub: 'Utfärdare · Sparas lokalt',
          s2_title: 'Kunduppgifter', s2_sub: 'Sparas inte · Sekretess',
          s3_title: 'Fakturadetaljer', s3_sub: 'Nummer, datum, typ',
          s4_title: 'Fakturarader', s4_sub: 'rad(er) · ',
          s5_title: 'Moms', s5_sub: '& Alternativ',
          saved: '✓ Sparat',
          e_name: 'Fullständigt namn / Företagsnamn *', e_address: 'Fullständig adress *', e_email: 'E-post *', e_web: 'Webbplats / Telefon (valfritt)',
          c_name: 'Företag / Kundnamn *', c_email: 'Kund-e-post (valfritt)',
          c_billing: 'Fakturaadress *', c_delivery_toggle: 'Annan leveransadress?', c_delivery: 'Leveransadress',
          inv_number: 'Fakturanummer *', inv_type: 'Tjänstetyp *', inv_date: 'Utfärdandedatum *', inv_due: 'Förfallodatum *',
          inv_ref: 'Ärende / Referens (valfritt)', inv_payment: 'Betalningsvillkor (valfritt)', inv_note: 'Notering / Ytterligare upplysningar (valfritt)',
          tva_franchise_title: 'Momsbefriad (liten företagare)', tva_franchise_sub: 'Liten företagare · Faktura utan moms',
          tva_rate_label: 'Momssats', add_line: 'Lägg till rad',
          col_desc: 'Beskrivning', col_qty: 'Antal', col_pu: 'À-pris', col_unit: 'Enhet', col_discount: 'Rabatt', col_amount: 'Belopp',
          unit_h: 'timme', unit_j: 'dag', unit_forfait: 'fast pris', unit_u: 'enhet', unit_km: 'km', unit_mois: 'månad',
          tva_advanced_toggle: 'Momssats per rad',
          local_storage: 'Lagras enbart i din webbläsare', clear: 'Rensa',
          siret_hint: '14 siffror · Franskt företags-ID', siren_hint: '9 siffror · obligatoriskt 2026',
          siren_tooltip: 'Obligatoriskt sedan 2026 · art. L441-9 franska handelsbalken · de 9 första siffrorna i SIRET',
          type_tooltip: 'Obligatorisk uppgift sedan januari 2026 (fransk finanslag)',
          preview_live: 'Förhandsgranskning i realtid', preview_format: 'A4-format · Högtrogen PDF',
          pdf_white_notice: 'PDF:en laddas alltid ner med vit bakgrund.',
          step_labels: ['Utfärdare', 'Kund', 'Faktura', 'Rader', 'Moms'],
          type_services: 'Tjänst', type_goods: 'Varor', type_mixed: 'Blandat', type_custom: 'Övrigt',
          tva_20: '20% — Normalskattesats', tva_10: '10% — Mellanliggande sats', tva_5: '5,5% — Reducerad sats', tva_2: '2,1% — Superreducerad sats',
          type_custom_label: 'Beskriv din tjänstetyp *',
          toast_saved: '✓ Uppgifter sparade', toast_cleared: 'Utfärdarens uppgifter rensade.',
          toast_ok: '✅ "{f}" nedladdad!', toast_err: '❌ Genereringsfel. Försök igen.', toast_valid: '⚠️ Fyll i ditt namn och fakturanumret.', toast_gen: 'Genererar…',
          inv_badge: 'FAKTURA', lbl_num: 'Nr', lbl_date: 'Utfärdad', lbl_due: 'Förfaller',
          lbl_billed: 'Faktureras till', lbl_shipped: 'Levereras till', lbl_ref: 'Ärende · ',
          lbl_subtotal: 'Delsumma (exkl. moms)', lbl_total_ht: 'TOTALT (exkl. moms)', lbl_total_ttc: 'TOTALT (inkl. moms)',
          lbl_advanced: 'Avancerade alternativ', lbl_delete_line: 'Ta bort rad', lbl_duplicate_line: 'Duplicera rad',
          color_accent_label: 'Dokumentfärg', font_label: 'Dokumenttypsnitt', template_label: 'Fakturamall',
          lbl_payment: 'Betalningsvillkor · ', lbl_siret: 'SIRET:', lbl_siren: 'SIREN:',
          th_desc: 'Beskrivning', th_qty: 'Antal', th_pu: 'À-pris', th_amt: 'Belopp',
          empty_lines: 'Inga rader tillagda…',
          tva_art: 'Moms ej tillämplig',
          legal_penalties: 'Dröjsmålsränta utgår med tre gånger lagstadgad ränta jämte en schablonersättning om 40 € (art. L441-10 franska handelsbalken).',
          inv_payment_default: 'Bankgiro — IBAN: FR76 XXXX XXXX XXXX',
          tax_custom: 'Anpassad skattesats (%)',
          tax_custom_rate_label: 'Anpassad momssats (%)',
          logo_label: 'Utfärdarens logotyp (valfritt)', logo_hint: 'Klicka för att lägga till din logotyp…', logo_remove: 'Ta bort',
          toggle_doctype: 'Dokumenttyp', doc_invoice: 'Faktura', doc_quote: 'Offert', doc_credit: 'Kreditfaktura', doc_proforma: 'Proformafaktura',
          quote_badge: 'OFFERT', credit_badge: 'KREDITFAKTURA', proforma_badge: 'PROFORMA', quote_validity: 'Offerten är giltig i {n} dagar från utfärdandedatumet.',
          credit_mention: 'Denna kreditfaktura avser en kredit som ska avräknas mot framtida fakturor.',
          proforma_mention: 'Denna proformafaktura har inget avtalsvärde. Den tillhandahålls enbart i informationssyfte.',
          wm_label: 'Vattenstämpel', wm_none: 'Ingen', wm_draft: 'UTKAST', wm_paid: 'BETALD',
          fo_export: '.iloveinvoice', fo_import: '.iloveinvoice',
          fo_clients: 'Senaste kunder', fo_clients_save: 'Spara aktuell kund',
          fo_clients_empty: 'Inga sparade kunder',
          fo_tip1: 'Exportera: sparar den aktuella fakturan (avsändare, kund, rader, skatt, alternativ) till en .iloveinvoice-fil att öppna igen eller dela.',
          fo_tip2: 'Importera: laddar en .iloveinvoice-fil och återställer alla data (ersätter det aktuella formuläret).',
          fo_tip3: 'Kunder: sparar den aktuella kunden i en lokal adressbok för återanvändning med ett klick.',
          toast_imported: '✓ Fil importerad.', toast_import_err: '❌ Ogiltig eller korrupt fil.',
          toast_client_saved: '✓ Kund sparad.', toast_exported: '✓ .iloveinvoice-filen exporterades.',
          history_title: 'Fakturahistorik', history_export_csv: 'Exportera som CSV', history_empty: 'Inga sparade fakturor.', history_load: 'Ladda', history_duplicate: 'Duplicera', history_delete: 'Radera', history_status_draft: 'Utkast', history_status_sent: 'Skickad', history_status_paid: 'Betald', toast_history_saved: '✓ Sparad i historiken.', toast_history_loaded: '✓ Faktura laddad.', toast_history_duplicated: '✓ Faktura duplicerad.', toast_history_deleted: '✓ Post raderad.',
          deposit_toggle: 'Begär förskott?', deposit_mode_percent: '%', deposit_mode_fixed: 'Fast belopp',
          deposit_value: 'Belopp/Procent', lbl_deposit_amount: 'Förskott', lbl_balance_due: 'Återstående belopp',
          lbl_cont_next: '↓ fortsättning på nästa sida',
          select_country: 'Land & Moms', select_lang: 'Visningsspråk', search_country: 'Sök land...', select_country_recent: 'Senaste',
          discount_global_label: 'Global rabatt',
          discount_global_amount: 'Belopp',
          tva_line_global: 'Global sats',
          toast_client_name: '⚠️ Fyll i kundnamnet.',
          toast_catalog_saved: '✓ Artikel sparad i katalogen.',
          toast_duplicate_number: '⚠️ Detta fakturanummer finns redan i historiken.',
          lbl_issuer: 'Utfärdare',
          lbl_discount: 'Rabatt',
          custom_fields_label: 'Anpassade fält', custom_fields_add: '+ Lägg till fält', custom_field_placeholder_label: 'Etikett (t.ex. Ordernr.)', custom_field_placeholder_value: 'Värde',
        },
        pl: {
          nav_badge: 'Bezpłatny · Bez konta · 100% lokalnie',
          issuer_name_placeholder: 'Nazwa firmy',
          btn_download: 'Pobierz PDF', btn_download_full: 'Pobierz moją fakturę (PDF)', btn_share: 'Udostępnij',
          toast_share_copied: '✓ Link skopiowany do schowka!', toast_share_too_long: '⚠️ Faktura jest zbyt duża, aby przesłać ją jako link. Wyeksportuj jako plik.',
          s1_title: 'Twoje dane', s1_sub: 'Wystawca · Zapisano lokalnie',
          s2_title: 'Dane klienta', s2_sub: 'Nie zapisano · Prywatność',
          s3_title: 'Szczegóły faktury', s3_sub: 'Numer, daty, typ',
          s4_title: 'Pozycje faktury', s4_sub: 'pozycja/pozycje · ',
          s5_title: 'VAT', s5_sub: '& Opcje',
          saved: '✓ Zapisano',
          e_name: 'Imię i nazwisko / Nazwa firmy *', e_address: 'Pełny adres *', e_email: 'E-mail *', e_web: 'Strona internetowa / Telefon (opcjonalnie)',
          c_name: 'Firma / Nazwa klienta *', c_email: 'E-mail klienta (opcjonalnie)',
          c_billing: 'Adres do faktury *', c_delivery_toggle: 'Inny adres dostawy?', c_delivery: 'Adres dostawy',
          inv_number: 'Numer faktury *', inv_type: 'Rodzaj usługi *', inv_date: 'Data wystawienia *', inv_due: 'Termin płatności *',
          inv_ref: 'Temat / Referencja (opcjonalnie)', inv_payment: 'Warunki płatności (opcjonalnie)', inv_note: 'Uwagi / Dodatkowe informacje (opcjonalnie)',
          tva_franchise_title: 'Zwolnienie z VAT (mały przedsiębiorca)', tva_franchise_sub: 'Mały przedsiębiorca · Faktura bez VAT',
          tva_rate_label: 'Stawka VAT', add_line: 'Dodaj pozycję',
          col_desc: 'Opis', col_qty: 'Ilość', col_pu: 'Cena jedn.', col_unit: 'Jednostka', col_discount: 'Rabat', col_amount: 'Kwota',
          unit_h: 'godzina', unit_j: 'dzień', unit_forfait: 'ryczałt', unit_u: 'szt.', unit_km: 'km', unit_mois: 'miesiąc',
          tva_advanced_toggle: 'Stawka VAT per pozycja',
          local_storage: 'Przechowywane tylko w Twojej przeglądarce', clear: 'Wyczyść',
          siret_hint: '14 cyfr · Francuski numer firmy', siren_hint: '9 cyfr · wymagany od 2026',
          siren_tooltip: 'Obowiązkowy od 2026 · art. L441-9 francuskiego kodeksu handlowego · pierwsze 9 cyfr SIRET',
          type_tooltip: 'Obowiązkowa informacja od stycznia 2026 (francuska ustawa budżetowa)',
          preview_live: 'Podgląd na żywo', preview_format: 'Format A4 · Wierne odwzorowanie PDF',
          pdf_white_notice: 'PDF będzie zawsze pobierany z białym tłem.',
          step_labels: ['Wystawca', 'Klient', 'Faktura', 'Pozycje', 'VAT'],
          type_services: 'Usługa', type_goods: 'Towar', type_mixed: 'Mieszany', type_custom: 'Inne',
          tva_20: '20% — Stawka podstawowa', tva_10: '10% — Stawka pośrednia', tva_5: '5,5% — Stawka obniżona', tva_2: '2,1% — Stawka superobniżona',
          type_custom_label: 'Opisz rodzaj usługi *',
          toast_saved: '✓ Dane zapisane', toast_cleared: 'Dane wystawcy zostały wyczyszczone.',
          toast_ok: '✅ "{f}" pobrano pomyślnie!', toast_err: '❌ Błąd generowania. Spróbuj ponownie.', toast_valid: '⚠️ Wypełnij imię i nazwisko oraz numer faktury.', toast_gen: 'Generowanie…',
          inv_badge: 'FAKTURA', lbl_num: 'Nr', lbl_date: 'Wystawiono', lbl_due: 'Termin płatności',
          lbl_billed: 'Nabywca', lbl_shipped: 'Odbiorca', lbl_ref: 'Temat · ',
          lbl_subtotal: 'Wartość netto', lbl_total_ht: 'RAZEM NETTO', lbl_total_ttc: 'RAZEM BRUTTO',
          lbl_advanced: 'Opcje zaawansowane', lbl_delete_line: 'Usuń wiersz', lbl_duplicate_line: 'Duplikuj wiersz',
          color_accent_label: 'Kolor dokumentu', font_label: 'Czcionka dokumentu', template_label: 'Szablon faktury',
          lbl_payment: 'Warunki płatności · ', lbl_siret: 'SIRET:', lbl_siren: 'SIREN:',
          th_desc: 'Opis', th_qty: 'Ilość', th_pu: 'Cena netto', th_amt: 'Wartość netto',
          empty_lines: 'Brak pozycji…',
          tva_art: 'Podatek nie dotyczy',
          legal_penalties: 'Każde opóźnienie w płatności skutkuje naliczeniem odsetek w wysokości 3-krotności ustawowej stopy procentowej oraz zryczałtowaną opłatą windykacyjną 40 € (art. L441-10 francuskiego kodeksu handlowego).',
          inv_payment_default: 'Przelew bankowy — IBAN: FR76 XXXX XXXX XXXX',
          tax_custom: 'Własna stawka (%)',
          tax_custom_rate_label: 'Własna stawka VAT (%)',
          logo_label: 'Logo wystawcy (opcjonalnie)', logo_hint: 'Kliknij, aby dodać swoje logo…', logo_remove: 'Usuń',
          toggle_doctype: 'Typ dokumentu', doc_invoice: 'Faktura', doc_quote: 'Oferta', doc_credit: 'Faktura korygująca', doc_proforma: 'Faktura pro forma',
          quote_badge: 'OFERTA', credit_badge: 'FAKTURA KORYGUJĄCA', proforma_badge: 'PROFORMA', quote_validity: 'Oferta ważna przez {n} dni od daty wystawienia.',
          credit_mention: 'Niniejsza faktura korygująca stanowi korektę do odliczenia od przyszłych faktur.',
          proforma_mention: 'Niniejsza faktura pro forma nie ma wartości umownej. Wystawiona jest wyłącznie informacyjnie.',
          wm_label: 'Znak wodny', wm_none: 'Brak', wm_draft: 'PROJEKT', wm_paid: 'ZAPŁACONO',
          fo_export: '.iloveinvoice', fo_import: '.iloveinvoice',
          fo_clients: 'Ostatni klienci', fo_clients_save: 'Zapisz bieżącego klienta',
          fo_clients_empty: 'Brak zapisanych klientów',
          fo_tip1: 'Eksportuj: zapisuje bieżącą fakturę (wystawca, klient, pozycje, podatek, opcje) do pliku .iloveinvoice, który można otworzyć później lub udostępnić.',
          fo_tip2: 'Importuj: wczytuje plik .iloveinvoice i przywraca wszystkie dane (zastępuje bieżący formularz).',
          fo_tip3: 'Klienci: zapisuje bieżącego klienta w lokalnej książce adresowej do ponownego użycia jednym kliknięciem.',
          toast_imported: '✓ Plik zaimportowany.', toast_import_err: '❌ Nieprawidłowy lub uszkodzony plik.',
          toast_client_saved: '✓ Klient zapisany.', toast_exported: '✓ Plik .iloveinvoice wyeksportowany.',
          history_title: 'Historia faktur', history_export_csv: 'Eksportuj do CSV', history_empty: 'Brak zapisanych faktur.', history_load: 'Wczytaj', history_duplicate: 'Duplikuj', history_delete: 'Usuń', history_status_draft: 'Projekt', history_status_sent: 'Wysłano', history_status_paid: 'Zapłacono', toast_history_saved: '✓ Zapisano w historii.', toast_history_loaded: '✓ Faktura wczytana.', toast_history_duplicated: '✓ Faktura zduplikowana.', toast_history_deleted: '✓ Wpis usunięty.',
          deposit_toggle: 'Zażądać zaliczki?', deposit_mode_percent: '%', deposit_mode_fixed: 'Kwota stała',
          deposit_value: 'Kwota/Procent', lbl_deposit_amount: 'Zaliczka', lbl_balance_due: 'Pozostało do zapłaty',
          lbl_cont_next: '↓ ciąg dalszy na następnej stronie',
          select_country: 'Kraj & VAT', select_lang: 'Język interfejsu', search_country: 'Szukaj kraju...', select_country_recent: 'Ostatnie',
          discount_global_label: 'Rabat globalny',
          discount_global_amount: 'Kwota',
          tva_line_global: 'Stawka globalna',
          toast_client_name: '⚠️ Wpisz nazwę klienta.',
          toast_catalog_saved: '✓ Pozycja zapisana w katalogu.',
          toast_duplicate_number: '⚠️ Ten numer faktury już istnieje w historii.',
          lbl_issuer: 'Wystawca',
          lbl_discount: 'Rabat',
          custom_fields_label: 'Pola niestandardowe', custom_fields_add: '+ Dodaj pole', custom_field_placeholder_label: 'Etykieta (np. Nr zamówienia)', custom_field_placeholder_value: 'Wartość',
        },
        ja: {
          nav_badge: '無料・アカウント不要・完全ローカル',
          issuer_name_placeholder: '会社名',
          btn_download: 'PDFダウンロード', btn_download_full: '請求書をダウンロード（PDF）', btn_share: '共有',
          toast_share_copied: '✓ リンクをクリップボードにコピーしました！', toast_share_too_long: '⚠️ 請求書が大きすぎてリンクにできません。ファイルとしてエクスポートしてください。',
          s1_title: '発行者情報', s1_sub: '発行者・ブラウザに保存',
          s2_title: '取引先情報', s2_sub: '保存なし・プライバシー保護',
          s3_title: '請求書の詳細', s3_sub: '番号・日付・種別',
          s4_title: '明細行', s4_sub: '行・',
          s5_title: '税金', s5_sub: 'とオプション',
          saved: '✓ 保存済み',
          e_name: '氏名・会社名 *', e_address: '住所 *', e_email: 'メールアドレス *', e_web: 'ウェブサイト・電話番号（任意）',
          c_name: '会社名・取引先名 *', c_email: '取引先メールアドレス（任意）',
          c_billing: '請求先住所 *', c_delivery_toggle: '別の配送先住所？', c_delivery: '配送先住所',
          inv_number: '請求書番号 *', inv_type: 'サービス種別 *', inv_date: '発行日 *', inv_due: '支払期限 *',
          inv_ref: '件名・参照番号（任意）', inv_payment: '支払条件（任意）', inv_note: '備考・追加事項（任意）',
          tva_franchise_title: '消費税免税（小規模事業者）', tva_franchise_sub: '免税事業者・消費税なし',
          tva_rate_label: '税率', add_line: '行を追加',
          col_desc: '説明', col_qty: '数量', col_pu: '単価', col_unit: '単位', col_discount: '割引', col_amount: '金額',
          unit_h: '時間', unit_j: '日', unit_forfait: '一括', unit_u: '個', unit_km: 'km', unit_mois: 'ヶ月',
          tva_advanced_toggle: '行ごとの税率',
          local_storage: 'ブラウザのみに保存', clear: 'クリア',
          siret_hint: '14桁・フランス事業者番号', siren_hint: '9桁・2026年より必須',
          siren_tooltip: '2026年より義務化・フランス商法典 art. L441-9・SIRETの先頭9桁',
          type_tooltip: '2026年1月より義務表記（フランス財政法）',
          preview_live: 'リアルタイムプレビュー', preview_format: 'A4形式・高品質PDF',
          pdf_white_notice: 'PDFは常に白背景でダウンロードされます。',
          step_labels: ['発行者', '取引先', '請求書', '明細', '税金'],
          type_services: 'サービス', type_goods: '物品', type_mixed: '混合', type_custom: 'その他',
          tva_20: '20%——標準税率', tva_10: '10%——中間税率', tva_5: '5.5%——軽減税率', tva_2: '2.1%——超軽減税率',
          type_custom_label: 'サービス種別を入力 *',
          toast_saved: '✓ 情報を保存しました', toast_cleared: '発行者情報をクリアしました。',
          toast_ok: '✅ 「{f}」のダウンロードが完了しました！', toast_err: '❌ 生成エラーが発生しました。再試行してください。', toast_valid: '⚠️ 氏名と請求書番号を入力してください。', toast_gen: '生成中…',
          inv_badge: '請求書', lbl_num: '番号', lbl_date: '発行日', lbl_due: '支払期限',
          lbl_billed: '請求先', lbl_shipped: '配送先', lbl_ref: '件名・',
          lbl_subtotal: '小計（税抜）', lbl_total_ht: '合計（税抜）', lbl_total_ttc: '合計（税込）',
          lbl_advanced: '詳細オプション', lbl_delete_line: '行を削除', lbl_duplicate_line: '行を複製',
          color_accent_label: '書類のカラー', font_label: '書類のフォント', template_label: '請求書テンプレート',
          lbl_payment: '支払条件・', lbl_siret: 'SIRET:', lbl_siren: 'SIREN:',
          th_desc: '説明', th_qty: '数量', th_pu: '単価', th_amt: '金額',
          empty_lines: 'まだ明細が追加されていません…',
          tva_art: '税金は適用されません',
          legal_penalties: '支払遅延が発生した場合、法定利率の3倍の遅延損害金および40ユーロの回収手数料が適用されます（フランス商法典L441-10条）。',
          inv_payment_default: '銀行振込 — IBAN: FR76 XXXX XXXX XXXX',
          tax_custom: 'カスタム税率（%）',
          tax_custom_rate_label: 'カスタム税率（%）',
          logo_label: 'ロゴ（任意）', logo_hint: 'クリックしてロゴを追加…', logo_remove: '削除',
          toggle_doctype: '書類の種類', doc_invoice: '請求書', doc_quote: '見積書', doc_credit: '返金明細書', doc_proforma: '仮請求書',
          quote_badge: '見積書', credit_badge: '返金明細書', proforma_badge: '仮請求書', quote_validity: 'この見積書は発行日から{n}日間有効です。',
          credit_mention: 'この返金明細書は将来の請求書から差し引かれるクレジットを表します。',
          proforma_mention: 'この仮請求書には契約上の効力はありません。参考情報として提供されます。',
          wm_label: '透かし', wm_none: 'なし', wm_draft: '下書き', wm_paid: '支払済',
          fo_export: '.iloveinvoice', fo_import: '.iloveinvoice',
          fo_clients: '最近の取引先', fo_clients_save: '現在の取引先を保存',
          fo_clients_empty: '保存済みの取引先はありません',
          fo_tip1: 'エクスポート：現在の請求書（発行者、顧客、明細、税金、オプション）を .iloveinvoice ファイルに保存。後で開いたり共有できます。',
          fo_tip2: 'インポート：.iloveinvoice ファイルを読み込み、すべてのデータを復元（現在のフォームを置き換えます）。',
          fo_tip3: '取引先：現在の顧客をローカルアドレス帳に保存し、ワンクリックで再利用。',
          toast_imported: '✓ ファイルを正常にインポートしました。', toast_import_err: '❌ ファイルが無効または破損しています。',
          toast_client_saved: '✓ 取引先を保存しました。', toast_exported: '✓ .iloveinvoice ファイルをエクスポートしました。',
          history_title: '請求書履歴', history_export_csv: 'CSVエクスポート', history_empty: '保存された請求書はありません。', history_load: '読み込む', history_duplicate: '複製', history_delete: '削除', history_status_draft: '下書き', history_status_sent: '送信済み', history_status_paid: '支払済み', toast_history_saved: '✓ 履歴に保存しました。', toast_history_loaded: '✓ 請求書を読み込みました。', toast_history_duplicated: '✓ 請求書を複製しました。', toast_history_deleted: '✓ エントリを削除しました。',
          deposit_toggle: '前払いを要求しますか？', deposit_mode_percent: '%', deposit_mode_fixed: '固定金額',
          deposit_value: '金額・割合', lbl_deposit_amount: '前払金', lbl_balance_due: '残額',
          lbl_cont_next: '↓ 次のページに続く',
          select_country: '国と税制', select_lang: '表示言語', search_country: '国を検索...', select_country_recent: '最近',
          discount_global_label: '全体割引',
          discount_global_amount: '金額',
          tva_line_global: '全体税率',
          toast_client_name: '⚠️ 取引先名を入力してください。',
          toast_catalog_saved: '✓ 品目をカタログに保存しました。',
          toast_duplicate_number: '⚠️ この番号の請求書がすでに履歴に存在します。',
          lbl_issuer: '発行者',
          lbl_discount: '割引',
          custom_fields_label: 'カスタムフィールド', custom_fields_add: '+ フィールドを追加', custom_field_placeholder_label: 'ラベル（例：発注番号）', custom_field_placeholder_value: '値',
        }
      };

      /* ══════════════════════════════════════════
         COUNTRIES CONFIG — see countries.js
      ══════════════════════════════════════════ */

      const LANGUAGES = {
        fr: { nativeName: 'Français',    flag: 'fr' },
        en: { nativeName: 'English',     flag: 'gb' },
        de: { nativeName: 'Deutsch',     flag: 'de' },
        it: { nativeName: 'Italiano',    flag: 'it' },
        es: { nativeName: 'Español',     flag: 'es' },
        pt: { nativeName: 'Português',   flag: 'pt' },
        nl: { nativeName: 'Nederlands',  flag: 'nl' },
        ja: { nativeName: '日本語',       flag: 'jp' },
        sv: { nativeName: 'Svenska',     flag: 'se' },
        pl: { nativeName: 'Polski',      flag: 'pl' },
      };

      const ID_FORMATTERS = {
        SIRET: r => { const d = r.replace(/\D/g, '').slice(0, 14); return d.replace(/(\d{3})(\d{3})(\d{3})(\d{0,5})/, (_, a, b, c, e) => [a, b, c, e].filter(Boolean).join(' ')).trim(); },
        SIREN: r => { const d = r.replace(/\D/g, '').slice(0, 9); return d.replace(/(\d{3})(\d{3})(\d{0,3})/, (_, a, b, c) => [a, b, c].filter(Boolean).join(' ')).trim(); },
        EIN: r => { const d = r.replace(/\D/g, '').slice(0, 9); return d.length > 2 ? d.slice(0, 2) + '-' + d.slice(2) : d; },
        VAT_GB: r => { const d = r.replace(/[^0-9A-Za-z]/g, '').toUpperCase(); return d.startsWith('GB') ? d.slice(0, 14) : (d ? 'GB' + d.slice(0, 12) : ''); },
        UST_DE: r => { const d = r.replace(/[^0-9]/g, '').slice(0, 9); return d ? 'DE' + d : ''; },
        PIVA_IT: r => r.replace(/\D/g, '').slice(0, 11),
        NIF_ES: r => r.replace(/[^0-9A-Za-z]/g, '').slice(0, 9).toUpperCase(),
        BCE_BE: r => { const d = r.replace(/\D/g, '').slice(0, 10); return d.replace(/(\d{4})(\d{3})(\d{3})/, (_, a, b, c) => [a, b, c].filter(Boolean).join('.')).trim(); },
        TVA_BE: r => { const d = r.replace(/[^0-9A-Za-z]/g, '').toUpperCase(); return d.startsWith('BE') ? d.slice(0, 14) : (d ? 'BE' + d.slice(0, 12) : ''); },
        UID_CH: r => { const d = r.replace(/\D/g, '').slice(0, 9); return d ? 'CHE-' + d.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3') : ''; },
        ABN_AU: r => { const d = r.replace(/\D/g, '').slice(0, 11); return d.replace(/(\d{2})(\d{3})(\d{3})(\d{0,3})/, (_, a, b, c, e) => [a, b, c, e].filter(Boolean).join(' ')).trim(); },
        BTW_NL: r => { const d = r.replace(/[^0-9A-Za-z]/g, '').toUpperCase(); return d.startsWith('NL') ? d.slice(0, 14) : (d ? 'NL' + d.slice(0, 12) : ''); },
        CNPJ_BR: r => { const d = r.replace(/\D/g, '').slice(0, 14); if (d.length <= 2) return d; if (d.length <= 5) return d.slice(0, 2) + '.' + d.slice(2); if (d.length <= 8) return d.slice(0, 2) + '.' + d.slice(2, 5) + '.' + d.slice(5); if (d.length <= 12) return d.slice(0, 2) + '.' + d.slice(2, 5) + '.' + d.slice(5, 8) + '/' + d.slice(8); return d.slice(0, 2) + '.' + d.slice(2, 5) + '.' + d.slice(5, 8) + '/' + d.slice(8, 12) + '-' + d.slice(12); },
        JP_T: r => { const d = r.replace(/\D/g, '').slice(0, 13); return d ? 'T' + d : ''; },
        RFC_MX: r => r.replace(/[^0-9A-Za-z&Ññ]/g, '').slice(0, 13).toUpperCase(),
        ATU_AT: r => { const d = r.replace(/\D/g, '').slice(0, 8); return d ? 'ATU' + d : ''; },
        TVA_LU: r => { const d = r.replace(/\D/g, '').slice(0, 8); return d ? 'LU' + d : ''; },
        GSTIN_IN: r => r.replace(/[^0-9A-Za-z]/g, '').slice(0, 15).toUpperCase(),
        UEN_SG: r => r.replace(/[^0-9A-Za-z]/g, '').slice(0, 10).toUpperCase(),
        VAT_ZA: r => r.replace(/\D/g, '').slice(0, 10),
        SE_ORG: r => { const d = r.replace(/\D/g, '').slice(0, 10); return d.length > 6 ? d.slice(0, 6) + '-' + d.slice(6) : d; },
        NIP_PL: r => { const d = r.replace(/\D/g, '').slice(0, 10); if (d.length <= 3) return d; if (d.length <= 6) return d.slice(0, 3) + '-' + d.slice(3); if (d.length <= 8) return d.slice(0, 3) + '-' + d.slice(3, 6) + '-' + d.slice(6); return d.slice(0, 3) + '-' + d.slice(3, 6) + '-' + d.slice(6, 8) + '-' + d.slice(8); },
        YTUNNUS: r => { const d = r.replace(/\D/g, '').slice(0, 8); return d.length > 7 ? d.slice(0, 7) + '-' + d.slice(7) : d; },
        BRN_KR: r => { const d = r.replace(/\D/g, '').slice(0, 10); return d.length > 5 ? d.slice(0, 3) + '-' + d.slice(3, 5) + '-' + d.slice(5) : d.length > 3 ? d.slice(0, 3) + '-' + d.slice(3) : d; },
        NPWP_ID: r => { const d = r.replace(/\D/g, '').slice(0, 15); if (d.length <= 2) return d; if (d.length <= 5) return d.slice(0, 2) + '.' + d.slice(2); if (d.length <= 8) return d.slice(0, 2) + '.' + d.slice(2, 5) + '.' + d.slice(5); if (d.length <= 9) return d.slice(0, 2) + '.' + d.slice(2, 5) + '.' + d.slice(5, 8) + '.' + d.slice(8); if (d.length <= 12) return d.slice(0, 2) + '.' + d.slice(2, 5) + '.' + d.slice(5, 8) + '.' + d.slice(8, 9) + '-' + d.slice(9); return d.slice(0, 2) + '.' + d.slice(2, 5) + '.' + d.slice(5, 8) + '.' + d.slice(8, 9) + '-' + d.slice(9, 12) + '.' + d.slice(12); },
        NIT_CO: r => { const d = r.replace(/\D/g, '').slice(0, 10); if (d.length <= 9) return d; return d.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + d.slice(-1); },
        RUT_CL: r => { const d = r.replace(/[^0-9Kk]/g, '').slice(0, 9).toUpperCase(); if (d.length <= 1) return d; const body = d.slice(0, -1); const check = d.slice(-1); return body.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + check; },
        CUIT_AR: r => { const d = r.replace(/\D/g, '').slice(0, 11); if (d.length <= 2) return d; if (d.length <= 10) return d.slice(0, 2) + '-' + d.slice(2); return d.slice(0, 2) + '-' + d.slice(2, 10) + '-' + d.slice(10); },
        FREE: r => r,
        FREE8: r => r.replace(/\D/g, '').slice(0, 8),
        FREE9: r => r.replace(/\D/g, '').slice(0, 9),
      };

      /* ══════════════════════════════════════════
         STATE
      ══════════════════════════════════════════ */
      let lang = 'en';
      let langOverride = false;
      let country = 'GB';        // ISO country code — independent of lang
      let lines = [{ desc: '', qty: 1, pu: 0, unit: '', discount: 0, discountType: '%', tvaRate: null }];
      let docType = 'invoice';   // 'invoice' | 'quote' | 'credit' | 'proforma'
      let watermark = 'none';      // 'none' | 'draft' | 'paid'
      let logoB64 = null;        // base64 data URL or null
      let deposit = { enabled: false, mode: 'percent', value: 0 }; // { enabled, mode: 'percent'|'fixed', value }
      let tvaAdvanced = false;   // toggle for per-line tax rates
      let discountGlobal = { enabled: false, type: '%', value: 0 };
      let customFields = []; // [{label, value}] — custom B2B fields shown in invoice header
      let accentColor = '#4f6ef7'; // main document color (header, badge, accent line)
      let invFont = 'Inter';       // PDF font: 'Inter' | 'Roboto' | 'Lato' | 'Poppins'
      let invTemplate = 'modern';  // 'modern' | 'classic' | 'bold' | 'compact'

      /* ══════════════════════════════════════════
         CATALOG HELPERS
      ══════════════════════════════════════════ */
      const LS_CATALOG = 'iloveinvoice_catalog_v1';
      function getCatalog() {
        try {
          const cat = localStorage.getItem(LS_CATALOG);
          return cat ? JSON.parse(cat) : [];
        } catch { return []; }
      }
      function saveCatalog(items) {
        safeSetItem(LS_CATALOG, JSON.stringify(items.slice(0, 50)));
      }
      function addToCatalog(desc, unit, pu) {
        if (!desc || !desc.trim()) return;
        const cat = getCatalog();
        const exists = cat.some(c => c.label.toLowerCase() === desc.toLowerCase());
        if (!exists) {
          cat.unshift({ label: desc.trim(), unit, pu });
          saveCatalog(cat);
        }
      }

      /* ══════════════════════════════════════════
         UTILS
      ══════════════════════════════════════════ */
      const $ = id => document.getElementById(id);
      const val = id => ($(id)?.value ?? '').trim();
      const t = k => {
        const ci = COUNTRIES[country]?.i18n;
        return ci?.[lang]?.[k] ?? ci?.fr?.[k] ?? T[lang]?.[k] ?? T.fr[k] ?? k;
      };
      function fmt(n) {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const num = n.toLocaleString(cfg.currencyLocale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return cfg.currencyFormat === 'left' ? cfg.currencySymbol + '\u00A0' + num : num + '\u00A0' + cfg.currencySymbol;
      }

      function formatDateLocale(iso) {
        if (!iso) return '—';
        const [y, m, d] = iso.split('-');
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const parts = { d, m, y };
        return cfg.dateOrder.map(k => parts[k]).join(cfg.dateSeparator);
      }
      function suggestInvoiceNumber() {
        const now = new Date();
        const y = now.getFullYear(), m = String(now.getMonth() + 1).padStart(2, '0');
        const seq = parseInt(localStorage.getItem(`iloveinvoice_seq_${y}_${m}`) || '0') + 1;
        return `${y}-${m}-${String(seq).padStart(3, '0')}`;
      }
      function toast(msg, dur = 3200) {
        $('toast-msg').textContent = msg;
        const el = $('toast');
        el.classList.add('show');
        clearTimeout(el._t);
        el._t = setTimeout(() => el.classList.remove('show'), dur);
      }
      function safeSetItem(key, value) {
        try {
          localStorage.setItem(key, value);
          return true;
        } catch (e) {
          if (e instanceof DOMException && (
            e.code === 22 || e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
          )) {
            toast('⚠️ Stockage plein — supprimez des factures ou le logo pour libérer de l\'espace.', 5000);
            console.warn('[iloveinvoice] localStorage quota exceeded for key:', key);
          }
          return false;
        }
      }
      const MAX_LOGO_PX = 400;
      function resizeLogoBase64(dataUrl, callback) {
        const img = new Image();
        img.onload = () => {
          const scale = Math.min(1, MAX_LOGO_PX / Math.max(img.width, img.height));
          const w = Math.round(img.width * scale);
          const h = Math.round(img.height * scale);
          const canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          callback(canvas.toDataURL('image/png', 0.9));
        };
        img.onerror = () => callback(dataUrl);
        img.src = dataUrl;
      }

      // ── CDN URLs ────────────────────────────────────────────
      const CDN_HTML2PDF = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      const CDN_PAKO     = 'https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.min.js';
      const _loadedScripts = {};
      function loadScript(src) {
        if (_loadedScripts[src]) return _loadedScripts[src];
        _loadedScripts[src] = new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = src;
          s.onload = resolve;
          s.onerror = () => reject(new Error(`Failed to load: ${src}`));
          document.head.appendChild(s);
        });
        return _loadedScripts[src];
      }

      function esc(s) {
        if (s == null) return '';
        return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;');
      }
      function safeUrl(url) {
        if (!url) return '';
        const s = String(url).trim();
        if (/^(javascript|data|vbscript):/i.test(s)) return '#';
        if (/^(mailto:|tel:)/i.test(s)) return esc(s);
        if (/^https?:\/\//i.test(s)) return esc(s);
        return esc('https://' + s);
      }
      function flagEmoji(iso2) {
        if (!iso2) return '🌐';
        return iso2.toUpperCase().replace(/./g,
          c => String.fromCodePoint(0x1F1E6 - 65 + c.charCodeAt(0))
        );
      }
      function calcLineAmount(ln) {
        const base = (parseFloat(ln.qty) || 0) * (parseFloat(ln.pu) || 0);
        if (!ln.discount) return base;
        return ln.discountType === '%'
          ? base * (1 - ln.discount / 100)
          : Math.max(0, base - ln.discount);
      }

      /* ══════════════════════════════════════════
         FLOATING LABELS
      ══════════════════════════════════════════ */
      function syncFilled(el) {
        if (el && el.value !== '' && el.value !== ' ') el.classList.add('is-filled');
        else if (el) el.classList.remove('is-filled');
      }
      function initFL() {
        document.querySelectorAll('.fl-input').forEach(el => {
          syncFilled(el);
          el.addEventListener('input', () => syncFilled(el));
          el.addEventListener('change', () => syncFilled(el));
        });
      }

      /* ══════════════════════════════════════════
         localStorage — EMETTEUR ONLY
      ══════════════════════════════════════════ */
      const LS = 'iloveinvoice_emetteur_v1';

      function saveEmetteur() {
        safeSetItem(LS, JSON.stringify({
          name: val('e-name'), siret: val('e-siret'), email: val('e-email'), address: val('e-address'), web: val('e-web'),
          logo: logoB64 || null, country: country
        }));
        const b = $('saved-badge');
        b.textContent = t('saved');
        b.classList.remove('hidden');
        clearTimeout(b._t);
        b._t = setTimeout(() => b.classList.add('hidden'), 2500);
      }
      function loadEmetteur() {
        try {
          const d = JSON.parse(localStorage.getItem(LS));
          if (!d) return;
          if (d.country && COUNTRIES[d.country]) {
            setCountry(d.country);
          }
          if (d.name) { $('e-name').value = d.name; syncFilled($('e-name')); }
          if (d.siret) { $('e-siret').value = d.siret; syncFilled($('e-siret')); }
          if (d.email) { $('e-email').value = d.email; syncFilled($('e-email')); }
          if (d.address) { $('e-address').value = d.address; syncFilled($('e-address')); }
          if (d.web) { $('e-web').value = d.web; syncFilled($('e-web')); }
          if (d.logo) { logoB64 = d.logo; applyLogoUI(); }
        } catch (e) { }
      }
      function clearEmetteur() {
        logoB64 = null;
        applyLogoUI();
        localStorage.removeItem(LS);
        ['e-name', 'e-siret', 'e-email', 'e-address', 'e-web'].forEach(id => { $(id).value = ''; syncFilled($(id)); });
        toast(t('toast_cleared'));
        renderPreview();
      }

      /* ══════════════════════════════════════════
         LOGO HELPERS
      ══════════════════════════════════════════ */
      function applyLogoUI() {
        const zone = $('logo-drop-zone');
        const thumb = $('logo-thumb-preview');
        const hint = $('logo-drop-hint');
        if (logoB64) {
          thumb.src = logoB64;
          thumb.classList.remove('hidden');
          hint.style.display = 'none';
          zone.classList.add('has-logo');
        } else {
          thumb.src = '';
          thumb.classList.add('hidden');
          hint.style.display = '';
          zone.classList.remove('has-logo');
        }
        renderPreview();
      }
      function removeLogo() {
        logoB64 = null;
        $('logo-file-input').value = '';
        applyLogoUI();
        saveEmetteur();
      }

      /* ══════════════════════════════════════════
         WATERMARK HELPERS
      ══════════════════════════════════════════ */
      function applyWatermark(wm) {
        watermark = wm;
        ['none', 'draft', 'paid'].forEach(v => {
          const btn = $(`wm-btn-${v}`);
          if (!btn) return;
          btn.className = `wm-pill-btn${v === wm ? ` active-${v}` : ''}`;
        });
        renderPreview();
      }
      function wmSVG() {
        // Auto-watermark for proforma
        if (docType === 'proforma') {
          const fill = 'rgba(100,116,139,0.12)';
          return `<div class="inv-page-wm"><svg viewBox="0 0 794 1123" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      transform="rotate(-40,397,561)" fill="${fill}" font-size="110" font-weight="900"
      font-family="Inter,Arial,sans-serif" letter-spacing="18">${esc(t('proforma_badge'))}</text>
  </svg></div>`;
        }
        if (watermark === 'none') return '';
        const isDraft = watermark === 'draft';
        const txt = isDraft ? t('wm_draft') : t('wm_paid');
        const fill = isDraft ? 'rgba(100,116,139,0.13)' : 'rgba(16,185,129,0.14)';
        return `<div class="inv-page-wm"><svg viewBox="0 0 794 1123" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      transform="rotate(-40,397,561)" fill="${fill}" font-size="110" font-weight="900"
      font-family="Inter,Arial,sans-serif" letter-spacing="18">${esc(txt)}</text>
  </svg></div>`;
      }

      /* ══════════════════════════════════════════
         DOC TYPE HELPERS
      ══════════════════════════════════════════ */
      function getDocBadge() {
        if (docType === 'quote') return t('quote_badge');
        if (docType === 'credit') return t('credit_badge');
        if (docType === 'proforma') return t('proforma_badge');
        return t('inv_badge');
      }
      function setDocType(dt) {
        docType = dt;
        $('doc-btn-invoice').classList.toggle('active', dt === 'invoice');
        $('doc-btn-quote').classList.toggle('active', dt === 'quote');
        $('doc-btn-credit').classList.toggle('active', dt === 'credit');
        $('doc-btn-proforma').classList.toggle('active', dt === 'proforma');
        renderPreview();
      }

      /* ══════════════════════════════════════════
         PAGE BUILDER — multi-page A4
      ══════════════════════════════════════════ */
      /*
        A4 canvas: 794×1123px, padding 48px top/bottom, 52px left/right
        Inner height = 1123 - 96 = 1027px
        Budget constants (measured in px):
      */
      const PG = {
        H: 1027,   // inner content height
        ROW: 24,   // one table row (padding 6px top+bottom + 11px font + lineheight)
        TH: 30,   // table header row
        FOOTER: 72,   // footer block (border + tva mention + penalties + siren)
        TOTALS: 114,   // totals block (subtotal + tva + total box)
        PAYMENT: 44,   // payment row
        NOTE: 44,   // note row (1-liner; grows but 44 is safe default)
        CONT_HEAD: 80,   // continuation page mini-header (issuer + client + invoice info)
        PAGE_NUM: 18,   // page number line at bottom
      };

      function buildHeaderHTML(isFirst, pageNum, totalPages) {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const badgeTxt = getDocBadge();
        const numTxt = val('inv-number') || '—';
        const dateTxt = formatDateLocale(val('inv-date'));
        const dueTxt = formatDateLocale(val('inv-due'));
        const typeVal = $('inv-type').value;
        const tmap = { services: t('type_services'), goods: t('type_goods'), mixed: t('type_mixed') };
        const typeTxt = typeVal === 'custom' ? (val('inv-type-custom') || t('type_custom')) : (tmap[typeVal] || '');
        const ref = val('inv-ref');
        const pageLabel = totalPages > 1 ? `<div style="position:absolute;bottom:-18px;right:0;font-size:8px;color:#cbd5e1;">${pageNum} / ${totalPages}</div>` : '';

        if (!isFirst) {
          // Continuation page header with issuer & client info
          const eName = val('e-name') || t('issuer_name_placeholder');
          const eAddr = (val('e-address') || '').split('\n')[0] || ''; // first line only
          const cName = val('c-name') || '—';
          const cAddr = (val('c-billing') || '').split('\n')[0] || ''; // first line only
          return `
      <div style="position:relative;margin-bottom:14px;padding-bottom:10px;border-bottom:1.5px solid #e2e8f0;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:2px;">
          <div style="flex:1;min-width:0;">
            <div style="font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:2px;">${esc(t('lbl_issuer'))}</div>
            <div style="font-size:11px;font-weight:600;color:#1e293b;">${esc(eName)}</div>
            <div style="font-size:9px;color:#64748b;">${esc(eAddr)}</div>
          </div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:2px;">${esc(t('lbl_billed'))}</div>
            <div style="font-size:11px;font-weight:600;color:#1e293b;">${esc(cName)}</div>
            <div style="font-size:9px;color:#64748b;">${esc(cAddr)}</div>
          </div>
          <div style="flex-shrink:0;text-align:right;">
            <div style="font-size:8px;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">${esc(t('lbl_num'))}</div>
            <div style="font-size:12px;font-weight:700;color:#1e293b;font-family:monospace;margin-bottom:6px;">${esc(numTxt)}</div>
            <div style="background:${accentColor};color:#fff;padding:2px 8px;border-radius:5px;font-size:9px;font-weight:700;letter-spacing:.04em;display:inline-block;">${esc(badgeTxt)}</div>
          </div>
        </div>
        ${pageLabel}
      </div>`;
        }

        // Shared data for all templates
        const d = {
          cfg, badgeTxt, numTxt, dateTxt, dueTxt, typeTxt, ref, pageLabel,
          eName: val('e-name') || t('issuer_name_placeholder'),
          logoHTML: logoB64 ? `<img src="${logoB64}" alt="" style="display:block;max-height:56px;max-width:180px;object-fit:contain;margin-bottom:8px;border-radius:4px;" />` : '',
          siretHTML: val('e-siret') ? `${esc(cfg.issuerIdLabel)} ${esc(val('e-siret'))}` : '',
          addrHTML: val('e-address') ? esc(val('e-address')) : '',
          emailE: val('e-email') ? esc(val('e-email')) : '',
          webHTML: val('e-web') ? safeUrl(val('e-web')) : '',
          cName: val('c-name') || '—',
          cBilling: val('c-billing') || '',
          sirenC: val('c-siren') ? `${esc(cfg.clientIdLabel)} ${esc(val('c-siren'))}` : '',
          sdiC: (country === 'IT' && val('c-sdi')) ? `SDI: ${esc(val('c-sdi'))}` : '',
          emailC: val('c-email') ? esc(val('c-email')) : '',
          delAddr: ($('toggle-delivery').checked && val('c-delivery')) ? val('c-delivery') : '',
          cfHTML: customFields.filter(f => f.label || f.value).map(f => `<div style="display:flex;gap:4px;align-items:baseline;"><span style="font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#94a3b8;">${esc(f.label)}</span><span style="font-size:10px;color:#374151;font-weight:500;">${esc(f.value)}</span></div>`).join(''),
        };
        const cfBlock = d.cfHTML ? `<div style="display:flex;flex-wrap:wrap;gap:6px 16px;margin-bottom:16px;">${d.cfHTML}</div>` : '';

        if (invTemplate === 'classic') return buildHeaderClassic(d, cfBlock);
        if (invTemplate === 'bold') return buildHeaderBold(d, cfBlock);
        if (invTemplate === 'compact') return buildHeaderCompact(d, cfBlock);
        return buildHeaderModern(d, cfBlock);
      }

      // ── MODERN (default) ──
      function buildHeaderModern(d, cfBlock) {
        const typeBadge = d.typeTxt ? `<div style="margin-top:4px;font-size:8.5px;background:#f0f4ff;color:${accentColor};border:1px solid #c7d2fe;padding:2px 8px;border-radius:4px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">${esc(d.typeTxt)}</div>` : '';
        const refHTML = d.ref ? `<div style="margin-bottom:20px;"><span style="font-size:9px;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;font-weight:600;">${esc(t('lbl_ref'))}</span><span style="font-size:10.5px;color:#374151;font-style:italic;">${esc(d.ref)}</span></div>` : '';
        const deliveryBlock = d.delAddr ? `<div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;"><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:8px;">${esc(t('lbl_shipped'))}</div><div style="font-size:10px;color:#475569;line-height:1.6;white-space:pre-line;">${esc(d.delAddr)}</div></div>` : '';
        return `
    <div style="position:relative;display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px;">
      <div style="flex:1;max-width:52%;">
        ${d.logoHTML}
        <div style="font-size:20px;font-weight:700;color:#1e293b;letter-spacing:-.02em;line-height:1.2;margin-bottom:4px;">${esc(d.eName)}</div>
        ${d.siretHTML ? `<div style="font-size:9.5px;color:#64748b;margin-bottom:8px;font-weight:500;">${d.siretHTML}</div>` : ''}
        ${d.addrHTML ? `<div style="font-size:10px;color:#475569;line-height:1.6;white-space:pre-line;">${d.addrHTML}</div>` : ''}
        ${d.emailE ? `<div style="font-size:10px;color:${accentColor};margin-top:3px;">${d.emailE}</div>` : ''}
        ${d.webHTML ? `<div style="font-size:10px;color:#64748b;margin-top:1px;">${d.webHTML}</div>` : ''}
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div style="background:${accentColor};color:#fff;display:inline-block;padding:6px 16px 5px;border-radius:8px;margin-bottom:10px;">
          <span style="font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;">${esc(d.badgeTxt)}</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:3px;align-items:flex-end;">
          <div style="display:flex;gap:8px;align-items:center;"><span style="font-size:9px;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;">${esc(t('lbl_num'))}</span><span style="font-size:13px;font-weight:700;color:#1e293b;font-family:monospace;">${esc(d.numTxt)}</span></div>
          <div style="display:flex;gap:8px;align-items:center;"><span style="font-size:9px;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;">${esc(t('lbl_date'))}</span><span style="font-size:10.5px;font-weight:600;color:#374151;">${esc(d.dateTxt)}</span></div>
          <div style="display:flex;gap:8px;align-items:center;"><span style="font-size:9px;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;">${esc(t('lbl_due'))}</span><span style="font-size:10.5px;font-weight:600;color:#ef4444;">${esc(d.dueTxt)}</span></div>
          ${typeBadge}
        </div>
        ${d.pageLabel}
      </div>
    </div>
    <div style="height:1.5px;background:linear-gradient(90deg,${accentColor} 0%,#c7d2fe 60%,transparent 100%);margin-bottom:24px;"></div>
    ${refHTML}
    <div style="display:flex;gap:16px;margin-bottom:28px;">
      <div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;">
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:8px;">${esc(t('lbl_billed'))}</div>
        <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:2px;">${esc(d.cName)}</div>
        ${d.sirenC ? `<div style="font-size:9px;color:#64748b;margin-bottom:5px;">${d.sirenC}</div>` : ''}${d.sdiC ? `<div style="font-size:9px;color:#64748b;margin-bottom:3px;">${d.sdiC}</div>` : ''}
        <div style="font-size:10px;color:#475569;line-height:1.6;white-space:pre-line;">${esc(d.cBilling)}</div>
        ${d.emailC ? `<div style="font-size:9.5px;color:${accentColor};margin-top:3px;">${d.emailC}</div>` : ''}
      </div>
      ${deliveryBlock}
    </div>
    ${cfBlock}`;
      }

      // ── CLASSIC — minimal, black/white, thin lines ──
      function buildHeaderClassic(d, cfBlock) {
        const refHTML = d.ref ? `<div style="margin-bottom:14px;font-size:10px;color:#374151;"><span style="font-weight:600;color:#6b7280;">${esc(t('lbl_ref'))}</span> ${esc(d.ref)}</div>` : '';
        const deliveryBlock = d.delAddr ? `<div style="flex:1;border-left:2px solid #e5e7eb;padding-left:14px;"><div style="font-size:8px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:#9ca3af;margin-bottom:6px;">${esc(t('lbl_shipped'))}</div><div style="font-size:9.5px;color:#374151;line-height:1.6;white-space:pre-line;">${esc(d.delAddr)}</div></div>` : '';
        return `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;padding-bottom:16px;border-bottom:2px solid #111827;">
      <div style="flex:1;max-width:50%;">
        ${d.logoHTML}
        <div style="font-size:18px;font-weight:400;color:#111827;letter-spacing:.02em;margin-bottom:4px;">${esc(d.eName)}</div>
        ${d.siretHTML ? `<div style="font-size:8.5px;color:#6b7280;margin-bottom:4px;">${d.siretHTML}</div>` : ''}
        ${d.addrHTML ? `<div style="font-size:9.5px;color:#374151;line-height:1.6;white-space:pre-line;">${d.addrHTML}</div>` : ''}
        ${d.emailE ? `<div style="font-size:9.5px;color:#374151;margin-top:2px;">${d.emailE}</div>` : ''}
        ${d.webHTML ? `<div style="font-size:9.5px;color:#6b7280;margin-top:1px;">${d.webHTML}</div>` : ''}
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div style="font-size:22px;font-weight:300;color:#111827;text-transform:uppercase;letter-spacing:.15em;margin-bottom:12px;">${esc(d.badgeTxt)}</div>
        <div style="font-size:9px;color:#6b7280;margin-bottom:2px;">${esc(t('lbl_num'))}: <span style="font-weight:600;color:#111827;font-family:monospace;">${esc(d.numTxt)}</span></div>
        <div style="font-size:9px;color:#6b7280;margin-bottom:2px;">${esc(t('lbl_date'))}: <span style="color:#111827;">${esc(d.dateTxt)}</span></div>
        <div style="font-size:9px;color:#6b7280;">${esc(t('lbl_due'))}: <span style="color:#dc2626;font-weight:600;">${esc(d.dueTxt)}</span></div>
        ${d.typeTxt ? `<div style="margin-top:6px;font-size:8px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;">${esc(d.typeTxt)}</div>` : ''}
        ${d.pageLabel}
      </div>
    </div>
    ${refHTML}
    <div style="display:flex;gap:20px;margin-bottom:22px;">
      <div style="flex:1;border-left:2px solid #e5e7eb;padding-left:14px;">
        <div style="font-size:8px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:#9ca3af;margin-bottom:6px;">${esc(t('lbl_billed'))}</div>
        <div style="font-size:11px;font-weight:600;color:#111827;margin-bottom:2px;">${esc(d.cName)}</div>
        ${d.sirenC ? `<div style="font-size:8.5px;color:#6b7280;margin-bottom:3px;">${d.sirenC}</div>` : ''}${d.sdiC ? `<div style="font-size:8.5px;color:#6b7280;margin-bottom:3px;">${d.sdiC}</div>` : ''}
        <div style="font-size:9.5px;color:#374151;line-height:1.6;white-space:pre-line;">${esc(d.cBilling)}</div>
        ${d.emailC ? `<div style="font-size:9px;color:#374151;margin-top:2px;">${d.emailC}</div>` : ''}
      </div>
      ${deliveryBlock}
    </div>
    ${cfBlock}`;
      }

      // ── BOLD — full-color header band ──
      function buildHeaderBold(d, cfBlock) {
        const refHTML = d.ref ? `<div style="margin-bottom:18px;"><span style="font-size:9px;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;font-weight:600;">${esc(t('lbl_ref'))}</span> <span style="font-size:10.5px;color:#374151;">${esc(d.ref)}</span></div>` : '';
        const deliveryBlock = d.delAddr ? `<div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;"><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:8px;">${esc(t('lbl_shipped'))}</div><div style="font-size:10px;color:#475569;line-height:1.6;white-space:pre-line;">${esc(d.delAddr)}</div></div>` : '';
        return `
    <div style="background:${accentColor};margin:-48px -52px 28px;padding:28px 52px 22px;color:#fff;display:flex;justify-content:space-between;align-items:flex-start;">
      <div style="flex:1;max-width:55%;">
        ${d.logoHTML}
        <div style="font-size:22px;font-weight:800;letter-spacing:-.02em;line-height:1.2;margin-bottom:4px;">${esc(d.eName)}</div>
        ${d.siretHTML ? `<div style="font-size:9px;opacity:.8;margin-bottom:4px;">${d.siretHTML}</div>` : ''}
        ${d.addrHTML ? `<div style="font-size:9.5px;opacity:.85;line-height:1.6;white-space:pre-line;">${d.addrHTML}</div>` : ''}
        ${d.emailE ? `<div style="font-size:9.5px;opacity:.9;margin-top:2px;">${d.emailE}</div>` : ''}
        ${d.webHTML ? `<div style="font-size:9.5px;opacity:.7;margin-top:1px;">${d.webHTML}</div>` : ''}
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div style="font-size:28px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;margin-bottom:12px;opacity:.95;">${esc(d.badgeTxt)}</div>
        <div style="font-size:9.5px;opacity:.8;margin-bottom:2px;">${esc(t('lbl_num'))}: <span style="font-weight:700;font-family:monospace;">${esc(d.numTxt)}</span></div>
        <div style="font-size:9.5px;opacity:.8;margin-bottom:2px;">${esc(t('lbl_date'))}: ${esc(d.dateTxt)}</div>
        <div style="font-size:9.5px;opacity:.8;">${esc(t('lbl_due'))}: <span style="font-weight:700;">${esc(d.dueTxt)}</span></div>
        ${d.typeTxt ? `<div style="margin-top:8px;font-size:8px;background:rgba(255,255,255,.2);display:inline-block;padding:3px 10px;border-radius:4px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">${esc(d.typeTxt)}</div>` : ''}
        ${d.pageLabel}
      </div>
    </div>
    ${refHTML}
    <div style="display:flex;gap:16px;margin-bottom:28px;">
      <div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;">
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:8px;">${esc(t('lbl_billed'))}</div>
        <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:2px;">${esc(d.cName)}</div>
        ${d.sirenC ? `<div style="font-size:9px;color:#64748b;margin-bottom:5px;">${d.sirenC}</div>` : ''}${d.sdiC ? `<div style="font-size:9px;color:#64748b;margin-bottom:3px;">${d.sdiC}</div>` : ''}
        <div style="font-size:10px;color:#475569;line-height:1.6;white-space:pre-line;">${esc(d.cBilling)}</div>
        ${d.emailC ? `<div style="font-size:9.5px;color:${accentColor};margin-top:3px;">${d.emailC}</div>` : ''}
      </div>
      ${deliveryBlock}
    </div>
    ${cfBlock}`;
      }

      // ── COMPACT — dense, smaller fonts, more rows per page ──
      function buildHeaderCompact(d, cfBlock) {
        const refHTML = d.ref ? `<span style="font-size:8px;color:#6b7280;margin-left:12px;">${esc(t('lbl_ref'))} ${esc(d.ref)}</span>` : '';
        const deliveryBlock = d.delAddr ? `<div style="flex:1;"><div style="font-size:7.5px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:4px;">${esc(t('lbl_shipped'))}</div><div style="font-size:8.5px;color:#475569;line-height:1.5;white-space:pre-line;">${esc(d.delAddr)}</div></div>` : '';
        return `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid ${accentColor};">
      <div style="flex:1;max-width:50%;">
        ${d.logoHTML ? d.logoHTML.replace('max-height:56px', 'max-height:36px').replace('max-width:180px', 'max-width:120px') : ''}
        <div style="font-size:14px;font-weight:700;color:#1e293b;margin-bottom:2px;">${esc(d.eName)}</div>
        ${d.siretHTML ? `<div style="font-size:8px;color:#6b7280;">${d.siretHTML}</div>` : ''}
        ${d.addrHTML ? `<div style="font-size:8.5px;color:#475569;line-height:1.4;white-space:pre-line;">${d.addrHTML}</div>` : ''}
        ${d.emailE ? `<div style="font-size:8.5px;color:${accentColor};">${d.emailE}</div>` : ''}
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div style="background:${accentColor};color:#fff;display:inline-block;padding:3px 10px;border-radius:4px;margin-bottom:6px;font-size:10px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;">${esc(d.badgeTxt)}</div>
        <div style="font-size:8.5px;color:#6b7280;">${esc(t('lbl_num'))}: <span style="font-weight:700;color:#1e293b;font-family:monospace;">${esc(d.numTxt)}</span>${refHTML}</div>
        <div style="font-size:8.5px;color:#6b7280;">${esc(t('lbl_date'))}: ${esc(d.dateTxt)} · ${esc(t('lbl_due'))}: <span style="color:#ef4444;font-weight:600;">${esc(d.dueTxt)}</span></div>
        ${d.typeTxt ? `<div style="font-size:7.5px;color:#6b7280;text-transform:uppercase;margin-top:2px;">${esc(d.typeTxt)}</div>` : ''}
        ${d.pageLabel}
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-bottom:12px;">
      <div style="flex:1;">
        <div style="font-size:7.5px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:4px;">${esc(t('lbl_billed'))}</div>
        <div style="font-size:10px;font-weight:700;color:#1e293b;">${esc(d.cName)}</div>
        ${d.sirenC ? `<div style="font-size:8px;color:#6b7280;">${d.sirenC}</div>` : ''}${d.sdiC ? `<div style="font-size:8px;color:#6b7280;">${d.sdiC}</div>` : ''}
        <div style="font-size:8.5px;color:#475569;line-height:1.4;white-space:pre-line;">${esc(d.cBilling)}</div>
        ${d.emailC ? `<div style="font-size:8.5px;color:${accentColor};">${d.emailC}</div>` : ''}
      </div>
      ${deliveryBlock}
    </div>
    ${cfBlock ? cfBlock.replace(/font-size:8\.5px/g, 'font-size:7.5px').replace(/font-size:10px/g, 'font-size:8.5px') : ''}`;
      }

      function buildTableHTML(rowsHTML, isLast) {
        const cont = isLast ? '' : `<tr><td colspan="4" style="text-align:center;font-size:9px;color:#cbd5e1;padding:6px 0;font-style:italic;">${esc(t('lbl_cont_next'))}</td></tr>`;
        const thDesc = esc(t('th_desc')), thQty = esc(t('th_qty')), thPu = esc(t('th_pu')), thAmt = esc(t('th_amt'));
        if (invTemplate === 'classic') return `
    <table class="inv-table" style="width:100%;border-collapse:collapse;margin-bottom:${isLast ? 20 : 0}px;">
      <thead><tr style="border-bottom:2px solid #111827;">
        <th style="text-align:left;width:55%;padding:6px 8px;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#6b7280;">${thDesc}</th>
        <th style="text-align:center;width:10%;padding:6px 4px;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#6b7280;">${thQty}</th>
        <th style="text-align:right;width:17%;padding:6px 4px;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#6b7280;">${thPu}</th>
        <th style="text-align:right;width:18%;padding:6px 8px;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#6b7280;">${thAmt}</th>
      </tr></thead>
      <tbody>${rowsHTML}${cont}</tbody></table>`;
        if (invTemplate === 'bold') return `
    <table class="inv-table" style="width:100%;border-collapse:collapse;margin-bottom:${isLast ? 20 : 0}px;">
      <thead><tr style="background:${accentColor};">
        <th style="text-align:left;width:55%;border-radius:6px 0 0 6px;color:#fff;">${thDesc}</th>
        <th style="text-align:center;width:10%;color:#fff;">${thQty}</th>
        <th style="text-align:right;width:17%;color:#fff;">${thPu}</th>
        <th style="text-align:right;width:18%;border-radius:0 6px 6px 0;color:#fff;">${thAmt}</th>
      </tr></thead>
      <tbody>${rowsHTML}${cont}</tbody></table>`;
        if (invTemplate === 'compact') return `
    <table class="inv-table inv-table-compact" style="width:100%;border-collapse:collapse;margin-bottom:${isLast ? 12 : 0}px;">
      <thead><tr style="background:#f1f5f9;">
        <th style="text-align:left;width:55%;font-size:8px;padding:4px 6px;">${thDesc}</th>
        <th style="text-align:center;width:10%;font-size:8px;padding:4px 4px;">${thQty}</th>
        <th style="text-align:right;width:17%;font-size:8px;padding:4px 4px;">${thPu}</th>
        <th style="text-align:right;width:18%;font-size:8px;padding:4px 6px;">${thAmt}</th>
      </tr></thead>
      <tbody>${rowsHTML}${cont}</tbody></table>`;
        return `
    <table class="inv-table" style="width:100%;border-collapse:collapse;margin-bottom:${isLast ? 20 : 0}px;">
      <thead>
        <tr style="background:#f8fafc;">
          <th style="text-align:left;width:55%;border-radius:6px 0 0 6px;">${thDesc}</th>
          <th style="text-align:center;width:10%;">${thQty}</th>
          <th style="text-align:right;width:17%;">${thPu}</th>
          <th style="text-align:right;width:18%;border-radius:0 6px 6px 0;">${thAmt}</th>
        </tr>
      </thead>
      <tbody>${rowsHTML}${cont}</tbody>
    </table>`;
      }

      function buildFooterHTML(sub, dataLines = []) {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const franchise = $('toggle-tva').checked && cfg.hasExemptMode;

        // Apply global discount
        let discountAmt = 0;
        if (discountGlobal.enabled && sub > 0) {
          discountAmt = discountGlobal.type === '%'
            ? sub * (discountGlobal.value / 100)
            : discountGlobal.value;
          sub = Math.max(0, sub - discountAmt);
        }

        let tvaAmt = 0;
        let total = 0;
        let tvaRow = '';
        let discountRow = discountAmt > 0
          ? `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #f1f5f9;">
       <span style="font-size:10.5px;color:#64748b;">${esc(t('lbl_discount'))}${discountGlobal.type === '%' ? ` (${discountGlobal.value}%)` : ''}</span>
       <span style="font-size:10.5px;font-weight:600;color:#ef4444;">−${fmt(discountAmt)}</span>
     </div>`
          : '';

        if (franchise) {
          total = sub;
        } else if (tvaAdvanced && dataLines.length > 0) {
          // Multi-rate TVA mode: group by rate (normalized to decimal)
          const rateGroups = {};
          dataLines.forEach(l => {
            const lineAmount = calcLineAmount(l);
            // Normalize to decimal: l.tvaRate stores % values (20, 10...) from cfg.taxRates
            const lineRateDecimal = (l.tvaRate !== null && l.tvaRate !== undefined)
              ? (l.tvaRate === 'custom' ? getEffectiveTaxRate() : parseFloat(l.tvaRate) / 100)
              : getEffectiveTaxRate();
            if (!rateGroups[lineRateDecimal]) rateGroups[lineRateDecimal] = 0;
            rateGroups[lineRateDecimal] += lineAmount;
          });

          // Calculate total and build TVA rows
          let totalTVA = 0;
          let tvaRows = '';
          Object.entries(rateGroups).forEach(([rateStr, amount]) => {
            const rateDecimal = parseFloat(rateStr); // already a decimal (e.g. 0.20)
            const vatAmount = amount * rateDecimal;
            totalTVA += vatAmount;
            const ratePct = (rateDecimal * 100).toFixed(cfg.taxRates[0] === 0 ? 1 : 0);
            tvaRows += `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #f1f5f9;">
        <span style="font-size:10.5px;color:#64748b;">${esc(cfg.taxName)} (${ratePct}%)</span>
        <span style="font-size:10.5px;font-weight:600;color:#374151;">${fmt(vatAmount)}</span>
      </div>`;
          });
          tvaAmt = totalTVA;
          total = sub + tvaAmt;
          tvaRow = tvaRows;
        } else {
          // Single rate TVA mode (classic)
          const rate = getEffectiveTaxRate();
          const ratePct = (rate * 100).toFixed(cfg.taxRates[0] === 0 ? 1 : 0);
          tvaAmt = sub * rate;
          total = sub + tvaAmt;
          tvaRow = `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #f1f5f9;">
       <span style="font-size:10.5px;color:#64748b;">${esc(cfg.taxName)} (${ratePct}%)</span>
       <span style="font-size:10.5px;font-weight:600;color:#374151;">${fmt(tvaAmt)}</span>
     </div>`;
        }

        // For credit notes, invert amounts
        const isCreditNote = docType === 'credit';
        if (isCreditNote) {
          sub = -sub;
          tvaAmt = -tvaAmt;
          total = -total;
        }

        // Calculate deposit
        let depositAmt = 0; let balanceDue = total;
        if (deposit.enabled && total > 0) {
          depositAmt = deposit.mode === 'percent' ? total * (deposit.value / 100) : Math.min(deposit.value, total);
          depositAmt = Math.max(0, Math.min(depositAmt, total));
          balanceDue = total - depositAmt;
        }

        const depositRow = (deposit.enabled && depositAmt > 0)
          ? `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #f1f5f9;">
         <span style="font-size:10.5px;color:#64748b;">${esc(t('lbl_deposit_amount'))}${deposit.mode === 'percent' ? ` (${deposit.value}%)` : ''}</span>
         <span style="font-size:10.5px;font-weight:600;color:#f97316;">${fmt(depositAmt)}</span>
       </div>
       <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #f1f5f9;">
         <span style="font-size:10.5px;color:#64748b;">${esc(t('lbl_balance_due'))}</span>
         <span style="font-size:10.5px;font-weight:600;color:#374151;">${fmt(balanceDue)}</span>
       </div>`
          : '';
        const tvaMention = franchise && cfg.hasExemptMode
          ? `<div style="display:inline-block;color:#b45309;background:#fffbeb;padding:4px 10px;border-radius:4px;border:1px solid #fde68a;font-size:9px;font-style:italic;margin-bottom:8px;">${esc(t(cfg.taxExemptMentionKey))}</div>`
          : '';
        const totalLabel = franchise && cfg.hasExemptMode ? t('lbl_total_ht') : t('lbl_total_ttc');

        const pay = val('inv-payment');
        const note = val('inv-note');
        const payHTML = pay
          ? `<div style="margin-bottom:20px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:10px 14px;">
         <span style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#16a34a;">${esc(t('lbl_payment'))}</span>
         <span style="font-size:10px;color:#166534;">${esc(pay)}</span>
       </div>` : '';
        const noteHTML = note
          ? `<div style="margin-bottom:20px;background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:10px 14px;">
         <span style="font-size:10px;color:#92400e;white-space:pre-line;">${esc(note)}</span>
       </div>` : '';
        const siret = val('e-siret');
        const sirenLegal = siret ? `<div style="font-size:8px;color:#cbd5e1;text-align:center;margin-top:4px;">${esc(cfg.issuerIdLabel)} ${esc(siret)} — ${esc(val('e-name'))}</div>` : '';
        let legalText = '';
        if (docType === 'quote') {
          const dateRaw = val('inv-date'), dueRaw = val('inv-due');
          let days = 30;
          if (dateRaw && dueRaw) {
            const diff = Math.round((new Date(dueRaw) - new Date(dateRaw)) / 86400000);
            if (diff > 0) days = diff;
          }
          legalText = t('quote_validity').replace('{n}', days);
        }
        else if (docType === 'credit') legalText = t('credit_mention');
        else if (docType === 'proforma') legalText = t('proforma_mention');
        else {
          legalText = t(cfg.legalMentionKey);
          // Germany: add intra-EU VAT mention when rate is 0% and client has EU VAT number
          if (country === 'DE' && !franchise && getEffectiveTaxRate() === 0 && val('c-siren')) {
            legalText = 'Steuerfreie innergemeinschaftliche Lieferung gemäß §4 Nr. 1b i.V.m. §6a UStG. ' + legalText;
          }
        }

        // Color scheme for total box based on doc type
        let totalBgColor = accentColor;  // user-chosen accent color
        if (docType === 'credit') totalBgColor = '#ef4444';  // red for credit
        if (docType === 'proforma') totalBgColor = '#6b7280';  // grey for proforma

        // Template-specific total box
        const isCompact = invTemplate === 'compact';
        const isClassic = invTemplate === 'classic';
        const fs = isCompact ? '9px' : '10.5px';
        const fsBig = isCompact ? '10px' : '11.5px';
        const fsBigVal = isCompact ? '11px' : '13px';
        const totalBoxStyle = isClassic
          ? `display:flex;justify-content:space-between;padding:6px 0;border-top:2px solid #111827;margin-top:4px;`
          : `display:flex;justify-content:space-between;padding:8px 10px;background:${totalBgColor};border-radius:8px;margin-top:6px;`;
        const totalLabelStyle = isClassic
          ? `font-size:${fsBig};font-weight:700;color:#111827;`
          : `font-size:${fsBig};font-weight:700;color:#e0eaff;`;
        const totalValStyle = isClassic
          ? `font-size:${fsBigVal};font-weight:800;color:#111827;`
          : `font-size:${fsBigVal};font-weight:800;color:#fff;`;
        const mb = isCompact ? '16px' : '24px';

        return `
    <div style="display:flex;justify-content:flex-end;margin-bottom:${mb};">
      <div style="width:240px;">
        <div style="display:flex;justify-content:space-between;padding:${isCompact ? '3px' : '5px'} 0;border-bottom:1px solid ${isClassic ? '#d1d5db' : '#f1f5f9'};">
          <span style="font-size:${fs};color:#64748b;">${esc(t('lbl_subtotal'))}</span>
          <span style="font-size:${fs};font-weight:600;color:#374151;">${fmt(sub + discountAmt)}</span>
        </div>
        ${discountRow}
        ${tvaRow}
        ${depositRow}
        <div style="${totalBoxStyle}">
          <span style="${totalLabelStyle}">${esc(totalLabel)}</span>
          <span style="${totalValStyle}">${fmt(total)}</span>
        </div>
      </div>
    </div>
    ${payHTML}${noteHTML}
    <div style="border-top:1px solid ${isClassic ? '#d1d5db' : '#e2e8f0'};padding-top:${isCompact ? '8px' : '14px'};margin-top:${isCompact ? '8px' : '16px'};text-align:center;">
      ${tvaMention}
      <div style="font-size:${isCompact ? '7.5px' : '8.5px'};color:#94a3b8;line-height:1.6;">${esc(legalText)}</div>
      ${sirenLegal}
    </div>`;
      }

      function buildPages() {
        // Compute grand total subtotal across all lines
        let sub = 0;
        const dataLines = lines.filter(l => l.desc || l.pu > 0);
        dataLines.forEach(l => { sub += calcLineAmount(l); });

        // Estimate footer height
        const franchise = $('toggle-tva').checked;
        const hasPay = !!val('inv-payment');
        const hasNote = !!val('inv-note');
        const footerH = PG.FOOTER + PG.TOTALS + (hasPay ? PG.PAYMENT : 0) + (hasNote ? PG.NOTE : 0) + 30;  // +30 for margins/spacing
        const rowH = invTemplate === 'compact' ? 18 : PG.ROW;  // compact uses smaller rows

        // Estimate page 1 fixed content height
        const hasRef = !!val('inv-ref');
        const hasDel = $('toggle-delivery').checked && !!val('c-delivery');
        const logoH = logoB64 ? (invTemplate === 'compact' ? 40 : 64) : 0;
        // Header block: logo + name + siret + address lines + email + web
        const addrLines = (val('e-address') || '').split('\n').length;
        const compactFactor = invTemplate === 'compact' ? 0.7 : 1;
        const headerH = (logoH + 28 + 16 + (addrLines * 16) + 16 + 16   // emetteur block
          + 32                                                 // divider + margin
          + (hasRef ? 28 : 0)
          + (hasDel ? 100 : 70)) * compactFactor;             // client block(s)
        // Page 1 available for table rows (incl thead) - must reserve space for footer at bottom
        const page1TableH = PG.H - headerH - PG.TH - footerH;
        const page1Rows = Math.max(1, Math.floor(page1TableH / rowH));

        // Continuation page available rows
        const contTableH = PG.H - PG.CONT_HEAD - PG.TH;
        const contRowsMax = Math.floor(contTableH / rowH);
        const lastContRows = Math.max(1, Math.floor((contTableH - footerH) / rowH));

        // Slice lines into pages
        const pages = []; // each entry: { isFirst, rows: [...lineObjects] }
        if (!dataLines.length) {
          pages.push({ isFirst: true, rows: [], isLast: true });
        } else {
          let remaining = [...dataLines];
          let isFirst = true;
          while (remaining.length) {
            // Determine capacity of this page
            let capacity;
            if (isFirst) {
              // page1TableH already reserves footer space, so just use page1Rows
              capacity = Math.min(remaining.length, page1Rows);
            } else {
              // Continuation page: check if all remaining lines fit with footer on THIS page
              if (remaining.length <= lastContRows) {
                // All remaining fit with footer - this will be the last page
                capacity = remaining.length;
              } else {
                // More than lastContRows - need more pages after this one
                capacity = contRowsMax;
              }
            }
            const chunk = remaining.splice(0, capacity);
            pages.push({ isFirst, rows: chunk, isLast: false });
            isFirst = false;
          }
          // Mark last page
          pages[pages.length - 1].isLast = true;
        }

        const totalPages = pages.length;

        // Build HTML for each page div
        const container = $('pages-container');
        container.innerHTML = '';

        pages.forEach((pg, pgIdx) => {
          const pageNum = pgIdx + 1;
          const headerHTML = buildHeaderHTML(pg.isFirst, pageNum, totalPages);

          // Build rows HTML
          let rowsHTML = '';
          if (!pg.rows.length && pg.isFirst) {
            rowsHTML = `<tr><td style="color:#cbd5e1;font-style:italic;" colspan="4">${esc(t('empty_lines'))}</td></tr>`;
          } else {
            pg.rows.forEach(ln => {
              const q = parseFloat(ln.qty) || 0, p = parseFloat(ln.pu) || 0, tot = calcLineAmount(ln);
              // Invert amounts for credit notes
              const isCreditNote = docType === 'credit';
              const displayTot = isCreditNote ? -tot : tot;
              let desc = ln.desc ? esc(ln.desc) : `<span style="color:#cbd5e1;font-style:italic;">—</span>`;
              if (ln.unit) desc += ` <span style="color:#94a3b8;font-size:9px;">(${esc(ln.unit)})</span>`;
              const discountStr = ln.discount && ln.discount > 0
                ? ` −${ln.discountType === '%' ? ln.discount + '%' : fmt(ln.discount)}`
                : '';
              rowsHTML += `<tr>
          <td>${desc}</td>
          <td style="text-align:center;">${q % 1 === 0 ? q : q.toFixed(2)}</td>
          <td style="text-align:right;">${fmt(p)}${discountStr ? `<span style="font-size:9px;color:#94a3b8;">${discountStr}</span>` : ''}</td>
          <td style="text-align:right;font-weight:600;">${fmt(displayTot)}</td>
        </tr>`;
            });
          }

          const tableHTML = buildTableHTML(rowsHTML, pg.isLast);
          const footerHTML = pg.isLast ? buildFooterHTML(sub, dataLines) : '';
          // Page-number bottom-right (already in header for multi-page, but add footer page num for cont. pages)
          const pgNumHTML = (totalPages > 1 && !pg.isFirst)
            ? `<div style="position:absolute;bottom:48px;right:52px;font-size:8px;color:#cbd5e1;">${pageNum} / ${totalPages}</div>`
            : '';

          const div = document.createElement('div');
          div.className = 'inv-page';
          div.dataset.pageIndex = pgIdx;
          div.style.fontFamily = `'${invFont}', Arial, sans-serif`;
          div.innerHTML = wmSVG() + headerHTML + tableHTML + footerHTML + pgNumHTML;
          container.appendChild(div);
        });

        scalePreview();
      }

      /* ══════════════════════════════════════════
         RENDER PREVIEW
      ══════════════════════════════════════════ */
      function renderPreview() {
        buildPages();
        refreshStepper();
        updateLinesSummary();
      }

      /* ══════════════════════════════════════════
         SCALE PREVIEW
      ══════════════════════════════════════════ */
      function scalePreview() {
        const wrapper = $('preview-scaler');
        const parent = wrapper.parentElement;
        const scale = Math.min(1, parent.clientWidth / 794);
        wrapper.style.transform = `scale(${scale})`;
        wrapper.style.width = '794px';
        wrapper.style.transformOrigin = 'top left';
        // Height = sum of all pages + gaps, scaled
        const pages = wrapper.querySelectorAll('.inv-page');
        const rawH = pages.length * (1123 + 12) - 12; // 12px gap between pages
        parent.style.height = (rawH * scale + 8) + 'px';
      }

      /* ══════════════════════════════════════════
         PDF
      ══════════════════════════════════════════ */
      async function downloadPDF() {
        if (!val('e-name') || !val('inv-number')) { toast(t('toast_valid'), 4000); return; }
        await loadScript(CDN_HTML2PDF);
        // We cover the page with an overlay matching the current background to hide the theme flash.
        const wasDark = document.documentElement.classList.contains('dark');
        let pdfOverlay = null;
        if (wasDark) {
          const bg = getComputedStyle(document.body).backgroundColor;
          pdfOverlay = document.createElement('div');
          pdfOverlay.style.cssText = `position:fixed;inset:0;z-index:9997;background:${bg};pointer-events:none;`;
          document.body.appendChild(pdfOverlay);
          document.documentElement.classList.remove('dark');
        }

        const dateVal = val('inv-date');
        if (dateVal) {
          const [y, m] = dateVal.split('-'), key = `iloveinvoice_seq_${y}_${m}`;
          safeSetItem(key, String(parseInt(localStorage.getItem(key) || '0') + 1));
        }

        const spin = `<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> ${t('toast_gen')}`;
        [$('btn-download'), $('btn-download-panel')].forEach(b => { if (b) { b.disabled = true; b.innerHTML = spin; } });

        const filename = `${getDocBadge()}_${val('inv-number') || 'draft'}_${val('c-name') || 'client'}.pdf`
          .replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\-\.]/g, '');

        try {
          const originalPages = Array.from($('pages-container').querySelectorAll('.inv-page'));

          // Create a dedicated off-screen rendering container to avoid viewport/scaling overflow clipping
          const renderWrapper = document.createElement('div');
          renderWrapper.id = 'pdf-render-wrapper';
          renderWrapper.style.position = 'fixed';
          renderWrapper.style.top = '-9999px';
          renderWrapper.style.left = '0px';
          renderWrapper.style.width = '794px';
          renderWrapper.style.zIndex = '-9999';
          renderWrapper.style.pointerEvents = 'none';
          // Important: we don't hide with display:none or opacity:0 as it can break some html2canvas captures in certain browsers

          const pageEls = originalPages.map(p => {
            const clone = p.cloneNode(true);
            renderWrapper.appendChild(clone);
            return clone;
          });
          document.body.appendChild(renderWrapper);

          const opt = {
            margin: [0, 0, 0, 0],
            image: { type: 'jpeg', quality: 1.0 },
            html2canvas: { scale: 4.5, useCORS: true, letterRendering: true, logging: false, backgroundColor: '#ffffff', scrollX: 0, scrollY: 0, windowWidth: 794, x: 0, y: 0, width: 794, height: 1123 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };

          const PDF_TIMEOUT_MS = 30_000;
          const timeout = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('PDF timeout')), PDF_TIMEOUT_MS)
          );

          const pdfWork = pageEls.length === 1
            ? html2pdf().set({ ...opt, filename }).from(pageEls[0]).save()
            : (() => {
                let worker = html2pdf().set({ ...opt, filename }).from(pageEls[0]).toPdf();
                for (let i = 1; i < pageEls.length; i++) {
                  worker = worker.get('pdf').then(pdf => { pdf.addPage(); }).from(pageEls[i]).toContainer().toCanvas().toPdf();
                }
                return worker.save();
              })();

          await Promise.race([pdfWork, timeout]);

          document.body.removeChild(renderWrapper);
          toast(t('toast_ok').replace('{f}', filename));
          saveToHistory();
        } catch (err) {
          console.error(err);
          // Fallback: single-shot with auto pagebreak
          try {
            await html2pdf().set({
              margin: [0, 0, 0, 0], filename,
              image: { type: 'jpeg', quality: 1.0 },
              html2canvas: { scale: 4.5, useCORS: true, letterRendering: true, logging: false, backgroundColor: '#ffffff', scrollX: 0, scrollY: 0, windowWidth: 794, x: 0, y: 0, width: 794, height: 1123 },
              jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
              pagebreak: { mode: ['css', 'legacy'] }
            }).from($('pages-container')).save();
            toast(t('toast_ok').replace('{f}', filename));
          } catch (err2) {
            console.error(err2); toast(t('toast_err'), 4500);
          }
        } finally {
          // Restore dark mode if it was active before PDF generation
          if (wasDark) document.documentElement.classList.add('dark');
          if (pdfOverlay) pdfOverlay.remove();
          scalePreview(); // Guarantee correct scale is recovered

          const dlHtml = `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>`;
          const bd = $('btn-download'), bp = $('btn-download-panel');
          if (bd) { bd.disabled = false; bd.innerHTML = `${dlHtml}<span>${t('btn_download')}</span>`; }
          if (bp) { bp.disabled = false; bp.innerHTML = `${dlHtml}<span>${t('btn_download_full')}</span>`; }
        }
      }
      /* ══════════════════════════════════════════
         STEPPER
      ══════════════════════════════════════════ */
      function buildStepper() {
        const labels = t('step_labels');
        const s = $('stepper');
        s.innerHTML = '';
        labels.forEach((lbl, i) => {
          if (i > 0) {
            const c = document.createElement('div');
            c.className = 'step-connector'; c.id = `sc-${i}`;
            s.appendChild(c);
          }
          const el = document.createElement('div');
          el.className = 'step-item'; el.dataset.step = i;
          el.innerHTML = `<div class="step-bubble" id="sb-${i}">${i + 1}</div><span class="step-label text-[10px] text-slate-400 font-medium truncate max-w-[52px] text-center leading-tight">${lbl}</span>`;
          el.addEventListener('click', () => openSection(i));
          s.appendChild(el);
        });
        refreshStepper();
      }
      function isDone(i) {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        if (i === 0) return !!(val('e-name') && (!cfg.requiredFields.issuerMustHaveId || val('e-siret')) && (!cfg.requiredFields.issuerMustHaveEmail || val('e-email')));
        if (i === 1) return !!(val('c-name') && (!cfg.requiredFields.clientMustHaveId || val('c-siren')) && val('c-billing') && (!cfg.requiredFields.clientMustHaveEmail || val('c-email')));
        if (i === 2) return !!(val('inv-number') && val('inv-date') && val('inv-due'));
        if (i === 3) return lines.some(l => l.desc && l.pu > 0);
        return true;
      }
      function refreshStepper() {
        const labels = t('step_labels');
        for (let i = 0; i < 5; i++) {
          const card = document.querySelector(`[data-section="${i}"]`);
          const stepEl = document.querySelector(`[data-step="${i}"]`);
          const bubble = $(`sb-${i}`);
          const badge = $(`badge-s${i}`);
          const done = isDone(i);
          const open = card?.classList.contains('open');
          if (!stepEl) continue;
          stepEl.className = `step-item ${open ? 'active' : (done ? 'done' : '')}`;
          if (open) stepEl.setAttribute('aria-current', 'step');
          else stepEl.removeAttribute('aria-current');
          bubble.innerHTML = done
            ? `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`
            : `${i + 1}`;
          if (badge) badge.classList.toggle('hidden', !done);
          const conn = $(`sc-${i}`);
          if (conn) conn.className = `step-connector ${done ? 'done' : ''}`;
          // Show TTC total on step 3 (Lines) when there are amounts
          const labelEl = stepEl.querySelector('.step-label');
          if (labelEl && i === 3) {
            const ttc = computeTotal();
            const hasTtc = ttc > 0 && lines.some(l => l.pu > 0);
            labelEl.innerHTML = hasTtc
              ? `${labels[i]}<br><span style="font-size:9px;font-weight:700;color:${accentColor};">${fmt(ttc)}</span>`
              : labels[i];
          }
        }
      }

      /* ══════════════════════════════════════════
         ACCORDION
      ══════════════════════════════════════════ */
      function openSection(idx) {
        for (let i = 0; i < 5; i++) {
          const card = document.querySelector(`[data-section="${i}"]`);
          const header = document.querySelector(`[data-toggle="${i}"]`);
          const body = $(`body-s${i}`);
          const on = (i === idx);
          card.classList.toggle('open', on);
          card.classList.toggle('active-card', on);
          body.classList.toggle('open', on);
          if (header) header.setAttribute('aria-expanded', on ? 'true' : 'false');
          if (body) body.setAttribute('aria-hidden', on ? 'false' : 'true');
        }
        refreshStepper();
      }
      function initAccordion() {
        document.querySelectorAll('[data-toggle]').forEach(h => {
          h.setAttribute('role', 'button');
          h.setAttribute('tabindex', '0');
          h.setAttribute('aria-expanded', h.closest('.section-card')?.classList.contains('open') ? 'true' : 'false');
          h.addEventListener('click', () => {
            const i = parseInt(h.dataset.toggle);
            const card = document.querySelector(`[data-section="${i}"]`);
            const open = card.classList.contains('open');
            openSection(open ? -1 : i);
          });
          h.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); h.click(); }
          });
        });
      }

      /* ══════════════════════════════════════════
         i18n
      ══════════════════════════════════════════ */
      function applyLang() {
        document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
        document.querySelectorAll('.tt-box[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
        document.querySelectorAll('[data-i18n-opt]').forEach(opt => { opt.textContent = t(opt.dataset.i18nOpt); });
        document.querySelectorAll('.fl-label[data-i18n]').forEach(lb => { lb.textContent = t(lb.dataset.i18n); });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });

        // Default payment value (only if not user-edited)
        const pay = $('inv-payment');
        if (!pay.dataset.userEdited) { pay.value = t('inv_payment_default'); syncFilled(pay); }

        // Update P.U. label with currency
        updatePULabel();

        // Update lang button
        const langCfg = LANGUAGES[lang];
        if (langCfg) {
          const lf = $('lang-flag');
          const ll = $('lang-btn-label');
          if (lf) lf.textContent = flagEmoji(langCfg.flag);
          if (ll) ll.textContent = lang.toUpperCase();
        }

        buildStepper();
        renderPreview();
      }

      function updatePULabel() {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const label = $('col-pu-label');
        if (label) label.textContent = `${t('col_pu')} (${cfg.currencySymbol})`;
      }
      function updateSEOMeta() {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const countryName = cfg.name || country;
        const SEO_TITLES = {
          fr: `iloveinvoice — Facture gratuite ${countryName} · Sans compte`,
          en: `iloveinvoice — Free ${countryName} Invoice Generator · No Account`,
          de: `iloveinvoice — Kostenloser Rechnungsgenerator ${countryName}`,
          es: `iloveinvoice — Facturas gratis ${countryName} · Sin cuenta`,
          pt: `iloveinvoice — Faturas grátis ${countryName} · Sem conta`,
          it: `iloveinvoice — Fatture gratis ${countryName} · Senza account`,
          nl: `iloveinvoice — Gratis facturen ${countryName} · Geen account`,
          ja: `iloveinvoice — ${countryName} 無料請求書作成`,
          sv: `iloveinvoice — Gratis fakturor ${countryName}`,
          pl: `iloveinvoice — Darmowe faktury ${countryName}`,
        };
        const SEO_DESCS = {
          fr: `Créez des factures professionnelles pour ${countryName} gratuitement. TVA ${countryName} intégrée, ${cfg.currency}. 100% local, sans inscription.`,
          en: `Create professional invoices for ${countryName} for free. ${countryName} tax rates built-in, ${cfg.currency}. 100% local, no sign-up.`,
          de: `Erstellen Sie kostenlose Rechnungen für ${countryName}. Steuer ${countryName} integriert, ${cfg.currency}. 100% lokal, ohne Registrierung.`,
          es: `Cree facturas profesionales para ${countryName} gratis. Impuestos ${countryName} integrados, ${cfg.currency}. 100% local, sin registro.`,
          pt: `Crie faturas profissionais para ${countryName} grátis. Impostos ${countryName} integrados, ${cfg.currency}. 100% local, sem registo.`,
          it: `Crea fatture professionali per ${countryName} gratis. Tasse ${countryName} integrate, ${cfg.currency}. 100% locale, senza registrazione.`,
          nl: `Maak gratis professionele facturen voor ${countryName}. ${countryName} belastingtarieven ingebouwd, ${cfg.currency}. 100% lokaal, geen registratie.`,
          ja: `${countryName}のプロフェッショナルな請求書を無料で作成。${countryName}税率内蔵、${cfg.currency}。100%ローカル、登録不要。`,
          sv: `Skapa professionella fakturor för ${countryName} gratis. ${countryName} skattesatser inbyggda, ${cfg.currency}. 100% lokalt, ingen registrering.`,
          pl: `Twórz profesjonalne faktury dla ${countryName} za darmo. Stawki podatkowe ${countryName} wbudowane, ${cfg.currency}. 100% lokalnie, bez rejestracji.`,
        };
        document.title = SEO_TITLES[lang] || SEO_TITLES.en;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = SEO_DESCS[lang] || SEO_DESCS.en;
        // Update hash without triggering hashchange
        const newHash = `#/${country}/${lang}`;
        if (window.location.hash !== newHash) {
          history.replaceState(null, '', newHash);
        }
      }

      function parseHashRoute() {
        const hash = window.location.hash;
        const m = hash.match(/^#\/([A-Z]{2})\/([a-z]{2})$/);
        if (m && COUNTRIES[m[1]] && T[m[2]]) return { country: m[1], lang: m[2] };
        const m2 = hash.match(/^#\/([A-Z]{2})$/);
        if (m2 && COUNTRIES[m2[1]]) return { country: m2[1], lang: null };
        return null;
      }

      function setLang(l) {
        lang = l;
        document.documentElement.lang = l;
        applyLang();
        updateSEOMeta();
      }
      function setLangManual(code) {
        langOverride = true;
        setLang(code);
      }

      /* ══════════════════════════════════════════
         COUNTRY MANAGEMENT
      ══════════════════════════════════════════ */
      /* IP geolocation and GDPR consent removed — default country is now GB */

      const REGION_LABELS = {
        europe: { fr: 'Europe', en: 'Europe', de: 'Europa', es: 'Europa', pt: 'Europa', it: 'Europa', nl: 'Europa', ja: '\u30e8\u30fc\u30ed\u30c3\u30d1', sv: 'Europa', pl: 'Europa' },
        americas: { fr: 'Am\u00e9riques', en: 'Americas', de: 'Amerika', es: 'Am\u00e9ricas', pt: 'Am\u00e9ricas', it: 'Americhe', nl: 'Amerika', ja: '\u30a2\u30e1\u30ea\u30ab', sv: 'Amerika', pl: 'Ameryka' },
        asia_pacific: { fr: 'Asie-Pacifique', en: 'Asia-Pacific', de: 'Asien-Pazifik', es: 'Asia-Pac\u00edfico', pt: '\u00c1sia-Pac\u00edfico', it: 'Asia-Pacifico', nl: 'Azi\u00eb-Pacific', ja: '\u30a2\u30b8\u30a2\u592a\u5e73\u6d0b', sv: 'Asien-Stillahavsomr\u00e5det', pl: 'Azja-Pacyfik' },
        middle_east: { fr: 'Moyen-Orient', en: 'Middle East', de: 'Naher Osten', es: 'Oriente Medio', pt: 'M\u00e9dio Oriente', it: 'Medio Oriente', nl: 'Midden-Oosten', ja: '\u4e2d\u6771', sv: 'Mellan\u00f6stern', pl: 'Bliski Wsch\u00f3d' },
        africa: { fr: 'Afrique', en: 'Africa', de: 'Afrika', es: '\u00c1frica', pt: '\u00c1frica', it: 'Africa', nl: 'Afrika', ja: '\u30a2\u30d5\u30ea\u30ab', sv: 'Afrika', pl: 'Afryka' }
      };

      function getRecentCountries() {
        try { return JSON.parse(localStorage.getItem('iloveinvoice_recent_countries') || '[]').slice(0, 3); } catch { return []; }
      }
      function addRecentCountry(code) {
        const recent = getRecentCountries().filter(c => c !== code);
        recent.unshift(code);
        safeSetItem('iloveinvoice_recent_countries', JSON.stringify(recent.slice(0, 5)));
      }

      function countryItemHTML(code, cfg) {
        const check = country === code ? '<svg class="w-5 h-5 text-brand-500 pointer-events-none shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' : '';
        return `<div class="country-modal-item flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-600" data-code="${code}" data-name="${cfg.name.toLowerCase()}" data-search="${code.toLowerCase()} ${cfg.name.toLowerCase()} ${cfg.currency.toLowerCase()} ${cfg.taxName.toLowerCase()}">
          <span class="pointer-events-none text-xl leading-none">${flagEmoji(cfg.flag)}</span>
          <div class="flex-1 pointer-events-none min-w-0">
            <div class="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">${cfg.name}</div>
            <div class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">${cfg.currencySymbol} \u00b7 ${cfg.taxName}</div>
          </div>
          ${check}
        </div>`;
      }

      function buildCountrySelect() {
        const list = $('country-modal-list');
        if (!list) return;

        const allEntries = Object.entries(COUNTRIES).sort((a, b) => a[1].name.localeCompare(b[1].name));

        // Group by region
        const grouped = {};
        for (const [code, cfg] of allEntries) {
          const r = cfg.region || 'other';
          if (!grouped[r]) grouped[r] = [];
          grouped[r].push([code, cfg]);
        }

        let html = '';

        // Recent countries section
        const recent = getRecentCountries().filter(c => c !== country && COUNTRIES[c]);
        if (recent.length > 0) {
          html += `<div class="country-region-group" data-region="recent">
            <div class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">${t('select_country_recent')}</div>`;
          for (const code of recent) html += countryItemHTML(code, COUNTRIES[code]);
          html += `</div>`;
        }

        // Region groups
        const regionOrder = ['europe', 'americas', 'asia_pacific', 'middle_east', 'africa', 'other'];
        for (const r of regionOrder) {
          if (!grouped[r] || grouped[r].length === 0) continue;
          const label = REGION_LABELS[r]?.[lang] || REGION_LABELS[r]?.en || r;
          html += `<div class="country-region-group" data-region="${r}">
            <div class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 sticky top-0 bg-white dark:bg-slate-800 z-20">${label} (${grouped[r].length})</div>`;
          for (const [code, cfg] of grouped[r]) html += countryItemHTML(code, cfg);
          html += `</div>`;
        }

        list.innerHTML = html;
      }

      function filterCountryModal(query) {
        const q = query.toLowerCase().trim();
        const list = $('country-modal-list');
        if (!list) return;
        const items = list.querySelectorAll('.country-modal-item');
        const groups = list.querySelectorAll('.country-region-group');

        if (!q) {
          items.forEach(el => el.style.display = '');
          groups.forEach(g => g.style.display = '');
          return;
        }

        // Hide/show items
        items.forEach(el => {
          const searchData = el.dataset.search || '';
          el.style.display = searchData.includes(q) ? '' : 'none';
        });

        // Hide empty groups
        groups.forEach(g => {
          const visible = g.querySelectorAll('.country-modal-item:not([style*="display: none"])');
          g.style.display = visible.length > 0 ? '' : 'none';
        });
      }

      function openCountryModal() {
        const modal = $('country-modal');
        const backup = $('country-modal-backdrop');
        const content = $('country-modal-content');
        if (!modal) return;
        buildCountrySelect();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        requestAnimationFrame(() => {
          backup.classList.remove('opacity-0');
          content.classList.remove('opacity-0', 'scale-95');
          content.classList.add('opacity-100', 'scale-100');
          const searchInput = $('country-search');
          if (searchInput) { searchInput.value = ''; searchInput.focus(); }
        });
      }

      function closeCountryModal() {
        const modal = $('country-modal');
        const backup = $('country-modal-backdrop');
        const content = $('country-modal-content');
        if (!modal) return;
        // Reverse animations
        backup.classList.add('opacity-0');
        content.classList.remove('opacity-100', 'scale-100');
        content.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }, 300);
      }

      function buildLangSelect() {
        const list = $('lang-modal-list');
        if (!list) return;
        list.innerHTML = Object.entries(LANGUAGES).map(([code, cfg]) => `
            <div class="lang-modal-item flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-600" data-lang="${code}">
              <span class="pointer-events-none text-xl leading-none">${flagEmoji(cfg.flag)}</span>
              <div class="flex-1 pointer-events-none">
                <div class="text-sm font-semibold text-slate-800 dark:text-slate-100">${cfg.nativeName}</div>
              </div>
              ${lang === code ? '<svg class="w-5 h-5 text-brand-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' : ''}
            </div>
          `).join('');
      }

      function openLangModal() {
        const modal = $('lang-modal');
        const backdrop = $('lang-modal-backdrop');
        const content = $('lang-modal-content');
        if (!modal) return;
        buildLangSelect();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('role', 'dialog');
        requestAnimationFrame(() => {
          backdrop.classList.remove('opacity-0');
          content.classList.remove('opacity-0', 'scale-95');
          content.classList.add('opacity-100', 'scale-100');
          ($('btn-close-lang-modal') || content.querySelector('button'))?.focus();
        });
      }

      function closeLangModal() {
        const modal = $('lang-modal');
        const backdrop = $('lang-modal-backdrop');
        const content = $('lang-modal-content');
        if (!modal) return;
        backdrop.classList.add('opacity-0');
        content.classList.remove('opacity-100', 'scale-100');
        content.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }, 300);
      }

      function setCountry(c) {
        country = c;
        addRecentCountry(c);
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const flag = $('country-flag');
        const lbl = $('country-btn-label');
        if (flag) flag.textContent = flagEmoji(cfg.flag);
        if (lbl) lbl.textContent = cfg.name;
        if (!langOverride) setLang(cfg.defaultLang);
        else updateSEOMeta();
        applyCountry();
      }

      function rebuildTaxRateSelect() {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const sel = $('tva-rate');
        if (!sel) return;
        sel.innerHTML = cfg.taxRates.map(r => {
          const key = `tax_rate_${country}_${String(r).replace('.', '_')}`;
          const label = t(key) || (r === 0 ? t('tax_custom') : r + '%');
          return `<option value="${r}">${label}</option>`;
        }).join('');
        // Preserve current selection if valid
        const currVal = $('tva-rate').value;
        if (sel.querySelector(`option[value="${currVal}"]`)) {
          sel.value = currVal;
        } else if (cfg.taxRates.length > 0) {
          sel.value = cfg.taxRates[0];
        }
      }

      function getEffectiveTaxRate() {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        // If single tax rate of 0, use custom rate
        if (cfg.taxRates.length === 1 && cfg.taxRates[0] === 0) {
          return parseFloat(($('tax-custom-rate')?.value || 0)) / 100;
        }
        return parseFloat(($('tva-rate')?.value || 0)) / 100;
      }

      function applyCountry() {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;

        // Update issuer ID field label/config
        const issuerIdInput = $('e-siret');
        if (issuerIdInput) {
          const label = issuerIdInput.parentElement.querySelector('.fl-label');
          if (label) label.textContent = cfg.issuerIdLabel + (cfg.issuerIdRequired ? ' *' : '');
          issuerIdInput.maxLength = cfg.issuerIdMaxLength;
          issuerIdInput.inputMode = cfg.issuerIdInputMode;
        }

        // Update client ID field label/config
        const clientIdInput = $('c-siren');
        if (clientIdInput) {
          const label = clientIdInput.parentElement.querySelector('.fl-label');
          if (label) label.textContent = cfg.clientIdLabel + (cfg.clientIdRequired ? ' *' : '');
          clientIdInput.maxLength = cfg.clientIdMaxLength;
          clientIdInput.inputMode = cfg.clientIdInputMode;
        }

        // Rebuild tax rate select
        rebuildTaxRateSelect();

        // Update section 5 title with tax name
        const s5TaxName = $('s5-tax-name');
        if (s5TaxName) s5TaxName.textContent = cfg.taxName;

        // Show/hide franchise block based on config
        const franchiseBlock = $('franchise-block');
        if (franchiseBlock) franchiseBlock.classList.toggle('hidden', !cfg.hasExemptMode);

        // Update franchise toggle labels
        const franchiseTitle = $('tva-franchise-title');
        const franchiseSub = $('tva-franchise-sub');
        if (franchiseTitle) franchiseTitle.textContent = t(cfg.taxExemptKey);
        if (franchiseSub) franchiseSub.textContent = t(cfg.taxExemptSubKey);

        // Show/hide custom tax rate row (for 0-tax countries like US/BR)
        const customRateRow = $('tax-custom-rate-row');
        if (customRateRow) {
          customRateRow.classList.toggle('hidden', cfg.taxRates[0] !== 0);
        }

        // Update default payment text if not user-edited
        const pay = $('inv-payment');
        if (pay && !pay.dataset.userEdited) {
          pay.value = t(cfg.paymentDefaultKey);
          syncFilled(pay);
        }

        // Update hints for ID fields
        const issuerHint = $('issuer-id-hint');
        if (issuerHint) issuerHint.textContent = cfg.hints.issuerIdHint;
        const clientHint = $('client-id-hint');
        if (clientHint) clientHint.textContent = cfg.hints.clientIdHint;

        // Show SDI field only for Italy
        $('sdi-field-row')?.classList.toggle('hidden', country !== 'IT');

        // Update P.U. label with currency
        updatePULabel();

        // Update currency symbol on global discount fixed-amount button
        const discFixedBtn = $('discount-global-mode-fixed');
        if (discFixedBtn) discFixedBtn.textContent = cfg.currencySymbol;

        renderLines();
        renderPreview();
      }

      /* ══════════════════════════════════════════
         CUSTOM FIELDS
      ══════════════════════════════════════════ */
      function renderCustomFields() {
        const container = $('custom-fields-list');
        if (!container) return;
        container.innerHTML = '';
        customFields.forEach((field, i) => {
          const row = document.createElement('div');
          row.className = 'flex gap-1.5 items-center';
          row.innerHTML = `
            <input type="text" class="fl-input flex-1 text-xs px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:border-brand-400"
              placeholder="${t('custom_field_placeholder_label')}" value="${field.label.replace(/"/g,'&quot;')}" data-cf-label="${i}" />
            <input type="text" class="fl-input flex-1 text-xs px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:border-brand-400"
              placeholder="${t('custom_field_placeholder_value')}" value="${field.value.replace(/"/g,'&quot;')}" data-cf-value="${i}" />
            <button type="button" class="flex-shrink-0 text-slate-400 hover:text-red-500 transition-colors" data-cf-delete="${i}" aria-label="Delete field">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>`;
          container.appendChild(row);
        });
        container.querySelectorAll('[data-cf-label]').forEach(el => {
          el.addEventListener('input', () => { customFields[+el.dataset.cfLabel].label = el.value; renderPreview(); });
        });
        container.querySelectorAll('[data-cf-value]').forEach(el => {
          el.addEventListener('input', () => { customFields[+el.dataset.cfValue].value = el.value; renderPreview(); });
        });
        container.querySelectorAll('[data-cf-delete]').forEach(el => {
          el.addEventListener('click', () => { customFields.splice(+el.dataset.cfDelete, 1); renderCustomFields(); renderPreview(); });
        });
      }

      /* ══════════════════════════════════════════
         RENDER LINES
      ══════════════════════════════════════════ */
      function renderLines() {
        const c = $('lines-container');
        c.innerHTML = '';
        lines.forEach((ln, i) => {
          // Main line row (compact)
          const mainRow = document.createElement('div');
          mainRow.className = 'line-row grid gap-1.5 items-center';
          mainRow.style.gridTemplateColumns = '16px 1fr 48px 68px 28px 28px';
          mainRow.dataset.lineIndex = i;
          mainRow.innerHTML = `
      <div class="drag-handle flex items-center justify-center cursor-grab active:cursor-grabbing text-slate-200 hover:text-slate-400 select-none" draggable="true" title="Réordonner">
        <svg class="w-2.5 h-3.5 pointer-events-none" fill="currentColor" viewBox="0 0 8 14">
          <circle cx="2" cy="2" r="1.3"/><circle cx="6" cy="2" r="1.3"/>
          <circle cx="2" cy="7" r="1.3"/><circle cx="6" cy="7" r="1.3"/>
          <circle cx="2" cy="12" r="1.3"/><circle cx="6" cy="12" r="1.3"/>
        </svg>
      </div>
      <input type="text" value="${esc(ln.desc)}" placeholder="${t('col_desc')}…"
        data-field="desc" data-index="${i}" class="fl-input text-xs" style="padding:8px 8px 8px 10px;" />
      <input type="number" value="${ln.qty}" min="0" step="0.5"
        data-field="qty" data-index="${i}" class="fl-input text-xs text-center" style="padding:8px 4px;" />
      <input type="number" value="${ln.pu === 0 ? '' : ln.pu}" min="0" step="0.01" placeholder="0.00"
        data-field="pu" data-index="${i}" class="fl-input text-xs text-right" style="padding:8px 6px;" />
      <button data-expand="${i}" class="expand-btn w-6 h-6 flex items-center justify-center rounded-lg text-slate-500 bg-slate-100 hover:text-brand-600 hover:bg-brand-50 transition-all flex-shrink-0 text-xs font-semibold dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600" title="${esc(t('lbl_advanced'))}" aria-label="${esc(t('lbl_advanced'))}" aria-expanded="false">⋯</button>
      <button data-remove="${i}" class="rm-btn w-6 h-6 flex items-center justify-center rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all flex-shrink-0" aria-label="${esc(t('lbl_delete_line'))}">
        <svg class="w-3.5 h-3.5 pointer-events-none" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>`;
          c.appendChild(mainRow);

          // Extra row (unit, discount, tva) — hidden by default
          const extraRow = document.createElement('div');
          extraRow.className = 'line-row-extra grid gap-1.5 items-center hidden';
          extraRow.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
          extraRow.style.gridColumn = '1 / -1';

          const unitOpts = ['', 'h', 'j', 'forfait', 'u', 'km', '%', 'mois'].map(u =>
            `<option value="${u}" ${ln.unit === u ? 'selected' : ''}>${u || '—'}</option>`
          ).join('');

          const cfg = COUNTRIES[country] || COUNTRIES.FR;
          let tvaHtml = '';
          if (tvaAdvanced) {
            const rates = [...cfg.taxRates, 'custom'];
            const tvaOpts = rates.map(r => {
              if (r === 'custom') return `<option value="custom" ${ln.tvaRate === 'custom' ? 'selected' : ''}>${esc(t('tax_custom'))}</option>`;
              const key = `tax_rate_${country}_${String(r).replace('.', '_')}`;
              const label = t(key) || r + '%';
              return `<option value="${r}" ${ln.tvaRate == r ? 'selected' : ''}>${esc(label)}</option>`;
            }).join('');
            tvaHtml = `<div class="fl-wrap" style="grid-column: 4;">
              <select id="tva_${i}" data-field="tvaRate" data-index="${i}" class="fl-select${ln.tvaRate != null ? ' is-filled' : ''}" style="font-size:11px;">
                <option value="">${esc(t('tva_line_global'))}</option>
                ${tvaOpts}
              </select>
              <label class="fl-label" style="font-size:11px;" for="tva_${i}">${esc(cfg.taxName)}</label>
            </div>`;
          }

          const discBtnBase = 'display:inline-flex;align-items:center;justify-content:center;padding:2px 8px;font-size:11px;font-weight:700;border:1px solid #e2e8f0;cursor:pointer;transition:all .15s;line-height:1.4;';
          const discBtnActive = 'background:#4f6ef7;color:#fff;border-color:#4f6ef7;';
          const discBtnInactive = 'background:#f8fafc;color:#64748b;';

          extraRow.innerHTML = `
      <div class="fl-wrap" style="grid-column: 1;">
        <select id="unit_${i}" data-field="unit" data-index="${i}" class="fl-select${ln.unit ? ' is-filled' : ''}" style="font-size:11px;">
          ${unitOpts}
        </select>
        <label class="fl-label" style="font-size:11px;" for="unit_${i}">${esc(t('col_unit'))}</label>
      </div>
      <div class="fl-wrap" style="grid-column: 2;">
        <input id="discount_${i}" type="number" value="${ln.discount || ''}" min="0" step="0.1"
          data-field="discount" data-index="${i}" class="fl-input text-xs${ln.discount ? ' is-filled' : ''}" style="padding:18px 8px 4px 10px; font-size:11px;" />
        <label class="fl-label" style="font-size:11px;" for="discount_${i}">${esc(t('col_discount'))}</label>
      </div>
      <div class="flex items-center gap-1.5" style="grid-column: 3; height:36px; justify-content:space-between;">
        <div style="display:flex;gap:0;">
          <button type="button" data-discount-type-mode="%" data-index="${i}"
            style="${discBtnBase}border-radius:6px 0 0 6px;${ln.discountType === '%' ? discBtnActive : discBtnInactive}">%</button>
          <button type="button" data-discount-type-mode="€" data-index="${i}"
            style="${discBtnBase}border-radius:0 6px 6px 0;border-left:none;${ln.discountType !== '%' ? discBtnActive : discBtnInactive}">${esc(cfg.currencySymbol)}</button>
        </div>
        <button data-save-catalog="${i}" class="text-xs text-slate-300 hover:text-yellow-500 transition-colors" title="${esc(t('toast_catalog_saved'))}">⭐</button>
        <button data-duplicate-line="${i}" class="w-5 h-5 flex items-center justify-center text-slate-300 hover:text-brand-500 transition-colors" title="Dupliquer la ligne" aria-label="${esc(t('lbl_duplicate_line'))}">
          <svg class="w-3.5 h-3.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        </button>
      </div>
      ${tvaHtml || '<div></div>'}`;
          c.appendChild(extraRow);
        });
        if (lines.length === 1) c.querySelector('[data-remove]').style.visibility = 'hidden';
        updateLinesSummary();
      }
      function updateLinesSummary() {
        const sub = lines.reduce((s, l) => s + calcLineAmount(l), 0);
        $('lines-count-label').textContent = lines.filter(l => l.desc || l.pu > 0).length;
        $('lines-total-label').textContent = fmt(sub);
      }

      /* ══════════════════════════════════════════
         SPRINT 2 — .iloveinvoice FILE SYSTEM
      ══════════════════════════════════════════ */
      const LS_CLIENTS = 'iloveinvoice_clients_v1';
      const FO_VERSION = 4;

      /* ── Collect full state into a plain object ── */
      function collectState() {
        return {
          _version: FO_VERSION,
          _app: 'iloveinvoice',
          lang,
          country,
          docType,
          watermark,
          accentColor,
          invFont,
          invTemplate,
          emetteur: {
            name: val('e-name'),
            siret: val('e-siret'),
            email: val('e-email'),
            address: val('e-address'),
            web: val('e-web'),
            logo: logoB64 || null,
          },
          client: {
            name: val('c-name'),
            siren: val('c-siren'),
            sdi: val('c-sdi'),
            email: val('c-email'),
            billing: val('c-billing'),
            delivery: val('c-delivery'),
            deliveryOn: $('toggle-delivery').checked,
          },
          invoice: {
            number: val('inv-number'),
            type: $('inv-type').value,
            typeCustom: val('inv-type-custom'),
            date: val('inv-date'),
            due: val('inv-due'),
            ref: val('inv-ref'),
            payment: val('inv-payment'),
            paymentUserEdited: !!$('inv-payment').dataset.userEdited,
            note: val('inv-note'),
          },
          tva: {
            franchise: $('toggle-tva').checked,
            rate: $('tva-rate').value,
            advanced: tvaAdvanced,
          },
          deposit: { ...deposit },
          discountGlobal: { ...discountGlobal },
          customFields: customFields.map(f => ({ label: f.label, value: f.value })),
          lines: lines.map(l => ({ desc: l.desc, qty: l.qty, pu: l.pu, unit: l.unit || '', discount: l.discount || 0, discountType: l.discountType || '%', tvaRate: l.tvaRate ?? null })),
        };
      }

      /* ── Restore full state from a plain object ── */
      function restoreState(d) {
        if (!d || d._app !== 'iloveinvoice') throw new Error('invalid');

        // country — default to FR for backward compat
        const importedCountry = d.country || 'FR';
        if (COUNTRIES[importedCountry]) {
          setCountry(importedCountry);
        }

        // lang
        if (d.lang) setLang(d.lang);

        // emetteur
        const e = d.emetteur || {};
        const set = (id, v) => { if (v != null) { $(id).value = v; syncFilled($(id)); } };
        set('e-name', e.name); set('e-siret', e.siret); set('e-email', e.email);
        set('e-address', e.address); set('e-web', e.web);
        logoB64 = e.logo || null;
        applyLogoUI();

        // client
        const c = d.client || {};
        set('c-name', c.name); set('c-siren', c.siren); set('c-sdi', c.sdi); set('c-email', c.email);
        set('c-billing', c.billing); set('c-delivery', c.delivery);
        const delOn = !!c.deliveryOn;
        $('toggle-delivery').checked = delOn;
        $('delivery-field').classList.toggle('hidden', !delOn);
        $('c-delivery').disabled = !delOn;

        // invoice
        const inv = d.invoice || {};
        set('inv-number', inv.number); set('inv-date', inv.date); set('inv-due', inv.due);
        set('inv-ref', inv.ref); set('inv-note', inv.note);
        if (inv.type) { $('inv-type').value = inv.type; syncFilled($('inv-type')); }
        const isCustom = $('inv-type').value === 'custom';
        $('inv-type-custom-row').classList.toggle('hidden', !isCustom);
        $('inv-type-custom').disabled = !isCustom;
        if (inv.typeCustom) set('inv-type-custom', inv.typeCustom);
        if (inv.payment != null) {
          $('inv-payment').value = inv.payment;
          if (inv.paymentUserEdited) $('inv-payment').dataset.userEdited = '1';
          syncFilled($('inv-payment'));
        }

        // tva
        const tva = d.tva || {};
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        if (tva.franchise != null) {
          $('toggle-tva').checked = tva.franchise && cfg.hasExemptMode;
          $('tva-rate-row').classList.toggle('hidden', $('toggle-tva').checked);
        }
        if (tva.rate) {
          $('tva-rate').value = tva.rate;
          syncFilled($('tva-rate'));
        }
        if (tva.advanced != null) {
          tvaAdvanced = !!tva.advanced;
          const advToggle = $('toggle-tva-advanced');
          if (advToggle) advToggle.checked = tvaAdvanced;
        }

        // deposit
        const dep = d.deposit || {};
        if (dep.enabled != null || dep.mode || dep.value) {
          deposit = { enabled: !!dep.enabled, mode: dep.mode || 'percent', value: dep.value || 0 };
          $('toggle-deposit').checked = deposit.enabled;
          const depCtrl = $('deposit-controls');
          if (depCtrl) depCtrl.classList.toggle('hidden', !deposit.enabled);
          if (deposit.mode === 'fixed') {
            $('deposit-mode-fixed').className = 'deposit-pill-btn active-fixed';
            $('deposit-mode-percent').className = 'deposit-pill-btn';
          } else {
            $('deposit-mode-percent').className = 'deposit-pill-btn active-percent';
            $('deposit-mode-fixed').className = 'deposit-pill-btn';
          }
          $('deposit-value').value = deposit.value;
          syncFilled($('deposit-value'));
        }

        // discountGlobal
        const dg = d.discountGlobal || {};
        if (dg.enabled != null || dg.type || dg.value) {
          let dgType = dg.type || '%';
          if (dgType === 'percent') dgType = '%';
          if (dgType === 'fixed') dgType = '€';
          discountGlobal = { enabled: !!dg.enabled, type: dgType, value: dg.value || 0 };
        }

        // customFields
        if (Array.isArray(d.customFields)) {
          customFields = d.customFields.map(f => ({ label: f.label || '', value: f.value || '' }));
          renderCustomFields();
        }

        // lines
        if (Array.isArray(d.lines) && d.lines.length) {
          lines = d.lines.map(l => ({
            desc: l.desc || '',
            qty: l.qty || 1,
            pu: l.pu || 0,
            unit: l.unit || '',
            discount: l.discount || 0,
            discountType: l.discountType || '%',
            tvaRate: l.tvaRate ?? null
          }));
        }

        // docType + watermark + accentColor
        if (d.docType) setDocType(d.docType);
        if (d.watermark) applyWatermark(d.watermark);
        if (d.accentColor) { accentColor = d.accentColor; updateSwatchUI(); updateFontSwatchUI(); }
        if (d.invFont) { invFont = d.invFont; updateFontSwatchUI(); }
        if (d.invTemplate) { invTemplate = d.invTemplate; updateTemplateSwatchUI(); }

        // history (merge imported history with existing)
        if (Array.isArray(d._history) && d._history.length) {
          const existing = loadHistory();
          const existingIds = new Set(existing.map(h => h.id));
          const merged = [...existing];
          for (const h of d._history) {
            if (h.id && !existingIds.has(h.id)) merged.push(h);
          }
          merged.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
          saveHistory(merged);
        }

        renderLines();
        renderPreview();
      }

      /* ── Export ── */
      function exportFO() {
        const state = collectState();
        state._history = loadHistory();
        const json = JSON.stringify(state, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const num = val('inv-number') || 'draft';
        const client = val('c-name') || 'client';
        a.href = url;
        a.download = `${num}_${client}.iloveinvoice`.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\-\.]/g, '');
        a.click();
        URL.revokeObjectURL(url);
        toast(t('toast_exported'));
      }

      /* ── Import from File object ── */
      function importFOFile(file) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = e => {
          try {
            const d = JSON.parse(e.target.result);
            restoreState(d);
            toast(t('toast_imported'));
          } catch {
            toast(t('toast_import_err'), 4500);
          }
        };
        reader.readAsText(file);
      }

      /* ── Share link ── */
      async function generateShareLink() {
        await loadScript(CDN_PAKO);
        const state = collectState();
        // Remove logo from shared data to keep URL shorter
        const shareState = JSON.parse(JSON.stringify(state));
        if (shareState.emetteur) delete shareState.emetteur.logo;
        const json = JSON.stringify(shareState);
        const compressed = pako.deflate(new TextEncoder().encode(json));
        const b64 = btoa(String.fromCharCode(...compressed))
          .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        const baseUrl = window.location.origin + window.location.pathname;
        const url = `${baseUrl}?data=${b64}`;
        if (url.length > 8000) {
          toast(t('toast_share_too_long'), 5000);
          return;
        }
        navigator.clipboard.writeText(url).then(() => {
          toast(t('toast_share_copied'));
        }).catch(() => {
          // Fallback for older browsers
          const ta = document.createElement('textarea');
          ta.value = url;
          ta.style.cssText = 'position:fixed;top:-9999px';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          toast(t('toast_share_copied'));
        });
      }

      async function sendByEmail() {
        await loadScript(CDN_PAKO);
        const name = val('e-name') || '';
        const num = val('inv-number') || '';
        const clientEmail = val('c-email') || '';
        const docBadge = t('inv_badge');
        const subject = [docBadge, num ? '#' + num : '', name ? '— ' + name : ''].filter(Boolean).join(' ');

        // Try to generate a share link for the email body
        let shareUrl = '';
        try {
          const state = collectState();
          const shareState = JSON.parse(JSON.stringify(state));
          if (shareState.emetteur) delete shareState.emetteur.logo;
          const compressed = pako.deflate(new TextEncoder().encode(JSON.stringify(shareState)));
          const b64 = btoa(String.fromCharCode(...compressed)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
          const url = window.location.origin + window.location.pathname + '?data=' + b64;
          if (url.length <= 8000) shareUrl = url;
        } catch {}

        const body = [
          ...(shareUrl ? [shareUrl, ''] : []),
          '—', name || 'iloveinvoice',
        ].join('\n');

        window.location.href = `mailto:${encodeURIComponent(clientEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }

      async function loadFromShareLink() {
        const params = new URLSearchParams(window.location.search);
        const data = params.get('data');
        if (!data) return false;
        await loadScript(CDN_PAKO);
        try {
          const b64 = data.replace(/-/g, '+').replace(/_/g, '/');
          const padded = b64 + '='.repeat((4 - b64.length % 4) % 4);
          const binary = atob(padded);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
          const decompressed = pako.inflate(bytes);
          const json = new TextDecoder().decode(decompressed);
          const state = JSON.parse(json);
          if (state._app !== 'iloveinvoice') return false;
          restoreState(state);
          // Enter read-only mode: hide form panel, show only preview
          enterReadOnlyMode();
          // Clean URL without reloading
          window.history.replaceState({}, '', window.location.pathname);
          return true;
        } catch (e) {
          console.error('Share link decode error:', e);
          return false;
        }
      }

      function enterReadOnlyMode() {
        const form = $('form-panel');
        if (form) form.style.display = 'none';
        // Hide share button but keep download visible for the recipient
        const shareBtn = $('btn-share');
        if (shareBtn) shareBtn.style.display = 'none';
        const sharePanelBtn = $('btn-share-panel');
        if (sharePanelBtn) sharePanelBtn.style.display = 'none';
        const downloadBtn = $('btn-download');
        if (downloadBtn) { downloadBtn.classList.remove('hidden'); downloadBtn.classList.add('flex'); }
        const histBtn = $('btn-history');
        if (histBtn) histBtn.style.display = 'none';
        const selectors = $('header-selectors');
        if (selectors) selectors.style.display = 'none';
        // Make preview full width
        const main = document.querySelector('main');
        if (main) main.style.justifyContent = 'center';
      }

      /* ── Invoice history ── */
      const LS_HISTORY = 'iloveinvoice_history';
      const HISTORY_MAX = 100;

      function loadHistory() {
        try { return JSON.parse(localStorage.getItem(LS_HISTORY)) || []; } catch { return []; }
      }
      function saveHistory(arr) { safeSetItem(LS_HISTORY, JSON.stringify(arr.slice(0, HISTORY_MAX))); }

      function saveToHistory() {
        const state = collectState();
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const entry = {
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
          docType: docType,
          number: val('inv-number') || '—',
          clientName: val('c-name') || '—',
          total: computeTotal(),
          currency: cfg.currencySymbol,
          date: val('inv-date') || new Date().toISOString().slice(0, 10),
          status: 'draft',
          data: state,
        };
        const history = loadHistory();
        history.unshift(entry);
        saveHistory(history);
        toast(t('toast_history_saved'));
      }

      function computeTotal() {
        let sub = 0;
        const franchise = $('toggle-tva').checked;
        const globalRate = parseFloat($('tva-rate').value) || 0;
        for (const ln of lines) {
          sub += calcLineAmount(ln);
        }
        if (discountGlobal.enabled && discountGlobal.value > 0) {
          if (discountGlobal.type === '%') sub -= sub * discountGlobal.value / 100;
          else sub -= discountGlobal.value;
        }
        if (franchise) return sub;
        if (tvaAdvanced) {
          let total = 0;
          for (const ln of lines) {
            const amt = calcLineAmount(ln);
            const rate = ln.tvaRate ?? globalRate;
            total += amt * (1 + rate / 100);
          }
          if (discountGlobal.enabled && discountGlobal.value > 0) {
            if (discountGlobal.type === '%') total -= total * discountGlobal.value / 100;
            else total -= discountGlobal.value;
          }
          return total;
        }
        return sub * (1 + globalRate / 100);
      }

      function loadFromHistory(id) {
        const history = loadHistory();
        const entry = history.find(h => h.id === id);
        if (!entry || !entry.data) return;
        restoreState(entry.data);
        closeHistoryModal();
        toast(t('toast_history_loaded'));
      }

      function duplicateFromHistory(id) {
        const history = loadHistory();
        const entry = history.find(h => h.id === id);
        if (!entry || !entry.data) return;
        const data = JSON.parse(JSON.stringify(entry.data));
        // Reset number and dates for the duplicate
        const now = new Date(), pad = n => String(n).padStart(2, '0');
        const todayISO = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
        const due = new Date(now); due.setDate(due.getDate() + 30);
        const dueISO = `${due.getFullYear()}-${pad(due.getMonth() + 1)}-${pad(due.getDate())}`;
        data.invoice.number = suggestInvoiceNumber();
        data.invoice.date = todayISO;
        data.invoice.due = dueISO;
        restoreState(data);
        closeHistoryModal();
        toast(t('toast_history_duplicated'));
      }

      function deleteFromHistory(id) {
        const history = loadHistory().filter(h => h.id !== id);
        saveHistory(history);
        renderHistoryModal();
        toast(t('toast_history_deleted'));
      }

      function updateHistoryStatus(id, status) {
        const history = loadHistory();
        const entry = history.find(h => h.id === id);
        if (entry) {
          entry.status = status;
          saveHistory(history);
          renderHistoryModal();
        }
      }

      const statusCycle = ['draft', 'sent', 'paid'];
      function cycleStatus(id) {
        const history = loadHistory();
        const entry = history.find(h => h.id === id);
        if (!entry) return;
        const idx = statusCycle.indexOf(entry.status);
        entry.status = statusCycle[(idx + 1) % statusCycle.length];
        saveHistory(history);
        renderHistoryModal();
      }

      function renderHistoryModal() {
        const list = $('history-modal-list');
        const q = ($('history-search')?.value || '').trim().toLowerCase();
        let history = loadHistory();
        if (q) {
          history = history.filter(h =>
            (h.number || '').toLowerCase().includes(q) ||
            (h.clientName || '').toLowerCase().includes(q) ||
            (h.status || '').toLowerCase().includes(q) ||
            (String(h.total || '')).includes(q)
          );
        }
        if (!history.length) {
          list.innerHTML = `<div class="text-center text-sm text-slate-400 dark:text-slate-500 py-8">${t('history_empty')}</div>`;
          return;
        }
        list.innerHTML = history.map(h => {
          const statusKey = `history_status_${h.status || 'draft'}`;
          const statusLabel = t(statusKey);
          const statusClass = h.status === 'paid' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800'
            : h.status === 'sent' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800'
            : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600';
          const docLabel = h.docType === 'quote' ? t('doc_quote') : h.docType === 'credit' ? t('doc_credit') : h.docType === 'proforma' ? t('doc_proforma') : t('doc_invoice');
          return `<div class="history-item group">
            <div class="flex items-start justify-between gap-2">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-semibold text-sm text-slate-800 dark:text-slate-100 truncate">${esc(h.number)}</span>
                  <span class="text-xs px-1.5 py-0.5 rounded-full border font-medium ${statusClass} cursor-pointer select-none" data-cycle-status="${h.id}">${statusLabel}</span>
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${esc(h.clientName)} · ${esc(docLabel)} · ${esc(h.date)}</div>
              </div>
              <span class="text-sm font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">${esc(typeof h.total === 'number' ? h.total.toFixed(2) : h.total)} ${esc(h.currency)}</span>
            </div>
            <div class="flex items-center gap-1.5 mt-2">
              <button class="history-action-btn history-action-load" data-history-load="${h.id}">${t('history_load')}</button>
              <button class="history-action-btn history-action-dup" data-history-dup="${h.id}">${t('history_duplicate')}</button>
              <button class="history-action-btn history-action-del" data-history-del="${h.id}">${t('history_delete')}</button>
            </div>
          </div>`;
        }).join('');
      }

      function openHistoryModal() {
        const searchEl = $('history-search');
        if (searchEl) searchEl.value = '';
        renderHistoryModal();
        const modal = $('history-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('role', 'dialog');
        requestAnimationFrame(() => {
          $('history-modal-backdrop').classList.add('opacity-100');
          $('history-modal-content').classList.remove('scale-95', 'opacity-0');
          $('history-modal-content').classList.add('scale-100', 'opacity-100');
          ($('history-search') || $('history-modal-content')?.querySelector('button'))?.focus();
        });
      }

      function closeHistoryModal() {
        $('history-modal-backdrop').classList.remove('opacity-100');
        const content = $('history-modal-content');
        content.classList.remove('scale-100', 'opacity-100');
        content.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
          const modal = $('history-modal');
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }, 300);
      }

      /* ── Client history ── */
      function loadClients() {
        try { return JSON.parse(localStorage.getItem(LS_CLIENTS)) || []; } catch { return []; }
      }
      function saveClients(arr) { safeSetItem(LS_CLIENTS, JSON.stringify(arr.slice(0, 8))); }

      function saveCurrentClient() {
        const name = val('c-name');
        if (!name) { toast(t('toast_client_name'), 3000); return; }
        const entry = {
          name,
          siren: val('c-siren'),
          email: val('c-email'),
          billing: val('c-billing'),
          delivery: val('c-delivery'),
          deliveryOn: $('toggle-delivery').checked,
        };
        const clients = loadClients().filter(c => c.name !== name);
        clients.unshift(entry);
        saveClients(clients);
        renderClientsDropdown();
        toast(t('toast_client_saved'));
      }

      function loadClient(entry) {
        const set = (id, v) => { if (v != null) { $(id).value = v; syncFilled($(id)); } };
        set('c-name', entry.name); set('c-siren', entry.siren); set('c-email', entry.email);
        set('c-billing', entry.billing); set('c-delivery', entry.delivery);
        const delOn = !!entry.deliveryOn;
        $('toggle-delivery').checked = delOn;
        $('delivery-field').classList.toggle('hidden', !delOn);
        $('c-delivery').disabled = !delOn;
        closeClientsDropdown();
        renderPreview();
        openSection(1);
      }

      function deleteClient(name) {
        const clients = loadClients().filter(c => c.name !== name);
        saveClients(clients);
        renderClientsDropdown();
      }

      function renderClientsDropdown() {
        const list = $('clients-list');
        const clients = loadClients();
        if (!clients.length) {
          list.innerHTML = `<div id="clients-empty">${t('fo_clients_empty')}</div>`;
          return;
        }
        list.innerHTML = clients.map(c => `
    <div class="client-item" data-client-name="${esc(c.name)}">
      <div class="client-item-info">
        <div class="client-item-name">${esc(c.name)}</div>
        <div class="client-item-sub">${esc(c.billing || c.email || '—').split('\n')[0]}</div>
      </div>
      <span class="client-del-btn" data-del-client="${esc(c.name)}" title="Supprimer">
        <svg class="w-3.5 h-3.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </span>
    </div>`).join('');
      }

      let clientsOpen = false;
      function openClientsDropdown() {
        clientsOpen = true;
        renderClientsDropdown();
        $('clients-dropdown').style.display = 'block';
      }
      function closeClientsDropdown() {
        clientsOpen = false;
        $('clients-dropdown').style.display = 'none';
      }

      /* ── Export history as CSV ── */
      function exportHistoryCSV() {
        const history = loadHistory();
        if (!history.length) { toast(t('history_empty'), 3000); return; }
        const cols = ['number', 'date', 'clientName', 'docType', 'status', 'total', 'currency'];
        const header = cols.join(';');
        const rows = history.map(h => cols.map(k => {
          const v = h[k] ?? '';
          const s = String(v).replace(/"/g, '""');
          return s.includes(';') || s.includes('\n') || s.includes('"') ? `"${s}"` : s;
        }).join(';'));
        const csv = [header, ...rows].join('\n');
        const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `iloveinvoice_history_${new Date().toISOString().slice(0,10)}.csv`;
        document.body.appendChild(a); a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }

      /* ══════════════════════════════════════════
         EVENTS
      ══════════════════════════════════════════ */
      // Country Modal Events
      $('btn-country-modal')?.addEventListener('click', openCountryModal);
      $('country-modal-backdrop')?.addEventListener('click', closeCountryModal);
      $('btn-close-country-modal')?.addEventListener('click', closeCountryModal);
      $('country-search')?.addEventListener('input', e => filterCountryModal(e.target.value));
      $('country-modal-list')?.addEventListener('click', e => {
        const item = e.target.closest('.country-modal-item');
        if (item) {
          setCountry(item.dataset.code);
          closeCountryModal();
        }
      });

      // Lang Modal Events
      $('btn-lang-modal')?.addEventListener('click', openLangModal);
      $('lang-modal-backdrop')?.addEventListener('click', closeLangModal);
      $('btn-close-lang-modal')?.addEventListener('click', closeLangModal);
      $('lang-modal-list')?.addEventListener('click', e => {
        const item = e.target.closest('.lang-modal-item');
        if (item) {
          setLangManual(item.dataset.lang);
          closeLangModal();
        }
      });

      // History Modal Events
      $('btn-history')?.addEventListener('click', openHistoryModal);
      $('history-modal-backdrop')?.addEventListener('click', closeHistoryModal);
      $('btn-close-history-modal')?.addEventListener('click', closeHistoryModal);
      $('history-search')?.addEventListener('input', () => renderHistoryModal());
      $('btn-export-history-csv')?.addEventListener('click', exportHistoryCSV);
      $('history-modal-list')?.addEventListener('click', e => {
        const loadBtn = e.target.closest('[data-history-load]');
        if (loadBtn) return loadFromHistory(loadBtn.dataset.historyLoad);
        const dupBtn = e.target.closest('[data-history-dup]');
        if (dupBtn) return duplicateFromHistory(dupBtn.dataset.historyDup);
        const delBtn = e.target.closest('[data-history-del]');
        if (delBtn) return deleteFromHistory(delBtn.dataset.historyDel);
        const cycleBtn = e.target.closest('[data-cycle-status]');
        if (cycleBtn) return cycleStatus(cycleBtn.dataset.cycleStatus);
      });

      // Logo remove button
      $('logo-remove-btn').addEventListener('click', e => { e.stopPropagation(); removeLogo(); });

      // Logo file input
      $('logo-file-input').addEventListener('change', function () {
        const file = this.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = e => {
          resizeLogoBase64(e.target.result, resized => {
            logoB64 = resized;
            applyLogoUI();
            saveEmetteur();
          });
        };
        reader.readAsDataURL(file);
      });

      // Doc type pill
      document.querySelectorAll('.doc-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => setDocType(btn.dataset.doc));
      });

      // Watermark pill
      document.querySelectorAll('.wm-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => applyWatermark(btn.dataset.wm));
      });

      // Deposit controls
      const toggleDeposit = $('toggle-deposit');
      if (toggleDeposit) {
        toggleDeposit.addEventListener('change', function () {
          deposit.enabled = this.checked;
          const depCtrl = $('deposit-controls');
          depCtrl.classList.toggle('hidden', !this.checked);
          if (this.checked) {
            deposit.mode = $('deposit-mode-percent').classList.contains('active-percent') ? 'percent' : 'fixed';
            updateDepositLabel();
          }
          renderPreview();
        });
      }

      document.querySelectorAll('.deposit-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const newMode = btn.dataset.mode;
          if (newMode !== deposit.mode) {
            deposit.mode = newMode;
            document.querySelectorAll('.deposit-pill-btn').forEach(b => b.className = 'deposit-pill-btn' + (b.dataset.mode === newMode ? ' active-' + newMode : ''));
            updateDepositLabel();
            renderPreview();
          }
        });
      });

      const depositValue = $('deposit-value');
      if (depositValue) {
        depositValue.addEventListener('input', function () {
          deposit.value = parseFloat(this.value) || 0;
          renderPreview();
        });
      }

      function updateDepositLabel() {
        const lbl = $('deposit-label');
        if (lbl) {
          lbl.textContent = t('deposit_value');
        }
      }

      // .iloveinvoice export
      $('fo-export-btn').addEventListener('click', exportFO);

      // .iloveinvoice import via button
      $('fo-import-btn').addEventListener('click', () => $('fo-file-input').click());
      $('fo-file-input').addEventListener('change', function () {
        importFOFile(this.files[0]);
        this.value = '';
      });

      // .iloveinvoice drag-drop on form panel
      const formPanel = $('form-panel');
      formPanel.addEventListener('dragover', e => { e.preventDefault(); document.body.classList.add('fo-drag-over'); });
      formPanel.addEventListener('dragleave', e => { if (!formPanel.contains(e.relatedTarget)) document.body.classList.remove('fo-drag-over'); });
      formPanel.addEventListener('drop', e => {
        e.preventDefault();
        document.body.classList.remove('fo-drag-over');
        const file = [...e.dataTransfer.files].find(f => f.name.endsWith('.iloveinvoice') || f.type === 'application/json');
        if (file) importFOFile(file);
      });

      // Client history dropdown
      $('fo-clients-btn').addEventListener('click', e => {
        e.stopPropagation();
        clientsOpen ? closeClientsDropdown() : openClientsDropdown();
      });
      $('clients-save-btn').addEventListener('click', e => { e.stopPropagation(); saveCurrentClient(); });
      $('clients-list').addEventListener('click', e => {
        const delBtn = e.target.closest('[data-del-client]');
        if (delBtn) { e.stopPropagation(); deleteClient(delBtn.dataset.delClient); return; }
        const item = e.target.closest('[data-client-name]');
        if (item) {
          const clients = loadClients();
          const entry = clients.find(c => c.name === item.dataset.clientName);
          if (entry) loadClient(entry);
        }
      });
      document.addEventListener('click', e => {
        if (clientsOpen && !$('fo-clients-btn').contains(e.target) && !$('clients-dropdown').contains(e.target)) {
          closeClientsDropdown();
        }
      });

      document.querySelectorAll('input:not([data-field]):not([data-remove]), textarea').forEach(el => {
        el.addEventListener('input', renderPreview);
        el.addEventListener('change', renderPreview);
      });
      document.querySelectorAll('select').forEach(el => el.addEventListener('change', renderPreview));

      $('inv-type').addEventListener('change', function () {
        const isCustom = this.value === 'custom';
        $('inv-type-custom-row').classList.toggle('hidden', !isCustom);
        $('inv-type-custom').disabled = !isCustom;
        if (isCustom) { $('inv-type-custom').focus(); }
        renderPreview();
      });

      ['e-name', 'e-siret', 'e-email', 'e-address', 'e-web'].forEach(id => $(id).addEventListener('input', saveEmetteur));

      $('e-siret').addEventListener('input', function () {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const formatter = ID_FORMATTERS[cfg.issuerIdFormatter] || ID_FORMATTERS.FREE;
        this.value = formatter(this.value);
        syncFilled(this);
      });

      $('c-siren').addEventListener('input', function () {
        const cfg = COUNTRIES[country] || COUNTRIES.FR;
        const formatter = ID_FORMATTERS[cfg.clientIdFormatter] || ID_FORMATTERS.FREE;
        this.value = formatter(this.value);
        syncFilled(this);
      });

      $('inv-payment').addEventListener('input', function () { this.dataset.userEdited = '1'; syncFilled(this); renderPreview(); });

      $('btn-clear-emetteur').addEventListener('click', clearEmetteur);

      $('toggle-delivery').addEventListener('change', function () {
        const on = this.checked;
        $('delivery-field').classList.toggle('hidden', !on);
        $('c-delivery').disabled = !on;
        if (on) $('c-delivery').focus();
        else { $('c-delivery').value = ''; syncFilled($('c-delivery')); }
        renderPreview();
      });

      $('toggle-tva').addEventListener('change', function () {
        $('tva-rate-row').classList.toggle('hidden', this.checked);
        renderPreview();
      });
      $('toggle-tva-advanced').addEventListener('change', function () {
        tvaAdvanced = this.checked;
        renderLines(); renderPreview();
      });
      $('tva-rate').addEventListener('change', renderPreview);

      // Global discount handlers
      $('toggle-discount-global').addEventListener('change', function () {
        discountGlobal.enabled = this.checked;
        $('discount-global-controls').classList.toggle('hidden', !this.checked);
        renderPreview();
      });
      document.querySelectorAll('.discount-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const rawMode = btn.dataset.mode; // 'percent' or 'fixed'
          // Normalize to '%' or '€' for consistent comparison in buildFooterHTML
          discountGlobal.type = rawMode === 'percent' ? '%' : '€';
          const cssMode = rawMode === 'percent' ? 'percent' : 'fixed';
          document.querySelectorAll('.discount-pill-btn').forEach(b => {
            b.classList.remove('active-percent', 'active-fixed');
          });
          btn.classList.add(`active-${cssMode}`);
          renderPreview();
        });
      });
      $('discount-global-value').addEventListener('input', () => {
        discountGlobal.value = parseFloat($('discount-global-value').value) || 0;
        syncFilled($('discount-global-value'));
        renderPreview();
      });

      $('lines-container').addEventListener('input', e => {
        const el = e.target, i = parseInt(el.dataset.index);
        if (isNaN(i)) return;
        if (el.dataset.field === 'desc') {
          lines[i].desc = el.value;
          // Show catalog suggestions
          const cat = getCatalog();
          const suggestions = el.value ? cat.filter(c => c.label.toLowerCase().includes(el.value.toLowerCase())).slice(0, 3) : [];
          if (suggestions.length > 0 && el.value) {
            const suggestText = suggestions.map(s => `${s.label} (${s.pu}€, ${s.unit || '—'})`).join('\n');
            el.title = `Suggestions:\n${suggestText}\n\n(Cliquez sur ⭐ pour sauvegarder)`;
          }
        }
        if (el.dataset.field === 'qty') lines[i].qty = parseFloat(el.value) || 0;
        if (el.dataset.field === 'pu') lines[i].pu = parseFloat(el.value) || 0;
        if (el.dataset.field === 'unit') lines[i].unit = el.value;
        if (el.dataset.field === 'discount') lines[i].discount = parseFloat(el.value) || 0;
        if (el.dataset.field === 'tvaRate') lines[i].tvaRate = el.value ? (el.value === 'custom' ? 'custom' : parseFloat(el.value)) : null;
        syncFilled(el);
        renderPreview();
      });
      $('lines-container').addEventListener('change', e => {
        const el = e.target, i = parseInt(el.dataset.index);
        if (isNaN(i)) return;
        // Handle discount type toggle (checkbox: % ↔ €)
        if (el.classList.contains('discount-type-check')) {
          lines[i].discountType = el.checked ? '€' : '%';
          renderPreview();
        }
        // Handle select changes (unit, tvaRate)
        if (el.dataset.field === 'unit' || el.dataset.field === 'tvaRate') {
          if (el.dataset.field === 'unit') lines[i].unit = el.value;
          if (el.dataset.field === 'tvaRate') lines[i].tvaRate = el.value ? (el.value === 'custom' ? 'custom' : parseFloat(el.value)) : null;
          syncFilled(el);
          renderPreview();
        }
      });
      $('lines-container').addEventListener('click', e => {
        // Handle discount type % / € pill buttons
        const discTypeBtn = e.target.closest('[data-discount-type-mode]');
        if (discTypeBtn) {
          const i = parseInt(discTypeBtn.dataset.index);
          if (!isNaN(i)) {
            const newType = discTypeBtn.dataset.discountTypeMode;
            lines[i].discountType = newType;
            // Update button styles in-place (no full re-render to keep row open)
            const siblingBtns = discTypeBtn.parentElement?.querySelectorAll('[data-discount-type-mode]');
            if (siblingBtns) {
              siblingBtns.forEach(b => {
                const active = b.dataset.discountTypeMode === newType;
                b.style.background = active ? '#4f6ef7' : '#f8fafc';
                b.style.color = active ? '#fff' : '#64748b';
                b.style.borderColor = active ? '#4f6ef7' : '#e2e8f0';
              });
            }
            renderPreview();
          }
          return;
        }
        // Handle expand button
        const expandBtn = e.target.closest('[data-expand]');
        if (expandBtn) {
          const i = parseInt(expandBtn.dataset.expand);
          const extraRow = expandBtn.closest('.line-row').nextElementSibling;
          if (extraRow && extraRow.classList.contains('line-row-extra')) {
            extraRow.classList.toggle('hidden');
          }
          return;
        }
        // Handle save to catalog button
        const saveBtn = e.target.closest('[data-save-catalog]');
        if (saveBtn) {
          const i = parseInt(saveBtn.dataset.saveCatalog);
          const ln = lines[i];
          if (ln.desc) {
            addToCatalog(ln.desc, ln.unit, ln.pu);
            toast(t('toast_catalog_saved'));
          }
          return;
        }
        // Handle duplicate line button
        const dupBtn = e.target.closest('[data-duplicate-line]');
        if (dupBtn) {
          const i = parseInt(dupBtn.dataset.duplicateLine);
          lines.splice(i + 1, 0, { ...lines[i] });
          renderLines(); renderPreview();
          return;
        }
        // Handle remove button
        const btn = e.target.closest('[data-remove]');
        if (!btn || lines.length <= 1) return;
        lines.splice(parseInt(btn.dataset.remove), 1);
        renderLines(); renderPreview();
      });

      // Drag & drop to reorder lines
      let _dragSrcIdx = null;
      $('lines-container').addEventListener('dragstart', e => {
        const handle = e.target.closest('.drag-handle');
        if (!handle) { e.preventDefault(); return; }
        const row = handle.closest('[data-line-index]');
        if (!row) return;
        _dragSrcIdx = parseInt(row.dataset.lineIndex);
        e.dataTransfer.effectAllowed = 'move';
        setTimeout(() => row.classList.add('drag-src'), 0);
      });
      $('lines-container').addEventListener('dragover', e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        $('lines-container').querySelectorAll('[data-line-index]').forEach(r => r.classList.remove('drag-over'));
        const row = e.target.closest('[data-line-index]');
        if (row && _dragSrcIdx !== null && parseInt(row.dataset.lineIndex) !== _dragSrcIdx) {
          row.classList.add('drag-over');
        }
      });
      $('lines-container').addEventListener('dragleave', e => {
        if (!e.relatedTarget || !$('lines-container').contains(e.relatedTarget)) {
          $('lines-container').querySelectorAll('[data-line-index]').forEach(r => r.classList.remove('drag-over'));
        }
      });
      $('lines-container').addEventListener('drop', e => {
        e.preventDefault();
        const row = e.target.closest('[data-line-index]');
        if (!row || _dragSrcIdx === null) return;
        const destIdx = parseInt(row.dataset.lineIndex);
        if (destIdx === _dragSrcIdx) return;
        const [moved] = lines.splice(_dragSrcIdx, 1);
        lines.splice(destIdx, 0, moved);
        _dragSrcIdx = null;
        renderLines(); renderPreview();
      });
      $('lines-container').addEventListener('dragend', () => {
        _dragSrcIdx = null;
        $('lines-container').querySelectorAll('[data-line-index]').forEach(r => {
          r.classList.remove('drag-src', 'drag-over');
        });
      });

      $('btn-add-custom-field')?.addEventListener('click', () => {
        customFields.push({ label: '', value: '' });
        renderCustomFields();
        renderPreview();
        requestAnimationFrame(() => {
          const inputs = $('custom-fields-list').querySelectorAll('[data-cf-label]');
          inputs[inputs.length - 1]?.focus();
        });
      });

      // Font picker
      const _loadedFonts = new Set();
      function ensureFontLoaded(name) {
        if (_loadedFonts.has(name)) return;
        _loadedFonts.add(name);
        const weights = name === 'Poppins' ? '300;400;500;600;700' : '300;400;500;700';
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(name)}:wght@${weights}&display=swap`;
        document.head.appendChild(link);
      }
      function updateFontSwatchUI() {
        document.querySelectorAll('.font-swatch').forEach(sw => {
          const active = sw.dataset.font === invFont;
          sw.style.borderColor = active ? accentColor : '';
          sw.style.color = active ? accentColor : '';
          sw.style.fontWeight = active ? '700' : '';
        });
      }
      document.querySelectorAll('.font-swatch').forEach(sw => {
        sw.addEventListener('click', () => {
          invFont = sw.dataset.font;
          if (invFont !== 'Inter') ensureFontLoaded(invFont);
          updateFontSwatchUI();
          renderPreview();
        });
      });
      updateFontSwatchUI();

      // Template picker
      function updateTemplateSwatchUI() {
        document.querySelectorAll('.tpl-swatch').forEach(sw => {
          const active = sw.dataset.tpl === invTemplate;
          sw.style.borderColor = active ? accentColor : '';
          sw.style.color = active ? accentColor : '';
          sw.style.fontWeight = active ? '700' : '';
        });
      }
      document.querySelectorAll('.tpl-swatch').forEach(sw => {
        sw.addEventListener('click', () => {
          invTemplate = sw.dataset.tpl;
          updateTemplateSwatchUI();
          renderPreview();
        });
      });
      updateTemplateSwatchUI();

      // Accent color picker
      function updateSwatchUI() {
        document.querySelectorAll('.accent-swatch[data-color]').forEach(sw => {
          const active = sw.dataset.color === accentColor;
          sw.style.ringColor = '';
          sw.classList.toggle('ring-brand-500', active);
          sw.classList.toggle('ring-offset-1', active);
          sw.style.outline = active ? `2px solid ${accentColor}` : '';
          sw.style.outlineOffset = active ? '2px' : '';
        });
      }
      document.querySelectorAll('.accent-swatch[data-color]').forEach(sw => {
        sw.addEventListener('click', () => {
          accentColor = sw.dataset.color;
          updateSwatchUI();
          updateFontSwatchUI();
          updateTemplateSwatchUI();
          renderPreview();
        });
      });
      $('accent-color-custom')?.addEventListener('input', e => {
        accentColor = e.target.value;
        updateSwatchUI();
        updateFontSwatchUI();
        renderPreview();
      });
      updateSwatchUI();

      $('btn-add-line').addEventListener('click', () => {
        lines.push({ desc: '', qty: 1, pu: 0, unit: '', discount: 0, discountType: '%', tvaRate: null });
        renderLines(); renderPreview();
        const card = document.querySelector('[data-section="3"]');
        if (!card.classList.contains('open')) openSection(3);
        requestAnimationFrame(() => {
          const ins = $('lines-container').querySelectorAll('[data-field="desc"]');
          ins[ins.length - 1]?.focus();
        });
      });

      const dlBtns = [$('btn-download'), $('btn-download-panel')].filter(Boolean);
      dlBtns.forEach(b => b.addEventListener('click', downloadPDF));

      $('btn-share')?.addEventListener('click', generateShareLink);
      $('btn-share-panel')?.addEventListener('click', generateShareLink);
      $('btn-email-panel')?.addEventListener('click', sendByEmail);

      window.addEventListener('resize', scalePreview);

      /* ══════════════════════════════════════════
         THEME (dark / light)
      ══════════════════════════════════════════ */
      function updateThemeIcons(isDark) {
        const sun = $('icon-sun'), moon = $('icon-moon');
        if (sun) sun.classList.toggle('hidden', !isDark);
        if (moon) moon.classList.toggle('hidden', isDark);
      }

      function initTheme() {
        const saved = localStorage.getItem('iloveinvoice_theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = saved ? saved === 'dark' : prefersDark;
        document.documentElement.classList.toggle('dark', isDark);
        updateThemeIcons(isDark);
      }

      function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        safeSetItem('iloveinvoice_theme', isDark ? 'dark' : 'light');
        updateThemeIcons(isDark);
      }

      initTheme();
      const themeBtn = $('btn-theme-toggle');
      if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

      /* ══════════════════════════════════════════
         ONBOARDING TOUR
      ══════════════════════════════════════════ */
      function startOnboarding() {
        if (localStorage.getItem('iloveinvoice_onboarded')) return;
        const TOUR_I18N = {
          fr: [
            { title: 'Pays & informations', desc: 'Choisissez votre pays et remplissez vos coordonnées. La fiscalité et la devise s\'adaptent automatiquement.' },
            { title: 'Lignes de prestation', desc: 'Ajoutez vos prestations, quantités et prix unitaires.' },
            { title: 'Téléchargez le PDF', desc: 'Votre facture est prête ! Téléchargez-la en un clic.' },
          ],
          en: [
            { title: 'Country & details', desc: 'Choose your country and fill in your issuer info. Tax rates and currency adapt automatically.' },
            { title: 'Line items', desc: 'Add your services, quantities and unit prices.' },
            { title: 'Download the PDF', desc: 'Your invoice is ready! Download it in one click.' },
          ],
          de: [
            { title: 'Land & Daten', desc: 'Wählen Sie Ihr Land und geben Sie Ihre Ausstellerdaten ein. Steuersätze passen sich automatisch an.' },
            { title: 'Positionen', desc: 'Fügen Sie Ihre Leistungen, Mengen und Stückpreise hinzu.' },
            { title: 'PDF herunterladen', desc: 'Ihre Rechnung ist fertig! Laden Sie sie mit einem Klick herunter.' },
          ],
          es: [
            { title: 'País e información', desc: 'Elija su país e introduzca sus datos de emisor. Las tasas fiscales se adaptan automáticamente.' },
            { title: 'Líneas de servicio', desc: 'Agregue sus servicios, cantidades y precios unitarios.' },
            { title: 'Descargar el PDF', desc: '¡Su factura está lista! Descárguela con un clic.' },
          ],
          pt: [
            { title: 'País & informações', desc: 'Escolha o seu país e preencha os dados do emissor. Taxas e moeda adaptam-se automaticamente.' },
            { title: 'Linhas de serviço', desc: 'Adicione seus serviços, quantidades e preços unitários.' },
            { title: 'Baixar o PDF', desc: 'Sua fatura está pronta! Baixe com um clique.' },
          ],
          it: [
            { title: 'Paese & dati', desc: 'Scegli il tuo paese e compila i dati dell\'emittente. Aliquote e valuta si adattano automaticamente.' },
            { title: 'Righe di servizio', desc: 'Aggiungi i tuoi servizi, quantità e prezzi unitari.' },
            { title: 'Scarica il PDF', desc: 'La tua fattura è pronta! Scaricala con un clic.' },
          ],
          nl: [
            { title: 'Land & gegevens', desc: 'Kies uw land en vul uw gegevens in. Belastingtarieven en valuta passen zich automatisch aan.' },
            { title: 'Regelitems', desc: 'Voeg uw diensten, hoeveelheden en eenheidsprijzen toe.' },
            { title: 'PDF downloaden', desc: 'Uw factuur is klaar! Download met één klik.' },
          ],
          ja: [
            { title: '国と情報', desc: '国を選択し、発行者の詳細を入力してください。税率と通貨が自動的に適応されます。' },
            { title: '明細行', desc: 'サービス、数量、単価を追加してください。' },
            { title: 'PDFをダウンロード', desc: '請求書の準備ができました！ワンクリックでダウンロード。' },
          ],
          sv: [
            { title: 'Land & uppgifter', desc: 'Välj ditt land och fyll i dina utfärdaruppgifter. Skattesatser anpassas automatiskt.' },
            { title: 'Rader', desc: 'Lägg till dina tjänster, kvantiteter och enhetspriser.' },
            { title: 'Ladda ner PDF', desc: 'Din faktura är klar! Ladda ner med ett klick.' },
          ],
          pl: [
            { title: 'Kraj & dane', desc: 'Wybierz kraj i wypełnij dane wystawcy. Stawki podatkowe dostosowują się automatycznie.' },
            { title: 'Pozycje', desc: 'Dodaj swoje usługi, ilości i ceny jednostkowe.' },
            { title: 'Pobierz PDF', desc: 'Twoja faktura jest gotowa! Pobierz jednym kliknięciem.' },
          ],
        };

        const targets = [
          () => document.getElementById('btn-country-modal'),
          () => document.querySelector('.section-card[data-section="3"]'),
          () => document.getElementById('btn-download'),
        ];

        let step = 0;
        let prevEl = null;
        const backdrop = document.createElement('div');
        backdrop.className = 'onboarding-backdrop';
        document.body.appendChild(backdrop);

        const tooltip = document.createElement('div');
        tooltip.className = 'onboarding-tooltip';
        document.body.appendChild(tooltip);

        function endTour() {
          if (prevEl) prevEl.classList.remove('onboarding-highlight');
          backdrop.remove();
          tooltip.remove();
          safeSetItem('iloveinvoice_onboarded', '1');
        }

        function showStep() {
          if (step >= targets.length) { endTour(); return; }
          if (prevEl) prevEl.classList.remove('onboarding-highlight');
          const el = targets[step]();
          if (!el) { step++; showStep(); return; }
          prevEl = el;
          el.classList.add('onboarding-highlight');
          el.scrollIntoView({ behavior: 'instant', block: 'center' });

          // Temporarily disable backdrop clicks during step transition to prevent click-through
          backdrop.style.pointerEvents = 'none';
          setTimeout(() => { backdrop.style.pointerEvents = ''; }, 200);

          const steps = TOUR_I18N[lang] || TOUR_I18N.en;
          const s = steps[step];
          const isLast = step === targets.length - 1;
          const skipLabel = { fr: 'Passer', en: 'Skip', de: 'Überspringen', es: 'Omitir', pt: 'Pular', it: 'Salta', nl: 'Overslaan', ja: 'スキップ', sv: 'Hoppa över', pl: 'Pomiń' };
          const nextLabel = { fr: 'Suivant', en: 'Next', de: 'Weiter', es: 'Siguiente', pt: 'Próximo', it: 'Avanti', nl: 'Volgende', ja: '次へ', sv: 'Nästa', pl: 'Dalej' };
          const doneLabel = { fr: 'C\'est parti !', en: 'Let\'s go!', de: 'Los geht\'s!', es: '¡Vamos!', pt: 'Vamos!', it: 'Iniziamo!', nl: 'Aan de slag!', ja: '始めましょう！', sv: 'Nu kör vi!', pl: 'Zaczynajmy!' };

          const dots = targets.map((_, i) => `<span class="onboarding-dot${i === step ? ' active' : ''}"></span>`).join('');
          tooltip.innerHTML = `<h4>${s.title}</h4><p>${s.desc}</p><div class="onboarding-tooltip-actions"><div class="onboarding-dots">${dots}</div><div style="display:flex;gap:6px"><button class="onboarding-btn onboarding-btn-skip" id="onb-skip">${skipLabel[lang] || skipLabel.en}</button><button class="onboarding-btn onboarding-btn-next" id="onb-next">${isLast ? (doneLabel[lang] || doneLabel.en) : (nextLabel[lang] || nextLabel.en)}</button></div></div>`;

          // Position tooltip below or above the element
          setTimeout(() => {
            const rect = el.getBoundingClientRect();
            const tt = tooltip.getBoundingClientRect();
            let top = rect.bottom + window.scrollY + 12;
            let left = rect.left + window.scrollX + (rect.width / 2) - (tt.width / 2);
            if (top + tt.height > window.scrollY + window.innerHeight) {
              top = rect.top + window.scrollY - tt.height - 12;
            }
            left = Math.max(8, Math.min(left, window.innerWidth - tt.width - 8));
            tooltip.style.top = top + 'px';
            tooltip.style.left = left + 'px';
          }, 100);

          document.getElementById('onb-skip').onclick = endTour;
          document.getElementById('onb-next').onclick = () => { step++; showStep(); };
        }

        backdrop.addEventListener('click', endTour);
        showStep();
      }

      /* ══════════════════════════════════════════
         INIT
      ══════════════════════════════════════════ */
      async function init() {
        const now = new Date(), pad = n => String(n).padStart(2, '0');
        const todayISO = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
        const due = new Date(now); due.setDate(due.getDate() + 30);
        const dueISO = `${due.getFullYear()}-${pad(due.getMonth() + 1)}-${pad(due.getDate())}`;

        $('inv-date').value = todayISO;
        $('inv-due').value = dueISO;
        $('inv-number').value = suggestInvoiceNumber();

        buildCountrySelect();

        // Parse hash route for SEO (#/GB/en, #/FR/fr, etc.)
        const hashRoute = parseHashRoute();
        const initCountry = hashRoute?.country || 'GB';
        setCountry(initCountry);
        loadEmetteur();
        initFL();
        initAccordion();
        if (hashRoute?.lang) { langOverride = true; setLang(hashRoute.lang); } else { setLang((COUNTRIES[initCountry] || COUNTRIES.FR).defaultLang); }
        const urlLang = new URLSearchParams(window.location.search).get('lang');
        if (urlLang && T[urlLang]) { langOverride = true; setLang(urlLang); }
        renderLines();

        // Check for shared invoice link (?data=...)
        const hasShareData = new URLSearchParams(window.location.search).has('data');
        if (hasShareData) {
          loadFromShareLink(); // async — intentional fire-and-forget in init
        }

        // Check localStorage quota and warn if approaching limit
        (async () => {
          try {
            let usedBytes = 0;
            if (navigator.storage && navigator.storage.estimate) {
              const est = await navigator.storage.estimate();
              usedBytes = est.usage || 0;
            } else {
              // Fallback: estimate from localStorage contents
              usedBytes = Object.keys(localStorage).reduce((s, k) => s + (localStorage.getItem(k) || '').length * 2, 0);
            }
            const usedMB = usedBytes / 1024 / 1024;
            if (usedMB > 4) {
              const banner = document.createElement('div');
              banner.id = 'storage-warning';
              banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#f59e0b;color:#fff;font-size:12px;font-weight:600;padding:10px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;';
              banner.innerHTML = `<span>⚠️ Stockage local presque plein (${usedMB.toFixed(1)} MB). Exportez ou supprimez d'anciens éléments.</span><button onclick="this.closest('#storage-warning').remove()" style="background:rgba(0,0,0,.15);border:none;color:#fff;padding:4px 10px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;">✕</button>`;
              document.body.appendChild(banner);
            }
          } catch {}
        })();

        // Duplicate invoice number detection
        $('inv-number').addEventListener('change', () => {
          const num = val('inv-number');
          if (!num) return;
          const exists = loadHistory().some(h => h.number === num);
          if (exists) toast(t('toast_duplicate_number'), 5000);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', e => {
          if (!e.ctrlKey && !e.metaKey) return;
          if (e.key === 'Enter') { e.preventDefault(); $('btn-add-line').click(); return; }
          switch (e.key.toLowerCase()) {
            case 'd': e.preventDefault(); downloadPDF(); break;
            case 's': e.preventDefault(); exportFO(); break;
          }
        });

        setTimeout(scalePreview, 60);
        // Start onboarding tour for first-time visitors (after share link check)
        if (!new URLSearchParams(window.location.search).has('data')) {
          setTimeout(startOnboarding, 500);
        }
      }

      init();
    })();
