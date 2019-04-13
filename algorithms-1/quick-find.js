function QuickFind () {
  this.id = [];

  /**
   * @param {N} length of the created array
   */
  this.generateArray = function(N = 1) {
    this.id = new Array(N);
    for(let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }

  /**
   * @param {p} number first index
   * @param {q} number second index
   * @return {result} boolean
   */
  this.connected = function(p, q) {
    return this.id[p] === this.id[q];
  }

  // Find all entries with id of p and change it q id
  this.union = function(p, q) {
    const pid = this.id[p];
    const qid = this.id[q];
    
    for(let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) this.id[i] = qid;
    }
  }
}

let quickFind = new QuickFind();
quickFind.generateArray(10);
console.log(quickFind.id); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
quickFind.union(1, 2);
console.log(quickFind.id); // [ 0, 2, 2, 3, 4, 5, 6, 7, 8, 9 ]
quickFind.union(1, 9);
console.log(quickFind.id); // [ 0, 9, 9, 3, 4, 5, 6, 7, 8, 9 ]