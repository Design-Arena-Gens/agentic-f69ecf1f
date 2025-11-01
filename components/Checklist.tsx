"use client";
import React from 'react';

type Item = { id: string; text: string };

function useLocalChecklist(key: string, items: Item[]) {
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Record<string, boolean>;
        setChecked(parsed);
      } catch {}
    } else {
      const initial = Object.fromEntries(items.map(i => [i.id, false]));
      setChecked(initial);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = { ...prev, [id]: !prev[id] };
      if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  };

  const reset = () => {
    const next = Object.fromEntries(items.map(i => [i.id, false]));
    setChecked(next);
    if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(next));
  };

  const completed = Object.values(checked).filter(Boolean).length;
  const total = items.length;

  return { checked, toggle, reset, completed, total };
}

export function Checklist({ phaseId, items }: { phaseId: string; items: Item[] }) {
  const { checked, toggle, reset, completed, total } = useLocalChecklist(`checklist:${phaseId}`, items);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ color: 'var(--muted)' }}>{completed}/{total} complete</div>
        <div className="controls">
          <button className="button secondary" onClick={reset}>Reset</button>
        </div>
      </div>
      <div>
        {items.map(it => (
          <div className="checklist-item" key={it.id}>
            <input id={`${phaseId}:${it.id}`} type="checkbox" checked={!!checked[it.id]} onChange={() => toggle(it.id)} />
            <label htmlFor={`${phaseId}:${it.id}`}>{it.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
