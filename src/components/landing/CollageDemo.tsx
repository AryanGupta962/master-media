import AdvancedMosaicCollage from "./Advancedmosaiccollage"


export default function MosaicCollageDemo() {
  // Example image URLs - replace with your own
  const sampleImages = [
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687221038-404cb8830901?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687221363-72518513620e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687982029-5d6f0e0f1a0a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220799-45d5a1c7f1e7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220975-7b2a6f2e6b7e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220567-0b2a6f2e6b7e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687221234-5b2a6f2e6b7e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220123-4b2a6f2e6b7e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220456-7b2a6f2e6b7e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220789-8b2a6f2e6b7e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220321-9b2a6f2e6b7e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220654-0b2a6f2e6b7e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1682687220987-1b2a6f2e6b7e?w=400&h=400&fit=crop",
  ];

  return (
    <main className="relative">
      {/* OPTION 1: Basic Uniform Mosaic */}
      {/* <CinematicMosaicCollage images={sampleImages} /> */}

      {/* OPTION 2: Advanced Mosaic with Varied Tile Sizes */}
      {/* 
      <AdvancedMosaicCollage
        images={sampleImages}
        config={{
          variedSizes: true,
        }}
      />
      */}

      {/* OPTION 3: Custom Configuration */}
      {/* 
      <CinematicMosaicCollage
        images={sampleImages}
        config={{
          imageCount: 25,          // More images
          animationDuration: 1.0,  // Slower animation
          staggerDelay: 0.08,      // More dramatic stagger
          gap: 2,                  // Tighter spacing
        }}
      />
      */}

      {/* OPTION 4: Fast, Dense Animation */}
      
      <AdvancedMosaicCollage
        images={sampleImages}
        config={{
          imageCount: 30,
          animationDuration: 0.5,
          staggerDelay: 0.02,
          gap: 6,
          variedSizes: true,
        }}
      />

    </main>
  );
}