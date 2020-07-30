import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../PageDefault'
import FormField from '../../../FormField'
// import Form from './styles'

function CadastroCategoria() {
    const valorInicial = {
        nome: '',
        descricao:'',
        cor:'#000',
    }

    const [values, setValues ] = useState(valorInicial)
    const [categorias, setCategorias] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setCategorias([
            ...categorias,
            values
        ]);
        setValues(valorInicial)
    }

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setValue( name, value )
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
            <hr/>
            
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormField 
                    label="Nome"
                    type="text"
                    name="nome"
                    value={values.nome}
                    placeholder="Nome da Categoria"
                    onChange={handleChange}
                />
                
                <FormField 
                    label="Descrição"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    placeholder="Descrição da Categoria"
                    onChange={handleChange}
                />
                
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <div>
                <ul>
                    {categorias.map((categoria, indice) => {
                        return (
                            <li key={indice} >
                                {categoria.nome} | {categoria.descricao} | {categoria.cor}
                            </li>
                        )
                    }

                    )}
                </ul>
            </div>

            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria