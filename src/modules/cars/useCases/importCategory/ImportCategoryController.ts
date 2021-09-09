import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './importCategoryUseCase';
//import { container } from 'tsyringe';

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {};
    handle(request: Request, response: Response): Response {
        const { file } = request;
        console.log(file);

        return response.send();
    }
}

export { ImportCategoryController };