import React from 'react';

export function Header() {
  return (
    <header className="header">
      <div className="brand">
        <span className="brand-badge" />
        <span>AWS Migration Guide</span>
      </div>
      <nav className="nav">
        <a href="#phases">Phases</a>
        <a href="#patterns">6R Patterns</a>
        <a href="#risks">Risk Register</a>
        <a href="#kpis">KPIs</a>
      </nav>
    </header>
  );
}
