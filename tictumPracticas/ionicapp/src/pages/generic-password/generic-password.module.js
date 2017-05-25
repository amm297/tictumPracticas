var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenericPasswordPage } from './generic-password';
var GenericPasswordPageModule = (function () {
    function GenericPasswordPageModule() {
    }
    return GenericPasswordPageModule;
}());
GenericPasswordPageModule = __decorate([
    NgModule({
        declarations: [
            GenericPasswordPage,
        ],
        imports: [
            IonicPageModule.forChild(GenericPasswordPage),
        ],
        exports: [
            GenericPasswordPage
        ]
    })
], GenericPasswordPageModule);
export { GenericPasswordPageModule };
//# sourceMappingURL=generic-password.module.js.map