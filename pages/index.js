import LayOut from '../src/components/layout'
import styles from '../styles/Home.module.css'
import {  Stack } from '@mui/material'
import Carosel from '../src/lib/carousel'
import BoxProduct from '../src/components/Product/BoxProduct'




export default function Home() {

  return (
    <LayOut>
      <Stack>
        {/* <Carosel/> */}
        <BoxProduct/>
      </Stack>
    </LayOut>
  )
}

// export async function getStaticProps() {
//   const store = initializeStore()
//   store.dispatch(serverRenderClock())
//   return {
//     props: {},
//   }
// }

