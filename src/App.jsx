import React, { useState } from 'react';

const gamesData = [
  { 
    id: 0, 
    name: 'RoV (Realm of Valor)', 
    category: 'mobile', 
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60', 
    currency: 'คูปอง', 
    packages: [
      { id: 'rov1', name: '35 คูปอง', price: 35 }, 
      { id: 'rov2', name: '175 คูปอง', price: 170 }, 
      { id: 'rov3', name: '350 คูปอง', price: 340 }, 
      { id: 'rov4', name: '875 คูปอง', price: 840 },
      { id: 'rov5', name: '1,750 คูปอง', price: 1680 },
      { id: 'rov6', name: 'Valor Pass (พรีเมียม)', price: 299 }
    ] 
  },
  { 
    id: 1, 
    name: 'VALORANT', 
    category: 'pc', 
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60', 
    currency: 'VP', 
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
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&auto=format&fit=crop&q=60', 
    currency: 'Robux', 
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
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60', 
    currency: 'Genesis Crystals', 
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
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=60', 
    currency: 'Diamonds', 
    packages: [
      { id: 'ro1', name: '60 Diamonds', price: 32 }, 
      { id: 'ro2', name: '300 Diamonds', price: 159 }, 
      { id: 'ro3', name: '680 Diamonds', price: 319 }, 
      { id: 'ro4', name: '1,280 Diamonds', price: 619 }
    ] 
  },
  { 
    id: 5, 
    name: 'Steam Wallet Card', 
    category: 'giftcard', 
    image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&auto=format&fit=crop&q=60', 
    currency: 'THB', 
    packages: [
      { id: 's1', name: 'Steam 50 THB', price: 55 }, 
      { id: 's2', name: 'Steam 320 THB', price: 320 }, 
      { id: 's3', name: 'Steam 1,000 THB', price: 1000 }, 
      { id: 's4', name: 'Steam 2,500 THB', price: 2500 }
    ] 
  },
  { 
    id: 6, 
    name: 'Honkai: Star Rail', 
    category: 'mobile', 
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=60', 
    currency: 'Oneiric Shards', 
    packages: [
      { id: 'h1', name: '60 Shards', price: 35 }, 
      { id: 'h2', name: '300 Shards', price: 169 }, 
      { id: 'h3', name: '980 Shards', price: 499 }, 
      { id: 'h4', name: '1,980 Shards', price: 990 }
    ] 
  }
];

export default function App() {
  const [balance, setBalance] = useState(500.00);
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderHistory, setOrderHistory] = useState([]);

  // Modal States
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [playerUid, setPlayerUid] = useState('');

  // Wallet Top-up State
  const [walletAmount, setWalletAmount] = useState(100);

  // Toast Notification State
  const [toast, setToast] = useState({ show: false, title: '', desc: '', type: 'success' });

  const showToast = (title, desc, type = 'success') => {
    setToast({ show: true, title, desc, type });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3500);
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
      showToast("แจ้งเตือน", "กรุณากรอก UID หรือข้อมูลไอดีเกมของคุณ", "error");
      return;
    }
    if (balance < selectedPackage.price) {
      showToast("ยอดเงินไม่พอ", "ยอดเงินในกระเป๋าของคุณไม่เพียงพอ กรุณาเติมเงินเพิ่ม", "error");
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
      time: new Date().toLocaleTimeString()
    };

    setOrderHistory(prev => [newOrder, ...prev]);
    setIsCheckoutOpen(false);
    showToast("เติมเงินสำเร็จ!", `สั่งซื้อ ${selectedPackage.name} (${selectedGame.name}) เรียบร้อยแล้ว`, "success");
  };

  const handleWalletTopup = () => {
    if (walletAmount <= 0) {
      showToast("ข้อผิดพลาด", "กรุณาระบุจำนวนเงินที่ต้องการเติม", "error");
      return;
    }
    setBalance(prev => prev + walletAmount);
    setIsWalletOpen(false);
    showToast("เติมเงินสำเร็จ", `เพิ่มเงินเข้ากระเป๋าจำนวน ${walletAmount.toLocaleString()} บาท เรียบร้อยแล้ว`, "success");
  };

  return (
    <div className="bg-[#070b19] text-blue-50 min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-[#0a1128]/90 backdrop-blur-md border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCategory('all')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <i className="fa-solid fa-bolt text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">NEXUS-TOPUP</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-[#0e1736] border border-blue-900/60 rounded-full px-4 py-1.5 focus-within:border-cyan-500 transition">
              <i className="fa-solid fa-search text-blue-400/70 mr-2 text-sm"></i>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาเกม..." 
                className="bg-transparent text-sm focus:outline-none text-blue-100 placeholder-blue-400/50 w-48"
              />
            </div>

            <div className="flex items-center bg-[#0e1736] border border-blue-900/60 rounded-xl px-3 py-1.5 shadow-inner">
              <i className="fa-solid fa-wallet text-cyan-400 mr-2"></i>
              <span className="text-xs text-blue-300 mr-1">ยอดเงิน:</span>
              <span className="font-bold text-cyan-300">{balance.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
              <span className="text-xs text-blue-300 ml-1">฿</span>
              <button 
                onClick={() => setIsWalletOpen(true)} 
                className="ml-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg transition shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <i className="fa-solid fa-plus mr-1"></i> เติมเงิน
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        
        {/* Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-[#0a1128] border border-blue-900/50 mb-10 p-6 sm:p-10 shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-xl">
            <span className="inline-block bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs px-3 py-1 rounded-full font-medium mb-3">ระบบเติมเกมอัตโนมัติ 24 ชม.</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-white">เติมเกมสุดคุ้ม ปลอดภัย รวดเร็วทันใจ</h1>
            <p className="text-blue-300/80 text-sm sm:text-base mb-6">รองรับ UID / Server ทุกเกมดัง พร้อมโปรโมชั่นส่วนลดพิเศษทุกสัปดาห์</p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2 text-white">
            <i className="fa-solid fa-gamepad text-cyan-400"></i> รายการเกมทั้งหมด
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'ทั้งหมด' },
              { id: 'mobile', label: 'มือถือ' },
              { id: 'pc', label: 'PC / Steam' },
              { id: 'giftcard', label: 'บัตรเติมเงิน' }
            ].map(cat => (
              <button 
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl transition cursor-pointer ${category === cat.id ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-bold' : 'bg-[#0f193e] text-blue-200 hover:bg-[#152352] border border-blue-900/40'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredGames.length === 0 ? (
            <div className="col-span-full text-center py-10 text-blue-400/60">ไม่พบเกมที่คุณค้นหา</div>
          ) : (
            filteredGames.map(game => (
              <div 
                key={game.id} 
                onClick={() => handleOpenCheckout(game)}
                className="bg-[#0b132b] border border-blue-900/50 rounded-2xl overflow-hidden hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/10 transition group cursor-pointer flex flex-col"
              >
                <div className="h-36 overflow-hidden relative">
                  <img src={game.image} alt={game.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent"></div>
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-blue-100 group-hover:text-cyan-400 transition">{game.name}</h3>
                    <p className="text-xs text-blue-400/70 mt-0.5">เติมเกมอัตโนมัติ</p>
                  </div>
                  <span className="mt-3 text-xs text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition">
                    เติมเงินทันที <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* History Section */}
        <div className="mt-16">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-white">
            <i className="fa-solid fa-clock-rotate-left text-indigo-400"></i> ประวัติการเติมเงินล่าสุด
          </h2>
          <div className="bg-[#0b132b] border border-blue-900/50 rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-blue-200">
                <thead className="bg-[#0e1836] text-xs uppercase text-blue-400 border-b border-blue-900/50">
                  <tr>
                    <th className="px-4 py-3">หมายเลขคำสั่งซื้อ</th>
                    <th className="px-4 py-3">เกม / แพ็กเกจ</th>
                    <th className="px-4 py-3">UID / Server</th>
                    <th className="px-4 py-3">ราคา</th>
                    <th className="px-4 py-3">สถานะ</th>
                    <th className="px-4 py-3">เวลา</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="p-8 text-center text-blue-400/60 text-sm">ยังไม่มีประวัติการทำรายการในเซสชันนี้</td>
                    </tr>
                  ) : (
                    orderHistory.map(item => (
                      <tr key={item.id} className="border-b border-blue-900/30 hover:bg-[#101d42] transition">
                        <td className="px-4 py-3 font-mono text-xs text-cyan-400">{item.id}</td>
                        <td className="px-4 py-3 font-medium text-white">{item.game} <span className="text-xs text-blue-400/70 block">{item.pkg}</span></td>
                        <td className="px-4 py-3 text-xs font-mono text-blue-300">{item.uid}</td>
                        <td className="px-4 py-3 text-cyan-300 font-semibold">{item.price} ฿</td>
                        <td className="px-4 py-3"><span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded-full font-medium">{item.status}</span></td>
                        <td className="px-4 py-3 text-xs text-blue-400/60">{item.time}</td>
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
      <footer className="bg-[#050814] border-t border-blue-900/40 mt-20 py-8 text-center text-sm text-blue-400/60">
        <p>&copy; 2026 NEXUS-TOPUP. All rights reserved. ระบบเติมเกมอัตโนมัติความเร็วสูง</p>
      </footer>

      {/* LINE Contact Floating Button */}
      <a
        href="https://lin.ee/s5cebiI"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-3 px-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.412-.105-.534-.283l-2.585-3.763v3.419c0 .348-.283.63-.63.63-.346 0-.627-.282-.627-.63V8.108c0-.27.174-.51.432-.596.066-.021.133-.031.2-.031.211 0 .411.105.533.283l2.585 3.764V8.108c0-.345.283-.63.63-.63.348 0 .63.285.63.63v4.771zm-7.647 0c0 .348-.283.63-.63.63-.346 0-.627-.282-.627-.63V8.108c0-.345.281-.63.627-.63.347 0 .63.285.63.63v4.771zm-3.15.63h-1.63c-.347 0-.628-.285-.628-.63V8.108c0-.345.281-.63.628-.63.347 0 .628.285.628.63v4.141h1.002c.347 0 .628.285.628.63 0 .345-.281.63-.628.63zM12 2C6.477 2 2 5.968 2 10.865c0 4.372 3.587 8.046 8.435 8.761.328.07.774.215.888.494.102.247.067.635.031.886-.057.393-.263 1.536-.296 1.864-.045.452.209.444.438.303.228-.142 3.635-2.14 4.962-2.919 1.488.358 3.055.545 4.632.545 5.523 0 10-3.968 10-8.865S17.523 2 12 2z"/>
        </svg>
        <span>คุยกับแอดมิน LINE</span>
      </a>

      {/* Checkout Modal */}
      {isCheckoutOpen && selectedGame && (
        <div className="fixed inset-0 z-50 bg-[#050814]/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0b132b] border border-blue-900/60 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
            <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-4 right-4 text-blue-400 hover:text-white transition cursor-pointer">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            <div className="flex items-center gap-3 mb-4">
              <img src={selectedGame.image} className="w-12 h-12 rounded-xl object-cover" alt="" />
              <div>
                <h3 className="font-bold text-base text-white">{selectedGame.name}</h3>
                <p className="text-xs text-blue-400/70">เลือกแพ็กเกจที่คุณต้องการเติม</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-blue-300 mb-1">1. ข้อมูลผู้เล่น (UID / Server หรือ Email)</label>
                <input 
                  type="text" 
                  value={playerUid} 
                  onChange={(e) => setPlayerUid(e.target.value)}
                  placeholder="กรอก Open ID / UID ของคุณ" 
                  className="w-full bg-[#070b19] border border-blue-900/60 rounded-xl px-4 py-2.5 text-sm text-blue-100 focus:outline-none focus:border-cyan-500" 
                />
              </div>
              <div>
                <label className="block text-xs text-blue-300 mb-1">2. เลือกแพ็กเกจเติมเงิน</label>
                <div className="grid grid-cols-2 gap-2">
                  {selectedGame.packages.map((pkg) => (
                    <button 
                      key={pkg.id} 
                      onClick={() => setSelectedPackage(pkg)}
                      className={`p-3 rounded-xl border text-left transition cursor-pointer ${selectedPackage?.id === pkg.id ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300 shadow-sm shadow-cyan-500/20' : 'border-blue-900/50 bg-[#070b19] text-blue-200 hover:border-blue-700'}`}
                    >
                      <div className="font-bold text-sm text-white">{pkg.name}</div>
                      <div className="text-xs text-cyan-400 mt-1">{pkg.price} ฿</div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-blue-900/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-blue-400/75 block">ยอดรวมทั้งสิ้น</span>
                  <span className="text-lg font-bold text-cyan-400">{selectedPackage?.price} ฿</span>
                </div>
                <button onClick={handleCheckout} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm transition shadow-lg shadow-cyan-500/20 cursor-pointer">
                  ชำระเงินทันที
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wallet Topup Modal */}
      {isWalletOpen && (
        <div className="fixed inset-0 z-50 bg-[#050814]/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0b132b] border border-blue-900/60 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button onClick={() => setIsWalletOpen(false)} className="absolute top-4 right-4 text-blue-400 hover:text-white transition cursor-pointer">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
              <i className="fa-solid fa-wallet text-cyan-400"></i> เติมเงินเข้ากระเป๋า
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-blue-300 mb-1">เลือกจำนวนเงิน (บาท)</label>
                <div className="grid grid-cols-3 gap-2">
                  {[50, 100, 300, 500, 1000, 2000].map(amt => (
                    <button 
                      key={amt} 
                      onClick={() => setWalletAmount(amt)}
                      className={`py-2 rounded-xl text-sm font-semibold border transition cursor-pointer ${walletAmount === amt ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300 shadow-sm shadow-cyan-500/20' : 'bg-[#070b19] border-blue-900/50 text-blue-200 hover:border-blue-700'}`}
                    >
                      {amt.toLocaleString()} ฿
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-blue-300 mb-1">หรือระบุจำนวนเงินเอง</label>
                <input 
                  type="number" 
                  value={walletAmount} 
                  onChange={(e) => setWalletAmount(parseFloat(e.target.value) || 0)}
                  placeholder="ระบุจำนวนเงิน" 
                  className="w-full bg-[#070b19] border border-blue-900/60 rounded-xl px-4 py-2.5 text-sm text-blue-100 focus:outline-none focus:border-cyan-500" 
                />
              </div>
              <div className="p-4 bg-[#070b19] rounded-xl border border-blue-900/50 text-center">
                <p className="text-xs text-blue-300 mb-2">สแกน QR Code เพื่อชำระเงิน (จำลอง)</p>
                <div className="w-36 h-36 bg-white mx-auto rounded-lg flex items-center justify-center p-2 mb-2">
                  <i className="fa-solid fa-qrcode text-slate-950 text-6xl"></i>
                </div>
                <span className="text-sm font-bold text-cyan-400">ยอดชำระ: {walletAmount.toFixed(2)} บาท</span>
              </div>
              <button onClick={handleWalletTopup} className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition shadow-lg shadow-cyan-500/20 cursor-pointer">
                ยืนยันการเติมเงิน
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <div className={`fixed bottom-5 right-5 z-50 transform transition-all duration-300 bg-[#0b132b] border border-blue-900/80 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <i className={toast.type === 'success' ? "fa-solid fa-circle-check text-cyan-400 text-lg" : "fa-solid fa-circle-exclamation text-rose-400 text-lg"}></i>
        <div>
          <p className="text-xs font-bold text-white">{toast.title}</p>
          <p className="text-xs text-blue-300">{toast.desc}</p>
        </div>
      </div>

    </div>
  );
}
