import {GlobalStyles} from '../styles/globalStyles'
import type { AppProps } from 'next/app'
import {MenuStorage} from '../Contexts/MenuContexts'
import {LoadingStorage} from '../Contexts/LoadingContext'

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingStorage>
      <MenuStorage>
        <GlobalStyles />
        <Component {...pageProps} />
      </MenuStorage>
    </LoadingStorage>
  )
}
export default MyApp
