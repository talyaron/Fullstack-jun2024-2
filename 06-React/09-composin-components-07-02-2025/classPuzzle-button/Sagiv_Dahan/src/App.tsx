import Button from "./view/components/button/Button"
import { ThumbsUp } from 'lucide-react';

function App() {

    return (
        <>
            <Button text="Like" icon={<ThumbsUp />}></Button>
        </>
    )
}

export default App
