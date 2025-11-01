import { Header } from '@/components/Header';
import { StepCard } from '@/components/StepCard';
import { Checklist } from '@/components/Checklist';
import { phases, patterns, riskCategories } from '@/lib/steps';

export default function Page() {
  return (
    <main>
      <Header />

      <section className="hero">
        <h1>AWS Migration Steps</h1>
        <p>End-to-end plan for Assess ? Mobilize ? Migrate ? Modernize ? Operate. Includes 6R patterns, landing zone, data migration, cutover, DR, and FinOps.</p>
      </section>

      <section id="kpis" style={{ marginTop: 16 }}>
        <div className="grid">
          <div className="kpis" style={{ gridColumn: 'span 12' }}>
            <div className="kpi">
              <div className="label">Migration Waves</div>
              <div className="value">3-6</div>
            </div>
            <div className="kpi">
              <div className="label">Target RTO/RPO</div>
              <div className="value">RTO ? 4h / RPO ? 15m</div>
            </div>
            <div className="kpi">
              <div className="label">Cost Reduction Goal</div>
              <div className="value">30-50%</div>
            </div>
          </div>
        </div>
      </section>

      <section id="phases" style={{ marginTop: 16 }}>
        <div className="grid">
          <div className="panel" style={{ gridColumn: 'span 12' }}>
            <h2>Phases</h2>
            <p>Each phase includes a concise checklist you can track locally in your browser.</p>
            <div className="grid" style={{ marginTop: 8 }}>
              {phases.map((step) => (
                <div key={step.id} className="panel" style={{ gridColumn: 'span 6' }}>
                  <StepCard step={step} />
                  {step.checklist && step.checklist.length > 0 && (
                    <div style={{ marginTop: 10 }}>
                      <Checklist phaseId={step.id} items={step.checklist} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="patterns" style={{ marginTop: 16 }}>
        <div className="grid">
          <div className="panel" style={{ gridColumn: 'span 12' }}>
            <h2>6R Patterns</h2>
            <p>Choose per application based on constraints, time-to-value, and ROI.</p>
            <div className="badges">
              {patterns.map(p => (<span className="badge" key={p}>{p}</span>))}
            </div>
          </div>
        </div>
      </section>

      <section id="risks" style={{ marginTop: 16 }}>
        <div className="grid">
          <div className="panel" style={{ gridColumn: 'span 12' }}>
            <h2>Risk Register Categories</h2>
            <p>Track risks across these categories with mitigation owners and timelines.</p>
            <div className="badges">
              {riskCategories.map(r => (<span className="badge" key={r}>{r}</span>))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 16 }}>
        <div className="grid">
          <div className="panel" style={{ gridColumn: 'span 12' }}>
            <h2>Cutover & Data Migration</h2>
            <ul>
              <li>Freeze window and change management approvals</li>
              <li>Data sync: DMS, native replication, snapshots with delta sync</li>
              <li>DNS, certificates, and network routes change plan</li>
              <li>Rollback path defined and tested</li>
              <li>Validation: smoke, perf, and resilience checks</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">? {new Date().getFullYear()} AWS Migration Guide. Built for Vercel + Next.js.</footer>
    </main>
  );
}
