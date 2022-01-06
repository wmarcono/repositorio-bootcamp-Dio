import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';
// var request = require('require');

const app = express();

app.use(usersRoute);

// configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuração das rotas
app.get('/status', (req: Request, res: Response, next: NextFunction)=>{
    res.status(200).send({ foo: 'Sucesso' });
})

// inicialização do servidor
app.listen(3000, ()=>{
    console.log('Aplicação rodando na porta 3000!');
})
