// https://www.codewars.com/kata/52742f58faf5485cae000b9a
// 4 KYU

function formatDuration (seconds) {
  const years = Math.floor(seconds / 60 / 60 / 24 / 365 % 1000);
  const days = Math.floor(seconds / 60 / 60 / 24 % 365);
  const hours = Math.floor(seconds / 60 / 60 % 24);
  const minutes = Math.floor(seconds / 60 % 60);
  seconds = seconds % 60;
  
  const times = [
    years > 1 ? `${years} years` : years > 0 ? `${years} year` : '',
    days > 1 ? `${days} days` : days > 0 ? `${days} day` : '',
    hours > 1 ? `${hours} hours` : hours > 0 ? `${hours} hour` : '',
    minutes > 1 ? `${minutes} minutes` : minutes > 0 ? `${minutes} minute` : '',
    seconds > 1 ? `${seconds} seconds` : seconds > 0 ? `${seconds} second` : ''
  ].filter(time => time != '');
  
  if (times.length == 5) return `${times[0]}, ${times[1]}, ${times[2]}, ${times[3]} and ${times[4]}`;
  if (times.length == 4) return `${times[0]}, ${times[1]}, ${times[2]} and ${times[3]}`;
  if (times.length == 3) return `${times[0]}, ${times[1]} and ${times[2]}`;
  if (times.length == 2) return `${times[0]} and ${times[1]}`;
  if (times.length == 1) return `${times[0]}`;
  return 'now';
}