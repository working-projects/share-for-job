
import { buildFederatedSchema } from './buildFederatedSchema'
import { Vehicle } from '../entity/Vehicle';
import { resolveVehicleRefernce } from '../modules/reference/vehicleReference';
import { resolveServiceCtgRefernce } from '../modules/reference/serviceCtgReference';
import { resolveServicePriceRefernce } from '../modules/reference/servicePriceReference';
import { resolveVehicleCtgRefernce } from '../modules/reference/vehicleCtgReference';
import { resolveVehicleQualityRefernce } from '../modules/reference/vehicleQualityReference';


export const FederatedSchema = buildFederatedSchema(
    {
        resolvers: [__dirname + "/../modules/**/*.ts"],
       // authChecker:customRoleChecker
    },
    


    {
        Vehicle: {
            __resolveReference: resolveVehicleRefernce,

            agency(vehicle:Vehicle) {
                return { __typename: "Agency", id: vehicle.agencyId }
            },
            
            driver(vehicle:Vehicle) {
                return { __typename: "Driver", id: vehicle.driverId }
            },

            
        },
        ServiceCategory:{
            __resolveReference: resolveServiceCtgRefernce
        },
        ServicePrice:{
            __resolveReference: resolveServicePriceRefernce
        },
        VehicleCategory:{
            __resolveReference: resolveVehicleCtgRefernce
        },
        VehicleQualityPrice:{
            __resolveReference: resolveVehicleQualityRefernce
        },
    }
)


