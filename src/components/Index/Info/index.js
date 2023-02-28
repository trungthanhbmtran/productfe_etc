import { Typography } from "@mui/material"
import WrapperInfo from "../../Container/WrapperInfo"
import { NewsData } from "../../../../data/NewsData"
import Card from "../../Container/Card"

const Info = () => {
    return (
        <WrapperInfo tittle="Tin tức">
            {NewsData.map(e => 
            <Card
                 key={e.id}
                // productId={e.id}
                path={`/post/${e.group}/${e.id}`}
                // path={`/post/${e.group}/${e.id}`}
                PathImg={e.imagePath}
                name={e.title}
                description={e.description}
                // brand={e.group}
            />
            
            )}
         
        </WrapperInfo>
    )
}

export default Info