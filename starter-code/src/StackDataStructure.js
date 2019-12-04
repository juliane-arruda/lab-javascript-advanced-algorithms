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
      this.size += 1;
    } else {
      return `Stack Overflow`;
    }
    return this.stackControl;
  }

  pop() {
    if (this.isEmpty()) {
      return `Stack Underflow`
    }
    const lastIdemIdx = this.size - 1;
    const lastIdemArry = this.stackControl.splice(lastIdemIdx, 1);
    this.size -= 1;
    return lastIdemArry [0];
  }
}
