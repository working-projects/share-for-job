"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsBrandAlreadyExist = exports.IsBrandNameAlreadyExistConstraint = void 0;
const VehicleBrand_1 = require("../../../entity/VehicleBrand");
const class_validator_1 = require("class-validator");
let IsBrandNameAlreadyExistConstraint = class IsBrandNameAlreadyExistConstraint {
    validate(name) {
        return VehicleBrand_1.VehicleBrand.findOne({ where: { name } }).then(brand => {
            if (brand) {
                return false;
            }
            return true;
        });
    }
};
IsBrandNameAlreadyExistConstraint = __decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsBrandNameAlreadyExistConstraint);
exports.IsBrandNameAlreadyExistConstraint = IsBrandNameAlreadyExistConstraint;
function IsBrandAlreadyExist(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsBrandNameAlreadyExistConstraint
        });
    };
}
exports.IsBrandAlreadyExist = IsBrandAlreadyExist;
//# sourceMappingURL=IsBrandNameExist.js.map