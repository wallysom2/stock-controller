import { Request, Response } from 'express';
import { EstoqueService } from '../services/estoque.service';

export class EstoqueController {
    private estoqueService: EstoqueService;

    constructor(estoqueService: EstoqueService) {
        this.estoqueService = estoqueService;
    }

    async adicionar(req: Request, res: Response) {
        try {
            const { nome, quantidade } = req.body;
            await this.estoqueService.adicionar(nome, quantidade);
            res.status(201).send(`Item ${nome} adicionado com sucesso`);
        } catch (err) {
            res.status(500).send(`Erro ao adicionar item: ${err.message}`);
        }
    }

    async consultar(req: Request, res: Response) {
        try {
            const result = await this.estoqueService.consultar();
            res.status(200).json(result);
        } catch (err) {
            res.status(500).send(`Erro ao consultar estoque: ${err.message}`);
        }
    }
}
