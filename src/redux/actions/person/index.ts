//同步action返回值为Objact
import { PERSON_DATA } from "../../constants/person";
const setPersonData = (personData: object) => ({type: PERSON_DATA, personData: personData})

const getPersonData = () => {
    return (dispatch: (arg0: { personData: object; type: string }) => void) => {
        const personData = {
            name: "Helen",
            age: 18,
            sex: "female",
        };
        console.log(personData);
        dispatch(setPersonData(personData));
    }
};
//暴露这3个动作，到时候给容器组件使用
export {
    setPersonData,
    getPersonData,
};
