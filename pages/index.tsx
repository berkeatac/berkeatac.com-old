"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { ReactHTMLElement, useEffect, useRef } from "react";

const Home: NextPage = () => {
  const canvasRef = useRef(null);
  var step = 0;
  function horizontalSine(ctx: CanvasRenderingContext2D, xOffset: number) {
    var width = ctx?.canvas.width;
    var height = ctx?.canvas.height;

    ctx?.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    var x = 0;
    var y = 0;
    var amplitude = 40;
    var frequency = 40;
    while (x < width) {
      y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
      ctx.lineTo(x, y);
      x++;
    }
    ctx.stroke();
    ctx.save();

    ctx.stroke();
    ctx.restore();
  }

  function draw(contextHorizontal: CanvasRenderingContext2D | null) {
    if (contextHorizontal) {
      contextHorizontal?.clearRect(0, 0, 1500, 1500);

      horizontalSine(contextHorizontal, step);
      contextHorizontal?.restore();

      step += 1;
      window.requestAnimationFrame(() => draw(contextHorizontal));
    }
  }

  function init(contextHorizontal: CanvasRenderingContext2D | null) {
    draw(contextHorizontal);
  }

  useEffect(() => {
    if (canvasRef.current) {
      var horizontalCanvas: HTMLCanvasElement = canvasRef.current;
      var contextHorizontal = horizontalCanvas?.getContext("2d");

      init(contextHorizontal);

      return () => {
        // cleanup
        contextHorizontal?.clearRect(0, 0, 1500, 1500);
        canvasRef.current = null;
      };
    }
  }, [canvasRef.current]);

  return (
    <>
      <h2 className="text-6xl leading-loose">I'm Berke</h2>
      <h3 className="text-4xl leading-relaxed">
        Frontend Developer
        {/* @ */}
        {/* <Link href={"https://solsten.io"} className="underline" target="_blank">
          Solsten
        </Link> */}
      </h3>
      <h3 className="text-4xl leading-relaxed">Berlin</h3>
      <h3 className="text-4xl leading-relaxed">React</h3>
      <canvas
        id="sine-horizontal"
        width="1500"
        height="500"
        ref={canvasRef.current}
      ></canvas>
    </>
  );
};

export default Home;
