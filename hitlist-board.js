/* Getting the Canvas */
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

const cPOLAROID_WIDTH = 150;
const cPOLAROID_HEIGHT = 200;
const cPOST_IT_WIDTH = 100;
const cPOST_IT_HEIGHT = 40;

// EDIT THIS
const hitList = [
    {
        name:"Moth",
        artist:"lizimire",
        img_src:"https://images.artfight.net/character/th_b5oSIksQJisucuFydrcWpl6gNVell1IoBcWk9d8jjDginr072ExnupPhl5sX.png?t=1782942570",
        hit:false,
        active:true,
    },
    {
        name:"Ophelia",
        artist:"Emiq00",
        img_src:"https://images.artfight.net/character/VH79bJfEpBgmHeaTOk86WPtPUuaS0hFJ2IOlDwUGQJTrDUAgMgGj7rKKumYB.jpeg?t=1659725685",
        hit:false,
        active:false,
    },
    {
        name:"Stardust",
        artist:"RubyIsAMyth",
        img_src:"https://images.artfight.net/character/th_75LABGBag8UjXxsW70wqMFJ7vWMBKQ07irn9ibM711t1jJIZ75TlAqHNuA9X.png?t=1751394201",
        hit:false,
        active:false,
    },
    {
        name:"Jili",
        artist:"sayocae",
        img_src:"https://images.artfight.net/character/th_Ev5Qn6jU7qUmR3jGNavkeDEywIMuf3vMhW3TCmK0iPncc5IanPI7Kl2IW1FT.png?t=1782128657",
        hit:false,
        active:false,
    },
];

const hitListLinks = [
    [0, 1],
    [1, 2],
    [2, 3],
]

const deliberateLinks = hitListLinks.length;

// Add positions
// initially space everything by W+75, H+75
let num_cols = Math.round(Math.sqrt(hitList.length));
let col_spacing = cPOLAROID_WIDTH+75;
let row_spacing = cPOLAROID_HEIGHT+75;
for (let i = 0; i < hitList.length; i++){
    hitList[i].x = 100 + ((i%num_cols)*col_spacing)+Math.floor(Math.random() * 75);
    hitList[i].y = 50 + (Math.trunc(i/num_cols)*row_spacing)+Math.floor(Math.random() * 75);

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
            if (Math.floor(Math.random() * 3) == 0){
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
function drawX(x, y, width, height){
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 10;
    ctx.beginPath();

    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y + height);

    ctx.moveTo(x + width, y);
    ctx.lineTo(x, y + height);
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

function drawLink(hit1, hit2, passX, passY, offsetX, offsetY, color="red"){
    ctx.beginPath();
    // Establish the starting point of the parabola
    ctx.moveTo(hit1.x+offsetX, hit1.y+offsetY); 
    // The peak/vertex will bend toward the pass coords
    ctx.quadraticCurveTo(passX+offsetX, passY+offsetY, hit2.x+offsetX, hit2.y+offsetY); 

    // Render the line outline
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
}

function draw_polaroid(x, y, rotation, img, name, artist, hit=false, active=false) {
    ctx.save();
    // Move origin to the pin
    ctx.translate(x, y);
    // Rotate around the pin
    ctx.rotate(rotation);

    let xStart = -cPOLAROID_WIDTH / 2;
    let yStart = 0;

    // Draw a shadow
    ctx.fillStyle = "#00000077";
    ctx.fillRect(
        xStart-7,
        yStart+7,
        cPOLAROID_WIDTH-7,
        cPOLAROID_HEIGHT+7
    );

    // Draw the polaroid
    ctx.fillStyle = "white";
    ctx.fillRect(
        xStart,
        yStart,
        cPOLAROID_WIDTH,
        cPOLAROID_HEIGHT
    );
    
    // Draw the background
    ctx.fillStyle = "#aaa";
    ctx.fillRect(
        xStart+5, yStart+5,
        cPOLAROID_WIDTH-10,
        cPOLAROID_WIDTH-10
    );

    // Draw the image
    if (!hit) ctx.filter = "grayscale(100%) contrast(500%)";
    ctx.drawImage(img, xStart+5, yStart+5, cPOLAROID_WIDTH-10, cPOLAROID_WIDTH-10);
    if (!hit) ctx.filter = "none";
    
    // Add the name
    ctx.font = "25px sans-serif";
    ctx.fillStyle = "#000";
    ctx.fillText(name, xStart+10, yStart+cPOLAROID_WIDTH+30);

    // Draw X
    if (hit){
        drawX(xStart, yStart, cPOLAROID_WIDTH, cPOLAROID_WIDTH);
    }

    // draw circle
    if (active){
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.arc(xStart+(cPOLAROID_WIDTH/2), yStart+(cPOLAROID_WIDTH/2), (cPOLAROID_WIDTH/2)-10, 0, 2 * Math.PI);
        ctx.stroke();
    }

    // Draw the post-it shadow
    ctx.fillStyle = "#00000077";
    ctx.fillRect(
        xStart+cPOLAROID_WIDTH-cPOST_IT_WIDTH,
        yStart+cPOLAROID_HEIGHT-cPOST_IT_HEIGHT+40,
        cPOST_IT_WIDTH,
        cPOST_IT_HEIGHT
    );

    // Draw the post-it
    if (hit){
        ctx.fillStyle = "#c8ecff";
    } else {
        ctx.fillStyle = "#fffbcf";
    }
    ctx.fillRect(
        xStart+cPOLAROID_WIDTH-cPOST_IT_WIDTH,
        yStart+cPOLAROID_HEIGHT-cPOST_IT_HEIGHT+30,
        cPOST_IT_WIDTH,
        cPOST_IT_HEIGHT
    );

    // Add the artist
    ctx.font = "12px sans-serif";
    ctx.fillStyle = "#000";
    ctx.fillText(artist, xStart+cPOLAROID_WIDTH-cPOST_IT_WIDTH+10, yStart+cPOLAROID_HEIGHT-cPOST_IT_HEIGHT+55);

    // Draw the pin
    ctx.beginPath();
    ctx.arc(xStart+(cPOLAROID_WIDTH/2), yStart+7, 5, 0, 2*Math.PI)
    ctx.fillStyle = "#00000077";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(xStart+(cPOLAROID_WIDTH/2), yStart+5, 5, 0, 2*Math.PI)
    ctx.fillStyle = "#00b7ff";
    ctx.fill();

    ctx.restore();
}

// const TEST_IMG = new Image();
// TEST_IMG.src = "./Characters/Kert.png";

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
            mouseDX = mousePos.x-prevMousePos.x;
            mouseDY = prevMousePos.y-mousePos.y;

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
            drawLink(hitList[hitListLinks[i][0]], hitList[hitListLinks[i][1]], hitListLinks[i][2], hitListLinks[i][3], scrollOffsetX, scrollOffsetY, "rgb(0, 174, 255)");
        } else {
            drawLink(hitList[hitListLinks[i][0]], hitList[hitListLinks[i][1]], hitListLinks[i][2], hitListLinks[i][3], scrollOffsetX, scrollOffsetY, "red");
        }
    }

    // draw polaroids
    for (let i = 0; i < hitList.length; i++){
        if (hitList[i].hit){
            draw_polaroid(hitList[i].x+scrollOffsetX, hitList[i].y+scrollOffsetY, movement*Math.sin(frame/5), hitList[i].img, hitList[i].name, hitList[i].artist, hitList[i].hit, hitList[i].active);
        } else {
            // if (frame % 50 == 0){
            //     hitList[i].displayName = mysterize_text(hitList[i].name);
            //     hitList[i].displayArtist = mysterize_text(hitList[i].artist);
            // }
            draw_polaroid(hitList[i].x+scrollOffsetX, hitList[i].y+scrollOffsetY, movement*Math.sin(frame/5), hitList[i].img, hitList[i].displayName, hitList[i].displayArtist, hitList[i].hit, hitList[i].active);
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