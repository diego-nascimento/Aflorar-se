import {Categoria, CategoriaList} from './CategoryList.style'
import Link from 'next/link'
import { ICategoria } from '../../interfaces/ICategoria'
import {useRouter} from 'next/router'

interface ICategoryList{
  Categorias: Array<ICategoria>
  CategoriaSelected: ICategoria | null
}

const CategoryList: React.FC<ICategoryList> = ({Categorias, CategoriaSelected}) =>{
  const Router = useRouter()

  return(
    <CategoriaList>
    <Link href={`/blog`}>
      <a>
      <Categoria active={Router.pathname === '/blog'? true: false}> 
        <span>Inicio</span>
      </Categoria>
      </a>
    </Link> 
    {Categorias && Categorias.map((categoria: ICategoria) =>{
      return(
        <Link href={`/blog/categoria/${categoria.id}?categoria=${categoria.name}`} key={categoria.id}>
          <a>
            <Categoria active={CategoriaSelected === null || CategoriaSelected.id !== categoria.id ? false: true}> 
              <span>{categoria.name}</span>
            </Categoria>
          </a>
        </Link> 
      )
    })}
  </CategoriaList>
  )
}

export default CategoryList