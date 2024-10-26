// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.
function remove(string: string) {
  const clean = string.replace(/!/g, '').trim();
  return `${clean}!`;
}
