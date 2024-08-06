class UnionFind {
  private root: number[];
  constructor(length: number) {
    this.root = Array.from({ length }, (_, i) => i);
  } 

  public find = (a: number) => {
    return this.root[a];
  }

  public union(a: number, b: number) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA !== rootB) {
      for (let i = 0; i < this.root.length; i++) {
        if (this.root[i] === rootB) {
          this.root[i] = rootA;
        }
      }
    }
  }

  public connected(a: number, b: number) {
    return this.find(a) === this.find(b);
  }
}

const set = new UnionFind(10);

set.union(0, 1);
set.union(0, 2);
set.union(0, 3);
set.union(0, 4);
set.union(0, 5);
set.union(6, 7);
set.union(9, 8);
set.union(9, 0);

console.log(set);