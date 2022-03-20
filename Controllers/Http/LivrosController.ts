import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from '@ioc:Adonis/Core/View'
import Livro from 'App/Models/Livro'

export default class LivrosController {
  public async index({ }: HttpContextContract) {
    const livros = await Livro.all()

    return View.render('index', {livros: livros})
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['titulo', 'genero', 'autor', 'ano', 'classficacao', 'resumo', 'image'])

    await Livro.create(data)

    const livros = await Livro.all() 

    return View.render('index', {livros: livros})
  }

  public async show({ params }: HttpContextContract) {
    const livro = await Livro.findOrFail(params.id)

    return View.render('livros/show', { livro: livro })
  }

  public async update({ request, params }: HttpContextContract) {
    const livro = await Livro.findOrFail(params.id)
    const data = request.only(['titulo', 'genero', 'autor', 'ano', 'classficacao', 'resumo', 'image'])


    livro.merge(data)


    await livro.save()


    return View.render('index')
  }

  public async destroy({ params }: HttpContextContract) {
    const livro = await Livro.findOrFail(params.id)

    await livro.delete()
  }
}
