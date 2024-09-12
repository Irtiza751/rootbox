export class Query {
  private query: string = "";
  private columns: string = "";
  private table: string = "";
  private predicate: string = "";

  select(...args: string[]) {
    this.columns = args.join(", ");
    return this;
  }

  from(table: string) {
    this.table = table;
    return this;
  }

  where(predicate: string) {
    this.predicate = predicate;
    return this;
  }

  build() {
    this.query = `SELECT ${this.columns} FROM ${this.table}`;
    if (this.predicate) this.query += ` WHERE ${this.predicate}`;
    return this.query;
  }
}
