var vm = new Vue({
    el: "#app",
    data: {
        area: [
            { value: "", text: "全部" },
            { value: "400", text: "中區" },
            { value: "401", text: "東區" },
            { value: "402", text: "南區" },
            { value: "403", text: "西區" },
            { value: "404", text: "北區" },
            { value: "406", text: "北屯區" },
            { value: "407", text: "西屯區" },
            { value: "408", text: "南屯區" },
            { value: "411", text: "太平區" },
            { value: "412", text: "大里區" },
            { value: "413", text: "霧峰區" },
            { value: "414", text: "烏日區" },
            { value: "420", text: "豐原區" },
            { value: "421", text: "后里區" },
            { value: "422", text: "石岡區" },
            { value: "423", text: "東勢區" },
            { value: "424", text: "和平區" },
            { value: "426", text: "新社區" },
            { value: "427", text: "潭子區" },
            { value: "428", text: "大雅區" },
            { value: "429", text: "神岡區" },
            { value: "432", text: "大肚區" },
            { value: "433", text: "沙鹿區" },
            { value: "434", text: "龍井區" },
            { value: "435", text: "梧棲區" },
            { value: "436", text: "清水區" },
            { value: "437", text: "大甲區" },
            { value: "438", text: "外埔區" },
            { value: "439", text: "大安區" },
        ],
        SchoolSystem: [
            { value: "", text: "全部" },
            { value: "01", text: "大專院校" },
            { value: "02", text: "市立國民中學" },
            { value: "03", text: "市立國民小學" },
            { value: "04", text: "市立完全中學" },
            { value: "05", text: "市立中小學" },
            { value: "06", text: "私立高級中學" },
            { value: "07", text: "公私立高中職" },
            { value: "08", text: "國立中學" },
            { value: "09", text: "私立中小學" },
            { value: "10", text: "私立國中" },
            { value: "11", text: "私立國小" },
            { value: "12", text: "國立小學" },
            { value: "13", text: "私立實驗學校" },

        ],
        SchoolName:[
            {value:"",text:"全部"},{value:"193601",text:"光復國小"},{value:"193507",text:"東峰國中"},{value:"193511",text:"育英國中"},{value:"193602",text:"臺中國小"},{value:"193603",text:"大智國小"},{value:"193604",text:"東區成功國小"},{value:"193605",text:"進德國小"},{value:"193606",text:"力行國小"},{value:"193607",text:"樂業國小"},{value:"193504",text:"崇倫國中"},{value:"193512",text:"四育國中"},{value:"193613",text:"南區和平國小"},{value:"193614",text:"國光國小"},{value:"193615",text:"信義國小"},{value:"193657",text:"樹義國小"},{value:"193303",text:"忠明高中"},{value:"193501",text:"居仁國中"},{value:"193509",text:"光明國中"},{value:"193510",text:"向上國中"},{value:"193608",text:"忠孝國小"},{value:"193609",text:"忠信國小"},{value:"193610",text:"大同國小"},{value:"193611",text:"忠明國小"},{value:"193612",text:"西區中正國小"},{value:"193644",text:"大勇國小"},{value:"193502",text:"雙十國中"},{value:"193514",text:"五權國中"},{value:"193518",text:"立人國中"},{value:"193616",text:"北區太平國小"},{value:"193617",text:"北區中華國小"},{value:"193618",text:"篤行國小"},{value:"193619",text:"健行國小"},{value:"193620",text:"省三國小"},{value:"193642",text:"立人國小"},{value:"193654",text:"賴厝國小"},{value:"193315",text:"東山高中"},{value:"193505",text:"大德國中"},{value:"193506",text:"北新國中"},{value:"193517",text:"崇德國中"},{value:"193524",text:"三光國中"},{value:"193525",text:"四張犁國中"},{value:"193632",text:"北屯國小"},{value:"193633",text:"僑孝國小"},{value:"193634",text:"四張犁國小"},{value:"193635",text:"松竹國小"},{value:"193636",text:"軍功國小"},{value:"193637",text:"大坑國小"},{value:"193638",text:"逢甲國小"},{value:"193639",text:"建功國小"},{value:"193640",text:"北屯區新興國小"},{value:"193641",text:"仁愛國小"},{value:"193643",text:"北屯區文昌國小"},{value:"193647",text:"文心國小"},{value:"193648",text:"四維國小"},{value:"193653",text:"陳平國小"},{value:"193658",text:"東光國小"},{value:"193660",text:"仁美國小"},{value:"193313",text:"西苑高中"},{value:"193516",text:"中山國中"},{value:"193519",text:"漢口國中"},{value:"193520",text:"安和國中"},{value:"193521",text:"至善國中"},{value:"193526",text:"福科國中"},{value:"193621",text:"西屯國小"},{value:"193622",text:"西屯區泰安國小"},{value:"193623",text:"大鵬國小"},{value:"193624",text:"西屯區永安國小"},{value:"193625",text:"協和國小"},{value:"193626",text:"大仁國小"},{value:"193645",text:"重慶國小"},{value:"193649",text:"何厝國小"},{value:"193650",text:"國安國小"},{value:"193651",text:"上石國小"},{value:"193659",text:"上安國小"},{value:"193661",text:"長安國小"},{value:"193662",text:"惠來國小"},{value:"193664",text:"東海國小"},{value:"193316",text:"惠文高中"},{value:"193508",text:"黎明國中"},{value:"193522",text:"萬和國中"},{value:"193523",text:"大業國中"},{value:"193527",text:"大墩國中"},{value:"193627",text:"南屯國小"},{value:"193628",text:"鎮平國小"},{value:"193629",text:"文山國小"},{value:"193630",text:"春安國小"},{value:"193631",text:"黎明國小"},{value:"193646",text:"南屯區東興國小"},{value:"193652",text:"大新國小"},{value:"193655",text:"永春國小"},{value:"193656",text:"惠文國小"},{value:"193663",text:"大墩國小"},{value:"064336",text:"長億高中"},{value:"064525",text:"太平國中"},{value:"064526",text:"中平國中"},{value:"064543",text:"新光國中"},{value:"064721",text:"太平區太平國小"},{value:"064722",text:"宜欣國小"},{value:"064723",text:"新光國小"},{value:"064724",text:"坪林國小"},{value:"064725",text:"光隆國小"},{value:"064726",text:"黃竹國小"},{value:"064727",text:"頭汴國小"},{value:"064728",text:"東汴國小"},{value:"064740",text:"建平國小"},{value:"064742",text:"太平中華國小"},{value:"064745",text:"東平國小"},{value:"064750",text:"新平國小"},{value:"064758",text:"車籠埔國小"},{value:"064764",text:"長億國小"},{value:"064324",text:"市立大里高中"},{value:"064532",text:"成功國中"},{value:"064537",text:"光榮國中"},{value:"064544",text:"光正國中"},{value:"064547",text:"立新國中"},{value:"064548",text:"爽文國中"},{value:"064705",text:"大里國小"},{value:"064706",text:"內新國小"},{value:"064707",text:"崇光國小"},{value:"064708",text:"塗城國小"},{value:"064709",text:"瑞城國小"},{value:"064710",text:"健民國小"},{value:"064711",text:"草湖國小"},{value:"064738",text:"益民國小"},{value:"064748",text:"大元國小"},{value:"064752",text:"永隆國小"},{value:"064753",text:"美群國小"},{value:"064756",text:"立新國小"},{value:"064522",text:"霧峰國中"},{value:"064523",text:"光復國中小"},{value:"064712",text:"霧峰國小"},{value:"064713",text:"僑榮國小"},{value:"064714",text:"四德國小"},{value:"064715",text:"五福國小"},{value:"064716",text:"萬豐國小"},{value:"064717",text:"峰谷國小"},{value:"064718",text:"桐林國小"},{value:"064719",text:"復興國小"},{value:"064720",text:"光正國小"},{value:"064749",text:"吉峰國小"},{value:"064520",text:"烏日國中"},{value:"064521",text:"溪南國中"},{value:"064546",text:"光德國中"},{value:"064693",text:"烏日國小"},{value:"064694",text:"僑仁國小"},{value:"064695",text:"喀哩國小"},{value:"064696",text:"東園國小"},{value:"064697",text:"溪尾國小"},{value:"064698",text:"旭光國小"},{value:"064699",text:"五光國小"},{value:"064743",text:"九德國小"},{value:"064501",text:"豐原國中"},{value:"064502",text:"豐東國中"},{value:"064503",text:"豐南國中"},{value:"064545",text:"豐陽國中"},{value:"064601",text:"豐原國小"},{value:"064602",text:"瑞穗國小"},{value:"064603",text:"南陽國小"},{value:"064604",text:"富春國小"},{value:"064605",text:"豐村國小"},{value:"064606",text:"翁子國小"},{value:"064607",text:"豐田國小"},{value:"064608",text:"合作國小"},{value:"064751",text:"葫蘆墩國小"},{value:"064759",text:"福陽國小"},{value:"064308",text:"后綜高中"},{value:"064507",text:"后里國中"},{value:"064609",text:"內埔國小"},{value:"064610",text:"后里國小"},{value:"064611",text:"月眉國小"},{value:"064612",text:"七星國小"},{value:"064613",text:"育英國小"},{value:"064614",text:"后里區泰安國小"},{value:"064527",text:"石岡國中"},{value:"064643",text:"石岡國小"},{value:"064644",text:"土牛國小"},{value:"064529",text:"東勢國中"},{value:"064530",text:"東華國中"},{value:"064531",text:"東新國中"},{value:"064635",text:"東勢國小"},{value:"064636",text:"中山國小"},{value:"064637",text:"石城國小"},{value:"064638",text:"東勢區成功國小"},{value:"064639",text:"石角國小"},{value:"064640",text:"中科國小"},{value:"064641",text:"新成國小"},{value:"064642",text:"明正國小"},{value:"064747",text:"新盛國小"},{value:"064762",text:"東新國小"},{value:"064533",text:"和平國中"},{value:"064729",text:"和平區和平國小"},{value:"064731",text:"白冷國小"},{value:"064732",text:"博屋瑪國小"},{value:"064733",text:"中坑國小"},{value:"064734",text:"平等國小"},{value:"064735",text:"博愛國小"},{value:"064736",text:"自由國小"},{value:"064737",text:"梨山國中小"},{value:"064328",text:"新社高中"},{value:"064645",text:"新社國小"},{value:"064646",text:"東興國小"},{value:"064647",text:"大南國小"},{value:"064648",text:"協成國小"},{value:"064649",text:"大林國小"},{value:"064650",text:"崑山國小"},{value:"064651",text:"中和國小"},{value:"064730",text:"福民國小"},{value:"064504",text:"潭子國中"},{value:"064538",text:"潭秀國中"},{value:"064626",text:"潭子國小"},{value:"064627",text:"僑忠國小"},{value:"064628",text:"東寶國小"},{value:"064629",text:"新興國小"},{value:"064741",text:"潭陽國小"},{value:"064760",text:"頭家國小"},{value:"064505",text:"大雅國中"},{value:"064541",text:"大華國中"},{value:"064620",text:"大雅國小"},{value:"064621",text:"三和國小"},{value:"064622",text:"大明國小"},{value:"064623",text:"上楓國小"},{value:"064624",text:"汝鎏國小"},{value:"064625",text:"陽明國小"},{value:"064746",text:"文雅國小"},{value:"064765",text:"六寶國小"},{value:"064506",text:"神岡國中"},{value:"064551",text:"神圳國中"},{value:"064615",text:"神岡國小"},{value:"064616",text:"豐洲國小"},{value:"064617",text:"社口國小"},{value:"064618",text:"圳堵國小"},{value:"064619",text:"岸裡國小"},{value:"064519",text:"大道國中"},{value:"064700",text:"大肚國小"},{value:"064701",text:"瑞峰國小"},{value:"064702",text:"永順國小"},{value:"064703",text:"追分國小"},{value:"064704",text:"大忠國小"},{value:"064755",text:"山陽國小"},{value:"064761",text:"瑞井國小"},{value:"064515",text:"沙鹿國中"},{value:"064534",text:"北勢國中"},{value:"064535",text:"鹿寮國中"},{value:"064549",text:"公明國中"},{value:"064675",text:"沙鹿國小"},{value:"064676",text:"文光國小"},{value:"064677",text:"竹林國小"},{value:"064678",text:"北勢國小"},{value:"064679",text:"公明國小"},{value:"064680",text:"公館國小"},{value:"064681",text:"鹿峰國小"},{value:"064517",text:"龍井國中"},{value:"064518",text:"四箴國中"},{value:"064686",text:"龍山國小"},{value:"064687",text:"龍井國小"},{value:"064688",text:"龍津國小"},{value:"064689",text:"龍海國小"},{value:"064690",text:"龍港國小"},{value:"064691",text:"龍泉國小"},{value:"064692",text:"龍峰國小"},{value:"64350",text:"龍津高中"},{value:"063501",text:"善水國民中小學"},{value:"064342",text:"中港高中"},{value:"064516",text:"梧棲國中"},{value:"064661",text:"梧棲國小"},{value:"064662",text:"梧南國小"},{value:"064663",text:"梧棲中正國小"},{value:"064664",text:"永寧國小"},{value:"064744",text:"中港國小"},{value:"064757",text:"大德國小"},{value:"064513",text:"清水國中"},{value:"064514",text:"清泉國中"},{value:"064540",text:"清海國中"},{value:"064652",text:"清水國小"},{value:"064653",text:"西寧國小"},{value:"064654",text:"建國國小"},{value:"064655",text:"大秀國小"},{value:"064656",text:"三田國小"},{value:"064657",text:"甲南國小"},{value:"064658",text:"高美國小"},{value:"064659",text:"大楊國小"},{value:"064660",text:"東山國小"},{value:"064739",text:"槺榔國小"},{value:"064754",text:"吳厝國小"},{value:"064510",text:"大甲國中"},{value:"064511",text:"日南國中"},{value:"064539",text:"順天國中"},{value:"064665",text:"大甲國小"},{value:"064666",text:"德化國小"},{value:"064667",text:"大甲區文昌國小"},{value:"064668",text:"順天國小"},{value:"064669",text:"文武國小"},{value:"064670",text:"日南國小"},{value:"064671",text:"東明國小"},{value:"064672",text:"華龍國小"},{value:"064673",text:"西岐國小"},{value:"064674",text:"東陽國小"},{value:"064509",text:"外埔國中"},{value:"064630",text:"外埔國小"},{value:"064631",text:"安定國小"},{value:"064632",text:"鐵山國小"},{value:"064633",text:"馬鳴國小"},{value:"064634",text:"水美國小"},{value:"064512",text:"大安國中"},{value:"064682",text:"大安國小"},{value:"064683",text:"三光國小"},{value:"064684",text:"海墘國小"},{value:"064685",text:"大安區永安國小"}
        ],
        kind:[
            { value: "YPSA020", text: "親職教育或生命教育課程" }, { value: "YPSA030", text: "暑期青少年休閒育樂活動" }, { value: "YPSA040", text: "結合民間團體舉辦暑期少年休閒育樂活動" }
        ]
    },
    created() {
        //this.test();
    },
    methods: {
        open(btn) {
            if (btn == "search") {
                $('#myModal2').modal({ backdrop: 'static', keyboard: false }, 'show');
            }
            else {
                $('#myModal').modal({ backdrop: 'static', keyboard: false }, 'show');
            }
        },
        close(btn) {
            if (btn == "search") {
                $('#myModal2').modal('hide');
            }
            else {
                $('#myModal').modal('hide');
            }

        },
        mouseOver(id){
            if(id=="news")
            {
                document.getElementById(id).src = "images/iconB_01.png";
            }
            if (id == "activity") {
                document.getElementById(id).src = "images/iconB_02.png";
            }
            if (id == "register") {
                document.getElementById(id).src = "images/iconB_03.png";
            }
            if (id == "contactus") {
                document.getElementById(id).src = "images/iconB_04.png";
            }
            if (id == "question") {
                document.getElementById(id).src = "images/iconB_05.png";
            }
            if (id == "download") {
                document.getElementById(id).src = "images/iconB_06.png";
            }
            if (id == "login") {
                document.getElementById(id).src = "images/iconB_07.png";
            }

        },
        mouseOut(id){
            if (id == "news") {
                document.getElementById(id).src = "images/iconA_01.png";
            }
            if (id == "activity") {
                document.getElementById(id).src = "images/iconA_02.png";
            }
            if (id == "register") {
                document.getElementById(id).src = "images/iconA_03.png";
            }
            if (id == "contactus") {
                document.getElementById(id).src = "images/iconA_04.png";
            }
            if (id == "question") {
                document.getElementById(id).src = "images/iconA_05.png";
            }
            if (id == "download") {
                document.getElementById(id).src = "images/iconA_06.png";
            }
            if (id == "login") {
                document.getElementById(id).src = "images/iconA_07.png";
            }

        },
        url(id){
            if(id == "news")
            {
                location.href ="index.html"
            }
            if (id == "activity") {
                location.href = "activity.html"
            }
            if (id == "register") {
                location.href = "register.html"
            }
            if (id == "contactus") {
                location.href = "contactus.html"
            }
            if (id == "question") {
                location.href = "question.html"
            }
            if (id == "download") {
                location.href = "download.html"
            }
            if (id == "login") {
                location.href = "login.html"
            }
        },

        test() {
            alert("work");
        }
    }

})