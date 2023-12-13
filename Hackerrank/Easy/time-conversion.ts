/** Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */

function timeConversion(s: string): string {
  let time = s.slice(0, -2);
  let ampm = s.slice(-2);

  if (ampm === 'AM' && time.slice(0, 2) === '12') {
    time = '00' + time.slice(2);
  } else if (ampm === 'PM' && time.slice(0, 2) !== '12') {
    time = (parseInt(time.slice(0, 2)) + 12).toString() + time.slice(2);
  }

  return time;
}

function timeConversions(s) {
  const arr = s.slice(0, 8).split(':');
  arr[0] =
    s.indexOf('PM') > -1
      ? arr[0] == 12
        ? '12'
        : Number(arr[0]) + 12
      : arr[0] == 12
      ? '00'
      : arr[0];
  return arr.join(':');
}
