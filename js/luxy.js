function lxlm(lx, m2) {
  let lm = lx * m2;
  return lm;
}

function lmlx(lm, m2) {
  let lx = lm / m2;
  return lx;
}

function lxcd(lx, m) {
  let cd = lx * m * m;
  return cd;
}

function cdlx(cd, m) {
  let lx = cd / (m * m);
  return lx;
}

function lmcd(lm, deg) {
  let rad = deg * Math.PI / 180;
  let cd = lm / (2 * Math.PI * (1 - Math.cos(rad / 2)));
  return cd;
}

function cdlm(cd, deg) {
  let rad = deg * Math.PI / 180;
  let lm = 2 * Math.PI * cd * (1 - Math.cos(rad / 2));
  return lm;
}

function lxcdlm(lx, m, deg) {
  let rad = deg * Math.PI / 180;
  let cd = lxcd(lx, m);
  let lm = cdlm(cd, deg);
  return lm;
}

function lmcdlx(lm, m, deg) {
  let rad = deg * Math.PI / 180;
  let cd = lmcd(lm, deg);
  let lx = cdlx(cd, m);
  return lx;
}

window.addEventListener("load", function() {

  const lxlm_lx = document.getElementById('lxlm_lx');
  const lxlm_m2 = document.getElementById('lxlm_m2');
  const lxlm_lm = document.getElementById('lxlm_lm');
  lxlm_lx.addEventListener("change", (e) => {
    lxlm_lm.value=lxlm(e.target.value, lxlm_m2.value);
  });
  lxlm_m2.addEventListener("change", (e) => {
    lxlm_lm.value=lxlm(lxlm_lx.value, e.target.value);
  });

  const lmlx_lm = document.getElementById('lmlx_lm');
  const lmlx_m2 = document.getElementById('lmlx_m2');
  const lmlx_lx = document.getElementById('lmlx_lx');
  lmlx_lm.addEventListener("change", (e) => {
    lmlx_lx.value=lmlx(e.target.value, lmlx_m2.value);
  });
  lmlx_m2.addEventListener("change", (e) => {
    lmlx_lx.value=lmlx(lmlx_lm.value, e.target.value);
  });

  const lxcd_lx = document.getElementById('lxcd_lx');
  const lxcd_m = document.getElementById('lxcd_m');
  const lxcd_m_ = document.getElementById('lxcd_m_');
  const lxcd_cd = document.getElementById('lxcd_cd');
  lxcd_lx.addEventListener("change", (e) => {
    lxcd_cd.value=lxcd(e.target.value, lxcd_m.value);
  });
  lxcd_m.addEventListener("change", (e) => {
    lxcd_m_.value=e.target.value;
    lxcd_cd.value=lxcd(lxcd_lx.value, e.target.value);
  });

  const cdlx_cd = document.getElementById('cdlx_cd');
  const cdlx_m = document.getElementById('cdlx_m');
  const cdlx_m_ = document.getElementById('cdlx_m_');
  const cdlx_lx = document.getElementById('cdlx_lx');
  cdlx_cd.addEventListener("change", (e) => {
    cdlx_lx.value=cdlx(e.target.value, cdlx_m.value);
  });
  cdlx_m.addEventListener("change", (e) => {
    cdlx_m_.value=e.target.value;
    cdlx_lx.value=cdlx(cdlx_cd.value, e.target.value);
  });

  const lmcd_lm = document.getElementById('lmcd_lm');
  const lmcd_deg = document.getElementById('lmcd_deg');
  const lmcd_cd = document.getElementById('lmcd_cd');
  lmcd_lm.addEventListener("change", (e) => {
    lmcd_cd.value=lmcd(e.target.value, lmcd_deg.value);
  });
  lmcd_deg.addEventListener("change", (e) => {
    lmcd_cd.value=lmcd(lmcd_lm.value, e.target.value);
  });

  const cdlm_cd = document.getElementById('cdlm_cd');
  const cdlm_deg = document.getElementById('cdlm_deg');
  const cdlm_lm = document.getElementById('cdlm_lm');
  cdlm_cd.addEventListener("change", (e) => {
    cdlm_lm.value=cdlm(e.target.value, cdlm_deg.value);
  });
  cdlm_deg.addEventListener("change", (e) => {
    cdlm_lm.value=cdlm(cdlm_cd.value, e.target.value);
  });

  const lxcdlm_lx = document.getElementById('lxcdlm_lx');
  const lxcdlm_m = document.getElementById('lxcdlm_m');
  const lxcdlm_m_ = document.getElementById('lxcdlm_m_');
  const lxcdlm_deg = document.getElementById('lxcdlm_deg');
  const lxcdlm_lm = document.getElementById('lxcdlm_lm');
  lxcdlm_lx.addEventListener("change", (e) => {
    lxcdlm_lm.value=lmcdlx(e.target.value, lxcdlm_m.value, lxcdlm_deg.value);
  });
  lxcdlm_m.addEventListener("change", (e) => {
    lxcdlm_m_.value=e.target.value;
    lxcdlm_lm.value=lmcdlx(lxcdlm_lx.value, e.target.value, lxcdlm_deg.value);
  });
  lxcdlm_deg.addEventListener("change", (e) => {
    lxcdlm_lm.value=lmcdlx(lxcdlm_lx.value, lxcdlm_m.value, e.target.value);
  });

  const lmcdlx_lm = document.getElementById('lmcdlx_lm');
  const lmcdlx_m = document.getElementById('lmcdlx_m');
  const lmcdlx_m_ = document.getElementById('lmcdlx_m_');
  const lmcdlx_deg = document.getElementById('lmcdlx_deg');
  const lmcdlx_lx = document.getElementById('lmcdlx_lx');
  lmcdlx_lm.addEventListener("change", (e) => {
    lmcdlx_lx.value=lmcdlx(e.target.value, lmcdlx_m.value, lmcdlx_deg.value);
  });
  lmcdlx_m.addEventListener("change", (e) => {
    lmcdlx_m_.value=e.target.value;
    lmcdlx_lx.value=lmcdlx(lmcdlx_lm.value, e.target.value, lmcdlx_deg.value);
  });
  lmcdlx_deg.addEventListener("change", (e) => {
    lmcdlx_lx.value=lmcdlx(lmcdlx_lm.value, lmcdlx_m.value, e.target.value);
  });

});
