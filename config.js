// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Happy BIRTH",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "15 GO DRIVE",  // 同上...
        "WE NEED TO TAKE",
        "PHOTOS TOGETHER",
        "IN JAPAN",
        "I DONTHAVE MUCH",
        "UR AP IS",
        "GONNABEFINE",
        "I CANT TYPE",
        "MORE THAN 15",
        "Letters",
        "At a time",
        "HAPPY U DAY",
        "U LIVED THROUGH",
        "5475 DAYS ALR",
        "DONT DIE",
        "BYEBYE",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Happy BIRTH": "./imgs/IMG_8754.jpg",
        "15 GO DRIVE": "./imgs/IMG_9219.jpg",
        "WE NEED TO TAKE": "./imgs/IMG_8793.jpg",
        "PHOTOS TOGETHER": "./imgs/IMG_8598.jpg",
        "IN JAPAN": "./imgs/IMG_8597.jpg",
        "I DONTHAVE MUCH": "./imgs/IMG_8595.jpg",
        "UR AP IS": "./imgs/IMG_7946.jpg",
        "GONNABEFINE": "./imgs/IMG_7382.jpg",
        "HAPPY U DAY": "./imgs/IMG_8549.jpg",
        "U LIVED THROUGH": "./imgs/IMG_8093.jpg",
        "5475 DAYS ALR": "./imgs/IMG_7707.JPG",
        "DONT DIE": "./imgs/IMG_7516.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Start",
        play: "Music",
        bannar_coming: "Colors",
        balloons_flying: "Something Missing",
        cake_fadein: "Cake？",
        light_candle: "Candles？",
        wish_message: "Weeee",
        story: "ClickMe",
    }
};
