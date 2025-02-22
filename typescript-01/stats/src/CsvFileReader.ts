import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public file: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.file, { encoding: 'utf-8' })
      .split('\n')
      .map((item: string): string[] => {
        return item.split(',');
      });
  }
}
