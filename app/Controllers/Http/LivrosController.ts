import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Livro from 'App/Models/Livro'

export default class LivrosController {
  public async index({}: HttpContextContract) {
    const livros = await Livro.all()

    return livros
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const data = request.only(['titulo', 'genero', 'autor', 'anoMes', 'classficacao', 'resumo'])
    const livro = await Livro.create(data)

    return livro
  }

  public async show({ params }: HttpContextContract) {
    const livro = await Livro.findOrFail(params.id)

    return livro
  }

  public async edit({}: HttpContextContract) {}

  public async update({request, params}: HttpContextContract) {
    const livro = await Livro.findOrFail(params.id)
    const data = request.only(['id','titulo', 'genero', 'autor', 'anoMes', 'classficacao', 'resumo'])

    livro.merge(data)

    await livro.save()

    return livro
  }

  public async destroy({ params }: HttpContextContract) {
    const livro = await Livro.findOrFail(params.id)

    await livro.delete()
  }
}
