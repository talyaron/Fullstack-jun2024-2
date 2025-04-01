import Todos from "../../model/todos/todosModel";


export async function getUserTodos(req: any, res: any) {
    /*try {
        const { user } = req.cookies;
        console.log(user);
        //decode the token
        const decoded = jwt.decode(user, secret);
        console.log(decoded);


        const _products = await PurchaseModel.find({ clientId: decoded.id }).populate('productId');
        const products = _products.map((product: any) => product.productId);


        res.json({ message: "Get all products", useId: user, products });


    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
    }*/
}

export async function getTodos(req: any, res: any) {
    try {
        const todos = await Todos.find();
        res.status(200).send({todos});
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
    }
}

export async function getTodoState(req: any, res: any) {
    try {
        const { id } = req.body;
        console.log(id);
        
        const todo = await Todos.findById(id);
        if (!todo) throw new Error("Task not found!");

        res.status(200).json({ state: todo.ifDone });
    } 
    catch (error: any)
    {
        console.log(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
    }
}