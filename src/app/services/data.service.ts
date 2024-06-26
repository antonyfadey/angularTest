import { Injectable } from '@angular/core';
import { Measure } from '../models/measure.model';

interface Facility {
  name: string;
  u: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private facilities: Facility[] = [
    { name: 'РТСН/НН-1', u: '6' },
    { name: 'РТСН/НН-2', u: '6' },
    { name: 'БТ1/НН-2', u: '10.5' },
    { name: 'БТ-1/ВН', u: '110' },
  ];

  getFacilities(): Facility[] {
    return this.facilities;
  }

  private measures: Measure[] = [
    {
      id: '1',
      date: '30.07.2022',
      time: '10:15:23',
      source: 'Оператор',
      phase: '—',
    },
    {
      id: '2',
      date: '30.07.2022',
      time: '10:08:44',
      source: 'Оператор',
      phase: '—',
    },
    {
      id: '3',
      date: '29.07.2022',
      time: '15:08:44',
      source: 'Оператор',
      phase: 'a',
      U: '1',
      I: '0.5',
      P: '3',
      Q: '0.7',
      cos: '0.67',
    },
  ];

  createMeasure(createObject: Measure) {
    createObject.id = Math.random().toString();
    this.measures.push(createObject);
  }

  updateMeasure(measure: Measure) {
    let index = this.measures.findIndex((item) => item.id === measure.id);

    if (index !== -1) this.measures[index] = measure;
  }

  deleteMeasures(measures: Measure[]): Measure[] {
    return (this.measures = this.measures.filter(
      (item) => !measures.includes(item)
    ));
  }

  getMeasures(): Measure[] {
    return this.measures;
  }
  constructor() {}
}
