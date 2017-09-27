export function findIndexByStart(pois, start) {
  for (let i = 0; i < pois.length; i++) {
    const poi = pois[i];
    // Edge cases: exact time or start comes before first POI
    if (start === poi.start || (i === 0 && start < poi.start)) {
      return i;
    }
    if (start < poi.start) {
      // We found the first POI that starts after start;
      // get the previous one.
      return i - 1;
    }
  }
  // If we got this far, it means start comes after the last POI.
  return pois.length - 1;
}
