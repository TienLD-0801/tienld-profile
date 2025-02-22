'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import { CameraControls, Html, Shadow, useGLTF } from '@react-three/drei';
import Object from '../Object/Object';
import './index.css';

export default function Objects() {
  useGLTF.preload('./scene.gltf');
  const cameraControlRef = useRef<CameraControls | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [bgAudio, setBgAudio] = useState<HTMLAudioElement | null>(null);
  const [transitAudio, setTransitAudio] = useState<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    setBgAudio(new Audio('./catbgaudio.mp3'));
    setTransitAudio(new Audio('./whoosh.mp3'));
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <Canvas
        shadows
        camera={{
          fov: isMobile ? 90 : 75,
          position: isMobile ? [15, 30, 80] : [7, 6, 13],
        }}
      >
        <fog attach="fog" args={['#95a6e8', 20, 30]} />
        <CameraControls ref={cameraControlRef} enabled zoom={false} />
        <Shadow scale={2} />
        <Suspense fallback={null}>
          <Object />
          <Html wrapperClass="header">
            <div
              className="buttons"
              style={{
                position: 'absolute',
                top: isMobile ? '-450px' : '-415px',
                left: isMobile ? '-190px' : '-700px',
              }}
            >
              <button
                type="button"
                onClick={() => {
                  if (isMobile) {
                    cameraControlRef.current?.setPosition(15, 30, 80, true);
                  } else {
                    cameraControlRef.current?.setPosition(7, 6, 13, true);
                  }
                  transitAudio?.play();
                }}
              >
                View Scene
              </button>
              <button
                title="Click to enable music and explore"
                type="button"
                onClick={() => {
                  if (isMobile) {
                    cameraControlRef.current?.setPosition(2, 0, -9, true);
                  } else {
                    cameraControlRef.current?.setPosition(1, -1.89, -4, true);
                  }
                  transitAudio?.play();
                  if (bgAudio) {
                    bgAudio.play();
                    bgAudio.loop = true;
                    bgAudio.volume = 0.1;
                  }
                }}
              >
                Explore
              </button>
            </div>
          </Html>
        </Suspense>
      </Canvas>
    </>
  );
}
