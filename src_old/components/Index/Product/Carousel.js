// import Image from 'next/image';
// import Carousel from 'react-multi-carousel';
// import "react-multi-carousel/lib/styles.css";

// const CarouselService = ({ data }) => {
//     // console.log('data',data)
//     const Responsive = {
//         // superLargeDesktop: {
//         //     // the naming can be any, depends on you.
//         //     breakpoint: { max: 4000, min: 200 },
//         //     items: 1
//         // },
//         desktop: {
//             breakpoint: {
//                 max: 3000,
//                 min: 1024
//             },
//             items: 1
//         },
//         mobile: {
//             breakpoint: {
//                 max: 464,
//                 min: 0
//             },
//             items: 1
//         },
//         tablet: {
//             breakpoint: {
//                 max: 1024,
//                 min: 464
//             },
//             items: 1
//         }
//     }
//     return (
//         <Carousel
//             additionalTransfrom={0}
//             arrows={false}
//             showDots={false}
//             autoPlaySpeed={1000}
//             centerMode={false}
//             className=""
//             containerClass="container"
//             dotListClass=""
//             draggable
//             focusOnSelect={false}
//             infinite
//             itemClass=""
//             keyBoardControl
//             minimumTouchDrag={80}
//             pauseOnHover
//             renderArrowsWhenDisabled={false}
//             renderButtonGroupOutside={false}
//             renderDotsOutside={false}
//             responsive={Responsive}
//             rewind={false}
//             rewindWithAnimation={false}
//             rtl={false}
//             shouldResetAutoplay
//             sliderClass=""
//             slidesToSlide={1}
//             swipeable
//         >
//             {data.map((e) => 
//             <Image
//             key={e.subid}
//             src={e.imagePath}
//             height={300} 
//             width={500}
//             alt={e.title}
//             sizes="(max-width: 768px) 100vw,
//             (max-width: 1200px) 50vw,
//             33vw"
//             />
//                 // <img
//                 //     key={e.subid}
//                 //     src={e.imagePath}
//                 //     style={{
//                 //         display: 'block',
//                 //         height: '100%',
//                 //         margin: 'auto',
//                 //         width: '100%'
//                 //     }}
//                 // />
//             )}
//         </Carousel>
//     )
// }

// export default CarouselService