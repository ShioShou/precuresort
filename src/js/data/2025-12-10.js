// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2025-12-10";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Futari wa Pretty Cure", key: "FW" },
      { name: "Futari wa Pretty Cure Max Heart", key: "MH" },
	  { name: "Futari wa Pretty Cure Splash☆Star", key: "SS" },
	  { name: "Yes! Pretty Cure 5", key: "Y5" },
	  { name: "Yes! Pretty Cure 5 GoGo!", key: "Y5GG" },
	  { name: "Fresh Pretty Cure!", key: "Fresh" },
	  { name: "Heartcatch Pretty Cure!", key: "HC" },
	  { name: "Suite Pretty Cure♪", key: "Suite" },
	  { name: "Smile Pretty Cure", key: "Smile" },
	  { name: "Doki Doki! Pretty Cure", key: "DD" },
	  { name: "Happiness Charge Pretty Cure", key: "HapCha" },
	  { name: "Go! Princess Pretty Cure", key: "GoPri" },
	  { name: "Mahou Tsukai Pretty Cure!", key: "MT" },
	  { name: "KiraKira☆Pretty Cure A La Mode", key: "KK" },
	  { name: "HUGtto! Pretty Cure", key: "Hugtto" },
	  { name: "Star☆Twinkle Pretty Cure", key: "ST" },
	  { name: "Healin' Good♥Pretty Cure", key: "HG" },
	  { name: "Tropical-Rouge! Pretty Cure", key: "TR" },
	  { name: "Delicious Party♡Pretty Cure", key: "DeliPa" },
	  { name: "Hirogaru Sky! Pretty Cure", key: "HiroSky" },
	  { name: "Wonderful Pretty Cure!", key: "Won" },
	  { name: "Kimi to Idol Pretty Cure♪", key: "Kimi" },
    ]
  },
  {name: "Filter by Color",
    key: "color",
    tooltip: "Check this to restrict to only certain Cure colors, as designated by Toei.",
    checked: false,
    sub: [ 
		{ name: "Pink", key: "pink" }, 
		{ name: "Black", key: "black" }, 
		{ name: "White", key: "white" }, 
		{ name: "Blue", key: "blue" }, 
		{ name: "Yellow", key: "yellow" }, 
		{ name: "Green", key: "green" }, 
		{ name: "Orange", key: "orange" },
		{ name: "Purple", key: "purple" },
		{ name: "Red", key: "red" },
		{ name: "Rainbow", key: "rainbow" },
		{ name: "Gold", tooltip: "Yes, this option only removes Amane.", key: "gold" },
    ]
  },
  {name: "Remove spoiler Cures",
	key: "spoiler",
	tooltip: "Removes Cures whose existence would constitute spoilers for their season"
  },
  {name: "Leads only",
	key: "notlead",
	tooltip: "Removes all characters except the lead cures of each season. Includes Black and Wonderful.",
	checked: false
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Cure Black",
    img: "nZaROlhi.png",
    opts: {
      series: [ "FW", "MH"],
      color: ["black"],
	  human: true
    }
  },
  {
    name: "Cure White",
    img: "XPvHoeyX.png",
    opts: {
      series: [ "FW", "MH"],
      color: [ "white" ],
	  human: true
	  notlead: true
    }
  },
  {
    name: "Shiny Luminous",
    img: "FLRYlLnd.png",
    opts: {
      series: [ "MH" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  
  {
    name: "Cure Bloom",
    img: "LFWPBTTo.png",
    opts: {
      series: [ "SS" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Egret",
    img: "vOikBPWN.png",
    opts: {
      series: [ "SS" ],
      color: [ "white" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Dream",
    img: "TycKzLwe.png",
    opts: {
      series: [ "Y5", "Y5GG" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Rouge",
    img: "epkgjRkI.png",
    opts: {
      series: [ "Y5", "Y5GG" ],
      color: [ "Red" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Lemonade",
    img: "ShCfkzau.png",
    opts: {
      series: [ "Y5", "Y5GG" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Mint",
    img: "AHFwuFeI.png",
    opts: {
      series: [ "Y5", "Y5GG" ],
      color: [ "green" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Aqua",
    img: "OXLUNHPy.png",
    opts: {
      series: [ "Y5", "Y5GG" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Milky Rose",
    img: "NowivGMl.png",
    opts: {
      series: [ "Y5GG" ],
      color: [ "purple" ],
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Peach",
    img: "lvCDyMdb.png",
    opts: {
      series: [ "Fresh" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Berry",
    img: "YefdCHCz.png",
    opts: {
      series: [ "Fresh" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Pine",
    img: "zpZanuri.png",
    opts: {
      series: [ "Fresh" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Passion",
    img: "SEvlWIek.png",
    opts: {
      series: [ "Fresh" ],
      color: [ "red" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Blossom",
    img: "EGsYHjzn.png",
    opts: {
      series: [ "HC" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Marine",
    img: "trKpLRQc.png",
    opts: {
      series: [ "HC" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Sunshine",
    img: "jdIdXnkJ.png",
    opts: {
      series: [ "HC" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Moonlight",
    img: "sPaPoQzv.png",
    opts: {
      series: [ "HC" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Melody",
    img: "ZQOdGUzg.png",
    opts: {
      series: [ "Suite" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Rhythm",
    img: "AJffXCqE.png",
    opts: {
      series: [ "Suite" ],
      color: [ "white" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Beat",
    img: "wGDjdlUA.png",
    opts: {
      series: [ "Suite" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Muse",
    img: "HGcIGlaZ.png",
    opts: {
      series: [ "Suite" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Happy",
    img: "GwUiKaLy.png",
    opts: {
      series: [ "Smile" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Sunny",
    img: "bSFxfSSF.png",
    opts: {
      series: [ "Smile" ],
      color: [ "orange" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Peace",
    img: "APoiJgAD.png",
    opts: {
      series: [ "Smile" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure March",
    img: "PrOVHcY.png",
    opts: {
      series: [ "Smile" ],
      color: [ "green" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Beauty",
    img: "FKzFfatI.png",
    opts: {
      series: [ "Smile" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Heart",
    img: "qzVpUweA.png",
    opts: {
      series: [ "DD" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Diamond",
    img: "iZDFRwxN.png",
    opts: {
      series: [ "DD" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Rosetta",
    img: "GDPCVfmz.png",
    opts: {
      series: [ "DD" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Sword",
    img: "GlaeWmBv.png",
    opts: {
      series: [ "DD" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Ace",
    img: "HjdCqrqr.png",
    opts: {
      series: [ "DD" ],
      color: [ "red" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Lovely",
    img: "BBmagUcJ.png",
    opts: {
      series: [ "HapCha" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Princess",
    img: "BrKVbXQf.png",
    opts: {
      series: [ "HapCha" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Honey",
    img: "zpSNESpG.png",
    opts: {
      series: [ "HapCha" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Fortune",
    img: "NfJQqhXD.png",
    opts: {
      series: [ "HapCha" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Flora",
    img: "hGGicyFd.png",
    opts: {
      series: [ "GoPri" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Mermaid",
    img: "eZCTQaVy.png",
    opts: {
      series: [ "GoPri" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Twinkle",
    img: "YWfHdgem.png",
    opts: {
      series: [ "GoPri" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Scarlet",
    img: "bFwXjlkS.png",
    opts: {
      series: [ "GoPri" ],
      color: [ "red" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Miracle",
    img: "MyyAVtxV.png",
    opts: {
      series: [ "MT" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Magical",
    img: "tZVSnWXO.png",
    opts: {
      series: [ "MT" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Felice",
    img: "mDHUvneW.png",
    opts: {
      series: [ "MT" ],
      color: [ "green" ],
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Whip",
    img: "dirvvbZs.png",
    opts: {
      series: [ "KK" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Custard",
    img: "kqhYscAD.png",
    opts: {
      series: [ "KK" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Gelato",
    img: "CoXIbQfb.png",
    opts: {
      series: [ "KK" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Macaron",
    img: "dUlvJuvl.png",
    opts: {
      series: [ "KK" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Chocolat",
    img: "AKkZEZNX.png",
    opts: {
      series: [ "KK" ],
      color: [ "red" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Parfait",
    img: "uKyBbuHI.png",
    opts: {
      series: [ "KK" ],
      color: [ "rainbow" ],
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Yell",
    img: "FAXEDGsm.png",
    opts: {
      series: [ "Hugtto" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Ange",
    img: "jZrkIURT.png",
    opts: {
      series: [ "Hugtto" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Etoile",
    img: "YEVVyrBs.png",
    opts: {
      series: [ "Hugtto" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Macherie",
    img: "MgUumkJE.png",
    opts: {
      series: [ "Hugtto" ],
      color: [ "red" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Amour",
    img: "cNlAiSDw.png",
    opts: {
      series: [ "Hugtto" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Star",
    img: "nYuZAGhi.png",
    opts: {
      series: [ "ST" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Milky",
    img: "nAzCqqHX.png",
    opts: {
      series: [ "ST" ],
      color: [ "green" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Soleil",
    img: "RuQZtwTl.png",
    opts: {
      series: [ "ST" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Selene",
    img: "GYoTNtst.png",
    opts: {
      series: [ "ST" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Cosmo",
    img: "JKADEqUW.png",
    opts: {
      series: [ "ST" ],
      color: [ "rainbow" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Grace",
    img: "VkdYaZNa.png",
    opts: {
      series: [ "HG" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Fontaine",
    img: "eshqHvIK.png",
    opts: {
      series: [ "HG" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Sparkle",
    img: "hRWPZFBG.png",
    opts: {
      series: [ "HG" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Earth",
    img: "dHCNPtWN.png",
    opts: {
      series: [ "HG" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Summer",
    img: "DleENTwz.png",
    opts: {
      series: [ "TR" ],
      color: [ "rainbow" ],
	  human: true
    }
  },
  {
    name: "Cure Coral",
    img: "tFpLPQVR.png",
    opts: {
      series: [ "TR" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Papaya",
    img: "RHDwidjO.png",
    opts: {
      series: [ "TR" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Flamingo",
    img: "shtGEWVf.png",
    opts: {
      series: [ "TR" ],
      color: [ "red" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure La Mer",
    img: "NmAjPLlu.png",
    opts: {
      series: [ "TR" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Precious",
    img: "NrffemRf.png",
    opts: {
      series: [ "DeliPa" ],
      color: [ "pink" ],
	  human: true
    }
  },
  {
    name: "Cure Spicy",
    img: "srXdNVRb.png",
    opts: {
      series: [ "DeliPa" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Yum-Yum",
    img: "cPReEqGP.png",
    opts: {
      series: [ "DeliPa" ],
      color: [ "yellow" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Finale",
    img: "NwjWcJCv.png",
    opts: {
      series: [ "DeliPa" ],
      color: [ "gold" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Sky",
    img: "efbTgFSc.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "blue" ],
	  human: true
    }
  },
  {
    name: "Cure Prism",
    img: "RXrEvqaA.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "white" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Wing",
    img: "SoiBskET.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "orange" ],
	  notlead: true
    }
  },
  {
    name: "Cure Butterfly",
    img: "hyvQFxrI.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "pink" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Majesty",
    img: "pQNtpeOS.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "" ],
	  human: true,
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Wonderful",
    img: "RkOdYBFj.png",
    opts: {
      series: [ "Won" ],
      color: [ "pink" ],
    }
  },
  {
    name: "Cure Friendy",
    img: "NyZVBABS.png",
    opts: {
      series: [ "Won" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Nyammy",
    img: "YKToXSaz.png",
    opts: {
      series: [ "Won" ],
      color: [ "blue" ],
	  notlead: true
    }
  },
  {
    name: "Cure Lillian",
    img: "fLNetKRC.png",
    opts: {
      series: [ "Won" ],
      color: [ "green" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Idol",
    img: "WCFQRSVr.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "pink" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Wink",
    img: "evLXFPtO.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "blue" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Kyun-Kyun",
    img: "UuFChlxM.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "purple" ],
	  human: true,
	  notlead: true
    }
  },
  {
    name: "Cure Zukyoon",
    img: "GHiAotot.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "white" ],
	  notlead: true,
	  spoiler: true
    }
  },
  {
    name: "Cure Kiss",
    img: "zQPRfhCE.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "black" ],
	  notlead: true,
	  spoiler: true
    }
  },
];
