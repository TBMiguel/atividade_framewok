import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from '@ioc:Adonis/Core/View'
import Livro from 'App/Models/Livro'

export default class LivrosController {
  public async index({ }: HttpContextContract) {  //Metodo Index retorna todos os livros do banco
    const livros = await Livro.all()

    return View.render('index', {livros: livros})
  }

  public async store({ request, response }: HttpContextContract) { //Metodo Store, persiste todas as informações no banco de dados
    const data = request.only(['titulo', 'genero', 'autor', 'ano', 'classficacao', 'resumo', 'image'])  // Pega request das informções a serem guardadas

    await Livro.create(data)

    return response.redirect().toRoute('/')
  }

  public async show({ params }: HttpContextContract) { // Metodo show, mostra um livro em especifico (Pelo id)
    const livro = await Livro.findOrFail(params.id)

    return View.render('livros/show', { livro: livro })
  }

  public async updateForm({ params , view }: HttpContextContract) { //Metodo updateForm retorna o formulario de alteração
    const livro = await Livro.findOrFail(params.id)

    return view.render('livros/update', {livro: livro})
  }

  public async update({ params , request, response }: HttpContextContract) { // Metodo que atualiza as informações de um livro
    const livro = await Livro.findOrFail(params.id)
    const data = request.only(['genero', 'classficacao', 'resumo', 'image'])

    livro.merge(data)  // Modifica apenas os elementos especificados

    await livro.save() // Salva informações

    return response.redirect().toRoute('/') // Redireciona ao index
  }

  public async destroy({ params, response }: HttpContextContract) { // Metodo de deleção de livros
    const livro = await Livro.findOrFail(params.id)   // Procura livro pelo id

    await livro.delete() //deleta livro

    return response.redirect().toRoute('/') // Redireciona
  }
}
