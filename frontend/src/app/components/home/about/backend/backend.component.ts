import { Component } from '@angular/core';
import { SqlIconComponent } from '../../../icons/sql-icon/sql-icon.component';
import { JavascriptIconComponent } from '../../../icons/javascript-icon/javascript-icon.component';
import { PhpIconComponent } from '../../../icons/php-icon/php-icon.component';
import { NodejsIconComponent } from '../../../icons/nodejs-icon/nodejs-icon.component';
import { MysqlIconComponent } from '../../../icons/mysql-icon/mysql-icon.component';
import { MongodbIconComponent } from '../../../icons/mongodb-icon/mongodb-icon.component';

@Component({
  selector: 'app-backend',
  imports: [
    SqlIconComponent,
    JavascriptIconComponent,
    PhpIconComponent,
    NodejsIconComponent,
    MysqlIconComponent,
    MongodbIconComponent,
  ],
  template: `
    <h3 class="font-robotoregular text-2xl font-semibold mb-4 tracking-widest">
      Backend
    </h3>
    <p>
      Je maitrise les outils requis pour construire des serveurs rapides et
      sécurisés, et la conception de bases de données optimisées lorsque les
      besoins du projet l'exigent.
    </p>
    <h4 class="font-robotoregular text-xl font-medium mt-8 mb-4 tracking-wide">
      Langages
    </h4>
    <ul class="flex flex-row flex-wrap justify-start gap-4">
      <li>
        <app-sql-icon />
        <p>SQL</p>
      </li>
      <li>
        <app-javascript-icon />
        <p>Javascript</p>
      </li>
      <li>
        <app-php-icon />
        <p>PHP</p>
      </li>
    </ul>

    <h4 class="font-robotoregular text-xl font-medium mt-8 mb-4 tracking-wide">
      Outils favoris
    </h4>
    <ul class="flex flex-row flex-wrap justify-start gap-4">
      <li>
        <app-nodejs-icon />
        <p>NodeJs</p>
      </li>
      <li>
        <app-mysql-icon />
        <p>MySQL</p>
      </li>
      <li>
        <app-mongodb-icon />
        <p>MongoDB</p>
      </li>
    </ul>
  `,
  styles: ``,
})
export class BackendComponent {}
