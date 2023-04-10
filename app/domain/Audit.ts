export class Audit {
  writeUId: string;
  createUId: string;
  writeAt: string;
  createAt: string;
  deletedAt: string;

  constructor(writeUId, createUId, writeAt, createAt, deletedAt) {
    this.writeUId = writeUId;
    this.createUId = createUId;
    this.writeAt = writeAt;
    this.createAt = createAt;
    this.deletedAt = deletedAt;
  }

  static __fields__() {
    return ["writeUId", "createUId", "writeAt", "createAt", "deletedAt"];
  }
}
