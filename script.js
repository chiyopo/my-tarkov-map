// 現在表示しているマップ
let currentMap = "ショアライン";


// タスクのデータ
const tasksData = [
    {
        name: "Capturing Outposts",
        giver:"プラパー",
        maps: {
            "カスタム": [
                { left: 30, top: 30 }
            ],
            "ショアライン": [
                { left: 60, top: 40 }
            ],
            "ウッズ": [
                { left: 40, top: 60 }
            ]
        },
        description: "カスタムの新建、ウッズの医療キャンプ、ショアラインのリゾートでPMC12kill",
        selected: false
    },

    {
        name: "Anesthesia",
        giver:"プラパー",
        maps: {
            "ショアライン": [
                { left: 35, top: 35 },
                { left: 50, top: 50 },
                { left: 65, top: 65 }
            ]
        },
        description: "取引所3箇所にマーカー設置",
        selected: false
    },

    {
        name: "Job for a Patriot",
        giver:"プラパー",
        maps: {
            "ストタル": [
                { left: 30, top: 30 }
            ],
            "ショアライン": [
                { left: 50, top: 50 }
            ],
            "グラゼロ": [
                { left: 70, top: 70 }
            ]
        },
        description: "AK-12にValdayスコープとAK-12サプレッサーをつけてPMCを10killする",
        selected: false
    },

     {
        name: "［KORD BREACH］Cast the Net",
        giver:"プラパー",
        maps: {
            "ショアライン": [
                { left: 35, top: 35 },
                { left: 65, top: 65 }
            ],
            "ストタル": [
                { left: 50, top: 50 }
            ],
            "グラゼロ": [
                { left: 30, top: 70 },
                { left: 70, top: 30 }
            ]
        },
        description: "ショアライン2箇所、ストタル1箇所、グラゼロ2箇所にカメラ設置",
        selected: false
    },

    {
        name: "Colleagues",
        giver:"セラピスト",
        maps: {
            "ショアライン": [
                { left: 30, top: 30 },
                { left: 50, top: 50 },
                { left: 70, top: 70 }
            ]
        },
        description: "3箇所の死体を1度のレイドでみて生還する",
        selected: false
    },

    {
        name: "Health Care Privacy - Part 1",
        giver:"セラピスト",
        maps: {
            "ショアライン": [
                { left: 30, top: 30 },
                { left: 45, top: 45 },
                { left: 60, top: 60 },
                { left: 75, top: 75 }
            ]
        },
        description: "4箇所の救急車にマーカー",
        selected: false
    },

    {
        name: "Health Care Privacy - Part 2",
        giver:"セラピスト",
        maps: {
            "ショアライン": [
                { left: 45, top: 40 }
            ]
        },
        description: "西棟306号室(鍵)で情報を手に入れる",
        selected: false
    },

    {
        name: "NO swiping",
        giver:"スキアー",
        maps: {
            "ショアライン": [
                { left: 55, top: 45 }
            ],
            "インターチェンジ": [
                { left: 50, top: 50 }
            ]
        },
        description: "密輸業者の基地で10キルする",
        selected: false
    },

    {
        name: "master key",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                { left: 60, top: 40 }
            ]
        },
        description: "Health Res(鍵)を手に入れる",
        selected: false
    },

 {
    name: "The cult",
    giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                { left: 40, top: 55 }
            ]
        },
        description: "情報提供者を探す。生還する。",
        selected: false
    },

    {
        name: "Fishing Gear",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                { left: 70, top: 80 }
            ]
        },
        description: "マルチツールとUNTERボディーアーマーをボートに隠す",
        selected: false
    },

    {
        name: "I Need More Power",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                { left: 40, top: 35 },
                { left: 55, top: 35 },
                { left: 65, top: 55 }
            ]
        },
        description: "西棟219号室(鍵)と東棟220号室の発電機を見る。西棟219は220号室の鍵でもok。fuel tankを3つ納品する",
        selected: false
    },

    {
        name: "Eagle Eye",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                { left: 30, top: 45 },
                { left: 70, top: 55 }
            ]
        },
        description: "飛行機の墜落現場2箇所でSASディスクを手に入れる",
        selected: false
    },

    {
        name: "Weapons Circulation",
        giver:"ピースキーパー",
        maps: {
            "ウッズ": [
                { left: 35, top: 40 },
                { left: 65, top: 60 }
            ],
            "ショアライン": [
                { left: 55, top: 50 }
            ]
        },
        description: "ウッズ2箇所、ショアライン1箇所で儀式の場所にマーカー設置する",
        selected: false
    },

    {
        name: "Humanitarian Supplies",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                { left: 30, top: 65 }
            ]
        },
        description: "UNトラックにマーカー設置する。MREレーションパックを5個納品する",
        selected: false
    },

    {
        name: "Scrap Metal",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                { left: 30, top: 30 },
                { left: 50, top: 50 },
                { left: 70, top: 70 }
            ]
        },
        description: "戦車3箇所にマーカー設置する",
        selected: false
    },
    
    {
    name: "Tracker",
    giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                { left: 45, top: 35 },
                { left: 55, top: 65 }
            ]
        },
        description: "東棟108号室で情報を手に入れる。西棟地下の隠された貨物を見つける",
        selected: false
    },

    {
        name: "Chemistry Closet",
        giver:"メカニック",
        maps: {
            "ショアライン": [
                { left: 60, top: 40 }
            ]
        },
        description: "東棟110号室(San tapeキー)(サニターオフィス)をみる。脱出する",
        selected: false
    },

    {
        name: "Ill-Wisher",
        giver:"メカニック",
        maps: {
            "ショアライン": [
                { left: 35, top: 45 },
                { left: 65, top: 55 }
            ]
        },
        description: "信号発信源2箇所にシグナルジャマーを設置する",
        selected: false
    },

    {
        name: "Nothing Fishy About This",
        giver:"ラグマン",
        maps: {
            "ショアライン": [
                { left: 50, top: 70 }
            ]
        },
        description: "ラグマンのSUV見つける。生還する",
        selected: false
    },

    {
        name: "Courtesy Visit",
        giver:"イエーガー",
        maps: {
            "ショアライン": [
                { left: 30, top: 40 },
                { left: 50, top: 60 },
                { left: 70, top: 40 }
            ]
        },
        description: "会長の家、漁師の家、司祭の家を見つける。生還する",
        selected: false
    },

    {
        name: "Thirsty-Hounds",
        giver:"イエーガー",
        maps: {
            "ショアライン": [
                { left: 55, top: 55 }
            ]
        },
        description: "22時〜7時の間にSCAVを12killする",
        selected: false
    }
];

// タスクマーカー
const taskMarkers = document.getElementById("task-markers");

console.log("taskMarkers:", taskMarkers);

function showTaskMarkers() {

    taskMarkers.innerHTML = "";

    // タスクを表示する順番の色
    const taskColors = [
        "#ff0000", // 1番目：赤
        "#0066ff", // 2番目：青
        "#00aa00", // 3番目：緑
        "#ffcc00", // 4番目：黄色
        "#ff6600", // 5番目：オレンジ
        "#cc00ff", // 6番目：紫
        "#00cccc", // 7番目：水色
        "#ff3399", // 8番目：ピンク
        "#996633", // 9番目：茶色
        "rgb(85, 176, 250)"  // 10番目：グレー
    ];

    let colorIndex = 0;

    tasksData.forEach(function(task) {

        // 選択中 かつ 現在のマップに対応しているタスクだけ
        if (task.selected === true && task.maps[currentMap]) {

            const taskColor = taskColors[colorIndex % taskColors.length];

            // 現在のマップのマーカーだけ取得
            const markers = task.maps[currentMap];

            markers.forEach(function(markerData) {

                const marker = document.createElement("div");

                marker.className = "task-marker";
                marker.style.setProperty("--task-color", taskColor);
                marker.style.left = markerData.left + "%";
                marker.style.top = markerData.top + "%";

                taskMarkers.appendChild(marker);
            });

            colorIndex++;
        }
    });
}



// 脱出地点のデータ
const pmcExitsData = [
    {
        name: "Road to North V-Ex",
        left: 65,
        top: 7,
        labelX: 65,
        labelY: 7,
        condition:"お金"
    },
    {
        name: "Road to Customs",
        left: 82.9,
        top: 42,
        labelX: 80,
        labelY: 40,
        condition:""
    },
    {
        name: "Railway Bridge",
        left: 92.5,
        top: 68,
        labelX: 92.5,
        labelY: 68,
        condition:""
    },
    {
        name: "Tunnel",
        left: 13,
        top: 70,
        labelX:8,
        labelY: 70,
        condition:""
    },
    {
        name: "Path to Lighthouse",
        left: 9,
        top: 23,
        labelX: -1,
        labelY: 23,
        condition:""
    },
    {
        name: "Smuggler's Path (Co-op)",
        left: 75,
        top: 19,
        labelX: 75,
        labelY: 19,
        condition:"PMCとSCAV各1人"
    },
    {
        name: "Pier Boat",
        left: 53.2,
        top: 90,
        labelX: 52,
        labelY: 92,
        condition:"フレアが焚かれてる時"
    },
    {
        name: "Climber's Trail",
        left: 45.2,
        top: 10,
        labelX: 40,
        labelY: 7.8,
        condition:"RR&パラコード&ボディーアーマー脱ぐ"
    }
];


const scavExitsData = [
    {
        name: "Road to Customs",
        left: 82.9,
        top: 42,
        labelX: 80,
        labelY: 40,
        condition:""
    },
    {
        name: "Lighthouse",
          left: 60,
        top: 90,
        labelX: 60,
        labelY: 90,
        condition:""
    },
    {
        name: "Ruined Road",
         left: 13,
        top: 70,
        labelX: 5.5,
        labelY: 70,
        condition:""
    },
    {
        name: "East Wing Gym Entrance",
        left: 51,
        top: 32,
        labelX: 48.5,
        labelY: 30.2,
        condition:""
    },
    {
        name: "Admin Basement",
        left: 48.2,
        top: 27,
        labelX: 43,
        labelY: 25,
        condition:""
    },
    {
        name: "Smuggler's Path (Co-op)",
        left: 75,
        top: 19,
        labelX: 75,
        labelY: 19,
        condition:"PMCとSCAV各1人"
    },
     {
        name: "Old Bunker",
        left: 56,
        top: 8,
        labelX: 53,
        labelY: 6,
        condition:""
    }
];

// カスタム

const customsPmcExitsData = [

    { name: "Crossroads", left: -228, top: 445, labelX: -262, labelY: 445, condition: "" },

    { name: "Trailer Park", left: -218, top: 590, labelX: -218, labelY: 590, condition: "" },

    { name: "Smuggler's Boat", left: -65, top: 210, labelX: -65, labelY: 210, condition: "焚火ついてる時" },
    { name: "RUAF Roadblock", left: -53, top: 495, labelX: -53, labelY: 495, condition: "" },
    { name: "Old Gas Station", left: 133, top: 540, labelX: 110, labelY: 560, condition: "フレアがたかれている時" },
    { name: "ZB-1011", left: 312, top: 490, labelX: 312, labelY: 490, condition: "" },
    { name: "ZB-1012", left: 220, top: 475, labelX: 200, labelY: 500, condition: "サーチライト点灯時" },
    { name: "ZB-1013", left: 75, top: 500, labelX: 50, labelY: 520, condition: "Factory emergency exsit key&電源オン" },
    { name: "", left: 153, top: 385, labelX: 133, labelY: 390, condition: "電源オン" },
    { name: "Dorms V-Ex", left: 58, top: 105, labelX: 52, labelY: 100, condition: "お金" }
];

const customsScavExitsData = [

    { name: "Crossroads", left: -228, top: 445, labelX: -262, labelY: 445, condition: "" },

    { name: "Trailer Park Workers' Shack", left: -182, top: 595, labelX: -230, labelY: 610, condition: "" },

    { name: "Railroad to Tarkov", left: -135, top: 580, labelX: -135, labelY: 580, condition: "" },
    { name: "Railroad to Port", left: -123.8, top: 300, labelX: -150, labelY: 285, condition: "" },
    { name: "Sniper Roadblock", left: -35, top: 205, labelX: -55, labelY: 190, condition: "" },
    { name: "Old Road Gate", left: 58, top: 105, labelX: 52, labelY: 90, condition: "" },
    { name: "Sniper Roadblock", left: -53, top: 495, labelX: -70, labelY: 510, condition: "" },
    { name: "Warehouse 17", left: -10, top: 425, labelX: -10, labelY: 425, condition: "" },
    { name: "Factory Shacks", left: 75, top: 335, labelX: 75, labelY: 335, condition: "" },
    { name: "Old Gas Station Gate", left: 120, top: 560, labelX: 120, labelY: 560, condition: "" },
    { name: "Warehouse 4", left: 150, top: 370, labelX: 150, labelY: 370, condition: "" },
    { name: "Administration Gate", left: 330, top: 400, labelX: 330, labelY: 400, condition: "" },
    { name: "Scav Checkpoint", left: 320, top: 373, labelX: 320, labelY: 373, condition: "" },
    { name: "Factory Far Corner", left: 330, top: 520, labelX: 320, labelY: 520, condition: "" },
    { name: "Railroad to Military Base", left: 230, top: 100, labelX: 230, labelY: 90, condition: "" },
    { name: "Passage Between Rocks", left: 270, top: 135, labelX: 270, labelY: 135, condition: "" },
    { name: "Military Base CP", left: 318, top: 205, labelX: 318, labelY: 205, condition: "" }

];

// ウッズ
const woodsPmcExitsData = [

    { name: "Outskirts", left: -39, top: 305, labelX: -55, labelY: 313, condition: "" },

    { name: "ZB014", left:-60, top: 240, labelX: -108, labelY: 243, condition: "フレアがたかれてる時＆ZB-014鍵" },

    { name: "Power Line Passage", left: -65, top: 213, labelX: -110, labelY: 210, condition: "緑フレアが必要" },
    { name: "Friendship Bridge(Co-Op)", left: 11.5, top: 42.5, labelX: 11.5, labelY: 42.5, condition: "PMCとSCAV各1人" },
    { name: "RUAF Gate", left: 66, top: 317, labelX: 50, labelY: 328, condition: "フレアがたかれてる時" },
    { name: "UN Roadblock", left: 147, top: 290, labelX: 147, labelY: 290, condition: "" },
    { name: "ZB-016", left: 120, top: 228, labelX: 117, labelY: 230, condition: "フレアがたかれてる時" },
    { name: "Northern UN Roadblock", left: 155, top: 210, labelX: 155, labelY: 210, condition: "" },
    { name: "Bridge V-Ex", left: 138, top: 115, labelX: 138, labelY: 115, condition: "お金" },
    
    ];

const woodsScavExitsData = [
    { name: "Outskirts", left: -39, top: 305, labelX: -55, labelY: 313, condition: "" },
    { name: "Factory Gate", left: 11.5, top: 42.5, labelX: 12, labelY: 41, condition: "PMCとSCAV各1人" },
    { name: "Scav Bridge", left: 11.5, top: 42.5, labelX: -25, labelY: 41, condition: "" },
    { name: "Scav Bunker", left: -10, top: 70, labelX: -10, labelY: 70, condition: "" },

    { name: "Scav House", left: -52, top: 280, labelX: -88, labelY: 280, condition: "" },

    { name: "Dead Man's Place", left: -6, top: 285, labelX: -10, labelY: 290, condition: "" },
    { name: "Boat", left: -3, top: 275, labelX: -3, labelY: 275, condition: "" },
    { name: "Mountain Stash", left: 80, top: 185, labelX: 80, labelY: 185, condition: "" },
    { name: "RUAF Roadblock", left: 66, top: 317, labelX: 50, labelY: 328, condition: "" },
    { name: "UN Roadblock", left: 147, top: 290, labelX: 147, labelY: 290, condition: "" },
    { name: "Old Railway Depot", left: 147, top: 260, labelX: 147, labelY: 260, condition: "" },
    { name: "Eastern Rocks", left: 145, top: 220, labelX: 145, labelY: 220, condition: "" },

    ];

// インチェ
const interchangePmcExitsData = [

    { name: "Railway Exfil", left: -75, top: 340, labelX: -75, labelY: 340, condition: "" },

    { name: "Scav Camp(Co-Op)", left: 28, top: 275, labelX: 28, labelY: 275, condition: "PMCとSCAV各1人" },

    { name: "Power Station V-Ex", left: -57.4, top: 75, labelX: -57.4, labelY: 75, condition: "お金" },
    { name: "Hole in the Fence", left: 38, top: 100, labelX: 38, labelY: 100, condition: "バッグを装備しない" },
    { name: "Emercom Checkpoint", left: 130, top: 70, labelX: 130, labelY:70, condition: "" },
    { name: "Saferoom Exfil", left: 50, top: 150, labelX: 50, labelY:150, condition: "地下図面いれる、電源＆Object 11SRキーカード" },
    { name: "", left: -54, top: 109, labelX: -54, labelY:109, condition: "電源オン"},

    ];

const interchangeScavExitsData = [

    { name: "Railway Exfil", left: -75, top: 340, labelX: -75, labelY: 340, condition: "" },

    { name: "Emercom Checkpoint", left: 130, top: 70, labelX: 130, labelY:70, condition: "" },

    { name: "Scav Camp(Co-Op)", left: 28, top: 275, labelX: 28, labelY: 275, condition: "PMCとSCAV各1人" },

    ];

// リザーブ
const reservePmcExitsData = [

    { name: "Cliff Descent", left: 7, top: 65, labelX: 7, labelY: 65, condition: "RR&アーマー脱ぐ" },

    { name: "Sewer Manhole", left: 65, top: 150, labelX: 65, labelY: 150, condition: "バッグを装備しない" },

    { name: "Scav Lands(Co-Op)", left: -6, top: 335, labelX: -6, labelY: 335, condition: "PMCとSCAV各1人" },
    { name: "Armored Train", left: 185, top: 288, labelX: 185, labelY: 288, condition: "列車おる時" },
    { name: "Bunker Hermic Door", left: 120, top: 305, labelX: 120, labelY: 305, condition: "電源＆警報なってる間" },
    { name: "", left: -3, top: 166, labelX: -3, labelY: 166, condition: "電源オン" },
    { name: "D-2", left: -55, top: 113, labelX: -55, labelY: 113, condition: "地下電源" },
    { name: "", left: -35, top: 215, labelX: -35, labelY: 215, condition: "地下電源オン" },
    ];

const reserveScavExitsData = [

    { name: "Scav Lands(Co-Op)", left: -6, top: 335, labelX: -6, labelY: 335, condition: "PMCとSCAV各1人" },

    { name: "Checkpoint Fence", left: 70, top: 100, labelX: 70, labelY: 100, condition: "" },
    { name: "Sewer Manhole", left: 65, top: 150, labelX: 65, labelY: 150, condition: "バッグを装備しない" },


    { name: "Hole in the by the Mountains", left: -127, top: 217, labelX: -127, labelY: 217, condition: "" },
    { name: "Bunker Hermic Door", left: 120, top: 305, labelX: 120, labelY: 305, condition: "電源＆警報なってる間" },
    { name: "", left: -3, top: 166, labelX: -3, labelY: 166, condition: "電源オン" },
    { name: "Armored Train", left: 185, top: 288, labelX: 185, labelY: 288, condition: "列車おる時" },
    { name: "Heating Pipe", left: 69, top: 344.5, labelX: 69, labelY: 344.5, condition: "" },
    { name: "Dept Hermic Door", left: 140, top: 250, labelX: 140, labelY: 250, condition: "" },

    ];


// ストタル
const streetsPmcExitsData = [

    { name: "Cardinal Apartment Complex", left: 31, top: 21, labelX: 31, labelY: 21, condition: "" },

    { name: "Expo Checkpoint", left: 7.1, top: 29.5, labelX: 7.1, labelY: 29.5, condition: "" },

    { name: "Collapsed Crane", left: 7.1, top: 89, labelX: 7.1, labelY: 89, condition: "" },
    { name: "Crash Site", left: -12, top: 111, labelX: -12, labelY: 111, condition: "" },
    { name: "Primorsky Ave Taxi V-Ex", left: 53, top: 118, labelX: 53, labelY: 118, condition: "お金" },
    { name: "Courtyard", left: 87, top: 123, labelX:87, labelY: 123, condition: "フレアが焚かれてる時" },
    { name: "Dameged House", left: 104, top: 100, labelX:104, labelY: 100, condition: "" },
    { name: "Sewer River", left: 106, top:78.5,labelX:106, labelY:78.5, condition: "" },
    { name: "Pinewood Basement(Co-Op)", left: 81, top:55,labelX:70, labelY:65, condition: "PMCとSCAV各1人" },
    { name: "Klimov Street", left: 95, top:48,labelX:95, labelY:48, condition: "緑フレア" },
    { name: "Stylobate Building Elevator", left: 78.5, top:43.2,labelX:78.5, labelY:43.2, condition: "" },

    ];

const streetsScavExitsData = [

    { name: "Cardinal Apartment Complex", left: 31, top: 21, labelX: 31, labelY: 21, condition: "" },
    { name: "Near Kamchatskaya Arch", left: -1, top: 54.5, labelX: -1, labelY: 54.5, condition: "" },
    { name: "Basement Descent", left: 40, top: 54.5, labelX: 40, labelY: 54.5, condition: "" },

    { name: "Sewer Manhole", left: -5, top: 100, labelX: -5, labelY: 100, condition: "" },

    { name: "Ventilation Shaft", left: 80, top: 113, labelX: 80, labelY: 113, condition: "" },
    { name: "Entrance to Catacombs", left: 106, top:84,labelX:106, labelY:84, condition: "" },
    { name: "Pinewood Basement(Co-Op)", left: 81, top:55,labelX:70, labelY:65, condition: "PMCとSCAV各1人" },
    { name: "Klimov Shopping Mall Exfil", left: 90, top:44.5,labelX:90, labelY:44.5, condition: "" },

    ];

// グラゼロ
const groundzeroPmcExitsData = [

    { name: "Emercom Checkpoint", left: -5, top: 25, labelX: -5, labelY: 25, condition: "" },

    { name: "Scav Checkpoint(Co-Op)", left: 78, top:30, labelX: 78, labelY: 30, condition: "PMCとSCAV各1人" },

    { name: "Mira Ave", left: -48, top: 83, labelX: -48, labelY: 83, condition: "緑フレア" },
    { name: "Police Cordon V-Ex", left: 110, top: 122, labelX: 110, labelY: 122, condition: "お金" },
    { name: "Nakatani Basement Stairs", left: 108, top: 228, labelX: 108, labelY: 228, condition: "" },

    ];

const groundzeroScavExitsData = [

    { name: "Emercom Checkpoint", left: -5, top: 25, labelX: -5, labelY: 25, condition: "" },

    { name: "Scav Checkpoint(Co-Op)", left: 78, top:30, labelX: 78, labelY: 30, condition: "PMCとSCAV各1人" },

    { name: "Nakatani Basement Stairs", left: 108, top: 228, labelX: 108, labelY: 228, condition: "" },

    ];

// ファクトリー
const factoryPmcExitsData = [

    { name: "Gate 3", left: -243, top: 110, labelX:-243,labelY: 110, condition: "" },

    { name: "COURTYARD GATE", left: -243, top: 280, labelX: -243, labelY: 280, condition: "" },

    { name: "Gate 0", left: -203, top: 625, labelX: -203, labelY: 625, condition: "" },
    { name: "Med Tent Gates", left: 320, top: 430, labelX: 320, labelY: 430, condition: "Factory emergency exit鍵" },
    { name: "Cellars", left: -200, top: 625, labelX: -200, labelY: 625, condition: "地下マップ入れたら" },

    ];

const factoryScavExitsData = [

    { name: "Office Window", left: -164.5, top: 295, labelX: -164.5, labelY: 295, condition: "" },

    { name: "Gate 3", left: -243, top: 110, labelX:-243,labelY: 110, condition: "" },

    { name: "Camera Bunker Door", left: 70, top: 70, labelX: 70, labelY: 70, condition: "地下マップ入れたら" },

    ];

// ライトハウス

const lighthousePmcExitsData = [

    { name: "Armored Train", left: -18, top: 33.2, labelX: -28, labelY: 32.2, condition: "列車がいる時" },

    { name: "Mountain Pass", left: 62, top: 24, labelX: 58, labelY: 22.5, condition: "RR&パラコード&ボディーアーマー脱ぐ" },

    { name: "Northern CheckPoint", left: -30, top: 40.2, labelX: -30, labelY: 40.2, condition: "" },

    { name: "Path to Shoreline", left: 47, top: 12.5, labelX: 47, labelY: 12.5, condition: "" },
    { name: "Road to Military Base V-Ex", left: -11, top: 12, labelX: -20, labelY: 10, condition: "お金" },
    { name: "Side Tunnel(Co-Op)", left: 92.8, top: 31, labelX: 88, labelY:29.2, condition: "PMCとSCAV各1人" },
    { name: "Southern Road", left: 102, top: 16.8, labelX: 102, labelY: 16.8, condition: "" }

];

const lighthouseScavExitsData = [
    { name: "Armored Train", left: -18, top: 33.2, labelX: -28, labelY: 32.2, condition: "列車がいる時" },
    { name: "Path to Shoreline", left: 47, top: 12.5, labelX: 47, labelY: 12.5, condition: "" },
    { name: "Southern Road Landside", left: 102, top: 16.8, labelX: 102, labelY: 16.8, condition: "" },
    { name: "Side Tunnel(Co-Op)", left: 92.8, top: 31, labelX: 88, labelY:29.2, condition: "PMCとSCAV各1人" },

    { name: "Industrial Zone Gates", left: -10.8, top: 25, labelX: -22, labelY: 24, condition: "" },

    { name: "Scav Hideout at the Grotto", left: 14, top: 43, labelX: 14, labelY: 43, condition: "" },

    { name: "Hideout Under the Landing Stage", left: 88.5, top: 41, labelX: 85, labelY: 42, condition: "" }

];


const exitsByMap = {
    "ショアライン": {
        pmc: pmcExitsData,
        scav: scavExitsData
    },

    "カスタム": {
        pmc: customsPmcExitsData,
        scav: customsScavExitsData
    },

    "ライトハウス": {
        pmc: lighthousePmcExitsData,
        scav: lighthouseScavExitsData
    },

    "ウッズ": {
        pmc: woodsPmcExitsData,
        scav: woodsScavExitsData
    },

     "インチェ": {
        pmc: interchangePmcExitsData,
        scav: interchangeScavExitsData
    },
    "リザーブ": {
        pmc: reservePmcExitsData,
        scav: reserveScavExitsData
    },
    "ストタル": {
        pmc: streetsPmcExitsData,
        scav: streetsScavExitsData
    },

    "グラゼロ": {
        pmc: groundzeroPmcExitsData,
        scav: groundzeroScavExitsData
    },

    "ファクトリー": {
        pmc: factoryPmcExitsData,
        scav: factoryScavExitsData
    },
};

// HTMLの要素を取得
const pmcExits = document.getElementById("pmc-exits");
const scavExits = document.getElementById("scav-exits");

const pmcButton = document.getElementById("pmcButton");
const scavButton = document.getElementById("scavButton");
const hideButton = document.getElementById("hideButton");

function setActiveButton(button) {
    pmcButton.classList.remove("active");
    scavButton.classList.remove("active");
    hideButton.classList.remove("active");

    button.classList.add("active");
}

// 脱出地点を表示する関数
function showExits(exits, container) {

    container.innerHTML = "";

    exits.forEach(function(exit) {

        // ⚫︎
        const dot = document.createElement("div");

        dot.className = "exit-dot";
        dot.textContent = "●";

        dot.style.left = exit.left + "%";
        dot.style.top = exit.top + "%";


        // 文字
        const label = document.createElement("div");
        label.className = "exit-label";
        label.style.left = exit.labelX + "%";
        label.style.top = exit.labelY + "%";

// 脱出地点名
const name = document.createElement("div");
name.textContent = exit.name;

label.appendChild(name);


// 条件がある場合だけ表示
if (exit.condition) {

    const condition = document.createElement("div");

    condition.className = "exit-condition";
    condition.textContent = exit.condition;

    label.appendChild(condition);
}


        // 地図に直接置く
        container.appendChild(dot);
        container.appendChild(label);
    });
}

// マップごとの脱出地点データ
const mapExitData = {
shoreline: {
pmc: pmcExitsData,
scav: scavExitsData
}
};

// マップに合わせて脱出地点を更新
function updateExits(mapName) {

const data = exitsByMap[mapName];
pmcExits.innerHTML = "";
scavExits.innerHTML = "";
if (!data) {
    pmcExits.style.display = "none";
    scavExits.style.display = "none";
    return;
}
showExits(data.pmc, pmcExits);
showExits(data.scav, scavExits);
pmcExits.style.display = "block";
scavExits.style.display = "none";
setActiveButton(pmcButton);

}



// 最初はPMCを表示
scavExits.style.display = "none";
setActiveButton(pmcButton);

updateExits(currentMap);

// PMCボタン
pmcButton.addEventListener("click", function() {

    pmcExits.style.display = "block";
    scavExits.style.display = "none";

    setActiveButton(pmcButton);

});


// SCAVボタン
scavButton.addEventListener("click", function() {

    pmcExits.style.display = "none";
    scavExits.style.display = "block";

    setActiveButton(scavButton);

});


// 非表示ボタン
hideButton.addEventListener("click", function() {

    pmcExits.style.display = "none";
    scavExits.style.display = "none";

    setActiveButton(hideButton);

});


// タスク一覧を表示
const taskList = document.getElementById("task-list");
const taskSearch = document.getElementById("task-search");
const conditionList = document.getElementById("condition-list");

function showTaskList() {

    taskList.innerHTML = "";

    const searchText = taskSearch.value.trim().toLowerCase();

    const taskColors = [
        "#ff0000",
        "#0066ff",
        "#00aa00",
        "#ffcc00",
        "#ff6600",
        "#cc00ff",
        "#00cccc",
        "#ff3399",
        "#996633",
        "rgb(235, 160, 160)"
    ];

    let colorIndex = 0;

    tasksData.forEach(function(task) {

        if (!task.maps[currentMap]) {
            return;
        }

        let taskColor = null;

        if (task.selected) {
            taskColor = taskColors[colorIndex % taskColors.length];
            colorIndex++;
        }

        // タスク名・依頼主で検索
        if (
            !task.name.toLowerCase().includes(searchText) &&
            !task.giver.toLowerCase().includes(searchText)
        ) {
            return;
        }

        const taskItem = document.createElement("div");

        taskItem.className = "task-item";
        taskItem.textContent = task.name;

        if (task.selected) {
            taskItem.classList.add("selected");
            taskItem.style.background = taskColor;
            taskItem.style.color = "white";
        }

        taskItem.addEventListener("click", function() {

            task.selected = !task.selected;

            showTaskList();
            showTaskMarkers();
            showTaskConditions();
        
        });

        taskList.appendChild(taskItem);
    });
}

// タスク条件を表示
function showTaskConditions() {

    conditionList.innerHTML = "";

    const taskColors = [
        "#ff0000",
        "#0066ff",
        "#00aa00",
        "#ffcc00",
        "#ff6600",
        "#cc00ff",
        "#00cccc",
        "#ff3399",
        "#996633",
        "rgb(235, 160, 160)"
    ];

    // タスク一覧と同じ順番で色を決める
    const selectedTasks = [];

    let colorIndex = 0;

    tasksData.forEach(function(task) {

      if (!task.selected || !task.maps[currentMap]) {
         return;
        }

        if (typeof task.pinned === "undefined") {
            task.pinned = false;
        }

        selectedTasks.push({
            task: task,
            color: taskColors[colorIndex % taskColors.length]
        });

        colorIndex++;
    });

    // 固定されたタスクを上にする
    selectedTasks.sort(function(a, b) {
        return (b.task.pinned ? 1 : 0) - (a.task.pinned ? 1 : 0);
    });

    selectedTasks.forEach(function(item) {

        const task = item.task;
        const taskColor = item.color;

        const conditionItem = document.createElement("div");

        conditionItem.className = "condition-item";

        // タスク一覧と同じ色の枠
        conditionItem.style.border = "2px solid " + taskColor;

        // 固定中は少し目立たせる
        if (task.pinned) {
            conditionItem.style.boxShadow = "0 0 6px " + taskColor;
        }

        const title = document.createElement("div");

        title.textContent =
            (task.pinned ? "📌 " : "") + task.name;

        title.style.fontWeight = "bold";
        title.style.marginBottom = "5px";

        const description = document.createElement("div");

        description.textContent = task.description;

        conditionItem.appendChild(title);
        conditionItem.appendChild(description);

        // 条件をクリックして固定・固定解除
        conditionItem.addEventListener("click", function() {

            task.pinned = !task.pinned;

            showTaskConditions();

        });

        conditionList.appendChild(conditionItem);
    });
}



// 検索欄
taskSearch.addEventListener("input", function() {
    showTaskList();
});


// 最初の表示
showTaskList();
showTaskMarkers();
showTaskConditions();


// 条件ウィンドウをドラッグで移動
const conditionPanel = document.getElementById("condition-panel");
const conditionHeader = document.querySelector(".condition-panel-header");

let isDraggingCondition = false;
let conditionOffsetX = 0;
let conditionOffsetY = 0;

conditionHeader.addEventListener("mousedown", function(event) {

    isDraggingCondition = true;

    const rect = conditionPanel.getBoundingClientRect();

    conditionOffsetX = event.clientX - rect.left;
    conditionOffsetY = event.clientY - rect.top;

    
});

document.addEventListener("mousemove", function(event) {

    if (!isDraggingCondition) {
        return;
    }

    conditionPanel.style.left =
        (event.clientX - conditionOffsetX) + "px";

    conditionPanel.style.top =
        (event.clientY - conditionOffsetY) + "px";

});

document.addEventListener("mouseup", function() {

    isDraggingCondition = false;

});



// タスク一覧ウィンドウをドラッグで移動
const taskPanel = document.getElementById("task-panel");
const taskHeader = document.querySelector(".task-panel-header");

let isDraggingTask = false;
let taskOffsetX = 0;
let taskOffsetY = 0;

taskHeader.addEventListener("mousedown", function(event) {

    isDraggingTask = true;

    const rect = taskPanel.getBoundingClientRect();

    taskOffsetX = event.clientX - rect.left;
    taskOffsetY = event.clientY - rect.top;
});

document.addEventListener("mousemove", function(event) {

    if (!isDraggingTask) {
        return;
    }

    taskPanel.style.left =
        (event.clientX - taskOffsetX) + "px";

    taskPanel.style.top =
        (event.clientY - taskOffsetY) + "px";

    taskPanel.style.right = "auto";
});

document.addEventListener("mouseup", function() {

    isDraggingTask = false;

});


// タスク一覧：最小化
const minimizeTaskButton = document.getElementById("minimizeTaskButton");
const restoreTaskButton = document.getElementById("restoreTaskButton");
const taskPanelContent = document.getElementById("task-panel-content");

minimizeTaskButton.addEventListener("click", function() {
    taskPanelContent.style.display = "none";
    minimizeTaskButton.style.display = "none";
    restoreTaskButton.style.display = "block";

    taskPanel.style.height = "auto";
    taskPanel.style.minHeight = "0";
});

restoreTaskButton.addEventListener("click", function() {
    taskPanelContent.style.display = "block";
    minimizeTaskButton.style.display = "block";
    restoreTaskButton.style.display = "none";

    taskPanel.style.height = "";
    taskPanel.style.minHeight = "";
});


// タスク条件：最小化
const minimizeConditionButton = document.getElementById("minimizeConditionButton");
const restoreConditionButton = document.getElementById("restoreConditionButton");
const conditionListPanel = document.getElementById("condition-list");

minimizeConditionButton.addEventListener("click", function() {
    conditionListPanel.style.display = "none";
    minimizeConditionButton.style.display = "none";
    restoreConditionButton.style.display = "block";

    conditionPanel.style.height = "auto";
    conditionPanel.style.minHeight = "0";
});

restoreConditionButton.addEventListener("click", function() {
    conditionListPanel.style.display = "block";
    minimizeConditionButton.style.display = "block";
    restoreConditionButton.style.display = "none";

    conditionPanel.style.height = "";
    conditionPanel.style.minHeight = "";
});


// マップ画像の切り替え
const mapSelect = document.getElementById("mapSelect");
const mapImage = document.getElementById("mapImage");

const mapImages = {
    shoreline: "Shoreline.svg",
    customs: "Customs.svg",
    lighthouse: "lighthouse.svg",
    woods: "Woods.svg",
    interchange: "Interchange.svg",
    reserve: "Reserve.svg",
    labs: "ラボ.png",
    streets: "StreetsOfTarkov.svg",
    groundzero: "GroundZero.svg",
    factory: "Factory.svg"
};


mapSelect.addEventListener("change", function () {

    mapImage.src = mapImages[this.value];

    // 一度、専用クラスを両方とも削除
    mapImage.classList.remove("lighthouse-map", "customs-map","factory-map","groundzero-map",
        "interchange-map","shoreline-map","streetsoftarkov","reserve-map","woods-map");

    // マップごとにクラスを付ける
    if (this.value === "lighthouse") {
        mapImage.classList.add("lighthouse-map");
    } else if (this.value === "customs") {
        mapImage.classList.add("customs-map");
    }else if (this.value === "factory") {
        mapImage.classList.add("factory-map");
    }else if (this.value === "groundzero") {
        mapImage.classList.add("groundzero-map");
    }else if (this.value === "interchange") {
        mapImage.classList.add("interchange-map");
    }else if (this.value === "shoreline") {
    mapImage.classList.add("shoreline-map");
    }else if (this.value === "streets") {
    mapImage.classList.add("streetsoftarkov-map");
    }else if (this.value === "reserve") {
    mapImage.classList.add("reserve-map");
     }else if (this.value === "woods") {
    mapImage.classList.add("woods-map");
}

    const mapNames = {
        shoreline: "ショアライン",
        customs: "カスタム",
        lighthouse: "ライトハウス",
        woods: "ウッズ",
        interchange: "インチェ",
        reserve: "リザーブ",
        labs: "ラボ",
        streets: "ストタル",
        groundzero: "グラゼロ",
        factory: "ファクトリー"
    };

    currentMap = mapNames[this.value];

    showTaskList();
    showTaskMarkers();
    showTaskConditions();

    updateExits(currentMap);
});


mapImage.classList.add("shoreline-map");

// =========================
// Credits / License
// =========================

const creditsButton = document.getElementById("creditsButton");
const creditsModal = document.getElementById("creditsModal");
const closeCreditsButton = document.getElementById("closeCreditsButton");

// Creditsを開く
creditsButton.addEventListener("click", () => {
    creditsModal.style.display = "flex";
});

// ×で閉じる
closeCreditsButton.addEventListener("click", () => {
    creditsModal.style.display = "none";
});

// モーダルの外側をクリックして閉じる
creditsModal.addEventListener("click", (event) => {

    if (event.target === creditsModal) {
        creditsModal.style.display = "none";
    }

});
