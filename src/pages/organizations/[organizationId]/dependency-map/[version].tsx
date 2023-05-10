import { Layout } from '@/components';
import DependencyMapSidebar from '@/components/common/DependecyMapSidebar';
import {
  ChevronRight,
  CircleChevronRight,
  ClipboardText,
} from '@/components/icons';
import React, { useEffect, useRef, useState } from 'react';

const DependencyMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const drawNode = () => {
    if (contextRef.current !== null) {
      const nodeWidth = 1000,
        nodeHeight = 600;

      contextRef.current.strokeStyle = 'black';
      contextRef.current.lineWidth = 1;
      contextRef.current.strokeRect(10, 20, nodeWidth, nodeHeight);
      contextRef.current.font = '30px Arial';
      contextRef.current.fillText('Label', 10 + nodeWidth / 2 - 30, 20 + 30);

      contextRef.current.moveTo(10, 60);
      contextRef.current.lineTo(nodeWidth + 10, 60);
      contextRef.current.stroke();

      contextRef.current.fillStyle = 'transparent';
      contextRef.current?.fillRect(10, 20, nodeWidth, nodeHeight);

      contextRef.current.save();
      contextRef.current.strokeStyle = 'black';
      contextRef.current.lineWidth = 1;
      contextRef.current.strokeRect(20, 80, 300, 150);
      contextRef.current.font = '16px Arial';
      contextRef.current.fillStyle = 'black';
      contextRef.current.fillText('Hello', 20 + 300 / 2 - 16, 95);

      contextRef.current.moveTo(20, 100);
      contextRef.current.lineTo(300 + 20, 100);
      contextRef.current.stroke();

      contextRef.current.fillStyle = 'transparent';
      contextRef.current?.fillRect(20, 80, 300, 150);

      contextRef.current.restore();
    }
  };

  const startDrawing = ({ nativeEvent }: any) => {
    const { x, y } = nativeEvent;
    if (contextRef.current !== null) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(x, y);
      setIsDrawing(true);
    }
  };

  const finishDrawing = () => {
    if (contextRef.current !== null) {
      contextRef.current.closePath();
      setIsDrawing(false);
    }
  };

  const draw = ({ nativeEvent }: any) => {
    const { x, y } = nativeEvent;
    if (!isDrawing) {
      return;
    }

    if (contextRef.current !== null) {
      contextRef.current.lineTo(x, y);
      contextRef.current.stroke();
    }
  };

  const clearCanvas = () => {
    if (contextRef.current) {
      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(2, 2);
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        contextRef.current = ctx;
      }

      drawNode();
    }
  }, []);

  return (
    <div className='flex-grow w-full h-full flex flex-col relative bg-white'>
      <div className='px-7 py-6 flex justify-between bg-[#F7F8FA] border-b-2 border-[#E3E3E3] drop-shadow-md'>
        <div className='flex gap-3 text-lg font-semibold'>
          <span className='text-md_blue'>FPLMS</span>
          <CircleChevronRight className='text-md_blue' />
          <span className='text-primary_gray'>Battle Maids&apos; Domain</span>
          <ChevronRight className='text-md_blue' />
          <span className='text-primary_blue'>
            Kennguyen2000/facebook-instagram-mobile
          </span>
        </div>
        <ClipboardText className='text-dark_blue_2 cursor-pointer' />
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onClick={drawNode}
      ></canvas>
    </div>
  );
};

export default DependencyMap;

DependencyMap.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <main className='flex-grow flex bg-[#f5f5f5]'>
        <DependencyMapSidebar />
        {page}
      </main>
    </Layout>
  );
};
