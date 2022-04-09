import '../styles/globals.css'
import 'antd/dist/antd.css'
import { wrapper } from '../redux/store'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
