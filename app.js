// ====== DADOS (listas) ======
// Listas (mantidas como no arquivo original para Anápolis/Brasília)
    const anapolis = [ 'Anápolis', 'Barro Alto', 'Campo Limpo de Goiás', 'Carmo do Rio Verde', 'Ceres', 'Goianápolis','Goianésia', 'Guaraíta', 'Guarinos', 'Hidrolina', 'Ipiranga de Goiás', 'Itapaci', 'Itapuranga', 'Jaraguá', 'Morro Agudo de Goiás', 'Nova América', 'Nova Glória', 'Pilar de Goiás', 'Rialma', 'Rianápolis', 'Rubiataba', 'Santa Isabel', 'Santa Rita do Novo Destino', 'São Luís do Norte', 'São Miguel do Araguaia', 'São Patrício', 'Uruaçu', 'Uruana', 'Vila Propício' ];
    
    const brasilia = [ 'Abadiânia', 'Água Fria de Goiás', 'Águas Lindas de Goiás', 'Alexânia', 'Cabeceiras', 'Cidade Ocidental', 'Cocalzinho de Goiás', 'Corumbá de Goiás', 'Cristalina', 'Formosa', 'Luziânia', 'Mimoso de Goiás', 'Novo Gama', 'Padre Bernardo', 'Pirenópolis', 'Planaltina', 'Santo Antônio do Descoberto', 'Valparaíso de Goiás', 'Vila Boa' ];

    const cobertura = ["Acreúna", "Abadia de Goias", "Adelândia", "Água Limpa", "Aloândia", "Alto Horizonte", "Alto Paraíso de Goiás", "Alvorada do Norte", "Amaralina", "Americano do Brasil", "Amorinópolis", "Anhanguera", "Anicuns", "Aparecida de Goiânia", "Aparecida do Rio Doce", "Aporé", "Araçu", "Aragarças", "Aragoiânia", "Araguapaz", "Arenópolis", "Aruanã", "Aurilândia", "Avelinópolis", "Baliza", "Bela Vista de Goiás", "Bom Jardim de Goiás", "Bom Jesus de Goiás", "Bonfinópolis", "Bonópolis", "Brazabrantes", "Britânia", "Buriti Alegre", "Buriti de Goiás", "Buritinópolis", "Cachoeira Alta", "Cachoeira de Goiás", "Cachoeira Dourada", "Caçu", "Caiapônia", "Caldas Novas", "Caldazinha", "Campestre de Goiás", "Campinaçu", "Campinorte", "Campo Alegre de Goiás", "Campos Belos", "Campos Verdes", "Castelândia", "Catalão", "Caturaí", "Cavalcante", "Cezarina", "Chapadão do Céu", "Colinas do Sul", "Córrego do Ouro", "Corumbaíba", "Cristianópolis", "Crixás", "Cromínia", "Cumari", "Damianópolis", "Damolândia", "Davinópolis", "Diorama", "Divinópolis de Goiás", "Doverlândia", "Edealina", "Edéia", "Estrela do Norte", "Faina", "Fazenda Nova", "Firminópolis", "Flores de Goiás", "Gameleira de Goiás", "Goiandira", "Goiânia", "Goianira", "Goiás", "Goiatuba", "Gouvelândia", "Guapó", "Guarani de Goiás", "Heitoraí", "Hidrolândia", "Iaciara", "Inaciolândia", "Indiara", "Inhumas", "Ipameri", "Iporá", "Israelândia", "Itaberaí", "Itaguari", "Itaguaru", "Itajá", "Itapirapuã", "Itarumã", "Itauçu", "Itumbiara", "Ivolândia", "Jandaia", "Jataí", "Jaupaci", "Jesúpolis", "Joviânia", "Jussara", "Lagoa Santa", "Leopoldo de Bulhões", "Mairipotaba", "Mambaí", "Mara Rosa", "Marzagão", "Matrinchã", "Maurilândia", "Minaçu", "Mineiros", "Moiporá", "Monte Alegre de Goiás", "Montes Claros de Goiás", "Montividiu", "Montividiu do Norte", "Morrinhos", "Mossâmedes", "Mozarlândia", "Mundo Novo", "Mutunópolis", "Nazário", "Nerópolis", "Niquelândia", "Nova Aurora", "Nova Crixás", "Nova Roma", "Nova Veneza", "Novo Brasil", "Novo Planalto", "Orizona", "Ouro Verde de Goiás", "Ouvidor", "Palestina de Goiás", "Palmeiras de Goiás", "Palmelo", "Palminópolis", "Panamá", "Paranaiguara", "Paraúna", "Perolândia", "Petrolina de Goiás", "Piracanjuba", "Piranhas", "Pires do Rio", "Pontalina", "Porangatu", "Porteirão", "Portelândia", "Posse", "Professor Jamil", "Quirinópolis", "Rio Quente", "Rio Verde", "Sanclerlândia", "Santa Bárbara de Goiás", "Santa Cruz de Goiás", "Santa Fé de Goiás", "Santa Helena de Goiás", "Santa Rita do Araguaia", "Santa Tereza de Goiás", "Santa Terezinha de Goiás", "Santo Antônio da Barra", "Santo Antônio de Goiás", "São Domingos", "São Francisco de Goiás", "São João da Paraúna", "São João d'Aliança", "São Luís de Montes Belos", "São Simão", "Senador Canedo", "Serranópolis", "Silvânia", "Simolândia", "Sítio d'Abadia", "Taquaral de Goiás", "Teresina de Goiás", "Terezópolis de Goiás", "Três Ranchos", "Trindade", "Trombas", "Turvânia", "Turvelândia", "Uirapuru", "Urutaí", "Varjão", "Vianópolis", "Vicentinópolis"];

    
// ====== NORMALIZAÇÃO / PARSING ======
// Normalização (remove acentos, caixa e espaços extras)
    const normalize = (s) => String(s)
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/\s+/g, ' ')
  .trim();





// Escapa HTML (para manter render via innerHTML sem risco)
function escapeHtml(s){
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
// Extrai cidade após o último traço (-, –, —); se houver '/', ignora o sufixo.
    function extractCity(raw) {
  if (!raw) return '';
  const dashes = ['-', '–', '—'];
  let part = String(raw);
  let lastIdx = -1; let dashLen = 0;
  for (const d of dashes) {
    const i = part.lastIndexOf(d);
    if (i > lastIdx) { lastIdx = i; dashLen = d.length; }
  }
  if (lastIdx !== -1) part = part.slice(lastIdx + dashLen);
  const slashIdx = part.indexOf('/');
  if (slashIdx !== -1) part = part.slice(0, slashIdx);
  // Remove pontuação apenas nas pontas (compatível): mantém letras com acentos latinos, números e espaços.
  part = part
    .replace(/^[^0-9A-Za-zÀ-ÿ]+/g, '')
    .replace(/[^0-9A-Za-zÀ-ÿ\s]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  part = part.replace(/[<>]/g, '');
  return part;
}

    // Conjuntos normalizados
    const setAna = new Set(anapolis.map(normalize));
    const setBra = new Set(brasilia.map(normalize));
    const setCob = new Set(cobertura.map(normalize));

    // Mapa normalizado -> original (todas as listas)
    const allCities = [...anapolis, ...brasilia, ...cobertura];
    const normToOriginal = new Map(allCities.map(c => [normalize(c), c]));
// Aliases manuais desativados (IA local faz sugestões)
const aliases = new Map();

// Aliases dinâmicos (aprendizado local) — usado SOMENTE para sugestão (não aplica automaticamente)
const dynamicAliases = (()=>{
  try{
    const obj = JSON.parse(localStorage.getItem('aliases') || '{}');
    return new Map(Object.entries(obj));
  }catch(e){
    return new Map();
  }
})();

function rememberAlias(fromRaw, toCityText){
  const k = iaNormalizeInput(fromRaw);
  if(!k || !toCityText) return;
  dynamicAliases.set(k, normalize(toCityText));
  try{ localStorage.setItem('aliases', JSON.stringify(Object.fromEntries(dynamicAliases))); }catch(e){}
}

// =========================
// IA_DYNAMIC_ALIASES_INTEGRATION_V1
// - Usa aliases aprendidos (localStorage) para PRIORIZAR sugestões
// - NÃO aplica automaticamente (usuário continua escolhendo)
// =========================
function getDynamicAliasSuggestion(rawInput, extractedCity){
  try{
    const keys = [iaNormalizeInput(rawInput), iaNormalizeInput(extractedCity)];
    for (const k of keys){
      if(!k) continue;
      const mapped = dynamicAliases.get(k);
      if(!mapped) continue;

      const cityText =
        normToOriginal.get(mapped) ||
        normToOriginal.get(normalize(mapped));

      if(cityText) return cityText;
    }
  } catch(e){}
  return null;
}
    
// ====== SUGESTÕES / DISTÂNCIA ======
// Distância de Levenshtein (para sugestões)
    function levenshtein(a, b) {
      const m = a.length, n = b.length;
      if (!m) return n; if (!n) return m;
      const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));
      for (let i = 0; i <= m; i++) dp[i][0] = i;
      for (let j = 0; j <= n; j++) dp[0][j] = j;
      for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
          const cost = a[i-1] === b[j-1] ? 0 : 1;
          dp[i][j] = Math.min(
            dp[i-1][j] + 1,
            dp[i][j-1] + 1,
            dp[i-1][j-1] + cost
          );
        }
      }
      return dp[m][n];
    }

    function topSuggestions(v, limit = 2) {
  if (!v) return [];
  const all = [...anapolis, ...brasilia, ...cobertura];
  const allN = all.map(normalize);
  const scored = [];
  for (let i = 0; i < allN.length; i++) {
    const n = allN[i];
    let score;
    if (n.startsWith(v)) score = 0;
    else if (n.includes(v)) score = 1;
    else score = levenshtein(v, n) + 2;
    scored.push({ s: all[i], n, score });
  }
  scored.sort((a, b) => a.score - b.score);
  const thr = v.length <= 6 ? 2 : v.length <= 12 ? 3 : 4;
  const picks = [];
  for (const it of scored) {
    if (picks.length >= limit) break;
    const ok = (it.score <= 1) || ((it.score - 2) <= thr);
    if (ok) {
      if (!picks.find(p => normalize(p) === it.n)) picks.push(it.s);
    }
  }
  return picks;
}

    
// ====== IA LOCAL (afiada): sugere 1 quando óbvio, senão 3 ======
const IA_STOPWORDS = new Set(['de','do','da','dos','das','d','e']);
const IA_TOK_MAP = {
  // santo/santa/são
  'sto': 'santo', 'sant': 'santo', 'snt': 'santo', 'sta': 'santa', 'sn': 'sao',
  // descoberto
  'desc': 'descoberto', 'dsc': 'descoberto', 'descob': 'descoberto', 'descobr': 'descoberto',
  // aparecida
  'ap': 'aparecida',
};

function iaNormalizeInput(s){
  return normalize(String(s||''))
    .replace(/[^0-9a-z\s]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function iaTokenize(raw){
  const qn = iaNormalizeInput(raw);
  if(!qn) return [];
  const parts = qn.split(' ');
  const out = [];
  for (let i=0;i<parts.length;i++){
    let w = parts[i];
    if(!w) continue;
    if (IA_TOK_MAP[w]) w = IA_TOK_MAP[w];
    if (!w || IA_STOPWORDS.has(w)) continue;
    if (w.length < 2) continue; // ignora tokens curtos
    out.push(w);
  }
  // Heurística: "ap de go" / "ap de goiania" => tende a "aparecida de goiania"
  if(out.length >= 2 && out[0] === 'aparecida'){
    for(let i=1;i<out.length;i++){
      if(out[i] === 'go') out[i] = 'goiania';
    }
  }
  return out;
}

// Cache das cidades
const IA_ALL = (typeof allCities !== 'undefined' && Array.isArray(allCities)) ? allCities : [];
const IA_ALL_N = IA_ALL.map(normalize);
const IA_ALL_TOK = IA_ALL_N.map(s => s.split(' ').filter(t => t && !IA_STOPWORDS.has(t)));

function iaTokenAlignScore(qTokens, cityTokens){
  let pos=0, score=0, ok=0;
  for(const qt of qTokens){
    let found=-1;
    for(let j=pos;j<cityTokens.length;j++){
      if(cityTokens[j].startsWith(qt)) { found=j; break; }
    }
    if(found === -1){
      score -= 2.2;
      continue;
    }
    ok++;
    score += Math.min(7, qt.length) + (qt.length >= 4 ? 2.2 : 0);
    score -= (found - pos) * 0.35;
    pos = found + 1;
  }
  score += ok * 0.9;
  score -= Math.max(0, cityTokens.length - qTokens.length) * 0.15;
  return { score, ok };
}

const RANK_MEMO = new Map();
function rankSuggestions(inputRaw, limit=3){
  if(!IA_ALL.length) return { picks: [], best:null, second:null };

  const qNorm = iaNormalizeInput(inputRaw);
  const qTokens = iaTokenize(inputRaw);
  const memoKey = qNorm + '|' + limit;
  if (RANK_MEMO.has(memoKey)) return RANK_MEMO.get(memoKey);

  const scored = [];
  for(let i=0;i<IA_ALL.length;i++){
    const name = IA_ALL[i];
    const n = IA_ALL_N[i];
    let score = 0;

    const ta = iaTokenAlignScore(qTokens, IA_ALL_TOK[i]);
    score += ta.score;

    // penaliza falta de cobertura de tokens
    if (qTokens.length >= 2) score -= (qTokens.length - ta.ok) * 4.0;
    if (qTokens.length >= 2 && ta.ok === qTokens.length) score += 7.0;

    const d = levenshtein(qNorm, n);
    const distBonus = Math.max(0, 12 - d*2.2);
    score += distBonus;

    if(n.startsWith(qNorm) && qNorm.length >= 4) score += 6;
    else if(n.includes(qNorm) && qNorm.length >= 5) score += 2;

    // penaliza candidatos sem match quando tem 2+ tokens
    if(qTokens.length >= 2 && ta.ok === 0) score -= 8;

    scored.push({ name, score, d, ok: ta.ok });
  }

  scored.sort((a,b)=> b.score - a.score);
  const best = scored[0];
  const second = scored[1];

  const gap = (best && second) ? (best.score - second.score) : 999;
  const obviousByDist = (best && best.d <= 1 && qNorm.length >= 6);
  const fullCover = (best && qTokens.length >= 2 && best.ok === qTokens.length);
  const manyTokens = (best && best.ok >= 3 && qTokens.length >= 3);
  const obviousByTokens = fullCover || manyTokens;
  const obviousGap = fullCover ? (gap >= 6) : (gap >= 10);
  const single = (obviousByDist || obviousByTokens) && obviousGap;

  const picks=[];
  const seen=new Set();
  for(const it of scored){
    if(picks.length >= (single ? 1 : limit)) break;
    const k = normalize(it.name);
    if(seen.has(k)) continue;
    seen.add(k);
    picks.push(it.name);
  }

    const out = { picks, best, second };
  RANK_MEMO.set(memoKey, out);
  return out;
}

// ====== UI / ELEMENTOS ======


// === PATCH FPS (Edge): anima abertura/fechamento do container de sugestões por ALTURA REAL ===
function openSuggestWrap(wrap){
  if(!wrap) return;
  wrap.classList.add('is-open');
  wrap.style.height = '0px';
  wrap.getBoundingClientRect();
  var target = wrap.scrollHeight;
  wrap.style.height = target + 'px';
  var onEnd = function(e){
    if(e.propertyName !== 'height') return;
    wrap.style.height = 'auto';
    wrap.removeEventListener('transitionend', onEnd);
  };
  wrap.addEventListener('transitionend', onEnd);
}
function closeSuggestWrap(wrap){
  if(!wrap) return;
  var current = wrap.scrollHeight;
  wrap.style.height = current + 'px';
  wrap.getBoundingClientRect();
  wrap.style.height = '0px';
  wrap.classList.remove('is-open');
}

// Força o wrapper de sugestões a fechar imediatamente (útil ao segurar Backspace)
function hardResetSuggestWrap(wrap){
  if(!wrap) return;
  wrap.classList.remove('is-open');
  wrap.style.height = '0px';
  wrap.innerHTML = '';
}


// Helper: debounce para estabilizar eventos de digitação
function debounce(fn, wait=120){
  let t;
  return (...args)=>{
    clearTimeout(t);
    t=setTimeout(()=>fn.apply(null,args), wait);
  };
}

    const q = document.getElementById('q');

// === V4.0+: Auto-foco no campo ao voltar para a aba/janela (foco + select) ===
// Extra: não “rouba” foco se o usuário já estiver em outro campo editável.
(function autoFocusOnReturn(){
  const q = document.getElementById('q');
  if(!q) return;

  function isEditable(el){
    if(!el) return false;
    const tag = (el.tagName || '').toLowerCase();
    if(tag === 'input' || tag === 'textarea' || tag === 'select') return true;
    if(el.isContentEditable) return true;
    if(el.closest){
      const ce = el.closest('[contenteditable="true"], [contenteditable="plaintext-only"]');
      if(ce) return true;
    }
    return false;
  }

  function shouldAutoFocus(){
    const active = document.activeElement;
    if(active === q) return true;
    if(isEditable(active)) return false;
    return true;
  }

  function focusAndSelect(){
    if(!shouldAutoFocus()) return;
    try{ q.focus({preventScroll:true}); }catch(e){ q.focus(); }
    try{ q.select(); }catch(e){}
    requestAnimationFrame(()=>{ try{ q.select(); }catch(e){} });
  }

  if(document.visibilityState === 'visible') setTimeout(focusAndSelect, 80);
  document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'visible') setTimeout(focusAndSelect, 80);
  });
  window.addEventListener('focus', ()=> setTimeout(focusAndSelect, 80));
  window.addEventListener('pageshow', ()=> setTimeout(focusAndSelect, 80));
})();

    q.addEventListener('focus', () => {
      q.select();
    });

    const btn = document.getElementById('btn');
    const out = document.getElementById('out');
const copyBtn = document.getElementById('copyBtn');

    const chipsAna = document.getElementById('chips-ana');
    const chipsBra = document.getElementById('chips-bra');
    const chipsCob = document.getElementById('chips-cob');

// =====================================================
// V7.1.8.6 — Scrollbar custom (thumb-only) para as listas (.chips)
// =====================================================
function getCardOf(el){
  return el ? (el.closest ? el.closest('.card') : null) : null;
}
function ensureCustomScrollbar(chipsEl){
  const card = getCardOf(chipsEl);
  if(!card) return null;
  let bar = card.querySelector(':scope > .chips-scrollbar');
  if(!bar){
    bar = document.createElement('div');
    bar.className = 'chips-scrollbar';
    bar.setAttribute('aria-hidden','true');
    bar.innerHTML = '<div class="thumb"></div>';
    card.appendChild(bar);
  }
  return bar;
}
function syncCustomScrollbar(chipsEl){
  if(!chipsEl) return;
  const bar = ensureCustomScrollbar(chipsEl);
  if(!bar) return;
  const thumb = bar.querySelector('.thumb');
  const card = getCardOf(chipsEl);
  const scrollH = chipsEl.scrollHeight || 0;
  const viewH = chipsEl.clientHeight || 0;
  if(scrollH <= viewH + 1){ bar.classList.add('is-hidden'); return; }
  bar.classList.remove('is-hidden');
  const rChips = chipsEl.getBoundingClientRect();
  const rCard  = card.getBoundingClientRect();
  bar.style.top = (rChips.top - rCard.top) + 'px';
  bar.style.height = viewH + 'px';
  const ratio = viewH / scrollH;
  const minThumb = 26;
  const thumbH = Math.max(minThumb, Math.round(viewH * ratio));
  const maxTop = Math.max(0, viewH - thumbH);
  const t = chipsEl.scrollTop / Math.max(1, (scrollH - viewH));
  thumb.style.height = thumbH + 'px';
  thumb.style.top = Math.round(maxTop * t) + 'px';
}
function bindCustomScrollbar(chipsEl){
  if(!chipsEl) return;
  const bar = ensureCustomScrollbar(chipsEl);
  if(!bar) return;
  const thumb = bar.querySelector('.thumb');
  chipsEl.addEventListener('scroll', () => syncCustomScrollbar(chipsEl), {passive:true});
  bar.addEventListener('mousedown', (e) => {
    if(e.target === thumb) return;
    const rect = bar.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const scrollH = chipsEl.scrollHeight;
    const viewH = chipsEl.clientHeight;
    const maxScroll = Math.max(1, scrollH - viewH);
    const t = Math.min(1, Math.max(0, clickY / rect.height));
    chipsEl.scrollTop = t * maxScroll;
  });
  let dragging=false, startY=0, startTop=0;
  thumb.addEventListener('mousedown', (e) => {
    dragging=true; startY=e.clientY;
    startTop=parseFloat(getComputedStyle(thumb).top)||0;
    document.body.style.userSelect='none';
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e) => {
    if(!dragging) return;
    const rect = bar.getBoundingClientRect();
    const scrollH = chipsEl.scrollHeight;
    const viewH = chipsEl.clientHeight;
    const thumbH = thumb.getBoundingClientRect().height;
    const maxTop = Math.max(1, rect.height - thumbH);
    const dy = e.clientY - startY;
    const newTop = Math.min(maxTop, Math.max(0, startTop + dy));
    const t = newTop / maxTop;
    chipsEl.scrollTop = t * (scrollH - viewH);
  });
  window.addEventListener('mouseup', () => {
    if(!dragging) return;
    dragging=false; document.body.style.userSelect='';
  });
  requestAnimationFrame(() => syncCustomScrollbar(chipsEl));
}
function initCustomScrollbars(){
  try{
    [chipsAna, chipsBra, chipsCob].forEach(bindCustomScrollbar);
    window.addEventListener('resize', () => {
      [chipsAna, chipsBra, chipsCob].forEach(syncCustomScrollbar);
    });
  }catch(e){}
}


// ====== ÍNDICE DE CHIPS (performance) ======
let CHIP_INDEX = null;
function buildChipIndex(){
  CHIP_INDEX = new Map();
  document.querySelectorAll('.chip').forEach((el)=>{
    const k = normalize(el.textContent);
    if(!CHIP_INDEX.has(k)) CHIP_INDEX.set(k, []);
    CHIP_INDEX.get(k).push(el);
  });
}


// Helper: ensure external suggestion container exists
function ensureOutSuggest(){
  var el = document.getElementById('outSuggest');
  if (!el) {
    if (!out) return null;
    out.insertAdjacentHTML('afterend','<section id="outSuggest" class="result-suggest-wrap" aria-live="polite" aria-atomic="true"></section>');
    el = document.getElementById('outSuggest');
  }
  return el;
}
// ====== DESTAQUE NA LISTA ======
function clearHighlights() {
  document.querySelectorAll('.chip.is-highlight')
    .forEach(el => el.classList.remove('is-highlight'));
}

function highlightCityByKey(cityKeyNormalized) {
  if (!cityKeyNormalized) return false;
  clearHighlights();

  // Índice O(1) (reconstrói quando necessário)
  if (!CHIP_INDEX) buildChipIndex();
  const matches = CHIP_INDEX ? (CHIP_INDEX.get(cityKeyNormalized) || []) : [];
  if (!matches.length) return false;

  matches.forEach(el => el.classList.add('is-highlight'));
  const first = matches[0];
  first.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  requestAnimationFrame(() => { try { first.focus({ preventScroll: true }); } catch(e) {} });
  return true;
}
// ============================================================

    // Render chips
    function tag(text) { const s = document.createElement('span'); s.className='chip'; s.textContent=text; s.tabIndex=0; s.addEventListener('click', ()=>{ rememberAlias(q.value || text, normalize(text)); q.value = text; buscar(); }); s.addEventListener('keydown', (e)=>{ if(e.key==='Enter') { rememberAlias(q.value || text, normalize(text)); q.value=text; buscar(); } }); return s; }
    function renderLists() {
  if (!chipsAna || !chipsBra || !chipsCob) return;
  chipsAna.innerHTML = '';
  chipsBra.innerHTML = '';
  chipsCob.innerHTML = '';
  anapolis.forEach(c => chipsAna.appendChild(tag(c)));
  brasilia.forEach(c => chipsBra.appendChild(tag(c)));
  cobertura.forEach(c => chipsCob.appendChild(tag(c)));
  buildChipIndex();
}

  
// ====== RENDERIZAÇÃO DE RESULTADO & DICAS ======


// ====== RENDERIZAÇÃO DE RESULTADO & DICAS ====== + estados especiais
function mostrarResultado(termOriginal, focoCidade, status, sugestoes = [], aliasCanonico = null, listasEncontradas = []) {
  out.innerHTML = '';
  const outSug = ensureOutSuggest();
  if (outSug) { closeSuggestWrap(outSug); outSug.innerHTML = '';  }

  if (status === 'ana') out.appendChild(line(`<div class="badge ana">✖︎ Núcleo Anápolis</div>`));
  else if (status === 'bra') out.appendChild(line(`<div class="badge bra">✖︎ Núcleo Brasília</div>`));
  else if (status === 'nossa') out.appendChild(line(`<div class="badge ok">✔ Nossa abrangência</div>`));
  else if (status === 'dup') {
    out.appendChild(line(`<div class="badge nao">! erro — cidade presente em ${listasEncontradas.length} listas</div>`));
    const etiquetas = listasEncontradas.map(k => {
      if (k === 'ana') return 'Núcleos Anápolis';
      if (k === 'bra') return 'Núcleos Brasília';
      if (k === 'nossa') return 'Nossa Abrangência';
      return k;
    });
    out.appendChild(line(`<div class="hint">Conflito detectado em: <strong>${etiquetas.join(' · ')}</strong></div>`));
  } else {
    out.appendChild(line(`<div class="badge nao">⚠ Não localizado</div>`));
  }

  const labelCidade = (focoCidade ? escapeHtml(focoCidade) : '<i>não identificado</i>');

  out.appendChild(line(`<div>Cidade analisada: <strong>${labelCidade}</strong></div>`));

  if (status === 'nao' && Array.isArray(sugestoes) && sugestoes.length && outSug) {
    const sug = document.createElement('div');
    sug.className = 'suggest anim-drop';
    sug.setAttribute('role', 'status');
    sug.innerHTML = `
      <div class="sug-icon">💡</div>
      <div>
        <div class="sug-title">Você quis dizer</div>
        <div class="sug-sub">Selecione uma opção para aplicar</div>
      </div>
      <div class="sug-actions"></div>
    `;
    const actions = sug.querySelector('.sug-actions');
    sugestoes.forEach((sText) => {
      const b = document.createElement('button');
      b.className = 'sug-pill';
      b.type = 'button';
      b.textContent = sText;
      b.setAttribute('aria-label', `Usar sugestão ${sText}`);
      b.addEventListener('click', () => { rememberAlias(termOriginal, normalize(sText)); q.value = sText; buscar(); });
      actions.appendChild(b);
    });
    outSug.appendChild(sug);
    openSuggestWrap(outSug);
  }
}

function line(html) { const d = document.createElement('div'); d.innerHTML = html; return d; }

    
// ====== BUSCA / AÇÕES ======

function buscar() {
  try {
    const raw = q.value || '';
    if (!raw.trim()) {
      const outSug = ensureOutSuggest();
      if (outSug) { closeSuggestWrap(outSug); outSug.innerHTML = ''; outSug.style.height = '0px'; }
      out.innerHTML = '<div class=\"hint\">Cole ou digite um texto contendo a cidade.</div>';
      return;
    }

    clearHighlights();

    const cidadeBruta = extractCity(raw);
    const keyRaw = normalize(cidadeBruta);
    let key = keyRaw;
    let aliasCanonico = null;
    const inAna = setAna.has(keyRaw);
    const inBra = setBra.has(keyRaw);
    const inCob = setCob.has(keyRaw);

    const listasEncontradas = [];
    if (inAna) listasEncontradas.push('ana');
    if (inBra) listasEncontradas.push('bra');
    if (inCob) listasEncontradas.push('nossa');

    if (listasEncontradas.length >= 2) {
      highlightCityByKey(keyRaw);
      mostrarResultado(raw, cidadeBruta, 'dup', [], null, listasEncontradas);
return;
    }

    if (inAna) { highlightCityByKey(keyRaw); mostrarResultado(raw, cidadeBruta, 'ana', [], null); return; }
    if (inBra) { highlightCityByKey(keyRaw); mostrarResultado(raw, cidadeBruta, 'bra', [], null); return; }
    if (inCob) { highlightCityByKey(keyRaw); mostrarResultado(raw, cidadeBruta, 'nossa', [], null); return; }

const aliasPick = getDynamicAliasSuggestion(raw, cidadeBruta);

const ranked = rankSuggestions(cidadeBruta, 3);
let sugs = ranked.picks;

if (aliasPick){
  sugs = [aliasPick, ...sugs.filter(s => normalize(s) !== normalize(aliasPick))].slice(0, 3);
}

mostrarResultado(raw, cidadeBruta, 'nao', sugs, null);  } catch (err) {
    console.error('Erro no buscar():', err);
    try {
      const outSug = ensureOutSuggest();
      if (outSug) { closeSuggestWrap(outSug); outSug.innerHTML = '';  }
      if (out) out.innerHTML = "<div class=\"hint\">\u26a0 Ocorreu um erro ao processar o texto. Tente novamente.</div>";
    } catch (_) {}
  }
}


// ====== ACESSIBILIDADE / ATALHOS ======
    document.addEventListener('keydown', (e)=>{
      if (e.altKey && e.key === 'Enter') {
        const first = out.querySelector('.sug-actions .sug-pill');
        if (first) { first.click(); }
      }
    });

    
// ====== BUSCA AO DIGITAR (opção 2) ======
// Não exibe "Não localizado" com poucas letras; só busca a partir de 2 caracteres.
const AUTOSEARCH_MIN_CHARS = 2;

q.addEventListener('input', debounce(() => {
  const cidade = extractCity(q.value);
  const v = normalize(cidade);

  // Se apagou tudo, volta ao estado inicial
  if (!v) {
    q.removeAttribute('title');
    clearHighlights();
    const outSug = ensureOutSuggest();
    if (outSug) { closeSuggestWrap(outSug); outSug.innerHTML = ''; outSug.style.height = '0px'; }
    out.innerHTML = '<div class="hint">Cole ou digite um texto contendo a cidade.</div>';
    if (outSug) hardResetSuggestWrap(outSug);
    return;
  }

  // Mantém o title de sugestão (como antes)
  const all = [...anapolis, ...brasilia, ...cobertura];
  const found = all.find(c => normalize(c).startsWith(v));
  if (found && cidade.length > 1) {
    q.title = `Sugestão: ${found}`;
  } else {
    q.removeAttribute('title');
  }

  // Opção 2: só começa a avaliar após 2 letras
  if (v.length < AUTOSEARCH_MIN_CHARS) {
    clearHighlights();
    const outSug = ensureOutSuggest();
    if (outSug) { closeSuggestWrap(outSug); outSug.innerHTML = '';  }
    out.innerHTML = '<div class="hint">Digite pelo menos ' + AUTOSEARCH_MIN_CHARS + ' letras da cidade para localizar.</div>';
    return;
  }

  // Busca automática enquanto digita
  buscar();
}, 180));


    

// =========================
// V8.0.2 — Botão COLAR (da área de transferência)
// =========================
// =========================
// V8.0.3 — FIX: cliques rápidos não bugam o ícone do botão COLAR (📋/✅/⚠)
// =========================
const COPYBTN_DEFAULT_ICON = (copyBtn && String(copyBtn.textContent || '').trim())
  ? String(copyBtn.textContent).trim()
  : '📋';
let copyBtnTimer = null;

function setCopyBtnIcon(icon, { copiedClass = false, duration = 900 } = {}){
  if(!copyBtn) return;
  if(copyBtnTimer){ clearTimeout(copyBtnTimer); copyBtnTimer = null; }
  copyBtn.textContent = icon;
  copyBtn.classList.toggle('is-copied', !!copiedClass);
  copyBtnTimer = setTimeout(() => {
    copyBtn.textContent = COPYBTN_DEFAULT_ICON;
    copyBtn.classList.remove('is-copied');
    copyBtnTimer = null;
  }, duration);
}

function pulsePasted(){
  setCopyBtnIcon('✅', { copiedClass: true, duration: 900 });
}

function pulseWarn(){
  setCopyBtnIcon('⚠', { copiedClass: false, duration: 900 });
}

function pasteFromClipboard(){
  // A API de leitura do clipboard só funciona em contexto seguro (https/localhost) e com gesto do usuário.
  if (!window.isSecureContext || !(navigator.clipboard && navigator.clipboard.readText)) {
    if (q){
      try{ q.focus({preventScroll:true}); }catch(e){ q.focus(); }
      try{ q.select(); }catch(e){}
    }
    try{ copyBtn.title = 'Não foi possível ler a área de transferência aqui. Use Ctrl+V/⌘V no campo.'; }catch(e){}
    pulseWarn();
    return;
  }

  navigator.clipboard.readText()
    .then((txt) => {
      const t = String(txt || '').trim();
      if (!t){
        try{ copyBtn.title = 'Área de transferência vazia.'; }catch(e){}
        pulseWarn();
        return;
      }
      if (q){
        q.value = t;
        try{ q.focus({preventScroll:true}); }catch(e){ q.focus(); }
        try{ q.setSelectionRange(q.value.length, q.value.length); }catch(e){}
      }
      // dispara a busca imediatamente
      try{ buscar(); }catch(e){}
      try{ copyBtn.title = 'Colado!'; }catch(e){}
      pulsePasted();
    })
    .catch(() => {
      if (q){
        try{ q.focus({preventScroll:true}); }catch(e){ q.focus(); }
        try{ q.select(); }catch(e){}
      }
      try{ copyBtn.title = 'Permissão negada. Cole manualmente com Ctrl+V/⌘V.'; }catch(e){}
      pulseWarn();
    });
}
if (btn){ btn.addEventListener('click', buscar); }

// Botão colar (fica dentro do campo)
if (copyBtn){
  copyBtn.addEventListener('click', pasteFromClipboard);
}

    q.addEventListener('keydown', (e) => { if (e.key === 'Enter') buscar(); });

    
// ====== INICIALIZAÇÃO ======
    if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', renderLists);
  window.addEventListener('DOMContentLoaded', buildChipIndex);
  window.addEventListener('DOMContentLoaded', initCustomScrollbars);
} else {
  renderLists();
  buildChipIndex();
  initCustomScrollbars();
}

// ===== Easter egg: múltiplos cliques no crédito =====
(function() {
  const credit = document.getElementById('credit');
  if (!credit) return;

  let clicks = 0;
  let timer = null;
  const REQUIRED = 7;      // quantos cliques para ativar
  const WINDOW_MS = 2500;  // janela de tempo entre cliques

  function resetSoon() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { clicks = 0; }, WINDOW_MS);
  }

  credit.addEventListener('click', () => {
    clicks++;
    resetSoon();

    if (clicks >= REQUIRED) {
      credit.classList.toggle('is-revealed');
      clicks = 0;
    }
  });
})();
// ================================================



// === Detecta Edge e aplica classe para correções específicas (blur) ===
(function(){
  try{
    var ua = navigator.userAgent || '';
    if (ua.indexOf('Edg/') !== -1) document.documentElement.classList.add('is-edge');
  }catch(e){}
})();


// =========================
// THEME_TOGGLE_V1 — Alternância de tema (Light/Dark)
// - Escuro é padrão
// - Salva preferência no localStorage
// - Respeita prefers-color-scheme quando não há preferência salva
// =========================
(function(){
  const BTN = document.getElementById('themeBtn');
  if(!BTN) return;

  const KEY = 'theme_pref_v1';
  const root = document.documentElement;

  const ICON_SUN = '<path fill="currentColor" d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 1q-1.671 0-2.835-1.164Q8 13.67 8 12t1.165-2.835T12 8t2.836 1.165T16 12t-1.164 2.836T12 16m-7-3.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.745l2.111 2.135zM18.72 19.439l-2.117-2.141l.652-.702l2.16 2.098zM16.596 6.745l2.098-2.16l.745.695l-2.135 2.111zM4.562 18.72l2.14-2.117l.664.652l-2.08 2.179zM12 12"/>';
  const ICON_MOON = '<path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21"/>';

  function getSystemTheme(){
    try{
      return (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
    }catch(e){ return 'dark'; }
  }

  function setMetaThemeColor(theme){
    try{
      const meta = document.querySelector('meta[name="theme-color"]');
      if(!meta) return;
      meta.setAttribute('content', theme === 'light' ? '#f3f6fb' : '#0b1020');
    }catch(e){}
  }

  function renderBtn(theme){
    const svg = BTN.querySelector('svg');
    if(svg){
      svg.innerHTML = (theme === 'light') ? ICON_MOON : ICON_SUN;
    }
    const tip = (theme === 'light') ? 'Alternar para tema escuro' : 'Alternar para tema claro';
    BTN.setAttribute('data-tooltip', tip);
    BTN.setAttribute('aria-label', tip);
  }

  function apply(theme, persist=false){
    const t = (theme === 'light') ? 'light' : 'dark';
    if(t === 'light') root.setAttribute('data-theme','light');
    else root.removeAttribute('data-theme');
    renderBtn(t);
    setMetaThemeColor(t);
    if(persist){
      try{ localStorage.setItem(KEY, t); }catch(e){}
    }
  }

  let saved=null;
  try{ saved = localStorage.getItem(KEY); }catch(e){}
  const initial = (saved === 'light' || saved === 'dark') ? saved : getSystemTheme();
  apply(initial, false);

  BTN.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = (current === 'light') ? 'dark' : 'light';
    apply(next, true);
});
})();
