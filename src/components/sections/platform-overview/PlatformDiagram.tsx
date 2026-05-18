import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import type { PlatformLayer } from '@/types/platform-overview'

const LAYER_W = 280
const LAYER_H = 120

const layers: PlatformLayer[] = [
  {
    id: 'brain',
    name: 'THE BRAIN',
    descriptor: 'Business and market intelligence. What you stand for, what your market wants, where opportunity is.',
    href: '/platform/business-intelligence',
  },
  {
    id: 'audience',
    name: 'THE AUDIENCE ENGINE',
    descriptor: "Persona, segmentation, and behavior. Who you're reaching, and what moves them.",
    href: '/platform',
  },
  {
    id: 'operator',
    name: 'THE OPERATOR',
    descriptor: 'Content, channels, and execution. The work that happens, automatically, in your voice.',
    href: '/platform/marketing-automation',
  },
  {
    id: 'memory',
    name: 'THE MEMORY',
    descriptor: "Performance and continuous learning. What worked, what didn't, and how the system gets sharper.",
    href: '/platform',
  },
]

// Desktop: diamond layout — Brain top, Audience right, Operator bottom, Memory left
// Coordinates: top-left corner of each 280×120 rect
const DESKTOP_POS: Record<string, { x: number; y: number }> = {
  brain:    { x: 410, y: 30  },
  audience: { x: 790, y: 240 },
  operator: { x: 410, y: 450 },
  memory:   { x: 30,  y: 240 },
}

// Derived centers (cx = x + 140, cy = y + 60)
const dc = (id: string) => ({
  cx: DESKTOP_POS[id].x + 140,
  cy: DESKTOP_POS[id].y + 60,
})

// Desktop connection paths with arrowhead offset (4 units before box edge)
// so marker tip lands exactly at box boundary
const DESKTOP_CONNS = [
  {
    from: 'brain',
    to: 'audience',
    // Brain right-center (690,90) → Audience top-center (930,240), end at 930,244
    path: 'M 690,90 C 800,90 930,166 930,244',
    labels: ['Strategy shapes', 'audience targeting'],
    lx: 818,
    ly: 115,
    anchor: 'middle' as const,
  },
  {
    from: 'audience',
    to: 'operator',
    // Audience bottom-center (930,360) → Operator right-center (690,510), end at 694,510
    path: 'M 930,360 C 930,440 762,510 694,510',
    labels: ['Personas direct', 'execution'],
    lx: 878,
    ly: 443,
    anchor: 'start' as const,
  },
  {
    from: 'operator',
    to: 'memory',
    // Operator left-center (410,510) → Memory bottom-center (170,360), end at 170,364
    path: 'M 410,510 C 300,510 170,442 170,364',
    labels: ['Performance gets', 'captured'],
    lx: 232,
    ly: 445,
    anchor: 'end' as const,
  },
  {
    from: 'memory',
    to: 'brain',
    // Memory top-center (170,240) → Brain left-center (410,90), end at 414,90
    path: 'M 170,240 C 170,155 332,90 414,90',
    labels: ['Learning sharpens', 'strategy'],
    lx: 268,
    ly: 115,
    anchor: 'end' as const,
  },
]

// Mobile: vertical stack — Brain, Audience, Operator, Memory top to bottom
const MOBILE_LAYER_X = 50
const MOBILE_LAYER_W = 280
const MOBILE_LAYER_H = 100
const MOBILE_LAYER_POSITIONS: Record<string, number> = {
  brain:    20,
  audience: 185,
  operator: 350,
  memory:   515,
}

// Mobile connection paths (right side U-curves, left return loop)
// Curves exit/enter at x=330 (right edge), bow to x=370; end 4 units past box edge
const MOBILE_CONNS = [
  { path: 'M 330,70 C 370,70 370,235 334,235' },
  { path: 'M 330,235 C 370,235 370,400 334,400' },
  { path: 'M 330,400 C 370,400 370,565 334,565' },
  // Memory→Brain return on left side, end at x=46 so tip lands at x=50
  { path: 'M 50,565 C 15,565 15,70 46,70' },
]

interface LayerTextProps {
  name: string
  descriptor: string
  x: number
  y: number
  w: number
  h: number
  mobile?: boolean
}

function LayerText({ name, descriptor, x, y, w, h, mobile }: LayerTextProps) {
  const padding = mobile ? 14 : 16
  const nameSize = mobile ? '11px' : '13px'
  const descSize = mobile ? '10px' : '12px'

  return (
    <foreignObject x={x + padding} y={y + padding} width={w - padding * 2} height={h - padding * 2}>
      {/* xmlns needed for HTML content inside SVG foreignObject */}
      <div
        // @ts-expect-error xmlns is required for SVG foreignObject HTML content
        xmlns="http://www.w3.org/1999/xhtml"
        style={{ margin: 0, padding: 0 }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: nameSize,
            letterSpacing: '0.04em',
            color: '#22193B',
            textTransform: 'uppercase',
            margin: '0 0 5px 0',
            lineHeight: 1.2,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: descSize,
            color: 'rgba(34, 25, 59, 0.70)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {descriptor}
        </p>
      </div>
    </foreignObject>
  )
}

export default function PlatformDiagram() {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null)
  const prefersReduced = useReducedMotion() ?? false
  const navigate = useNavigate()

  const getLayerOpacity = (id: string) =>
    hoveredLayer !== null && hoveredLayer !== id ? 0.45 : 1

  const getLayerTransform = (id: string) =>
    !prefersReduced && hoveredLayer === id ? 'translateY(-4px)' : 'translateY(0)'

  const getLayerStroke = (id: string) =>
    hoveredLayer === id ? '#6750A4' : '#22193B'

  const getConnOpacity = (from: string, to: string) => {
    if (hoveredLayer === null) return 1
    return hoveredLayer === from || hoveredLayer === to ? 1 : 0.20
  }

  const transition = prefersReduced ? 'none' : 'opacity 200ms ease, transform 200ms ease'

  const handleLayerClick = (href: string) => {
    navigate(href)
  }

  const handleLayerKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      navigate(href)
    }
  }

  return (
    <div
      style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}
      role="region"
      aria-label="Platform architecture diagram"
    >
      {/* ── Desktop SVG (diamond layout) — shown md+ ── */}
      <svg
        viewBox="0 0 1100 600"
        width="100%"
        role="img"
        aria-label="Platform architecture diagram showing four connected layers: Brain, Audience Engine, Operator, and Memory, forming a continuous intelligence loop"
        className="hidden md:block"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <marker
            id="ss-arrow-desktop"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M 0,0 L 8,4 L 0,8 Z" fill="#E977C1" />
          </marker>
        </defs>

        {/* Connection paths */}
        {DESKTOP_CONNS.map((conn) => {
          const opacity = getConnOpacity(conn.from, conn.to)
          return (
            <g
              key={`${conn.from}-${conn.to}`}
              style={{
                opacity,
                transition: prefersReduced ? 'none' : 'opacity 200ms ease',
              }}
              aria-hidden="true"
            >
              <path
                d={conn.path}
                fill="none"
                stroke="#E977C1"
                strokeWidth={2}
                markerEnd="url(#ss-arrow-desktop)"
              />
              {/* Connection labels */}
              <text
                x={conn.lx}
                y={conn.ly}
                textAnchor={conn.anchor}
                fontSize="12"
                fill="rgba(34,25,59,0.70)"
                fontFamily="Inter, sans-serif"
                fontWeight={500}
              >
                {conn.labels[0]}
                <tspan x={conn.lx} dy="16">
                  {conn.labels[1]}
                </tspan>
              </text>
            </g>
          )
        })}

        {/* Center accent dot */}
        <circle cx={550} cy={300} r={8} fill="#D5F77C" aria-hidden="true" />

        {/* Layers */}
        {layers.map((layer) => {
          const pos = DESKTOP_POS[layer.id]
          const { cx, cy } = dc(layer.id)
          const isStub = layer.href === '/platform'
          const trackId = isStub
            ? `platform-layer-${layer.id}-stub`
            : `platform-layer-${layer.id}`

          return (
            <g
              key={layer.id}
              aria-label={`${layer.name}: ${layer.descriptor}`}
              role="link"
              tabIndex={0}
              data-track={trackId}
              onMouseEnter={() => !prefersReduced && setHoveredLayer(layer.id)}
              onMouseLeave={() => setHoveredLayer(null)}
              onClick={() => handleLayerClick(layer.href)}
              onKeyDown={(e) => handleLayerKeyDown(e, layer.href)}
              style={{
                opacity: getLayerOpacity(layer.id),
                transform: getLayerTransform(layer.id),
                transition,
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <rect
                x={pos.x}
                y={pos.y}
                width={LAYER_W}
                height={LAYER_H}
                rx={12}
                fill="white"
                stroke={getLayerStroke(layer.id)}
                strokeWidth={1.5}
                style={{
                  transition: prefersReduced ? 'none' : 'stroke 200ms ease',
                  filter: 'drop-shadow(0 2px 8px rgba(34,25,59,0.08))',
                }}
              />
              <LayerText
                name={layer.name}
                descriptor={layer.descriptor}
                x={pos.x}
                y={pos.y}
                w={LAYER_W}
                h={LAYER_H}
              />
              {/* Focus ring */}
              <rect
                x={pos.x - 3}
                y={pos.y - 3}
                width={LAYER_W + 6}
                height={LAYER_H + 6}
                rx={15}
                fill="none"
                stroke="#6750A4"
                strokeWidth={2}
                opacity={0}
                className="focus-ring"
                style={{ pointerEvents: 'none' }}
              />
            </g>
          )
        })}

        {/* Invisible hit areas at layer centers for tooltip reference */}
        <circle cx={dc('brain').cx} cy={dc('brain').cy} r={2} fill="none" aria-hidden="true" />
        <circle cx={dc('audience').cx} cy={dc('audience').cy} r={2} fill="none" aria-hidden="true" />
        <circle cx={dc('operator').cx} cy={dc('operator').cy} r={2} fill="none" aria-hidden="true" />
        <circle cx={dc('memory').cx} cy={dc('memory').cy} r={2} fill="none" aria-hidden="true" />
      </svg>

      {/* ── Mobile SVG (vertical stack) — shown <md ── */}
      <svg
        viewBox="0 0 380 680"
        width="100%"
        role="img"
        aria-label="Platform architecture diagram showing four connected layers: Brain, Audience Engine, Operator, and Memory, forming a continuous intelligence loop"
        className="block md:hidden"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <marker
            id="ss-arrow-mobile"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M 0,0 L 8,4 L 0,8 Z" fill="#E977C1" />
          </marker>
        </defs>

        {/* Mobile connection paths */}
        {MOBILE_CONNS.map((conn, i) => (
          <path
            key={i}
            d={conn.path}
            fill="none"
            stroke="#E977C1"
            strokeWidth={2}
            markerEnd="url(#ss-arrow-mobile)"
            aria-hidden="true"
          />
        ))}

        {/* Mobile center accent dot — positioned between Audience and Operator */}
        <circle
          cx={MOBILE_LAYER_X + MOBILE_LAYER_W / 2}
          cy={(MOBILE_LAYER_POSITIONS.audience + MOBILE_LAYER_H + MOBILE_LAYER_POSITIONS.operator) / 2}
          r={6}
          fill="#D5F77C"
          aria-hidden="true"
        />

        {/* Mobile layers */}
        {layers.map((layer) => {
          const y = MOBILE_LAYER_POSITIONS[layer.id]
          const isStub = layer.href === '/platform'
          const trackId = isStub
            ? `platform-layer-${layer.id}-stub`
            : `platform-layer-${layer.id}`

          return (
            <g
              key={layer.id}
              aria-label={`${layer.name}: ${layer.descriptor}`}
              role="link"
              tabIndex={0}
              data-track={trackId}
              onClick={() => handleLayerClick(layer.href)}
              onKeyDown={(e) => handleLayerKeyDown(e, layer.href)}
              style={{ cursor: 'pointer', outline: 'none' }}
            >
              <rect
                x={MOBILE_LAYER_X}
                y={y}
                width={MOBILE_LAYER_W}
                height={MOBILE_LAYER_H}
                rx={10}
                fill="white"
                stroke="#22193B"
                strokeWidth={1.5}
                style={{ filter: 'drop-shadow(0 2px 6px rgba(34,25,59,0.08))' }}
              />
              <LayerText
                name={layer.name}
                descriptor={layer.descriptor}
                x={MOBILE_LAYER_X}
                y={y}
                w={MOBILE_LAYER_W}
                h={MOBILE_LAYER_H}
                mobile
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
