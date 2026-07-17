/* Getting the Canvas */
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");



const ARTFIGHT_CHARS = [
    {
        name:"Catflap",
        link:"https://artfight.net/character/8539212.catflap",
        image:"https://images.artfight.net/character/th_YLDjcINj60jDVU75ACpJhMPhuzRw2J3SqtqXiLzigXYjsb5krhFCUHQR80MA.png?t=1780429147",
        tags:""
    },
    {
        name:"Chiyo Hyakuya",
        link:"https://artfight.net/character/8966669.chiyo-hyakuya-vampire",
        image:"https://images.artfight.net/character/th_phJPzBV8SlsOteKliwlrIo8RpNDXSyN1y0UsVFeMxrx8pqrO4VnJKCAKkkG8.png?t=1781699587",
        tags:"dramatic"
    },
    {
        name:"Honkai Starrail Sona",
        link:"https://artfight.net/character/8470164.honkai-starrail-sona",
        image:"https://images.artfight.net/character/th_3jDQadTYm4VnT0IY9xUiH2rkzTnHIPmSrqO3Mb919kH7F52rCXHGRtKOu1WA.png?t=1783289963",
        tags:"glowy, style-match"
    },
    {
        name:"Apatite/Leto",
        link:"https://artfight.net/character/9596794.apatiteleto",
        image:"https://images.artfight.net/character/th_QIRVDXEVtXNqc7dkLSGEDpimrJxHqNR8v6t6N5J1EwOhB0IiR6fMmgLNno6P.png?t=1783182421",
        tags:"glowy, animation"
    },
    {
        name:"Beetle",
        link:"https://artfight.net/character/10451696.beetle",
        image:"https://images.artfight.net/character/th_UsFSNrJXN8td8eKz3brKzqrJHdzFghVDiWfsdEtbsnZZaNunEFB3raYj4mko.png?t=1783319813",
        tags:"creature, animation"
    },
    {
        name:"Althea",
        link:"https://artfight.net/character/10140234.althea",
        image:"https://images.artfight.net/character/th_PKZdH8jwi3coZT965zoCyCgm8MW9ybFHP0N2Z2Wbdv2idxpXjBAxChkrHHxZ.png?t=1783012228",
        tags:""
    },
    {
        name:"Nyx",
        link:"https://artfight.net/character/10119733.nyx",
        image:"https://images.artfight.net/character/th_tJljwl3PAR24cPvtE4fDeP2Lm92yZdTsE5bCQFeIZEIkoRylL0rZbs8GlWlA.png?t=1782998682",
        tags:"pop-art"
    },
    {
        name:"Val (Valli)",
        link:"https://artfight.net/character/8303926.val-valli",
        image:"https://images.artfight.net/character/th_rspbNMrZ5VSgmFdKF7LINepdMR8FHdoDRPVAgtuvVHyIWMCIdS2yChzKj7Io.png?t=1777615163",
        tags:""
    },
    {
        name:"Ace (Persona)",
        link:"https://artfight.net/character/7582214.ace-persona-3",
        image:"https://images.artfight.net/character/th_8uGB9HMgBwYObKLCRgNWyN20C4sMfiKdgaj2SdiF5SUi0FCBmP9rm5ur5gT4.png?t=1778925894",
        tags:"pop-art"
    },
    {
        name:"Sunny",
        link:"https://artfight.net/character/3176212.sunny",
        image:"https://images.artfight.net/character/th_NPSvh71kGHzl4bZSSyKQrPyKEFPamtcnW2XKdib6iMFgfJuAP0BOkTVovL3n.png?t=1687600865",
        tags:"creature, animation"
    },
    {
        name:"Archie Gray",
        link:"https://artfight.net/character/6231625.archie",
        image:"https://images.artfight.net/character/7L6DX4cQ3LlXXQT8JD0YCKjddyOJBp0rE0RDffXRYO5RfJNargyIoRxcwJ4w.png?t=1751176619",
        tags:""
    },
    {
        name:"Rhys Vairyluz",
        link:"https://artfight.net/character/8555028.rhys-vairyluz",
        image:"https://images.artfight.net/character/th_GYnZ7YcgCvfyGhpb7XRq0FQsdPr2Xsc2SAe1y4J7kmMP0G9orIEXx463ep1N.png?t=1781749770",
        tags:""
    },
    {
        name:"Brick",
        link:"https://artfight.net/character/7432616.brick",
        image:"https://images.artfight.net/character/th_eaFdL2p8XplydQmdPpGYhW4EnZFklJ7Zisf79yNRsVR0YcCiqWaFYXIUqVK6.png?t=1751748866",
        tags:""
    },
    {
        name:"Ainsley",
        link:"https://artfight.net/character/6870047.ainsley",
        image:"https://images.artfight.net/character/th_CdisKZSfTfHuUHw5fximxylFBmN9sB3DTBLZFTA9eRfVPixai855jphKv6my.png?t=1751267336",
        tags:""
    },
    {
        name:"Konoi",
        link:"https://artfight.net/character/8981962.main-konoi",
        image:"https://artfight.net/character/8981962.main-konoi",
        tags:""
    },
    {
        name:"Ari'el",
        link:"https://artfight.net/character/9572395.ariel",
        image:"https://images.artfight.net/character/th_rG0iWS1CfqTCTLQGDUBlSCz6nDNdqDdITrIcTofvGFZfoQ00ZyKQbP58kKFq.png?t=1782562493",
        tags:"glowy"
    },
    {
        name:"CC",
        link:"https://artfight.net/character/9572423.cc",
        image:"https://images.artfight.net/character/th_1gBgpY7iVANcCmVaHpAB2gBR14Oz1gBdCGIRpf31OLScD7m5QJiY0iITHmNQ.png?t=1782562574",
        tags:""
    },
    {
        name:"Vera",
        link:"https://artfight.net/character/9572425.vera",
        image:"https://images.artfight.net/character/th_BoczNSJYAJvuK93loX9LWlcBDEV6lsA2MsQTcTX0U3QtNsAnEXkED9pfg3uH.png?t=1782562584",
        tags:""
    },
    {
        name:"Keyara",
        link:"https://artfight.net/character/6352142.keyara",
        image:"https://images.artfight.net/character/th_q4wbYUaB55BB62anYlh7WaL0yAdAJBbaTYEgv8EwLnTAw5SN0RpmovegG8JK.png?t=1750538939",
        tags:"style-match"
    },
    {
        name:"Skitt",
        link:"https://artfight.net/character/6461440.skitt",
        image:"https://images.artfight.net/character/th_5rdeUQsCjkS1zVaOSr5UcKJ1JiqVedqpGoz2iVstZUEtLSwYRZge45RO8L8p.png?t=1750708052",
        tags:"glowy, creature"
    },
    {
        name:"Mintz",
        link:"https://artfight.net/character/7302841.mintz",
        image:"https://images.artfight.net/character/th_KmTQqabf4Oj7DT3fCYQwpm7N4muTmmyIPBSLPPjWyv2xuM8y7OFvTAzrz4Yq.png?t=1751566235",
        tags:"glowy"
    },
    {
        name:"Tokoro Izumi",
        link:"https://artfight.net/character/4080648.tokoro-izumi-gi",
        image:"https://images.artfight.net/character/th_0xtV3uYCCKs0Rqlcv7ns85BsT1bQoINv6gkJNUs7KUUovxvWr7udeSodCXr6.jpg?t=1715997288",
        tags:""
    },
    {
        name:"Jackiie",
        link:"https://artfight.net/character/4485728.jackiie",
        image:"https://images.artfight.net/character/th_E23AyKoxh7bJwRjs3n2ReuExkTev9ytd0UKEfz6ZAi9K4yitmpzWsCGZnVd4.png?t=1718860942",
        tags:""
    },
    {
        name:"Sous Chef",
        link:"https://artfight.net/character/8518327.sous-chef",
        image:"https://images.artfight.net/character/th_PP4Lxtcqv3L7YjJncMGV5tWc2J3Q4vjhYy4TVhnXMRieP9ec8eNY8YvoDD8W.gif?t=1780282789",
        tags:"creature"
    },
    {
        name:"Rika Tanaka",
        link:"https://artfight.net/character/6454489.rika-tanaka",
        image:"https://images.artfight.net/character/th_PsULTDdom5aoSlcgKp0FjWVZN2LHhItwuVYBlQgvOqn6P5xsZ19GVpgscG1n.png?t=1751824886",
        tags:"style-match"
    },
    {
        name:"Yutsu",
        link:"https://artfight.net/character/2458129.yutsu",
        image:"https://images.artfight.net/character/th_fWntKbLjTMZP0rFPW18TOJq0ZxJtgXFqoQTGB8P4Wbd5edxj5sRMErVxPWWZ.png?t=1781644552",
        tags:"pop-art"
    },
    {
        name:"XMNDSBC",
        link:"https://artfight.net/character/10384547.xmndsbc",
        image:"https://images.artfight.net/character/th_inAePr8plQcdHMvwRO5D5DoEOtMXjjNOmfQSbQ69DrLBf6CguQHN8Cbi3iZl.png?t=1783237536",
        tags:""
    },
    {
        name:"Blorbo",
        link:"https://artfight.net/character/10396545.blorbo",
        image:"https://images.artfight.net/character/th_Q6skJaj6bN1yAodBFrKGGRe7hBfUbSCuafogzPhs1V88tm0IBgrALkzvGl38.png?t=1783259243",
        tags:"silly, creature"
    },
    {
        name:"Blorbo Bleepus",
        link:"https://artfight.net/character/10499898.blorbo-bleepus",
        image:"https://images.artfight.net/character/th_fjsPuiLSnILj8OhHVKT2y9sMuE22LDj4IYlhfD8BWxpChaJCwCth6lrS6YND.png?t=1783386368",
        tags:"silly, creature"
    },
    {
        name:"Jelly",
        link:"https://artfight.net/character/10687006.jelly-silly-kitty",
        image:"https://images.artfight.net/character/th_wmTJ5lHVqEjRg4lSrWLS5r87e0MXwfltO84raXZRn5BgaoGZX2Hh1QXVCQSZ.png?t=1783738234",
        tags:""
    },
    {
        name:"",
        link:"",
        image:"",
        tags:""
    },
];

for (let i = 0; i < ARTFIGHT_CHARS.length; i++){
    ARTFIGHT_CHARS[i].img_src = new Image();
    ARTFIGHT_CHARS[i].img_src.src = ARTFIGHT_CHARS[i].image;
}


BUTTON_X = 700;
BUTTON_Y = 500;
BUTTON_W = 50;
BUTTON_H = 50;

SITE_BUTTON_X = 415;
SITE_BUTTON_Y = 250;
SITE_BUTTON_W = 150;
SITE_BUTTON_H = 50;

spinning = 0;
holdSpeed = false;
charSelected = -1;
currentIdx = 0;
let mousePos = {
    x:-1,
    y:-1
};
buttonClicking = false;
siteButtonClicking = false;
document.addEventListener("mousedown", function(e) { 
    xScale = cvs.width/cvs.getBoundingClientRect().width;
    yScale = cvs.height/cvs.getBoundingClientRect().height;
    mousePos.x = (e.x-cvs.getBoundingClientRect().left) * xScale;
    mousePos.y = (e.y-cvs.getBoundingClientRect().top) * yScale;

    if (mousePos.x < BUTTON_X+BUTTON_W && mousePos.x > BUTTON_X){
        if (mousePos.y < BUTTON_Y+BUTTON_H && mousePos.y > BUTTON_Y){
            buttonClicking = true;
            holdSpeed = true;
            spinning = 300;
            charSelected = Math.floor(Math.random() * ARTFIGHT_CHARS.length);
        }
    }

    if (spinning == 0 && charSelected != -1){
        if ((mousePos.x < SITE_BUTTON_X+SITE_BUTTON_W && mousePos.x > SITE_BUTTON_X) &&
            (mousePos.y < SITE_BUTTON_Y+SITE_BUTTON_H && mousePos.y > SITE_BUTTON_Y)) {
                siteButtonClicking = true;
                window.open(ARTFIGHT_CHARS[charSelected].link, '_blank');
        }

        if ((mousePos.x < 695 && mousePos.x > 675) &&
                (mousePos.y < 150 && mousePos.y > 130)) {
            charSelected = -1;
        }
    }
});
document.addEventListener("mouseup", function(e) { 
    buttonClicking = false;
    siteButtonClicking = false;
});
document.addEventListener("mousemove", function(e) { 
    xScale = cvs.width/cvs.getBoundingClientRect().width;
    yScale = cvs.height/cvs.getBoundingClientRect().height;
    mousePos.x = (e.x-cvs.getBoundingClientRect().left) * xScale;
    mousePos.y = (e.y-cvs.getBoundingClientRect().top) * yScale;
});

rotatedAmount = 0;
idxOffset = 0;
function draw(){
    // Cover background
    ctx.beginPath();
    ctx.fillStyle = "#1d1916";
    ctx.rect(0, 0, 800, 600);
    ctx.fill();

    // Spin
    for (let i = 0; i < 8; i++){
        ctx.beginPath();
        if (i % 2 == 0){
            ctx.fillStyle = "#d0cdca";
        } else {
            ctx.fillStyle = "#36201f";
        }
        ctx.rect(200, (100*i)+rotatedAmount, 400, 100);
        ctx.fill();
        ctx.font = "35px sans-serif";
        if (i % 2 == 0){
            ctx.fillStyle = "#141414";
        } else {
            ctx.fillStyle = "rgb(228, 226, 226)";
        }
        ctx.fillText(ARTFIGHT_CHARS[(i+idxOffset) % ARTFIGHT_CHARS.length].name, 230, 60+(100*i)+rotatedAmount);
        if (spinning == 10){
            if (((i+idxOffset) % ARTFIGHT_CHARS.length) == charSelected){
                if ((60+(100*i)+rotatedAmount < 400) && (60+(100*i)+rotatedAmount > 200)){
                    holdSpeed = false;
                    // spinning = 0;
                }
            }
        }
    }
    if (spinning == 0 && charSelected == -1) {
        rotatedAmount -= 1;
    }
    rotatedAmount -= spinning;
    if (rotatedAmount <= -200){
        rotatedAmount = 0;
        idxOffset += 2;
    }

    // Spin button
    ctx.beginPath();
    if (buttonClicking){
        ctx.fillStyle = "#0d5400";
    } else {
        if ((mousePos.x < BUTTON_X+BUTTON_W && mousePos.x > BUTTON_X) &&
            (mousePos.y < BUTTON_Y+BUTTON_H && mousePos.y > BUTTON_Y)) {
                ctx.fillStyle = "#20d300";
        } else {
            ctx.fillStyle = "#26ff00";
        }
    }
    ctx.rect(BUTTON_X, BUTTON_Y, BUTTON_W, BUTTON_H);
    ctx.fill();
    
    // Results
    if (spinning == 0){
        if (charSelected != -1){
            ctx.beginPath();
            ctx.fillStyle = "#000000aa";
            ctx.rect(175, 125, 550, 250);
            ctx.fill();
            
            ctx.beginPath();
            if ((mousePos.x < 695 && mousePos.x > 675) &&
                (mousePos.y < 150 && mousePos.y > 130)) {
                ctx.fillStyle = "#a60000";
            } else {
                ctx.fillStyle = "#ff0000";

            }
            ctx.rect(675, 130, 20, 20);
            ctx.fill();

            ctx.drawImage(ARTFIGHT_CHARS[charSelected].img_src, 200, 150, 200, 200);
            
            ctx.font = "30px sans-serif";
            ctx.fillStyle = "#FFF";
            ctx.fillText(ARTFIGHT_CHARS[charSelected].name, SITE_BUTTON_X, 200);
            
            ctx.beginPath();
            if (siteButtonClicking){
                ctx.fillStyle = "#2b3e60";
            } else {
                if ((mousePos.x < SITE_BUTTON_X+SITE_BUTTON_W && mousePos.x > SITE_BUTTON_X) &&
                    (mousePos.y < SITE_BUTTON_Y+SITE_BUTTON_H && mousePos.y > SITE_BUTTON_Y)) {
                        ctx.fillStyle = "#71b0c6";
                } else {
                    ctx.fillStyle = "#88c7de";
                }
            }
            ctx.rect(SITE_BUTTON_X, SITE_BUTTON_Y, SITE_BUTTON_W, SITE_BUTTON_H);
            ctx.fill();

            ctx.font = "25px sans-serif";
            ctx.fillStyle = "#000";
            ctx.fillText("Visit Page", SITE_BUTTON_X+15, SITE_BUTTON_Y+34);
        }
    } else {
        spinning *= 0.95;
        // spinning -= 10;
        if (spinning < 1){
            spinning = 0;
        }
        if (spinning < 10 && holdSpeed){
            spinning = 10;
        }
    }

    console.log(holdSpeed);
}

let game = setInterval(draw, 20);