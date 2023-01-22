function solution(n) {
  return Number(
    [...n.toString()]
      .map((a) => Number(a))
      .sort((a, b) => b - a)
      .join("")
  );
}
