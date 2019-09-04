import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const loadData = (dataType) => ({
    type: ActionsTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
});
