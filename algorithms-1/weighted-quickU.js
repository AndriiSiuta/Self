function weightedQuickUnion() {
  // general array with items
  this.id = [];
  // size array to track how much weight is 1 component object
  this.size = [];

  /**
   * @params {number} N length of array
   */
  this.generateArray = (N) => {
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
      this.size[i] = 1;
    }
  }

  /**
   * @param {number} index of start point to find root
   */
  this.findRoot = (i) => {
    while (i != id[i]) {
      i = id[i]
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

  /**
   * @param {number} p - first index
   * @param {number} q - second index 
   */
  this.union = (p, q) => {
    const pRoot = this.findRoot(p);
    const qRoot = this.findRoot(q);

    if (pRoot === qRoot) return;
    if (size[pRoot] < size[qRoot]) {
      this.id[pRoot] = qRoot;
      this.size[qRoot] += this.size[pRoot]
    } else {
      this.id[qRoot] = pRoot;
      this.size[pRoot] += this.size[qRoot];
    }
  }
}