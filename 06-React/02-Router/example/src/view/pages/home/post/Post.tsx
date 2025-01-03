
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'

const Post = () => {

    const { id } = useParams();
    const [imageUrl, setImageUrl] = useState<string>('')

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${id}/images/random`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImageUrl(data.message)
            })

    }, [id])

    return (
        <div>
            <h1>Some post: {id}</h1>
            <img src={imageUrl} alt={id} />
        </div>
    )
}

export default Post