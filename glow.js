// V3.5: Glow aleatório (cantos) — sem seguir mouse
(function(){
  try{
    // respeita reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var root = document.documentElement;

    // Âncoras (cantos + laterais) em vw/vh — com jitter leve
    var anchors = [
      [-18, -12], [18, -12],
      [-18,  14], [18,  14],
      [-22,   2], [22,   2],
      [  0, -14], [ 0,  16]
    ];

    function rand(min, max){ return Math.random() * (max - min) + min; }

    function pickAnchor(prevIdx){
      var idx;
      do { idx = Math.floor(Math.random() * anchors.length); }
      while (idx === prevIdx);
      var a = anchors[idx];
      // jitter suave para não parecer "teleporte" para o mesmo ponto
      var x = a[0] + rand(-3.2, 3.2);
      var y = a[1] + rand(-2.2, 2.2);
      var s = rand(0.98, 1.08);
      return { idx: idx, x: x, y: y, s: s };
    }

    function setVars(x, y, s, glow, halo){
      root.style.setProperty('--gX', x.toFixed(2) + 'vw');
      root.style.setProperty('--gY', y.toFixed(2) + 'vh');
      root.style.setProperty('--gS', s.toFixed(3));
      root.style.setProperty('--gO', glow.toFixed(3));
      root.style.setProperty('--hO', halo.toFixed(3));
    }

    // estado inicial (invisível)
    setVars(0, 18, 0.98, 0.0, 0.0);

    var prev = -1;

    function cycle(){
      var spot = pickAnchor(prev);
      prev = spot.idx;

      // Move para o próximo ponto ainda apagado
      setVars(spot.x, spot.y, spot.s, 0.0, 0.0);

      // Fade in
      setTimeout(function(){
        setVars(spot.x, spot.y, spot.s, 0.82, 0.68);
      }, 220);

      // Tempo aceso (lento)
      var onTime = rand(5200, 7800);

      // Fade out
      setTimeout(function(){
        setVars(spot.x, spot.y, spot.s, 0.0, 0.0);
      }, 220 + onTime);

      // Intervalo apagado e repete
      var offTime = rand(1800, 2600);
      setTimeout(cycle, 220 + onTime + 3600 + offTime);
    }

    // inicia
    setTimeout(cycle, 520);

  } catch(e){}
})();
