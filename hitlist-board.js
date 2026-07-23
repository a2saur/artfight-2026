/* Getting the Canvas */
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

const cPOLAROID_WIDTH = 150;
const cPOLAROID_HEIGHT = 200;
const cPOST_IT_WIDTH = 100;
const cPOST_IT_HEIGHT = 40;

const O_IMG = new Image();
O_IMG.src = "./images/O.png";
const X1_IMG = new Image();
X1_IMG.src = "./images/X-1.png";
const X2_IMG = new Image();
X2_IMG.src = "./images/X-2.png";
const X3_IMG = new Image();
X3_IMG.src = "./images/X-3.png";
const X_IMGs = [X1_IMG, X2_IMG, X3_IMG];

// EDIT THIS
const hitList = [
    {
        name:"Moth",
        artist:"lizimire",
        img_src:"https://images.artfight.net/attack/th_ai23Yok9g6jnW5J2JxPrKsj2Aho8hmYGbSo6VPNTuYv4Z7goFFFzgu2bPHhy.png?t=1783023543",
        hit:true,
        active:false,
    },
    {
        name:"Ophelia",
        artist:"Emiq00",
        img_src:"https://images.artfight.net/attack/th_LgdxWlbpue7UgmeZGdwtXBYpkAi9A6hAsfNeRBixxO8vfFvWAfVaTPUh80wf.png?t=1783111497",
        hit:true,
        active:false,
    },
    {
        name:"Andria",
        artist:"RubyIsAMyth",
        img_src:"https://images.artfight.net/attack/th_pt33whlyCMISzXMiF33PsuT0Z1TfWcO5zVVi7c8Yfu24cjQCWwt38yledSzl.png?t=1783257273",
        hit:true,
        active:false,
    },
    {
        name:"Ferrous & Dorian",
        artist:"Lizimire",
        img_src:"https://images.artfight.net/attack/th_s5oZGkYNTZS29x18WEMDfK7C5pVNcP2EQmFi1WAH3IKR6BmqwbYeTNXLtNvB.png?t=1783558741",
        hit:true,
        active:false,
    },
    {
        name:"dog that hates grapes",
        artist:"Lizimire",
        img_src:"https://images.artfight.net/attack/th_b9kdBJAxg8XCoXsnhGisZUzRHyBLTocVQD7WfxP1s5unvrbg2JAsWCZegwB5.png?t=1783872983",
        hit:true,
        active:false,
    },
    {
        name:"Jili",
        artist:"sayocae",
        img_src:"https://images.artfight.net/attack/th_kvv5VHa1YsA81sPC3IUw86NEYkt00vncrgjRm3Rusdaiznb9S6gtz0CmV7Ow.png?t=1783386767",
        hit:true,
        active:false,
    },
    {
        name:"Calico",
        artist:"cuttleryfish",
        img_src:"https://images.artfight.net/attack/th_2L0DFe0NR1lhOc4jdrr2x8YxmLFea977CGMJ43CyoX3tInG1oEEqMBa7Ua1b.png?t=1783550980",
        hit:true,
        active:false,
    },
    {
        name:"Osha",
        artist:"Derpitoo",
        img_src:"https://images.artfight.net/attack/th_7yxT3r3ljYIUVngzPEUoYmfZQtB2PCruGklyJ3Ybjlbm1qUv4hxS8TdxEK4k.png?t=1783300314",
        hit:true,
        active:false,
    },
    {
        name:"Minnie Moonstone",
        artist:"Mytholu",
        img_src:"https://images.artfight.net/attack/th_1swboGx0VX9mZo1PTJe99bHx6ibUdpyEzPjVYIM2ZaMQFG2MKSDGoJrIJjsh.png?t=1783777192",
        hit:true,
        active:false,
    },
    {
        name:"Silence",
        artist:"pinkmilkyshaky",
        img_src:"https://images.artfight.net/attack/th_ZGbSdGfxKLbPimI6W0KhbdGCeWJ86PCq6kRqcGrv2Ty1uBCbgtUskCWGGv26.png?t=1783867429",
        hit:true,
        active:false,
    },
    {
        name:"Nyx",
        artist:"SpiritHourglass",
        img_src:"https://images.artfight.net/attack/th_utuiNPsVj40yt5fIgaGKOw5hAKGF6I5SMeofdxiI3yXIHse87ragogOv4qtW.png?t=1783867821",
        hit:true,
        active:false,
    },
    {
        name:"Jolly seal",
        artist:"Randomkyle",
        img_src:"https://images.artfight.net/attack/th_A5jPkKBfGZ3lkNKMWeJNE5Ud1uBG5LttRdjd7PTrU0KVuIEU94Z5fMmB4I9i.png?t=1783868247",
        hit:true,
        active:false,
    },
    {
        name:"Velvet",
        artist:"_Ghostduck",
        img_src:"https://images.artfight.net/attack/th_cAyq8rivJioN0TkzaVkLE0yuywDEOUb6qWhQx2hSjXg5UGNvpN6ZH1Heqljc.png?t=1784302916",
        hit:true,
        active:false,
    },
    {
        name:"Fabi Djӓrv",
        artist:"PotatoHunter",
        img_src:"https://images.artfight.net/attack/th_Wzg3oN3FCBS7uzvAkDmDD291er4kHxgKak38sv2yfoU0V8pO8uKBf6hfSS9d.png?t=1784835893",
        hit:true,
        active:false,
    },
    {
        name:"Zoberry",
        artist:"Azophyte",
        img_src:"https://images.artfight.net/attack/th_oDascRvKTJl0X7s2k8TweSxtikl1pm2AMuH8v5iF3l3sPZtc0LtC9WP1WjTO.png?t=1784838303",
        hit:true,
        active:false,
    },
    {
        name:"Lizimire",
        artist:"lizimire",
        img_src:"https://images.artfight.net/attack/th_8wx9qVnU2Csa9xkA1ngKcrhqfbugrkY45gYaKahI0sfHFUQUX3HlSaN7JJ6O.png?t=1784838535",
        hit:true,
        active:false,
    },
];

const hitListLinks = [
    [0, 3],
    [0, 4],
    [3, 4],
]

const deliberateLinks = hitListLinks.length;

// Add positions
// initially space everything by W+75, H+75
// sqrt(n * (widthRatio / heightRatio))
let num_cols = Math.round(Math.sqrt(hitList.length * 3 / 4));
let col_spacing = cPOLAROID_WIDTH+75;
let row_spacing = cPOLAROID_HEIGHT+75;
for (let i = 0; i < hitList.length; i++){
    hitList[i].x = 100 + (Math.trunc(i/num_cols)*col_spacing)+Math.floor(Math.random() * 75);
    hitList[i].y = 50 + ((i%num_cols)*row_spacing)+Math.floor(Math.random() * 75);

    hitList[i].img = new Image();
    hitList[i].img.src = hitList[i].img_src;

    if (!hitList[i].hit){
        hitList[i].displayName = mysterize_text(hitList[i].name);
        hitList[i].displayArtist = mysterize_text(hitList[i].artist);
    }
}

// Add link pass points
let xDist;
let yDist;
for (let i = 0; i < hitListLinks.length; i++){
    hit1 = hitList[hitListLinks[i][0]];
    hit2 = hitList[hitListLinks[i][1]];
    xDist = Math.abs(hit1.x-hit2.x);
    yDist = Math.abs(hit1.y-hit2.y);
    hitListLinks[i].push(Math.floor(Math.random() * (xDist/2))+Math.min(hit1.x, hit2.x)+(xDist/2));
    hitListLinks[i].push(Math.floor(Math.random() * (yDist/2))+Math.min(hit1.y, hit2.y)+15+(yDist/2));
}
// Add more links
let duplicated;
for (let i = 0; i < hitList.length; i++){
    for (let j = 0; j < hitList.length; j++){
        if (i != j){
            if (Math.floor(Math.random() * 15) == 0){
                duplicated = false;
                for (let k = 0; k < hitListLinks.length; k++){
                    if (hitListLinks[k][0] == i && hitListLinks[k][1] == j){
                        duplicated = true;
                        break;
                    }
                    if (hitListLinks[k][1] == i && hitListLinks[k][0] == j){
                        duplicated = true;
                        break;
                    }
                }

                if (!duplicated){
                    hit1 = hitList[i];
                    hit2 = hitList[j];
    
                    hitListLinks.push([
                        i,
                        j,
                        Math.floor(Math.random() * Math.abs(hit1.x-hit2.x))+Math.min(hit1.x, hit2.x),
                        Math.floor(Math.random() * Math.abs(hit1.y-hit2.y))+Math.min(hit1.y, hit2.y)+15
                    ]);
                }
            }
        }
    }
}


// functions
function drawX(x, y, width, height, drawScale=1){
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 10;
    ctx.beginPath();

    ctx.moveTo(x*drawScale, y);
    ctx.lineTo((x + width)*drawScale, (y + height)*drawScale);

    ctx.moveTo((x + width)*drawScale, y*drawScale);
    ctx.lineTo(x*drawScale, (y + height)*drawScale);
    ctx.stroke();
}

function mysterize_text(displayText){
    let newText = "";
    let numMysteries = 0;
    for (let i = 0; i < displayText.length; i++) {
        if (Math.floor(Math.random() * (numMysteries**2 + 2)) == 0){
            newText += "?";
            numMysteries++;
        } else if (Math.floor(Math.random() * (numMysteries**2 + 2)) == 1){
            newText += "☐";
            numMysteries++;
        } else {
            newText += displayText.charAt(i);
        }
    }
    return newText;
}

function drawLink(hit1, hit2, passX, passY, offsetX, offsetY, color="red", drawScale=1){
    ctx.beginPath();
    // Establish the starting point of the parabola
    ctx.moveTo((hit1.x+offsetX)*drawScale, (hit1.y+offsetY)*drawScale); 
    // The peak/vertex will bend toward the pass coords
    ctx.quadraticCurveTo((passX+offsetX)*drawScale, (passY+offsetY)*drawScale, (hit2.x+offsetX)*drawScale, (hit2.y+offsetY)*drawScale); 

    // Render the line outline
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
}

function draw_polaroid(x, y, rotation, img, name, artist, hit=false, active=false, drawScale=1) {
    ctx.save();
    // Move origin to the pin
    ctx.translate(x*drawScale, y*drawScale);
    // Rotate around the pin
    ctx.rotate(rotation);

    let xStart = -cPOLAROID_WIDTH / 2;
    let yStart = 0;

    // Draw a shadow
    ctx.fillStyle = "#00000077";
    ctx.fillRect(
        (xStart-7)*drawScale,
        (yStart+7)*drawScale,
        (cPOLAROID_WIDTH-7)*drawScale,
        (cPOLAROID_HEIGHT+7)*drawScale
    );

    // Draw the polaroid
    ctx.fillStyle = "white";
    ctx.fillRect(
        xStart*drawScale,
        yStart*drawScale,
        cPOLAROID_WIDTH*drawScale,
        cPOLAROID_HEIGHT*drawScale
    );
    
    // Draw the background
    ctx.fillStyle = "#aaa";
    ctx.fillRect(
        (xStart+5)*drawScale,
        (yStart+5)*drawScale,
        (cPOLAROID_WIDTH-10)*drawScale,
        (cPOLAROID_WIDTH-10)*drawScale
    );

    // Draw the image
    if (!hit) ctx.filter = "grayscale(100%) contrast(500%)";
    ctx.drawImage(img, (xStart+5)*drawScale, (yStart+5)*drawScale, (cPOLAROID_WIDTH-10)*drawScale, (cPOLAROID_WIDTH-10)*drawScale);
    if (!hit) ctx.filter = "none";
    
    // Add the name
    let fontSize;
    if (name.length > 12){
        fontSize = 15*drawScale;
    } else if (name.length > 9){
        fontSize = 20*drawScale;
    } else {
        fontSize = 25*drawScale;
    }
    ctx.font = fontSize.toString()+"px sans-serif";
    ctx.fillStyle = "#000";
    ctx.fillText(name, (xStart+10)*drawScale, (yStart+cPOLAROID_WIDTH+30)*drawScale);

    // Draw X
    if (hit){
        // drawX(xStart*drawScale, yStart*drawScale, cPOLAROID_WIDTH*drawScale, cPOLAROID_WIDTH*drawScale);
        let idx = name.charCodeAt(0) % 3;
        ctx.drawImage(X_IMGs[idx], xStart*drawScale, yStart*drawScale, cPOLAROID_WIDTH*drawScale, cPOLAROID_WIDTH*drawScale);
    }

    // draw circle
    if (active){
        // ctx.strokeStyle = 'red';
        // ctx.lineWidth = 10;

        // ctx.beginPath();
        // ctx.arc((xStart+(cPOLAROID_WIDTH/2))*drawScale, (yStart+(cPOLAROID_WIDTH/2))*drawScale, ((cPOLAROID_WIDTH/2)-10)*drawScale, 0, 2 * Math.PI);
        // ctx.stroke();
        ctx.drawImage(O_IMG, xStart*drawScale, yStart*drawScale, cPOLAROID_WIDTH*drawScale, cPOLAROID_WIDTH*drawScale);
    }

    // Draw the post-it shadow
    ctx.fillStyle = "#00000077";
    ctx.fillRect(
        (xStart+cPOLAROID_WIDTH-cPOST_IT_WIDTH)*drawScale,
        (yStart+cPOLAROID_HEIGHT-cPOST_IT_HEIGHT+40)*drawScale,
        cPOST_IT_WIDTH*drawScale,
        cPOST_IT_HEIGHT*drawScale
    );

    // Draw the post-it
    if (hit){
        ctx.fillStyle = "#c8ecff";
    } else {
        ctx.fillStyle = "#fffbcf";
    }
    ctx.fillRect(
        (xStart+cPOLAROID_WIDTH-cPOST_IT_WIDTH)*drawScale,
        (yStart+cPOLAROID_HEIGHT-cPOST_IT_HEIGHT+30)*drawScale,
        cPOST_IT_WIDTH*drawScale,
        cPOST_IT_HEIGHT*drawScale
    );

    // Add the artist
    if (artist.length > 12){
        fontSize = 10*drawScale;
    } else {
        fontSize = 12*drawScale;
    }
    ctx.font = fontSize.toString()+"px sans-serif";
    ctx.fillStyle = "#000";
    ctx.fillText(artist, (xStart+cPOLAROID_WIDTH-cPOST_IT_WIDTH+10)*drawScale, (yStart+cPOLAROID_HEIGHT-cPOST_IT_HEIGHT+55)*drawScale);

    // Draw the pin
    ctx.beginPath();
    ctx.arc((xStart+(cPOLAROID_WIDTH/2))*drawScale, (yStart+7)*drawScale, 5*drawScale, 0, 2*Math.PI)
    ctx.fillStyle = "#00000077";
    ctx.fill();
    ctx.beginPath();
    ctx.arc((xStart+(cPOLAROID_WIDTH/2))*drawScale, (yStart+5)*drawScale, 5*drawScale, 0, 2*Math.PI)
    ctx.fillStyle = "#00b7ff";
    ctx.fill();

    ctx.restore();
}

let mouseDown = false;
let mousePos = {
    x:-1,
    y:-1
};
let prevMousePos = {
    x:-1,
    y:-1
};
let scrollOffsetX = 0;
let scrollOffsetY = 0;

let scrollScale = 1;

document.addEventListener("mousedown", function(e) { 
    mouseDown = true;
    xScale = cvs.width/cvs.getBoundingClientRect().width;
    yScale = cvs.height/cvs.getBoundingClientRect().height;
    mousePos.x = (e.x-cvs.getBoundingClientRect().left) * xScale;
    mousePos.y = (e.y-cvs.getBoundingClientRect().top) * yScale;
});
document.addEventListener("mouseup", function(e) { 
    mouseDown = false;
    xScale = cvs.width/cvs.getBoundingClientRect().width;
    yScale = cvs.height/cvs.getBoundingClientRect().height;
    mousePos.x = (e.x-cvs.getBoundingClientRect().left) * xScale;
    mousePos.y = (e.y-cvs.getBoundingClientRect().top) * yScale;
    prevMousePos.x = mousePos.x;
    prevMousePos.y = mousePos.y;
});
document.addEventListener("mousemove", function(e) { 
    xScale = cvs.width/cvs.getBoundingClientRect().width;
    yScale = cvs.height/cvs.getBoundingClientRect().height;
    mousePos.x = (e.x-cvs.getBoundingClientRect().left) * xScale;
    mousePos.y = (e.y-cvs.getBoundingClientRect().top) * yScale;
    if (!mouseDown){
        prevMousePos.x = mousePos.x;
        prevMousePos.y = mousePos.y;
    }
});
document.addEventListener("wheel", function(e) {
    const scrollY = e.deltaY/1000;
    if (scrollScale-scrollY >= 0.1){
        scrollScale -= scrollY;
    }
});

let mouseDX = 0;
let mouseDY = 0;
let movement = 0;
let frame = 0;
function draw(){
    // Cover background
    ctx.beginPath();
    ctx.fillStyle = "#1d1916";
    ctx.rect(0, 0, 800, 600);
    ctx.fill();

    frame++;

    // get mouse position
    mouseDX = 0;
    mouseDY = 0;
    if (mouseDown){
        if (mousePos.x != -1 && mousePos.y != -1){
            mouseDX = (mousePos.x-prevMousePos.x)/scrollScale;
            mouseDY = (prevMousePos.y-mousePos.y)/scrollScale;

            scrollOffsetX += mouseDX;
            scrollOffsetY -= mouseDY;

            // update mouse position
            prevMousePos.x = mousePos.x;
            prevMousePos.y = mousePos.y;
        }
    }
    // update amount of movement
    movement += Math.sqrt(mouseDX**2, mouseDY**2)/200;
    movement *= 0.9;

    // draw links
    for (let i = 0; i < hitListLinks.length; i++){
        if (i < deliberateLinks){
            drawLink(hitList[hitListLinks[i][0]], hitList[hitListLinks[i][1]], hitListLinks[i][2], hitListLinks[i][3], scrollOffsetX, scrollOffsetY, "rgb(0, 174, 255)", scrollScale);
        } else {
            drawLink(hitList[hitListLinks[i][0]], hitList[hitListLinks[i][1]], hitListLinks[i][2], hitListLinks[i][3], scrollOffsetX, scrollOffsetY, "red", scrollScale);
        }
    }

    // draw polaroids
    for (let i = 0; i < hitList.length; i++){
        if (hitList[i].hit){
            draw_polaroid(hitList[i].x+scrollOffsetX, hitList[i].y+scrollOffsetY, movement*Math.sin(frame/5), hitList[i].img, hitList[i].name, hitList[i].artist, hitList[i].hit, hitList[i].active, scrollScale);
        } else {
            // if (frame % 50 == 0){
            //     hitList[i].displayName = mysterize_text(hitList[i].name);
            //     hitList[i].displayArtist = mysterize_text(hitList[i].artist);
            // }
            draw_polaroid(hitList[i].x+scrollOffsetX, hitList[i].y+scrollOffsetY, movement*Math.sin(frame/5), hitList[i].img, hitList[i].displayName, hitList[i].displayArtist, hitList[i].hit, hitList[i].active, scrollScale);
        }
    }


    // Add label
    ctx.beginPath();
    ctx.fillStyle = "#00000077";
    ctx.rect(200, 0, 400, 75);
    ctx.fill();
    ctx.beginPath();

    ctx.fillStyle = "#FFF";
    ctx.rect(200, 0, 400, 60);
    ctx.fill();

    ctx.font = "30px sans-serif";
    ctx.fillStyle = "#000";
    ctx.fillText("A2_Doodle's Hitlist?", 255, 40);


    // draw lighting
    var gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, "#00000077");
    gradient.addColorStop(1, "#00000000");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    if (frame % 1000 == 0) frame = 0;
}

let game = setInterval(draw, 20);