import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CrearEmpleado } from '../crearempleado/crearempleado';
import { VerEmpleados } from '../verempleados/verempleados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CrearEmpleado;
  tab5Root = VerEmpleados;

  constructor() {

  }
}
