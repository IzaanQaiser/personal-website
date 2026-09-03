"use client"

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react"
import { useEffect, useState } from "react"

type BackgroundPreferences = {
  canUseWebGL: boolean
  prefersReducedMotion: boolean
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas")
    return Boolean(
      canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl"),
    )
  } catch {
    return false
  }
}

export function ShaderGradientBackground() {
  const [preferences, setPreferences] = useState<BackgroundPreferences | null>(null)

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const updatePreferences = () => {
      setPreferences({
        canUseWebGL: supportsWebGL(),
        prefersReducedMotion: reducedMotionQuery.matches,
      })
    }

    updatePreferences()
    reducedMotionQuery.addEventListener("change", updatePreferences)

    return () => reducedMotionQuery.removeEventListener("change", updatePreferences)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-black"
      style={{
        backgroundImage:
          "radial-gradient(circle at 60% 35%, #260200 0%, #080000 35%, #000000 75%)",
      }}
    >
      {preferences?.canUseWebGL && !preferences.prefersReducedMotion && (
        <ShaderGradientCanvas
          lazyLoad={false}
          pixelDensity={1}
          fov={45}
          pointerEvents="none"
          powerPreference="high-performance"
          style={{ position: "absolute", inset: 0 }}
        >
          <ShaderGradient
            animate="on"
            brightness={0.4}
            cAzimuthAngle={170}
            cDistance={6.61}
            cPolarAngle={70}
            cameraZoom={1}
            color1="#ff0d00"
            color2="#000000"
            color3="#000000"
            envPreset="city"
            grain="off"
            lightType="3d"
            positionX={1.4}
            positionY={0.9}
            positionZ={-0.3}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={45}
            rotationY={0}
            rotationZ={0}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1.2}
            uFrequency={0}
            uSpeed={0.1}
            uStrength={3.4}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      )}
    </div>
  )
}
