import { stringToSeconds } from '../format/time';

export function normalizePiece(piece) {
  return {
    ...piece,
    analysis: normalizeAnalysis(piece.analysis),
  };
}

export function normalizeAnalysis(analysis) {
  return analysis.map(poi => {
    if (typeof poi.start === 'string') {
      return {
        ...poi,
        start: stringToSeconds(poi.start),
      };
    }
    return poi;
  });
}
