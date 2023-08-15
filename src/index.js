module.exports = function reverse (n) {
  let a = String(Math.abs(n)).split('');
  let b = a.reverse();
  let c = b.join('');
  return c - 0;
}
