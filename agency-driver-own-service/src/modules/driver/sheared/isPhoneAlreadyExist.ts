import { ValidatorConstraint, ValidatorConstraintInterface, registerDecorator, ValidationOptions } from "class-validator";
import { Driver } from '../../../entity/Driver';



@ValidatorConstraint()
export class IsPhoneAlreadyExistConstraint implements ValidatorConstraintInterface{

    validate(phoneNumber:string){
        return Driver.findOne({where:{phoneNumber}}).then(driver =>{
            if (driver) {
                return false
            }
            return true
        })
    }

}

export function IsPhoneAlreadyExist(validationOptions?:ValidationOptions){

    return function (object:Object, propertyName:string) {
        
        registerDecorator({
            target:object.constructor,
            propertyName:propertyName,
            options:validationOptions,
            constraints:[],
            validator:IsPhoneAlreadyExistConstraint
        })
    }
}