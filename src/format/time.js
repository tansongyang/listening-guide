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

function padTime(value) {
  return padStart(value, 2, '0');
}
