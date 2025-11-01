import React from 'react';
import type { Step } from '@/lib/steps';

export function StepCard({ step }: { step: Step }) {
  return (
    <div className="step-card">
      <div className="step-title">{step.title}</div>
      <div className="step-desc">{step.description}</div>
      {step.tags && (
        <div className="badges" aria-label="tags">
          {step.tags.map((t) => (
            <span className="badge" key={t}>{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}
