import { Book } from "../entities/book.entity";

export interface IBookRepository {
  getBooks(searchoptions?: any): Promise<Book[]>;
  createBook(book: Book): Promise<Book>;
}
