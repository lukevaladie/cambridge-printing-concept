import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { services, buildBrief } from '../src/data.js';

test('four researched services have unique IDs and official source links', () => {
  assert.equal(services.length, 4);
  assert.equal(new Set(services.map(s => s.id)).size, 4);
  for (const service of services) {
    assert.equal(new URL(service.source).hostname, 'cambridgeprinting.net');
    assert.ok(service.items.length >= 4);
  }
});

test('local brief preserves selections and explicitly denies transmission', () => {
  const brief = buildBrief({ project: 'Posters & signage', quantity: '100–500', timing: 'Within a month' });
  assert.ok(brief.includes('Project: Posters & signage'));
  assert.ok(brief.includes('Quantity: 100–500'));
  assert.ok(brief.includes('Timing: Within a month'));
  assert.ok(brief.includes('No request has been sent'));
  assert.ok(brief.includes('https://cambridgeprinting.net/contact.html'));
});

test('concept is noindex and has clear independence disclosures', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const jsx = readFileSync(new URL('../src/main.jsx', import.meta.url), 'utf8');
  assert.match(html, /noindex,nofollow/);
  assert.match(jsx, /Not affiliated with or endorsed by Cambridge Printing/);
  assert.match(jsx, /Original concept artwork, not client projects/);
});

test('prototype has no submission endpoint, analytics, or persistent browser storage', () => {
  const jsx = readFileSync(new URL('../src/main.jsx', import.meta.url), 'utf8');
  assert.doesNotMatch(jsx, /\bfetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|<form[^>]*action=/);
  assert.match(jsx, /e\.preventDefault\(\); setComplete\(true\)/);
  assert.match(jsx, /showModal\(\)/);
});
