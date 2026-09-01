"use client";

import {
  ChromaFlow,
  CursorRipples,
  DotGrid,
  FilmGrain,
  LinearGradient,
  Shader,
} from "shaders/react";

const TRAIL_DOT_SIZE = {
  type: "map",
  source: "trailFlow",
  channel: "alpha",
  inputMax: 1,
  inputMin: 0,
  outputMax: 1,
  outputMin: 0,
};

export function CursorTrailContactShader() {
  return (
    <Shader
      className="absolute inset-0 block h-full w-full"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    >
      <DotGrid
        id="trailDots"
        density={40}
        dotSize={TRAIL_DOT_SIZE}
        twinkle={0.9}
        visible={false}
      />
      <ChromaFlow id="trailFlow" intensity={1.4} radius={2.9} visible={false} />
      <LinearGradient
        colorA="#0f172a"
        colorB="#020617"
        colorSpace="hsl"
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 1 }}
      />
      <LinearGradient
        colorA="#020617"
        colorB="#22d3ee"
        colorSpace="hsl"
        end={{ x: 1, y: 0 }}
        maskSource="trailDots"
        start={{ x: 0, y: 1 }}
      />
      <CursorRipples />
      <FilmGrain strength={0.1} />
    </Shader>
  );
}
