export class Query {
  private query: string = "";
  private columns: string = "";
  private table: string = "";
  private where: string = "";

  select(...args: string[]) {
    this.columns = args.join(", ");
    return this;
  }

  from(table: string) {
    this.table = table;
    return this;
  }

  where(predicate: string) {
    this.where = table;
    return this;
  }

  build() {
    this.query = `SELECT ${this.columns} FROM ${this.table}`;
    if(this.where) this.query += ` WHERE ${this.where}`;
    return this.query;
  }
}
