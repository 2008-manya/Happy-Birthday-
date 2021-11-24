
function setup(){
    canvas=createCanvas(400, 400);
    canvas.position(100,300)
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
    }
    
    function draw(){
    image(video, 0,0,400,400);
    tint(tint_color);

    fill(0 , 128, 0);
    stroke(0,128,0);
    circle(365, 36, 70);

    fill(0 , 128, 0);
    stroke(0,128,0);
    circle(35, 36, 70);

    fill(0 , 128, 0);
    stroke(0,128,0);
    circle(36, 365, 70);

    fill(0 , 128, 0);
    stroke(0,128,0);
    circle(365, 365, 70);
    
    }
    
    function take_snapshot(){
        save('Manya_Project_.png');
    }
    
    
    function change(){
        tint_color= document.getElementById("colour").value;
    }