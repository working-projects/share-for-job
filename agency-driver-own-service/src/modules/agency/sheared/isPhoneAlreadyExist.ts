import { ValidatorConstraint, ValidatorConstraintInterface, registerDecorator, ValidationOptions } from "class-validator";
import { Agency } from '../../../entity/Agency';



@ValidatorConstraint({async:true})
export class IsPhoneAlreadyExistConstraint implements ValidatorConstraintInterface{

    validate(phoneNumber:string){
        return Agency.findOne({where:{phoneNumber}}).then(agency =>{
            if (agency) {
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