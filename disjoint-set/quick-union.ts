class UnionFind {
  private root: number[];
  constructor(length: number) {
    this.root = Array.from({ length }, (_, i) => i);
  } 

  public find = (a: number): number => {
    while (a !== this.root[a]) {
      a = this.root[a];
    }

    return a;
  }

  public union(a: number, b: number): void {
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

const uf = new UnionFind(10);
// 1-2-5-6-7 3-8-9 4
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(uf);
console.log(uf.connected(1, 5)); // true
console.log(uf.connected(5, 7)); // true
console.log(uf.connected(4, 9)); // false
// 1-2-5-6-7 3-8-9-4
uf.union(9, 4);
console.log(uf);
console.log(uf.connected(4, 9)); // true
