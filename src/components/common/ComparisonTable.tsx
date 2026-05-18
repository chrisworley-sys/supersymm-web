import type { ComparisonTableConfig } from '@/types/platform'

export default function ComparisonTable({
  headers,
  rows,
  highlightLastColumn = true,
}: ComparisonTableConfig) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[560px]">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className={[
                  'px-4 py-3 font-sans font-semibold text-body-xs border border-ss-neutral-200',
                  i === 0
                    ? 'bg-ss-neutral-100 text-ss-neutral-700'
                    : highlightLastColumn && i === headers.length - 1
                    ? 'bg-ss-purple-500 text-white'
                    : 'bg-ss-purple-700 text-white',
                ].join(' ')}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-ss-neutral-100/50'}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={[
                    'px-4 py-3 font-sans text-body-sm border border-ss-neutral-200',
                    ci === 0
                      ? 'font-medium text-ss-neutral-700'
                      : highlightLastColumn && ci === row.length - 1
                      ? 'bg-ss-purple-500/5 font-medium text-ss-neutral-700'
                      : 'text-ss-neutral-600',
                  ].join(' ')}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
