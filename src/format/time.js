import padStart from 'lodash/padStart';
import toInteger from 'lodash/toInteger';

export function secondsToString(seconds) {
  if (seconds < 60) {
    return `0:${padTime(seconds)}`;
  }
  const hours = toInteger(seconds / 3600);
  const minutes = toInteger((seconds % 3600) / 60);
  let value = '';
  if (hours) {
    value += `${hours}:${padTime(minutes)}:`;
  } else {
    value += `${minutes}:`;
  }
  return value + padTime(seconds % 60);
}

export function stringToSeconds(str) {
  const parts = str.split(':');
  const seconds = +parts[parts.length - 1];
  let total = seconds;
  if (parts.length > 1) {
    const minutes = +parts[parts.length - 2];
    total += minutes * 60;
  }
  if (parts.length === 3) {
    const hours = +parts[0];
    total += hours * 60 * 60;
  }
  return total;
}

function padTime(value) {
  return padStart(value, 2, '0');
}
