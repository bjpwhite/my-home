//同步action返回值为Objact
import { CRUD_TOGGLE_IS_SUBMITTING } from "../../constants/CRUD";
export const toggleIsSubmitting = (isSubmitting: boolean) => {
    return {
        type: CRUD_TOGGLE_IS_SUBMITTING,
        isSubmitting: isSubmitting,
    };
};
