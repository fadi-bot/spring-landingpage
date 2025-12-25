import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import logoImage from '../assets/logo.jpg';

function Hero() {
  const canvasRef = useRef(null);
  const resizeHandlerRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, animationId;
    let resizeObserver;

    let mounted = true;

    const init = async () => {
      try {
        const THREE = await import('https://unpkg.com/three@0.160.0/build/three.module.js');

        if (!mounted || !canvasRef.current) return;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        camera.position.z = 50;

        renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

        const setSize = () => {
          const container = canvasRef.current.parentElement;
          const w = container.clientWidth;
          const h = container.clientHeight;
          renderer.setSize(w, h, false);
          camera.aspect = w / Math.max(h, 1);
          camera.updateProjectionMatrix();
        };
        setSize();
        resizeHandlerRef.current = setSize;

        // Starfield
        const particles = 800;
        const positions = new Float32Array(particles * 3);
        for (let i = 0; i < particles; i++) {
          const i3 = i * 3;
          positions[i3 + 0] = (Math.random() - 0.5) * 200; // x
          positions[i3 + 1] = (Math.random() - 0.5) * 200; // y
          positions[i3 + 2] = Math.random() * 250 - 200;   // z in [-200, 50]
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
          // UPDATED: Particle color to match brand
          color: 0x2e3486, 
          size: 1.1,
          sizeAttenuation: true,
          opacity: 0.9,
          transparent: true,
          blending: THREE.AdditiveBlending
        });
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        /* Animation is disabled, as per original file */

        // Observe container resize
        resizeObserver = new ResizeObserver(() => setSize());
        resizeObserver.observe(canvasRef.current.parentElement);

        window.addEventListener('resize', resizeHandlerRef.current);
      } catch {
        // Fail silently
      }
    };

    init();

    return () => {
      mounted = false;
      if (resizeObserver) resizeObserver.disconnect();
      if (resizeHandlerRef.current) {
        window.removeEventListener('resize', resizeHandlerRef.current);
      }
      if (animationId) cancelAnimationFrame(animationId);
      if (scene) {
        scene.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
            else obj.material.dispose();
          }
        });
      }
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement) {
          const canvas = renderer.domElement;
          const gl = canvas.getContext('webgl');
          if (gl) gl.getExtension('WEBGL_lose_context')?.loseContext();
        }
      }
    };
  }, []);

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* UPDATED: Content from PDF */}
      <div className="hero-content" data-aos="fade-down">
        <img src={logoImage} alt="Company Logo" className="hero-logo" />
        <h1>SPRING INT TRADERS PVT LTD.</h1>
        <p>WHERE EXPERIENCE MEETS INNOVATION, AND SUPPLY BECOMES STRATEGY.</p>
        <Link to="/products" className="btn-primary">
          Browse Our Offerings
        </Link>
      </div>
    </section>
  );
}

export default Hero;