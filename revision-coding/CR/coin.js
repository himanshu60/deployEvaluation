function printout(a, b, c, n) {
  while (n != 0) {
    let min = Math.min(a, b, c);//10
    if (min == a) {
      a++;
    } else if (min == b) {
      b++;
    } else {
      c++;
    }
    n--;
  }
  if (a == b && b == c && a == c) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
printout(10, 20, 10, 20);
