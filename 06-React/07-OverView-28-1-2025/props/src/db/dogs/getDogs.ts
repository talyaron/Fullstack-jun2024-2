export async function getDogImageFromDB():Promise<string | null> {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        return data.message;
    } catch (error) {
        console.error(error)
        return null;
    }
}