// https://www.codewars.com/kata/51fda2d95d6efda45e00004e
// 4 KYU

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }
  
  incProgress(rank) {
    if (rank < -8 || rank > 8 || rank == 0) throw 'error';
    
    let inc = 0;
    if (rank == this.rank-1 || (this.rank == 1 && rank == -1)) inc = 1;
    else if (rank == this.rank) inc = 3;
    else if (rank > this.rank) {
      let diff = rank-this.rank;
      if (rank > 0 && this.rank < 0) diff -= 1;
      inc = 10 * diff * diff;
    }
    
    this.progress += inc;
    while (this.progress >= 100) {
      this.progress -= 100;
      this.rank += 1;
      if (this.rank == 0) this.rank = 1;
    }
    
    if (this.rank >= 8) {
      this.rank = 8;
      this.progress = 0;
    }
  }
}