var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CrearEmpleado } from '../crearempleado/crearempleado';
import { VerEmpleados } from '../verempleados/verempleados';
import { Login } from '../login/login';
import { Admin } from '../admin/admin';
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = HomePage;
        this.tab2Root = AboutPage;
        this.tab3Root = ContactPage;
        this.tab4Root = CrearEmpleado;
        this.tab5Root = VerEmpleados;
        this.tab6Root = Login;
        this.tab7Root = Admin;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Component({
        templateUrl: 'tabs.html'
    }),
    __metadata("design:paramtypes", [])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.js.map