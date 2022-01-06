import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';


const usersRoute = Router();

// get /users
// get / users/:uuid 
// post /users 
// put /users/:uuid 
// delete /users/:uuid 

let users = [{
    uuid: '1',
    username: 'wmarcono',
    senha: '1234'
}];

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction)=>{
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request< {uuid:string } >, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    res.sendStatus(StatusCodes.OK);
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction)=>{
    const newUser = req.body;
    console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser);
})

export default usersRoute;