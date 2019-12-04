class StackDataStructure {
  constructor(MAX_SIZE = 10) {
    this.stackControl = [];
    this.MAX_SIZE = MAX_SIZE;
    this.size = 0;
  }
  
  isEmpty() {
    return this.size === 0;
  }

  canPush() {
    return this.size < this.MAX_SIZE;
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl[this.size] = item;
      
    }

    return this.size > this.MAX_SIZE;
  }

  pop() {}
}
