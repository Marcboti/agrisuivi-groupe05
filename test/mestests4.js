import test from 'node:test';
import assert from 'node:assert/strict';
import { lireJson, creerReleve } from '../src/donnees.js';

test('creerReleve accepte 100', () => {
  assert.deepEqual(creerReleve('P07', '100', '29', '2026-10-30'), {
    parcelle: 'P07', date: '2026-10-30', humidite: 100, temperature: 29,
  });
});

test('lireJson rejette si fichier absent', async () => {
  await assert.rejects(lireJson('donnees/absent.json'), /Impossible de lire/);
});
