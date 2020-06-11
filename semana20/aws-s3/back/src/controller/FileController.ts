import { Request, Response } from "express";
import { UserBusiness } from "../business/FileBusiness";


export class FileController {

  public async fileUpload(req: Request, res: Response): Promise<void> {
    try {
      const file = req.files && (req.files.file as any)
      console.log("Files:", req.files) // APAGAR

      if (!file){
        throw new Error("Você precisa enviar um arquivo")
      }

      const s3

    } catch (err) {
      res.status(400).send({
        message: err.message
      })
    }
  }
}