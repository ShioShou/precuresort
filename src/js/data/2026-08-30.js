// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2026-09-01";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: true,
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
      { name: "Meitantei Pretty Cure!", key: "SD" },
      { name: "Dancing☆Star Pretty Cure The Stage", key: "DanPri", checked: false },
      { name: "Pretty Cure All Stars", key: "AllStars" }
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
		{ name: "Yellow", tooltip: "Like Shiny Luminous", key: "yellow" }, 
		{ name: "Green", key: "green" }, 
		{ name: "Orange", key: "orange" },
		{ name: "Purple", key: "purple" },
		{ name: "Red", key: "red" },
		{ name: "Rainbow", key: "rainbow" },
		{ name: "Gold", tooltip: "Yes, this option only removes Finale.", key: "gold" },
    ]
  },
  {name: "Leads only",
	key: "notlead",
	tooltip: "Makes the sorter only sort lead Cures, helpful if you want to sort seasons",
	checked: false
  },
  {name: "Remove spoiler Cures",
	key: "spoiler",
	tooltip: "Removes Cures whose existence would constitute spoilers for their season",
	checked: false
  },  
  {name: "Remove allies and non-main Cures",
	key: "notmain",
	tooltip: "Removes important allies like Black Pepper and non-main Cures like Cure Flower.",
	checked: true
  },
  {name: "Remove alternate Cure Identities",
	key: "altidentity",
	tooltip: "Removes duplicate entries for characters with more than one Cure form.",
	checked: true
  },
  {name: "Remove boys",
	key: "boy",
	tooltip: "Boys have cooties",
	checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  // Futari wa / Max Heart
  {
    name: "Cure Black",
    img: "01_black.png",
    opts: {
      series: [ "FW", "MH"],
      color: ["black"],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure White",
    img: "01_white.png",
    opts: {
      series: [ "FW", "MH"],
      color: [ "white" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Shiny Luminous",
    img: "02_shinyluminous.png",
    opts: {
      series: [ "MH" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Splash Star
  {
    name: "Cure Bloom",
    img: "03_bloom.png",
    opts: {
      series: [ "SS" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Egret",
    img: "03_egret.png",
    opts: {
      series: [ "SS" ],
      color: [ "white" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Bright",
    img: "03_bright.png",
    opts: {
      series: [ "SS" ],
      color: [ "yellow" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: true,
    boy: false
    }
  },
  {
    name: "Cure Windy",
    img: "03_windy.png",
    opts: {
      series: [ "SS" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: true,
    boy: false
    }
  },
  {
    name: "Kaoru",
    img: "03_kaoru.png",
    opts: {
      series: [ "SS" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Michiru",
    img: "03_michiru.png",
    opts: {
      series: [ "SS" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: false
    }
  },
  // Yes 5 / Go Go
  {
    name: "Cure Dream",
    img: "04_dream.png",
    opts: {
      series: [ "Y5", "Y5GG" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Rouge",
    img: "04_rouge.png",
    opts: {
      series: [ "Y5", "Y5GG" ],
      color: [ "Red" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Lemonade",
    img: "04_lemonade.png",
    opts: {
      series: [ "Y5", "Y5GG" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Mint",
    img: "04_mint.png",
    opts: {
      series: [ "Y5", "Y5GG" ],
      color: [ "green" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Aqua",
    img: "04_aqua.png",
    opts: {
      series: [ "Y5", "Y5GG" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Milky Rose",
    img: "05_milkyrose.png",
    opts: {
      series: [ "Y5GG" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Fresh
  {
    name: "Cure Peach",
    img: "06_peach.png",
    opts: {
      series: [ "Fresh" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Berry",
    img: "06_berry.png",
    opts: {
      series: [ "Fresh" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Pine",
    img: "06_pine.png",
    opts: {
      series: [ "Fresh" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Passion",
    img: "06_passion.png",
    opts: {
      series: [ "Fresh" ],
      color: [ "red" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Heartcatch
  {
    name: "Cure Blossom",
    img: "07_blossom.png",
    opts: {
      series: [ "HC" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Marine",
    img: "07_marine.png",
    opts: {
      series: [ "HC" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Sunshine",
    img: "07_sunshine.png",
    opts: {
      series: [ "HC" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Moonlight",
    img: "07_moonlight.png",
    opts: {
      series: [ "HC" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Dark Pretty Cure",
    img: "07_darkprettycure.png",
    opts: {
      series: [ "HC" ],
      color: [ "black" ],
	  notlead: true,
    spoiler: false,
    notmain: true,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Flower",
    img: "07_flower.png",
    opts: {
      series: [ "HC" ],
      color: [ "white" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: false
    }
  },
  // Suite
  {
    name: "Cure Melody",
    img: "08_melody.png",
    opts: {
      series: [ "Suite" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Rhythm",
    img: "08_rhythm.png",
    opts: {
      series: [ "Suite" ],
      color: [ "white" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Beat",
    img: "08_beat.png",
    opts: {
      series: [ "Suite" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Muse",
    img: "08_muse.png",
    opts: {
      series: [ "Suite" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Smile
  {
    name: "Cure Happy",
    img: "09_happy.png",
    opts: {
      series: [ "Smile" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Sunny",
    img: "09_sunny.png",
    opts: {
      series: [ "Smile" ],
      color: [ "orange" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Peace",
    img: "09_peace.png",
    opts: {
      series: [ "Smile" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure March",
    img: "09_march.png",
    opts: {
      series: [ "Smile" ],
      color: [ "green" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Beauty",
    img: "09_beauty.png",
    opts: {
      series: [ "Smile" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Doki Doki
  {
    name: "Cure Heart",
    img: "10_heart.png",
    opts: {
      series: [ "DD" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Diamond",
    img: "10_diamond.png",
    opts: {
      series: [ "DD" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Rosetta",
    img: "10_rosetta.png",
    opts: {
      series: [ "DD" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Sword",
    img: "10_sword.png",
    opts: {
      series: [ "DD" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Ace",
    img: "10_ace.png",
    opts: {
      series: [ "DD" ],
      color: [ "red" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Happiness Charge
  {
    name: "Cure Lovely",
    img: "11_lovely.png",
    opts: {
      series: [ "HapCha" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Princess",
    img: "11_princess.png",
    opts: {
      series: [ "HapCha" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Honey",
    img: "11_honey.png",
    opts: {
      series: [ "HapCha" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Fortune",
    img: "11_fortune.png",
    opts: {
      series: [ "HapCha" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Go Princess
  {
    name: "Cure Flora",
    img: "12_flora.png",
    opts: {
      series: [ "GoPri" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Mermaid",
    img: "12_mermaid.png",
    opts: {
      series: [ "GoPri" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Twinkle",
    img: "12_twinkle.png",
    opts: {
      series: [ "GoPri" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Scarlet",
    img: "12_scarlet.png",
    opts: {
      series: [ "GoPri" ],
      color: [ "red" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Mahoutsukai
  {
    name: "Cure Miracle",
    img: "13_miracle.png",
    opts: {
      series: [ "MT" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Magical",
    img: "13_magical.png",
    opts: {
      series: [ "MT" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Felice",
    img: "13_felice.png",
    opts: {
      series: [ "MT" ],
      color: [ "green" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Mofurun",
    img: "13_mofurun.png",
    opts: {
      series: [ "MT" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: false
    }
  },
  // A la mode
  {
    name: "Cure Whip",
    img: "14_whip.png",
    opts: {
      series: [ "KK" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Custard",
    img: "14_custard.png",
    opts: {
      series: [ "KK" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Gelato",
    img: "14_gelato.png",
    opts: {
      series: [ "KK" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Macaron",
    img: "14_macaron.png",
    opts: {
      series: [ "KK" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Chocolat",
    img: "14_chocolat.png",
    opts: {
      series: [ "KK" ],
      color: [ "red" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Parfait",
    img: "14_parfait.png",
    opts: {
      series: [ "KK" ],
      color: [ "rainbow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Hugtto
  {
    name: "Cure Yell",
    img: "15_yell.png",
    opts: {
      series: [ "Hugtto" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Ange",
    img: "15_ange.png",
    opts: {
      series: [ "Hugtto" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Étoile",
    img: "15_étoile.png",
    opts: {
      series: [ "Hugtto" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Macherie",
    img: "15_macherie.png",
    opts: {
      series: [ "Hugtto" ],
      color: [ "red" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Amour",
    img: "15_amour.png",
    opts: {
      series: [ "Hugtto" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Star Twinkle
  {
    name: "Cure Star",
    img: "16_star.png",
    opts: {
      series: [ "ST" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Milky",
    img: "16_milky.png",
    opts: {
      series: [ "ST" ],
      color: [ "green" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Soleil",
    img: "16_soleil.png",
    opts: {
      series: [ "ST" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Selene",
    img: "16_selene.png",
    opts: {
      series: [ "ST" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Cosmo",
    img: "16_cosmo.png",
    opts: {
      series: [ "ST" ],
      color: [ "rainbow" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Healin' Good
  {
    name: "Cure Grace",
    img: "17_grace.png",
    opts: {
      series: [ "HG" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Fontaine",
    img: "17_fontaine.png",
    opts: {
      series: [ "HG" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Sparkle",
    img: "17_sparkle.png",
    opts: {
      series: [ "HG" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Earth",
    img: "17_earth.png",
    opts: {
      series: [ "HG" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  // Tropical Rouge
  {
    name: "Cure Summer",
    img: "18_summer.png",
    opts: {
      series: [ "TR" ],
      color: [ "rainbow" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Coral",
    img: "18_coral.png",
    opts: {
      series: [ "TR" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Papaya",
    img: "18_papaya.png",
    opts: {
      series: [ "TR" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Flamingo",
    img: "18_flamingo.png",
    opts: {
      series: [ "TR" ],
      color: [ "red" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure La Mer",
    img: "18_lamer.png",
    opts: {
      series: [ "TR" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Oasis",
    img: "18_oasis.png",
    opts: {
      series: [ "TR" ],
      color: [ "green" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: false
    }
  },
  // Delicious Party
  {
    name: "Cure Precious",
    img: "19_precious.png",
    opts: {
      series: [ "DeliPa" ],
      color: [ "pink" ],
	  hnotlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Spicy",
    img: "19_spicy.png",
    opts: {
      series: [ "DeliPa" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Yum-Yum",
    img: "19_yumyum.png",
    opts: {
      series: [ "DeliPa" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Finale",
    img: "19_finale.png",
    opts: {
      series: [ "DeliPa" ],
      color: [ "gold" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Black Pepper",
    img: "19_blackpepper.png",
    opts: {
      series: [ "DeliPa" ],
      color: [ "white" ],
	  notlead: true,
    spoiler: false,
    notmain: true,
    altidentity: false,
    boy: true
    }
  },
  {
    name: "Rosemary",
    img: "19_rosemary.png",
    opts: {
      series: [ "DeliPa" ],
      color: [ "orange" ],
	  notlead: true,
    spoiler: false,
    notmain: true,
    altidentity: false,
    boy: true
    }
  },
  // Hirogaru
  {
    name: "Cure Sky",
    img: "20_sky.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "blue" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Prism",
    img: "20_prism.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "white" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Wing",
    img: "20_wing.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "orange" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: true
    }
  },
  {
    name: "Cure Butterfly",
    img: "20_butterfly.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "pink" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Majesty",
    img: "20_majesty.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Noble",
    img: "20_noble.png",
    opts: {
      series: [ "HiroSky" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: false
    }
  },
  // Wonderful
  {
    name: "Cure Wonderful",
    img: "21_wonderful.png",
    opts: {
      series: [ "Won" ],
      color: [ "pink" ],
    notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false  
    }
  },
  {
    name: "Cure Friendy",
    img: "21_friendy.png",
    opts: {
      series: [ "Won" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Nyammy",
    img: "21_nyammy.png",
    opts: {
      series: [ "Won" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Lillian",
    img: "21_lillian.png",
    opts: {
      series: [ "Won" ],
      color: [ "green" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Satoru",
    img: "21_satoru.png",
    opts: {
      series: [ "Won" ],
      color: [ "orange" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: true
    }
  },
  {
    name: "Daifuku",
    img: "21_daifuku.png",
    opts: {
      series: [ "Won" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: true
    }
  },
  {
    name: "Niko",
    img: "21_niko.png",
    opts: {
      series: [ "Won" ],
      color: [ "pink" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: false
    }
  },
  // Idol
  {
    name: "Cure Idol",
    img: "22_idol.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Wink",
    img: "22_idol.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Kyun-Kyun",
    img: "22_kyunkyun.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Zukyoon",
    img: "22_zukyoon.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "white" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Kiss",
    img: "22_kiss.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "black" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Connect",
    img: "22_connect.png",
    opts: {
      series: [ "Kimi" ],
      color: [ "turquoise" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: true
    }
  },
  // Meitantei
  {
    name: "Cure Answer",
    img: "23_answer.png",
    opts: {
      series: [ "SD" ],
      color: [ "purple" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Mystique",
    img: "23_mystique.png",
    opts: {
      series: [ "SD" ],
      color: [ "pink" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Eclair",
    img: "23_eclair.png",
    opts: {
      series: [ "SD"],
      color: [ "green" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Arcana Shadow",
    img: "23_arcanashadow.png",
    opts: {
      series: [ "SD" ],
      color: [ "black" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Arcana",
    img: "23_arcana.png",
    opts: {
      series: [ "SD" ],
      color: [ "white" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: true,
    boy: false
    }
  },
  {
    name: "Jett-senpai",
    img: "23_jettsenpai.png",
    opts: {
      series: [ "SD" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: true,
    notmain: true,
    altidentity: false,
    boy: true
    }
  },
  // Dancing Stars
  {
    name: "Cure Top",
    img: "90_top.png",
    opts: {
      series: [ "DanPri" ],
      color: [ "pink" ],
	  notlead: false,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: true
    }
  },
  {
    name: "Cure Lock",
    img: "90_lock.png",
    opts: {
      series: [ "DanPri" ],
      color: [ "blue" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: true
    }
  },
  {
    name: "Cure Soul",
    img: "90_soul.png",
    opts: {
      series: [ "DanPri" ],
      color: [ "yellow" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: true
    }
  },
  {
    name: "Cure Kagura",
    img: "90_kagura.png",
    opts: {
      series: [ "DanPri" ],
      color: [ "green" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: true
    }
  },
  {
    name: "Cure Break",
    img: "90_break.png",
    opts: {
      series: [ "DanPri" ],
      color: [ "purple" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: true
    }
  },
  // All Stars
  {
    name: "Cure Echo",
    img: "99_echo.png",
    opts: {
      series: [ "AllStars" ],
      color: [ "White" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Supreme",
    img: "99_supreme.png",
    opts: {
      series: [ "AllStars" ],
      color: [ "green" ],
	  notlead: true,
    spoiler: false,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
  {
    name: "Cure Puca",
    img: "99_puca.png",
    opts: {
      series: [ "AllStars" ],
      color: [ "pink" ],
	  notlead: true,
    spoiler: true,
    notmain: false,
    altidentity: false,
    boy: false
    }
  },
];
