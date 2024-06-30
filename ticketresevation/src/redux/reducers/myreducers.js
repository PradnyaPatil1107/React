import{combineReducers} from 'redux';
import { manageReservationList,manageCancellationList,manageAmount } from './reservationreducers';

const railwaystore=combineReducers({
    resevationList:manageReservationList,
    cancellationList:manageCancellationList,
    amt:manageAmount
})
export default railwaystore;