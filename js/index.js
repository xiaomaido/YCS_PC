
window.onload=function(){
    arr='分享我与萌宠的美好生活 在这看有意思的萌宠视频 吸氧干货满满的心得笔记 发现明星网红宠的另一面 '.split('')
    idx=0
    temp=[arr[idx]]
    slogan=document.getElementById('slogan')
    t = 0
    function showSlogan(){
        t=setTimeout(function(){
            idx++
            // console.log('arr[idx]', typeof arr[idx])
            if(arr[idx].trim()){
                temp.push(arr[idx])
            }
            else{
                temp=[]
            }
            slogan.innerHTML=[temp.join(''),'<span class="blink">|</span>'].join('')
            showSlogan()
            if(idx===arr.length-1) {
                idx=-1
            }
        }, 240)
    }
    showSlogan()

    defaultResponse={
        "data": {
            "data": [{
                "title": "周六的上午，朕不准你用💻",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/37eddc6c79286f0c.jpeg!/fwfh/375x375"],
                "id": 406
            }, {
                "title": "又是一个人的周末，无聊的让人头皮发麻",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/c8bae0a5b43f1669.jpeg!/fwfh/375x415"],
                "id": 405
            }, {
                "title": "泰迪柴的日常！",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/8a37a71c3e23f367.jpg!/fwfh/375x474"],
                "id": 404
            }, {
                "title": "每次出门前盖盖都要暗中观察 这货估计以为我看不到她...",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/3993897d0e7645a7.png!/fwfh/375x281"],
                "id": 403
            }, {
                "title": "撕逼总是来的很突然",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/f024e5029a10a822.jpeg!/fwfh/375x281"],
                "id": 401
            }, {
                "title": "好久没给主子照相了...😠 莫怪，莫怪我～🐱",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/3b12635744e82eed.jpeg!/fwfh/375x248"],
                "id": 400
            }, {
                "title": "这只🐭已经湿身了😁",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/9084bc98103479d9.jpeg!/fwfh/375x499"],
                "id": 399
            }, {
                "title": "夏天见到的小猫🐱，已经长大啦～🐟感谢小吴那么怕猫还不离不弃😂[捂脸]",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/ea089008a5a8995f.jpeg!/fwfh/375x500"],
                "id": 398
            }, {
                "title": "台北两个月实习结束。收拾行李准备离开。雨要下起来了",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/918e9032ccd2bffc.jpeg!/fwfh/366x651"],
                "id": 397
            }, {
                "title": "雨后🐶",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/00eef85cff02405e.png!/fwfh/375x473"],
                "id": 396
            }, {
                "title": "小姐姐 你能把电脑还我吗😔 这儿不适合你思考人生",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/b14af5f1ad880225.jpeg!/fwfh/375x280"],
                "id": 395
            }, {
                "title": "大家吼🐒 我是利奥，是个狮子座的boy",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/3fd71b50fa758079.jpeg!/fwfh/375x499"],
                "id": 394
            }, {
                "title": "一本满足🌸",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/357597932e452891.jpeg!/fwfh/375x375"],
                "id": 393
            }, {
                "title": "30岁的最后一个晚上 硬要喝一瓶Lolita...",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/54af4167975cda6c.jpeg!/fwfh/375x281"],
                "id": 392
            }, {
                "title": "luna's zone",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/7b016c36a3e943e3.jpeg!/fwfh/375x499"],
                "id": 391
            }, {
                "title": "震惊！职业ol下班后竟然变成这样",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/a9a3eae59377cf97.jpeg!/fwfh/375x499"],
                "id": 390
            }, {
                "title": "美好的周日晚上 与心灵手巧的依然 和always望眼欲穿的Kana🐱",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/57ecc87bde213fff.png!/fwfh/366x651"],
                "id": 388
            }, {
                "title": "我们家“大眼妹”和“王子”的手套宝宝，Q不Q呀[愉快][愉快][愉快]",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/69f503eaec2137b5.jpeg!/fwfh/375x250"],
                "id": 387
            }, {
                "title": "你个小不要脸的，赖在长椅吹风休息，不肯回家",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/6eb4ef960c034260.png!/fwfh/375x281"],
                "id": 386
            }, {
                "title": "正视琉璃瓶，秋水横波清❤️",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/0e53215290d2654b.png!/fwfh/375x499"],
                "id": 385
            }, {
                "title": "这才是遛狗的正确方式（美国 · Bellevue）",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/650ee71dc43106f9.png!/fwfh/366x651"],
                "id": 384
            }, {
                "title": "摩卡是一只没有节操和骄傲的猫～",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/0d91238eb2ce157b.jpeg!/fwfh/375x281"],
                "id": 383
            }, {
                "title": "粑粑 带伦家出去玩嘛 我保证乖乖的",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/27f6715c3554a1c6.jpeg!/fwfh/375x375"],
                "id": 382
            }, {
                "title": "朋友家的狗剃完毛之后 笑哭我了😂😂😂",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/993a0a7bb99cd297.jpeg!/fwfh/375x499"],
                "id": 381
            }, {
                "title": "土豆！又想睡哪",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/b2627d97b321f019.jpeg!/fwfh/375x281"],
                "id": 380
            }, {
                "title": "一只堂而皇之占领主位的汪😡😡😡",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/9a514fa0e001de43.png!/fwfh/375x503"],
                "id": 379
            }, {
                "title": "So far,和养一只宠物的感觉差不多，只是宠物这么大的时候已经可以自己吃饭自己睡觉啦……",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/d882f345d9c6eff4.jpeg!/fwfh/375x562"],
                "id": 378
            }, {
                "title": "早上出门前和某人说：今天泽哥不在家，我晚上要去她家帮忙铲💩。",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/a346d0fd44032c3d.jpeg!/fwfh/375x499"],
                "id": 377
            }, {
                "title": "想吃家里腊肉条子葱花火锅，白汤那种😍",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/688f86b1dd9cbb73.jpeg!/fwfh/375x499"],
                "id": 376
            }, {
                "title": "哪张是你的特写👋🏿",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/73ab16472849d536.jpeg!/fwfh/375x373"],
                "id": 375
            }, {
                "title": "昨天喝了三杯咖啡➡️昨晚失眠➡️今早很困➡️再喝咖啡…这是个死循环啊[微笑]",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/e946803a0a91b47e.jpeg!/fwfh/375x281"],
                "id": 374
            }, {
                "title": "爱你如初，么么哒......",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/9472828026c89301.jpeg!/fwfh/375x375"],
                "id": 373
            }, {
                "title": "从天而降三只刚出生的小奶猫，猫妈妈你去哪里了呢？",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/f22d9c163f7873a7.jpeg!/fwfh/375x375"],
                "id": 372
            }, {
                "title": "紫霞俩月没挨揍，家里人对她呵护备至，她俨然把自己当成了公主，霸道的停不下来欺负至尊宝。",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/0f3abb8789f9d963.png!/fwfh/375x405"],
                "id": 371
            }, {
                "title": "糟糕❗️是心动的感觉💓",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/1f398507c4d64a22.jpeg!/fwfh/375x288"],
                "id": 370
            }, {
                "title": "喵(๑•̀ㅁ•́ฅ)",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/361523fa7a2cfe91.jpeg!/fwfh/375x500"],
                "id": 369
            }, {
                "title": "糯米 你这喵🐱为什么这么会摆拍(^^)",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/e8290bd5219d48ea.jpeg!/fwfh/375x280"],
                "id": 360
            }, {
                "title": "我：叮当 快看镜头  叮当：哦😯",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/c40d663be1774eb4.jpeg!/fwfh/375x375"],
                "id": 358
            }, {
                "title": "分享一只因爬山而累到的狗狗",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/5e3f7c4beb365b5d.jpeg!/fwfh/375x375"],
                "id": 356
            }, {
                "title": "开学季，快要和他們兩個說再見了",
                "imgs": ["http://sfmimg.b0.upaiyun.com/prod_00/4c97843976cb5ecc.jpeg!/fwfh/375x375"],
                "id": 355
            }]
        }
    }
    itemWidth=window.innerWidth/8
    itemRowCount=Math.ceil(700/itemWidth)
    itemLimitCount=8*itemRowCount
    // console.log('itemRowCount', Math.ceil(700/itemWidth))
    pictures = document.getElementById('pictures')
    res={}
    xhr = null
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    //异步接受响应
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                res=JSON.parse(xhr.responseText)
                res=res&&res.data&&Array.isArray(res.data.data)&&res.data.data.length?res:defaultResponse
                renderPictures(res.data.data)
            } else{
                res=defaultResponse
                renderPictures(res.data.data)
            }
        }
    }

    // res=defaultResponse
    // renderPictures(res.data.data)
    // xhr.open("get","http://api.yangchongshe.com/peanut/eatIndex/postList?limit="+itemLimitCount+"10&offset=0", false)
    // xhr.send(null)

    function renderPictures(list){
        pictures.innerHTML=[
            list.map(function(d){
                return ['<div class="item-box" style="height:',(itemWidth),'px"><div class="icon item" title="氧宠社_',d.description.substring(0, 20),'" style="height:',(itemWidth),'px;background-image:url(',d.imgs[0],')"></div></div>'].join('')
            })
            .sort(function(a,b){
                return Math.random()<0.5
            })
            .join('')
        ].join('')
    }
    iphoneXSnapshop=document.getElementsByClassName('iphoneXSnapshop')[0]
   

    // for(var i=0,l=specials_li.length;i<l;i++) {
    //     var element=specials_li[i]
    //     element.onclick=function(){
           
    //     }
    // }
}