import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (const match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    manUnitedWins += 1;
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    manUnitedWins += 1;
}

console.log(`manUnitedWins - ${manUnitedWins}`);
