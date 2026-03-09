// ── NAV MENU TOGGLE ──
document.getElementById('menuBtn').addEventListener('click', function() {
  document.getElementById('navDropdown').classList.add('open');
});
document.getElementById('closeMenuBtn').addEventListener('click', function() {
  document.getElementById('navDropdown').classList.remove('open');
});
document.querySelectorAll('#navDropdown a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navDropdown').classList.remove('open');
  });
});

// ── MENU MODAL ──
function openMenu() {
  document.getElementById('menuModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('menuModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── TODAY'S HOURS ──
(function() {
  var now  = new Date();
  var day  = now.getDay();
  var time = now.getHours() + now.getMinutes() / 60;
  var schedule = {
    0: { open: 6.5, close: 21 },
    1: { open: 6.5, close: 21 },
    2: { open: 6.5, close: 21 },
    3: { open: 6.5, close: 21 },
    4: { open: 6.5, close: 22 },
    5: { open: 6.5, close: 22 },
    6: { open: 6.5, close: 21 }
  };
  var today  = schedule[day];
  var isOpen = time >= today.open && time < today.close;
  var statusEl = document.getElementById('today-status');
  var hoursEl  = document.getElementById('today-hours');
  if (statusEl) {
    statusEl.textContent = isOpen ? '● Open Now' : '● Closed';
    statusEl.style.color = isOpen ? '#6aaa70' : '#cc7050';
  }
  function fmt(h) {
    var hrs = Math.floor(h);
    var mins = h % 1 === 0.5 ? '30' : '00';
    return hrs + ':' + mins + ' ' + (hrs < 12 ? 'AM' : 'PM');
  }
  if (hoursEl) hoursEl.textContent = fmt(today.open) + ' – ' + fmt(today.close);
})();