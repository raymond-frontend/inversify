import { BookRepository } from "./../repository/book-repo";
import { BookServiceInterface } from "./../repository/book-service.interface";
import { inject, injectable } from "inversify";
import { Book } from "../entities/book.entity";
import { TYPE } from "../constants/types";

@injectable()
export class BookService implements BookServiceInterface {
  public constructor(
    @inject(TYPE.BookRepository)
    private readonly bookRepository: BookRepository
  ) {}

  /**
   * call the bookrepository's getbooks method to retrieve books *
   * @type Book[]
   */

  async getBooks(searchoptions?: any): Promise<Book[]> {
    const books = await this.bookRepository.getBooks(searchoptions);
    return books;
  }

  /**
   * call the bookrepository's createBook method to create a new book*
   * @param book
   * @type Book
   */

  async createBook(book: Book): Promise<Book> {
    const newBook = await this.bookRepository.createBook(book);
    return newBook;
  }
}
