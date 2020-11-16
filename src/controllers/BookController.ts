import { TYPE } from "./../constants/types";
import { BookService } from "./../services/bookService";
import * as express from "express";
import {
  controller,
  httpGet,
  httpPost,
  response,
  request,
  requestParam,
  requestBody,
} from "inversify-express-utils";
import { Book } from "../entities/book.entity";
import { inject } from "inversify";

@controller("/api/books")
export class BookController {
  private constructor(
    @inject(TYPE.BookService)
    private bookService: BookService
  ) {}
  @httpGet("/")
  async getBooks(@response() res: express.Response) {
    try {
      return await this.bookService.getBooks();
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
  @httpPost("/create")
  async createBook(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    if (!(typeof req.body.title === "string") || req.body.title.length < 1) {
      res.status(400);
      res.send("Invalid Book!");
    }
    try {
      let newBook = new Book();
      // const {title, author, genre, description, year} = newBook
      newBook.title = req.body.title;
      newBook.author = req.body.author;
      newBook.genre = req.body.genre;
      newBook.description = req.body.description;
      newBook.year = req.body.year;
      return await this.bookService.createBook(newBook);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
}
