export class Query {
  private query: string = "";
  private columns: string = "";
  private table: string = "";

  select(...args: string[]) {
    this.columns = args.join(", ");
    return this;
  }

  from(table: string) {
    this.table = table;
    return this;
  }

  build() {
    this.query = `SELECT ${this.columns} FROM ${this.table}`;
    return this.query;
  }
}
