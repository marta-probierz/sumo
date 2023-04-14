import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OurWorkService {
  ourWorkLogosData = [
    {
      id: 1,
      img: '../../assets/logo/AWE-Tuning.png',
      alt: 'AWE Tuning',
      industry: 'Consumer Goods',
    },
    {
      id: 2,
      img: '../../assets/logo/Art-in-the-Age.jpeg',
      alt: 'Art In The Age',
      industry: 'Food',
    },
    {
      id: 3,
      img: '../../assets/logo/Bonobos.png',
      alt: 'Bonobos',
      industry: 'Apparel',
    },
    {
      id: 4,
      img: '../../assets/logo/Booze-Carriage.png',
      alt: 'Booze Carriage',
      industry: 'Hospitality',
    },
    {
      id: 5,
      img: '../../assets/logo/Carrot-Creative.png',
      alt: 'Carrot Creative',
      industry: 'Mass Media',
    },
    {
      id: 6,
      img: '../../assets/logo/Citibike.png',
      alt: 'Citibike',
      industry: 'Transport',
    },
    {
      id: 7,
      img: '../../assets/logo/Fox-River.png',
      alt: 'Fox River',
      industry: 'Apparel',
    },
    {
      id: 8,
      img: '../../assets/logo/Frameology.png',
      alt: 'Frameology',
      industry: 'Apparel',
    },
    {
      id: 9,
      img: '../../assets/logo/Infinite-Body-Piercing.png',
      alt: 'Infinite Body Piercing',
      industry: 'Service',
    },
    {
      id: 10,
      img: '../../assets/logo/Listrak.png',
      alt: 'Listrak',
      industry: 'Service',
    },
    {
      id: 11,
      img: '../../assets/logo/Midwest-Supplies.png',
      alt: 'Midwest Supplies',
      industry: 'Food',
    },
    {
      id: 12,
      img: '../../assets/logo/Milagro-Tequila.png',
      alt: 'Milagro Tequila',
      industry: 'Food',
    },
    {
      id: 13,
      img: '../../assets/logo/Moscot.png',
      alt: 'Moscot',
      industry: 'Consumer Goods',
    },
    {
      id: 14,
      img: '../../assets/logo/Nicole-Miller.png',
      alt: 'Nicole Miller',
      industry: 'Apparel',
    },
    {
      id: 15,
      img: '../../assets/logo/Olark.png',
      alt: 'Olark',
      industry: 'Computer',
    },
    {
      id: 16,
      img: '../../assets/logo/Pet-360.png',
      alt: 'Pet 360',
      industry: 'Food',
    },
    {
      id: 17,
      img: '../../assets/logo/Pitney-Bowes.png',
      alt: 'Pitney Bowes',
      industry: 'Service',
    },
    {
      id: 18,
      img: '../../assets/logo/RJ-Metrics.png',
      alt: 'RJ Metrics',
      industry: 'Computer',
    },
    {
      id: 19,
      img: '../../assets/logo/Raising-Canes.png',
      alt: 'Raising Canes',
      industry: 'Food',
    },
    {
      id: 20,
      img: '../../assets/logo/Roar-for-Good.png',
      alt: 'Roar For Good',
      industry: 'Consumer Goods',
    },
    {
      id: 21,
      img: '../../assets/logo/Rogue-Fitness.png',
      alt: 'Rogue Fitness',
      industry: 'Manufacturing',
    },
    {
      id: 22,
      img: '../../assets/logo/Roku.png',
      alt: 'Roku',
      industry: 'Mass Media',
    },
    {
      id: 23,
      img: '../../assets/logo/Sailor-Jerry.png',
      alt: 'Sailor Jerry',
      industry: 'Food',
    },
    {
      id: 24,
      img: '../../assets/logo/Seer-Interactive.png',
      alt: 'Seer Interactive',
      industry: 'Mass Media',
    },
    {
      id: 25,
      img: '../../assets/logo/Softer-Ware.png',
      alt: 'Softer Ware',
      industry: 'Computer',
    },
    {
      id: 26,
      img: '../../assets/logo/Sourpuss.png',
      alt: 'Sourpuss',
      industry: 'Apparel',
    },
    {
      id: 27,
      img: '../../assets/logo/Stadium-Goods.png',
      alt: 'Stadium Goods',
      industry: 'Apparel',
    },
    {
      id: 28,
      img: '../../assets/logo/Swisco.png',
      alt: 'Swisco',
      industry: 'Construction',
    },
    {
      id: 29,
      img: '../../assets/logo/Tyr.png',
      alt: 'Tyr',
      industry: 'Manufacturing',
    },
    {
      id: 30,
      img: '../../assets/logo/Crafters-box.png',
      alt: 'Crafters Box',
      industry: 'Consumer Goods',
    },
    {
      id: 31,
      img: '../../assets/logo/The-Finals.png',
      alt: 'The Finals',
      industry: 'Apparel',
    },
    {
      id: 32,
      img: '../../assets/logo/Think-Geek.png',
      alt: 'Think Geek',
      industry: 'Entertainment',
    },
    {
      id: 33,
      img: '../../assets/logo/Treehouse.png',
      alt: 'Treehouse',
      industry: 'Entertainment',
    },
    {
      id: 34,
      img: '../../assets/logo/United-by-Blue.png',
      alt: 'United By Blue',
      industry: 'Apparel',
    },
    {
      id: 35,
      img: '../../assets/logo/Wander-Beauty.png',
      alt: 'Wander Beauty',
      industry: 'Health & Beauty',
    },
    {
      id: 36,
      img: '../../assets/logo/Wework.png',
      alt: 'Wework',
      industry: 'Service',
    },
    {
      id: 37,
      img: '../../assets/logo/Zoom.png',
      alt: 'Zoom',
      industry: 'Telecommunications',
    },
    {
      id: 38,
      img: '../../assets/logo/Overtone.png',
      alt: 'OVertone',
      industry: 'Health & Beauty',
    },
  ];

  constructor(private httpService: HttpClient) {}

  getOurWorkCards() {
    return this.httpService.get('../../assets/data/our-work-cards.json');
  }
}
