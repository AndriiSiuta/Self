function QuickUnion () {
  this.id = [];

  /**
   * 
   * @param {number} N - length of the generatedArray 
   */
  this.generateArray = (N) => {
      for (let i = 0; i < N; i++) {
          this.id[i] = i;
      }
  }

  /**
   * 
   * @param {number} i indetificator of current index element 
   */
   this.root = (i) => {
      while (i != id[i]) {
          i = this.id[i];
      }

      return i;
  }

  /**
   * 
   * @param {number} p - index of p-element 
   * @param {number} q - index of q-element
   */
   this.connected = (p, q) => {
      return root(q) === root(p);
  }

  function union(p, q) {
      let pId = root(p);
      let qId = root(q);
      this.id[pId] = qId;
  }
}

let quickUnion = new QuickUnion();
quickUnion.generateArray(10);
console.log(quickUnion.id);