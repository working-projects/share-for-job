import { VehicleBrand } from '../../../entity/VehicleBrand';
import { ValidatorConstraint, ValidatorConstraintInterface, registerDecorator, ValidationOptions } from "class-validator";




@ValidatorConstraint({async:true})
export class IsModelNameAlreadyExistConstraint implements ValidatorConstraintInterface{

    validate(name:string){
        return VehicleBrand.findOne({where:{name}}).then(brand =>{
            if (brand) {
                return false
            }
            return true
        })
    }

}

export function IsModelAlreadyExist(validationOptions?:ValidationOptions){

    return function (object:Object, propertyName:string) {
        
        registerDecorator({
            target:object.constructor,
            propertyName:propertyName,
            options:validationOptions,
            constraints:[],
            validator:IsModelNameAlreadyExistConstraint
        })
    }
}