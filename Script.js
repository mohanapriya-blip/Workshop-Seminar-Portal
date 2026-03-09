// ═══ DATA ═══
const workshops = [
  {id:1,title:"Machine Learning Fundamentals",date:"Mar 15, 2025",time:"10:00 AM – 12:00 PM",venue:"Seminar Hall A, Main Building",instructor:"Dr. Rajesh Kumar",type:"offline",totalSeats:40,takenSeats:32,category:"Data",bg:"#dbeafe",emoji:"🤖",
  svg:`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="400" height="200" fill="#dbeafe"/><circle cx="340" cy="40" r="60" fill="#bfdbfe" opacity=".6"/><circle cx="60" cy="160" r="50" fill="#93c5fd" opacity=".4"/><rect x="110" y="70" width="130" height="85" rx="8" fill="#1e40af"/><rect x="118" y="78" width="114" height="68" rx="4" fill="#1e3a8a"/><rect x="126" y="85" width="40" height="5" rx="2" fill="#60a5fa"/><rect x="126" y="95" width="60" height="4" rx="2" fill="#93c5fd" opacity=".7"/><rect x="165" y="108" width="10" height="28" rx="2" fill="#34d399"/><rect x="178" y="100" width="10" height="36" rx="2" fill="#60a5fa"/><rect x="191" y="93" width="10" height="43" rx="2" fill="#a78bfa"/><rect x="204" y="105" width="10" height="31" rx="2" fill="#f59e0b"/><rect x="100" y="155" width="150" height="8" rx="4" fill="#1e40af"/><circle cx="290" cy="95" r="22" fill="#fde68a"/><rect x="268" y="118" width="44" height="55" rx="12" fill="#3b82f6"/><circle cx="55" cy="75" r="8" fill="#3b82f6" opacity=".8"/><circle cx="55" cy="100" r="8" fill="#3b82f6" opacity=".8"/><circle cx="55" cy="125" r="8" fill="#3b82f6" opacity=".8"/><circle cx="85" cy="87" r="8" fill="#60a5fa" opacity=".8"/><circle cx="85" cy="112" r="8" fill="#60a5fa" opacity=".8"/><circle cx="115" cy="100" r="8" fill="#1d4ed8" opacity=".8"/><line x1="63" y1="75" x2="77" y2="87" stroke="#93c5fd" stroke-width="1.5"/><line x1="63" y1="100" x2="77" y2="87" stroke="#93c5fd" stroke-width="1.5"/><line x1="63" y1="100" x2="77" y2="112" stroke="#93c5fd" stroke-width="1.5"/><line x1="63" y1="125" x2="77" y2="112" stroke="#93c5fd" stroke-width="1.5"/><line x1="93" y1="87" x2="107" y2="100" stroke="#93c5fd" stroke-width="1.5"/><line x1="93" y1="112" x2="107" y2="100" stroke="#93c5fd" stroke-width="1.5"/></svg>`,
  desc:"Explore machine learning fundamentals — supervised & unsupervised learning, model evaluation, and hands-on Python using scikit-learn and TensorFlow.",
  agenda:[{t:"10:00",s:"Introduction to ML concepts"},{t:"10:30",s:"Supervised learning hands-on"},{t:"11:15",s:"Model evaluation & tuning"},{t:"11:45",s:"Q&A and wrap-up"}]},

  {id:2,title:"Cybersecurity Basics",date:"Mar 18, 2025",time:"2:00 PM – 4:00 PM",venue:"Online (Zoom)",instructor:"Prof. Meera Nair",type:"online",totalSeats:80,takenSeats:45,category:"Tech",bg:"#fef3c7",emoji:"🔐",
  svg:`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="400" height="200" fill="#fef3c7"/><circle cx="350" cy="30" r="70" fill="#fde68a" opacity=".5"/><path d="M200 30 L260 55 L260 110 Q260 150 200 175 Q140 150 140 110 L140 55 Z" fill="#f97316" opacity=".9"/><path d="M200 45 L248 66 L248 110 Q248 143 200 163 Q152 143 152 110 L152 66 Z" fill="#ea580c"/><rect x="182" y="95" width="36" height="28" rx="5" fill="white" opacity=".95"/><path d="M188 95 Q188 78 200 78 Q212 78 212 95" stroke="white" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="200" cy="110" r="5" fill="#f97316"/><rect x="50" y="60" width="110" height="75" rx="8" fill="#1c1917"/><rect x="58" y="68" width="94" height="58" rx="4" fill="#0f172a"/><rect x="64" y="75" width="35" height="6" rx="2" fill="#f97316" opacity=".9"/><rect x="64" y="84" width="55" height="3" rx="2" fill="#fbbf24" opacity=".7"/><rect x="64" y="92" width="45" height="3" rx="2" fill="#34d399" opacity=".8"/><rect x="64" y="100" width="60" height="3" rx="2" fill="#60a5fa" opacity=".7"/><circle cx="320" cy="90" r="24" fill="#fed7aa"/><rect x="296" y="115" width="48" height="55" rx="12" fill="#f97316"/></svg>`,
  desc:"Core cybersecurity principles: threat assessment, network security, ethical hacking basics, and data protection strategies with hands-on exercises in a safe simulated environment.",
  agenda:[{t:"2:00",s:"Threat landscape overview"},{t:"2:30",s:"Network security fundamentals"},{t:"3:15",s:"Ethical hacking demo"},{t:"3:45",s:"Data protection best practices"}]},

  {id:3,title:"Effective Communication Skills",date:"Mar 20, 2025",time:"11:00 AM – 1:00 PM",venue:"Hall B, Block 2",instructor:"Dr. Tina Menon",type:"offline",totalSeats:30,takenSeats:27,category:"Soft",bg:"#d1fae5",emoji:"🎤",
  svg:`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="400" height="200" fill="#d1fae5"/><circle cx="360" cy="50" r="65" fill="#a7f3d0" opacity=".5"/><rect x="155" y="130" width="50" height="50" rx="4" fill="#065f46"/><rect x="145" y="120" width="70" height="14" rx="4" fill="#059669"/><rect x="177" y="90" width="6" height="28" rx="3" fill="#34d399"/><rect x="167" y="115" width="26" height="5" rx="2" fill="#34d399"/><ellipse cx="180" cy="88" rx="9" ry="13" fill="#10b981"/><circle cx="180" cy="58" r="22" fill="#fde68a"/><rect x="160" y="80" width="40" height="42" rx="10" fill="#059669"/><rect x="230" y="40" width="110" height="40" rx="12" fill="white" opacity=".95"/><polygon points="230,65 220,75 238,65" fill="white" opacity=".95"/><rect x="240" y="50" width="70" height="7" rx="3" fill="#10b981" opacity=".7"/><rect x="240" y="62" width="50" height="7" rx="3" fill="#d1fae5"/><circle cx="55" cy="155" r="12" fill="#fde68a"/><circle cx="90" cy="150" r="12" fill="#fed7aa"/><circle cx="125" cy="155" r="12" fill="#fde68a"/></svg>`,
  desc:"Develop professional communication: public speaking, presentation design, active listening, and persuasive writing. Build confidence for interviews and workplace interactions.",
  agenda:[{t:"11:00",s:"Public speaking fundamentals"},{t:"11:40",s:"Presentation skills workshop"},{t:"12:20",s:"Active listening exercises"},{t:"12:50",s:"Mock interview practice"}]},

  {id:4,title:"Data Science with Python",date:"Mar 22, 2025",time:"10:00 AM – 1:00 PM",venue:"Online (Google Meet)",instructor:"Dr. Suresh Iyer",type:"online",totalSeats:60,takenSeats:38,category:"Data",bg:"#ede9fe",emoji:"📊",
  svg:`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="400" height="200" fill="#ede9fe"/><circle cx="330" cy="40" r="70" fill="#ddd6fe" opacity=".6"/><rect x="40" y="50" width="180" height="120" rx="10" fill="white" opacity=".9"/><line x1="60" y1="145" x2="200" y2="145" stroke="#a78bfa" stroke-width="2"/><line x1="60" y1="65" x2="60" y2="145" stroke="#a78bfa" stroke-width="2"/><rect x="75" y="105" width="22" height="40" rx="4" fill="#8b5cf6" opacity=".85"/><rect x="105" y="85" width="22" height="60" rx="4" fill="#7c3aed"/><rect x="135" y="95" width="22" height="50" rx="4" fill="#a78bfa"/><rect x="165" y="72" width="22" height="73" rx="4" fill="#6d28d9"/><polyline points="86,105 116,85 146,95 176,72" stroke="#f59e0b" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="260" y="55" width="90" height="80" rx="10" fill="white" opacity=".85"/><text x="268" y="82" font-size="11" font-family="monospace" fill="#7c3aed" font-weight="bold">import</text><text x="268" y="97" font-size="11" font-family="monospace" fill="#059669">pandas</text><text x="268" y="112" font-size="11" font-family="monospace" fill="#7c3aed" font-weight="bold">as pd</text><text x="268" y="127" font-size="11" font-family="monospace" fill="#f59e0b">df.plot()</text></svg>`,
  desc:"A comprehensive intro to data science using Python. Data wrangling with Pandas, visualization with Matplotlib & Seaborn, statistical analysis, and predictive modeling basics.",
  agenda:[{t:"10:00",s:"Python for data science setup"},{t:"10:45",s:"Pandas data wrangling"},{t:"11:30",s:"Visualization with Matplotlib"},{t:"12:15",s:"Building your first ML model"}]},

  {id:5,title:"Web Development Bootcamp",date:"Mar 25, 2025",time:"10:00 AM – 1:00 PM",venue:"Online (Zoom)",instructor:"Prof. Anjali Singh",type:"online",totalSeats:50,takenSeats:20,category:"Tech",bg:"#fef9c3",emoji:"💻",
  svg:`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="400" height="200" fill="#fef9c3"/><circle cx="360" cy="30" r="80" fill="#fde047" opacity=".3"/><rect x="60" y="40" width="200" height="140" rx="10" fill="#1f2937"/><rect x="60" y="40" width="200" height="28" rx="10" fill="#374151"/><rect x="60" y="54" width="200" height="14" fill="#374151"/><circle cx="78" cy="54" r="6" fill="#ef4444"/><circle cx="96" cy="54" r="6" fill="#f59e0b"/><circle cx="114" cy="54" r="6" fill="#22c55e"/><rect x="76" y="80" width="30" height="6" rx="2" fill="#f59e0b"/><rect x="110" y="80" width="60" height="6" rx="2" fill="#60a5fa"/><rect x="76" y="94" width="80" height="5" rx="2" fill="#818cf8"/><rect x="84" y="107" width="35" height="5" rx="2" fill="#34d399"/><rect x="123" y="107" width="55" height="5" rx="2" fill="#fbbf24"/><rect x="76" y="120" width="30" height="6" rx="2" fill="#f59e0b"/><circle cx="320" cy="80" r="24" fill="#fde68a"/><rect x="298" y="104" width="46" height="55" rx="12" fill="#ca8a04"/></svg>`,
  desc:"Learn HTML, CSS, JavaScript, and React from scratch. Build real responsive websites and deploy them live. Perfect for complete beginners wanting to break into web development.",
  agenda:[{t:"10:00",s:"HTML & CSS foundations"},{t:"10:45",s:"JavaScript essentials"},{t:"11:30",s:"React intro & components"},{t:"12:15",s:"Deploy your first website"}]},

  {id:6,title:"UI/UX Design Fundamentals",date:"Mar 27, 2025",time:"2:00 PM – 5:00 PM",venue:"Design Lab, Block C",instructor:"Dr. Kavya Reddy",type:"offline",totalSeats:25,takenSeats:10,category:"Design",bg:"#fce7f3",emoji:"🎨",
  svg:`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="400" height="200" fill="#fce7f3"/><circle cx="350" cy="40" r="75" fill="#fbcfe8" opacity=".5"/><rect x="50" y="45" width="160" height="120" rx="10" fill="white" opacity=".95"/><rect x="62" y="58" width="136" height="30" rx="5" fill="none" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="4"/><rect x="62" y="95" width="60" height="55" rx="5" fill="none" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="4"/><rect x="128" y="95" width="70" height="24" rx="5" fill="none" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="4"/><rect x="128" y="125" width="70" height="25" rx="5" fill="#f472b6" opacity=".8"/><text x="143" y="141" font-size="9" font-family="sans-serif" fill="white" font-weight="bold">BUTTON</text><circle cx="270" cy="60" r="22" fill="#ec4899"/><circle cx="310" cy="55" r="18" fill="#f472b6"/><circle cx="345" cy="65" r="15" fill="#fbcfe8"/><circle cx="310" cy="130" r="22" fill="#fde68a"/><rect x="290" y="153" width="42" height="45" rx="11" fill="#db2777"/></svg>`,
  desc:"Learn design thinking, wireframing, prototyping in Figma, and user research. Create stunning interfaces and improve user experience for real-world applications.",
  agenda:[{t:"2:00",s:"Design thinking principles"},{t:"2:45",s:"Wireframing workshop"},{t:"3:30",s:"Figma prototyping hands-on"},{t:"4:15",s:"User testing & feedback"}]},

  {id:7,title:"Cloud Computing with AWS",date:"Apr 2, 2025",time:"9:00 AM – 12:00 PM",venue:"Online (Google Meet)",instructor:"Mr. Vikram Joshi",type:"online",totalSeats:70,takenSeats:30,category:"Tech",bg:"#e0f2fe",emoji:"☁️",
  svg:`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="400" height="200" fill="#e0f2fe"/><ellipse cx="200" cy="90" rx="95" ry="45" fill="white" opacity=".95"/><circle cx="145" cy="95" r="35" fill="white" opacity=".95"/><circle cx="255" cy="95" r="35" fill="white" opacity=".95"/><circle cx="180" cy="75" r="38" fill="white" opacity=".95"/><circle cx="220" cy="72" r="35" fill="white" opacity=".95"/><rect x="160" y="78" width="28" height="28" rx="5" fill="#f97316" opacity=".9"/><text x="165" y="97" font-size="13" font-family="sans-serif" fill="white" font-weight="bold">S3</text><rect x="194" y="78" width="28" height="28" rx="5" fill="#0ea5e9" opacity=".9"/><text x="196" y="97" font-size="10" font-family="sans-serif" fill="white" font-weight="bold">EC2</text><rect x="50" y="145" width="60" height="35" rx="6" fill="#0369a1"/><rect x="54" y="150" width="52" height="10" rx="3" fill="#0284c7"/><circle cx="98" cy="155" r="3" fill="#34d399"/><rect x="290" y="145" width="60" height="35" rx="6" fill="#0369a1"/><rect x="294" y="150" width="52" height="10" rx="3" fill="#0284c7"/><line x1="80" y1="145" x2="150" y2="118" stroke="#7dd3fc" stroke-width="2" stroke-dasharray="5"/><line x1="320" y1="145" x2="250" y2="118" stroke="#7dd3fc" stroke-width="2" stroke-dasharray="5"/></svg>`,
  desc:"Get hands-on with Amazon Web Services — EC2, S3, RDS, Lambda, and more. Learn to deploy scalable cloud applications and understand cloud architecture patterns used in industry.",
  agenda:[{t:"9:00",s:"Cloud fundamentals & AWS intro"},{t:"9:45",s:"EC2 & S3 hands-on labs"},{t:"10:30",s:"Database services (RDS)"},{t:"11:15",s:"Serverless with Lambda"}]},

  {id:8,title:"Public Speaking Masterclass",date:"Apr 5, 2025",time:"11:00 AM – 2:00 PM",venue:"Auditorium, Main Block",instructor:"Prof. Ritu Sharma",type:"offline",totalSeats:100,takenSeats:60,category:"Soft",bg:"#fef3c7",emoji:"🏆",
  svg:`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="400" height="200" fill="#fef3c7"/><polygon points="200,0 140,85 260,85" fill="#fef08a" opacity=".6"/><rect x="100" y="155" width="200" height="15" rx="4" fill="#d97706"/><circle cx="200" cy="110" r="24" fill="#fde68a"/><rect x="178" y="134" width="44" height="22" rx="10" fill="#d97706"/><ellipse cx="200" cy="87" rx="8" ry="11" fill="#78350f"/><rect x="156" y="138" width="24" height="10" rx="5" fill="#fde68a" transform="rotate(-15 156 138)"/><rect x="220" y="136" width="24" height="10" rx="5" fill="#fde68a" transform="rotate(15 220 136)"/><circle cx="80" cy="155" r="11" fill="#fbbf24"/><circle cx="110" cy="150" r="11" fill="#fde68a"/><circle cx="140" cy="153" r="11" fill="#fed7aa"/><circle cx="260" cy="153" r="11" fill="#fde68a"/><circle cx="290" cy="150" r="11" fill="#fbbf24"/><circle cx="320" cy="155" r="11" fill="#fed7aa"/><rect x="330" y="65" width="40" height="35" rx="5" fill="#f59e0b"/><text x="340" y="88" font-size="14" font-family="sans-serif">🏆</text><path d="M235 95 Q245 85 235 75" stroke="#f59e0b" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M242 98 Q258 85 242 72" stroke="#fbbf24" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  desc:"Master the art of public speaking, storytelling, and stage presence. Learn to handle stage fright, structure speeches, and engage large audiences with confidence and clarity.",
  agenda:[{t:"11:00",s:"Overcoming stage fright"},{t:"11:45",s:"Storytelling techniques"},{t:"12:30",s:"Live speech practice"},{t:"1:15",s:"Feedback & coaching session"}]},
];

// ═══ STATE ═══
let currentUser = null;
let currentWs = null;
let wsFilter = 'all';
let pendingRegister = false;

// ═══ SCREEN NAVIGATION ═══
function showScreen(name) {
  if(name==='dashboard' && !currentUser) { openAuth('signup'); return; }
  if(name==='analytics') { setTimeout(buildAnalyticsPublic, 120); }
  if(name==='interests') { setTimeout(()=>{ renderGrid(workshops,'featuredGrid'); document.querySelectorAll('#screen-interests .reveal').forEach(el=>el.classList.add('visible')); },50); }
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const nl = document.getElementById('nl-' + name);
  if(nl) nl.classList.add('active');
  window.scrollTo(0,0);
  if(name === 'landing') {
    setTimeout(()=>{
      document.querySelectorAll('.reveal').forEach((el,i) => setTimeout(()=>el.classList.add('visible'), i*100));
    }, 100);
  }
}

// ═══ RENDER CARD ═══
function makeCard(w) {
  const pct = Math.round((w.takenSeats / w.totalSeats) * 100);
  const remaining = w.totalSeats - w.takenSeats;
  const full = remaining <= 0;
  return `<div class="wcard" onclick="openDetail(${w.id})">
    <div class="wthumb">
      ${w.svg}
      <span class="wtype-badge ${w.type}">${w.type==='online'?'🌐 Online':'📍 Offline'}</span>
    </div>
    <div class="wbody">
      <div class="wtitle">${w.title}</div>
      <div class="wmeta"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${w.date}</div>
      <div class="wmeta"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${w.type==='online'?w.venue:w.venue.split(',')[0]}</div>
      <div class="wmeta"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>${w.instructor}</div>
      <div class="seat-bar">
        <div class="seat-bar-bg"><div class="seat-bar-fill" style="width:${pct}%"></div></div>
        <div class="seat-bar-text"><span>${remaining} seats left</span><span>${pct}% full</span></div>
      </div>
      <div class="wfoot">
        <span class="seats-pill">${full?'🔴 Full':'🟢 Open'}</span>
        <button class="btn ${full?'btn-outline':'btn-teal'}" style="padding:6px 14px;font-size:.76rem;" onclick="event.stopPropagation();openDetail(${w.id})">${full?'Waitlist':'View & Register'}</button>
      </div>
    </div>
  </div>`;
}

function renderGrid(list, containerId) {
  const g = document.getElementById(containerId);
  if(!list.length) { g.innerHTML='<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:40px;font-size:.9rem;">No workshops found.</p>'; return; }
  g.innerHTML = list.map(makeCard).join('');
}

// ═══ HERO UPCOMING ═══
function renderHeroUpcoming() {
  const list = workshops.slice(0,4);
  document.getElementById('heroUpcoming').innerHTML = list.map(w=>`
    <div class="upcoming-item" onclick="openDetail(${w.id})" style="cursor:pointer;">
      <div class="up-emoji" style="background:${w.bg}">${w.emoji}</div>
      <div>
        <div class="up-title">${w.title}</div>
        <div class="up-meta">${w.date} · ${w.type==='online'?'Online':w.venue.split(',')[0]}</div>
      </div>
      <span class="up-seats" style="background:${w.totalSeats-w.takenSeats<=5?'#FEF2F2':'#F0FDFA'};color:${w.totalSeats-w.takenSeats<=5?'#DC2626':'#1B3A6B'}">${w.totalSeats-w.takenSeats} left</span>
    </div>`).join('');
}

// ═══ WORKSHOPS SCREEN ═══
function filterWorkshops() {
  const s = document.getElementById('wsSearch').value.toLowerCase();
  let list = workshops;
  if(wsFilter==='online') list = list.filter(w=>w.type==='online');
  else if(wsFilter==='offline') list = list.filter(w=>w.type==='offline');
  else if(wsFilter==='upcoming') list = list.slice(0,5);
  if(s) list = list.filter(w=>w.title.toLowerCase().includes(s)||w.instructor.toLowerCase().includes(s));
  renderGrid(list,'workshopsGrid');
}

function setWsFilter(f, el) {
  wsFilter = f;
  document.querySelectorAll('.ws-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  filterWorkshops();
}

function filterAndGo(cat) {
  showScreen('workshops');
  wsFilter = 'all';
  document.querySelectorAll('.ws-tab').forEach(t=>t.classList.remove('active'));
  document.querySelector('.ws-tab').classList.add('active');
  const map = {Tech:['Tech'],Data:['Data'],Design:['Design'],Soft:['Soft']};
  const cats = map[cat]||[];
  renderGrid(workshops.filter(w=>cats.includes(w.category)),'workshopsGrid');
}

function handleGlobalSearch(val) {
  if(val.length > 1) {
    showScreen('workshops');
    document.getElementById('wsSearch').value = val;
    filterWorkshops();
  }
}

// ═══ DETAIL SCREEN ═══
function openDetail(id) {
  const w = workshops.find(x=>x.id===id);
  currentWs = w;
  document.getElementById('dTitle').textContent = w.title;
  document.getElementById('dBreadcrumb').textContent = w.title;
  document.getElementById('dTypeBadge').textContent = w.type==='online'?'🌐 Online':'📍 Offline';
  document.getElementById('dTypeBadge').className = `d-badge ${w.type==='online'?'db-green':'db-white'}`;
  document.getElementById('dDate').textContent = w.date;
  document.getElementById('dTime').textContent = w.time;
  document.getElementById('dVenue').textContent = w.venue;
  document.getElementById('dInstructor').textContent = w.instructor;
  document.getElementById('dDesc').textContent = w.desc;
  document.getElementById('dThumb').innerHTML = w.svg;
  // Agenda
  document.getElementById('dAgenda').innerHTML = w.agenda.map(a=>`
    <div class="agenda-item">
      <div class="agenda-dot"></div>
      <div class="agenda-time">${a.t}</div>
      <div class="agenda-text">${a.s}</div>
    </div>`).join('');
  // Seats
  const remaining = w.totalSeats - w.takenSeats;
  const pct = Math.round((w.takenSeats/w.totalSeats)*100);
  document.getElementById('dSeatsLabel').textContent = `${remaining} seats remaining`;
  document.getElementById('dSeatsCount').textContent = `${w.takenSeats}/${w.totalSeats} registered`;
  document.getElementById('dSeatsFill').style.width = pct+'%';
  document.getElementById('dSeatsFill').style.background = pct>=90?'#EF4444':pct>=70?'#F59E0B':'linear-gradient(90deg,var(--teal),var(--teal-light))';
  // Register button
  const btn = document.getElementById('registerBtn');
  if(remaining<=0) {
    btn.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> Join Waitlist';
    btn.style.background='#F59E0B'; btn.disabled=false;
  } else {
    btn.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> Register';
    btn.disabled=false; btn.style.background='';
  }
  // Seat countdown — show urgently if <10 seats left
  const countdown = document.getElementById('seatCountdown');
  const countdownTxt = document.getElementById('seatCountdownText');
  if(countdown) {
    if(remaining > 0 && remaining <= 10) {
      countdownTxt.textContent = '⚡ Only ' + remaining + ' seat' + (remaining===1?'':'s') + ' left — register now!';
      countdown.style.display = 'flex';
    } else { countdown.style.display = 'none'; }
  }
  showScreen('detail');
  // Start countdown timer
  startCountdown(w.date, w.time);
  // Show cert button only if already registered
  const certBtn = document.getElementById('certBtn');
  if(certBtn) certBtn.style.display = registeredWorkshops.find(x=>x.id===id) ? 'flex' : 'none';
}

function handleRegister() {
  if(!currentUser) {
    pendingRegister = true;
    openAuth('signup'); // open signup by default — they can switch to login if they have an account
    return;
  }
  showSuccess();
}

// ═══ AUTH ═══
let authMode = 'login';

// ════════════════════════════════════
// AUTH OPEN / CLOSE
// ════════════════════════════════════
function openAuth(mode) {
  authMode = mode;
  switchAuthTab(mode);
  document.getElementById('authScreen').classList.add('active');
}
function closeAuth() {
  document.getElementById('authScreen').classList.remove('active');
  setAuthError('');
  pendingRegister = false;
}

// ════════════════════════════════════
// SWITCH TABS
// ════════════════════════════════════
function switchAuthTab(mode) {
  authMode = mode;
  ['login','signup','admin'].forEach(m => {
    document.getElementById(m+'Fields').style.display = m===mode?'block':'none';
    document.getElementById('tab'+m.charAt(0).toUpperCase()+m.slice(1)).classList.toggle('active', m===mode);
  });
  // Social OAuth — hide for admin
  const socRow = document.getElementById('authSocialRow');
  const divRow = document.getElementById('authDivider');
  if(socRow) socRow.style.display = mode==='admin'?'none':'grid';
  if(divRow) divRow.style.display = mode==='admin'?'none':'flex';
  // Top gradient — darker for admin
  const top = document.getElementById('authTop');
  if(top) top.style.background = mode==='admin'?'linear-gradient(135deg,#060D18,#0D1E35)':'';
  // Titles
  const titles = {
    login:  ['Welcome back 👋',       'Sign in to your student account'],
    signup: ['Create account 🎓',     'Join thousands of campus learners'],
    admin:  ['Admin Sign In 🔐',      'Restricted — authorised personnel only']
  };
  document.getElementById('authTitle').textContent    = titles[mode][0];
  document.getElementById('authSubtitle').textContent = titles[mode][1];
  // Button
  document.getElementById('authBtnText').textContent = {login:'Sign In',signup:'Create Account',admin:'Access Admin Portal'}[mode];
  // Switch link
  const sw = document.getElementById('authSwitch');
  if(mode==='login')  sw.innerHTML = `Don't have an account? <a onclick="switchAuthTab('signup')">Sign up free</a>`;
  else if(mode==='signup') sw.innerHTML = `Already have an account? <a onclick="switchAuthTab('login')">Sign in</a>`;
  else sw.innerHTML = `Not an admin? <a onclick="switchAuthTab('login')">Go to student login</a>`;
  setAuthError('');
}

function setAuthError(msg) {
  const el = document.getElementById('authError');
  const tx = document.getElementById('authErrorText');
  if(msg) { tx.textContent=msg; el.classList.add('show'); }
  else el.classList.remove('show');
}

// ════════════════════════════════════
// REAL-TIME VALIDATORS
// ════════════════════════════════════
function setFieldState(inputId, iconId, msgId, hintId, valid, msg, hint) {
  const inp  = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  const msgEl= document.getElementById(msgId);
  const hint_el = hintId ? document.getElementById(hintId) : null;
  if(!inp || !inp.value) {
    inp && inp.classList.remove('valid','invalid');
    if(icon)  icon.textContent='';
    if(msgEl) { msgEl.textContent=''; msgEl.className='fg-msg'; }
    if(hint_el) { hint_el.textContent=''; hint_el.className='fg-hint'; }
    return;
  }
  inp.classList.toggle('valid',   valid===true);
  inp.classList.toggle('invalid', valid===false);
  if(icon)  icon.textContent = valid ? '✅' : '❌';
  if(msgEl) { msgEl.textContent=msg||''; msgEl.className='fg-msg '+(valid?'ok':'err'); }
  if(hint_el && hint) { hint_el.textContent=hint; hint_el.className='fg-hint '+(valid?'ok':'err'); }
}

// Email format
function isValidEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e); }

// Name: only letters, spaces, dots, hyphens. No numbers or special chars.
function validateName(inputId, hintId, msgId, iconId) {
  const val = document.getElementById(inputId).value.trim();
  if(!val) { setFieldState(inputId,iconId,msgId,hintId,null); return false; }
  const ok = /^[A-Za-z][A-Za-z\s.'-]{1,29}$/.test(val);
  setFieldState(inputId, iconId, msgId, hintId, ok,
    ok ? 'Looks good!' : 'Only letters, spaces, hyphens allowed. No numbers.',
    ok ? '' : '⚠ Invalid'
  );
  return ok;
}

// Login email
function validateLoginEmail() {
  const val = document.getElementById('loginEmail').value.trim();
  if(!val) { setFieldState('loginEmail','lEmailIcon','lEmailMsg','lEmailHint',null); return false; }
  const ok = isValidEmail(val);
  setFieldState('loginEmail','lEmailIcon','lEmailMsg','lEmailHint', ok,
    ok ? '' : 'Enter a valid email address (e.g. name@domain.com)',
    ok ? '✓ Valid' : '✗ Invalid'
  );
  return ok;
}
function validateLoginPass() {
  const val = document.getElementById('loginPass').value;
  if(!val) { setFieldState('loginPass',null,'lPassMsg','lPassHint',null); return false; }
  const ok = val.length >= 6;
  setFieldState('loginPass', null, 'lPassMsg', 'lPassHint', ok,
    ok ? '' : 'Password must be at least 6 characters',
    ok ? '' : '⚠ Too short'
  );
  return ok;
}

// Signup email
function validateSignupEmail() {
  const val = document.getElementById('signupEmail').value.trim();
  if(!val) { setFieldState('signupEmail','sEmailIcon','sEmailMsg','sEmailHint',null); return false; }
  const okFmt = isValidEmail(val);
  const okRes = val.toLowerCase() !== 'mohanapriya@klh.edu.in';
  const ok = okFmt && okRes;
  setFieldState('signupEmail','sEmailIcon','sEmailMsg','sEmailHint', ok,
    !okFmt ? 'Enter a valid email address' : !okRes ? 'This email is reserved' : '',
    ok ? '✓ Valid' : '✗'
  );
  return ok;
}

// Roll number: e.g. 2024CS001 — 4 digit year + 2-3 uppercase letters + 3 digits
function validateRoll() {
  const val = document.getElementById('signupRoll').value.trim().toUpperCase();
  document.getElementById('signupRoll').value = val;
  if(!val) { setFieldState('signupRoll','sRollIcon','sRollMsg','sRollHint',null); return false; }
  const ok = /^\d{4}[A-Z]{2,3}\d{3}$/.test(val);
  setFieldState('signupRoll','sRollIcon','sRollMsg','sRollHint', ok,
    ok ? 'Valid roll number' : 'Format: YYYY + Dept (2-3 letters) + 3 digits  e.g. 2024CS001',
    ok ? '✓' : '✗ Invalid format'
  );
  return ok;
}

// Password strength meter
function getPasswordStrength(p) {
  let score = 0;
  const checks = {
    len:     p.length >= 8,
    upper:   /[A-Z]/.test(p),
    lower:   /[a-z]/.test(p),
    num:     /[0-9]/.test(p),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(p)
  };
  score = Object.values(checks).filter(Boolean).length;
  return { score, checks };
}
function validateSignupPass() {
  const val  = document.getElementById('signupPass').value;
  const wrap = document.getElementById('pwStrengthWrap');
  if(!val) { wrap.style.display='none'; document.getElementById('signupPass').classList.remove('valid','invalid'); return false; }
  wrap.style.display = 'block';
  const { score, checks } = getPasswordStrength(val);
  // Bars
  const levels  = ['weak','fair','good','strong'];
  const colours = ['weak','fair','good','strong'];
  const lvl     = score<=1?0:score<=2?1:score<=3?2:3;
  const labels  = ['Weak','Fair','Good','Strong 💪'];
  [1,2,3,4].forEach(i => {
    const bar = document.getElementById('pb'+i);
    bar.className = 'pw-bar ' + (i<=score ? colours[lvl] : '');
  });
  const lbl = document.getElementById('pwLabel');
  lbl.textContent  = labels[lvl];
  lbl.className    = 'pw-label ' + levels[lvl];
  // Requirements
  Object.entries(checks).forEach(([k,v]) => {
    const el = document.getElementById('req-'+k);
    if(el) el.classList.toggle('met', v);
  });
  const ok = score >= 4;
  document.getElementById('signupPass').classList.toggle('valid',   ok);
  document.getElementById('signupPass').classList.toggle('invalid', !ok && val.length>0);
  // Re-validate confirm if already typed
  if(document.getElementById('signupConfirm').value) validateConfirm();
  return ok;
}
function validateConfirm() {
  const pw   = document.getElementById('signupPass').value;
  const conf = document.getElementById('signupConfirm').value;
  if(!conf) { setFieldState('signupConfirm',null,'sConfirmMsg','sConfirmHint',null); return false; }
  const ok = pw === conf;
  setFieldState('signupConfirm', null, 'sConfirmMsg', 'sConfirmHint', ok,
    ok ? 'Passwords match ✓' : 'Passwords do not match',
    ok ? '' : '✗ Mismatch'
  );
  return ok;
}

// Admin validators
function validateAdminEmail() {
  const val = document.getElementById('adminEmail').value.trim();
  if(!val) { setFieldState('adminEmail','aEmailIcon','aEmailMsg','aEmailHint',null); return false; }
  const ok = isValidEmail(val);
  setFieldState('adminEmail','aEmailIcon','aEmailMsg','aEmailHint', ok,
    ok ? '' : 'Enter a valid email address',
    ok ? '' : '✗'
  );
  return ok;
}
function validateAdminPass() {
  const val = document.getElementById('adminPass').value;
  if(!val) { setFieldState('adminPass',null,'aPassMsg','aPassHint',null); return false; }
  const ok = val.length >= 6;
  setFieldState('adminPass', null, 'aPassMsg', 'aPassHint', ok,
    ok ? '' : 'Password too short',
    ok ? '' : '✗'
  );
  return ok;
}

// Show/hide password toggle
function togglePw(inputId, btn) {
  const inp = document.getElementById(inputId);
  const showing = inp.type === 'text';
  inp.type = showing ? 'password' : 'text';
  btn.innerHTML = showing
    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
}

// ════════════════════════════════════
// SUBMIT
// ════════════════════════════════════
function submitAuth() {
  setAuthError('');

  if(authMode === 'admin') {
    const email = document.getElementById('adminEmail').value.trim().toLowerCase();
    const pass  = document.getElementById('adminPass').value.trim();
    if(!email || !pass) { setAuthError('Please fill in both fields.'); return; }
    if(!isValidEmail(email)) { setAuthError('Enter a valid email address.'); return; }
    if(email !== 'mohanapriya@klh.edu.in' || pass !== 'admin123') {
      setAuthError('⚠️ Access denied. Invalid admin credentials.');
      document.getElementById('adminPass').classList.add('invalid');
      setTimeout(()=>{ document.getElementById('adminPass').classList.remove('invalid'); },3000);
      return;
    }
    closeAuth(); openAdminDashboard('Dr. Rajesh Kumar'); return;
  }

  if(authMode === 'login') {
    const email = document.getElementById('loginEmail').value.trim();
    const pass  = document.getElementById('loginPass').value.trim();
    const eOk   = validateLoginEmail();
    const pOk   = validateLoginPass();
    if(!email || !pass) { setAuthError('Please fill in all fields.'); return; }
    if(!eOk) { setAuthError('Enter a valid email address.'); return; }
    if(!pOk) { setAuthError('Password must be at least 6 characters.'); return; }
    if(email.toLowerCase() === 'mohanapriya@klh.edu.in') {
      setAuthError('Use the 🔐 Admin tab to sign in as admin.');
      switchAuthTab('admin'); return;
    }
    logUserIn({ name: email.split('@')[0].replace(/[^a-z]/gi,' ').trim().replace(/\b\w/g,l=>l.toUpperCase()), email, avatar: email.charAt(0).toUpperCase() });
    return;
  }

  // Signup
  const fOk   = validateName('signupFirst','sfNameHint','sfNameMsg','sfNameIcon');
  const lOk   = validateName('signupLast','slNameHint','slNameMsg','slNameIcon');
  const eOk   = validateSignupEmail();
  const rOk   = validateRoll();
  const pOk   = validateSignupPass();
  const cOk   = validateConfirm();
  const first = document.getElementById('signupFirst').value.trim();
  const last  = document.getElementById('signupLast').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  if(!first||!last||!email) { setAuthError('Please fill in all fields.'); return; }
  if(!fOk) { setAuthError('First name: only letters and spaces allowed.'); return; }
  if(!lOk) { setAuthError('Last name: only letters and spaces allowed.'); return; }
  if(!eOk) { setAuthError('Enter a valid college email address.'); return; }
  if(!rOk) { setAuthError('Roll number must follow format e.g. 2024CS001.'); return; }
  if(!pOk) { setAuthError('Password must meet all requirements (8+ chars, uppercase, number, special character).'); return; }
  if(!cOk) { setAuthError('Passwords do not match.'); return; }
  logUserIn({ name: first+' '+last, email, avatar: first.charAt(0).toUpperCase() });
}

// ════════════════════════════════════
// OAUTH — Real Redirects
// ════════════════════════════════════
function socialAuth(provider) {
  const urls = {
    Google:    'https://accounts.google.com',
    Microsoft: 'https://login.live.com',
    GitHub:    'https://github.com/login'
  };

  // Open in a proper centered popup
  const W = 500, H = 640;
  const left = Math.round((screen.width  - W) / 2);
  const top  = Math.round((screen.height - H) / 2);
  const features = `width=${W},height=${H},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`;
  const popup = window.open(urls[provider], provider + 'OAuth', features);

  // If browser blocked popup, fallback to new tab
  if (!popup || popup.closed || typeof popup.closed === 'undefined') {
    window.open(urls[provider], '_blank');
    return;
  }

  // Update button to show loading state
  const btn  = document.getElementById('authSubmitBtn');
  const span = document.getElementById('authBtnText');
  const orig = span.textContent;
  const icons = { Google: '🔵', Microsoft: '🟦', GitHub: '⚫' };
  span.textContent = icons[provider] + ' Waiting for ' + provider + '…';
  btn.disabled = true;

  // Poll until user closes the OAuth popup
  const poll = setInterval(() => {
    if (!popup || popup.closed) {
      clearInterval(poll);
      btn.disabled = false;
      span.textContent = orig;
      // Simulate successful login after OAuth
      const names  = { Google: 'Arjun Sharma',  Microsoft: 'Priya Nair', GitHub: 'Dev Mehta' };
      const emails = { Google: 'arjun.sharma@gmail.com', Microsoft: 'priya.nair@outlook.com', GitHub: 'devmehta@github.com' };
      logUserIn({ name: names[provider], email: emails[provider], avatar: names[provider].charAt(0) });
    }
  }, 600);
}

function doLogout() {
  currentUser = null;
  registeredWorkshops = [];
  document.getElementById('navAuthArea').style.display = '';
  document.getElementById('navUserArea').style.display = 'none';
  document.getElementById('userMenu').style.display = 'none';
  showScreen('landing');
}

function toggleUserMenu() {
  const m = document.getElementById('userMenu');
  m.style.display = m.style.display==='none'?'block':'none';
}

document.addEventListener('click', e=>{
  const pill = document.querySelector('.user-pill');
  const menu = document.getElementById('userMenu');
  if(pill&&menu&&!pill.contains(e.target)&&!menu.contains(e.target)) menu.style.display='none';
});

// ═══ SUCCESS ═══
function showSuccess() {
  if(!currentWs) return;
  document.getElementById('successWsName').textContent = currentWs.title;
  document.getElementById('successDate').textContent = currentWs.date;
  document.getElementById('successTime').textContent = currentWs.time;
  document.getElementById('successVenue').textContent = currentWs.venue;
  document.getElementById('successEmail').textContent = currentUser ? currentUser.email : 'your email';
  // Show cert button
  const certBtnS = document.getElementById('certBtn');
  if(certBtnS) certBtnS.style.display = 'flex';
  // Track registration
  if(currentUser && !registeredWorkshops.find(w=>w.id===currentWs.id)) {
    registeredWorkshops.push(currentWs);
    updateDashboard();
    checkBadges();
  }
  // Generate QR ticket
  const ticketId = 'WS-' + Math.random().toString(36).substr(2,6).toUpperCase();
  document.getElementById('qrTicketId').textContent = 'TICKET #' + ticketId;
  generateQR(ticketId + '|' + currentWs.id + '|' + (currentUser?.email||'guest'));
  // Show review form (post-register)
  const rf = document.getElementById('reviewFormSection');
  if(rf) rf.style.display = 'block';
  document.getElementById('successOverlay').classList.add('open');
  launchConfetti();
}

function closeSuccess() {
  document.getElementById('successOverlay').classList.remove('open');
  if(currentUser) { updateDashboard(); showScreen('dashboard'); }
  else showScreen('workshops');
}

// ═══ CONFETTI ═══
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const pieces = Array.from({length:120},()=>({
    x:Math.random()*canvas.width, y:Math.random()*-canvas.height,
    r:Math.random()*7+3, d:Math.random()*180,
    color:['#1B3A6B','#2D5FA6','#F97316','#22C55E','#3B82F6','#A855F7'][Math.floor(Math.random()*6)],
    tilt:Math.random()*10-10, tiltAngle:0, tiltSpeed:Math.random()*.1+.05
  }));
  let angle=0, frame;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    angle+=.01;
    pieces.forEach(p=>{
      p.tiltAngle+=p.tiltSpeed;
      p.y+=Math.cos(angle+p.d)+2;
      p.x+=Math.sin(angle)*1.5;
      p.tilt=Math.sin(p.tiltAngle)*15;
      ctx.beginPath(); ctx.lineWidth=p.r;
      ctx.strokeStyle=p.color;
      ctx.moveTo(p.x+p.tilt+p.r/2,p.y);
      ctx.lineTo(p.x+p.tilt,p.y+p.tilt+p.r/2);
      ctx.stroke();
    });
    if(pieces.some(p=>p.y<canvas.height+20)) frame=requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); }
  }
  if(frame) cancelAnimationFrame(frame);
  draw();
}

// ═══ NEW FEATURE STATE ═══
let registeredWorkshops = [];
let pickedStar = 0;

// ════════════════════════════════════
// QR CODE GENERATOR (pure canvas, no lib needed)
// ════════════════════════════════════
function generateQR(text) {
  const canvas = document.getElementById('qrCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const size = 80, cells = 21, cell = Math.floor(size/cells);
  ctx.fillStyle = 'white'; ctx.fillRect(0,0,size,size);
  // Simple visual QR-like pattern using text hash
  let hash = 0; for(let i=0;i<text.length;i++) hash = ((hash<<5)-hash)+text.charCodeAt(i);
  ctx.fillStyle = '#0D1B2A';
  // Draw finder patterns (corners)
  [[0,0],[14,0],[0,14]].forEach(([cx,cy])=>{
    ctx.fillRect(cx*cell,cy*cell,7*cell,7*cell);
    ctx.fillStyle='white'; ctx.fillRect((cx+1)*cell,(cy+1)*cell,5*cell,5*cell);
    ctx.fillStyle='#0D1B2A'; ctx.fillRect((cx+2)*cell,(cy+2)*cell,3*cell,3*cell);
    ctx.fillStyle='#0D1B2A';
  });
  // Data modules from hash
  const rng = (seed) => { let x=Math.sin(seed)*10000; return x-Math.floor(x); };
  for(let row=0;row<cells;row++) for(let col=0;col<cells;col++) {
    const inFinder = (row<8&&col<8)||(row<8&&col>12)||(row>12&&col<8);
    if(!inFinder && rng(hash+row*cells+col) > 0.5) {
      ctx.fillRect(col*cell, row*cell, cell, cell);
    }
  }
}

// ════════════════════════════════════
// STUDENT DASHBOARD
// ════════════════════════════════════
const allBadges = [
  {id:'first',  icon:'🎯', name:'First Step',    desc:'Register first workshop',  req:1},
  {id:'trio',   icon:'🔥', name:'On Fire',        desc:'Register 3 workshops',     req:3},
  {id:'half',   icon:'⚡', name:'Go-Getter',      desc:'Register 5 workshops',     req:5},
  {id:'full',   icon:'🏆', name:'Workshop Pro',   desc:'Register all 8 workshops', req:8},
  {id:'online', icon:'🌐', name:'Digital Learner',desc:'Register any online workshop', req:'online'},
  {id:'offline',icon:'🎓', name:'Campus Hero',    desc:'Register any offline workshop', req:'offline'},
];

function checkBadges() {
  const count = registeredWorkshops.length;
  const earnedIds = allBadges.filter(b => {
    if(typeof b.req === 'number') return count >= b.req;
    return registeredWorkshops.some(w => w.type === b.req);
  }).map(b=>b.id);
  return earnedIds;
}

function updateDashboard() {
  if(!currentUser) return;
  // Header
  const hn = document.getElementById('dbHeaderName');
  if(hn) hn.textContent = 'Welcome back, ' + currentUser.name.split(' ')[0] + '! 👋';
  // Stats
  const count = registeredWorkshops.length;
  const earned = checkBadges();
  const pct = Math.round(count / workshops.length * 100);
  const sr = document.getElementById('dbStatReg'); if(sr) sr.textContent = count;
  const sb = document.getElementById('dbStatBadges'); if(sb) sb.textContent = earned.length;
  const sp = document.getElementById('dbStatPct'); if(sp) sp.textContent = pct + '%';
  // Workshop list
  const list = document.getElementById('dbWsList');
  if(list) {
    if(registeredWorkshops.length === 0) {
      list.innerHTML = `<div style="text-align:center;padding:40px 20px;background:white;border-radius:12px;border:1.5px solid #E2E8F0;color:#94A3B8;">
        <div style="font-size:2.5rem;margin-bottom:10px;">📭</div>
        <div style="font-weight:700;color:#374151;margin-bottom:4px;">No workshops yet</div>
        <div style="font-size:.82rem;">Register for a workshop to see it here!</div>
        <button onclick="showScreen('workshops')" style="margin-top:14px;padding:9px 20px;background:linear-gradient(135deg,#A0832A,#C9A84C);color:white;border:none;border-radius:8px;font-size:.82rem;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Browse Workshops →</button>
      </div>`;
    } else {
      list.innerHTML = registeredWorkshops.map(w => {
        const colors = {offline:'background:#ECFDF5;color:#059669', online:'background:#EEF2FF;color:#4338CA'};
        return `<div class="db-ws-card" onclick="openDetail(${w.id})">
          <div class="db-ws-emoji">${w.emoji}</div>
          <div class="db-ws-info">
            <div class="db-ws-name">${w.title}</div>
            <div class="db-ws-meta">📅 ${w.date} &nbsp;·&nbsp; ${w.instructor}</div>
          </div>
          <span class="db-ws-status" style="${colors[w.type]||''}">${w.type==='online'?'🌐 Online':'📍 Offline'}</span>
        </div>`;
      }).join('');
    }
  }
  // Badges
  const bg = document.getElementById('dbBadgeGrid');
  if(bg) {
    bg.innerHTML = allBadges.map(b => {
      const isEarned = earned.includes(b.id);
      return `<div class="badge-item ${isEarned?'earned':'locked'}" title="${isEarned?'Earned!':'Locked'}">
        <span class="badge-icon">${b.icon}</span>
        <div class="badge-name">${b.name}</div>
        <div class="badge-desc">${b.desc}</div>
        ${isEarned ? '<div style="font-size:.62rem;color:#C9A84C;font-weight:700;margin-top:3px;">✓ EARNED</div>' : ''}
      </div>`;
    }).join('');
  }
}

// ════════════════════════════════════
// RATINGS & REVIEWS
// ════════════════════════════════════
function hoverStars(n) {
  document.querySelectorAll('#starPicker .star').forEach((s,i) => {
    s.classList.toggle('lit', i < n);
  });
}
function unhoverStars() {
  document.querySelectorAll('#starPicker .star').forEach((s,i) => {
    s.classList.toggle('lit', i < pickedStar);
  });
}
function pickStar(n) {
  pickedStar = n;
  unhoverStars();
}
function submitReview() {
  if(!pickedStar) { alert('Please pick a star rating first!'); return; }
  const text = document.getElementById('reviewText').value.trim();
  if(!text) { alert('Please write a review!'); return; }
  const name = currentUser ? currentUser.name : 'Anonymous';
  const today = new Date().toLocaleDateString('en-IN',{month:'long',day:'numeric',year:'numeric'});
  const stars = '⭐'.repeat(pickedStar) + '<span style="opacity:.3">' + '⭐'.repeat(5-pickedStar) + '</span>';
  const card = `<div class="review-card" style="animation:authPop .3s ease">
    <div class="review-header">
      <div class="review-av">${name.charAt(0)}</div>
      <div><div class="review-name">${name}</div><div class="review-date">${today}</div></div>
      <div class="review-stars">${stars}</div>
    </div>
    <div class="review-text">${text}</div>
  </div>`;
  const list = document.getElementById('reviewsList');
  if(list) list.insertAdjacentHTML('afterbegin', card);
  document.getElementById('reviewText').value = '';
  pickedStar = 0; unhoverStars();
  document.getElementById('reviewFormSection').style.display = 'none';
  // Show toast
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#0D1B2A;color:white;padding:11px 22px;border-radius:10px;font-size:.84rem;font-weight:600;z-index:9999;animation:authPop .3s ease';
  t.textContent = '⭐ Review submitted! Thank you.';
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 3000);
}

// ════════════════════════════════════
// ADD TO CALENDAR
// ════════════════════════════════════
function addToGoogleCalendar() {
  if(!currentWs) return;
  const parseDate = (dateStr, timeStr) => {
    // e.g. "Mar 15, 2025" "10:00 AM – 12:00 PM"
    const d = new Date(dateStr + ' ' + (timeStr.split('–')[0].trim()));
    const pad = n => String(n).padStart(2,'0');
    return d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+'T'+pad(d.getHours())+pad(d.getMinutes())+'00';
  };
  const start = parseDate(currentWs.date, currentWs.time);
  const end   = parseDate(currentWs.date, currentWs.time.split('–')[1]||currentWs.time);
  const url = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
    + '&text=' + encodeURIComponent(currentWs.emoji + ' ' + currentWs.title)
    + '&dates=' + start + '/' + end
    + '&details=' + encodeURIComponent(currentWs.desc + '\n\nInstructor: ' + currentWs.instructor)
    + '&location=' + encodeURIComponent(currentWs.venue)
    + '&sf=true&output=xml';
  window.open(url, '_blank');
}

function addToiCal() {
  if(!currentWs) return;
  const parseICS = (dateStr, timeStr) => {
    const d = new Date(dateStr + ' ' + timeStr.split('–')[0].trim());
    const pad = n => String(n).padStart(2,'0');
    return d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+'T'+pad(d.getHours())+pad(d.getMinutes())+'00';
  };
  const start = parseICS(currentWs.date, currentWs.time);
  const end   = parseICS(currentWs.date, (currentWs.time.includes('–')?currentWs.time.split('–')[1]:currentWs.time));
  const uid   = 'ws-' + currentWs.id + '-' + Date.now() + '@workshophub.edu';
  const ics = [
    'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//WorkshopHub//EN',
    'BEGIN:VEVENT',
    'UID:'+uid,
    'DTSTAMP:'+start,
    'DTSTART:'+start,
    'DTEND:'+end,
    'SUMMARY:'+currentWs.emoji+' '+currentWs.title,
    'DESCRIPTION:'+currentWs.desc+'\nInstructor: '+currentWs.instructor,
    'LOCATION:'+currentWs.venue,
    'END:VEVENT','END:VCALENDAR'
  ].join('\r\n');
  const blob = new Blob([ics], {type:'text/calendar;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = currentWs.title.replace(/\s+/g,'-') + '.ics';
  a.click();
}

// ════════════════════════════════════
// AI RECOMMENDER
// ════════════════════════════════════
let aiOpen = false;

function toggleAiPanel() {
  aiOpen = !aiOpen;
  const panel = document.getElementById('aiPanel');
  if(aiOpen) panel.classList.add('open');
  else panel.classList.remove('open');
}

async function sendAiMsg() {
  const input = document.getElementById('aiInput');
  const chat  = document.getElementById('aiChat');
  const text  = input.value.trim();
  if(!text) return;
  input.value = '';

  // Add user message
  const userBubble = document.createElement('div');
  userBubble.className = 'ai-msg user';
  userBubble.textContent = text;
  chat.appendChild(userBubble);

  // Typing indicator
  const typing = document.createElement('div');
  typing.className = 'ai-msg typing';
  typing.textContent = '🤖 Thinking…';
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  // Build prompt with workshop catalog
  const catalog = workshops.map(w =>
    `- ${w.emoji} ${w.title} (${w.category}, ${w.type}, ${w.date}, Instructor: ${w.instructor}): ${w.desc.slice(0,80)}...`
  ).join('\n');

  const prompt = `You are a helpful workshop recommender assistant for a college platform. Based on the user's message, recommend 1-3 of the most relevant workshops from the catalog below. Be friendly, conversational and brief. Format each recommendation as: **Workshop Name** — one sentence why it suits them. Don't list all workshops, just the most relevant ones.

Workshop Catalog:
${catalog}

User said: "${text}"`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 400,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await res.json();
    const reply = data.content?.[0]?.text || 'Sorry, I couldn\'t get a response. Try again!';
    typing.className = 'ai-msg bot';
    typing.innerHTML = reply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g,'<br>');
    // Add clickable workshop links
    workshops.forEach(w => {
      const escaped = w.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      typing.innerHTML = typing.innerHTML.replace(
        new RegExp('('+escaped+')', 'g'),
        `<span style="color:var(--gold-dark);font-weight:700;cursor:pointer;text-decoration:underline;" onclick="openDetail(${w.id});toggleAiPanel()">$1</span>`
      );
    });
  } catch(e) {
    typing.className = 'ai-msg bot';
    typing.textContent = '⚠️ Could not connect to AI. Please try again!';
  }
  chat.scrollTop = chat.scrollHeight;
}

// ════════════════════════════════════
// COUNTDOWN TIMER
// ════════════════════════════════════
let countdownInterval = null;

// ════════════════════════════════════
// SHARE WORKSHOP
// ════════════════════════════════════

// ════════════════════════════════════
// CERTIFICATE GENERATOR
// ════════════════════════════════════
function drawCertificate(ws, user) {
  const canvas = document.getElementById('certCanvas');
  if(!canvas) return;
  const W = 700, H = 490;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  // Background
  ctx.fillStyle = '#FFFDF7'; ctx.fillRect(0,0,W,H);
  // Outer gold border
  ctx.strokeStyle = '#C9A84C'; ctx.lineWidth = 10;
  ctx.strokeRect(12,12,W-24,H-24);
  // Inner thin border
  ctx.strokeStyle = '#E8C97A'; ctx.lineWidth = 2;
  ctx.strokeRect(24,24,W-48,H-48);
  // Corner ornaments
  [0,1,2,3].forEach(i => {
    const x = i%2===0 ? 32 : W-52;
    const y = i<2 ? 32 : H-52;
    ctx.fillStyle = '#C9A84C';
    ctx.beginPath(); ctx.arc(x+10,y+10,8,0,Math.PI*2); ctx.fill();
  });
  // Header strip
  const grd = ctx.createLinearGradient(0,50,W,50);
  grd.addColorStop(0,'#122649'); grd.addColorStop(1,'#1B3A6B');
  ctx.fillStyle = grd; ctx.fillRect(40,55,W-80,65);
  // Header text
  ctx.fillStyle = '#C9A84C'; ctx.font = 'bold 12px DM Sans,sans-serif';
  ctx.textAlign = 'center'; ctx.fillText('WORKSHOP SEMINAR HUB', W/2, 80);
  ctx.fillStyle = 'white'; ctx.font = 'bold 18px Playfair Display,serif';
  ctx.fillText('Certificate of Participation', W/2, 104);
  // Main content
  ctx.fillStyle = '#94A3B8'; ctx.font = '13px DM Sans,sans-serif';
  ctx.fillText('This is to certify that', W/2, 155);
  // Name
  ctx.fillStyle = '#0D1B2A'; ctx.font = 'bold 32px Playfair Display,serif';
  ctx.fillText(user ? user.name : 'Student Name', W/2, 200);
  // Underline
  const nameW = ctx.measureText(user ? user.name : 'Student Name').width;
  ctx.strokeStyle = '#C9A84C'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(W/2-nameW/2,210); ctx.lineTo(W/2+nameW/2,210); ctx.stroke();
  ctx.fillStyle = '#94A3B8'; ctx.font = '13px DM Sans,sans-serif';
  ctx.fillText('has successfully participated in', W/2, 240);
  // Workshop title
  ctx.fillStyle = '#122649'; ctx.font = 'bold 20px Playfair Display,serif';
  const title = ws.emoji + ' ' + ws.title;
  ctx.fillText(title, W/2, 275);
  // Date & instructor
  ctx.fillStyle = '#64748B'; ctx.font = '12px DM Sans,sans-serif';
  ctx.fillText('Conducted on ' + ws.date + '   ·   Instructor: ' + ws.instructor, W/2, 305);
  // Gold divider
  ctx.strokeStyle = '#C9A84C'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(120,325); ctx.lineTo(W-120,325); ctx.stroke();
  // Footer
  ctx.fillStyle = '#94A3B8'; ctx.font = '11px DM Sans,sans-serif';
  ctx.fillText('Workshop Seminar Hub  ·  College Campus  ·  ' + new Date().getFullYear(), W/2, 360);
  // Seal circle
  ctx.strokeStyle = '#C9A84C'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(W/2, 420, 40, 0, Math.PI*2); ctx.stroke();
  ctx.fillStyle = '#C9A84C'; ctx.font = 'bold 11px DM Sans,sans-serif';
  ctx.fillText('OFFICIAL', W/2, 415);
  ctx.fillStyle = '#0D1B2A'; ctx.font = '10px DM Sans,sans-serif';
  ctx.fillText('SEAL', W/2, 432);
}




// ════════════════════════════════════
// NOTIFICATIONS
// ════════════════════════════════════
let notifications = [
  {id:1, icon:'🔴', bg:'#FEF2F2', title:'Machine Learning — Only 8 seats left!', time:'2 min ago', unread:true},
  {id:2, icon:'🆕', bg:'#EFF6FF', title:'New workshop added: Cloud Computing with AWS', time:'1 hr ago', unread:true},
  {id:3, icon:'📅', bg:'#F0FDF4', title:'Reminder: Cybersecurity Basics is tomorrow at 2 PM', time:'3 hrs ago', unread:true},
  {id:4, icon:'✅', bg:'#F5F3FF', title:'Your registration for Web Dev Bootcamp is confirmed', time:'1 day ago', unread:false},
  {id:5, icon:'🔔', bg:'#FFFBEB', title:'Communication Skills workshop starts in 2 days', time:'2 days ago', unread:false},
];

function renderNotifications() {
  const list = document.getElementById('notifList');
  const dot  = document.getElementById('notifDot');
  const unread = notifications.filter(n=>n.unread).length;
  if(dot) { dot.textContent = unread; dot.style.display = unread?'grid':'none'; }
  if(!list) return;
  if(!notifications.length) { list.innerHTML='<div class="notif-empty">🎉 All caught up!</div>'; return; }
  list.innerHTML = notifications.map(n => `
    <div class="notif-item ${n.unread?'unread':''}" onclick="markRead(${n.id})">
      <div class="notif-item-icon" style="background:${n.bg}">${n.icon}</div>
      <div>
        <div class="notif-item-text">${n.title}</div>
        <div class="notif-item-time">${n.time}</div>
      </div>
    </div>`).join('');
}

function markRead(id) {
  const n = notifications.find(x=>x.id===id);
  if(n) { n.unread=false; renderNotifications(); }
}



// Add notification helper
function pushNotification(icon, bg, title) {
  notifications.unshift({id:Date.now(), icon, bg, title, time:'Just now', unread:true});
  renderNotifications();
}

// Auto push seat alerts
setTimeout(() => pushNotification('🔴','#FEF2F2','⚡ Communication Skills — Only 3 seats remaining!'), 15000);
setTimeout(() => pushNotification('🆕','#EFF6FF','New: Public Speaking Masterclass registration is live!'), 35000);

// Close notif on outside click
document.addEventListener('click', e => {
  const wrap = document.getElementById('notifBellWrap');
  const dd   = document.getElementById('notifDropdown');
  if(wrap && dd && !wrap.contains(e.target)) dd.classList.remove('open');
});

// ════════════════════════════════════
// ADVANCED FILTERS
// ════════════════════════════════════



// ════════════════════════════════════
// ANALYTICS PAGE
// ════════════════════════════════════
function buildAnalyticsPublicPage() {
  // Bar chart
  const chart = document.getElementById('anBarChart');
  if(chart) {
    const maxPct = Math.max(...workshops.map(w => Math.round(w.takenSeats/w.totalSeats*100)));
    chart.innerHTML = workshops.map(w => {
      const pct = Math.round(w.takenSeats/w.totalSeats*100);
      const color = pct>=90?'#DC2626':pct>=70?'#F59E0B':'#1B3A6B';
      const heightPct = Math.round(pct/maxPct*100);
      return `<div class="an-bar-col">
        <span class="an-bar-val">${w.takenSeats}</span>
        <div class="an-bar" style="height:0%;background:${color};max-height:${heightPct}%" 
             data-h="${heightPct}" title="${w.title}: ${pct}% full"></div>
        <span class="an-bar-lbl">${w.emoji}</span>
      </div>`;
    }).join('');
    // Animate bars
    setTimeout(() => {
      chart.querySelectorAll('.an-bar').forEach(bar => {
        bar.style.height = bar.dataset.h + '%';
      });
    }, 100);
  }
  // Most popular
  const sorted = [...workshops].sort((a,b) => (b.takenSeats/b.totalSeats)-(a.takenSeats/a.totalSeats));
  const mp = document.getElementById('anMostPopular');
  if(mp) {
    const w = sorted[0];
    const pct = Math.round(w.takenSeats/w.totalSeats*100);
    mp.innerHTML = `<div style="display:flex;align-items:center;gap:12px;cursor:pointer;" onclick="openDetail(${w.id})">
      <div style="font-size:2rem">${w.emoji}</div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:.88rem;color:#0D1B2A">${w.title}</div>
        <div style="font-size:.75rem;color:#94A3B8;margin:2px 0">${w.instructor}</div>
        <div style="background:#E2E8F0;border-radius:4px;height:6px;overflow:hidden;margin-top:6px"><div style="width:${pct}%;height:100%;background:#DC2626;border-radius:4px;transition:.8s"></div></div>
        <div style="font-size:.7rem;color:#DC2626;font-weight:700;margin-top:3px">${pct}% full — ${w.totalSeats-w.takenSeats} seats left</div>
      </div>
    </div>`;
  }
  // Trending
  const trending = sorted.slice(1,3);
  const tr = document.getElementById('anTrending');
  if(tr) {
    tr.innerHTML = trending.map(w => {
      const pct = Math.round(w.takenSeats/w.totalSeats*100);
      return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;cursor:pointer;" onclick="openDetail(${w.id})">
        <div style="font-size:1.3rem">${w.emoji}</div>
        <div style="flex:1">
          <div style="font-weight:600;font-size:.82rem;color:#0D1B2A">${w.title}</div>
          <div style="font-size:.7rem;color:#94A3B8">${w.takenSeats} registered</div>
        </div>
        <span class="trending-badge">↑ Hot</span>
      </div>`;
    }).join('');
  }
  // Table
  const tbody = document.getElementById('anTableBody');
  if(tbody) {
    tbody.innerHTML = workshops.map((w,i) => {
      const pct = Math.round(w.takenSeats/w.totalSeats*100);
      const remaining = w.totalSeats - w.takenSeats;
      const statusColor = pct>=90?'adb-red':pct>=70?'adb-yellow':'adb-green';
      const statusLabel = pct>=90?'Critical':pct>=70?'Filling':'Available';
      return `<tr style="border-bottom:1px solid #F8FAFC;${i%2===0?'':'background:#FAFBFF'}">
        <td style="padding:12px 16px"><div style="font-weight:600;color:#0D1B2A">${w.emoji} ${w.title}</div><div style="font-size:.7rem;color:#94A3B8">${w.instructor}</div></td>
        <td style="padding:12px 16px"><span class="adm-badge ${w.type==='online'?'adb-blue':'adb-navy'}">${w.type}</span></td>
        <td style="padding:12px 16px;font-weight:700">${w.takenSeats}<span style="color:#94A3B8;font-weight:400">/${w.totalSeats}</span></td>
        <td style="padding:12px 16px">
          <div style="display:flex;align-items:center;gap:8px">
            <div style="flex:1;background:#E2E8F0;border-radius:4px;height:5px;overflow:hidden"><div style="width:${pct}%;height:100%;background:${pct>=90?'#DC2626':pct>=70?'#F59E0B':'#1B3A6B'};border-radius:4px"></div></div>
            <span style="font-size:.75rem;font-weight:700;color:#374151">${pct}%</span>
          </div>
        </td>
        <td style="padding:12px 16px"><span class="adm-badge ${statusColor}">${statusLabel}</span></td>
      </tr>`;
    }).join('');
  }
}

// ════════════════════════════════════
// Q&A CHAT
// ════════════════════════════════════


// ════════════════════════════════════
// NOTIFICATION BELL
// ════════════════════════════════════
const notifData = [
  {id:1,icon:'⚡',bg:'#FFF7ED',msg:'<strong>Machine Learning</strong> — only 8 seats left!',time:'2 min ago',unread:true},
  {id:2,icon:'🆕',bg:'#ECFDF5',msg:'New workshop added: <strong>Cloud with AWS</strong>',time:'1 hr ago',unread:true},
  {id:3,icon:'🔔',bg:'#EEF2FF',msg:'Reminder: <strong>Cybersecurity Basics</strong> starts in 2 days',time:'3 hrs ago',unread:true},
  {id:4,icon:'✅',bg:'#F0FDF4',msg:'You registered for <strong>UI/UX Design</strong>',time:'Yesterday',unread:false},
  {id:5,icon:'📢',bg:'#FFF7ED',msg:'Venue changed: <strong>Communication Skills</strong> → Hall B',time:'2 days ago',unread:false},
];
function renderNotifs() {
  const list = document.getElementById('notifList');
  const unread = notifData.filter(n=>n.unread).length;
  const dot = document.getElementById('notifDot');
  if(dot) { dot.textContent=unread; dot.style.display=unread?'grid':'none'; }
  if(!list) return;
  list.innerHTML = notifData.map(n=>`
    <div class="notif-item ${n.unread?'unread':''}" onclick="readNotif(${n.id})">
      <div class="notif-item-icon" style="background:${n.bg}">${n.icon}</div>
      <div style="flex:1"><div class="notif-item-text">${n.msg}</div><div class="notif-item-time">${n.time}</div></div>
      ${n.unread?'<div style="width:7px;height:7px;background:#C9A84C;border-radius:50%;flex-shrink:0;margin-top:4px;"></div>':''}
    </div>`).join('');
}
function readNotif(id) { const n=notifData.find(x=>x.id===id); if(n) n.unread=false; renderNotifs(); }
function markAllRead() { notifData.forEach(n=>n.unread=false); renderNotifs(); }
function toggleNotifPanel() {
  const dd=document.getElementById('notifDropdown');
  dd.classList.toggle('open');
  if(dd.classList.contains('open')) renderNotifs();
}
document.addEventListener('click',e=>{
  const w=document.getElementById('notifBellWrap');
  if(w&&!w.contains(e.target)){const d=document.getElementById('notifDropdown');if(d)d.classList.remove('open');}
});
setTimeout(()=>{
  notifData.unshift({id:99,icon:'🔥',bg:'#FEF2F2',msg:'<strong>Communication Skills</strong> — only 3 seats left!',time:'Just now',unread:true});
  renderNotifs();
},15000);

// ════════════════════════════════════
// ADVANCED FILTER
// ════════════════════════════════════
function toggleAdvFilter() {
  const bar=document.getElementById('advFilterBar');
  const btn=document.getElementById('advFilterToggle');
  const open=bar.style.display==='block';
  bar.style.display=open?'none':'block';
  btn.textContent=open?'⚙️ Filters':'✕ Hide Filters';
  if(!open){
    const sel=document.getElementById('afInstructor');
    const instructors=[...new Set(workshops.map(w=>w.instructor))];
    sel.innerHTML='<option value="">All Instructors</option>'+instructors.map(i=>`<option value="${i}">${i}</option>`).join('');
  }
}
function applyAdvFilters() {
  const cat=document.getElementById('afCategory')?.value||'';
  const inst=document.getElementById('afInstructor')?.value||'';
  const seats=document.getElementById('afSeats')?.value||'';
  const type=document.getElementById('afType')?.value||'';
  const search=document.getElementById('wsSearch')?.value.trim().toLowerCase()||'';
  let list=[...workshops];
  if(search) list=list.filter(w=>w.title.toLowerCase().includes(search)||w.instructor.toLowerCase().includes(search));
  if(cat)   list=list.filter(w=>w.category===cat);
  if(inst)  list=list.filter(w=>w.instructor===inst);
  if(type)  list=list.filter(w=>w.type===type);
  if(seats==='open')  list=list.filter(w=>w.totalSeats-w.takenSeats>0);
  if(seats==='low')   list=list.filter(w=>{const r=w.totalSeats-w.takenSeats;return r>0&&r<=10;});
  if(seats==='full')  list=list.filter(w=>w.totalSeats-w.takenSeats<=0);
  renderGrid(list,'workshopsGrid');
  const cnt=document.getElementById('wsResultCount');
  if(cnt) cnt.textContent=list.length===workshops.length?'':'Showing '+list.length+' of '+workshops.length+' workshops';
  const chips=document.getElementById('afChips');
  if(chips){
    const active=[{v:cat,l:cat},{v:inst,l:inst},{v:seats,l:seats},{v:type,l:type}].filter(x=>x.v);
    chips.innerHTML=active.map(x=>`<div class="adv-chip" onclick="clearAdvFilters()"><span>✕</span>${x.l}</div>`).join('');
  }
}
function clearAdvFilters() {
  ['afCategory','afInstructor','afSeats','afType'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  applyAdvFilters();
}

// ════════════════════════════════════
// SHARE WORKSHOP
// ════════════════════════════════════
function shareWorkshop(platform) {
  if(!currentWs) return;
  const text=`🎓 Free workshop: ${currentWs.emoji} ${currentWs.title} on ${currentWs.date} by ${currentWs.instructor}!`;
  const url=window.location.href;
  if(platform==='whatsapp') window.open('https://wa.me/?text='+encodeURIComponent(text+' '+url),'_blank');
  else if(platform==='twitter') window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(text)+'&url='+encodeURIComponent(url),'_blank');
  else if(platform==='copy') {
    navigator.clipboard.writeText(url+'  '+text).then(()=>{
      const t=document.createElement('div');
      t.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#0D1B2A;color:white;padding:11px 22px;border-radius:10px;font-size:.84rem;font-weight:600;z-index:9999;';
      t.textContent='🔗 Link copied!'; document.body.appendChild(t); setTimeout(()=>t.remove(),2500);
    });
  }
}

// ════════════════════════════════════
// COUNTDOWN TIMER
// ════════════════════════════════════
// removed dup: countdownInterval=null;
function startCountdown(dateStr,timeStr) {
  if(countdownInterval) clearInterval(countdownInterval);
  function update() {
    const target=new Date(dateStr+' '+(timeStr.split('–')[0].trim()));
    const diff=target-new Date();
    const el=document.getElementById('detailCountdown');
    if(!el) return;
    if(diff<=0){el.innerHTML='<div style="font-size:.82rem;font-weight:700;color:#059669;padding:4px">🟢 This workshop is happening now!</div>';clearInterval(countdownInterval);return;}
    const days=Math.floor(diff/86400000),hours=Math.floor((diff%86400000)/3600000),mins=Math.floor((diff%3600000)/60000),secs=Math.floor((diff%60000)/1000);
    const urgent=days<1;
    ['cdDays','cdHours','cdMins','cdSecs'].forEach((id,i)=>{
      const el2=document.getElementById(id); const vals=[days,hours,mins,secs];
      if(el2){el2.textContent=String(vals[i]).padStart(2,'0');el2.parentElement.classList.toggle('urgent',urgent);}
    });
  }
  update(); countdownInterval=setInterval(update,1000);
}

// ════════════════════════════════════
// CERTIFICATE
// ════════════════════════════════════
function showCertificate() {
  const overlay=document.getElementById('certOverlay');
  const canvas=document.getElementById('certCanvas');
  if(!canvas||!currentWs||!currentUser){alert('Please register for a workshop first!');return;}
  const W=700,H=480; canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext('2d');
  const bg=ctx.createLinearGradient(0,0,W,H); bg.addColorStop(0,'#FFFDF5'); bg.addColorStop(1,'#F7F0E0');
  ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='#C9A84C'; ctx.lineWidth=6; ctx.strokeRect(14,14,W-28,H-28);
  ctx.strokeStyle='rgba(201,168,76,.3)'; ctx.lineWidth=2; ctx.strokeRect(22,22,W-44,H-44);
  [[30,30],[W-30,30],[30,H-30],[W-30,H-30]].forEach(([x,y])=>{
    ctx.strokeStyle='#C9A84C'; ctx.lineWidth=1.5;
    ctx.beginPath();ctx.arc(x,y,12,0,Math.PI*2);ctx.stroke();
    ctx.beginPath();ctx.arc(x,y,7,0,Math.PI*2);ctx.stroke();
  });
  ctx.textAlign='center';
  ctx.fillStyle='#1B3A6B'; ctx.font='bold 12px DM Sans,sans-serif';
  ctx.fillText('WORKSHOP HUB — CERTIFICATE OF PARTICIPATION',W/2,58);
  ctx.strokeStyle='#C9A84C'; ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(80,68);ctx.lineTo(W-80,68);ctx.stroke();
  ctx.fillStyle='#C9A84C'; ctx.font='italic bold 20px Playfair Display,serif';
  ctx.fillText('This is to certify that',W/2,108);
  ctx.fillStyle='#0D1B2A'; ctx.font='bold 36px Playfair Display,serif';
  ctx.fillText(currentUser.name,W/2,162);
  const nw=ctx.measureText(currentUser.name).width;
  ctx.strokeStyle='#C9A84C'; ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(W/2-nw/2,170);ctx.lineTo(W/2+nw/2,170);ctx.stroke();
  ctx.fillStyle='#64748B'; ctx.font='14px DM Sans,sans-serif';
  ctx.fillText('has successfully registered and participated in the workshop',W/2,206);
  ctx.fillStyle='#1B3A6B'; ctx.font='bold 21px Playfair Display,serif';
  ctx.fillText(currentWs.emoji+' '+currentWs.title,W/2,248);
  ctx.fillStyle='#64748B'; ctx.font='13px DM Sans,sans-serif';
  ctx.fillText(currentWs.date+'  ·  '+currentWs.time+'  ·  '+currentWs.venue,W/2,278);
  ctx.fillStyle='#94A3B8'; ctx.font='12px DM Sans,sans-serif';
  ctx.fillText('Conducted by '+currentWs.instructor,W/2,300);
  ctx.strokeStyle='rgba(201,168,76,.4)'; ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(100,325);ctx.lineTo(W-100,325);ctx.stroke();
  const drawSig=(x,role,name)=>{
    ctx.strokeStyle='#0D1B2A'; ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(x-65,378);ctx.lineTo(x+65,378);ctx.stroke();
    ctx.fillStyle='#0D1B2A'; ctx.font='bold 11px DM Sans,sans-serif'; ctx.textAlign='center';
    ctx.fillText(name,x,394); ctx.fillStyle='#94A3B8'; ctx.font='10px DM Sans,sans-serif';
    ctx.fillText(role,x,408);
  };
  drawSig(W/2-150,'Workshop Coordinator','Dr. Rajesh Kumar');
  drawSig(W/2+150,'Department Head','Prof. Anita Sharma');
  ctx.fillStyle='#94A3B8'; ctx.font='10px DM Sans,sans-serif'; ctx.textAlign='center';
  const cid='CERT-'+currentWs.id+'-'+currentUser.name.replace(/\s/g,'').toUpperCase().slice(0,4)+'-'+new Date().getFullYear();
  ctx.fillText('Issued '+new Date().toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})+'   |   '+cid,W/2,440);
  overlay.classList.add('open');
}
function downloadCertificate() {
  const canvas=document.getElementById('certCanvas'); if(!canvas) return;
  const a=document.createElement('a');
  a.download='Certificate-'+(currentWs?.title||'Workshop').replace(/\s+/g,'-')+'.png';
  a.href=canvas.toDataURL('image/png'); a.click();
}
function printCertificate() {
  const canvas=document.getElementById('certCanvas'); if(!canvas) return;
  const w=window.open('','_blank');
  w.document.write('<html><head><title>Certificate</title><style>body{margin:0;display:grid;place-items:center;height:100vh;background:#f5f5f5}img{max-width:90%;box-shadow:0 8px 32px rgba(0,0,0,.2);border-radius:8px}</style></head><body><img src="'+canvas.toDataURL()+'" style="max-width:96%"></body></html>');
  w.document.close(); setTimeout(()=>w.print(),500);
}

// ════════════════════════════════════
// Q&A CHAT
// ════════════════════════════════════
function postQA() {
  const input=document.getElementById('qaInput');
  const list=document.getElementById('qaList');
  const text=input?.value.trim();
  if(!text) return;
  if(!currentUser){openAuth('signup');return;}
  const item=document.createElement('div');
  item.className='qa-item mine'; item.style.animation='authPop .3s ease';
  item.innerHTML=`<div class="qa-item-header"><div class="qa-av">${currentUser.avatar}</div><div class="qa-author">${currentUser.name.split(' ')[0]} (You)</div><div class="qa-time">Just now</div></div><div class="qa-text">${text}</div><div class="qa-likes"><span>🤍</span> 0 likes</div>`;
  list.appendChild(item); list.scrollTop=list.scrollHeight; input.value='';
  const cnt=document.getElementById('qaCount');
  if(cnt){const n=list.querySelectorAll('.qa-item').length;cnt.textContent=n+' question'+(n!==1?'s':'');}
}


// ════════════════════════════════════
// DARK MODE
// ════════════════════════════════════
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? '1' : '0');
}
// Restore on load
if(localStorage.getItem('darkMode') === '1') document.body.classList.add('dark-mode');

// ═══ INIT ═══
// ════════════════════════════════════
renderGrid(workshops,'featuredGrid');
renderGrid(workshops,'workshopsGrid');
renderHeroUpcoming();
renderNotifs();

// Scroll reveal for landing
const revObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));
setTimeout(()=>document.querySelectorAll('#screen-landing .reveal').forEach(el=>el.classList.add('visible')),200);

// ════════════════════════════════════
// ADMIN AUTH
// ════════════════════════════════════
function showAdminLogin() {
  document.getElementById('adminLoginPage').style.display='flex';
}
function hideAdminLogin() {
  document.getElementById('adminLoginPage').style.display='none';
}
function adminSocialLogin(provider) {
  const name = provider==='SSO' ? 'Dr. Rajesh Kumar' : provider==='Google' ? 'Dr. Aruna Mehta' : 'Prof. Vikram Das';
  openAdminDashboard(name);
}
function adminLogin() {
  const email = document.getElementById('admEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('admPass').value.trim();
  const err   = document.getElementById('admErr');
  if(email!=='mohanapriya@klh.edu.in' || pass!=='admin123') {
    err.classList.add('show');
    document.getElementById('admPass').style.borderColor='rgba(193,18,31,.5)';
    setTimeout(()=>{ err.classList.remove('show'); document.getElementById('admPass').style.borderColor=''; },3000);
    return;
  }
  openAdminDashboard('Dr. Rajesh Kumar');
}
function openAdminDashboard(name) {
  document.getElementById('adminLoginPage').style.display='none';
  const ap=document.getElementById('adminPortal'); ap.style.cssText='display:flex !important;flex-direction:column;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9000;background:#F0F4F8;overflow:hidden;font-family:DM Sans,sans-serif;';
  document.getElementById('apAdminAv').textContent = name.charAt(0);
  document.getElementById('apAdminName').textContent = name;
  const hr = new Date().getHours();
  const greet = hr<12?'Good morning':hr<17?'Good afternoon':'Good evening';
  document.getElementById('apWelcomeNew').textContent = greet+', '+name.split(' ').pop()+'! 👋';
  startAdminLive(); buildAdminPages();
}
function adminLogout() {
  document.getElementById('adminPortal').style.cssText='display:none';
  if(admClk) clearInterval(admClk);
  if(admLive) clearInterval(admLive);
  if(admMsgInt) clearInterval(admMsgInt);
}
function apShowPage(page, el) {
  document.querySelectorAll('[id^="apPage-"]').forEach(p=>p.style.display='none');
  const pg=document.getElementById('apPage-'+page); if(pg) pg.style.display='block';
  document.querySelectorAll('.ap-sb-item,.ap-nav-link').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  if(page==='seats') buildSeatMonitor();
  if(page==='students') buildStudentDirectory();
  if(page==='analytics') buildAnalyticsPage();
}
function admToast(msg) {
  const el=document.getElementById('admToastEl'); if(!el) return;
  el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),3000);
}
let admClk,admLive,admMsgInt;
const admNames=['Anika R.','Vikram S.','Preethi M.','Dev P.','Zara K.','Mihir J.'];
const admWsList=['Machine Learning','Cybersecurity','Data Science','Web Dev','UI/UX Design','Cloud AWS'];
const admTimes=['Just now','1 min ago','2 min ago','3 min ago','5 min ago','7 min ago'];
let admIdx=0, admReg=247, admMsgCount=12;
function startAdminLive() {
  function tick(){ const now=new Date(); const cl=document.getElementById('apClockNew'); const dl=document.getElementById('apDateNew'); if(cl) cl.textContent=now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit'}); if(dl) dl.textContent=now.toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'}); }
  tick(); admClk=setInterval(tick,1000);
  const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], vals=[28,42,35,58,72,45,18], max=Math.max(...vals);
  const bc=document.getElementById('apBarNew');
  if(bc) bc.innerHTML=days.map((d,i)=>`<div class="adm-bc-col"><div class="adm-bc-val">${vals[i]}</div><div class="adm-bc-bar" style="height:${(vals[i]/max)*80}px;background:${i===4?'#C9A84C':'#1B3A6B'};opacity:${i===4?1:.75}"></div><div class="adm-bc-day">${d}</div></div>`).join('');
  if(typeof workshops!=='undefined'){ const mini=document.getElementById('apMiniWs'); if(mini) mini.innerHTML=workshops.slice(0,4).map(w=>{ const pct=Math.round(w.takenSeats/w.totalSeats*100); return `<div class="ap-mini-ws" onclick="apShowPage('workshops',null)"><div style="display:flex;justify-content:space-between;align-items:flex-start;"><div class="ap-mini-ws-title">${w.emoji} ${w.title}</div><span style="font-size:.68rem;font-weight:800;color:${pct>=90?'#DC2626':pct>=70?'#C2410C':'#059669'};flex-shrink:0;margin-left:6px;">${w.totalSeats-w.takenSeats} left</span></div><div class="ap-mini-ws-meta">${w.date} · ${w.type==='online'?'Online':'Offline'}</div><div class="ap-mini-seat-bar"><div class="ap-mini-seat-fill" style="width:${pct}%"></div></div></div>`; }).join(''); }
  admLive=setInterval(()=>{ admReg++; const sr=document.getElementById('apStatReg'); const rb=document.getElementById('apRegBadge'); if(sr) sr.textContent=admReg; if(rb) rb.textContent=admReg; const tbody=document.getElementById('apLiveReg'); if(tbody){ const s=admNames[admIdx%admNames.length],w=admWsList[admIdx%admWsList.length]; const r=document.createElement('tr'); r.innerHTML=`<td style="font-weight:600">${s}</td><td>${w}</td><td style="color:#94A3B8">Just now</td><td><span class="adm-badge adb-green">Confirmed</span></td>`; r.style.background='#FFFBF0'; tbody.insertBefore(r,tbody.firstChild); if(tbody.rows.length>6) tbody.deleteRow(tbody.rows.length-1); setTimeout(()=>r.style.background='',2500); Array.from(tbody.rows).forEach((row,i)=>{if(row.cells[2])row.cells[2].textContent=admTimes[Math.min(i,admTimes.length-1)];});}
  const feed=document.getElementById('apFeedNew'); if(feed){ const s=admNames[admIdx%admNames.length],w=admWsList[admIdx%admWsList.length]; const a=document.createElement('div'); a.className='adm-feed-item'; a.style.opacity='0'; a.style.transition='opacity .4s'; a.innerHTML=`<div class="adm-feed-icon" style="background:#ECFDF5">✅</div><div><div class="adm-feed-text"><strong>${s}</strong> registered for ${w}</div><div class="adm-feed-time">Just now</div></div>`; feed.insertBefore(a,feed.firstChild); setTimeout(()=>a.style.opacity='1',50); if(feed.children.length>5) feed.removeChild(feed.lastChild); } admIdx++; },4500);
  admMsgInt=setInterval(()=>{ if(Math.random()>.65){ admMsgCount++; const sm=document.getElementById('apStatMsg'); if(sm) sm.textContent=admMsgCount; }},9000);
}
function buildAdminPages(){ buildWsCards(); buildAnalyticsPage(); }
let apWsCurrentFilter='all',apWsCatFilter='';
function buildWsCards(){
  if(typeof workshops==='undefined') return;
  const container=document.getElementById('apWsCards'); if(!container) return;
  const q=(document.getElementById('apWsSearchInput')?.value||'').toLowerCase();
  let list=workshops;
  if(apWsCurrentFilter==='online') list=list.filter(w=>w.type==='online');
  else if(apWsCurrentFilter==='offline') list=list.filter(w=>w.type==='offline');
  else if(apWsCurrentFilter==='upcoming') list=list.slice(0,5);
  if(apWsCatFilter) list=list.filter(w=>w.category===apWsCatFilter);
  if(q) list=list.filter(w=>w.title.toLowerCase().includes(q)||w.instructor.toLowerCase().includes(q));
  container.innerHTML=list.map(w=>{ const pct=Math.round(w.takenSeats/w.totalSeats*100); const rem=w.totalSeats-w.takenSeats; const barColor=pct>=90?'#DC2626':pct>=70?'#C2410C':'#C9A84C'; return `<div class="ap-wsc"><div class="ap-wsc-thumb">${w.svg}<span class="ap-wsc-type ${w.type==='online'?'adb-navy':'adb-yellow'}">${w.type==='online'?'🌐 Online':'📍 Offline'}</span></div><div class="ap-wsc-body"><div class="ap-wsc-title">${w.title}</div><div class="ap-wsc-info"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${w.date}</div><div class="ap-wsc-info"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>${w.instructor}</div><div class="ap-wsc-bar"><div class="ap-wsc-bar-fill" style="width:${pct}%;background:${barColor}"></div></div><div style="display:flex;justify-content:space-between;font-size:.71rem;color:#94A3B8;margin-bottom:10px;"><span>${rem} seats left</span><span>${pct}% full</span></div><div class="ap-wsc-foot"><span class="adm-badge ${pct>=90?'adb-red':pct>=70?'adb-yellow':'adb-green'}">${pct>=90?'Nearly Full':pct>=70?'Filling Up':'Open'}</span><div style="display:flex;gap:6px;"><button class="ap-wsc-foot-btn apwfb-view" onclick="admToast('✏️ Editing workshop')">Edit</button><button class="ap-wsc-foot-btn apwfb-reg" onclick="admToast('🗑 Workshop deleted')">Delete</button></div></div></div></div>`; }).join('')||'<div style="grid-column:1/-1;text-align:center;padding:40px;color:#94A3B8;">No workshops found.</div>';
}
function apFilterWs(f,el){ apWsCurrentFilter=f; apWsCatFilter=''; document.querySelectorAll('.ap-ws-filter-item').forEach(i=>i.classList.remove('active')); if(el) el.classList.add('active'); buildWsCards(); }
function apFilterWsCat(cat,el){ apWsCatFilter=cat; apWsCurrentFilter='all'; document.querySelectorAll('.ap-ws-filter-item').forEach(i=>i.classList.remove('active')); if(el) el.classList.add('active'); buildWsCards(); }
function apWsTab(f,el){ apWsCurrentFilter=f; document.querySelectorAll('.ap-ws-tab').forEach(t=>t.classList.remove('active')); if(el) el.classList.add('active'); buildWsCards(); }
function apFilterWsSearch(){ buildWsCards(); }
function apAddWorkshop(){ const title=document.getElementById('apWsTitle')?.value.trim(); if(!title){ admToast('⚠️ Please enter a title'); return; } admToast('✅ Workshop "'+title+'" added!'); document.getElementById('apAddWsForm').style.display='none'; ['apWsTitle','apWsInstructor','apWsDate','apWsTime','apWsVenue','apWsSeats','apWsDesc'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';}); }
function apRegTab(f,el){ document.querySelectorAll('.ap-reg-tab').forEach(t=>t.classList.remove('active')); if(el) el.classList.add('active'); admToast('Showing: '+el.textContent.trim()); }
function apFilterReg(){}
function apSendNotif(){ const msg=document.getElementById('apNotifMsg')?.value.trim(); if(!msg){ admToast('⚠️ Please write a message'); return; } const targets=[...document.querySelectorAll('.ntag.sel')].map(t=>t.textContent.trim()); admToast('📤 Sent to: '+targets.join(', ')); document.getElementById('apNotifMsg').value=''; }
function buildAnalyticsPage(){
  const hm=document.getElementById('apHeatmapNew'); if(hm){let html='';for(let w=0;w<4;w++){html+=`<div style="display:flex;align-items:center;gap:5px;margin-bottom:5px;"><span style="width:32px;font-size:.65rem;color:#94A3B8;">W${w+1}</span>`;for(let d=0;d<7;d++){const v=Math.floor(Math.random()*60);const op=0.06+v/60*0.8;html+=`<div style="flex:1;height:28px;border-radius:4px;background:rgba(27,58,107,${op.toFixed(2)});transition:.2s;" onmouseover="this.title='${v} registrations';this.style.transform='scale(1.1)'" onmouseout="this.style.transform=''"></div>`;}html+='</div>';}hm.innerHTML=html;}
  const tb=document.getElementById('apAnalyticsTable'); if(tb&&typeof workshops!=='undefined'){ tb.innerHTML=workshops.map(w=>{const pct=Math.round(w.takenSeats/w.totalSeats*100);const bar=`<div style="display:flex;align-items:center;gap:8px;"><div style="width:70px;height:5px;background:#F1F5F9;border-radius:3px;overflow:hidden;"><div style="width:${pct}%;height:100%;background:${pct>=90?'#DC2626':pct>=70?'#C2410C':'#C9A84C'};border-radius:3px;"></div></div><span style="font-size:.78rem;color:#64748B;">${pct}%</span></div>`;const rating=(3.8+Math.random()*1.2).toFixed(1);return `<tr><td style="font-weight:600">${w.emoji} ${w.title}</td><td style="color:#64748B">${w.instructor}</td><td>${w.takenSeats}</td><td>${w.totalSeats}</td><td>${bar}</td><td>⭐ ${rating}</td></tr>`;}).join('');}
}
function buildSeatMonitor(){
  if(typeof workshops==='undefined') return;
  const grid=document.getElementById('apSeatGrid'); if(!grid) return;
  grid.innerHTML=workshops.map(w=>{const pct=Math.round(w.takenSeats/w.totalSeats*100);const rem=w.totalSeats-w.takenSeats;const isAlert=pct>=90,isWarn=pct>=70;const col=isAlert?'#DC2626':isWarn?'#C2410C':'#059669';return `<div class="ap-seat-card ${isAlert?'alert':isWarn?'warn':''}"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;"><div style="font-weight:700;font-size:.9rem;color:#0D1B2A;line-height:1.3;flex:1;">${w.emoji} ${w.title}</div><span class="adm-badge ${isAlert?'adb-red':isWarn?'adb-yellow':'adb-green'}" style="flex-shrink:0;margin-left:8px;">${isAlert?'FULL':isWarn?'WARNING':'OPEN'}</span></div><div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:800;color:${col};line-height:1;margin-bottom:10px;">${pct}%</div><div style="height:8px;background:#F1F5F9;border-radius:4px;overflow:hidden;margin-bottom:8px;"><div style="height:100%;width:${pct}%;background:${col};border-radius:4px;transition:1s ease;"></div></div><div style="display:flex;justify-content:space-between;font-size:.74rem;color:#94A3B8;margin-bottom:10px;"><span>${w.takenSeats}/${w.totalSeats}</span><span>${rem>0?rem+' left':'⚠️ Full'}</span></div><div style="display:flex;gap:6px;"><button onclick="admToast('➕ Seats increased!')" style="flex:1;padding:6px;background:#EEF2FF;border:none;border-radius:5px;color:#1B3A6B;font-size:.72rem;font-weight:700;cursor:pointer;font-family:DM Sans,sans-serif;">+ Add Seats</button><button onclick="admToast('🔒 Closed!')" style="flex:1;padding:6px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:5px;color:#64748B;font-size:.72rem;font-weight:700;cursor:pointer;font-family:DM Sans,sans-serif;">Close</button></div></div>`;}).join('');
  const total=workshops.reduce((a,w)=>a+w.totalSeats,0),taken=workshops.reduce((a,w)=>a+w.takenSeats,0),pct=Math.round(taken/total*100);
  const bar=document.getElementById('apCapacityBar');const txt=document.getElementById('apCapacityText');
  if(bar) setTimeout(()=>bar.style.width=pct+'%',300); if(txt) txt.textContent=pct+'% filled ('+taken+'/'+total+')';
  const sg=document.getElementById('apCapacitySummary');
  if(sg){const crit=workshops.filter(w=>w.takenSeats/w.totalSeats>=.9).length;const warn=workshops.filter(w=>{const p=w.takenSeats/w.totalSeats;return p>=.7&&p<.9;}).length;const healthy=workshops.filter(w=>w.takenSeats/w.totalSeats<.7).length;sg.innerHTML=[{l:'Critical',v:crit,c:'#DC2626'},{l:'Warning',v:warn,c:'#C2410C'},{l:'Healthy',v:healthy,c:'#059669'},{l:'Full',v:workshops.filter(w=>w.takenSeats>=w.totalSeats).length,c:'#4338CA'}].map(s=>`<div style="background:#F8FAFC;border-radius:8px;padding:14px;text-align:center;border:1px solid #E2E8F0;"><div style="font-family:Playfair Display,serif;font-size:1.6rem;font-weight:800;color:${s.c}">${s.v}</div><div style="font-size:.72rem;color:#94A3B8;margin-top:3px">${s.l}</div></div>`).join('');}
}
const allStudentsData=[{name:'Priya Sharma',roll:'2024CS001',email:'priya.sharma2024@klh.edu.in',workshop:'Machine Learning',date:'Mar 10',status:'Confirmed',dept:'CSE',phone:'+91 98401 23456'},{name:'Rohit Kumar',roll:'2024EC042',email:'rohit.kumar2024@klh.edu.in',workshop:'Cybersecurity',date:'Mar 10',status:'Confirmed',dept:'ECE',phone:'+91 99400 34567'},{name:'Sneha Patel',roll:'2024ME019',email:'sneha.patel2024@klh.edu.in',workshop:'Data Science',date:'Mar 11',status:'Pending',dept:'ME',phone:'+91 90034 56789'},{name:'Arjun Nair',roll:'2024CE007',email:'arjun.nair2024@klh.edu.in',workshop:'Communication Skills',date:'Mar 11',status:'Confirmed',dept:'CE',phone:'+91 81234 67890'},{name:'Divya Rao',roll:'2024IT031',email:'divya.rao2024@klh.edu.in',workshop:'Web Dev Bootcamp',date:'Mar 12',status:'Waitlisted',dept:'IT',phone:'+91 70012 78901'},{name:'Kiran Mehta',roll:'2024CS088',email:'kiran.mehta2024@klh.edu.in',workshop:'UI/UX Design',date:'Mar 12',status:'Confirmed',dept:'CSE',phone:'+91 88001 89012'},{name:'Anika Roy',roll:'2024EC015',email:'anika.roy2024@klh.edu.in',workshop:'Cloud AWS',date:'Mar 13',status:'Confirmed',dept:'ECE',phone:'+91 95567 90123'},{name:'Vikram Singh',roll:'2024ME052',email:'vikram.singh2024@klh.edu.in',workshop:'Public Speaking',date:'Mar 13',status:'Cancelled',dept:'ME',phone:'+91 91100 01234'},{name:'Meena Joshi',roll:'2024CS033',email:'meena.joshi2024@klh.edu.in',workshop:'Machine Learning',date:'Mar 13',status:'Confirmed',dept:'CSE',phone:'+91 87654 12345'},{name:'Siddharth Das',roll:'2024IT009',email:'siddharth.das2024@klh.edu.in',workshop:'Cybersecurity',date:'Mar 14',status:'Confirmed',dept:'IT',phone:'+91 93210 23456'}];
function buildStudentDirectory(){ apFilterStudents(); }
function apFilterStudents(){
  var q=(document.getElementById('apStuSearch')?document.getElementById('apStuSearch').value:'').toLowerCase().trim();
  var ws=document.getElementById('apStuWsF')?document.getElementById('apStuWsF').value:'';
  var st=document.getElementById('apStuStF')?document.getElementById('apStuStF').value:'';
  var list=allStudentsData.filter(function(s){
    var mq=!q||s.name.toLowerCase().includes(q)||s.roll.toLowerCase().includes(q)||s.workshop.toLowerCase().includes(q);
    var mw=!ws||s.workshop.includes(ws);
    var ms=!st||s.status===st;
    return mq&&mw&&ms;
  });
  var deptColors={CSE:'#1B3A6B',ECE:'#C9A84C',ME:'#DC2626',IT:'#059669',CE:'#7C3AED'};
  var statusBadge={Confirmed:'adb-green',Pending:'adb-yellow',Waitlisted:'adb-blue',Cancelled:'adb-red'};
