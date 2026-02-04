// ====== DADOS (listas) ======
// Listas (mantidas como no arquivo original para Anápolis/Brasília)
    const anapolis = ['anapolis', 'barro alto', 'campo limpo de goias', 'carmo do rio verde', 'ceres', 'goianapolis', 'guaraita', 'guarinos', 'hidrolina', 'ipiranga de goias', 'itapaci', 'itapuranga', 'jaraguá', 'morro agudo de goiás', 'nova america', 'nova gloria', 'pilar de goias', 'rialma', 'rianapolis', 'rubiataba', 'santa isabel', 'santa rita do novo destino', 'sao luis do norte', 'sao miguel do araguaia', 'sao patricio', 'uruaçu', 'uruana', 'vila propicio'];
    const brasilia = ['abadiania', 'agua fria de goias', 'aguas lindas de goias', 'alexania', 'cabeceiras', 'cidade ocidental', 'cocalzinho de goias', 'corumba de goias', 'cristalina', 'formosa', 'luziania', 'mimoso de goias', 'novo gama', 'padre bernado', 'pirenopolis', 'planaltina', 'santo antonio do descoberto', 'valparaiso de goias', 'vila boa'];

    // Terceira lista: Nossa Abrangência (fornecida pelo usuário)
    const cobertura = ["Acreúna", "Abadia de Goias", "Adelândia", "Água Limpa", "Aloândia", "Alto Horizonte", "Alto Paraíso de Goiás", "Alvorada do Norte", "Amaralina", "Americano do Brasil", "Amorinópolis", "Anhanguera", "Anicuns", "Aparecida de Goiânia", "Aparecida do Rio Doce", "Aporé", "Araçu", "Aragarças", "Aragoiânia", "Araguapaz", "Arenópolis", "Aruanã", "Aurilândia", "Avelinópolis", "Baliza", "Bela Vista de Goiás", "Bom Jardim de Goiás", "Bom Jesus de Goiás", "Bonfinópolis", "Bonópolis", "Brazabrantes", "Britânia", "Buriti Alegre", "Buriti de Goiás", "Buritinópolis", "Cachoeira Alta", "Cachoeira de Goiás", "Cachoeira Dourada", "Caçu", "Caiapônia", "Caldas Novas", "Caldazinha", "Campestre de Goiás", "Campinaçu", "Campinorte", "Campo Alegre de Goiás", "Campos Belos", "Campos Verdes", "Castelândia", "Catalão", "Caturaí", "Cavalcante", "Cezarina", "Chapadão do Céu", "Colinas do Sul", "Córrego do Ouro", "Corumbaíba", "Cristianópolis", "Crixás", "Cromínia", "Cumari", "Damianópolis", "Damolândia", "Davinópolis", "Diorama", "Divinópolis de Goiás", "Doverlândia", "Edealina", "Edéia", "Estrela do Norte", "Faina", "Fazenda Nova", "Firminópolis", "Flores de Goiás", "Gameleira de Goiás", "Goiandira", "Goiânia", "Goianira", "Goiás", "Goiatuba", "Gouvelândia", "Guapó", "Guarani de Goiás", "Heitoraí", "Hidrolândia", "Iaciara", "Inaciolândia", "Indiara", "Inhumas", "Ipameri", "Iporá", "Israelândia", "Itaberaí", "Itaguari", "Itaguaru", "Itajá", "Itapirapuã", "Itarumã", "Itauçu", "Itumbiara", "Ivolândia", "Jandaia", "Jataí", "Jaupaci", "Jesúpolis", "Joviânia", "Jussara", "Lagoa Santa", "Leopoldo de Bulhões", "Mairipotaba", "Mambaí", "Mara Rosa", "Marzagão", "Matrinchã", "Maurilândia", "Minaçu", "Mineiros", "Moiporá", "Monte Alegre de Goiás", "Montes Claros de Goiás", "Montividiu", "Montividiu do Norte", "Morrinhos", "Mossâmedes", "Mozarlândia", "Mundo Novo", "Mutunópolis", "Nazário", "Nerópolis", "Niquelândia", "Nova Aurora", "Nova Crixás", "Nova Roma", "Nova Veneza", "Novo Brasil", "Novo Planalto", "Orizona", "Ouro Verde de Goiás", "Ouvidor", "Palestina de Goiás", "Palmeiras de Goiás", "Palmelo", "Palminópolis", "Panamá", "Paranaiguara", "Paraúna", "Perolândia", "Petrolina de Goiás", "Piracanjuba", "Piranhas", "Pires do Rio", "Pontalina", "Porangatu", "Porteirão", "Portelândia", "Posse", "Professor Jamil", "Quirinópolis", "Rio Quente", "Rio Verde", "Sanclerlândia", "Santa Bárbara de Goiás", "Santa Cruz de Goiás", "Santa Fé de Goiás", "Santa Helena de Goiás", "Santa Rita do Araguaia", "Santa Tereza de Goiás", "Santa Terezinha de Goiás", "Santo Antônio da Barra", "Santo Antônio de Goiás", "São Domingos", "São Francisco de Goiás", "São João da Paraúna", "São João d'Aliança", "São Luís de Montes Belos", "São Simão", "Senador Canedo", "Serranópolis", "Silvânia", "Simolândia", "Sítio d'Abadia", "Taquaral de Goiás", "Teresina de Goiás", "Terezópolis de Goiás", "Três Ranchos", "Trindade", "Trombas", "Turvânia", "Turvelândia", "Uirapuru", "Urutaí", "Varjão", "Vianópolis", "Vicentinópolis"];

    
// ====== NORMALIZAÇÃO / PARSING ======
// Normalização (remove acentos, caixa e espaços extras)
    const normalize = (s) => String(s)
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/\s+/g, ' ')
  .trim();

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
  return part;
}

    // Conjuntos normalizados
    const setAna = new Set(anapolis.map(normalize));
    const setBra = new Set(brasilia.map(normalize));
    const setCob = new Set(cobertura.map(normalize));

    // Mapa normalizado -> original (todas as listas)
    const allCities = [...anapolis, ...brasilia, ...cobertura];
    const normToOriginal = new Map(allCities.map(c => [normalize(c), c]));

    // Aliases úteis (abreviações/variações comuns)
    const aliases = new Map([
      [normalize('agua fria'), normalize('agua fria de goias')],
      [normalize('agua fria de go'), normalize('agua fria de goias')],
      [normalize('aguas lindas'), normalize('aguas lindas de goias')],
      [normalize('aguas lindas de go'), normalize('aguas lindas de goias')],
      [normalize('campo limpo'), normalize('campo limpo de goias')],
      [normalize('campo limpo de go'), normalize('campo limpo de goias')],
      [normalize('cid ocidental'), normalize('cidade ocidental')],
      [normalize('cid. ocidental'), normalize('cidade ocidental')],
      [normalize('cocalzinho'), normalize('cocalzinho de goias')],
      [normalize('cocalzinho de go'), normalize('cocalzinho de goias')],
      [normalize('corumba'), normalize('corumba de goias')],
      [normalize('corumba de go'), normalize('corumba de goias')],
      [normalize('ipiranga'), normalize('ipiranga de goias')],
      [normalize('ipiranga de go'), normalize('ipiranga de goias')],
      [normalize('mimoso'), normalize('mimoso de goias')],
      [normalize('mimoso de go'), normalize('mimoso de goias')],
      [normalize('morro agudo'), normalize('morro agudo de goiás')],
      [normalize('morro agudo de go'), normalize('morro agudo de goiás')],
      [normalize('morro agudo de goias'), normalize('morro agudo de goiás')],
      [normalize('pilar'), normalize('pilar de goias')],
      [normalize('pilar de go'), normalize('pilar de goias')],
      [normalize('s. luis do norte'), normalize('sao luis do norte')],
      [normalize('s. miguel do araguaia'), normalize('sao miguel do araguaia')],
      [normalize('s. patricio'), normalize('sao patricio')],
      [normalize('sta isabel'), normalize('santa isabel')],
      [normalize('sta rita do novo destino'), normalize('santa rita do novo destino')],
      [normalize('sta. isabel'), normalize('santa isabel')],
      [normalize('sta. rita do novo destino'), normalize('santa rita do novo destino')],
      [normalize('sto antonio do descoberto'), normalize('santo antonio do descoberto')],
      [normalize('sto. antonio do descoberto'), normalize('santo antonio do descoberto')],
      [normalize('v. boa'), normalize('vila boa')],
      [normalize('v. propicio'), normalize('vila propicio')],
      [normalize('valparaiso'), normalize('valparaiso de goias')],
      [normalize('valparaiso de go'), normalize('valparaiso de goias')],
      // Correção de digitação comum: Padre Bernardo (lista original tinha 'padre bernado')
      [normalize('padre bernardo'), normalize('padre bernado')],
    ]);

    
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

// Helper: debounce para estabilizar eventos de digitação
function debounce(fn, wait=120){
  let t;
  return (...args)=>{
    clearTimeout(t);
    t=setTimeout(()=>fn.apply(null,args), wait);
  };
}

    const q = document.getElementById('q');
    q.addEventListener('focus', () => {
      q.select();
    });

    const btn = document.getElementById('btn');
    const out = document.getElementById('out');
    const chipsAna = document.getElementById('chips-ana');
    const chipsBra = document.getElementById('chips-bra');
    const chipsCob = document.getElementById('chips-cob');

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

  const chips = Array.from(document.querySelectorAll('.chip'));
  const matches = chips.filter(chip => normalize(chip.textContent) === cityKeyNormalized);
  if (!matches.length) return false;

  // Destaca TODAS as ocorrências
  matches.forEach(el => el.classList.add('is-highlight'));

  // Rola até a primeira ocorrência
  const first = matches[0];
  first.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  requestAnimationFrame(() => { try { first.focus({ preventScroll: true }); } catch(e) {} });

  return true;
}
// ============================================================

    // Render chips
    function tag(text) { const s = document.createElement('span'); s.className='chip'; s.textContent=text; s.tabIndex=0; s.addEventListener('click', ()=>{ q.value = text; buscar(); }); s.addEventListener('keydown', (e)=>{ if(e.key==='Enter') { q.value=text; buscar(); } }); return s; }
    function renderLists() {
  if (!chipsAna || !chipsBra || !chipsCob) return;
  chipsAna.innerHTML = '';
  chipsBra.innerHTML = '';
  chipsCob.innerHTML = '';
  anapolis.forEach(c => chipsAna.appendChild(tag(c)));
  brasilia.forEach(c => chipsBra.appendChild(tag(c)));
  cobertura.forEach(c => chipsCob.appendChild(tag(c)));
}

  
// ====== RENDERIZAÇÃO DE RESULTADO & DICAS ======


// ====== RENDERIZAÇÃO DE RESULTADO & DICAS ====== + estados especiais
function mostrarResultado(termOriginal, focoCidade, status, sugestoes = [], aliasCanonico = null, listasEncontradas = []) {
  out.innerHTML = '';
  const outSug = ensureOutSuggest();
  if (outSug) { closeSuggestWrap(outSug); outSug.innerHTML = '';  }

  if (status === 'ana') out.appendChild(line(`<div class="badge ana">✖ Núcleo Anápolis</div>`));
  else if (status === 'bra') out.appendChild(line(`<div class="badge bra">✖ Núcleo Brasília</div>`));
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

  const labelCidade = aliasCanonico
    ? `${focoCidade} <span class="hint">→</span> <strong>${aliasCanonico}</strong>`
    : (focoCidade || '<i>não identificado</i>');

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
      b.addEventListener('click', () => { q.value = sText; buscar(); });
      actions.appendChild(b);
    });
    outSug.appendChild(sug);
    openSuggestWrap(outSug);
  }
}
function triggerBugNudge(msg = 'Cidade apareceu em mais de uma lista. Toque para reportar o bug.') {
  const rb = document.querySelector('.report-bugs a'); if (!rb) return; rb.classList.add('is-pulsing'); setTimeout(() => rb.classList.remove('is-pulsing'), 3000);
  const bubble = document.createElement('div'); bubble.className = 'report-bubble'; bubble.textContent = msg; document.body.appendChild(bubble);
  requestAnimationFrame(() => bubble.classList.add('is-show')); setTimeout(() => { bubble.classList.remove('is-show'); setTimeout(() => bubble.remove(), 220); }, 3000);
}

function line(html) { const d = document.createElement('div'); d.innerHTML = html; return d; }

    
// ====== BUSCA / AÇÕES ======

function buscar() {
  try {
    const raw = q.value || '';
    if (!raw.trim()) {
      const outSug = ensureOutSuggest();
      if (outSug) outSug.innerHTML = '';
      out.innerHTML = '<div class=\"hint\">Cole ou digite um texto contendo a cidade.</div>';
      return;
    }

    clearHighlights();

    const cidadeBruta = extractCity(raw);
    let key = normalize(cidadeBruta);
    let aliasCanonico = null;

    if (aliases.has(key)) {
      const canonicalKey = aliases.get(key);
      aliasCanonico = normToOriginal.get(canonicalKey) || null;
      key = canonicalKey;
    }

    const inAna = setAna.has(key);
    const inBra = setBra.has(key);
    const inCob = setCob.has(key);

    const listasEncontradas = [];
    if (inAna) listasEncontradas.push('ana');
    if (inBra) listasEncontradas.push('bra');
    if (inCob) listasEncontradas.push('nossa');

    if (listasEncontradas.length >= 2) {
      highlightCityByKey(key);
      mostrarResultado(raw, cidadeBruta, 'dup', [], aliasCanonico, listasEncontradas);
      triggerBugNudge('Cidade em múltiplas listas. Clique para reportar o bug.');
      return;
    }

    if (inAna) { highlightCityByKey(key); mostrarResultado(raw, cidadeBruta, 'ana', [], aliasCanonico); return; }
    if (inBra) { highlightCityByKey(key); mostrarResultado(raw, cidadeBruta, 'bra', [], aliasCanonico); return; }
    if (inCob) { highlightCityByKey(key); mostrarResultado(raw, cidadeBruta, 'nossa', [], aliasCanonico); return; }

    const sugs = topSuggestions(key, 2);
    mostrarResultado(raw, cidadeBruta, 'nao', sugs, aliasCanonico);
  } catch (err) {
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
    if (outSug) outSug.innerHTML = '';
    out.innerHTML = '<div class="hint">Cole ou digite um texto contendo a cidade.</div>';
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


    btn.addEventListener('click', buscar);
    q.addEventListener('keydown', (e) => { if (e.key === 'Enter') buscar(); });

    
// ====== INICIALIZAÇÃO ======
    if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', renderLists);
} else {
  renderLists();
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
