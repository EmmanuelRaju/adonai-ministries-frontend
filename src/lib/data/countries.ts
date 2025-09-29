import { countries as data } from 'countries-list';

const _countries = Object.values(data).map((country) => country.name);

export const countries = ['United States', ..._countries.sort((a, b) => a.localeCompare(b))];
