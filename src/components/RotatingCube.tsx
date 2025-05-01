
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface RotatingCubeProps {
  size?: number;
  color?: string;
  speed?: number;
  className?: string;
  variant?: 'wireframe' | 'solid' | 'skeleton' | 'sphere' | 'torus';
}

const RotatingCube: React.FC<RotatingCubeProps> = ({ 
  size = 50, 
  color = '#5c899d', 
  speed = 0.01,
  className,
  variant = 'wireframe'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const objectRef = useRef<THREE.Mesh | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 200;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(size, size);
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create object based on variant
    let geometry;
    let material;
    
    switch(variant) {
      case 'solid':
        geometry = new THREE.BoxGeometry(50, 50, 50);
        material = new THREE.MeshStandardMaterial({ 
          color: new THREE.Color(color),
          metalness: 0.5,
          roughness: 0.2
        });
        
        // Add ambient light for solid objects
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        // Add directional light for highlights
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);
        break;
        
      case 'skeleton':
        geometry = new THREE.BoxGeometry(50, 50, 50);
        // Create edges geometry for the skeleton effect
        const edges = new THREE.EdgesGeometry(geometry);
        material = new THREE.LineBasicMaterial({ color: new THREE.Color(color) });
        
        // Create and add the line segments
        const lineSegments = new THREE.LineSegments(edges, material);
        scene.add(lineSegments);
        objectRef.current = lineSegments as unknown as THREE.Mesh;
        break;
        
      case 'sphere':
        geometry = new THREE.SphereGeometry(30, 32, 32);
        material = new THREE.MeshBasicMaterial({ 
          color: new THREE.Color(color),
          wireframe: true
        });
        break;
        
      case 'torus':
        geometry = new THREE.TorusGeometry(25, 10, 16, 100);
        material = new THREE.MeshBasicMaterial({ 
          color: new THREE.Color(color),
          wireframe: true
        });
        break;
        
      case 'wireframe':
      default:
        geometry = new THREE.BoxGeometry(50, 50, 50);
        material = new THREE.MeshBasicMaterial({ 
          color: new THREE.Color(color),
          wireframe: true
        });
        break;
    }

    // Only create mesh if we haven't already created one (for skeleton case)
    if (variant !== 'skeleton') {
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      objectRef.current = mesh;
    }

    // Animation function
    const animate = () => {
      if (!objectRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      objectRef.current.rotation.x += speed;
      objectRef.current.rotation.y += speed * 0.8;
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup function
    return () => {
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [size, color, speed, variant]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ 
        width: size, 
        height: size,
        display: 'inline-block',
        verticalAlign: 'middle' // Added to align with text
      }}
    />
  );
};

export default RotatingCube;
