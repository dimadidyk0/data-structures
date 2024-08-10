class UnionFindPathCopmression {
  private root: number[];
  constructor(length: number) {
    this.root = Array.from({ length }, (_, i) => i);
  } 

  public find = (a: number): number => {
    if (a == this.root[a]) {
        return a;
    }
    return this.root[a] = this.find(this.root[a]);
  }

  public union(a: number, b: number) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA !== rootB) {
      this.root[rootB] = rootA;
    }
  }

  public connected(a: number, b: number) {
    return this.find(a) === this.find(b);
  }
}

const setPath = new UnionFindPathCopmression(10);

setPath.union(1, 2);
setPath.union(2, 5);
setPath.union(5, 6);
setPath.union(6, 7);
setPath.union(3, 8);
setPath.union(8, 9);
console.log(setPath.connected(1, 5)); // true
console.log(setPath.connected(5, 7)); // true
console.log(setPath.connected(4, 9)); // false
// 1-2-5-6-7 3-8-9-4
setPath.union(9, 4);
console.log(setPath.connected(4, 9)); // true