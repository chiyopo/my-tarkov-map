// 現在表示しているマップ
let currentMap = "ショアライン";


// タスクのデータ
const tasksData = [
    {
        name: "Capturing Outposts",
        giver:"プラパー",
        maps: {
            "カスタム": [
                { left: 73, top: 485 ,width:15,height:70,rotate:-9,type:"area"}
            ],
            "ショアライン": [
                {left: 48.6, top: 31 ,width:15,height:11,rotate:0,type:"area" }
            ],
            "ウッズ": [
                {left: 78, top: 278 ,width:15,height:20,rotate:-9,type:"area" }
            ]
        },
        description: "カスタムの新建、ウッズの医療キャンプ、ショアラインのリゾートでPMC12kill（kill共有あり）",
        selected: false
    },

    {
        name: "Anesthesia",
        giver:"プラパー",
        maps: {
            "ショアライン": [
                { left: 49, top: 34 },
                { left: 28.5, top: 49.2 },
                { left: 52, top: 83.5 }
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
                
            ],
            "ショアライン": [
                
            ],
            "グラゼロ": [
               
            ]
        },
        description: "AK-12にValdayスコープとAK-12サプレッサーをつけてPMCを10killする（kill共有あり）",
        selected: false
    },

    

    {
        name: "Colleagues",
        giver:"セラピスト",
        maps: {
            "ショアライン": [
                {left: 49, top: 35},
               { left: 28.5, top: 48 },
               { left: 52, top: 83.5 }
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
                { left: 15, top: 68 },
               { left: 14.5, top: 68 },
                { left: 28.5, top: 48 },
                { left: 49, top: 34 },
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
                { left: 47, top: 33 ,comment:"西棟306号室🔑"}
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
               {left: 68, top: 25 ,width:13,height:30,rotate:0,type:"area" }
            ],
            "インチェ": [
                {left: 100, top: 335 ,width:30,height:35,rotate:0,type:"area" }
            ]
        },
        description: "密輸業者の基地で10キルする（kill共有あり）",
        selected: false
    },

    {
        name: "Master key",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                { left: 43, top: 14.8 }
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
                { left: 17.7, top: 36.5 }
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
                { left: 45, top: 80.2 }
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
                { left: 44.8, top: 34, comment:"西棟219🔑or220号室🔑",commentX:-50,commentY:15},
                { left: 53, top: 34,  comment:"東棟220号室"
                },
                
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
                { left: 29.5, top: 26 },
                { left: 65.9, top: 29.2 }
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
                { left: 0, top: 225 },
                { left: 55, top: 65 }
            ],
            "ショアライン": [
                { left: 53, top: 33, comment:"東棟321号室" }
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
                { left: 48, top: 26 },
                { left: 68, top: 82 }
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
                { left: 12.2, top: 54 },
                { left: 43.5, top: 17 },
                { left: 54.3, top: 57 }
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
                { left: 53.5, top: 33 , comment:"東棟108号室"},
                { left: 43, top: 34, comment:"西棟地下" }
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
                { left: 52, top: 34, comment:"東棟110号室(San tape🔑)"},
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
                { left: 45, top: 34 },
                { left: 62, top: 63 }
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
                { left: 22, top: 25 }
            ]
        },
        description: "ラグマンのSUV見つける。生還する(ランスルー不可)",
        selected: false
    },

    {
        name: "Courtesy Visit",
        giver:"イエーガー",
        maps: {
            "ショアライン": [
                { left: 12.2, top: 30 },
                { left: 10.8, top: 37 },
                { left: 17.6, top: 37 }
            ]
        },
        description: "1レイドで会長の家、漁師の家、司祭の家を見つける。生還する",
        selected: false
    },

    {
        name: "Thirsty-Hounds",
        giver:"イエーガー",
        maps: {
            "ショアライン": [
               
            ]
        },
        description: "22時〜7時の間にSCAVを12killする（kill共有あり）",
        selected: false
    },

　　{
        name: "Forge a Freiendship",
        giver:"プラパー",
        maps: {
            "ショアライン": [ { left: 52.5, top: 83 },
               
            ]
        },
        description: "プラパーの荷物を入手する（ランダム沸き）",
        selected: false
    },

    {
        name: "Wet Job-part1",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [ 
               
            ]
        },
        description: "M4A1、ADAR、Lone Star、M16A1、M16A2を使いScavを10killする（kill共有あり）",
        selected: false
    },
    {
        name: "Wet Job-part2",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [ { left: 20, top: 78 },
               
            ]
        },
        description: "M4A1、ADAR、Lone Star、M16A1、M16A2を使いScavを10killする（kill共有あり）",
        selected: false
    },
    {
        name: "Wet Job-part3",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [ { left: 30, top: 71 },
               
            ]
        },
        description: "Artyomの車（黄色いセダン）にマーカー設置",
        selected: false
    },
    {
        name: "Wet Job-part4",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [ { left: 49.5, top: 28 },
               
            ]
        },
        description: "北館3F東側の事務室で入居者リストを見つける",
        selected: false
    },
　　{
        name: "Wet Job-part5",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [ { left: 49.5, top: 28 ,comment:"東棟328号室🔑"},
               
            ]
        },
        description: "東館328号室でArtyomの仕事の情報を見つけて引き渡す",
        selected: false
    },
    {
        name: "The Punisher-part2",
        giver:"プラパー",
        maps: {
            "ショアライン": [ 
               
            ]
        },
        description: "AKMシリーズを使ってSCAVを15Kill",
        selected: false
    },
    {
        name: "Tarkov-Style Dipolomacy",
        giver:"セラピスト",
        maps: {
            "ショアライン": [ { left: 28.7, top: 50, comment:"Cottage(コテージの裏口)🔑"},
                { left: 52.5, top: 83 },
               
            ]
        },
        description: "サニターの検眼鏡とサージカルキットを手に入れる",
        selected: false
    },
    {
        name: "Thirsty-Echo",
        giver:"セラピスト",
        maps: {
            "ショアライン": [ { left: 45.3, top: 34, comment:"西棟地下" }
               
               
            ]
        },
        description: "サニターの検眼鏡とサージカルキットを手に入れる",
        selected: false
    },
   {
        name: "Rigged Game",
        giver:"スキアー",
        maps: {
            "ショアライン": [
                { left: 49, top: 34 },
                { left: 28.5, top: 49.2 },
                { left: 52, top: 83.5 }
            ]
        },
        description: "医療物資コンテナ3箇所にマーカー設置",
        selected: false
    },


    {
        name: "Long Road",
        giver:"スキアー",
        maps: {
            "ショアライン": [
                
            ],
            "ライトハウス": [
                
            ]
        },
        description: "海岸及び主要道路沿いのScavを7kill(kill共有あり）",
        selected: false
    },
    {
        name: "Cargo X",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [{ left: 50.2, top: 33 ,comment:"東棟306or308号室🔑"},
                
            ]
            
        },
        description: "積荷目録を入手して引き渡す",
        selected: false
    },
    {
        name: "Peacekeeping Mission",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                
            ],
            "ウッズ": [
                
            ],
            "リザーブ": [
                
            ],
            "カスタム": [
                
            ],
            "ライトハウス": [
                
            ],
            "ストタル": [
                
            ],
            "グラゼロ": [
                
            ],
            "インチェ": [
                
            ],
            
        },
        description: "UNTERヘルメット＆アーマー装備＆武器指定（M16A1・M16A2・M4A1・SCAR-L・HK 416A5・HK G36・Howa Type 20・DML・Radian・AUG）、ウッズorリザーブでScavを12kill、カスタムorライトハウスでScavを12kill、ショアorストタルでScavを12kill,グラゼロorインチェでScavを12kill（kill共有あり）",
        selected: false
    },
    {
        name: "The Guide",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                
            ],
            "ウッズ": [
                
            ],
            "リザーブ": [
                
            ],
            "カスタム": [
                
            ],
            "ライトハウス": [
                
            ],
            "ストタル": [
                
            ],
            "グラゼロ": [
                
            ],
            "インチェ": [
                
            ],
            "ラボ": [
                
            ],
            "ファクトリー": [
                
            ],


            
        },
        description: "インチェorウッズから生還、ショアorリザーブから生還、ファクトリーorカスタムから生還、ラボorライトハウスから生還、グラゼロorストタルから生還、任意の敵を15kill(kill共有あり)",
        selected: false
    },
    {
        name: "Worst Job in the World",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                
            ],
            
            "ライトハウス": [
                
            ],
            
            "グラゼロ": [
                
            ],
            
        },
        description: "AR15系の武器（M4A1、ADAR、Lone Star、M16A1、M16A2、Radian)を使用して100m以上離れた場所から敵30kill(kill共有あり）",
        selected: false
    },
    {
        name: "【BEARのみ】Insomnia",
        giver:"ピースキーパー",
        maps: {
            "ショアライン": [
                
            ],
            
            "ライトハウス": [
                
            ],
            
            "グラゼロ": [
                
            ],
            "ストタル": [
                
            ],
            "リザーブ": [
                
            ],
            
        },
        description: "21時～6時の間にPMCを25kill",
        selected: false
    },
    {
        name: "Shooter Born in Heaven",
        giver:"メカニック",
        maps: {
            "カスタム": [
                
            ],
            "ライトハウス": [
                
            ],
            "ストタル": [
                
            ],
            "ショアライン": [
                
            ],
            "インチェ": [
                
            ],
            "グラゼロ": [
                
            ],
            
            "リザーブ": [
                
            ],
            "ウッズ": [
                
            ],
            
        },
        description: "ボルトアクションライフル指定、カスタムorライトハウスでヘッドショットでPMCを5kill、ストタルorショアでヘッドショットでPMCを5kill、インチェorグラゼロでヘッドショットでPMCを5kill、ウッズorリザーブでヘッドショットでPMCを5kill、",
        selected: false
    },
    {
        name: "Needle in a Haystak",
        giver:"メカニック",
        maps: {
            
            "ストタル": [{ left: 9, top: 103 },
                
            ],
            
            "インチェ": [{ left: -15, top: 203 },{ left:-21, top: 233 },
                
            ],
            "グラゼロ": [{ left: 85, top: 85 },
                
            ],
            "ショアライン": [{ left: 53, top: 30 },{ left:70, top: 83 },
                
            ],
            
            
        },
        description: "グラゼロでテラグループ本社前中庭調査、インチェで子供の遊び場とカートコースを調査、ショアで工事現場と子供の遊び場を調査、ストタルで子供の遊び場を調査",
        selected: false
    },
    {
        name: "【ラビリンス】Hidden Layer",
        giver:"メカニック",
        maps: {
            
             "ショアライン": [{ left: 47.3, top: 33 ,commentX:-95,commentY:-28,comment:"西棟2F🔑沸き"},{ left: 45.6, top: 34 , commentX:-100,commentY:15,comment:"西棟1F🔑沸き【目的】地下入室"},{ left:51, top: 32.5,comment:"東棟2F&3F🔑沸き"},{ left: 49.5, top: 28.5 ,comment:"北館3F🔑沸き"},
                
            ],
            
            
        },
        description: "西棟地下の鍵部屋に入る方法を探す（任意：Knossos🔑を手に入れる）",
        selected: false
    },
    {
        name: "【ラビリンス】Offensive Reconnaissance",
        giver:"メカニック",
        maps: {
            
             "ショアライン": [{ left: 45.6, top: 34 ,}
                
            ],
            
            
        },
        description: "ラビリンスへトランジットする",
        selected: false
    },
    {
        name: "Nostalgia",
        giver:"イエーガー",
        maps: {
            
             "ショアライン": [{ left: 47, top: 33 ,comment:"西棟303号室",},
                
            ],
            
            
        },
        description: "イエーガーが宿泊してた西棟303号室のアルバムを持ち帰る",
        selected: false
    },
    {
        name: "Forester's Duty",
        giver:"イエーガー",
        maps: {
            
             "ショアライン": [
                
            ],
             "ライトハウス": [{ left: 48, top: 12.5,comment:"ショアへのトランジット",},
                
            ],
            
            
        },
        description: "ライトハウスでScavを5killしてショアへトランジット⇒ショアでScavを5kill(1レイドで※脱出しなければトランジット繰り返してもOK）",
        selected: false
    },
    {
        name: "The Huntsman Path-Forest Cleaning",
        giver:"イエーガー",
        maps: {
            
             "ショアライン": [
                
            ],
             "ライトハウス": [
                
            ],
            "リザーブ": [
                
            ],
            "ストタル": [
                
            ],
            
            
        },
        description: "ショア・ライハ・ストタル・リザーブのいずれかでScavを50kill（kill共有あり）",
        selected: false
    },
    {
        name: "Slaughterhouse",
        giver:"イエーガー",
        maps: {
            
            "ファクトリー": [
                
            ], 
            "ストタル": [
                
            ],
            "ライトハウス": [
                
            ],
            "ショアライン": [
                
            ],
             
            "リザーブ": [
                
            ],
            "グラゼロ": [
                
            ],
            
            
            
        },
        description: "ファクトリー（昼）・ストタル・ライトハウス・ショア・リザーブ・グラゼロでそれぞれ近接武器でScavを10killする（kill共有あり）",
        selected: false
    },
    {
        name: "【選択タスク】The Huntsman Path-Sadist",
        giver:"イエーガー",
        maps: {
            
           
            "ショアライン": [
                
            ],
             
           
            
            
        },
        description: "サニターkill&サニターバッグ納品、セラピのA Difficult Choiceと選択タスク",
        selected: false
    },
    {
        name: "The Huntsman Path-Relentless",
        giver:"イエーガー",
        maps: {
            
           
            "ショアライン": [
                
            ],
            "ファクトリー": [
                
            ],
            "インチェ": [
                
            ],
            "カスタム": [
                
            ],
            "ウッズ": [
                
            ],
            "リザーブ": [
                
            ],
             
        },
        description: "1回も死なずに、タギラ・キラ・リシャーラ・シュターマン・グラハ・サニターを倒す（kill共有あり）",
        selected: false
    },
    {
        name: "Stray Dogs",
        giver:"イエーガー",
        maps: {
            
           
            "ショアライン": [
                
            ],
            "ライトハウス": [
                
            ],
            
            "カスタム": [
                
            ],
            "ウッズ": [
                
            ],
            
             
        },
        description: "3バカの討伐（多分）",
        selected: false
    },
    {
        name: "The Tarkov Import",
        giver:"プラパー",
        maps: {
            
           
            
            "ライトハウス": [
                
            ],
            
            
            "リザーブ": [
                
            ],
            
             
        },
        description: "ライハかリザーブでSR-25に指定サプレッサーとスコープ付けてPMCを8kill(kill共有あり）",
        selected: false
    },
    {
        name: "Easy-Breezy",
        giver:"プラパー",
        maps: {
            
           
            
            "ライトハウス": [
                
            ],
            
            
            "リザーブ": [
                
            ],
            
             
        },
        description: "ライハかリザーブでSR-2Mに指定サプレッサーとスコープ付けて任意の敵を30kill(kill共有あり）",
        selected: false
    },
    {
        name: "Easy Job",
        giver:"プラパー",
        maps: {
            
           
            
            "ライトハウス": [{ left: 10.7, top: 27.7 ,width:5.2,height:3.5,type:"area"}
                
            ],
            
   
        },
        description: "ヘリコプターにマーカー設置して、周辺エリアで任意の敵を10kill(kill共有あり））",
        selected: false
    },
    {
        name: "Reconnaissance",
        giver:"プラパー",
        maps: {
            
           
            
            "ライトハウス": [{ left: -7, top: 27.7 },{ left: 4.5, top: 35.8 },{ left: 0, top: 22.5 }
                
            ],
            
   
        },
        description: "オフィスビル3ついずれかの屋上を偵察して、生還する",
        selected: false
    },
    {
        name: "Reconnaissance",
        giver:"プラパー",
        maps: {
            
           
            
            "ライトハウス": [{ left: -7, top: 27.7 },{ left: 4.5, top: 35.8 },{ left: 0, top: 22.5 }
                
            ],
            
   
        },
        description: "オフィスビル3ついずれかの屋上を偵察して、生還する",
        selected: false
    },
    {
        name: "【BEARのみ】Our Own Land",
        giver:"プラパー",
        maps: {
            
           
            
            "ライトハウス": [
                
            ],
            
   
        },
        description: "ローグをグレネードランチャーで10killする（kill共有あり）",
        selected: false
    },
    {
        name: "Best Job in the World",
        giver:"プラパー",
        maps: {
            
           
            
            "ライトハウス": [
                
            ],
             "リザーブ": [
                
            ],
            
   
        },
        description: "AK-74シリーズのアサルトライフルで敵を30kill",
        selected: false
    },
    {
        name: "Unique Experience",
        giver:"プラパー",
        maps: {
            
           
            
            "ライトハウス": [
                
            ],
             "ラボ": [
                
            ],
            
   
        },
        description: "Velociraptorで任意の敵を30kill(kill共有あり）",
        selected: false
    },
    {
        name: "Getting some air",
        giver:"プラパー",
        maps: {
            
           
            
            "ライトハウス": [
                
            ],
            "ショアライン": [
                
            ],
            "リザーブ": [
                
            ],
            
   
        },
        description: "RPDNにEKP-30を装着し、任意の敵を40kill",
        selected: false
    },
    {
        name: "Getting some air",
        giver:"プラパー",
        maps: {
            
           
            
            "ライトハウス": [
                
            ]
            
   
        },
        description: "SVDSもしくはTKPDでScavを10kill、ScavベストもしくはSecurity Vestを着てScavを10kill、A-2607 Knifeを5つ納品する",
        selected: false
    },
    {
        name: "Sea Side Vacation",
        giver:"セラピスト",
        maps: {
            
           
            
            "ライトハウス": [{ left: 50.5, top: 41.5 },
                
            ]
            
   
        },
        description: "情報提供者のブリーフケースを入手する",
        selected: false
    },
    {
        name: "Lost Contact",
        giver:"セラピスト",
        maps: {
            
           
            
            "ライトハウス": [{ left: 75, top: 29 },
                
            ]
            
   
        },
        description: "失踪したグループを探す、生還する",
        selected: false
    },
    {
        name: "Drug Trafficking",
        giver:"セラピスト",
        maps: {
            
           
            
            "ライトハウス": [{ left: -18, top: 26 },
                
            ]
            
   
        },
        description: "ドラッグラボにWI-FIカメラつける",
        selected: false
    },
    {
        name: "Missing Cargo",
        giver:"スキアー",
        maps: {
            
           
            
            "ライトハウス": [{ left: 72, top: 25.8 },{ left: 90, top: 26,comment:"ヘリ"},
                
            ]
            
   
        },
        description: "墜落したヘリを見つける、情報提供者のフォルダを探す",
        selected: false
    },
    {
        name: "Top Secret",
        giver:"スキアー",
        maps: {
            
           
            
            "ライトハウス": [{ left: 115, top: 53.5,comment:"Radar🔑"},
                
            ]
            
   
        },
        description: "レーダー指令基地でHDDを入手する、DSPTが必要？？",
        selected: false
    },
    {
        name: "【選択タスク+ストーリータスクエンディング分岐】Choose Your Friends Wisely",
        giver:"スキアー",
        maps: {
            
           
            
            "ライトハウス": [
                
            ],
            "カスタム": [
                
            ],
            "リザーブ": [
                
            ],
            "ウッズ": [
                
            ],
            
   
        },
        description: "カスタム⇒リザーブ⇒ウッズ⇒ライトハウスにトランジットして生還する、トランジットしつつPMCを5kill",
        selected: false
    },
    {
        name: "Revision-Lighthouse",
        giver:"ピースキーパー",
        maps: {
            
           
            
            "ライトハウス": [{ left: -2.7, top: 29.3},{ left: 15.5, top: 33.7},{ left: 112.3, top:37.5},{ left:65, top: 30.8},
                
            ],
           
            
   
        },
        description: "BRDM2台とStryker2台にマーカー設置",
        selected: false
    },
    {
        name: "Gifts from Tarkov",
        giver:"ピースキーパー",
        maps: {
            
           
            
            "ライトハウス": [{ left: 68, top: 41},
                
            ],
            "リザーブ": [
                
            ],
           
            
   
        },
        description: "貨物にマーカー設置、ライハかリザーブでM203グレネードランチャーで任意の敵を10kill(kill共有あり）",
        selected: false
    },
    {
        name: "Overpopulation",
        giver:"ピースキーパー",
        maps: {
            
           
            
            "ライトハウス": [{ left: 68, top: 41},
                
            ],
              
   
        },
        description: "コテージエリアで任意の敵を10kill(kill共有あり）、地形図、インテリもしくはブルーフォルダーを5つ納品する",
        selected: false
    },
    {
        name: "Corporate Secrets",
        giver:"メカニック",
        maps: {
            
           
            
            "ライトハウス": [{ left: -7, top: 27.7 },{ left: 4.5, top: 35.8 },
                
            ],
              
   
        },
        description: "ウォーターポンプの情報とポンプ場の情報を入手する",
        selected: false
    },
    {
        name: "Energy Crisis",
        giver:"メカニック",
        maps: {
            
           
            
            "ライトハウス": [{ left: -25, top: 26 },{ left: -20, top: 29 },{ left: 6, top:24 },{ left: 23.8, top: 34.5 },
            ],
              
   
        },
        description: "タンクローリーにマーカー設置",
        selected: false
    },
    {
        name: "Broadcast-part1",
        giver:"メカニック",
        maps: {
            
           
            
            "ライトハウス": [{ left: 4.5, top: 35.8 ,comment:"OR🔑"},
            ],
              
   
        },
        description: "レコーディングスタジオを見つけてシグナルジャマーを設置する",
        selected: false
    },
    {
        name: "No Place for Renegades",
        giver:"プラパー",
        maps: {
            
            "リザーブ": [
            ],
            
        },
        description: "レイダーを5kill(kill共有あり）",
        selected: false
    },
    {
        name: "Special Comms",
        giver:"プラパー",
        maps: {
            
            "リザーブ": [{ left: 120, top: 340 },
            ],
            "ウッズ": [{ left: 63, top: 313},
            ],
            
        },
        description: "ウッズにミリタリーケーブル隠す⇒ウッズからリザーブにトランジットする⇒リザーブでミリタリーケーブル隠す",
        selected: false
    },
    {
        name: "Documents",
        giver:"プラパー",
        maps: {
            
            "リザーブ": [{ left: -35, top: 202 },{ left: -38, top: 205 },{ left: -30, top: 210 },
            ],
            
            
        },
        description: "軍事資料を3つ手に入れる",
        selected: false
    },
    {
        name: "The Bunker",
        giver:"プラパー",
        maps: {
            
            "リザーブ": [
            ],
            
            
        },
        description: "指令室・白ビショップ・黒ビショップ・白ポーン・黒ポーン・キングの気密扉見つける",
        selected: false
    },
    {
        name: "Escort",
        giver:"プラパー",
        maps: {
            
            "リザーブ": [
            ],
            "ファクトリー": [
            ],
            "カスタム": [
            ],
            "ショアライン": [
            ],
            "ウッズ": [
            ],
            "インターチェンジ": [
            ],
            "ラボ": [
            ],
            "グラゼロ": [
            ],
            
            
        },
        description: "各マップでPMCを2kill",
        selected: false
    },
    {
        name: "The Punisher-part3",
        giver:"プラパー",
        maps: {
            
            "リザーブ": [
            ],
            
            
        },
        description: "9×39口径の武器でScavを12kill、ハーフマスクを7こ引き渡す",
        selected: false
    },
    {
        name: "Disease History",
        giver:"セラピスト",
        maps: {
            
            "リザーブ": [{ left: 10, top: 248,comment:"RB-SMP🔑",commentY:10,commentX:-55},{ left:20, top: 248 ,comment:"RB-KSM🔑",commentY:10,commentX:-15},
            ],
            
            
        },
        description: "医療日誌を2つ手に入れる",
        selected: false
    },
    {
        name: "Safe Corridor",
        giver:"スキアー",
        maps: {
            
            "リザーブ": [{ left: 113, top: 292,width:33,height:90,type:"area"},
            ],
            
            
        },
        description: "地下倉庫でScavを5kill(kill共有あり）、地下倉庫の🔑3つ納品",
        selected: false
    },
    {
        name: "Classified Technologies",
        giver:"スキアー",
        maps: {
            
            "リザーブ": [{ left: -30, top:123},
            ],
            
            
        },
        description: "パッケージを入手する",
        selected: false
    },
    {
        name: "The Cleaner",
        giver:"ピースキーパー",
        maps: {
            
            "リザーブ": [
            ],
            "ラボ": [
            ],
            
            
        },
        description: "レイダーもしくはBDを10kill(kill共有あり）",
        selected: false
    },
　　{
        name: "Revision-Reserve",
        giver:"ピースキーパー",
        maps: {
            
            "リザーブ": [{ left: 70, top:110},{ left: 100, top:145},{ left: 85, top:215},{ left: 95, top:350},
            ],
           
            
            
        },
        description: "BMP 4台にマーカー設置する",
        selected: false
    },
    {
        name: "Surplus Goods",
        giver:"メカニック",
        maps: {
            
            "リザーブ": [{ left: 100, top:145,comment:"RB-ST🔑"},
            ],
           
            
            
        },
        description: "ナビゲーションシステムを手に入れる",
        selected: false
    },
    {
        name: "Back Door",
        giver:"メカニック",
        maps: {
            
            "リザーブ": [{ left: -53, top:113},
            ],
     
        },
        description: "D2から脱出する",
        selected: false
    },
    {
        name: "Reserve Expert",
        giver:"ラグマン",
        maps: {
            
            "リザーブ": [{ left: -63, top:218,comment:"2F RB-ORB3🔑,3F RB-OB🔑,4F 鍵なし"},{ left: -43, top:165,comment:"2F RB-ORB2🔑,4F RB-ORB1🔑"},
            ],
     
        },
        description: "武器庫を調べる、6アーマーを3つ納品する",
        selected: false
    },
    {
        name: "A Fuel Matter",
        giver:"ラグマン",
        maps: {
            
            "リザーブ": [{ left: 180, top:250,},{ left: 50, top:155,},
            ],
     
        },
        description: "燃料タンクにマーカー設置する",
        selected: false
    },
    {
        name: "Reserve",
        giver:"イエーガー",
        maps: {
            
            "リザーブ": [{ left: 113, top: 292,width:33,height:90,type:"area"},
            ],
     
        },
        description: "食料貯蔵庫を見つけて生還する",
        selected: false
    },
    {
        name: "Pest Control",
        giver:"イエーガー",
        maps: {
            
            "リザーブ": [{ left: -35, top: 193,width:75,height:75,type:"area"},
            ],
     
        },
        description: "食料貯蔵庫を見つけて生還する",
        selected: false
    },
    {
        name: "The Huntsman Path-Liberation",
        giver:"イエーガー",
        maps: {
            
            "リザーブ": [
            ],
            "ラボ": [
            ],
     
        },
        description: "レイダー6kill",
        selected: false
    },
    {
        name: "The Huntsman Path-Eraser",
        giver:"イエーガー",
        maps: {
            
            "リザーブ": [
            ],
            
     
        },
        description: "グラハをkill(kill共有あり）、護衛のヘルメットを2つ納品する",
        selected: false
    },
    {
        name: "Properties All Around",
        giver:"プラパー",
        maps: {
            
            "ストタル": [{ left: 65, top: 118},
            ],
            
     
        },
        description: "不動産取引書類を入手する（ランダム沸き、REA🔑必要かも）",
        selected: false
    },
    {
        name: "You've Got Mail",
        giver:"プラパー",
        maps: {
            
            "ストタル": [{ left: 46, top: 63},
            ],
            
     
        },
        description: "書留郵便を入手する（ランダム沸き）",
        selected: false
    },
    {
        name: "【BEARのみ】Green Corridor",
        giver:"プラパー",
        maps: {
            
            "ストタル": [{ left: 50, top: 85},{ left: 44, top: 89},
            ],
            
     
        },
        description: "貨物列車と待ち伏せ場所を確認する",
        selected: false
    },
    {
        name: "District Patrol",
        giver:"プラパー",
        maps: {
            
            "ストタル": [
            ],
            
     
        },
        description: "アサルトライフルもしくはアサルトカービンを用いて任意の敵を20kill(kill共有あり）",
        selected: false
    },
    {
        name: "Kings of the Rooftops",
        giver:"プラパー",
        maps: {
            
            "ストタル": [
            ],
            
     
        },
        description: "スナイパースカブを8kill(kill共有あり）",
        selected: false
    },
    {
        name: "Glory to CPSU",
        giver:"プラパー",
        maps: {
            
            "ストタル": [{ left: -0.5, top: 54},
            ],
            
     
        },
        description: "プラパーの友人の仕事場を発見して、消息に関する情報を入手する",
        selected: false
    },
    {
        name: "Population Census",
        giver:"セラピスト",
        maps: {
            
            "ストタル": [{ left: 37.5, top: 66},
            ],
            
     
        },
        description: "ジャーナルを入手する",
        selected: false
    },
    {
        name: "Paramedic",
        giver:"セラピスト",
        maps: {
            
            "ストタル": [{ left: 37.5, top: 19},{ left: 31, top: 29},{ left: 33, top:44},{ left: 32, top: 54},{ left: 31, top: 83},{ left: 5, top: 105},{ left: -10, top: 111},{ left: 19.5, top: 115},{ left: 60, top:98},{ left: 65, top: 78},
            ],
            
     
        },
        description: "スマホを入手して、タクシー脱出する",
        selected: false
    },
    {
        name: "Urban Medicine",
        giver:"セラピスト",
        maps: {
            
            "ストタル": [{ left: 33.8, top: 96},
            ],
            
     
        },
        description: "薬品サンプルの容器を入手する、Scavを10kill",
        selected: false
    },
    {
        name: "Pet Won't Need It",
        giver:"セラピスト",
        maps: {
            
            "ストタル": [{ left: 46, top: 70,comment:"薬局"},{ left: 63.5, top: 98,comment:"薬局"},{ left: 7, top: 72.8},{ left: 14, top: 63,comment:"X-ray🔑"},{ left: 35, top: 2,comment:"薬局"},
            ],
            
     
        },
        description: "薬局3か所めぐる、動物病院を探す、放射線技師の部屋を探す、医薬品を5つ納品する",
        selected: false
    },
    {
        name: "Beyond the Red Meat",
        giver:"スキアー",
        maps: {
            
            "ストタル": [{ left: 61, top: 39.5,comment:"Beluga🔑"},
            ],
            
     
        },
        description: "料理の秘密の情報を入手する（ランダム沸き）",
        selected: false
    },
    {
        name: "Debtor",
        giver:"スキアー",
        maps: {
            
            "ストタル": [{ left: 25, top: 81.5,comment:"Check15🔑"},{ left: 77, top: 55,comment:"206号室"},
            ],
            
     
        },
        description: "パインウッドホテルの債務者の死体を確認する、CELLSのCheck15🔑の部屋を訪れる、Iron gate🔑納品",
        selected: false
    },
    {
        name: "The Secret Recipe",
        giver:"スキアー",
        maps: {
            
            "ストタル": [{ left: 44, top: 36,comment:"TG meetin🔑"},{ left: 62, top: 28},
            ],
            
     
        },
        description: "どっちかにランダム沸きの秘密の材料を入手する",
        selected: false
    },
    {
        name: "House Arrest",
        giver:"スキアー",
        maps: {
            
            "ストタル": [{ left: 25, top: 81.5,comment:"Iron gate🔑"},{ left: 77, top: 55,comment:"206号室"},
            ],
            
     
        },
        description: "パインウッドホテルの債務者の死体を確認する、CELLSのIron gate🔑の部屋を訪れる、Check15🔑納品",
        selected: false
    },
    {
        name: "Pyramid Scheme",
        giver:"スキアー",
        maps: {
            
            "ストタル": [{ left: 32, top: 42},{ left: 37, top: 41},
            ],
            
     
        },
        description: "ATMにマーカー設置(どっちからしい)",
        selected: false
    },
    {
        name: "Route Diviation",
        giver:"スキアー",
        maps: {
            
            "ストタル": [{ left: 27.5, top: 49.5},{ left: 10, top: 85},{ left: 86, top: 108},{ left: 55, top: 78},{ left: 103, top: 82},{ left: 82, top: 55},
            ],
            
     
        },
        description: "BTRの停車場所にマーカー設置",
        selected: false
    },
    {
        name: "New Paths",
        giver:"ピースキーパー",
        maps: {
            
            "ストタル": [
            ],
            "グラゼロ": [{ left: -45, top: 100,width:15,height:10,type:"area"},
            ],
            
     
        },
        description: "グラゼロでMira Aveの周辺を偵察する⇒ストタルにトランジットする⇒生還する",
        selected: false
    },
    {
        name: "Secret Message",
        giver:"ピースキーパー",
        maps: {
            
            "ストタル": [
            ],
           
            
     
        },
        description: "12ゲージショットガンで任意の敵をヘッドショットで15kill(kill共有あり）",
        selected: false
    },
    {
        name: "Revision-Street of Tarkov",
        giver:"ピースキーパー",
        maps: {
            
            "ストタル": [{ left:31, top: 106.5,},{ left:85, top: 114.5,}, {left:54, top:52,},
            ],
           
            
     
        },
        description: "戦車にマーカー設置",
        selected: false
    },
    {
        name: "Your Car Needs a Servise",
        giver:"ピースキーパー",
        maps: {
            
            "ストタル": [{ left:42, top: 95,comment:"LexOs🔑&LexOs sect🔑"},
            ],
           
            
     
        },
        description: "カーディーラーでUSB入手する",
        selected: false
    },
    {
        name: "The Secret to Productivity",
        giver:"メカニック",
        maps: {
            
            "ストタル": [{ left:100 , top: 92,comment:"Relax🔑"},
            ],
           
            
     
        },
        description: "Hiveにいく",
        selected: false
    },
    {
        name: "Corporate Perks",
        giver:"メカニック",
        maps: {
            
            "ストタル": [{ left:18 , top: 70,comment:"Negotiatio🔑"},
            ],
           
            
     
        },
        description: "オフィスで会社が成功した秘密を解明する",
        selected: false
    },
    {
        name: "Watching You",
        giver:"メカニック",
        maps: {
            
            "ストタル": [{ left:70 , top: 55,comment:"Pnwd 215🔑"},
            ],
           
            
     
        },
        description: "オフィスで会社が成功した秘密を解明する",
        selected: false
    },
    {
        name: "The Door",
        giver:"メカニック",
        maps: {
            
            "ストタル": [{ left:15 , top: 57,comment:"Rusted🔑"},
            ],
           
            
     
        },
        description: "オフィスで会社が成功した秘密を解明する",
        selected: false
    },
    {
        name: "Broadcast-part2",
        giver:"メカニック",
        maps: {
            
            "ストタル": [{ left:25 , top: 94,},
            ],
           
            
     
        },
        description: "食料店内で血まみれの放送場所を確認する",
        selected: false
    },
    {
        name: "Dandies",
        giver:"ラグマン",
        maps: {
            
            "ストタル": [{ left:10 , top: 109.8,},
            ],
           
            
     
        },
        description: "RayBenchヒップスターの眼鏡とBomberビーニー被って15killする（kill共有あり）⇒装備を隠す",
        selected: false
    },
    {
        name: "Ballet Lover",
        giver:"ラグマン",
        maps: {
            
            "ストタル": [{ left:43.8 , top: 68,comment:"Skybridge🔑"},
            ],
           
            
     
        },
        description: "balletmeister'sのアパートを探す、生還する",
        selected: false
    },
    {
        name: "Audit",
        giver:"ラグマン",
        maps: {
            
            "ストタル": [{ left:92 , top: 81,},
            ],
           
            
     
        },
        description: "財務記録を手に入れる",
        selected: false
    },
    {
        name: "Audiophile",
        giver:"ラグマン",
        maps: {
            
            "ストタル": [{ left:43.8 , top: 68,comment:"Skybridge🔑"},
            ],
           
            
     
        },
        description: "ミュージシャンが集まる場所でギターピックを入手する",
        selected: false
    },
    {
        name: "Know Your Place!",
        giver:"ラグマン",
        maps: {
            
            "ストタル": [
            ],
            "インチェ": [
            ],
           
            
     
        },
        description: "ストタルで任意の敵を5kill(kill共有あり)⇒インチェに移動する⇒任意の敵を5killする（kill共有あり）",
        selected: false
    },
    {
        name: "The Huntsman Path-Crooked Cop",
        giver:"イエーガー",
        maps: {
            
            "ストタル": [
            ],
          
        },
        description: "コロンタイを倒す（kill共有）、コロンタイの警棒を引き渡す",
        selected: false
    },
    {
        name: "The Delicious Sausage",
        giver:"イエーガー",
        maps: {
            
            "ストタル": [{ left:-5 , top: 105,},{ left:25 , top: 93,},{ left:73 , top: 73,},{ left:98 , top: 75.2,},
            ],
          
        },
        description: "スーパー巡る、ソーセージ納品する",
        selected: false
    },
    {
        name: "Broadcast-Part3",
        giver:"イエーガー",
        maps: {
            
            "ストタル": [{ left:97, top: 85,},
            ],
          
        },
        description: "古い家の中で血まみれの放送があった場所を探す、生還する",
        selected: false
    },
    


























];

// タスクマーカー
const taskMarkers = document.getElementById("task-markers");

console.log("taskMarkers:", taskMarkers);

function showTaskMarkers() {

    taskMarkers.innerHTML = "";

    // タスクを表示する順番の色
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
        "rgb(85, 176, 250)"
    ];

    let colorIndex = 0;

    tasksData.forEach(function(task) {

        // 選択中 かつ 現在のマップに対応しているタスクだけ
        if (task.selected === true && task.maps[currentMap]) {

            const taskColor = taskColors[colorIndex % taskColors.length];

            // 現在のマップのマーカーだけ取得
            const markers = task.maps[currentMap];

            markers.forEach(function(markerData) {
                // 四角い範囲の場合
                if (markerData.type === "area") {

                    const area = document.createElement("div");

                    area.className = "task-area";
                    area.style.setProperty("--task-color", taskColor);

                    area.style.left = markerData.left + "%";
                    area.style.top = markerData.top + "%";
                    area.style.width = markerData.width + "%";
                    area.style.height = markerData.height + "%";
                    area.style.setProperty("--rotate", (markerData.rotate || 0) + "deg");
                    taskMarkers.appendChild(area);
                    }

                // ピンの場合
                else {



                    

                    const marker = document.createElement("div");
                    marker.className = "task-marker";
                    marker.style.setProperty("--task-color", taskColor);
                    marker.style.left = markerData.left + "%";
                    marker.style.top = markerData.top + "%";


                    taskMarkers.appendChild(marker);


// コメントがある場合だけ表示

               if (markerData.comment) {

             const comment = document.createElement("div");

              comment.className = "task-comment";
              comment.textContent = markerData.comment;

              comment.style.left = "calc(" + markerData.left + "% + " + (markerData.commentX || 0) + "px)";
              comment.style.top = "calc(" + markerData.top + "% + " + (markerData.commentY || 0) + "px)";

             taskMarkers.appendChild(comment);
              }







                }
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
    lighthouse: "Lighthouse.svg",
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