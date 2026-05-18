import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface Zone {
  id: string
  title: string
  mechanisms: string[]
  caption: string
}

const zones: Zone[] = [
  {
    id: 'visibility',
    title: 'VISIBILITY',
    mechanisms: ['Search', 'Social', 'Content', 'Paid'],
    caption: '"Show up where buyers already are"',
  },
  {
    id: 'capture',
    title: 'CAPTURE',
    mechanisms: ['Landing pages', 'Lead magnets', 'Smart forms'],
    caption: '"Turn visitors into prospects"',
  },
  {
    id: 'qualification',
    title: 'QUALIFICATION',
    mechanisms: ['Lead scoring', 'Tier routing', 'Sales handoff'],
    caption: '"Hand sales the right ones"',
  },
]

// Desktop layout constants
const ZONE_W = 290
const ZONE_H = 220
const ZONE_Y = 50
const GAP = 60
const ZONE_X = [50, 50 + ZONE_W + GAP, 50 + (ZONE_W + GAP) * 2]
const ARROW_Y = ZONE_Y + ZONE_H / 2
const CAPTION_Y = ZONE_Y + ZONE_H + 26

// Mobile layout constants (vertical)
const M_ZONE_W = 300
const M_ZONE_H = 200
const M_ZONE_X = 40
const M_GAP_V = 60
const M_ZONE_Y = [30, 30 + M_ZONE_H + M_GAP_V, 30 + (M_ZONE_H + M_GAP_V) * 2]

function DesktopDiagram({
  hoveredZone,
  setHoveredZone,
  reduced,
}: {
  hoveredZone: string | null
  setHoveredZone: (z: string | null) => void
  reduced: boolean
}) {
  const viewW = 50 + ZONE_W * 3 + GAP * 2 + 50
  const viewH = 440

  const feedbackY = ZONE_Y + ZONE_H + 80
  const feedbackLabelY = feedbackY + 14
  const loopLeft = ZONE_X[0]
  const loopRight = ZONE_X[2] + ZONE_W

  return (
    <svg
      viewBox={`0 0 ${viewW} ${viewH}`}
      width="100%"
      role="img"
      aria-label="Lead generation flow diagram showing three connected zones: Visibility, Capture, and Qualification, with a yellow dashed feedback loop returning performance data from Qualification back to Visibility"
      style={{ display: 'block' }}
    >
      <defs>
        <marker id="lfd-pink-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#E977C1" />
        </marker>
        <marker id="lfd-yellow-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#D5F77C" />
        </marker>
      </defs>

      {/* Forward arrows */}
      {[0, 1].map((i) => {
        const x1 = ZONE_X[i] + ZONE_W + 4
        const x2 = ZONE_X[i + 1] - 4
        const zoneA = zones[i].id
        const zoneB = zones[i + 1].id
        const active = hoveredZone === zoneA || hoveredZone === zoneB
        return (
          <line
            key={i}
            x1={x1}
            y1={ARROW_Y}
            x2={x2}
            y2={ARROW_Y}
            stroke="#E977C1"
            strokeWidth="2"
            opacity={reduced ? 1 : active ? 1.0 : hoveredZone ? 0.4 : 0.7}
            markerEnd="url(#lfd-pink-arrow)"
            style={{ transition: reduced ? undefined : 'opacity 200ms ease' }}
          />
        )
      })}

      {/* Feedback loop — below zones */}
      <path
        d={`M ${loopRight} ${ZONE_Y + ZONE_H + 16} C ${loopRight + 28} ${ZONE_Y + ZONE_H + 16} ${loopRight + 28} ${feedbackY - 4} ${loopRight + 28} ${feedbackY} L ${loopLeft - 28} ${feedbackY} C ${loopLeft - 28} ${feedbackY} ${loopLeft - 28} ${ZONE_Y + ZONE_H + 16} ${loopLeft} ${ZONE_Y + ZONE_H + 16}`}
        stroke="#D5F77C"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 4"
        markerEnd="url(#lfd-yellow-arrow)"
      />
      {/* Feedback label */}
      <text
        x={viewW / 2}
        y={feedbackLabelY + 16}
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
        fontSize="12"
        fill="#22193B"
        opacity="0.65"
      >
        Performance data sharpens targeting
      </text>

      {/* Zone rectangles + content */}
      {zones.map((zone, i) => {
        const isHovered = hoveredZone === zone.id
        const isFaded = hoveredZone !== null && hoveredZone !== zone.id
        return (
          <g
            key={zone.id}
            onMouseEnter={() => !reduced && setHoveredZone(zone.id)}
            onMouseLeave={() => !reduced && setHoveredZone(null)}
            aria-label={`${zone.title} zone: ${zone.mechanisms.join(', ')}`}
            style={{ cursor: 'default' }}
          >
            <rect
              x={ZONE_X[i]}
              y={ZONE_Y}
              width={ZONE_W}
              height={ZONE_H}
              rx="16"
              stroke={isHovered && !reduced ? '#6750A4' : '#22193B'}
              strokeWidth="1.5"
              fill="white"
              opacity={reduced ? 1 : isFaded ? 0.8 : 1}
              style={{
                transition: reduced ? undefined : 'stroke 200ms ease, opacity 200ms ease',
                transform: isHovered && !reduced ? 'translateY(-4px)' : 'translateY(0)',
                transformBox: 'fill-box',
                transformOrigin: 'center',
              }}
              filter={isHovered && !reduced ? 'drop-shadow(0 8px 20px rgba(103,80,164,0.15))' : undefined}
            />
            {/* Zone title */}
            <text
              x={ZONE_X[i] + ZONE_W / 2}
              y={ZONE_Y + 34}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="16"
              fill="#22193B"
              letterSpacing="0.06em"
              opacity={reduced ? 1 : isFaded ? 0.8 : 1}
              style={{ transition: reduced ? undefined : 'opacity 200ms ease' }}
            >
              {zone.title}
            </text>
            {/* Divider */}
            <line
              x1={ZONE_X[i] + 24}
              y1={ZONE_Y + 46}
              x2={ZONE_X[i] + ZONE_W - 24}
              y2={ZONE_Y + 46}
              stroke="rgba(34,25,59,0.10)"
              strokeWidth="1"
            />
            {/* Mechanism list */}
            {zone.mechanisms.map((mech, mi) => (
              <g key={mech}>
                <circle
                  cx={ZONE_X[i] + 36}
                  cy={ZONE_Y + 70 + mi * 34}
                  r="3"
                  fill="#E977C1"
                  opacity={reduced ? 1 : isFaded ? 0.6 : 1}
                />
                <text
                  x={ZONE_X[i] + 48}
                  y={ZONE_Y + 75 + mi * 34}
                  fontFamily="Inter, sans-serif"
                  fontSize="14"
                  fill="rgba(34,25,59,0.80)"
                  opacity={reduced ? 1 : isFaded ? 0.8 : 1}
                  style={{ transition: reduced ? undefined : 'opacity 200ms ease' }}
                >
                  {mech}
                </text>
              </g>
            ))}
            {/* Zone caption */}
            <text
              x={ZONE_X[i] + ZONE_W / 2}
              y={CAPTION_Y}
              textAnchor="middle"
              fontFamily="Newsreader, serif"
              fontStyle="italic"
              fontSize="13"
              fill="rgba(34,25,59,0.70)"
              opacity={reduced ? 1 : isFaded ? 0.6 : 1}
              style={{ transition: reduced ? undefined : 'opacity 200ms ease' }}
            >
              {zone.caption}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function MobileDiagram({
  hoveredZone,
  setHoveredZone,
  reduced,
}: {
  hoveredZone: string | null
  setHoveredZone: (z: string | null) => void
  reduced: boolean
}) {
  const viewW = 380
  const viewH = 30 + M_ZONE_H * 3 + M_GAP_V * 2 + 120
  const captionX = M_ZONE_X + M_ZONE_W / 2
  const arrowX = M_ZONE_X + M_ZONE_W / 2

  // Feedback loop — left side of the vertical stack
  const loopTop = M_ZONE_Y[0] + M_ZONE_H / 2
  const loopBottom = M_ZONE_Y[2] + M_ZONE_H / 2

  return (
    <svg
      viewBox={`0 0 ${viewW} ${viewH}`}
      width="100%"
      role="img"
      aria-label="Lead generation flow diagram (mobile) — three zones stacked vertically with a feedback loop on the left"
      style={{ display: 'block' }}
    >
      <defs>
        <marker id="lfd-m-pink-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#E977C1" />
        </marker>
        <marker id="lfd-m-yellow-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L8,3 z" fill="#D5F77C" />
        </marker>
      </defs>

      {/* Downward arrows between zones */}
      {[0, 1].map((i) => (
        <line
          key={i}
          x1={arrowX}
          y1={M_ZONE_Y[i] + M_ZONE_H + 4}
          x2={arrowX}
          y2={M_ZONE_Y[i + 1] - 4}
          stroke="#E977C1"
          strokeWidth="2"
          markerEnd="url(#lfd-m-pink-arrow)"
        />
      ))}

      {/* Feedback loop — left side */}
      <path
        d={`M ${M_ZONE_X - 10} ${loopBottom} C ${M_ZONE_X - 36} ${loopBottom} ${M_ZONE_X - 36} ${loopTop} ${M_ZONE_X - 10} ${loopTop}`}
        stroke="#D5F77C"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 4"
        markerEnd="url(#lfd-m-yellow-arrow)"
      />
      {/* Mobile feedback label */}
      <text
        x="20"
        y={M_ZONE_Y[1] + M_ZONE_H / 2 + 4}
        fontFamily="Inter, sans-serif"
        fontWeight="500"
        fontSize="10"
        fill="#22193B"
        opacity="0.60"
        writingMode="tb"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        data loop
      </text>

      {/* Zone rectangles */}
      {zones.map((zone, i) => {
        const isHovered = hoveredZone === zone.id
        const isFaded = hoveredZone !== null && hoveredZone !== zone.id
        return (
          <g
            key={zone.id}
            onMouseEnter={() => !reduced && setHoveredZone(zone.id)}
            onMouseLeave={() => !reduced && setHoveredZone(null)}
          >
            <rect
              x={M_ZONE_X}
              y={M_ZONE_Y[i]}
              width={M_ZONE_W}
              height={M_ZONE_H}
              rx="14"
              stroke={isHovered && !reduced ? '#6750A4' : '#22193B'}
              strokeWidth="1.5"
              fill="white"
              opacity={reduced ? 1 : isFaded ? 0.8 : 1}
              style={{ transition: reduced ? undefined : 'stroke 200ms ease, opacity 200ms ease' }}
            />
            {/* Zone title */}
            <text
              x={captionX}
              y={M_ZONE_Y[i] + 30}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="15"
              fill="#22193B"
              letterSpacing="0.06em"
            >
              {zone.title}
            </text>
            {/* Divider */}
            <line
              x1={M_ZONE_X + 20}
              y1={M_ZONE_Y[i] + 40}
              x2={M_ZONE_X + M_ZONE_W - 20}
              y2={M_ZONE_Y[i] + 40}
              stroke="rgba(34,25,59,0.10)"
              strokeWidth="1"
            />
            {/* Mechanisms in two rows */}
            {zone.mechanisms.map((mech, mi) => (
              <g key={mech}>
                <circle cx={M_ZONE_X + 28} cy={M_ZONE_Y[i] + 60 + mi * 28} r="3" fill="#E977C1" />
                <text
                  x={M_ZONE_X + 38}
                  y={M_ZONE_Y[i] + 65 + mi * 28}
                  fontFamily="Inter, sans-serif"
                  fontSize="13"
                  fill="rgba(34,25,59,0.80)"
                >
                  {mech}
                </text>
              </g>
            ))}
            {/* Caption */}
            <text
              x={captionX}
              y={M_ZONE_Y[i] + M_ZONE_H - 12}
              textAnchor="middle"
              fontFamily="Newsreader, serif"
              fontStyle="italic"
              fontSize="12"
              fill="rgba(34,25,59,0.65)"
            >
              {zone.caption}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export default function LeadFlowDiagram() {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)
  const prefersReduced = useReducedMotion() ?? false

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopDiagram
          hoveredZone={hoveredZone}
          setHoveredZone={setHoveredZone}
          reduced={prefersReduced}
        />
      </div>
      {/* Mobile */}
      <div className="block md:hidden">
        <MobileDiagram
          hoveredZone={hoveredZone}
          setHoveredZone={setHoveredZone}
          reduced={prefersReduced}
        />
      </div>
    </>
  )
}
