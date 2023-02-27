import { BannerContainer,BannerImage } from "../../styles/Banner"

const WrapperPage = ({path}) =>{
    // console.log('chilren',children)
    return(
        <BannerContainer >
            <BannerImage src={path} />
        </BannerContainer>
    )
}

export default WrapperPage