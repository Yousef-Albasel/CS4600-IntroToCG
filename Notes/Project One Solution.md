```javascript
function composite(bgImg, fgImg, fgOpac, fgPos) {

    const bgData = bgImg.data;

    const fgData = fgImg.data;

    for(let y = 0; y < fgImg.height; y++){

        for(let x = 0; x < fgImg.width; x++){

  

            // calculated indices for fg

            const fgIdx = (y * fgImg.width + x)  * 4;

  

            // get pos for the intersection between both images

            const bgX = x + fgPos.x;

            const bgY = y + fgPos.y;

            if (bgX >= 0 && bgX < bgImg.width && bgY >= 0 && bgY < bgImg.height) {

                // get idx for the bgdata

                const bgIndex = (bgY * bgImg.width + bgX) * 4;

                const alpha = fgOpac * fgData[fgIdx+3] / 255.0; // normalize alpha between 0.0 and 1.0

                for(let i = 0; i < 3; i++){

                    // alpha blending for RGB Channels

                    bgData[bgIndex+i] = Math.round(alpha * fgData[fgIdx+i] + (1 - alpha) * bgData[bgIndex+i]);

                }

                // alpha blending for the forth channel

                bgData[bgIndex+3] = Math.round(alpha * 255 + (1 - alpha) * bgData[bgIndex+3]);

            }

        }

    }

}
```