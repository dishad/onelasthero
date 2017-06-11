module.exports = function(backgroundLoc) {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),

        canvasWidth = 962,
        canvasHeight = 482,
        xPos = 0,
        yPos = 0,
        
        background = new Image();
        
    background.src = backgroundLoc;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    background.onload = function() {
        context.drawImage(background, 0, 0);
        context.rect(xPos, yPos, 50, 50);
        context.stroke();

        function move(e) {
            if (e.keyCode === 37 || e.keyCode === 65) {
                xPos -= 10;
            }
            else if (e.keyCode === 38 || e.keyCode === 87) {
                yPos -= 10;
            }
            else if (e.keyCode === 39 || e.keyCode === 68) {
                xPos += 10;
            }
            else if (e.keyCode === 40 || e.keyCode === 83) {
                yPos += 10;
            }
            
            console.log(xPos, yPos);
            canvas.width = canvasWidth;
            context.drawImage(background, 0, 0);
            context.rect(xPos, yPos, 50, 50);
            context.stroke();
        }
 
        document.onkeydown = move;
    };
};