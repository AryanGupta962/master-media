"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Configuration options for the cinematic collage
 */
interface CollageConfig {
  /** Number of images to display */
  imageCount?: number;
  /** Motion intensity multiplier (0.5 = subtle, 1 = normal, 2 = intense) */
  motionIntensity?: number;
  /** Minimum image size in pixels */
  minSize?: number;
  /** Maximum image size in pixels */
  maxSize?: number;
}

/**
 * Props for the CinematicCollage component
 */
interface CinematicCollageProps {
  /** Array of image URLs to display */
  images: string[];
  /** Optional configuration */
  config?: CollageConfig;
  /** Optional className for the container */
  className?: string;
}

/**
 * Position and animation properties for each image
 */
interface ImageProperties {
  id: string;
  url: string;
  x: number; // X position (%)
  y: number; // Y position (%)
  size: number; // Size in pixels
  zIndex: number; // Stacking order
  opacity: number; // Base opacity for depth effect
  duration: number; // Animation duration
  delay: number; // Animation delay
  drift: {
    x: number; // Horizontal drift amount
    y: number; // Vertical drift amount
  };
  scale: {
    from: number;
    to: number;
  };
  rotate: {
    from: number;
    to: number;
  };
}

/**
 * Generate random number within a range
 */
const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

/**
 * Generate properties for a single image with cinematic motion parameters
 */
const generateImageProperties = (
  url: string,
  index: number,
  config: Required<CollageConfig>
): ImageProperties => {
  const { motionIntensity, minSize, maxSize } = config;

  // Position: ensure images stay within safe bounds (10% to 90%)
  const x = randomInRange(10, 90);
  const y = randomInRange(10, 90);

  // Size: varied for visual interest
  const size = randomInRange(minSize, maxSize);

  // Depth effect: slight opacity and z-index variation
  const opacity = randomInRange(0.7, 1);
  const zIndex = Math.floor(randomInRange(1, 100));

  // Duration: slow, cinematic pace (8-20 seconds)
  const duration = randomInRange(8, 20);

  // Delay: stagger animations for organic feel
  const delay = randomInRange(0, 5);

  // Drift: subtle movement in pixels, constrained to prevent off-screen
  const drift = {
    x: randomInRange(-30, 30) * motionIntensity,
    y: randomInRange(-30, 30) * motionIntensity,
  };

  // Scale: very subtle breathing effect
  const scaleBase = randomInRange(0.95, 1);
  const scale = {
    from: scaleBase,
    to: scaleBase + randomInRange(0.05, 0.15) * motionIntensity,
  };

  // Rotate: minimal, cinematic rotation
  const rotateBase = randomInRange(-3, 3);
  const rotate = {
    from: rotateBase,
    to: rotateBase + randomInRange(-2, 2) * motionIntensity,
  };

  return {
    id: `image-${index}`,
    url,
    x,
    y,
    size,
    zIndex,
    opacity,
    duration,
    delay,
    drift,
    scale,
    rotate,
  };
};

/**
 * Cinematic Random Collage Motion Component
 * 
 * Displays images in a randomized collage with subtle, film-like animations.
 * Uses Framer Motion for GPU-accelerated transforms.
 */
export default function CinematicCollage({
  images,
  config = {},
  className = "",
}: CinematicCollageProps) {
  // Merge default config with user config
  const finalConfig: Required<CollageConfig> = {
    imageCount: config.imageCount ?? 20,
    motionIntensity: config.motionIntensity ?? 1,
    minSize: config.minSize ?? 80,
    maxSize: config.maxSize ?? 200,
  };

  /**
   * Generate all image properties once on mount
   * useMemo ensures randomization only happens once per render
   */
  const imageProperties = useMemo(() => {
    // Take only the requested number of images
    const selectedImages = images.slice(0, finalConfig.imageCount);

    // If we need more images than provided, repeat the array
    const expandedImages: string[] = [];
    while (expandedImages.length < finalConfig.imageCount) {
      expandedImages.push(...selectedImages);
    }

    // Generate properties for each image
    return expandedImages
      .slice(0, finalConfig.imageCount)
      .map((url, index) => generateImageProperties(url, index, finalConfig));
  }, [images, finalConfig]);

  return (
    <div
      className={`relative w-full h-screen overflow-hidden bg-black ${className}`}
      style={{
        // Ensure smooth rendering and prevent layout shift
        willChange: "transform",
      }}
    >
      {imageProperties.map((props) => (
        <motion.div
          key={props.id}
          className="absolute"
          style={{
            // Initial position (percentage-based for responsiveness)
            left: `${props.x}%`,
            top: `${props.y}%`,
            width: props.size,
            height: props.size,
            zIndex: props.zIndex,
            // Center the image on its position point
            transform: "translate(-50%, -50%)",
          }}
          initial={{
            opacity: 0,
            scale: props.scale.from,
          }}
          animate={{
            // Fade in
            opacity: props.opacity,
            // Drift motion: translate in pixels
            x: [0, props.drift.x, 0],
            y: [0, props.drift.y, 0],
            // Breathing scale effect
            scale: [props.scale.from, props.scale.to, props.scale.from],
            // Gentle rotation
            rotate: [props.rotate.from, props.rotate.to, props.rotate.from],
          }}
          transition={{
            // Fade in quickly
            opacity: { duration: 1, delay: props.delay },
            // All other animations loop infinitely
            x: {
              duration: props.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: props.delay,
            },
            y: {
              duration: props.duration * 1.1, // Slightly different duration for organic feel
              repeat: Infinity,
              ease: "easeInOut",
              delay: props.delay,
            },
            scale: {
              duration: props.duration * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: props.delay,
            },
            rotate: {
              duration: props.duration * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: props.delay,
            },
          }}
        >
          <Image
            src={props.url}
            width={20}
            height={20}
            alt=""
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            style={{
              // Prevent image dragging for cleaner UX
              pointerEvents: "none",
              userSelect: "none",
              // Ensure crisp rendering
              imageRendering: "auto",
            }}
            loading="lazy"
          />
        </motion.div>
      ))}

      {/* Optional overlay for cinematic vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />
    </div>
  );
}