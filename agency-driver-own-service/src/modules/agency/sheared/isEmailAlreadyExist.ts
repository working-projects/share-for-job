import { ValidatorConstraint, ValidatorConstraintInterface, registerDecorator, ValidationOptions } from "class-validator";
import { Agency } from '../../../entity/Agency';



@ValidatorConstraint({async:true})
export class IsEmailAlreadyExistConstraint implements ValidatorConstraintInterface{

    validate(email:string){
        return Agency.findOne({where:{email}}).then(agency =>{
            if (agency) {
                return false
            }
            return true
        })
    }

}

export function IsEmailAlreadyExist(validationOptions?:ValidationOptions){

    return function (object:Object, propertyName:string) {
        
        registerDecorator({
            target:object.constructor,
            propertyName:propertyName,
            options:validationOptions,
            constraints:[],
            validator:IsEmailAlreadyExistConstraint
        })
    }
}