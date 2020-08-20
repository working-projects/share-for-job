"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsModelAlreadyExist = exports.IsModelNameAlreadyExistConstraint = void 0;
const VehicleBrand_1 = require("../../../entity/VehicleBrand");
const class_validator_1 = require("class-validator");
let IsModelNameAlreadyExistConstraint = class IsModelNameAlreadyExistConstraint {
    validate(name) {
        return VehicleBrand_1.VehicleBrand.findOne({ where: { name } }).then(brand => {
            if (brand) {
                return false;
            }
            return true;
        });
    }
};
IsModelNameAlreadyExistConstraint = __decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsModelNameAlreadyExistConstraint);
exports.IsModelNameAlreadyExistConstraint = IsModelNameAlreadyExistConstraint;
function IsModelAlreadyExist(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsModelNameAlreadyExistConstraint
        });
    };
}
exports.IsModelAlreadyExist = IsModelAlreadyExist;
//# sourceMappingURL=IsModelNameExist.js.map