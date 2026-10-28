import React, { useState } from 'react';

// Custom SVG Icons for high-fidelity game representations
const GameLogos = {
  rov: (
    <div className="w-full h-full bg-gradient-to-br from-amber-950 via-yellow-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.25)_0%,transparent_70%)]"></div>
      <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
        <svg className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" fillOpacity="0.2"/>
          <path d="M12 4v12M8 9l8 6M16 9l-8 6" stroke="currentColor" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-yellow-400 mt-2 z-10 drop-shadow-md">ARENA OF VALOR</span>
    </div>
  ),
  valorant: (
    <div className="w-full h-full bg-gradient-to-br from-rose-950 via-red-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.25)_0%,transparent_70%)]"></div>
      <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
        <svg className="w-10 h-10 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 30 L45 70 H60 L40 30 H25 Z" fill="currentColor" />
          <path d="M75 30 L57 70 H48 L66 30 H75 Z" fill="#ECE8E1" />
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-rose-300 mt-2 z-10 drop-shadow-md">VALORANT</span>
    </div>
  ),
  roblox: (
    <div className="w-full h-full bg-gradient-to-br from-sky-950 via-blue-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
        <svg className="w-10 h-10 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="26" y="26" width="48" height="48" rx="8" fill="currentColor" transform="rotate(-15 50 50)"/>
          <rect x="42" y="42" width="16" height="16" rx="3" fill="#0F172A" transform="rotate(-15 50 50)"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-sky-300 mt-2 z-10 drop-shadow-md">ROBLOX</span>
    </div>
  ),
  genshin: (
    <div className="w-full h-full bg-gradient-to-br from-purple-950 via-indigo-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(192,132,252,0.3)]">
        <svg className="w-10 h-10 text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 15 C50 35 35 50 15 50 C35 50 50 65 50 85 C50 65 65 50 85 50 C65 50 50 35 50 15 Z" fill="currentColor"/>
          <circle cx="50" cy="50" r="10" stroke="#FDE047" strokeWidth="3" fill="none"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-purple-300 mt-2 z-10 drop-shadow-md">GENSHIN IMPACT</span>
    </div>
  ),
  ragnarok: (
    <div className="w-full h-full bg-gradient-to-br from-orange-950 via-amber-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(251,146,60,0.3)]">
        <svg className="w-10 h-10 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20 L78 75 H22 Z" stroke="currentColor" strokeWidth="5" fill="none"/>
          <circle cx="50" cy="52" r="12" fill="#F43F5E"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-orange-300 mt-2 z-10 drop-shadow-md">RO ORIGIN</span>
    </div>
  ),
  steam: (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(96,165,250,0.3)]">
        <svg className="w-10 h-10 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="58" r="14" stroke="currentColor" strokeWidth="6" fill="none"/>
          <circle cx="68" cy="38" r="10" stroke="currentColor" strokeWidth="6" fill="none"/>
          <line x1="48" y1="50" x2="60" y2="42" stroke="currentColor" strokeWidth="6"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-blue-300 mt-2 z-10 drop-shadow-md">STEAM WALLET</span>
    </div>
  ),
  honkai: (
    <div className="w-full h-full bg-gradient-to-br from-fuchsia-950 via-pink-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(244,114,182,0.3)]">
        <svg className="w-10 h-10 text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,15 62,38 87,42 68,60 73,85 50,72 27,85 32,60 13,42 38,38" fill="currentColor"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-pink-300 mt-2 z-10 drop-shadow-md">STAR RAIL</span>
    </div>
  )
};

const gamesData = [
  { 
    id: 0, 
    name: 'RoV (Realm of Valor)', 
    category: 'mobile', 
    iconKey: 'rov',
    currency: 'คูปอง (Vouchers)', 
    idLabel: 'OpenID ของผู้เล่น (Garena / ROV)',
    idPlaceholder: 'กรอก OpenID 32 ตัวอักษร เช่น 4b89f2a17c09...',
    helpText: 'วิธีดู OpenID: เข้าเกม RoV -> ไปที่การตั้งค่า -> ทั่วไป -> คัดลอก OpenID',
    packages: [
      { id: 'rov1', name: '35 คูปอง', price: 35 }, 
      { id: 'rov2', name: '175 คูปอง', price: 170 }, 
      { id: 'rov3', name: '350 คูปอง', price: 340 }, 
      { id: 'rov4', name: '875 คูปอง', price: 840 },
      { id: 'rov5', name: '1,750 คูปอง', price: 1680 },
      { id: 'rov6', name: 'Valor Pass (พรีเมียมประจำซีซัน)', price: 299 }
    ] 
  },
  { 
    id: 1, 
    name: 'VALORANT', 
    category: 'pc', 
    iconKey: 'valorant',
    currency: 'VP (Valorant Points)', 
    idLabel: 'Riot ID (ชื่อตัวละคร#แท็ก)',
    idPlaceholder: 'เช่น GamerTH#1234',
    helpText: 'ระบุ Riot ID รวมเครื่องหมาย # และ Tag ให้ถูกต้อง',
    packages: [
      { id: 'v1', name: '475 VP', price: 175 }, 
      { id: 'v2', name: '1,000 VP', price: 350 }, 
      { id: 'v3', name: '2,050 VP', price: 700 }, 
      { id: 'v4', name: '3,650 VP', price: 1200 }
    ] 
  },
  { 
    id: 2, 
    name: 'Roblox', 
    category: 'mobile', 
    iconKey: 'roblox',
    currency: 'Robux', 
    idLabel: 'Roblox Username',
    idPlaceholder: 'ระบุชื่อผู้ใช้ในเกม Roblox',
    helpText: 'ไม่ต้องกรอกรหัสผ่าน ปลอดภัย 100%',
    packages: [
      { id: 'r1', name: '400 Robux', price: 149 }, 
      { id: 'r2', name: '800 Robux', price: 299 }, 
      { id: 'r3', name: '1,700 Robux', price: 599 }, 
      { id: 'r4', name: '4,500 Robux', price: 1499 }
    ] 
  },
  { 
    id: 3, 
    name: 'Genshin Impact', 
    category: 'mobile', 
    iconKey: 'genshin',
    currency: 'Genesis Crystals', 
    idLabel: 'UID & Server',
    idPlaceholder: 'เช่น 800123456 (Asia)',
    helpText: 'ตรวจสอบ Server ให้ถูกต้องก่อนทำรายการ',
    packages: [
      { id: 'g1', name: '60 Crystals', price: 35 }, 
      { id: 'g2', name: '300 Crystals', price: 169 }, 
      { id: 'g3', name: '980 Crystals', price: 499 }, 
      { id: 'g4', name: '1,980 Crystals', price: 990 }
    ] 
  },
  { 
    id: 4, 
    name: 'Ragnarok Origin', 
    category: 'mobile', 
    iconKey: 'ragnarok',
    currency: 'Nyan Berries', 
    idLabel: 'Secret Code / Character ID',
    idPlaceholder: 'กรอก Secret Code ของคุณ',
    helpText: 'ดูได้จากหน้าโปรไฟล์ภายในเกม',
    packages: [
      { id: 'ro1', name: '60 Berries', price: 32 }, 
      { id: 'ro2', name: '300 Berries', price: 159 }, 
      { id: 'ro3', name: '680 Berries', price: 319 }, 
      { id: 'ro4', name: '1,280 Berries', price: 619 }
    ] 
  },
  { 
    id: 5, 
    name: 'Steam Wallet Card', 
    category: 'giftcard', 
    iconKey: 'steam',
    currency: 'THB Code', 
    idLabel: 'เบอร์โทรศัพท์สำหรับรับรหัส SMS',
    idPlaceholder: 'เช่น 0812345678',
    helpText: 'ระบบจะส่งโค้ดเติมเงินผ่าน SMS ไปยังเบอร์นี้',
    packages: [
      { id: 's1', name: 'Steam Wallet 50 THB', price: 55 }, 
      { id: 's2', name: 'Steam Wallet 320 THB', price: 320 }, 
      { id: 's3', name: 'Steam Wallet 1,000 THB', price: 1000 }, 
      { id: 's4', name: 'Steam Wallet 2,500 THB', price: 2500 }
    ] 
  },
  { 
    id: 6, 
    name: 'Honkai: Star Rail', 
    category: 'mobile', 
    iconKey: 'honkai',
    currency: 'Oneiric Shards', 
    idLabel: 'UID & Server',
    idPlaceholder: 'เช่น 800987654 (Asia)',
    helpText: 'ตรวจสอบ UID ที่มุมขวาล่างของหน้าจอเกม',
    packages: [
      { id: 'h1', name: '60 Shards', price: 35 }, 
      { id: 'h2', name: '300 Shards', price: 169 }, 
      { id: 'h3', name: '980 Shards', price: 499 }, 
      { id: 'h4', name: '1,980 Shards', price: 990 }
    ] 
  }
];

export default function App() {
  const [balance, setBalance] = useState(1500.00);
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 'NEXUS-884912',
      game: 'RoV (Realm of Valor)',
      pkg: '350 คูปอง',
      uid: 'e98a12004fa921b38',
      price: 340,
      status: 'สำเร็จ',
      time: '11:05:12'
    }
  ]);

  // Modal States
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [playerUid, setPlayerUid] = useState('');

  // Wallet Top-up State
  const [walletAmount, setWalletAmount] = useState(300);

  // Toast State
  const [toast, setToast] = useState({ show: false, title: '', desc: '', type: 'success' });

  const showToast = (title, desc, type = 'success') => {
    setToast({ show: true, title, desc, type });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 4000);
  };

  const filteredGames = gamesData.filter(game => {
    const matchCategory = category === 'all' || game.category === category;
    const matchSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleOpenCheckout = (game) => {
    setSelectedGame(game);
    setSelectedPackage(game.packages[0]);
    setPlayerUid('');
    setIsCheckoutOpen(true);
  };

  const handleCheckout = () => {
    if (!playerUid.trim()) {
      showToast("กรุณากรอกข้อมูลไอดี", `ต้องใช้ ${selectedGame.idLabel} เพื่อทำรายการ`, "error");
      return;
    }
    if (balance < selectedPackage.price) {
      showToast("ยอดเงินไม่เพียงพอ", "กรุณาเติมเงินเข้ากระเป๋าเงินก่อนทำรายการซื้อ", "error");
      setIsCheckoutOpen(false);
      setIsWalletOpen(true);
      return;
    }

    setBalance(prev => prev - selectedPackage.price);
    const newOrder = {
      id: 'NEXUS-' + Math.floor(100000 + Math.random() * 900000),
      game: selectedGame.name,
      pkg: selectedPackage.name,
      uid: playerUid,
      price: selectedPackage.price,
      status: 'สำเร็จ',
      time: new Date().toLocaleTimeString('th-TH')
    };

    setOrderHistory(prev => [newOrder, ...prev]);
    setIsCheckoutOpen(false);
    showToast("เติมเงินสำเร็จ!", `ทำรายการเติม ${selectedPackage.name} ให้ไอดี ${playerUid} เรียบร้อยแล้ว`, "success");
  };

  const handleWalletTopup = () => {
    if (walletAmount <= 0) {
      showToast("ยอดเงินไม่ถูกต้อง", "ระบุจำนวนเงินมากกว่า 0 บาท", "error");
      return;
    }
    setBalance(prev => prev + walletAmount);
    setIsWalletOpen(false);
    showToast("เติมเงินเข้ากระเป๋าสำเร็จ", `เพิ่มเครดิตจำนวน ${walletAmount.toLocaleString()} บาท เรียบร้อยแล้ว`, "success");
  };

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Top Cyber Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-[#070d1f]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_20px_rgba(6,182,212,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => { setCategory('all'); setSearchQuery(''); }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:rotate-6 transition-transform">
              <svg className="w-6 h-6 text-slate-950" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow">
                NEXUS-TOPUP
              </span>
              <span className="text-[9px] text-cyan-400/70 tracking-widest font-mono -mt-1">HIGH-SPEED SYSTEM</span>
            </div>
          </div>
          
          {/* Controls: Search & Wallet */}
          <div className="flex items-center space-x-4">
            
            {/* Search Input */}
            <div className="hidden md:flex items-center bg-[#0d1631] border border-cyan-900/60 rounded-full px-4 py-1.5 focus-within:border-cyan-400 transition-colors shadow-inner">
              <svg className="w-4 h-4 text-cyan-400/70 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาเกม เช่น RoV..." 
                className="bg-transparent text-sm focus:outline-none text-slate-100 placeholder-slate-500 w-44"
              />
            </div>

            {/* Wallet Balance Display */}
            <div className="flex items-center bg-[#0d1631] border border-cyan-500/30 rounded-xl px-3 py-1.5 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
              <div className="flex flex-col text-right mr-3">
                <span className="text-[10px] text-cyan-300/70 uppercase tracking-wider font-semibold">เครดิตคงเหลือ</span>
                <div className="flex items-center text-cyan-300 font-extrabold text-sm leading-none">
                  <span>{balance.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                  <span className="text-xs ml-0.5 text-cyan-400">฿</span>
                </div>
              </div>
              <button 
                onClick={() => setIsWalletOpen(true)} 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-black px-3 py-1.5 rounded-lg transition-all shadow-md shadow-cyan-500/25 cursor-pointer flex items-center gap-1 active:scale-95"
              >
                <span>+ เติมเงิน</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        
        {/* Hero Cyber Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-slate-900 to-[#070d1f] border border-cyan-500/30 mb-10 p-6 sm:p-10 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.25),transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/40 rounded-full px-3 py-1 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-bold text-cyan-300 tracking-wide">ระบบเติมเกมอัตโนมัติ 24 ชั่วโมง</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
              เติมเกม <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]">RoV คูปอง</span> ราคาถูกที่สุด
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
              รองรับระบบ OpenID ปลอดภัย ไม่ต้องใช้รหัสผ่าน คูปองเข้าไอดีทันทีภายใน 1-3 วินาที
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-1.5 bg-[#0b142d] px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="text-emerald-400">✓</span> การันตีเงินเข้าเร็ว
              </div>
              <div className="flex items-center gap-1.5 bg-[#0b142d] px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="text-emerald-400">✓</span> ไม่ต้องใช้รหัสผ่าน
              </div>
              <div className="flex items-center gap-1.5 bg-[#0b142d] px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="text-emerald-400">✓</span> มีสลิปย้อนหลัง
              </div>
            </div>
          </div>
        </div>

        {/* Section Header & Categories */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-black flex items-center gap-3 text-white tracking-wide">
              <span>🎮 เลือกเกมที่ต้องการเติม</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">คลิกที่เกมเพื่อเลือกแพ็กเกจและทำรายการ</p>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'ทั้งหมด' },
              { id: 'mobile', label: 'เกมมือถือ (RoV / Genshin)' },
              { id: 'pc', label: 'PC / Console' },
              { id: 'giftcard', label: 'บัตรเติมเงิน' }
            ].map(cat => (
              <button 
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${category === cat.id ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105' : 'bg-[#0d1631] text-slate-300 hover:bg-[#15234d] border border-cyan-900/30'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredGames.length === 0 ? (
            <div className="col-span-full text-center py-16 bg-[#091126] rounded-2xl border border-dashed border-slate-800 text-slate-400">
              ไม่พบรายการเกมที่คุณค้นหา
            </div>
          ) : (
            filteredGames.map(game => (
              <div 
                key={game.id} 
                onClick={() => handleOpenCheckout(game)}
                className={`group bg-[#070e24] border rounded-2xl overflow-hidden hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 cursor-pointer flex flex-col relative ${game.id === 0 ? 'border-yellow-500/60 ring-1 ring-yellow-500/30' : 'border-cyan-900/40 hover:border-cyan-400'}`}
              >
                {/* RoV Badge */}
                {game.id === 0 && (
                  <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-lg">
                    นิยมสูงสุด 🔥
                  </div>
                )}

                <div className="h-44 overflow-hidden relative">
                  {GameLogos[game.iconKey]}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e24] via-transparent to-transparent"></div>
                </div>

                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">{game.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">เติมผ่านระบบอัตโนมัติ</p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      เติมทันที →
                    </span>
                    <span className="text-[10px] bg-cyan-950/80 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800/40 font-semibold">
                      {game.currency}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Real-time Order History Table */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📋 ประวัติการเติมเงินล่าสุด</span>
            </h2>
            <span className="text-xs text-slate-400">อัปเดตสถานะเรียลไทม์</span>
          </div>

          <div className="bg-[#070e24] border border-cyan-900/40 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-200">
                <thead className="bg-[#0c1635] text-xs uppercase text-cyan-400 border-b border-cyan-900/40">
                  <tr>
                    <th className="px-5 py-4">หมายเลขคำสั่งซื้อ</th>
                    <th className="px-5 py-4">เกม / แพ็กเกจ</th>
                    <th className="px-5 py-4">ข้อมูลผู้รับ (ID / OpenID)</th>
                    <th className="px-5 py-4">ราคา</th>
                    <th className="px-5 py-4">สถานะ</th>
                    <th className="px-5 py-4">เวลา</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {orderHistory.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="p-8 text-center text-slate-500 text-sm">ยังไม่มีประวัติทำรายการในขณะนี้</td>
                    </tr>
                  ) : (
                    orderHistory.map(item => (
                      <tr key={item.id} className="hover:bg-[#0c183d] transition-colors">
                        <td className="px-5 py-4 font-mono text-xs font-semibold text-cyan-400">{item.id}</td>
                        <td className="px-5 py-4">
                          <span className="font-bold text-white block">{item.game}</span>
                          <span className="text-xs text-slate-400">{item.pkg}</span>
                        </td>
                        <td className="px-5 py-4 font-mono text-xs text-slate-300">{item.uid}</td>
                        <td className="px-5 py-4 font-bold text-cyan-300">{item.price} ฿</td>
                        <td className="px-5 py-4">
                          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] px-3 py-1 rounded-full font-bold inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-xs text-slate-400">{item.time}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#02050c] border-t border-cyan-900/30 mt-20 py-8 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-black text-cyan-400">NEXUS-TOPUP</span>
            <span>— ระบบเติมเกมอัตโนมัติปลอดภัย 100%</span>
          </div>
          <p>&copy; 2026 NEXUS-TOPUP. All rights reserved.</p>
        </div>
      </footer>

      {/* LINE Official Floating Button */}
      <a
        href="https://lin.ee/s5cebiI"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#06C755] hover:bg-[#05b34c] text-white font-black py-3 px-5 rounded-full shadow-[0_0_20px_rgba(6,199,85,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.412-.105-.534-.283l-2.585-3.763v3.419c0 .348-.283.63-.63.63-.346 0-.627-.282-.627-.63V8.108c0-.27.174-.51.432-.596.066-.021.133-.031.2-.031.211 0 .411.105.533.283l2.585 3.764V8.108c0-.345.283-.63.63-.63.348 0 .63.285.63.63v4.771zm-7.647 0c0 .348-.283.63-.63.63-.346 0-.627-.282-.627-.63V8.108c0-.345.281-.63.627-.63.347 0 .63.285.63.63v4.771zm-3.15.63h-1.63c-.347 0-.628-.285-.628-.63V8.108c0-.345.281-.63.628-.63.347 0 .628.285.628.63v4.141h1.002c.347 0 .628.285.628.63 0 .345-.281.63-.628.63zM12 2C6.477 2 2 5.968 2 10.865c0 4.372 3.587 8.046 8.435 8.761.328.07.774.215.888.494.102.247.067.635.031.886-.057.393-.263 1.536-.296 1.864-.045.452.209.444.438.303.228-.142 3.635-2.14 4.962-2.919 1.488.358 3.055.545 4.632.545 5.523 0 10-3.968 10-8.865S17.523 2 12 2z"/>
        </svg>
        <span className="text-sm">คุยกับแอดมิน LINE</span>
      </a>

      {/* Checkout Modal */}
      {isCheckoutOpen && selectedGame && (
        <div className="fixed inset-0 z-50 bg-[#02050c]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#070e24] border border-cyan-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(6,182,212,0.2)]">
            
            <button 
              onClick={() => setIsCheckoutOpen(false)} 
              className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer text-lg font-bold w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Selected Game Banner Header */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800">
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 border border-cyan-500/30">
                {GameLogos[selectedGame.iconKey]}
              </div>
              <div>
                <h3 className="font-black text-lg text-white">{selectedGame.name}</h3>
                <p className="text-xs text-cyan-400 font-medium">กรอกข้อมูลผู้ใช้และเลือกราคาแพ็กเกจ</p>
              </div>
            </div>

            <div className="space-y-5">
              
              {/* Step 1: Account Input */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  1. {selectedGame.idLabel} <span className="text-rose-400">*</span>
                </label>
                <input 
                  type="text" 
                  value={playerUid} 
                  onChange={(e) => setPlayerUid(e.target.value)}
                  placeholder={selectedGame.idPlaceholder} 
                  className="w-full bg-[#030712] border border-cyan-900/60 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 shadow-inner font-mono" 
                />
                {selectedGame.helpText && (
                  <p className="text-[11px] text-cyan-400/80 mt-1.5 flex items-center gap-1">
                    <span>💡</span> {selectedGame.helpText}
                  </p>
                )}
              </div>

              {/* Step 2: Package Grid */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-2">
                  2. เลือกแพ็กเกจเติมเงิน <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5 max-h-60 overflow-y-auto pr-1">
                  {selectedGame.packages.map((pkg) => (
                    <button 
                      key={pkg.id} 
                      onClick={() => setSelectedPackage(pkg)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${selectedPackage?.id === pkg.id ? 'border-cyan-400 bg-cyan-950/70 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] font-bold' : 'border-slate-800 bg-[#030712] text-slate-300 hover:border-slate-700'}`}
                    >
                      <div className="font-bold text-sm text-white">{pkg.name}</div>
                      <div className="text-xs font-extrabold text-cyan-400 mt-1">{pkg.price} ฿</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Summary & Confirm Button */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">ยอดชำระสุทธิ</span>
                  <span className="text-xl font-black text-cyan-400">{selectedPackage?.price} ฿</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/25 cursor-pointer active:scale-95"
                >
                  ยืนยันชำระเงิน
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Wallet Modal */}
      {isWalletOpen && (
        <div className="fixed inset-0 z-50 bg-[#02050c]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#070e24] border border-cyan-500/40 rounded-3xl max-w-sm w-full p-6 relative shadow-[0_0_50px_rgba(6,182,212,0.2)]">
            <button 
              onClick={() => setIsWalletOpen(false)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer text-sm font-bold"
            >
              ✕
            </button>
            <h3 className="font-black text-lg text-white mb-4">เติมเงินเข้ากระเป๋า</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-2">ระบุจำนวนเงิน (บาท)</label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[100, 300, 500, 1000, 2000, 5000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setWalletAmount(amount)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${walletAmount === amount ? 'border-cyan-400 bg-cyan-950/70 text-cyan-300' : 'border-slate-800 bg-[#030712] text-slate-300'}`}
                    >
                      {amount} ฿
                    </button>
                  ))}
                </div>
                <input 
                  type="number" 
                  value={walletAmount}
                  onChange={(e) => setWalletAmount(Number(e.target.value))}
                  className="w-full bg-[#030712] border border-cyan-900/60 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>
              <button 
                onClick={handleWalletTopup}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
              >
                ยืนยันการเติมเงิน
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed bottom-6 left-6 z-50 border px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce ${toast.type === 'error' ? 'bg-rose-950/90 border-rose-500 text-rose-200' : 'bg-[#070e24]/95 border-cyan-500 text-white'}`}>
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${toast.type === 'error' ? 'bg-rose-500/20 text-rose-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
            {toast.type === 'error' ? '!' : '✓'}
          </div>
          <div>
            <p className="text-xs font-black">{toast.title}</p>
            <p className="text-xs text-slate-300 mt-0.5">{toast.desc}</p>
          </div>
        </div>
      )}

    </div>
  );
}
