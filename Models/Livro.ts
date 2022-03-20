import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public titulo: string

  @column()
  public genero: string

  @column()
  public autor: string

  @column()
  public ano: Date

  @column()
  public classficacao: number

  @column()
  public resumo: string

  @column()
  public image: string
  
}
