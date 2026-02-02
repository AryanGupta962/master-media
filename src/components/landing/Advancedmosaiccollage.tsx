"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Configuration options for the advanced cinematic collage
 */
interface AdvancedCollageConfig {
  /** Number of images to display */
  imageCount?: number;
  /** Base animation duration in seconds */
  animationDuration?: number;
  /** Delay between each image animation in seconds */
  staggerDelay?: number;
  /** Gap between images in pixels */
  gap?: number;
  /** Use varied tile sizes for more dynamic layout */
  variedSizes?: boolean;
}

/**
 * Props for the AdvancedMosaicCollage component
 */
interface AdvancedMosaicCollageProps {
  /** Array of image URLs to display */
  images: string[];
  /** Optional configuration */
  config?: AdvancedCollageConfig;
  /** Optional className for the container */
  className?: string;
}

/**
 * Tile size variants for varied layouts
 */
type TileSize = "small" | "medium" | "large";

/**
 * Position and animation properties for each image tile
 */
interface AdvancedTileProperties {
  id: string;
  url: string;
  gridRow: string;
  gridColumn: string;
  distanceFromCenter: number;
  animationDelay: number;
  size: TileSize;
}

/**
 * Calculate grid position from center
 */
const getGridPosition = (
  index: number,
  gridSize: number
): { row: number; col: number } => {
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;
  return { row, col };
};

/**
 * Calculate distance from center of grid
 */
const getDistanceFromCenter = (
  row: number,
  col: number,
  centerRow: number,
  centerCol: number
): number => {
  return Math.sqrt(
    Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
  );
};

/**
 * Generate tile sizes with occasional larger tiles
 */
const getTileSize = (index: number, variedSizes: boolean): TileSize => {
  if (!variedSizes) return "small";
  
  // Create a pattern with occasional medium/large tiles
  const pattern = index % 12;
  if (pattern === 0 || pattern === 7) return "large";
  if (pattern === 3 || pattern === 9) return "medium";
  return "small";
};

/**
 * Get grid span based on tile size
 */
const getGridSpan = (size: TileSize): { rowSpan: number; colSpan: number } => {
  switch (size) {
    case "large":
      return { rowSpan: 2, colSpan: 2 };
    case "medium":
      return { rowSpan: 1, colSpan: 2 };
    case "small":
    default:
      return { rowSpan: 1, colSpan: 1 };
  }
};

/**
 * Generate an advanced mosaic layout with varied tile sizes
 */
const generateAdvancedMosaicLayout = (
  images: string[],
  config: Required<AdvancedCollageConfig>
): AdvancedTileProperties[] => {
  const { imageCount, staggerDelay, variedSizes } = config;
  
  // For varied sizes, we need more grid cells
  const baseGridSize = Math.ceil(Math.sqrt(imageCount));
  const gridSize = variedSizes ? baseGridSize + 2 : baseGridSize;
  
  const centerRow = (gridSize - 1) / 2;
  const centerCol = (gridSize - 1) / 2;
  
  const tiles: AdvancedTileProperties[] = [];
  let currentRow = 1;
  let currentCol = 1;
  
  for (let i = 0; i < imageCount; i++) {
    const url = images[i % images.length];
    const size = getTileSize(i, variedSizes);
    const { rowSpan, colSpan } = getGridSpan(size);
    
    // Calculate distance from center using the tile's center position
    const tileCenterRow = currentRow + rowSpan / 2 - 0.5;
    const tileCenterCol = currentCol + colSpan / 2 - 0.5;
    const distanceFromCenter = getDistanceFromCenter(
      tileCenterRow,
      tileCenterCol,
      centerRow,
      centerCol
    );
    
    tiles.push({
      id: `tile-${i}`,
      url,
      gridRow: `${currentRow} / span ${rowSpan}`,
      gridColumn: `${currentCol} / span ${colSpan}`,
      distanceFromCenter,
      animationDelay: 0, // Will be set after sorting
      size,
    });
    
    // Move to next position
    currentCol += colSpan;
    if (currentCol > gridSize) {
      currentCol = 1;
      currentRow += 1;
    }
  }
  
  // Sort tiles by distance from center (closest first)
  tiles.sort((a, b) => a.distanceFromCenter - b.distanceFromCenter);
  
  // Assign animation delays based on sorted order
  tiles.forEach((tile, index) => {
    tile.animationDelay = index * staggerDelay;
  });
  
  return tiles;
};

/**
 * Advanced Cinematic Mosaic Collage Component
 * 
 * Creates a dynamic photo wall with varied tile sizes that animates
 * from center outward with smooth, cinematic motion.
 */
export default function AdvancedMosaicCollage({
  images,
  config = {},
  className = "",
}: AdvancedMosaicCollageProps) {
  // Merge default config with user config
  const finalConfig: Required<AdvancedCollageConfig> = {
    imageCount: config.imageCount ?? 20,
    animationDuration: config.animationDuration ?? 0.8,
    staggerDelay: config.staggerDelay ?? 0.05,
    gap: config.gap ?? 4,
    variedSizes: config.variedSizes ?? false,
  };
  
  /**
   * Calculate grid size based on configuration
   */
  const gridSize = useMemo(() => {
    const baseSize = Math.ceil(Math.sqrt(finalConfig.imageCount));
    return finalConfig.variedSizes ? baseSize + 2 : baseSize;
  }, [finalConfig.imageCount, finalConfig.variedSizes]);
  
  /**
   * Generate mosaic layout once on mount
   */
  const tiles = useMemo(
    () => generateAdvancedMosaicLayout(images, finalConfig),
    [images, finalConfig]
  );
  
  return (
    <div
      className={`relative w-full h-screen overflow-hidden bg-neutral-900 ${className}`}
    >
      {/* Mosaic Grid Container */}
      <div
        className="absolute inset-0 p-4 md:p-8"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          gap: `${finalConfig.gap}px`,
        }}
      >
        {tiles.map((tile) => (
          <motion.div
            key={tile.id}
            className="relative overflow-hidden bg-neutral-800 rounded-sm"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: finalConfig.animationDuration,
              delay: tile.animationDelay,
              ease: [0.25, 0.1, 0.25, 1], // Smooth easeInOut curve
            }}
            style={{
              gridRow: tile.gridRow,
              gridColumn: tile.gridColumn,
              willChange: "transform, opacity",
            }}
          >
            <Image
              src={tile.url}
              alt=""
              fill
              className="object-cover"
              sizes={
                tile.size === "large"
                  ? "(max-width: 768px) 50vw, 40vw"
                  : tile.size === "medium"
                  ? "(max-width: 768px) 35vw, 30vw"
                  : "(max-width: 768px) 25vw, 20vw"
              }
              loading="lazy"
              quality={85}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Subtle vignette overlay for cinematic feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 100%)",
        }}
      />
    </div>
  );
}