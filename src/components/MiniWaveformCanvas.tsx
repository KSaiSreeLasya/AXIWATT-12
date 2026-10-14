import React, { useEffect, useRef } from 'react';

export const MiniWaveformCanvas: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const render = () => {
      // Handle high DPI
      const width = canvas.clientWidth || 40;
      const height = canvas.clientHeight || 40;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.strokeStyle = '#006d44';
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const midY = height / 2;
      const amplitude = height * 0.35;
      const frequency = 0.15;

      for (let x = 0; x <= width; x++) {
        const y = midY + Math.sin(x * frequency + offset) * amplitude * Math.sin((x / width) * Math.PI);
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      offset += 0.08;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};
