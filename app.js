// Initialize Lucide Icons
lucide.createIcons();

/* ==========================================
   GAME DATA & PRICING STRUCTURE
   ========================================== */
const GAMES_DATA = {
    valorant: {
        name: "Valorant",
        title: "Valorant Rank & Placement Boost",
        badge: "VALORANT BOOSTING",
        heroName: "Valorant Rank Boost",
        heroBadge: "VALORANT",
        previewRank: "Radiant Peak",
        services: [
            { id: "rank", name: "Rank Boosting" },
            { id: "placement", name: "Placement Matches (5 Games)" },
            { id: "winrate", name: "Win Rate Boost" }
        ],
        ranks: [
            { id: 1, name: "Iron 1", price: 15000 },
            { id: 2, name: "Iron 2", price: 15000 },
            { id: 3, name: "Iron 3", price: 15000 },
            { id: 4, name: "Bronze 1", price: 20000 },
            { id: 5, name: "Bronze 2", price: 20000 },
            { id: 6, name: "Bronze 3", price: 20000 },
            { id: 7, name: "Silver 1", price: 30000 },
            { id: 8, name: "Silver 2", price: 30000 },
            { id: 9, name: "Silver 3", price: 30000 },
            { id: 10, name: "Gold 1", price: 45000 },
            { id: 11, name: "Gold 2", price: 45000 },
            { id: 12, name: "Gold 3", price: 45000 },
            { id: 13, name: "Platinum 1", price: 65000 },
            { id: 14, name: "Platinum 2", price: 65000 },
            { id: 15, name: "Platinum 3", price: 65000 },
            { id: 16, name: "Diamond 1", price: 95000 },
            { id: 17, name: "Diamond 2", price: 95000 },
            { id: 18, name: "Diamond 3", price: 95000 },
            { id: 19, name: "Ascendant 1", price: 140000 },
            { id: 20, name: "Ascendant 2", price: 150000 },
            { id: 21, name: "Ascendant 3", price: 160000 },
            { id: 22, name: "Immortal 1", price: 220000 },
            { id: 23, name: "Immortal 2", price: 280000 },
            { id: 24, name: "Immortal 3", price: 350000 },
            { id: 25, name: "Radiant", price: 500000 }
        ],
        packages: [
            {
                tag: "BEST VALUE",
                title: "Paket Iron ➔ Gold 1",
                sub: "Cocok untuk akun baru / reset rank season",
                price: 190000,
                unit: "/ paket",
                features: ["Pengerjaan 1-2 Hari", "Garansi Winrate >75%", "Bonus Request 1 Agent Favorite", "Mode Offline / Private"]
            },
            {
                tag: "POPULAR",
                title: "Paket Gold 1 ➔ Diamond 1",
                sub: "Melewati Elo Hell dengan cepat",
                price: 420000,
                unit: "/ paket",
                features: ["Pengerjaan 2-3 Hari", "Pro Booster Immortal/Radiant", "Gratis Stream Discord", "Garansi Anti-Drop"]
            },
            {
                tag: "FAST BOOST",
                title: "Paket Ascendant ➔ Radiant",
                sub: "Tembus kasta tertinggi Valorant",
                price: 980000,
                unit: "/ paket",
                features: ["Pro Booster Top 100 Radiant", "Pengerjaan Prioritas", "Full Live Stream + VPN City Match", "Bisa Duo bersama Booster"]
            }
        ]
    },
    genshin: {
        name: "Genshin Impact",
        title: "Genshin Impact Exploration & Quest",
        badge: "GENSHIN SERVICE",
        heroName: "Genshin Impact Exploration",
        heroBadge: "GENSHIN",
        previewRank: "Natlan 100% & Abyss",
        services: [
            { id: "exploration", name: "Exploration 100%" },
            { id: "abyss", name: "Spiral Abyss 36 Stars" },
            { id: "quest", name: "Archon & Story Quest" },
            { id: "daily", name: "Maintenance Harian" }
        ],
        regions: [
            { id: "mondstadt", name: "Mondstadt 100%", price: 60000, time: "1 Hari" },
            { id: "liyue", name: "Liyue 100%", price: 90000, time: "1-2 Hari" },
            { id: "inazuma", name: "Inazuma 100%", price: 120000, time: "2 Hari" },
            { id: "sumeru", name: "Sumeru 100%", price: 180000, time: "3 Hari" },
            { id: "fontaine", name: "Fontaine 100%", price: 160000, time: "2-3 Hari" },
            { id: "natlan", name: "Natlan 100%", price: 210000, time: "3-4 Hari" }
        ],
        packages: [
            {
                tag: "NEW REGION",
                title: "Paket Map Natlan 100%",
                sub: "Exploration + All Chests + Pyroculus",
                price: 260000,
                unit: "/ paket",
                features: ["100% All Sub-Area Natlan", "Seluruh Chest & Pyroculus", "Buka Semua Teleport Waypoint", "Estimasi 3 Hari Selesai"]
            },
            {
                tag: "BEST SELLER",
                title: "Spiral Abyss 36★ Clear",
                sub: "Garansi 36 Bintang Floor 9-12",
                price: 650000,
                unit: "/ reset",
                features: ["Pengerjaan 1-3 Jam", "Bebas Pakai Team Favorit", "Full Clear Hadiah Primogems", "Tersedia Stream Discord"]
            },
            {
                tag: "MONTHLY",
                title: "Maintenance Harian 1 Bulan",
                sub: "Bebas pusing daily & resin penuh",
                price: 180000,
                unit: "/ bulan",
                features: ["4x Daily Commission Setiap Hari", "Burn Resin / Farm Artifact", "Battlepass Level Up", "Update Laporan via WA"]
            }
        ]
    },
    hsr: {
        name: "Honkai: Star Rail",
        title: "Honkai Star Rail MOC & Trailblaze",
        badge: "HSR SPECIALIST",
        heroName: "Honkai: Star Rail Endgame",
        heroBadge: "STAR RAIL",
        previewRank: "MOC 36★ & PF Clear",
        services: [
            { id: "moc", name: "Memory of Chaos & Endgame" },
            { id: "simulated", name: "Divergent Universe / World" },
            { id: "trailblaze", name: "Trailblaze Leveling" }
        ],
        hsrTiers: [
            { id: "moc36", name: "Memory of Chaos 36 Stars", price: 70000, time: "1-2 Jam" },
            { id: "pf12", name: "Pure Fiction 12 Stars", price: 50000, time: "1 Jam" },
            { id: "apoc12", name: "Apocalyptic Shadow 12 Stars", price: 60000, time: "1 Jam" },
            { id: "du_full", name: "Divergent Universe Full Clear", price: 90000, time: "1 Hari" }
        ],
        packages: [
            {
                tag: "BUNDLE ENDGAME",
                title: "Triple Endgame Clear 36★",
                sub: "MOC + Pure Fiction + Apocalyptic Shadow",
                price: 155000,
                unit: "/ reset",
                features: ["Garansi FULL STAR (36/36 & 12/12)", "Optimasi Rotation & Lightcone", "Hemat Rp 25.000 dari eceran", "Pengerjaan Kilat Harian"]
            },
            {
                tag: "FARMING",
                title: "Relic & Planar Farm Bundle",
                sub: "2000 Stamina Burn + Relic Craft",
                price: 95000,
                unit: "/ paket",
                features: ["Burn Reserved Trailblaze Power", "Farm Domain Relic Pilihan", "Filter Relic Substat Bagus", "Garansi Mainstat Sesuai"]
            }
        ]
    },
    wuwa: {
        name: "Wuthering Waves",
        title: "Wuthering Waves Union & Exploration",
        badge: "WUWA BOOST",
        heroName: "Wuthering Waves Service",
        heroBadge: "WUWA",
        previewRank: "Tower 30★ Clear",
        services: [
            { id: "exploration", name: "Map Exploration 100%" },
            { id: "tower", name: "Tower of Adversity 30★" },
            { id: "echo", name: "Echo 5★ Farming" }
        ],
        wuwaRegions: [
            { id: "huanglong", name: "Huanglong 100% + Caskets", price: 140000, time: "2 Hari" },
            { id: "firmament", name: "Mt. Firmament 100%", price: 110000, time: "1-2 Hari" },
            { id: "blackshores", name: "Black Shores 100%", price: 120000, time: "1-2 Hari" }
        ],
        packages: [
            {
                tag: "CHAMPION",
                title: "Tower of Adversity 30★ Clear",
                sub: "Selesaikan Hazards Zone tanpa ribet",
                price: 75000,
                unit: "/ reset",
                features: ["Garansi 30 Bintang Penuh", "Booster Handal Animation Cancel", "Proses Cepat 1-3 Jam", "Laporan Hasil Screenshot"]
            },
            {
                tag: "FULL MAP",
                title: "All Map WuWa 100% Bundle",
                sub: "Huanglong + Mt. Firmament + Black Shores",
                price: 330000,
                unit: "/ paket",
                features: ["Semua Region 100% Complete", "Sonance Caskets Complete", "Tidal Heritage & Chests", "Astrite Nambah Melimpah"]
            }
        ]
    },
    nte: {
        name: "Neverness to Everness",
        title: "NTE Slot Reserve & Startup Pack",
        badge: "NTE PRE-RELEASE",
        heroName: "Neverness to Everness",
        heroBadge: "NTE",
        previewRank: "VIP Slot Launch Day",
        services: [
            { id: "vip", name: "VIP Booster Slot Launch Day" },
            { id: "starter", name: "Starter Pack & Fast Story" }
        ],
        ntePacks: [
            { id: "vip_slot", name: "VIP Reserved Slot Day 1", price: 150000, time: "Hari H Release" },
            { id: "story_fast", name: "Speedrun Main Chapter 1-3", price: 180000, time: "1 Hari" }
        ],
        packages: [
            {
                tag: "VIP PRE-ORDER",
                title: "NTE Launch Day VIP Pass",
                sub: "Garansi booster paling pertama garap akunmu",
                price: 250000,
                unit: "/ pass",
                features: ["Prioritas Utama Pengerjaan Day-1", "Free Reroll Karakter SSR Impian", "Story Speedrun Chapter 1 Full", "Diskon 20% Joki Berikutnya"]
            }
        ]
    }
};

/* State Variables */
let currentGame = "valorant";
let currentServiceType = "rank";
let calculatedTotal = 0;

/* ==========================================
   GAME SWITCHING & INITIALIZATION
   ========================================== */
function selectGame(gameId) {
    if (!GAMES_DATA[gameId]) return;
    
    currentGame = gameId;
    const gameData = GAMES_DATA[gameId];

    // Update body theme class
    document.body.className = `theme-${gameId}`;

    // Update Tab Active Status
    document.querySelectorAll(".game-tab").forEach(tab => {
        if (tab.dataset.game === gameId) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    // Update Hero Text & Badges
    document.getElementById("hero-game-title").innerText = gameData.heroName;
    document.getElementById("preview-badge").innerText = gameData.heroBadge;
    document.getElementById("preview-rank-name").innerText = gameData.previewRank;
    document.getElementById("calc-game-badge").innerText = gameData.badge;
    document.getElementById("sum-game").innerText = gameData.name;

    // Render Service Pills
    renderServicePills(gameData);

    // Render Preset Packages
    renderPackages(gameData.packages);

    // Initial Calculation
    calculatePrice();
}

function renderServicePills(gameData) {
    const pillsContainer = document.getElementById("service-types-pills");
    pillsContainer.innerHTML = "";

    gameData.services.forEach((srv, index) => {
        const pill = document.createElement("div");
        pill.className = `radio-pill ${index === 0 ? "active" : ""}`;
        pill.innerText = srv.name;
        pill.onclick = () => {
            document.querySelectorAll("#service-types-pills .radio-pill").forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentServiceType = srv.id;
            renderDynamicControls();
            calculatePrice();
        };
        pillsContainer.appendChild(pill);
    });

    currentServiceType = gameData.services[0].id;
    renderDynamicControls();
}

/* ==========================================
   DYNAMIC CONTROLS BUILDER (VALORANT / GENSHIN / HSR / WUWA / NTE)
   ========================================== */
function renderDynamicControls() {
    const container = document.getElementById("calc-controls");
    container.innerHTML = "";
    const gameData = GAMES_DATA[currentGame];

    if (currentGame === "valorant") {
        if (currentServiceType === "rank") {
            // Rank Start -> Target
            let startOptions = gameData.ranks.map(r => `<option value="${r.id}">${r.name}</option>`).join("");
            let targetOptions = gameData.ranks.map((r, idx) => `<option value="${r.id}" ${idx === 9 ? 'selected' : ''}>${r.name}</option>`).join("");

            container.innerHTML = `
                <div class="rank-selector-pair">
                    <div class="form-select-box">
                        <span class="select-title">RANK SAAT INI</span>
                        <select id="val-rank-start" class="custom-select" onchange="calculatePrice()">
                            ${startOptions}
                        </select>
                    </div>
                    <div class="rank-arrow"><i data-lucide="arrow-right"></i></div>
                    <div class="form-select-box">
                        <span class="select-title">RANK TUJUAN</span>
                        <select id="val-rank-target" class="custom-select" onchange="calculatePrice()">
                            ${targetOptions}
                        </select>
                    </div>
                </div>
            `;
        } else if (currentServiceType === "placement") {
            container.innerHTML = `
                <div class="range-box">
                    <div class="range-header">
                        <span class="input-label">Jumlah Game Placement:</span>
                        <strong id="placement-count-text">5 Matches</strong>
                    </div>
                    <input type="range" id="val-placement-qty" class="range-slider" min="1" max="5" value="5" oninput="updatePlacementCount(this.value)">
                </div>
            `;
        } else if (currentServiceType === "winrate") {
            container.innerHTML = `
                <div class="range-box">
                    <div class="range-header">
                        <span class="input-label">Jumlah Kemenangan (Wins):</span>
                        <strong id="win-count-text">3 Wins</strong>
                    </div>
                    <input type="range" id="val-win-qty" class="range-slider" min="1" max="10" value="3" oninput="updateWinCount(this.value)">
                </div>
            `;
        }
    } else if (currentGame === "genshin") {
        if (currentServiceType === "exploration") {
            let options = gameData.regions.map(r => `<option value="${r.price}" data-name="${r.name}" data-time="${r.time}">${r.name} (Rp ${r.price.toLocaleString('id-ID')})</option>`).join("");
            container.innerHTML = `
                <div class="form-select-box">
                    <span class="select-title">PILIH REGION MAP 100%</span>
                    <select id="genshin-region-select" class="custom-select" onchange="calculatePrice()">
                        ${options}
                    </select>
                </div>
            `;
        } else if (currentServiceType === "abyss") {
            container.innerHTML = `
                <div class="form-select-box">
                    <span class="select-title">PAKET SPIRAL ABYSS</span>
                    <select id="genshin-abyss-select" class="custom-select" onchange="calculatePrice()">
                        <option value="65000" data-name="Floor 9-12 (36 Stars Full Clear)" data-time="1-3 Jam">Floor 9-12 (36 Stars Full Clear) - Rp 65.000</option>
                        <option value="40000" data-name="Floor 11-12 Only (24 Stars)" data-time="1 Jam">Floor 11-12 Only (24 Stars) - Rp 40.000</option>
                        <option value="25000" data-name="Floor 12 Only (9 Stars)" data-time="30 Mins">Floor 12 Only (9 Stars) - Rp 25.000</option>
                    </select>
                </div>
            `;
        } else if (currentServiceType === "quest") {
            container.innerHTML = `
                <div class="range-box">
                    <div class="range-header">
                        <span class="input-label">Jumlah Chapter Archon Quest:</span>
                        <strong id="quest-count-text">1 Chapter</strong>
                    </div>
                    <input type="range" id="genshin-quest-qty" class="range-slider" min="1" max="5" value="1" oninput="updateQuestCount(this.value)">
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="form-select-box">
                    <span class="select-title">DURASI MAINTENANCE HARIAN</span>
                    <select id="genshin-daily-select" class="custom-select" onchange="calculatePrice()">
                        <option value="50000" data-name="Maintenance 1 Minggu (Daily+Resin)" data-time="7 Hari">1 Minggu (7 Hari) - Rp 50.000</option>
                        <option value="180000" data-name="Maintenance 1 Bulan (Daily+Resin+BP)" data-time="30 Hari">1 Bulan (30 Hari) - Rp 180.000</option>
                    </select>
                </div>
            `;
        }
    } else if (currentGame === "hsr") {
        let options = gameData.hsrTiers.map(t => `<option value="${t.price}" data-name="${t.name}" data-time="${t.time}">${t.name} (Rp ${t.price.toLocaleString('id-ID')})</option>`).join("");
        container.innerHTML = `
            <div class="form-select-box">
                <span class="select-title">PILIH LAYANAN HONKAI STAR RAIL</span>
                <select id="hsr-select" class="custom-select" onchange="calculatePrice()">
                    ${options}
                </select>
            </div>
        `;
    } else if (currentGame === "wuwa") {
        let options = gameData.wuwaRegions.map(w => `<option value="${w.price}" data-name="${w.name}" data-time="${w.time}">${w.name} (Rp ${w.price.toLocaleString('id-ID')})</option>`).join("");
        container.innerHTML = `
            <div class="form-select-box">
                <span class="select-title">PILIH LAYANAN WUTHERING WAVES</span>
                <select id="wuwa-select" class="custom-select" onchange="calculatePrice()">
                    ${options}
                    <option value="75000" data-name="Tower of Adversity 30 Stars Clear" data-time="1-3 Jam">Tower of Adversity 30 Stars Clear - Rp 75.000</option>
                    <option value="85000" data-name="Echo 5 Stars Farm (100 Runs)" data-time="1 Hari">Echo 5 Stars Farm (100 Runs) - Rp 85.000</option>
                </select>
            </div>
        `;
    } else if (currentGame === "nte") {
        let options = gameData.ntePacks.map(n => `<option value="${n.price}" data-name="${n.name}" data-time="${n.time}">${n.name} (Rp ${n.price.toLocaleString('id-ID')})</option>`).join("");
        container.innerHTML = `
            <div class="form-select-box">
                <span class="select-title">PILIH LAYANAN NEVERNESS TO EVERNESS</span>
                <select id="nte-select" class="custom-select" onchange="calculatePrice()">
                    ${options}
                </select>
            </div>
        `;
    }

    lucide.createIcons();
}

function updatePlacementCount(val) {
    document.getElementById("placement-count-text").innerText = `${val} Matches`;
    calculatePrice();
}

function updateWinCount(val) {
    document.getElementById("win-count-text").innerText = `${val} Wins`;
    calculatePrice();
}

function updateQuestCount(val) {
    document.getElementById("quest-count-text").innerText = `${val} Chapter`;
    calculatePrice();
}

/* ==========================================
   PRICE CALCULATOR ENGINE
   ========================================== */
function calculatePrice() {
    let basePrice = 0;
    let serviceNameText = "";
    let targetDetailsText = "";
    let durationText = "1 Hari";
    const gameData = GAMES_DATA[currentGame];

    if (currentGame === "valorant") {
        if (currentServiceType === "rank") {
            const startVal = parseInt(document.getElementById("val-rank-start")?.value || 1);
            const targetVal = parseInt(document.getElementById("val-rank-target")?.value || 10);

            if (targetVal <= startVal) {
                targetDetailsText = "Rank tujuan harus lebih tinggi dari rank saat ini!";
                basePrice = 0;
                durationText = "-";
            } else {
                let cost = 0;
                for (let i = startVal; i < targetVal; i++) {
                    const rankObj = gameData.ranks.find(r => r.id === i);
                    if (rankObj) cost += rankObj.price;
                }
                basePrice = cost;
                const startObj = gameData.ranks.find(r => r.id === startVal);
                const targetObj = gameData.ranks.find(r => r.id === targetVal);
                targetDetailsText = `${startObj.name} ➔ ${targetObj.name}`;
                
                const rankDiff = targetVal - startVal;
                durationText = rankDiff <= 3 ? "12 - 24 Jam" : rankDiff <= 6 ? "1 - 2 Hari" : "2 - 4 Hari";
            }
            serviceNameText = "Rank Boosting";
        } else if (currentServiceType === "placement") {
            const qty = parseInt(document.getElementById("val-placement-qty")?.value || 5);
            basePrice = qty * 17000;
            serviceNameText = "Placement Matches";
            targetDetailsText = `${qty} Game Placement Match`;
            durationText = "3 - 6 Jam";
        } else if (currentServiceType === "winrate") {
            const qty = parseInt(document.getElementById("val-win-qty")?.value || 3);
            basePrice = qty * 30000;
            serviceNameText = "Win Rate Boost";
            targetDetailsText = `${qty} Kemenangan (Wins)`;
            durationText = "3 - 8 Jam";
        }
    } else if (currentGame === "genshin") {
        if (currentServiceType === "exploration") {
            const select = document.getElementById("genshin-region-select");
            const opt = select?.options[select.selectedIndex];
            basePrice = parseInt(opt?.value || 60000);
            serviceNameText = "Exploration 100%";
            targetDetailsText = opt?.dataset.name || "Region Map 100%";
            durationText = opt?.dataset.time || "1-2 Hari";
        } else if (currentServiceType === "abyss") {
            const select = document.getElementById("genshin-abyss-select");
            const opt = select?.options[select.selectedIndex];
            basePrice = parseInt(opt?.value || 65000);
            serviceNameText = "Spiral Abyss";
            targetDetailsText = opt?.dataset.name || "Spiral Abyss Clear";
            durationText = opt?.dataset.time || "1-3 Jam";
        } else if (currentServiceType === "quest") {
            const qty = parseInt(document.getElementById("genshin-quest-qty")?.value || 1);
            basePrice = qty * 35000;
            serviceNameText = "Archon Quest";
            targetDetailsText = `${qty} Chapter Archon / Story Quest`;
            durationText = `${qty * 4} - ${qty * 8} Jam`;
        } else {
            const select = document.getElementById("genshin-daily-select");
            const opt = select?.options[select.selectedIndex];
            basePrice = parseInt(opt?.value || 50000);
            serviceNameText = "Maintenance Harian";
            targetDetailsText = opt?.dataset.name || "Daily Commission + Resin";
            durationText = opt?.dataset.time || "7 Hari";
        }
    } else {
        // HSR / WuWa / NTE selects
        const selectId = `${currentGame}-select`;
        const select = document.getElementById(selectId);
        const opt = select?.options[select.selectedIndex];
        basePrice = parseInt(opt?.value || 50000);
        serviceNameText = gameData.name + " Special";
        targetDetailsText = opt?.dataset.name || "Package Service";
        durationText = opt?.dataset.time || "1 Hari";
    }

    // Add-on Calculations
    let addonPercentage = 0;
    let activeAddonsList = [];

    if (document.getElementById("addon-express")?.checked) {
        addonPercentage += 0.25;
        activeAddonsList.push("⚡ Proses Express (+25%)");
    }
    if (document.getElementById("addon-stream")?.checked) {
        addonPercentage += 0.15;
        activeAddonsList.push("📹 Live Stream Discord (+15%)");
    }
    if (document.getElementById("addon-agent")?.checked) {
        addonPercentage += 0.10;
        activeAddonsList.push("👤 Request Agent/Hero (+10%)");
    }

    calculatedTotal = Math.round(basePrice * (1 + addonPercentage));

    // Update UI Summary Elements
    document.getElementById("sum-service").innerText = serviceNameText;
    document.getElementById("sum-target").innerText = targetDetailsText;
    document.getElementById("sum-duration").innerHTML = `<i data-lucide="clock"></i> ${durationText}`;
    document.getElementById("sum-price").innerText = calculatedTotal.toLocaleString('id-ID');

    const addonsContainer = document.getElementById("sum-addons-list");
    if (activeAddonsList.length > 0) {
        addonsContainer.innerHTML = activeAddonsList.map(a => `<div>${a}</div>`).join("");
    } else {
        addonsContainer.innerHTML = `<span class="no-addons">Tidak ada add-on dipilih</span>`;
    }

    lucide.createIcons();
}

/* ==========================================
   RENDER PRESET PACKAGES GRID
   ========================================== */
function renderPackages(packages) {
    const grid = document.getElementById("packages-grid-container");
    grid.innerHTML = "";

    packages.forEach(pkg => {
        const card = document.createElement("div");
        card.className = "package-card glass-card";
        
        const featuresHtml = pkg.features.map(f => `<li><i data-lucide="check-circle"></i> ${f}</li>`).join("");

        card.innerHTML = `
            <span class="package-tag">${pkg.tag}</span>
            <div>
                <h3 class="pkg-title">${pkg.title}</h3>
                <p class="pkg-sub">${pkg.sub}</p>
                <div class="pkg-price-box">
                    <span class="pkg-price">Rp ${pkg.price.toLocaleString('id-ID')}</span>
                    <span class="pkg-price-unit">${pkg.unit}</span>
                </div>
                <ul class="pkg-features">
                    ${featuresHtml}
                </ul>
            </div>
            <button class="btn btn-outline btn-block" onclick="orderPresetPackage('${pkg.title}', ${pkg.price})">
                <i data-lucide="shopping-bag"></i> Ambil Paket Ini
            </button>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

function orderPresetPackage(pkgTitle, price) {
    calculatedTotal = price;
    document.getElementById("modal-order-summary-text").innerText = `${GAMES_DATA[currentGame].name} - ${pkgTitle}`;
    document.getElementById("modal-order-price-text").innerText = `Rp ${price.toLocaleString('id-ID')}`;
    
    document.getElementById("checkout-modal").classList.add("active");
}

/* ==========================================
   MODAL CHECKOUT & WHATSAPP GENERATOR
   ========================================== */
function openCheckoutModal() {
    if (calculatedTotal <= 0) {
        alert("Pilih detail pesanan dengan benar sebelum melanjutkan checkout!");
        return;
    }

    const gameName = GAMES_DATA[currentGame].name;
    const serviceText = document.getElementById("sum-service").innerText;
    const targetText = document.getElementById("sum-target").innerText;

    document.getElementById("modal-order-summary-text").innerText = `${gameName} [${serviceText}: ${targetText}]`;
    document.getElementById("modal-order-price-text").innerText = `Rp ${calculatedTotal.toLocaleString('id-ID')}`;

    document.getElementById("checkout-modal").classList.add("active");
}

function closeCheckoutModal() {
    document.getElementById("checkout-modal").classList.remove("active");
}

function submitOrder(e) {
    e.preventDefault();

    const name = document.getElementById("user-name").value;
    const gameId = document.getElementById("user-game-id").value;
    const server = document.getElementById("user-server").value;
    const payment = document.getElementById("user-payment").value;
    const notes = document.getElementById("user-notes").value || "Tidak ada";

    const gameName = GAMES_DATA[currentGame].name;
    const summaryText = document.getElementById("modal-order-summary-text").innerText;
    const priceText = document.getElementById("modal-order-price-text").innerText;

    // Construct WhatsApp Formatted Message
    const adminWA = "6281234567890"; // Replace with Admin WA Number
    const message = `*FORMAT ORDER BARU - NEXUSJOKI* 🎮
-----------------------------------
👤 *Nama Pemesan:* ${name}
🎮 *Game:* ${gameName}
🔑 *ID / Nick / UID:* ${gameId}
🌍 *Server:* ${server}

📋 *Rincian Order:* ${summaryText}
💰 *Total Tagihan:* ${priceText}
💳 *Metode Pembayaran:* ${payment}
📝 *Catatan Khusus:* ${notes}
-----------------------------------
*Mohon diproses min, terima kasih!*`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${adminWA}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(waUrl, "_blank");
    closeCheckoutModal();
}

/* ==========================================
   FAQ ACCORDION & NAVIGATION HELPERS
   ========================================== */
function toggleFaq(buttonElement) {
    const faqItem = buttonElement.parentElement;
    const isActive = faqItem.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("active"));

    if (!isActive) {
        faqItem.classList.add("active");
    }
}

function scrollToCalculator() {
    document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
}

/* ==========================================
   RECENT ORDER NOTIFICATION TOAST SIMULATION
   ========================================== */
const RECENT_ORDERS_MOCK = [
    { name: "Rian (Jakarta)", detail: "Valorant: Ascendant 3 ➔ Radiant" },
    { name: "Aditya (Bandung)", detail: "Genshin: Exploration Natlan 100%" },
    { name: "Kevin (Surabaya)", detail: "HSR: MOC 36★ + Divergent Clear" },
    { name: "Fikri (Medan)", detail: "WuWa: Tower of Adversity 30★" },
    { name: "Bagas (Yogyakarta)", detail: "Valorant: Gold 1 ➔ Diamond 1" },
    { name: "Rizky (Semarang)", detail: "NTE: Day-1 Launch Pass Reserved" }
];

let toastIndex = 0;
function showNextToast() {
    const toastContainer = document.getElementById("toast-container");
    const data = RECENT_ORDERS_MOCK[toastIndex];

    document.getElementById("toast-user").innerText = `${data.name} Baru Memesan!`;
    document.getElementById("toast-detail").innerText = data.detail;

    toastContainer.style.display = "block";

    setTimeout(() => {
        toastContainer.style.display = "none";
    }, 5000);

    toastIndex = (toastIndex + 1) % RECENT_ORDERS_MOCK.length;
}

// Start toast loop every 12 seconds
setInterval(showNextToast, 12000);
setTimeout(showNextToast, 3000);

/* Initial Startup */
document.addEventListener("DOMContentLoaded", () => {
    selectGame("valorant");
});
