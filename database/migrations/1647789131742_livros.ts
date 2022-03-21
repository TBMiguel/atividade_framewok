import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Livros extends BaseSchema {
  protected tableName = 'livros'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments()
      table.string('titulo');
      table.string('genero');
      table.string('autor');
      table.date('ano');
      table.integer('classficacao');
      table.text('resumo', 'longtext');
      table.text('image');
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
