const body = document.body;
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
if (ctx == null) throw Error('Could not get canvas context.')

const setBackground = (ctx:CanvasRenderingContext2D, color: string) => {
    ctx.save();
    ctx.fillStyle = color;
    ctx.rect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.fill();
    ctx.restore();
}
// set canvas size
// set body style
    // remove margin
    // remove overflow
body.style.margin = '0px';
body.style.overflow = 'hidden';
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
body.appendChild(canvas);

setBackground(ctx, '#000000')