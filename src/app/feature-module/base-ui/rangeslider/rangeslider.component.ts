import { Component } from '@angular/core';
@Component({
  selector: 'app-rangeslider',
  templateUrl: './rangeslider.component.html',
  styleUrls: ['./rangeslider.component.scss'],
})
export class RangesliderComponent {
  value = 100;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  formatLabel1(value: number): string {
    // if (value >= 1000) {
    //   return Math.round(value / 1000) + 'k';
    // }
    switch (value) {
      case 1:
        return 'Jan';

      case 2:
        return 'Feb';

      case 3:
        return 'Mar';

      case 4:
        return 'Apr';

      case 5:
        return 'May';

      case 6:
        return 'Jun';

      case 7:
        return 'July';

      case 8:
        return 'Aug';

      case 9:
        return 'Sep';

      case 10:
        return 'Oct';

      case 11:
        return 'Nov';

      case 12:
        return 'Dec';
    }
    return `${value}`;
  }
}
