import { Book } from "./Book";

export interface BookRepository {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  create(book: Book): Promise<Book>;
  update(book: Book): Promise<void>;
  delete(book: Book): Promise<void>;
}
