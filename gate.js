(function(){
  var PASSWORD = "sgIndo#2026";
  if (sessionStorage.getItem('sg_gate_ok') === '1') return;
  var pass = prompt('This site is not public yet. Enter the access code:');
  if (pass === PASSWORD) {
    sessionStorage.setItem('sg_gate_ok', '1');
  } else {
    document.documentElement.innerHTML = '<p style="font-family:sans-serif;padding:40px;text-align:center;">Access code required.</p>';
    throw new Error('gate');
  }
})();
