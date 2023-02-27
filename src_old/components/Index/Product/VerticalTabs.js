// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Image from 'next/image';
// import { Grid } from '@mui/material';
// import ProductImg from './productImg';
// import useDialogModal from '../../../../hooks/useDialogModal';
// import { useState } from 'react';


// export default function VerticalTabs({ product }) {
//     const [value, setValue] = useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductImg);

//     // console.log('product', value)

//     return (

//         <Grid container spacing={2}>
//             <Grid item xs={12} sx={{textAlign : 'center'}}>
//                 <Image onClick={()=>showProductDetailDialog()} src={product.PathImg[value].v} alt={product.PathImg[value].v} priority width={400} height={300} />
//             </Grid>
//             <Grid item xs={12}>
//                 <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     variant="scrollable"
//                     scrollButtons="auto"
//                     aria-label="scrollable auto tabs example"
//                 >
//                     {product.PathImg.map((e, i) => <Tab key={e.k} icon={<Image src={e.v} priority alt={e.v} width={120} height={120} />} />)}
//                 </Tabs>
//             </Grid>
//             <ProductDetailDialog product={product.PathImg[value].v}/>
//         </Grid>
//     )
// }